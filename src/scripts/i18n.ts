import { translations, type Language } from "../utils/translations";

// Get current language from localStorage or default to English
export const getCurrentLanguage = (): Language => {
  const saved = localStorage.getItem("language") as Language | null;
  return saved || "en";
};

// Update all i18n elements on the page
export const updatePageContent = (lang: Language) => {
  const t = translations[lang];

  // Helper to get nested value from object
  const getNestedValue = (obj: any, path: string): string => {
    return path.split(".").reduce((current, key) => current?.[key], obj) || "";
  };

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) {
      const value = getNestedValue(t, key);
      if (value) {
        // Update text content
        if (el.textContent !== null) {
          el.textContent = value;
        }
      }
    }
  });

  // Update WhatsApp URLs based on language
  document.querySelectorAll("[data-whatsapp-en]").forEach((el) => {
    const urlEn = el.getAttribute("data-whatsapp-en");
    const urlEs = el.getAttribute("data-whatsapp-es");
    if (el instanceof HTMLAnchorElement && urlEn && urlEs) {
      el.href = lang === "en" ? urlEn : urlEs;
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;
};

// Initialize i18n on page load
export const initI18n = () => {
  const currentLang = getCurrentLanguage();
  updatePageContent(currentLang);

  // Listen for language changes
  document.addEventListener("languageChange", ((e: CustomEvent) => {
    updatePageContent(e.detail.language);
  }) as EventListener);
};


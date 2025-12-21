// Translation system
export type Language = "en" | "es";

export interface Translations {
  nav: {
    home: string;
    about: string;
    work: string;
    services: string;
    contact: string;
    contactButton: string;
  };
  hero: {
    title: string;
    subtitle: string;
    button: string;
  };
  about: {
    title: string;
    subtitle: string;
    text: string;
    stats: {
      years: string;
      projects: string;
      specialists: string;
      satisfaction: string;
    };
  };
  work: {
    title: string;
    subtitle: string;
    intro: string;
    projects: {
      kitchen: {
        title: string;
        description: string;
        tag: string;
        duration: string;
      };
      bathroom: {
        title: string;
        description: string;
        tag: string;
        duration: string;
      };
      extension: {
        title: string;
        description: string;
        tag: string;
        duration: string;
      };
    };
  };
  services: {
    title: string;
    subtitle: string;
    intro: string;
    items: {
      kitchens: {
        title: string;
        description: string;
      };
      bathrooms: {
        title: string;
        description: string;
      };
      interior: {
        title: string;
        description: string;
      };
      exterior: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    button: string;
    addressLabel: string;
    contactLabel: string;
    phonePrefix: string;
    emailLabel: string;
    phoneLabel: string;
    socialLabel: string;
    getInTouch: string;
  };
  footer: {
    quickLinks: string;
    socialmedia: string;
    about: string;
    work: string;
    services: string;
    contact: string;
    instagram: string;
    TLH: string;
    copyright: string;
    contactInfo: string;
    address: string;
    email: string;
    phone: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      work: "Work",
      services: "Services",
      contact: "Contact",
      contactButton: "Contact",
    },
    hero: {
      title: "Transform your ideas into extraordinary spaces",
      subtitle:
        "Renovation Ideas offers interior and exterior renovation, creating beautiful and functional spaces with quality craftsmanship.",
      button: "Start your project",
    },
    about: {
      title: "About us",
      subtitle: "Home improvement specialists",
      text: "Welcome to Renovation Ideas, a company that has been transforming homes and spaces for over 10 years. With more than 80 projects completed, we have established ourselves as trusted experts in home improvement. We are dedicated to transforming homes with precision and care, offering first-class craftsmanship and a hassle-free customer experience. Our mission is to make your vision a reality while ensuring clear communication and expert guidance at every step. Let's create a home you'll love!",
      stats: {
        years: "Years of experience",
        projects: "Completed projects",
        specialists: "Specialized tradespeople",
        satisfaction: "Customer satisfaction",
      },
    },
    work: {
      title: "Our Work",
      subtitle: "Get inspired by our work",
      intro:
        "See how we've transformed homes with our expert craftsmanship and attention to detail.",
      projects: {
        kitchen: {
          title: "Modern kitchen refit",
          description:
            "This kitchen transformation brought modern and elegant design and improved functionality to our client's home. We installed custom cabinets, high-quality countertops and state-of-the-art appliances, creating an elegant yet practical space perfect for cooking and entertaining.",
          tag: "Kitchen",
          duration: "4 weeks",
        },
        bathroom: {
          title: "Master bathroom renovation",
          description:
            "We transformed an outdated bathroom into a modern relaxation oasis. Includes luxury tiles, rain shower, freestanding bathtub and first-class finishes that combine elegance with functionality.",
          tag: "Bathroom",
          duration: "3 weeks",
        },
        extension: {
          title: "Kitchen and dining room extension",
          description:
            "We expanded the living space with a bright extension that connects the kitchen to the garden. Open design with large windows, natural lighting and modern finishes that create a cozy and functional environment.",
          tag: "Extension",
          duration: "8 weeks",
        },
      },
    },
    services: {
      title: "Services",
      subtitle: "What we do",
      intro: "Discover which of our services fits your project's needs",
      items: {
        kitchens: {
          title: "Kitchens",
          description:
            "At Renovation Ideas, we design and build impressive kitchens tailored to your style and needs. Whether it's a modern and elegant space or a classic and timeless look, our expert team offers high-quality craftsmanship, functionality and attention to detail to create the heart of your home.",
        },
        bathrooms: {
          title: "Bathrooms",
          description:
            "From luxurious master bathrooms to practical family bathrooms, Renovation Ideas offers beautifully designed spaces that combine style with functionality. We take care of everything, from tiles and fixtures to plumbing and lighting, ensuring a high-quality finish that improves both comfort and aesthetics.",
        },
        interior: {
          title: "Interior",
          description:
            "Transform your home's interior with our comprehensive interior renovation services. From loft conversions and home extensions to complete restorations, Renovation Ideas creates elegant and functional interior spaces that maximize your home's potential, adding value and comfort with expert planning and precision construction.",
        },
        exterior: {
          title: "Exterior",
          description:
            "From driveways and patios to fences and brickwork, Renovation Ideas enhances your home's exterior with durable, high-quality craftsmanship. Whether improving curb appeal or creating a beautiful outdoor space, our team ensures every detail is built to last and designed to impress.",
        },
      },
    },
    contact: {
      title: "Make your House a Home you love.",
      button: "Get started now",
      addressLabel: "Address",
      contactLabel: "Contact",
      phonePrefix: "T:",
      emailLabel: "Email",
      phoneLabel: "Phone",
      socialLabel: "Social",
      getInTouch: "Get in Touch",
    },
    footer: {
      quickLinks: "Quick links",
      socialmedia: "Social Media",
      about: "About us",
      work: "Our work",
      services: "Services",
      contact: "Contact",
      instagram: "Instagram",
      TLH: "Made by TLH Dev",
      copyright: "© 2025 Renovation Ideas. All rights reserved.",
      contactInfo: "Contact Info",
      address: "Address",
      email: "Email",
      phone: "Phone",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Nosotros",
      work: "Trabajos",
      services: "Servicios",
      contact: "Contacto",
      contactButton: "Contactar",
    },
    hero: {
      title: "Transformamos tus ideas en espacios extraordinarios",
      subtitle:
        "Renovation Ideas ofrece renovación de interiores y exteriores, creando espacios hermosos y funcionales con artesanía de calidad.",
      button: "Comienza tu proyecto",
    },
    about: {
      title: "Sobre nosotros",
      subtitle: "Especialistas en mejoras del hogar",
      text: "Bienvenido a Renovation Ideas, una empresa que lleva más de 10 años transformando hogares y espacios. Con más de 80 proyectos completados, nos hemos establecido como expertos de confianza en mejoras del hogar. Estamos dedicados a transformar hogares con precisión y cuidado, ofreciendo artesanía de primera calidad y una experiencia de cliente sin complicaciones. Nuestra misión es hacer realidad tu visión mientras garantizamos una comunicación clara y orientación experta en cada paso. ¡Creemos un hogar que amarás!",
      stats: {
        years: "Años de experiencia",
        projects: "Proyectos completados",
        specialists: "Comerciantes especializados",
        satisfaction: "Satisfacción del cliente",
      },
    },
    work: {
      title: "Trabajos realizados",
      subtitle: "Inspírate con nuestro trabajo",
      intro:
        "Ve cómo hemos transformado hogares con nuestra artesanía experta y atención al detalle.",
      projects: {
        kitchen: {
          title: "Refit de cocina moderna",
          description:
            "Esta transformación de cocina trajo diseño moderno y elegante y funcionalidad mejorada al hogar de nuestro cliente. Instalamos gabinetes personalizados, encimeras de alta calidad y electrodomésticos de última generación, creando un espacio elegante pero práctico perfecto para cocinar y entretener.",
          tag: "Cocina",
          duration: "4 semanas",
        },
        bathroom: {
          title: "Renovación de baño principal",
          description:
            "Transformamos un baño anticuado en un oasis moderno de relajación. Incluye azulejos de lujo, ducha de lluvia, bañera independiente y acabados de primera calidad que combinan elegancia con funcionalidad.",
          tag: "Baño",
          duration: "3 semanas",
        },
        extension: {
          title: "Extensión de cocina y comedor",
          description:
            "Ampliamos el espacio de vida con una extensión luminosa que conecta la cocina con el jardín. Diseño abierto con grandes ventanales, iluminación natural y acabados modernos que crean un ambiente acogedor y funcional.",
          tag: "Extensión",
          duration: "8 semanas",
        },
      },
    },
    services: {
      title: "Servicios",
      subtitle: "Lo que hacemos",
      intro:
        "Descubre cuál de nuestros servicios se adapta a las necesidades de tu proyecto",
      items: {
        kitchens: {
          title: "Cocinas",
          description:
            "En Renovation Ideas, diseñamos y construimos cocinas impresionantes adaptadas a tu estilo y necesidades. Ya sea un espacio moderno y elegante o un look clásico y atemporal, nuestro equipo experto ofrece artesanía de alta calidad, funcionalidad y atención al detalle para crear el corazón de tu hogar.",
        },
        bathrooms: {
          title: "Baños",
          description:
            "Desde baños principales lujosos hasta baños familiares prácticos, Renovation Ideas ofrece espacios bellamente diseñados que combinan estilo con funcionalidad. Nos encargamos de todo, desde azulejos y accesorios hasta plomería e iluminación, asegurando un acabado de alta calidad que mejora tanto la comodidad como la estética.",
        },
        interior: {
          title: "Interiores",
          description:
            "Transforma el interior de tu hogar con nuestros servicios integrales de renovación interior. Desde conversiones de ático y extensiones de hogar hasta restauraciones completas, Renovation Ideas crea espacios interiores elegantes y funcionales que maximizan el potencial de tu hogar, agregando valor y comodidad con planificación experta y construcción de precisión.",
        },
        exterior: {
          title: "Exteriores",
          description:
            "Desde calzadas y patios hasta cercas y trabajos de ladrillo, Renovation Ideas mejora el exterior de tu hogar con artesanía duradera y de alta calidad. Ya sea mejorando el atractivo exterior o creando un hermoso espacio al aire libre, nuestro equipo asegura que cada detalle esté construido para durar y diseñado para impresionar.",
        },
      },
    },
    contact: {
      title: "Haz de tu casa un hogar que ames.",
      button: "Comienza ahora",
      addressLabel: "Dirección",
      contactLabel: "Contacto",
      phonePrefix: "T:",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      socialLabel: "Redes Sociales",
      getInTouch: "Contáctanos",
    },
    footer: {
      quickLinks: "Enlaces rápidos",
      socialmedia: "Redes sociales",
      about: "Sobre nosotros",
      work: "Nuestro trabajo",
      services: "Servicios",
      contact: "Contacto",
      instagram: "Instagram",
      TLH: "Hecho por TLH Dev",
      copyright: "© 2025 Renovation Ideas. Todos los derechos reservados.",
      contactInfo: "Información de Contacto",
      address: "Dirección",
      email: "Correo",
      phone: "Teléfono",
    },
  },
};

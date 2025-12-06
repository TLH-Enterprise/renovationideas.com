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
      lofts: {
        title: string;
        description: string;
      };
      extensions: {
        title: string;
        description: string;
      };
      restorations: {
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
    subtitle: string;
    intro: string;
    email: string;
    phone: string;
    whatsapp: string;
  };
  footer: {
    quickLinks: string;
    about: string;
    work: string;
    services: string;
    contact: string;
    copyright: string;
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
      text: "Welcome to Renovation Ideas, your trusted home improvement experts, dedicated to transforming homes with precision and care. With years of experience building kitchens, bathrooms, garages and more, we pride ourselves on offering first-class craftsmanship and a hassle-free customer experience. Our mission is to make your vision a reality while ensuring clear communication and expert guidance at every step. Let's create a home you'll love!",
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
      intro: "See how we've transformed homes with our expert craftsmanship and attention to detail.",
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
        lofts: {
          title: "Loft Conversions",
          description:
            "Maximize your home's potential with a custom loft conversion. Whether you're looking for an additional bedroom, an office or a living space, Renovation Ideas transforms underutilized lofts into elegant and functional areas, adding value and comfort to your home with expert planning and precision construction.",
        },
        extensions: {
          title: "Extensions",
          description:
            "Expand your living space with a seamless home extension. Whether you need a larger kitchen, a new living area or a multi-purpose space, Renovation Ideas provides expertly designed extensions designed to improve the flow, value and usability of your home, all while maintaining its unique character.",
        },
        restorations: {
          title: "Restorations",
          description:
            "Bring your home's character back to life with Renovation Ideas' expert restoration services. Whether it's period features, structural repairs or a large-scale renovation, we preserve and enhance original details while ensuring modern durability, creating a perfect balance between heritage and contemporary living.",
        },
        exterior: {
          title: "Exterior Work",
          description:
            "From driveways and patios to fences and brickwork, Renovation Ideas enhances your home's exterior with durable, high-quality craftsmanship. Whether improving curb appeal or creating a beautiful outdoor space, our team ensures every detail is built to last and designed to impress.",
        },
      },
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch",
      intro:
        "For any inquiry or to explore your vision further, we invite you to contact our professional team using the details provided below.",
      email: "hello@renovationideas.com",
      phone: "+34 123 456 789",
      whatsapp: "Contact us on WhatsApp",
    },
    footer: {
      quickLinks: "Quick links",
      about: "About us",
      work: "Our work",
      services: "Services",
      contact: "Contact",
      copyright: "© 2025 Renovation Ideas. All rights reserved.",
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
      text: "Bienvenido a Renovation Ideas, tus expertos en mejoras del hogar de confianza, dedicados a transformar hogares con precisión y cuidado. Con años de experiencia construyendo cocinas, baños, garajes y más, nos enorgullecemos de ofrecer artesanía de primera calidad y una experiencia de cliente sin complicaciones. Nuestra misión es hacer realidad tu visión mientras garantizamos una comunicación clara y orientación experta en cada paso. ¡Creemos un hogar que amarás!",
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
        lofts: {
          title: "Conversiones de Ático",
          description:
            "Maximiza el potencial de tu hogar con una conversión de ático a medida. Ya busques un dormitorio adicional, una oficina o un espacio de vida, Renovation Ideas transforma áticos subutilizados en áreas elegantes y funcionales, agregando valor y comodidad a tu hogar con planificación experta y construcción de precisión.",
        },
        extensions: {
          title: "Extensiones",
          description:
            "Amplía tu espacio de vida con una extensión de hogar sin fisuras. Ya necesites una cocina más grande, una nueva área de estar o un espacio multiusos, Renovation Ideas proporciona extensiones diseñadas con experiencia diseñadas para mejorar el flujo, valor y usabilidad de tu hogar, todo mientras mantiene su carácter único.",
        },
        restorations: {
          title: "Restauraciones",
          description:
            "Devuelve el carácter de tu hogar a la vida con los servicios de restauración expertos de Renovation Ideas. Ya sean características de época, reparaciones estructurales o una renovación a gran escala, preservamos y mejoramos los detalles originales mientras garantizamos durabilidad moderna, creando un equilibrio perfecto entre patrimonio y vida contemporánea.",
        },
        exterior: {
          title: "Trabajos Exteriores",
          description:
            "Desde calzadas y patios hasta cercas y trabajos de ladrillo, Renovation Ideas mejora el exterior de tu hogar con artesanía duradera y de alta calidad. Ya sea mejorando el atractivo exterior o creando un hermoso espacio al aire libre, nuestro equipo asegura que cada detalle esté construido para durar y diseñado para impresionar.",
        },
      },
    },
    contact: {
      title: "Contacto",
      subtitle: "Ponte en contacto",
      intro:
        "Para cualquier consulta o para explorar tu visión más a fondo, te invitamos a contactar a nuestro equipo profesional usando los detalles proporcionados a continuación.",
      email: "hola@renovationideas.com",
      phone: "+34 123 456 789",
      whatsapp: "Contáctanos por WhatsApp",
    },
    footer: {
      quickLinks: "Enlaces rápidos",
      about: "Sobre nosotros",
      work: "Nuestro trabajo",
      services: "Servicios",
      contact: "Contacto",
      copyright: "© 2025 Renovation Ideas. Todos los derechos reservados.",
    },
  },
};


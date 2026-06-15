import { images } from '../assets/images';

export const projects = [
  {
    id: 1,
    title: "GymControl",
    description:
      "Sistema para gestión de gimnasios con control de membresías, inventario y operaciones en tiempo real.",

    longDescription:
      "Plataforma empresarial diseñada para la administración integral de gimnasios, incluyendo gestión de usuarios, control de membresías, inventario y seguimiento operativo en tiempo real. Elaborada en equipo como proyecto final de clase.",

    image: images.gym.cover,
    gallery: images.gym.gallery,

    youtubeId: "4EmDJJdjsPE",
    category: "ERP / gym management",
    repository: "https://github.com/christian10-M/GymControl",

    featured: true,
    colSpan: "md:col-span-6",
    aspect: "aspect-[3/2]",

    stack: {
      frontend: [
        {
          name: "Blade",
          description: "Motor de plantillas de Laravel"
        },
        {
          name: "Livewire",
          description: "Componentes reactivos sin JS complejo"
        },
        {
          name: "Tailwind CSS",
          description: "UI utility-first"
        }
      ],

      backend: [
        {
          name: "Laravel 13",
          description: "Framework principal del sistema"
        }
      ],

      database: [
        {
          name: "MySQL",
          description: "Base de datos relacional normalizada"
        }
      ],

      tools: [
        {
          name: "Git",
          description: "Control de versiones"
        },
        {
          name: "Mailtrap / SMTP",
          description: "Envío de correos electrónicos"
        },
        {
          name: "DomPDF",
          description: "Generación automática de PDFs"
        },
        {
          name: "Postman",
          description: "Pruebas de API"
        },
        {
          name: "Docker",
          description: "Contenedores para desarrollo y despliegue"
        }
      ]
    },

    architecture: [
      {
        type: "frontend",
        title: "Frontend",
        description: "UI reactiva con componentes reutilizables"
      },
      {
        type: "backend",
        title: "Backend",
        description: "Lógica de negocio y API con Laravel"
      },
      {
        type: "integration",
        title: "Integración",
        description: "Comunicación en tiempo real con Livewire"
      }
    ],

    modules: [
      "Gestión de membresías",
      "Inventario",
      "Control de acceso",
      "Reportes en tiempo real",
      "Máquinas",
      "Rutinas",
      "Músculos",
      "Ejercicios",
      "Usuarios"
    ]
  },
  {
    id: 2,

    title: "Hotel Reservation System",

    description:
      "Sistema web para la gestión de reservas hoteleras, disponibilidad de habitaciones, administración de clientes y control de ocupación.",

    longDescription:
      "Plataforma web desarrollada para optimizar la administración de hoteles mediante la gestión de habitaciones, reservas y clientes. Permite consultar disponibilidad en tiempo real, realizar y modificar reservas, enviar notificaciones automáticas y generar reportes de ocupación. Incluye módulos para usuarios, administradores y gestión integral de la operación hotelera.",

    image: images.hotel.cover,
    gallery: images.hotel.gallery,

    youtubeId: "8AznnAZvU2E",
    category: "Hotel Management System",

    repository:
      "https://github.com/SarahiJLeura/Hotel-Reservation-System-HTML",

    featured: true,
    colSpan: "md:col-span-6",
    aspect: "aspect-[3/2]",

    stack: {
      frontend: [
        {
          name: "HTML5",
          description: "Estructura y contenido de la plataforma web"
        },
        {
          name: "CSS3",
          description: "Diseño responsivo y estilos visuales"
        },
        {
          name: "JavaScript",
          description: "Interactividad y validaciones del cliente"
        }
      ],

      backend: [
        {
          name: "PHP",
          description: "Lógica de negocio y gestión de reservas"
        }
      ],

      database: [
        {
          name: "MySQL",
          description: "Almacenamiento de usuarios, habitaciones y reservas"
        }
      ],

      tools: [
        {
          name: "Git",
          description: "Control de versiones del proyecto"
        },
        {
          name: "PHPMailer",
          description: "Envío de correos electrónicos"
        },
        {
          name: "XAMPP",
          description: "Entorno de desarrollo local para PHP y MySQL"
        }
      ]
    },

    architecture: [
      {
        type: "frontend",
        title: "Frontend",
        description:
          "Interfaz web responsiva para clientes y administradores"
      },
      {
        type: "backend",
        title: "Backend",
        description:
          "Gestión de reservas, habitaciones, usuarios y notificaciones"
      },
      {
        type: "database",
        title: "Base de Datos",
        description:
          "Almacenamiento centralizado de clientes, habitaciones y reservas"
      }
    ],

    modules: [
      "Consulta de disponibilidad",
      "Registro de usuarios",
      "Inicio de sesión",
      "Reserva de habitaciones",
      "Modificación de reservas",
      "Cancelación de reservas",
      "Gestión de habitaciones",
      "Gestión de clientes",
      "Mensajería con el hotel",
      "Notificaciones de reserva",
      "Recordatorios automáticos",
      "Visualización de reservas",
      "Reportes de ocupación",
      "Administración del sistema"
    ]
  },
  {
    id: 3,
    title: "GlobalQuest: Agencia de Viajes",
    description:
      "Sistema de agencia de viajes con gestión de usuarios, destinos, hospedajes, transportes y generación de itinerarios con PDF y correo automático.",

    longDescription:
      "Plataforma desarrollada en Laravel 13 para la administración de una agencia de viajes. Permite registro e inicio de sesión de usuarios (admin y cliente), gestión de catálogos completos (usuarios, destinos, hospedajes, viajes y transportes), dashboard con gráficas en Chart.js, integración con API de transportes con Laravel, generación de viajes con envío de correo electrónico y PDF automático usando Mailer y DomPDF, además de importación/exportación de usuarios en CSV.",

    image: images.viajes.cover,
    gallery: images.viajes.gallery,

    youtubeId: "",
    category: "Travel Management System / Laravel",

    repository: "https://github.com/SarahiJLeura/Agencia-Viajes-Laravel13",

    featured: true,
    colSpan: "md:col-span-6",
    aspect: "aspect-[3/2]",

    stack: {
      frontend: [
        {
          name: "Blade",
          description: "Motor de plantillas de Laravel"
        },
        {
          name: "Tailwind CSS",
          description: "Diseño responsivo mobile-first"
        },
        {
          name: "Chart.js",
          description: "Visualización de datos en dashboards"
        }
      ],

      backend: [
        {
          name: "Laravel 13",
          description: "Framework principal del sistema"
        },
        {
          name: "PHP",
          description: "Lógica de negocio del backend"
        }
      ],

      database: [
        {
          name: "MySQL",
          description: "Base de datos relacional"
        }
      ],

      tools: [
        {
          name: "Git",
          description: "Control de versiones"
        },
        {
          name: "Mailtrap / SMTP",
          description: "Envío de correos electrónicos"
        },
        {
          name: "DomPDF",
          description: "Generación automática de PDFs"
        },
        {
          name: "Docker",
          description: "Contenedores para desarrollo y despliegue"
        }
      ]
    },

    architecture: [
      {
        type: "frontend",
        title: "Frontend",
        description: "Interfaz responsiva con Blade y Tailwind CSS"
      },
      {
        type: "backend",
        title: "Backend",
        description: "Gestión de usuarios, viajes y catálogos con Laravel"
      },
      {
        type: "integration",
        title: "Integración externa",
        description: "API de transportes en Laravel + envío de correos y PDFs"
      }
    ],

    modules: [
      "Registro e inicio de sesión (Admin / Cliente)",
      "Gestión de usuarios (CRUD + import/export CSV)",
      "Gestión de destinos turísticos",
      "Gestión de hospedajes",
      "Gestión de transportes (API en Laravel)",
      "Creación y confirmación de viajes",
      "Generación automática de PDF con itinerario",
      "Envío de correo con confirmación de viaje",
      "Dashboard con gráficas en Chart.js",
      "Roles y permisos (Admin / Cliente)"
    ]
  },
  {
    id: 4,
    title: "School Management System",
    description:
      "Sistema de gestión escolar para administración de estudiantes, docentes, clases, horarios y control académico.",

    longDescription:
      "Plataforma desarrollada para la gestión integral de una institución educativa. Permite administrar estudiantes, docentes, cursos, clases, horarios y evaluaciones, así como la entrega de tareas en PDF, centralizando la información académica en un sistema web eficiente y escalable.",

    image: images.school.cover,
    gallery: images.school.gallery,

    youtubeId: "",
    category: "Education Management System / Laravel",

    repository: "https://github.com/SarahiJLeura/school-management-system",

    featured: true,
    colSpan: "md:col-span-6",
    aspect: "aspect-[3/2]",

    stack: {
      frontend: [
        {
          name: "Blade",
          description: "Motor de plantillas de Laravel"
        },
        {
          name: "Tailwind CSS",
          description: "Diseño responsivo y utilidades CSS"
        },
        {
          name: "Livewire",
          description: "Componentes dinámicos sin JavaScript complejo"
        }
      ],

      backend: [
        {
          name: "Laravel 12",
          description: "Framework principal del sistema"
        },
        {
          name: "PHP",
          description: "Lógica de negocio del backend"
        }
      ],

      database: [
        {
          name: "MySQL",
          description: "Base de datos relacional para gestión académica"
        }
      ],

      tools: [
        {
          name: "Git",
          description: "Control de versiones"
        },
        {
          name: "Filesystem de Laravel",
          description: "Almacenamiento de tareas en PDF"
        }
      ]
    },

    architecture: [
      {
        type: "frontend",
        title: "Frontend",
        description: "Interfaz web dinámica con Blade, Livewire y Tailwind CSS"
      },
      {
        type: "backend",
        title: "Backend",
        description: "Gestión de lógica académica, usuarios y cursos con Laravel"
      },
      {
        type: "integration",
        title: "Integración",
        description: "Comunicación en tiempo real entre componentes mediante Livewire"
      }
    ],

    modules: [
      "Gestión de estudiantes",
      "Gestión de docentes",
      "Gestión de cursos",
      "Gestión de clases",
      "Control de horarios",
      "Asignación de materias",
      "Gestión de calificaciones",
      "Administración de usuarios",
      "Reportes académicos"
    ]
  }
]
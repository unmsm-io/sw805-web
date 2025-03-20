export const COURSE_CONFIG = {
  // Course Information
  code: "20W0805",
  name: "Programación Concurrente y Paralela",
  semester: "2025-I",
  department: "Ingeniería de Software",
  faculty: "Facultad de Ingeniería de Sistemas e Informática",
  university: "Universidad Nacional Mayor de San Marcos",
  credits: 3,
  type: "Obligatorio",
  area: "Específica",
  weeks: 16,
  weeklyHours: {
    theory: 2,
    practice: 0,
    laboratory: 2
  },
  cycle: "VII",
  modality: "Presencial",
  syllabusUrl: "https://docs.google.com/document/d/1lBEv_-IVv6f05SW8hvw2XfXhCnAqNWqeerouK8zP8eU/edit?usp=sharing",

  // Course Staff
  instructors: [
    {
      name: "Dr. Herminio Paucar",
      email: "herminiopaucar@gmail.com",
      officeHours: "Martes y Jueves 14:00 - 16:00",
      image: "/paucar-profile.webp",
      title: "Profesor",
      education: "Estudiante de Doctorado en Ciencias de la Computación (USP)",
      specialization: "Sistemas Distribuidos y Programación Concurrente",
      socialMedia: {
        github: "https://github.com/hpaucar",
        linkedin: "https://www.linkedin.com/in/herminio-paucar/"
      }
    },
    {
      name: "Railly Hugo",
      email: "raillyhugo@gmail.com",
      officeHours: "Lunes 15:00 - 17:00",
      image: "/hugo-profile.webp",
      title: "Jefe de Práctica",
      education: "Estudiante de Maestría, Bachiller en Ingeniería de Software",
      specialization: "Programación Concurrente y Paralela",
      socialMedia: {
        github: "https://github.com/railly",
        linkedin: "https://www.linkedin.com/in/railly-hugo/"
      }
    }
  ],

  // Course Schedule
  schedule: {
    lectures: "Por definir",
    labs: "Por definir",
    location: "FISI",
  },

  // Prerequisites
  prerequisites: [
    {
      code: "20W0804",
      name: "Sistemas Operativos",
      description: "Pre-requisito obligatorio",
    }
  ],

  // Course Modules
  modules: [
    {
      id: "unit1",
      title: "Fundamentos de Computación Paralela y Concurrente",
      weeks: "1-4",
      topics: [
        "Introducción a la Computación Paralela",
        "Hardware y Software Paralelo",
        "Introducción a MPI (Paso de mensajes)",
        "MPI: Comunicación Colectiva y Optimizaciones"
      ],
      labs: [
        {
          id: "lab1",
          title: "Evaluación empírica de la Ley de Amdahl",
          path: "Laboratory/OpenMP/Prog01-HelloWorldOpenMP",
          files: ["hello_world.cpp", "parallel_for.cpp"],
          dueDate: "2024-04-01",
        },
        {
          id: "lab2",
          title: "Programación básica con MPI",
          path: "Laboratory/MPI_code/prog01_HelloWorldMPI_01",
          files: ["mpi_hello.cpp"],
          dueDate: "2024-04-15",
        }
      ]
    },
    {
      id: "unit2",
      title: "Programación en Memoria Compartida",
      weeks: "5-8",
      topics: [
        "Programación con Pthreads",
        "Programación con OpenMP",
        "Control de flujo en OpenMP",
        "Examen Parcial"
      ],
      labs: [
        {
          id: "lab3",
          title: "Pthreads vs OpenMP",
          path: "Laboratory/PThreads/prog00-HelloWorld",
          files: ["pthread_hello.cpp"],
          dueDate: "2024-04-29",
        },
        {
          id: "lab4",
          title: "OpenMP Avanzado",
          path: "Laboratory/OpenMP/Prog02-AddVectors",
          files: ["vector_operations.cpp"],
          dueDate: "2024-05-13",
        }
      ]
    },
    {
      id: "unit3",
      title: "Algoritmos y Estrategias de Paralelización",
      weeks: "9-12",
      topics: [
        "Estrategias de Desarrollo de Programas Paralelos",
        "Programación en GPU con CUDA",
        "Optimizaciones en CUDA",
        "Algoritmos Paralelos en GPU"
      ],
      labs: [
        {
          id: "lab5",
          title: "Introducción a CUDA",
          path: "Laboratory/CUDA/Lab01-Introduction",
          files: ["vector_add.cu"],
          dueDate: "2024-05-27",
        },
        {
          id: "lab6",
          title: "Optimización de algoritmos en CUDA",
          path: "Laboratory/CUDA/Lab02-Optimization",
          files: ["matrix_mult.cu"],
          dueDate: "2024-06-10",
        }
      ]
    },
    {
      id: "unit4",
      title: "Desafíos y Aplicaciones en Computación Paralela",
      weeks: "13-16",
      topics: [
        "Optimización y Análisis de Desempeño",
        "Tendencias en Computación Paralela",
        "Revisión del Proyecto Final",
        "Examen Final"
      ],
      labs: [
        {
          id: "lab7",
          title: "Análisis de rendimiento CPU vs GPU",
          path: "Laboratory/Performance/benchmark",
          files: ["benchmark.cpp", "benchmark.cu"],
          dueDate: "2024-06-24",
        },
        {
          id: "lab8",
          title: "Proyecto Final",
          path: "Laboratory/Final",
          files: ["README.md"],
          dueDate: "2024-07-08",
        }
      ]
    }
  ],

  // Grading
  grading: {
    n1: {
      ejercicios: 20,
      foros: 20,
      lecturas: 10,
      examen: 50
    },
    n2: {
      proyecto: 30,
      presentaciones: 30,
      laboratorios: 40
    },
    n3: {
      ejercicios: 20,
      foros: 20,
      lecturas: 10,
      examen: 50
    }
  },

  // Resources
  resources: {
    mainTextbook: {
      title: "An Introduction to Parallel Programming",
      author: "Pacheco, P. S., & Malensek, M.",
      edition: "2nd Edition",
      publisher: "Morgan Kaufmann",
      coverImage: "/textbook-cover.webp",
      year: 2022,
      isbn: "978-0-12-804605-0",
      url: "https://www.elsevier.com/books/an-introduction-to-parallel-programming/pacheco/978-0-12-374260-5"
    },
    additionalResources: [
      {
        title: "Introducción a la programación paralela",
        author: "Almeida, F., Giménez, D., Mantas, J. M., & Vidal, A. M.",
        year: 2008,
        publisher: "Paraninfo Cengage Learning",
        description: "Libro en español sobre fundamentos de programación paralela",
        url: "https://www.paraninfo.es/catalogo/9788497326742/introduccion-a-la-programacion-paralela"
      },
      {
        title: "Principios y algoritmos de concurrencia",
        author: "Galli, R.",
        year: 2015,
        publisher: "CreateSpace Independent Publishing Platform",
        isbn: "978-1517029753",
        description: "Conceptos fundamentales de concurrencia",
        url: "https://www.amazon.com/Principios-algoritmos-concurrencia-Spanish-Ricardo/dp/1517029759"
      },
      {
        title: "Introduction to Parallel Computing",
        author: "Grama, A., Gupta, A., Karypis, G., & Kumas, V.",
        year: 2003,
        publisher: "Pearson Addison Wesley",
        description: "Texto comprensivo sobre computación paralela",
        url: "https://www.amazon.com/Introduction-Parallel-Computing-Ananth-Grama/dp/0201648652"
      }
    ],
    developmentSetup: {
      requiredSoftware: [
        {
          name: "GCC/G++",
          description: "Compilador C/C++",
          url: "https://gcc.gnu.org/",
          setupGuide: "/guides/gcc-setup"
        },
        {
          name: "OpenMPI",
          description: "Implementación de MPI",
          url: "https://www.open-mpi.org/",
          setupGuide: "/guides/openmpi-setup"
        },
        {
          name: "CUDA Toolkit",
          description: "SDK para programación en GPU",
          url: "https://developer.nvidia.com/cuda-toolkit",
          setupGuide: "/guides/cuda-setup"
        }
      ],
      extensions: [
        {
          name: "C/C++",
          id: "ms-vscode.cpptools",
          description: "Soporte para C/C++",
        },
        {
          name: "CUDA Tools",
          id: "nvidia.nsight-vscode-edition",
          description: "Desarrollo CUDA",
        },
        {
          name: "Remote Development",
          id: "ms-vscode-remote.vscode-remote-extensionpack",
          description: "Desarrollo remoto en servidores HPC",
        }
      ],
    }
  },

  // Important Dates
  importantDates: [
    {
      event: "Inicio de Clases",
      date: "2024-03-01"
    },
    {
      event: "Examen Parcial",
      date: "2024-04-22"
    },
    {
      event: "Examen Final",
      date: "2024-07-08"
    }
  ],

  // Repository Information
  repository: {
    url: "https://github.com/hpaucar/parallel-programming-repo",
    branch: "master",
    license: "MIT",
  },

  // Quick Links
  quickLinks: [
    {
      title: "Sílabo Oficial",
      description: "Ver el sílabo completo del curso",
      href: "https://docs.google.com/document/d/1lBEv_-IVv6f05SW8hvw2XfXhCnAqNWqeerouK8zP8eU/edit?usp=sharing",
      icon: "FileText",
    },
    {
      title: "Guía de Instalación",
      description: "Configura tu entorno de desarrollo",
      href: "/guides/vscode-setup",
      icon: "Monitor",
    },
    {
      title: "GitHub Student Pack",
      description: "Accede a herramientas gratuitas",
      href: "https://education.github.com/pack",
      icon: "GraduationCap",
    },
    {
      title: "LLNL HPC Tutorials",
      description: "Tutoriales de computación paralela del LLNL",
      href: "https://hpc-tutorials.llnl.gov/",
      icon: "Server",
    }
  ],

  // Announcements
  announcements: [
    {
      id: 1,
      title: "Bienvenidos al curso",
      content: "Iniciamos el semestre 2025-I. Por favor, revisen el sílabo y configuren su entorno de desarrollo.",
      date: "2025-03-26",
      type: "info",
    },
    {
      id: 2,
      title: "Primer Laboratorio",
      content: "El primer laboratorio estará disponible desde el viernes. Recuerden revisar la guía de configuración.",
      date: "2025-03-29",
      type: "lab",
    },
  ],
} as const;

export type Module = (typeof COURSE_CONFIG.modules)[number];
export type Lab = (typeof COURSE_CONFIG.modules)[number]["labs"][number];
export type Resource = (typeof COURSE_CONFIG.resources.additionalResources)[number];
export type QuickLink = (typeof COURSE_CONFIG.quickLinks)[number];
export type Announcement = (typeof COURSE_CONFIG.announcements)[number];

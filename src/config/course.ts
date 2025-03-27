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
      email: "hpaucarc@unmsm.edu.pe",
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
      email: "railly.hugo@unmsm.edu.pe",
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
      content: [
        {
          week: 1,
          topic: "Introducción a la Computación Paralela",
          subtopics: [
            "Necesidad del cómputo paralelo",
            "Modelos de programación (concurrente, paralela, distribuida)"
          ],
          activity: "Presentación del curso. Discusión de la evolución de la computación paralela.",
          lab: {
            id: "lab1",
            unitId: "unit1",
            title: "Lab 1: Tutorial de Punteros en C++",
            path: "Laboratory/Setup",
            files: ["environment_setup.md"],
            dueDate: "2024-04-03"
          }
        },
        {
          week: 2,
          topic: "Hardware y Software Paralelo",
          subtopics: [
            "Arquitecturas de cómputo paralelo",
            "Modelos de memoria (compartida vs. distribuida)",
            "Ley de Amdahl y Gustafson"
          ],
          activity: "Laboratorio: Evaluación empírica de la Ley de Amdahl en OpenMP.",
          lab: {
            id: "lab2",
            unitId: "unit1",
            title: "Lab 2: Ley de Amdahl",
            path: "Laboratory/OpenMP",
            files: ["amdahl_law.cpp"],
            dueDate: "2024-04-10"
          }
        },
        {
          week: 3,
          topic: "Introducción a MPI (Paso de mensajes)",
          subtopics: [
            "Comunicación entre procesos",
            "Envío y recepción de mensajes"
          ],
          activity: "Implementación de programas MPI simples (Hello World, comunicación punto a punto).",
          lab: {
            id: "lab3",
            unitId: "unit1",
            title: "Lab 3: MPI Básico",
            path: "Laboratory/MPI",
            files: ["mpi_basics.cpp"],
            dueDate: "2024-04-17"
          }
        },
        {
          week: 4,
          topic: "MPI: Comunicación Colectiva y Optimizaciones",
          subtopics: [
            "Broadcast, Scatter, Gather",
            "Reducciones y sincronización"
          ],
          activity: "Taller práctico sobre comunicación colectiva en MPI.",
          lab: {
            id: "lab4",
            unitId: "unit1",
            title: "Lab 4: MPI Colectivo",
            path: "Laboratory/MPI",
            files: ["collective_ops.cpp"],
            dueDate: "2024-04-24"
          }
        }
      ]
    },
    {
      id: "unit2",
      title: "Programación en Memoria Compartida",
      weeks: "5-8",
      content: [
        {
          week: 5,
          topic: "Programación con Pthreads",
          subtopics: [
            "Creación y sincronización de hilos",
            "Mutex y exclusión mutua"
          ],
          activity: "Implementación de programas concurrentes con Pthreads.",
          lab: {
            id: "lab5",
            unitId: "unit2",
            title: "Lab 5: Pthreads Básico",
            path: "Laboratory/Pthreads",
            files: ["pthread_basics.cpp"],
            dueDate: "2024-05-01"
          }
        },
        {
          week: 6,
          topic: "Programación con OpenMP",
          subtopics: [
            "Directivas de paralelización",
            "Variables compartidas y privadas",
            "Reducciones y paralelización de bucles"
          ],
          activity: "Laboratorio: Comparación entre Pthreads y OpenMP en términos de facilidad y rendimiento.",
          lab: {
            id: "lab6",
            unitId: "unit2",
            title: "Lab 6: OpenMP vs Pthreads",
            path: "Laboratory/Comparison",
            files: ["comparison.cpp"],
            dueDate: "2024-05-08"
          }
        },
        {
          week: 7,
          topic: "Control de flujo en OpenMP",
          subtopics: [
            "Programación basada en tareas",
            "Planificación y balanceo de carga"
          ],
          activity: "Implementación de tareas dinámicas y estáticas con OpenMP.",
          lab: {
            id: "lab7",
            unitId: "unit2",
            title: "Lab 7: OpenMP Avanzado",
            path: "Laboratory/OpenMP",
            files: ["advanced_openmp.cpp"],
            dueDate: "2024-05-15"
          }
        },
        {
          week: 8,
          topic: "Examen Parcial",
          subtopics: [
            "Evaluación teórica",
            "Evaluación práctica"
          ],
          activity: "Prueba teórica y evaluación práctica de conceptos básicos de paralelismo.",
          lab: null
        }
      ]
    },
    {
      id: "unit3",
      title: "Algoritmos y Estrategias de Paralelización",
      weeks: "9-12",
      content: [
        {
          week: 9,
          topic: "Estrategias de Desarrollo de Programas Paralelos",
          subtopics: [
            "Descomposición de datos y tareas",
            "Balanceo de carga y eficiencia"
          ],
          activity: "Implementación de algoritmos paralelos de reducción y búsqueda.",
          lab: {
            id: "lab8",
            unitId: "unit3",
            title: "Lab 8: Estrategias de Paralelización",
            path: "Laboratory/Strategies",
            files: ["parallel_strategies.cpp"],
            dueDate: "2024-05-29"
          }
        },
        {
          week: 10,
          topic: "Programación en GPU con CUDA",
          subtopics: [
            "Arquitectura de GPUs",
            "Modelo de programación CUDA",
            "Lanzamiento de kernels"
          ],
          activity: "Taller introductorio de CUDA. Implementación de vector addition en GPU.",
          lab: {
            id: "lab9",
            unitId: "unit3",
            title: "Lab 9: CUDA Básico",
            path: "Laboratory/CUDA",
            files: ["vector_add.cu"],
            dueDate: "2024-06-05"
          }
        },
        {
          week: 11,
          topic: "Optimizaciones en CUDA",
          subtopics: [
            "Memoria global vs. compartida",
            "Estrategias de reducción en CUDA",
            "Warp Shuffles y uso de Shared Memory"
          ],
          activity: "Evaluación de rendimiento de programas en GPU.",
          lab: {
            id: "lab10",
            unitId: "unit3",
            title: "Lab 10: CUDA Optimización",
            path: "Laboratory/CUDA",
            files: ["optimization.cu"],
            dueDate: "2024-06-12"
          }
        },
        {
          week: 12,
          topic: "Algoritmos Paralelos en GPU",
          subtopics: [
            "Implementación de sorting paralelo",
            "Algoritmos de MapReduce en GPU"
          ],
          activity: "Desarrollo de un proyecto sobre optimización de CUDA.",
          lab: {
            id: "lab11",
            unitId: "unit3",
            title: "Lab 11: CUDA Algoritmos",
            path: "Laboratory/CUDA",
            files: ["algorithms.cu"],
            dueDate: "2024-06-19"
          }
        }
      ]
    },
    {
      id: "unit4",
      title: "Desafíos y Aplicaciones en Computación Paralela",
      weeks: "13-16",
      content: [
        {
          week: 13,
          topic: "Optimización y Análisis de Desempeño",
          subtopics: [
            "Evaluación empírica del speedup",
            "Técnicas avanzadas de optimización"
          ],
          activity: "Comparación del rendimiento entre implementaciones paralelas en CPU y GPU.",
          lab: {
            id: "lab12",
            unitId: "unit4",
            title: "Lab 12: Análisis de Rendimiento",
            path: "Laboratory/Performance",
            files: ["benchmark.cpp", "benchmark.cu"],
            dueDate: "2024-06-26"
          }
        },
        {
          week: 14,
          topic: "Tendencias en Computación Paralela",
          subtopics: [
            "Inteligencia Artificial y Deep Learning en GPUs",
            "Computación heterogénea"
          ],
          activity: "Estudio de caso: Implementación de modelos de Machine Learning en CUDA.",
          lab: {
            id: "lab13",
            unitId: "unit4",
            title: "Lab 13: ML en CUDA",
            path: "Laboratory/CUDA",
            files: ["ml_cuda.cu"],
            dueDate: "2024-07-03"
          }
        },
        {
          week: 15,
          topic: "Revisión del Proyecto Final",
          subtopics: [
            "Presentaciones de proyectos",
            "Retroalimentación"
          ],
          activity: "Presentaciones de proyectos en equipos.",
          lab: {
            id: "project",
            unitId: "unit4",
            title: "Proyecto Final",
            path: "Laboratory/Final",
            files: ["README.md"],
            dueDate: "2024-07-10"
          }
        },
        {
          week: 16,
          topic: "Examen Final",
          subtopics: [
            "Evaluación teórica",
            "Evaluación práctica"
          ],
          activity: "Evaluación escrita y práctica final del curso.",
          lab: null
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

  // Important Dates
  importantDates: [
    {
      event: "Inicio de Clases",
      date: "2025-03-27"
    },
    {
      event: "Examen Parcial",
      date: "2025-05-15"
    },
    {
      event: "Examen Final",
      date: "2025-07-10"
    }
  ],

  // Resources
  resources: {
    mainTextbook: {
      title: "An Introduction to Parallel Programming",
      coverImage: "/images/books/intro-to-parallel-programming.webp",
      author: "Pacheco, P. S., & Malensek, M.",
      edition: "2nd Edition",
      url: "https://www.amazon.com/gp/product/0128046050/ref=as_li_ss_tl?ie=UTF8&tag=hpaucar-20&linkCode=as2&camp=217145&creative=399369&creativeASIN=0128046050",
      publisher: "Morgan Kaufmann",
      year: 2022,
      isbn: "978-0-12-804605-0"
    },
    additionalResources: [
      {
        title: "Introducción a la programación paralela",
        author: "Almeida, F., Giménez, D., Mantas, J. M., & Vidal, A. M.",
        year: 2008,
        publisher: "Paraninfo Cengage Learning",
        coverImage: "/images/books/paraninfo-progra-paralela.jpg",
        url: "https://www.paraninfo.es/catalogo/9788497326742/introduccion-a-la-programacion-paralela",
      },
      {
        title: "Principios y algoritmos de concurrencia",
        author: "Galli, R.",
        year: 2015,
        publisher: "CreateSpace Independent Publishing Platform",
        isbn: "978-1517029753",
        coverImage: "/images/books/principios-y-algoritmos-de-concurrencia.jpg",
        url: "https://www.amazon.com/-/es/Principios-y-algoritmos-concurrencia-Spanish/dp/1517029759"
      },
      {
        title: "Introduction to Parallel Computing",
        author: "Grama, A., Gupta, A., Karypis, G., & Kumas, V.",
        year: 2003,
        publisher: "Pearson Addison Wesley",
        coverImage: "/images/books/introduction-to-parallel-computing.jpg",
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

  // Repository Information
  repository: {
    url: "https://github.com/hpaucar/parallel-programming-repo",
    branch: "master",
    license: "MIT",
  },

  // Quick Links
  quickLinks: [
    {
      title: "Sílabo del Curso",
      description: "Ver el sílabo completo del curso",
      href: "https://docs.google.com/document/d/1lBEv_-IVv6f05SW8hvw2XfXhCnAqNWqeerouK8zP8eU/edit?usp=sharing",
      icon: "FileText"
    },
    {
      title: "Guía de Instalación",
      description: "Configura tu entorno de desarrollo",
      href: "/labs/unit1/setup",
      icon: "Monitor"
    },
    {
      title: "Recursos de Aprendizaje",
      description: "Material complementario y tutoriales",
      href: "/resources",
      icon: "GraduationCap"
    },
    {
      title: "LLNL HPC Tutorials",
      description: "Tutoriales de computación paralela del LLNL",
      href: "https://hpc-tutorials.llnl.gov/",
      icon: "Server"
    }
  ],

  // Announcements
  announcements: [
    {
      id: 1,
      title: "Bienvenidos al curso",
      content: "Iniciamos el semestre 2025-I. Por favor, revisen el sílabo y configuren su entorno de desarrollo.",
      date: "2025-03-27",
      type: "info"
    },
    {
      id: 2,
      title: "Primer Laboratorio",
      content: "El primer laboratorio estará disponible desde el viernes. Recuerden revisar la guía de configuración.",
      date: "2025-03-29",
      type: "lab"
    }
  ]
} as const;

export type Module = (typeof COURSE_CONFIG.modules)[number];
export type WeekContent = Module["content"][number]
export type Lab = NonNullable<WeekContent["lab"]>;
export type Resource = (typeof COURSE_CONFIG.resources.additionalResources)[number];
export type QuickLink = (typeof COURSE_CONFIG.quickLinks)[number];
export type Announcement = (typeof COURSE_CONFIG.announcements)[number];

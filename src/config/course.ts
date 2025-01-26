export const COURSE_CONFIG = {
  // Course Information
  code: "202SW0805",
  name: "Programación Concurrente y Paralela",
  semester: "2025-I",
  department: "Ingeniería de Software",
  faculty: "Facultad de Ingeniería de Sistemas e Informática",
  university: "Universidad Nacional Mayor de San Marcos",
  credits: 4,

  // Course Staff
  instructors: [
    {
      name: "Dr. Herminio Paucar",
      email: "herminiopaucar@gmail.com",
      office: "Oficina 301, FISI",
      officeHours: "Martes y Jueves 14:00 - 16:00",
      image: "/paucar-profile.webp",
      title: "Profesor",
      education: "Estudiante de Doctorado en Ciencias de la Computación (USP)",
      specialization: "Sistemas Distribuidos y Programación Concurrente",
    },
    {
      name: "Railly Hugo",
      email: "raillyhugo@gmail.com",
      office: "Oficina 301, FISI",
      officeHours: "Lunes 15:00 - 17:00",
      image: "/hugo-profile.webp",
      title: "Asistente de Enseñanza",
      education: "Estudiante de Maestría, Bachiller en Ingeniería de Software",
      specialization: "Programación Concurrente y Paralela",
    },
  ],

  // Course Schedule
  schedule: {
    lectures: "Martes y Jueves 9:00 - 10:30",
    labs: "Viernes 14:00 - 17:00",
    location: "Laboratorio L1, FISI",
  },

  // Prerequisites
  prerequisites: [
    {
      code: "202SW0804",
      name: "Programación Avanzada",
      description: "Conocimientos sólidos de C++",
    },
    {
      code: "202SW0803",
      name: "Sistemas Operativos",
      description: "Conceptos de concurrencia y procesos",
    },
  ],

  // Course Modules
  modules: [
    {
      id: "foundations",
      title: "Fundamentos de C++ y Programación Paralela",
      weeks: "1-2",
      topics: [
        "Repaso de C++ Moderno",
        "Punteros y Gestión de Memoria",
        "Introducción a la Programación Paralela",
        "Arquitecturas Paralelas",
      ],
      labs: [
        {
          id: "lab1",
          title: "Punteros y Referencias en C++",
          path: "C++TutorialCompletePointersUd/39_Pointers",
          files: ["Pointers.cpp", "References.cpp"],
          dueDate: "2025-03-15",
        },
        {
          id: "lab2",
          title: "Gestión de Memoria y Estructuras de Datos",
          path: "C++TutorialCompletePointersUd/48_New Operator",
          files: ["New_Operator.cpp", "Memory_Management.cpp"],
          dueDate: "2025-03-22",
        },
      ],
    },
    {
      id: "openmp",
      title: "Programación con OpenMP",
      weeks: "3-5",
      topics: [
        "Introducción a OpenMP",
        "Directivas de Paralelización",
        "Sincronización y Variables Compartidas",
        "Optimización de Rendimiento",
      ],
      labs: [
        {
          id: "lab3",
          title: "Introducción a OpenMP",
          path: "Laboratory/OpenMP/Prog01-HelloWorldOpenMP",
          files: ["hello_world.cpp", "parallel_for.cpp"],
          dueDate: "2025-03-29",
        },
        {
          id: "lab4",
          title: "Operaciones Vectoriales con OpenMP",
          path: "Laboratory/OpenMP/Prog02-AddVectors",
          files: ["vector_operations.cpp"],
          dueDate: "2025-04-05",
        },
      ],
    },
    {
      id: "mpi",
      title: "Programación con MPI",
      weeks: "6-8",
      topics: [
        "Fundamentos de MPI",
        "Comunicación Punto a Punto",
        "Operaciones Colectivas",
        "Topologías y Comunicadores",
      ],
      labs: [
        {
          id: "lab5",
          title: "Introducción a MPI",
          path: "Laboratory/MPI_code/prog01_HelloWorldMPI_01",
          files: ["mpi_hello.cpp"],
          dueDate: "2025-04-12",
        },
        {
          id: "lab6",
          title: "Comunicación MPI",
          path: "Laboratory/MPI_code/prog03_SendMessage01",
          files: ["send_message.cpp"],
          dueDate: "2025-04-19",
        },
      ],
    },
    {
      id: "pthreads",
      title: "Programación con PThreads",
      weeks: "9-10",
      topics: [
        "Creación y Gestión de Hilos",
        "Mutex y Variables de Condición",
        "Sincronización Avanzada",
        "Patrones de Diseño Concurrente",
      ],
      labs: [
        {
          id: "lab7",
          title: "Introducción a PThreads",
          path: "Laboratory/PThreads/prog00-HelloWorld",
          files: ["pthread_hello.cpp"],
          dueDate: "2025-04-26",
        },
        {
          id: "lab8",
          title: "Sincronización con PThreads",
          path: "Laboratory/PThreads/prog03-Prod-Cons-Sync-Semaphore",
          files: ["producer_consumer.cpp"],
          dueDate: "2025-05-03",
        },
      ],
    },
    {
      id: "cuda",
      title: "Programación GPU con CUDA",
      weeks: "11-13",
      topics: [
        "Arquitectura GPU",
        "Modelo de Programación CUDA",
        "Optimización de Kernels",
        "Patrones de Diseño GPU",
      ],
      labs: [
        {
          id: "lab9",
          title: "Introducción a CUDA",
          path: "Laboratory/CUDA/Lab01-Introduction",
          files: ["vector_add.cu"],
          dueDate: "2025-05-10",
        },
        {
          id: "lab10",
          title: "Optimización CUDA",
          path: "Laboratory/CUDA/Lab02-Optimization",
          files: ["matrix_mult.cu"],
          dueDate: "2025-05-17",
        },
      ],
    },
  ],

  // Grading
  grading: {
    labs: 40,
    midterm: 20,
    finalProject: 35,
    participation: 5,
  },

  // Resources
  resources: {
    mainTextbook: {
      title: "An Introduction to Parallel Programming",
      author: "Peter Pacheco",
      edition: "1st Edition",
      publisher: "Morgan Kaufmann",
      year: 2011,
      isbn: "978-0123742605",
    },
    additionalResources: [
      {
        title: "GitHub Student Pack",
        description: "Acceso gratuito a herramientas de desarrollo",
        url: "https://education.github.com/pack",
        category: "tools",
      },
      {
        title: "Oracle Cloud Free Tier",
        description: "Recursos de computación en la nube",
        url: "https://www.oracle.com/cloud/free/",
        category: "cloud",
      },
      {
        title: "Google Colab",
        description: "Notebooks con soporte GPU",
        url: "https://colab.research.google.com",
        category: "cloud",
      },
    ],
    developmentSetup: {
      requiredSoftware: [
        {
          name: "Visual Studio Code",
          url: "https://code.visualstudio.com",
          setupGuide: "/guides/vscode-setup",
        },
        {
          name: "Git",
          url: "https://git-scm.com",
          setupGuide: "/guides/git-setup",
        },
        {
          name: "CUDA Toolkit",
          url: "https://developer.nvidia.com/cuda-toolkit",
          setupGuide: "/guides/cuda-setup",
        },
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
      ],
    },
  },

  // Important Dates
  importantDates: [
    {
      event: "Inicio de Clases",
      date: "2025-03-01",
    },
    {
      event: "Examen Parcial",
      date: "2025-04-15",
    },
    {
      event: "Entrega de Propuesta de Proyecto",
      date: "2025-05-01",
    },
    {
      event: "Presentación Final de Proyectos",
      date: "2025-06-15",
    },
  ],

  // Repository Information
  repository: {
    url: "https://github.com/hpaucar/parallel-programming-repo",
    branch: "master",
    license: "MIT",
  },
} as const;

export type Module = (typeof COURSE_CONFIG.modules)[number];
export type Lab = (typeof COURSE_CONFIG.modules)[number]["labs"][number];
export type Resource =
  (typeof COURSE_CONFIG.resources.additionalResources)[number];

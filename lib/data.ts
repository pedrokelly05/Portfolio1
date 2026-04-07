// ============================================================
// ARCHIVO CENTRAL DE DATOS — Editá todo tu contenido aquí
// ============================================================

export const personalInfo = {
  name: "Pedro Tomás Kelly",
  firstName: "Pedro Tomás",
  lastName: "Kelly",
  email: "kellypedro005@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedro-tomas-kelly/",
  linkedinName: "Pedro Tomás Kelly",
  // Cambiá esta línea con tu profesión / tagline
  tagline: "Diseñador & Desarrollador Creativo",
  // Bio corta que aparece en el Hero
  bio: "Creo experiencias digitales que combinan diseño cuidadoso con tecnología moderna. Apasionado por construir productos que sean tanto funcionales como visualmente impactantes.",
};

// ============================================================
// PROYECTOS — Agregá, quitá o editá según necesites
// ============================================================
export const projects = [
  {
    id: 1,
    title: "Diseño de Marca",
    description:
      "Identidad visual completa para una startup tecnológica: logo, paleta cromática, tipografía y manual de marca.",
    tags: ["Branding", "Figma", "Ilustración"],
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard Analítico",
    description:
      "Plataforma web de analíticas con visualización de datos en tiempo real, gráficos interactivos y modo oscuro.",
    tags: ["React", "TypeScript", "Recharts"],
    gradient: "from-pink-600 via-rose-500 to-orange-500",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Moderno",
    description:
      "Tienda online con carrito de compras, pasarela de pagos integrada y panel de administración personalizado.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "App de Productividad",
    description:
      "Aplicación móvil para gestión de tareas con sincronización en la nube, notificaciones y modo offline.",
    tags: ["React Native", "Expo", "Supabase"],
    gradient: "from-amber-500 via-yellow-500 to-lime-500",
    liveUrl: "#",
    codeUrl: null,
  },
  {
    id: 5,
    title: "Rediseño UI/UX",
    description:
      "Rediseño completo de la experiencia de usuario de una plataforma SaaS B2B, mejorando la conversión en un 40%.",
    tags: ["UX Research", "Figma", "Prototipado"],
    gradient: "from-fuchsia-600 via-pink-500 to-violet-600",
    liveUrl: "#",
    codeUrl: null,
  },
  {
    id: 6,
    title: "Sistema de Diseño",
    description:
      "Design system completo con más de 80 componentes documentados, tokens de diseño y guías de accesibilidad.",
    tags: ["Storybook", "Figma", "Design Tokens"],
    gradient: "from-blue-600 via-indigo-500 to-violet-600",
    liveUrl: "#",
    codeUrl: "#",
  },
];

// ============================================================
// SKILLS — Agrupadas por categoría
// ============================================================
export const skillCategories = [
  {
    category: "Diseño",
    emoji: "🎨",
    color: "from-pink-500 to-violet-500",
    skills: [
      { name: "Figma" },
      { name: "Adobe XD" },
      { name: "Illustrator" },
      { name: "Photoshop" },
      { name: "Framer" },
      { name: "Blender 3D" },
    ],
  },
  {
    category: "Desarrollo",
    emoji: "💻",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Herramientas",
    emoji: "🛠️",
    color: "from-violet-500 to-indigo-500",
    skills: [
      { name: "Git & GitHub" },
      { name: "Vercel" },
      { name: "Notion" },
      { name: "VS Code" },
      { name: "Storybook" },
      { name: "Supabase" },
    ],
  },
];

// ============================================================
// NAV LINKS
// ============================================================
export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contacto" },
];

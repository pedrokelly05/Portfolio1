# Portfolio — Pedro Tomás Kelly

Landing page de portfolio personal. Single-page, responsive, con animaciones Framer Motion y estética dark con gradientes aurora.

## Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fuentes**: Inter + Space Grotesk (Google Fonts)

---

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar servidor de desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en tu navegador.

```bash
# Build para producción
npm run build
npm run start
```

---

## Personalización

**Todo el contenido está centralizado en un solo archivo:**

```
lib/data.ts
```

### Qué podés editar ahí:

| Campo | Descripción |
|-------|-------------|
| `personalInfo.tagline` | Profesión / subtítulo del Hero |
| `personalInfo.bio` | Párrafo de presentación |
| `projects` | Array de proyectos (título, descripción, tags, links) |
| `skillCategories` | Grupos de habilidades con sus ítems |
| `navLinks` | Links de navegación |

### Agregar tu foto

1. Copiá tu foto a `/public/avatar.jpg`
2. En `components/Hero.tsx`, buscá el comentario `Para agregar tu foto:` y seguí las instrucciones ahí mismo.

### Agregar un proyecto

```ts
// lib/data.ts
{
  id: 7,
  title: "Nombre del proyecto",
  description: "Descripción corta del proyecto.",
  tags: ["Tag1", "Tag2"],
  gradient: "from-emerald-500 to-teal-600",  // Gradiente Tailwind para la preview
  liveUrl: "https://tu-proyecto.com",
  codeUrl: "https://github.com/tu-repo",      // null si no aplica
}
```

### Cambiar colores del gradiente aurora

Los blobs de fondo están en `components/Hero.tsx`. Cada blob tiene una clase como `bg-violet-700/25` — cambiá el color y la opacidad según tu gusto.

### Despliegue en Vercel

```bash
npm i -g vercel
vercel
```

---

## Estructura del proyecto

```
portfolio/
├── app/
│   ├── globals.css       ← Estilos globales, clases custom, animaciones CSS
│   ├── layout.tsx        ← Metadata SEO, fuentes, layout raíz
│   └── page.tsx          ← Página principal (ensambla componentes)
├── components/
│   ├── Navbar.tsx        ← Nav sticky con blur al scroll
│   ├── Hero.tsx          ← Hero + About
│   ├── Projects.tsx      ← Grid de proyectos
│   ├── Skills.tsx        ← Stack por categorías
│   ├── Contact.tsx       ← Formulario + links de contacto
│   └── Footer.tsx        ← Footer con copyright
├── lib/
│   └── data.ts           ← FUENTE ÚNICA DE DATOS ← editá acá
├── public/               ← Imágenes estáticas (avatar.jpg, etc.)
├── tailwind.config.ts
└── next.config.js
```

"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-28 overflow-hidden">
      {/* Blob de fondo */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-700/10 blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Trabajos</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Proyectos destacados
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Una selección de proyectos que reflejan mi proceso creativo y mis capacidades técnicas.
          </p>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
}) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Preview con gradiente */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
      >
        {/* Patrón decorativo sobre el gradiente */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-5xl font-bold text-white/10 select-none">
            {project.id.toString().padStart(2, "0")}
          </span>
        </div>

        {/* Links rápidos al hacer hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={project.liveUrl}
            aria-label={`Ver proyecto ${project.title} en vivo`}
            className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 transition-colors backdrop-blur-sm"
          >
            <ExternalLink size={18} className="text-white" />
          </a>
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              aria-label={`Ver código de ${project.title}`}
              className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 transition-colors backdrop-blur-sm"
            >
              <Github size={18} className="text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-violet-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/8 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer de la card */}
      <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
        <a
          href={project.liveUrl}
          className="text-xs text-violet-400 hover:text-violet-300 font-semibold flex items-center gap-1 transition-colors"
        >
          Ver proyecto <ExternalLink size={12} />
        </a>
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            className="text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1 transition-colors"
          >
            <Github size={12} /> Código
          </a>
        )}
      </div>
    </motion.article>
  );
}

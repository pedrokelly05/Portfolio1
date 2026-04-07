"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Blobs */}
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-cyan-600/10 blur-[100px] pointer-events-none"
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
          <span className="section-tag">Capacidades</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Stack & habilidades
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Las herramientas y tecnologías que uso para convertir ideas en productos de alta calidad.
          </p>
        </motion.div>

        {/* Grilla de categorías */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              variants={itemVariants}
              className="glass glass-hover rounded-2xl p-6"
            >
              {/* Header de categoría */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-lg`}
                >
                  {cat.emoji}
                </div>
                <h3 className="font-display font-bold text-white text-lg">
                  {cat.category}
                </h3>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {cat.skills.map((skill, i) => (
                  <SkillPill key={skill.name} skill={skill.name} index={i} gradient={cat.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Barra de progreso decorativa (motivacional) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8 text-center"
        >
          <p className="text-gray-400 text-sm mb-1">Enfoque principal</p>
          <p className="font-display text-white font-bold text-xl mb-6">
            Diseño centrado en el usuario · Código limpio · Resultados medibles
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["UI/UX Design", "Frontend Dev", "Branding", "Prototipado", "Accesibilidad", "Performance"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-sm font-medium glass border border-white/10 text-gray-300 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillPill({
  skill,
  index,
  gradient,
}: {
  skill: string;
  index: number;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ scale: 1.04 }}
      className="group flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/4 border border-white/6 hover:border-white/15 transition-all duration-200 cursor-default"
    >
      {/* Dot de color */}
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${gradient} group-hover:scale-125 transition-transform`}
      />
      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors truncate">
        {skill}
      </span>
    </motion.div>
  );
}

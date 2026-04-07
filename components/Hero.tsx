"use client";

import { motion } from "framer-motion";
import { ChevronRight, Mail, ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* ── Blobs de fondo ── */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob violeta izquierda arriba */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-700/25 blur-[120px] animate-blob" />
        {/* Blob rosa derecha */}
        <div className="absolute top-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-pink-600/20 blur-[100px] animate-blob animation-delay-2000" />
        {/* Blob cyan abajo centro */}
        <div className="absolute -bottom-20 left-1/3 w-[460px] h-[460px] rounded-full bg-cyan-500/15 blur-[110px] animate-blob animation-delay-4000" />
        {/* Grid decorativo */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Columna izquierda: texto ── */}
          <div>
            <motion.p
              {...fadeUp(0.1)}
              className="section-tag mb-6"
            >
              Hola, soy
            </motion.p>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.05] mb-5"
            >
              <span className="gradient-text">{personalInfo.firstName}</span>
              <br />
              <span className="text-white">{personalInfo.lastName}</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-xl sm:text-2xl text-gray-300 font-medium mb-5"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              {...fadeUp(0.45)}
              className="text-gray-400 leading-relaxed max-w-md mb-10"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              {...fadeUp(0.55)}
              className="flex flex-wrap gap-4"
            >
              <a href="#proyectos" className="btn-primary">
                Ver proyectos <ChevronRight size={16} />
              </a>
              <a href="#contacto" className="btn-secondary">
                <Mail size={16} /> Contacto
              </a>
            </motion.div>

            {/* Stats rápidas */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex gap-10 mt-12"
            >
              {[
                { value: "3+", label: "Años de experiencia" },
                { value: "20+", label: "Proyectos completados" },
                { value: "15+", label: "Clientes satisfechos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug max-w-[80px]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Columna derecha: avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-[340px] h-[340px]">
              {/* Glow ring animado */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #7c3aed, #ec4899, #06b6d4, #7c3aed)",
                  padding: "2px",
                  borderRadius: "50%",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
              </motion.div>

              {/* Glow difuso */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-violet-600/40 via-pink-500/30 to-cyan-500/30 blur-2xl" />

              {/* Círculo interior — reemplazá con tu foto */}
              <div className="absolute inset-2 rounded-full glass overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-violet-900/60 via-[#0d0d18] to-indigo-900/60 flex items-center justify-center">
                  {/*
                    Para agregar tu foto: reemplazá el <div> de arriba con:
                    <Image src="/avatar.jpg" alt="Pedro Tomás Kelly" fill className="object-cover" />
                    y colocá avatar.jpg en /public/
                  */}
                  <span className="font-display text-6xl font-bold text-white/15 select-none tracking-tight">
                    PTK
                  </span>
                </div>
              </div>

              {/* Badges flotantes */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-violet-300 border border-violet-500/30"
              >
                ✦ Diseño UI/UX
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs font-semibold text-cyan-300 border border-cyan-500/30"
              >
                ✦ Desarrollo Web
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

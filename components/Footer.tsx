"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUp } from "lucide-react";
import { personalInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Glow sutil en el borde superior */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"
      />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Marca */}
          <div>
            <a href="#inicio" className="font-display font-bold text-2xl gradient-text inline-block mb-3">
              PTK
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Diseñador y desarrollador creativo. Construyendo experiencias digitales que inspiran.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gray-200 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contacto
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-gray-500 hover:text-pink-400 text-sm transition-colors group"
              >
                <Mail size={15} className="group-hover:scale-110 transition-transform" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-gray-500 hover:text-cyan-400 text-sm transition-colors group"
              >
                <Linkedin size={15} className="group-hover:scale-110 transition-transform" />
                {personalInfo.linkedinName}
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 <span className="text-gray-500">{personalInfo.name}</span>. Todos los derechos reservados.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Volver al inicio"
            className="p-2.5 rounded-xl glass border border-white/8 hover:border-violet-500/30 text-gray-500 hover:text-violet-400 transition-colors"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

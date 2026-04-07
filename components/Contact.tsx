"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

interface FormState {
  nombre: string;
  email: string;
  mensaje: string;
}

interface Errors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.nombre.trim()) e.nombre = "El nombre es requerido.";
    if (!form.email.trim()) {
      e.email = "El email es requerido.";
    } else if (!EMAIL_REGEX.test(form.email)) {
      e.email = "Ingresá un email válido.";
    }
    if (!form.mensaje.trim()) {
      e.mensaje = "El mensaje es requerido.";
    } else if (form.mensaje.trim().length < 10) {
      e.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(
      `Contacto desde Portfolio — ${form.nombre}`
    );
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmail: ${form.email}\n\nMensaje:\n${form.mensaje}`
    );
    window.open(
      `mailto:${personalInfo.email}?subject=${subject}&body=${body}`,
      "_blank"
    );

    setSent(true);
    setForm({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      {/* Blobs */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-700/10 blur-[140px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Contacto</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Trabajemos{" "}
            <span className="gradient-text">juntos</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">
            ¿Tenés un proyecto en mente? Contame tu idea y construyamos algo increíble.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Panel info — izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <InfoCard
              icon={<Mail size={20} />}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              colorClass="text-pink-400"
              borderClass="border-pink-500/20 hover:border-pink-400/40"
            />
            <InfoCard
              icon={<Linkedin size={20} />}
              label="LinkedIn"
              value={personalInfo.linkedinName}
              href={personalInfo.linkedin}
              colorClass="text-cyan-400"
              borderClass="border-cyan-500/20 hover:border-cyan-400/40"
              external
            />

            {/* Mensaje extra */}
            <div className="glass rounded-2xl p-5 mt-2">
              <p className="text-gray-400 text-sm leading-relaxed">
                Generalmente respondo en menos de{" "}
                <span className="text-white font-semibold">24 horas</span>. Si
                preferís, también podés contactarme directamente por LinkedIn.
              </p>
            </div>
          </motion.div>

          {/* Formulario — derecha */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-7 sm:p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center gap-4"
                >
                  <CheckCircle size={48} className="text-emerald-400" />
                  <h3 className="font-display text-xl font-bold text-white">
                    ¡Mensaje listo!
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Se abrió tu cliente de email con el mensaje prellenado. Solo
                    hacé click en Enviar.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Nombre <span className="text-pink-500">*</span>
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      autoComplete="name"
                      placeholder="Tu nombre completo"
                      value={form.nombre}
                      onChange={handleChange}
                      className="form-input"
                      aria-describedby={errors.nombre ? "nombre-error" : undefined}
                      aria-invalid={!!errors.nombre}
                    />
                    {errors.nombre && (
                      <p id="nombre-error" className="mt-1.5 text-xs text-red-400">
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Email <span className="text-pink-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="tu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="form-input"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-gray-300 mb-1.5"
                    >
                      Mensaje <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      placeholder="Contame sobre tu proyecto, idea o consulta..."
                      value={form.mensaje}
                      onChange={handleChange}
                      className="form-input resize-none"
                      aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
                      aria-invalid={!!errors.mensaje}
                    />
                    {errors.mensaje && (
                      <p id="mensaje-error" className="mt-1.5 text-xs text-red-400">
                        {errors.mensaje}
                      </p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary justify-center mt-1">
                    Enviar mensaje <Send size={16} />
                  </button>

                  <p className="text-center text-xs text-gray-600">
                    Al enviar, se abrirá tu cliente de email con el mensaje listo.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  label,
  value,
  href,
  colorClass,
  borderClass,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  colorClass: string;
  borderClass: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`glass rounded-2xl p-5 flex items-center gap-4 border ${borderClass} transition-all duration-200 group`}
    >
      <div
        className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center ${colorClass} flex-shrink-0 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-gray-500 font-medium mb-0.5">{label}</p>
        <p className="text-white text-sm font-semibold truncate group-hover:text-gray-200 transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}

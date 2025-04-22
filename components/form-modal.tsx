import { useState } from "react";
import { motion } from "framer-motion";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FormModal({ isOpen, onClose }: FormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {
      name: formData.name ? "" : "Nome é obrigatório",
      email: /^\S+@\S+\.\S+$/.test(formData.email) ? "" : "E-mail inválido",
      message: formData.message ? "" : "Mensagem obrigatória",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulário enviado:", formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[#1c1c1e] text-white p-8 rounded-2xl border border-[#e0c385] shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-semibold text-center text-[#e0c385] mb-2 tracking-wide">
          Vamos agendar sua data?
        </h2>
        <p className="text-center text-gray-300 mb-6 text-sm leading-relaxed">
          Preencha os dados abaixo e entrarei em contato para confirmar seu agendamento.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="w-full p-3 rounded-lg bg-[#121212] text-sm border border-[#e0c385] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e0c385] transition"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail de contato"
              className="w-full p-3 rounded-lg bg-[#121212] text-sm border border-[#e0c385] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e0c385] transition"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Escreva aqui sua disponibilidade ou o que deseja agendar"
              rows={4}
              className="w-full p-3 rounded-lg bg-[#121212] text-sm border border-[#e0c385] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e0c385] transition resize-none"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#e0c385] to-[#cfa144] text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-yellow-500/30 transition-all"
          >
            Solicitar agendamento
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full mt-3 text-gray-400 hover:text-white text-sm font-medium transition"
          >
            Cancelar
          </button>
        </form>
      </motion.div>
    </div>
  );
}

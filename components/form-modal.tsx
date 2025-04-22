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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[#111] text-white p-8 rounded-2xl border-2 border-[#cfa144] shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-extrabold text-center text-[#cfa144] mb-2 tracking-wide">
          Quer chamar atenção de verdade?
        </h2>
        <p className="text-center text-zinc-300 mb-6 text-sm">
          Preencha o formulário abaixo e descubra como agendar algo com impacto real.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              className="w-full p-3 rounded-xl bg-black border border-zinc-700 focus:border-[#cfa144] outline-none transition"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="w-full p-3 rounded-xl bg-black border border-zinc-700 focus:border-[#cfa144] outline-none transition"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Mensagem"
              rows={4}
              className="w-full p-3 rounded-xl bg-black border border-zinc-700 focus:border-[#cfa144] outline-none transition resize-none"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-extrabold py-3 px-6 rounded-xl shadow-lg transition-all hover:shadow-yellow-500/50"
          >
            Aumentar meu impacto agora
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full mt-2 text-zinc-400 hover:text-white font-semibold transition text-sm"
          >
            Cancelar
          </button>
        </form>
      </motion.div>
    </div>
  );
}

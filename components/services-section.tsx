import Link from "next/link"
import {
  BookOpen,
  FileText,
  Heart,
  Users,
  UserPlus,
  UsersRound,
} from "lucide-react"

const services = [
  {
    id: 1,
    title: "EBOOK",
    description: "Cum sociis natoque penatibus et magnis dis massa.",
    icon: <BookOpen className="w-6 h-6" />,
    whatsappMsg: "Olá! Gostaria de saber mais sobre o Ebook.",
  },
  {
    id: 2,
    title: "PLANILHA",
    description: "Cum sociis natoque penatibus et magnis dis massa.",
    icon: <FileText className="w-6 h-6" />,
    whatsappMsg: "Olá! Me fale mais sobre a Planilha.",
  },
  {
    id: 3,
    title: "LUA DE MEL",
    description: "Cum sociis natoque penatibus et magnis dis massa.",
    icon: <Heart className="w-6 h-6" />,
    whatsappMsg: "Oi! Quero saber mais sobre a Lua de Mel.",
  },
  {
    id: 4,
    title: "8 ENCONTROS DE MENTORIA",
    description: "Cum sociis natoque penatibus et magnis dis massa.",
    icon: <Users className="w-6 h-6" />,
    whatsappMsg: "Olá! Me fale sobre a mentoria com 8 encontros.",
  },
  {
    id: 5,
    title: "12 ENCONTROS DE MENTORIA",
    description: "Cum sociis natoque penatibus et magnis dis massa.",
    icon: <UserPlus className="w-6 h-6" />,
    whatsappMsg: "Gostaria de informações sobre a mentoria com 12 encontros.",
  },
  {
    id: 6,
    title: "24 ENCONTROS DE MENTORIA",
    description: "Cum sociis natoque penatibus et magnis dis massa.",
    icon: <UsersRound className="w-6 h-6" />,
    whatsappMsg: "Oi! Quero detalhes da mentoria com 24 encontros.",
  },
]

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">SERVIÇOS</h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
          Conheça nossas soluções para realizar o casamento dos seus sonhos sem comprometer seu orçamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`https://wa.me/5591999999999?text=${encodeURIComponent(service.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full max-w-sm"
          >
            <div className="bg-white border border-[#cfa144]/40 rounded-[12px] shadow-sm hover:shadow-lg transition-shadow duration-300 h-full p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#cfa144] rounded-md flex items-center justify-center mb-4 text-white">
                {service.icon}
              </div>
              <h3 className="font-serif text-lg text-[#5c5c5c] mb-2 group-hover:text-[#cfa144] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#5c5c5c] mb-4 text-sm">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

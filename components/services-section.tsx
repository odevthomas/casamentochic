import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Consultoria Personalizada",
    description: "Atendimento individual para planejar seu casamento com elegância e economia.",
    link: "/servicos/consultoria",
  },
  {
    id: 2,
    title: "Curso Online",
    description: "Aprenda a organizar seu casamento do zero com nosso curso completo.",
    link: "/servicos/curso",
  },
  {
    id: 3,
    title: "E-book de Decoração",
    description: "Ideias e dicas para uma decoração sofisticada com orçamento controlado.",
    link: "/servicos/ebook",
  },
  {
    id: 4,
    title: "Assessoria de Fornecedores",
    description: "Indicação dos melhores fornecedores com preços especiais para nossas noivas.",
    link: "/servicos/fornecedores",
  },
  {
    id: 5,
    title: "Planilha de Orçamento",
    description: "Controle todos os gastos do seu casamento com nossa planilha exclusiva.",
    link: "/servicos/planilha",
  },
  {
    id: 6,
    title: "Mentoria VIP",
    description: "Acompanhamento completo do planejamento até o grande dia.",
    link: "/servicos/mentoria",
  },
]

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">SERVIÇOS</h2>
        <div className="w-20 h-1 bg-[#b8a369] mx-auto"></div>
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
          Conheça nossas soluções para realizar o casamento dos seus sonhos sem comprometer seu orçamento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service) => (
          <Link href={service.link} key={service.id} className="group block w-full max-w-sm">
            <div className="bg-white border border-[#b8a369]/40 rounded-[12px] shadow-sm hover:shadow-lg transition-shadow duration-300 h-full p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-[#b8a369] rounded-md flex items-center justify-center mb-4 text-white">
                <span className="text-lg font-bold">{service.id}</span>
              </div>
              <h3 className="font-serif text-lg text-[#5c5c5c] mb-2 group-hover:text-[#b8a369] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#5c5c5c] mb-4 text-sm">{service.description}</p>
              <span className="inline-flex items-center text-[#b8a369] font-medium text-sm">
                Saiba mais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

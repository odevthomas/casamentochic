import Link from "next/link"

const plans = [
  {
    id: 1,
    name: "Padrão",
    price: "R$ 9,99",
    period: "por mês",
    features: [
      "Suporte técnico 24 horas por dia, 7 dias por semana",
      "15 projetos",
      "5 GB de armazenamento",
      "Usuários ilimitados",
    ],
    cta: "Contratar serviço",
    link: "/planos/padrao",
    popular: false,
  },
  {
    id: 2,
    name: "Ouro",
    price: "R$ 17,99",
    period: "por mês",
    features: [
      "Suporte técnico 24 horas por dia, 7 dias por semana",
      "25 projetos",
      "15 GB de armazenamento",
      "Usuários ilimitados",
    ],
    cta: "Contratar serviço",
    link: "/planos/ouro",
    popular: false,
  },
  {
    id: 3,
    name: "Premium",
    price: "R$ 34,99",
    period: "por mês",
    features: [
      "Suporte técnico 24 horas por dia, 7 dias por semana",
      "100 projetos",
      "50 GB de armazenamento",
      "Usuários ilimitados",
    ],
    cta: "Assinar Agora",
    link: "/planos/premium",
    popular: true,
  },
]

export default function PricingSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">NOSSOS PLANOS</h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto">
          Escolha o plano ideal para o seu projeto com total liberdade e suporte técnico completo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg relative ${
              plan.popular ? "border-2 border-[#cfa144]" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-[#cfa144] text-white px-4 py-1 text-sm font-serif">
                Popular
              </div>
            )}
            <div className="p-8 text-center">
              <h3 className="font-serif text-2xl text-[#5c5c5c] mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="font-serif text-4xl text-[#cfa144]">{plan.price}</span>
                <span className="text-[#8c8c8c] text-sm"> {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-[#cfa144] mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-[#5c5c5c]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.link}
                className={`inline-block w-full py-3 px-6 rounded-md font-serif transition-colors ${
                  plan.popular
                    ? "bg-[#cfa144] hover:bg-[#cfa144] text-white"
                    : "bg-[#f8f7f4] hover:bg-[#e8e6e1] text-[#5c5c5c]"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

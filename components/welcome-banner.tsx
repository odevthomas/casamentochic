import Link from "next/link"

export default function WelcomeBanner() {
  return (
    <section className="py-16 bg-[#f8f7f4] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-6">
            Realize o casamento dos seus sonhos sem comprometer seu orçamento
          </h2>
          <p className="text-[#5c5c5c] mb-8 text-lg">
            Baixe nossa lista exclusiva com 50 dicas para economizar no seu casamento sem perder a elegância e
            sofisticação.
          </p>
          <Link
            href="/download"
            className="inline-block bg-[#cfa144] hover:bg-[#cfa144] text-white font-serif py-3 px-8 rounded-md transition-colors text-lg"
          >
            Baixar Lista Gratuita
          </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#e8e6e1] rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#e8e6e1] rounded-full opacity-50 translate-x-1/4 translate-y-1/4"></div>
    </section>
  )
}

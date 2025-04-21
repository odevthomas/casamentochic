import Image from "next/image"
import CountUp from "react-countup"

const MAP_IMAGE = "/Mapa4.png"

export default function MapSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#FFF] mb-4">ONDE ATUAMOS</h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-4 text-[#FFF] max-w-2xl mx-auto text-sm sm:text-base">
          Ajudamos noivas em todo o Brasil e no exterior a realizarem o casamento dos seus sonhos.
        </p>
      </div>

      <div className="md:p-6">
        <div className="relative w-full h-[250px] sm:h-[400px] md:h-[380px]">
          <Image
            src={MAP_IMAGE}
            alt="Mapa de atuação com pontos em cidades e países"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0">
            {[ 
              { top: "68%", left: "36%", label: "Brasil" },
              { top: "30%", left: "29%", label: "Groenlândia" },
              { top: "20%", left: "24%", label: "EUA" },
              { top: "53%", left: "45%", label: "África" },
              { top: "38%", left: "62%", label: "Rússia" },
              { top: "75%", left: "75%", label: "Austrália" },
              { top: "88%", left: "34%", label: "Argentina" },
            ].map((point, index) => (
              <div
                key={index}
                className="absolute group"
                style={{ top: point.top, left: point.left }}
              >
                <div className="w-3.5 h-3.5 bg-[#cfa144] rounded-full animate-ping absolute"></div>
                <div className="w-3.5 h-3.5 bg-[#cfa144] rounded-full relative z-10"></div>
                <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-white text-black px-2 py-1 rounded shadow-md text-xs transition-opacity duration-200 whitespace-nowrap">
                  {point.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-[#cfa144] text-4xl font-serif mb-1">
              <CountUp end={15} duration={2} />+
            </div>
            <p className="text-[#FFF] text-sm">Cidades no Brasil</p>
          </div>
          <div className="text-center">
            <div className="text-[#cfa144] text-4xl font-serif mb-1">
              <CountUp end={8} duration={2} />+
            </div>
            <p className="text-[#FFF] text-sm">Países</p>
          </div>
          <div className="text-center">
            <div className="text-[#cfa144] text-4xl font-serif mb-1">
              <CountUp end={500} duration={3} />+
            </div>
            <p className="text-[#FFF] text-sm">Casamentos realizados</p>
          </div>
        </div>
      </div>
    </div>
  )
}

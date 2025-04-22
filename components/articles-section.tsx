import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Aliança de Casamento",
    image: "/Image/Galeria/seucasamento1.jpeg",
    slug: "casamento-cristao",
  },
  {
    id: 2,
    title: "Casamento Cristão",
    slug: "mini-casamento",
    image: "/Image/Galeria/seucasamento2.jpeg",
  },
  {
    id: 3,
    title: "Mini Casamento",
    slug: "vestidos-noiva",
    image: "/Image/Galeria/seucasamento3.jpeg",
  },
  {
    id: 4,
    title: "Casamento da Princesa Beatrice",
    slug: "casamento-princesa-beatrice",
    image: "/Image/Galeria/seucasamento4.jpeg",
  },
  {
    id: 5,
    title: "Sobremesas de Casamento",
    slug: "sobremesas-casamento",
    image: "/Image/Galeria/seucasamento6.jpeg",
  },
  {
    id: 6,
    title: "Orçamento de Bebidas para Casamento",
    slug: "orcamento-bebidas-casamento",
    image: "/Image/Galeria/seucasamento7.jpeg",
  },
  {
    id: 7,
    title: "Penteados para Noivas",
    slug: "penteados-noivas",
    image: "/Image/Galeria/seucasamento8.jpeg",
  },
  {
    id: 8,
    title: "Madrinhas",
    slug: "buque-noivas-versao-2",
    image: "/Image/Galeria/seucasamento9.jpeg",
  },
  {
    id: 10,
    title: "Vestidos de Noiva",
    slug: "vestidos-noiva",
    image: "/Image/Galeria/seucasamento10.jpeg",
  },
];

export default function ArticlesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#5c5c5c] mb-4">SEU CASAMENTO</h2>
        <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>
        <p className="mt-6 text-[#5c5c5c] max-w-2xl mx-auto text-sm md:text-base">
          Dicas, inspirações e histórias para ajudar no planejamento do seu casamento.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {articles.map((article) => (
          <Link href={`/blog/${article.slug}`} key={article.id} className="group">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-lg h-full">
              <div className="relative aspect-[4/3]">
                <Image
                  src={article.image || "/placeholder.svg?height=600&width=800"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-serif text-base md:text-lg leading-tight">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/blog"
          className="inline-block bg-[#cfa144] hover:bg-[#a8832c] text-white font-serif text-lg px-8 py-3 rounded-lg transition-colors duration-300"
        >
          Ver Todos os Artigos
        </Link>
      </div>
    </section>
  );
}

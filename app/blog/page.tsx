import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { articles } from "@/app/data/articles";
import LanguageSelector  from "@/components/language-selector";

export const metadata: Metadata = {
  title: "Blog | Casamento Chic Pagando Pouco",
  description: "Dicas, inspirações e guias para realizar o casamento dos seus sonhos gastando menos.",
};

const NAV_ITEMS = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Contato", href: "/contato" },
];

export default function BlogPage() {
  const scrollToSection = (id: string) => {};

  const categories = [
    { id: "all", name: "Todos os Artigos" },
    { id: "casamento-chic", name: "Casamento Chic" },
    { id: "gastando-pouco", name: "Gastando Pouco" },
    { id: "origem", name: "Origem do Casamento" },
  ];

  const featuredArticles = articles.slice(0, 3);
  const regularArticles = articles.slice(3);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-[#e8e6e1] shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="font-serif text-2xl text-[#cfa144] font-medium">
            Casamento Chic
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-serif text-[#5c5c5c] hover:text-[#cfa144] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button className="md:hidden text-[#5c5c5c]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image src="/images/blog-hero.jpg" alt="Blog Casamento Chic" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Blog Casamento Chic</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Dicas, inspirações e guias para realizar o casamento dos seus sonhos gastando menos
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl text-center mb-12">Artigos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <Link href={`/artigo/${article.slug}`}>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md mb-4">
                    <Image
                      src={article.image || "/placeholder.svg?height=600&width=400"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end">
                      <div className="p-4 w-full">
                        <span className="inline-block px-2 py-1 bg-[#222] text-white text-xs rounded mb-2">
                          {article.category === "casamento-chic"
                            ? "Casamento Chic"
                            : article.category === "gastando-pouco"
                            ? "Gastando Pouco"
                            : article.category === "origem"
                            ? "Origem do Casamento"
                            : "Artigo"}
                        </span>
                        <h3 className="font-serif text-xl text-white">{article.title}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <h3 className="font-serif text-xl mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{article.date}</p>
                <p className="text-gray-700 line-clamp-3 mb-4">{article.excerpt}</p>
                <Link href={`/artigo/${article.slug}`} className="text-[#222] hover:text-amber-700 font-medium">
                  Ler mais →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="font-serif text-3xl text-center mb-6">Todos os Artigos</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="outline"
                className="border-[#222] text-[#222] hover:bg-amber-600/10"
              >
                {category.name}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg?height=200&width=400"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="inline-block px-2 py-1 bg-[#222] text-white text-xs rounded">
                      {article.category === "casamento-chic"
                        ? "Casamento Chic"
                        : article.category === "gastando-pouco"
                        ? "Gastando Pouco"
                        : article.category === "origem"
                        ? "Origem do Casamento"
                        : "Artigo"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{article.date}</p>
                  <h3 className="font-serif text-xl mb-2">{article.title}</h3>
                  <p className="text-gray-700 line-clamp-3 mb-4">{article.excerpt}</p>
                  <Link href={`/artigo/${article.slug}`} className="text-[#222] hover:text-amber-700 font-medium">
                    Ler mais →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <Button variant="outline" className="border-gray-300">
                Anterior
              </Button>
              <Button className="bg-[#222] hover:bg-amber-700">1</Button>
              <Button variant="outline" className="border-gray-300">
                2
              </Button>
              <Button variant="outline" className="border-gray-300">
                3
              </Button>
              <Button variant="outline" className="border-gray-300">
                Próxima
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-[#222] text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl mb-4">Receba Nossas Dicas Exclusivas</h2>
          <p className="text-lg mb-6">Assine nossa newsletter e fique por dentro das últimas novidades sobre casamentos e dicas para economizar!</p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full max-w-xs py-2 px-4 rounded-l-md border-2 border-[#e8e6e1] text-[#222]"
            />
            <Button type="submit" className="py-2 px-6 rounded-r-md bg-amber-700 text-white">
              Inscrever-se
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#222] text-white">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Casamento Chic. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/" className="text-white">Início</Link>
            <Link href="/sobre" className="text-white">Sobre</Link>
            <Link href="/servicos" className="text-white">Serviços</Link>
            <Link href="/contato" className="text-white">Contato</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

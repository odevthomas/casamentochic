"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Share2, Heart, MessageCircle, PhoneIcon as WhatsApp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { articles } from "@/app/data/articles"

export default function ArticlePage() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string
  const [article, setArticle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const foundArticle = articles.find((a) => a.slug === slug)

    if (foundArticle) {
      setArticle(foundArticle)
    }

    setIsLoading(false)
  }, [slug])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-2xl">Carregando...</div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-serif mb-4">Artigo não encontrado</h1>
        <p className="mb-8">O artigo que você está procurando não existe ou foi removido.</p>
        <Button onClick={() => router.push("/")} variant="outline">
          Voltar para a página inicial
        </Button>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <a
        href="https://wa.me/5511984973182?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Casamento%20Chic%20Pagando%20Pouco."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Contato via WhatsApp"
      >
        <WhatsApp className="h-6 w-6" />
      </a>

      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold">
          <img src="/favicon.png" alt="Logo Casamento Chic" className="h-20 w-20" />
          </Link>
         
          <Button onClick={() => router.push("/")} variant="ghost" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" /> Voltar
          </Button>
        </div>
      </header>

      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" /> {article.author}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl mb-4">{article.title}</h1>
              <p className="text-lg md:text-xl opacity-90">{article.excerpt}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <article className="prose prose-lg max-w-none">
              {article.content.map((section: any, index: number) => {
                switch (section.type) {
                  case "paragraph":
                    return <p key={index}>{section.content}</p>
                  case "heading":
                    return <h2 key={index} className="font-serif text-2xl md:text-3xl mt-8 mb-4">{section.content}</h2>
                  case "image":
                    return (
                      <figure key={index} className="my-8">
                        <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
                          <Image
                            src={section.url || "/placeholder.svg"}
                            alt={section.caption || ""}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {section.caption && (
                          <figcaption className="text-center text-gray-500 mt-2">{section.caption}</figcaption>
                        )}
                      </figure>
                    )
                  case "quote":
                    return <blockquote key={index} className="border-l-4 border-[#d4af37] pl-4 italic my-6">{section.content}</blockquote>
                  case "list":
                    return (
                      <ul key={index} className="list-disc pl-5 my-4">
                        {section.items.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )
                  default:
                    return null
                }
              })}
            </article>

            <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-2 ${liked ? "text-red-500" : "text-gray-500"}`}
                >
                  <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
                  <span>{liked ? "Curtido" : "Curtir"}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500">
                  <MessageCircle className="h-5 w-5" />
                  <span>Comentar</span>
                </button>
              </div>
              <button className="flex items-center gap-2 text-gray-500">
                <Share2 className="h-5 w-5" />
                <span>Compartilhar</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="sticky top-24">
              <div className="bg-[#f9f7f4] p-6 rounded-lg mb-8">
                <h3 className="font-serif text-xl mb-4">Sobre o Autor</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image
                      src={article.authorImage || "/images/author.jpg"}
                      alt={article.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{article.author}</h4>
                    <p className="text-sm text-gray-500">{article.authorRole}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{article.authorBio}</p>
              </div>

              <div className="bg-[#f9f7f4] p-6 rounded-lg mb-8">
                <h3 className="font-serif text-xl mb-4">Artigos Relacionados</h3>
                <div className="space-y-4">
                  {articles
                    .filter((a) => a.slug !== slug && a.category === article.category)
                    .slice(0, 3)
                    .map((relatedArticle, index) => (
                      <Link href={`/artigo/${relatedArticle.slug}`} key={index}>
                        <div className="group flex gap-3">
                          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={relatedArticle.image || "/placeholder.svg"}
                              alt={relatedArticle.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-[#d4af37] transition-colors">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-xs text-gray-500">{relatedArticle.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              <div className="bg-[#222] text-white p-6 rounded-lg">
                <h3 className="font-serif text-xl mb-4">Receba Mais Dicas</h3>
                <p className="text-sm mb-4">
                  Cadastre-se para receber conteúdo exclusivo sobre casamentos e economizar no seu grande dia.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full p-2 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button className="w-full bg-white text-black hover:bg-white/90">Receber dicas</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#222] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Casamento Chic</h3>
              <p className="text-gray-400 mb-4">
                Te ensinamos a organizar um casamento chic, o casamento dos seus sonhos, gastando até 50% menos.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#d4af37] transition-colors">Instagram</a>
                <a href="#" className="text-white hover:text-[#d4af37] transition-colors">YouTube</a>
                <a href="#" className="text-white hover:text-[#d4af37] transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

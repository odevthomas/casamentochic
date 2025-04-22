import type { MetadataRoute } from "next"
import { articles } from "./data/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://casamentochic.com.br"

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/landing/casamento-economico`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]

  // Páginas de artigos
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/artigo/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages]
}

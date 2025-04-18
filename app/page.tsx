'use client'

import { useState } from 'react';

import HeroCarousel from "@/components/hero-carousel";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import GallerySection from "@/components/gallery-section";
import HairstyleSection from "@/components/hairstyle-section";
import InstagramSection from "@/components/instagram-section";
import ServicesSection from "@/components/services-section";
import PricingSection from "@/components/pricing-section";
import ArticlesSection from "@/components/articles-section"
import ContactSection from "@/components/contact-section";
import TestimonialsSection from "@/components/testimonials-section";
import PartnersSection from "@/components/partners-section";
import MapSection from "@/components/map-section";
import InspirationSection from "@/components/inspiration-section";
import PaymentSection from "@/components/payment-section";
import WhatsappButton from "@/components/whatsapp-button";
import LanguageSelector from "@/components/language-selector";
import ParallaxSection from "@/components/parallax-section";

import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Navegação
const NAV_ITEMS = [
  { name: "Início", href: "#home" },
  { name: "Sobre", href: "#sobre" },
  { name: "Equipe", href: "#equipe" },
  { name: "Galeria", href: "#galeria" },
  { name: "Serviços", href: "#servicos" },
  { name: "Planos", href: "#planos" },
  { name: "Artigos", href: "#artigos" },
  { name: "Contato", href: "#contato" },
];

// Redes Sociais
const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  }
];

// Artigos mockados
const articles = [
  {
    slug: 'casamento-dos-sonhos',
    title: 'Como planejar o casamento dos sonhos',
    category: 'casamento-chic',
    image: '/images/artigos/artigo1.jpg'
  },
  {
    slug: 'casamento-barato',
    title: 'Dicas para casar gastando pouco',
    category: 'gastando-pouco',
    image: '/images/artigos/artigo2.jpg'
  },
  {
    slug: 'origem-casamento',
    title: 'Você conhece a origem do casamento?',
    category: 'origem',
    image: '/images/artigos/artigo3.jpg'
  },
  {
    slug: 'tendencias-2025',
    title: 'Tendências de casamento para 2025',
    category: 'novas',
    image: '/images/artigos/artigo4.jpg'
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');

  // Corrigido: Movi a constante filteredArticles para dentro do componente Home
  const filteredArticles = articles.filter(article =>
    activeTab === 'all' || article.category === activeTab
  );

  return (
    <div className="min-h-screen">
      {/* HEADER */}
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-24">
        <section id="home"><HeroCarousel /></section>
        <section id="sobre" className="py-10">
          <AboutSection />
        </section>

        <section id="servicos" className="py-10 bg-white">
          <ServicesSection />
        </section>
        <section id="planos" className="py-10 bg-[#f8f7f4]">
          <PricingSection />
        </section>
        <section id="pagamento" className="py-10">
          <PaymentSection />
        </section>
        <section id="depoimentos" className="py-10">
          <TestimonialsSection />
        </section>
        <section  className="py-10">
          <WhatsappButton />
        </section>

        <section className="py-10 bg-[#222]">
          <InstagramSection />
        </section>

          {/* Articles Section */}
          <section id="blog" className="py-20 bg-white">
          <ArticlesSection />
        </section>
          <section id="inspiracoes" className="py-20 bg-white">
          <InspirationSection />
        </section>

        <section id="equipe" className="py-10">
          <TeamSection />
        </section>
        
        <section  className="py-10">
          <MapSection />
        </section>

        <section id="contato" className="py-10 bg-gray-100">
          <ContactSection />
        </section>

        {/* FOOTER */}
        <footer className="bg-[#222] text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <a href="/" className="font-serif text-2xl">Casamento Chic</a>

              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-[#cfa144] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

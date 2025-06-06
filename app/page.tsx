'use client';

import { useState, useEffect } from 'react';
import { articles as articleData } from './data/articles'; // Importando a lista de artigos corretamente

import HeroCarousel from '@/components/hero-carousel';
import AboutSection from '@/components/about-section';
import TeamSection from '@/components/team-section';
import InstagramSection from '@/components/instagram-section';
import ServicesSection from '@/components/services-section';
import PricingSection from '@/components/pricing-section';
import ContactSection from '@/components/contact-section';
import TestimonialsSection from '@/components/testimonials-section';
import PartnersSection from '@/components/partners-section';
import MapSection from '@/components/map-section';
import InspirationSection from '@/components/inspiration-section';
import PaymentSection from '@/components/payment-section';
import WhatsappButton from '@/components/whatsapp-button';
import LanguageSelector from "../components/language-selector";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Planos', href: '#planos' },
  { name: 'Artigos', href: '#portfolio' },
  { name: 'Contato', href: '#contato' },
];

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollTop = 0;

  const filteredArticles = articleData.filter((article) => activeTab === 'all' || article.category === activeTab);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsHidden(true); // Scroll para baixo, ocultar o header
      } else {
        setIsHidden(false); // Scroll para cima, mostrar o header
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <header className={`fixed top-0 z-50 w-full transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="/favicon.png" alt="Logo Casamento Chic" className="h-20 w-20" />
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.name} href={item.href} className="font-serif text-[#FFF] hover:text-[#cfa144] transition-colors">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button className="md:hidden text-[#FFF]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
        <main className="pt-18">
        <section id="home">
          <HeroCarousel />
        </section>
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
        <section className="py-10">
          <WhatsappButton />
        </section>
        <section className="py-10 bg-[#222]">
          <InstagramSection />
        </section>
        <section id="portfolio" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#222] mb-4">SEU CASAMENTO</h2>
              <div className="w-20 h-1 bg-[#cfa144] mx-auto"></div>

              <p className="mt-4 text-[#222] max-w-2xl mx-auto text-sm sm:text-base">Clique na foto e veja a Matéria</p>
            </div>

            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="bg-[#222] text-white rounded-full px-2">
                  {[{ value: 'all', label: 'Mostrar Tudo' }, { value: 'casamento-chic', label: 'Casamento Chic' }, { value: 'gastando-pouco', label: 'Gastando Pouco' }, { value: 'novas', label: 'Matérias Novas' }, { value: 'origem', label: 'Origem do Casamento' }].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="px-4 py-2 mx-1 text-sm font-medium transition-colors duration-300 rounded-full hover:text-[#cfa144] data-[state=active]:text-[#cfa144] data-[state=active]:border-b-2 data-[state=active]:border-[#cfa144]"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredArticles.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true, margin: '-100px' }}
                      className="group cursor-pointer"
                    >
                      <Link href={`./artigo/${article.slug}`}>
                        <div className="relative aspect-[3/4] overflow-hidden rounded-md shadow-md">
                          <Image
                            src={article.image || '/placeholder.svg?height=600&width=400'}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors" />
                          <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <h3 className="font-serif text-white text-xl font-semibold text-center">{article.title}</h3>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="inspiracoes" className="py-20 bg-white">
          <InspirationSection />
        </section>

        <section className="py-10 bg-[#222]">
          <MapSection />
        </section>
  
        <section id="contato" className="py-10 bg-gray-100">
          <ContactSection />
        </section>
  
        <footer className="bg-[#222] text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="font-serif text-2xl">Casamento Chic</div>
              <div className="flex space-x-6">
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.name} href={link.href} className="text-white hover:text-[#cfa144]" target="_blank" rel="noopener noreferrer">
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

"use client"

import HeroSection from './components/HeroSection';
import { Sprout, Computer, ShieldCheck } from 'lucide-react';
import  Image  from 'next/image';


//import PlaceholderImage from './components/PlaceholderImage';


export default function HomePage() {

  return (
    <div className="bg-stone-50 min-h-screen">

  <HeroSection 
        title="A Força da Tradição"
        highlightedText="do Vale do São Francisco"
        description="Transformamos a riqueza natural em produtos de madeira excepcionais, combinando robustez e elegância em cada peça. Qualidade superior e sustentabilidade em harmonia com a natureza."
        imageUrl="https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/c9d30451-58ad-4abe-91a9-35c0c055dc8b/Leonardo_Kino_XL_A_stunningly_crafted_eucalyptus_wood_hero_sec_2.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"  // Substitua pela URL real da imagem
  />

      {/* Nossos Valores */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Valores que nos <a className="text-brand-green-light hover:text-green-700">Movem</a>
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Nossa essência é a excelência, a sustentabilidade e a inovação. Estes são os pilares que nos movem e nos diferenciam.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green-dark to-brand-olive rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <Computer className="h-12 w-12 text-brand-green-dark mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tradição e Inovação</h3>
                <p className="text-gray-600">Expertise tradicional combinada com tecnologia de ponta para resultados excepcionais.</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-olive to-brand-green-light rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <ShieldCheck className="h-12 w-12 text-brand-green-dark mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Qualidade Superior</h3>
                <p className="text-gray-600">Compromisso inabalável com a excelência para que em cada produto que entregamos, seja o melhor.</p>
              </div>
            </div>
            <div className="relative group sm:col-span-2 lg:col-span-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green-light to-brand-green-dark rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <Sprout className="h-12 w-12 text-brand-green-dark mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sustentabilidade</h3>
                <p className="text-gray-600">Gestão responsável dos recursos florestais para que o futuro dos nossos filhos seja mais verde.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Missão */}
      <div className="relative py-20 bg-brand-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="text-base text-brand-green-light font-semibold tracking-wide uppercase mb-2">
                Nossa Missão
              </h2>
              <p className="text-4xl font-extrabold text-white tracking-tight">
                Transformando Natureza em Excelência
              </p>
              <div className="mt-6 prose prose-lg text-gray-200">
                <p>
                  Do coração do Vale do São Francisco, nossa missão é transformar a riqueza natural em produtos de madeira que superam expectativas.
                </p>
                <p className="mt-4">
                  Através de práticas sustentáveis e inovação constante, criamos soluções que combinam durabilidade excepcional com beleza única.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image className="w-full h-full object-cover"
                  src="https://i.ibb.co/zGDSDNK/og-image.jpg"
                  alt="Processo de produção"
                  width={500}
                  height={500}
                />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-brown-light/90 to-brand-brown-dark/90" />
          <Image 
          src=""
          alt="Produtos de madeira"
          className="w-full h-full object-cover"
          width={1920}
          height={600}
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 lg:p-20">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Pronto para Começar
                  <span className="block text-brand-green-light mt-2">
                    Seu Projeto?
                  </span>
                </h2>
                <p className="mt-6 text-xl text-gray-200 max-w-3xl">
                  Transforme suas ideias em realidade com a qualidade e expertise da Madeiras do Vale.
                </p>
              </div>
              <div className="mt-8 lg:mt-0 flex flex-col space-y-4">
                <a
                  href="/get-quote"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-brand-brown-dark bg-white hover:bg-gray-100 transition-colors"
                >
                  Solicitar Orçamento
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
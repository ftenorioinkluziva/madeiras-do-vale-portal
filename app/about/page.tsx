"use client"
import { Shield, TreePine, Leaf, Recycle } from 'lucide-react';
//import { useState } from "react";
import HeroSection from '../components/HeroSection';
import Image from 'next/image';
import CTAFinal from '../components/CTAFinal';


export default function AboutPage() {

  return (
    <div className="bg-stone-50 min-h-screen">

    {/* Hero Section */}
    <HeroSection 
        title="Do Vale do São Francisco"
        highlightedText="para o Mundo"
        description="Nascida no coração do Vale do São Francisco, a Madeiras do Vale representa o encontro perfeito entre tradição e inovação na indústria madeireira."
        imageUrl="https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/c9d30451-58ad-4abe-91a9-35c0c055dc8b/Leonardo_Kino_XL_A_stunningly_crafted_eucalyptus_wood_hero_sec_2.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"  // Substitua pela URL real da imagem
     />


      {/* Essência da Marca */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Nossa Essência
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Somos sinônimo de robustez e singularidade. Com um compromisso inabalável com a qualidade e a sustentabilidade, lideramos a criação de produtos de madeira que combinam durabilidade excepcional com uma estética imbatível.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Cada peça que oferecemos carrega a força e a beleza única das florestas que nos inspiram, estabelecendo novos padrões de excelência no mercado.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-6">
              <Image  
              src="https://i.ibb.co/0DFbhF8/3047930e-25a2-41fc-82bb-9b0dc8510be8.jpg"
              width={400}
              height={300}
              alt="Imagem 1"
              className="rounded-lg shadow-lg"
              />
              <Image  
              src="https://i.ibb.co/DVx8pBd/24b45d0b-4c97-4bdf-9bad-f867a2562633.jpg"
              width={400}
              height={300}
              alt="Imagem 1"
              className="rounded-lg shadow-lg"
              />
              <Image  
              src="https://i.ibb.co/0y8Q9jf/df7a8572-3d2d-407c-a71d-94190a020e05.jpg"
              width={400}
              height={300}
              alt="Imagem 1"
              className="rounded-lg shadow-lg"
              />
              <Image  
              src="https://i.ibb.co/2tfgK6x/30544550-0609-4b87-a8b6-848911746046.jpg"
              width={400}
              height={300}
              alt="Imagem 1"
              className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Missão e Visão */}
      <div className="relative py-20 bg-brand-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <TreePine className="h-10 w-10 text-brand-green-light" />
                <h3 className="ml-4 text-2xl font-bold text-white">Nossa Missão</h3>
              </div>
              <p className="text-gray-200">
                Transformar a riqueza natural do Vale do São Francisco em produtos de madeira de alta qualidade que atendam e superem as expectativas de nossos clientes. Comprometemo-nos a praticar uma gestão sustentável dos recursos florestais, preservando o meio ambiente para as gerações futuras.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Leaf className="h-10 w-10 text-brand-green-light" />
                <h3 className="ml-4 text-2xl font-bold text-white">Nossa Visão</h3>
              </div>
              <p className="text-gray-200">
                Ser reconhecida como a marca de referência global em produtos de madeira, destacando-se pela excelência, sustentabilidade e inovação. Aspiramos a ser a escolha preferida para aqueles que buscam a combinação perfeita de robustez e elegância.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nossos Valores */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Nossos Valores
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Fundamentamos nossa atuação em valores sólidos que orientam cada decisão e cada produto que desenvolvemos.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green-dark to-brand-olive rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <Shield className="h-12 w-12 text-brand-green-dark mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excelência</h3>
                <p className="text-gray-600">Buscamos a perfeição em cada detalhe, desde a seleção da matéria-prima até o acabamento final.</p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-olive to-brand-green-light rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <Recycle className="h-12 w-12 text-brand-green-dark mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sustentabilidade</h3>
                <p className="text-gray-600">Compromisso com práticas sustentáveis e preservação ambiental em todos os processos.</p>
              </div>
            </div>
            <div className="relative group sm:col-span-2 lg:col-span-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-green-light to-brand-green-dark rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white p-8 rounded-lg">
                <Leaf className="h-12 w-12 text-brand-green-dark mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inovação</h3>
                <p className="text-gray-600">Constante busca por novas tecnologias e processos para oferecer o melhor em produtos de madeira.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTAFinal />
    </div>
  )
}
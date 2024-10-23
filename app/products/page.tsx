"use client"

import Image from "next/image"
import HeroSection from '../components/HeroSection';
//import Link from "next/link"
import { useState } from "react";
import { Shield, TreePine, Construction, Grid, Fence } from 'lucide-react';
import CTAFinal from "../components/CTAFinal";
//import PlaceholderImage from "../components/PlaceholderImage"


// Define an interface for the product type
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
  icon: React.ReactNode;
  applications: string[];
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // Updated product array with image paths
  const products: Product[] = [
    {
      id: 1,
      name: "Madeira Tratada para Construção",
      description: "Eucalipto tratado de alta qualidade, ideal para projetos estruturais e construções sustentáveis.",
      image: "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/fb59acaa-67b4-4828-bab7-0642cd19b08b/Leonardo_Kino_XL_Treated_Eucalyptus_LumberHighquality_treated_0.jpg",
      features: [
        "Alta resistência mecânica",
        "Tratamento em autoclave",
        "Certificação de qualidade",
        "Diversas dimensões disponíveis"
      ],
      icon: <Construction className="h-6 w-6" />,
      applications: [
        "Estruturas de telhado",
        "Pérgolas",
        "Gazebos",
        "Construções rurais"
      ]
    },
    {
      id: 2,
      name: "Madeiras para Paisagismo",
      description: "Peças especialmente selecionadas e tratadas para criar ambientes externos deslumbrantes.",
      image: "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/8e4571d8-610a-4d53-bd23-db730e619ad3/Leonardo_Kino_XL_Paisagismo_de_um_jardim_com_casa_de_madeira_d_1.jpg",
      features: [
        "Acabamento premium",
        "Resistência às intempéries",
        "Baixa manutenção",
        "Design versátil"
      ],
      icon: <TreePine className="h-6 w-6" />,
      applications: [
        "Decks",
        "Jardins",
        "Áreas de lazer",
        "Mobiliário externo"
      ]
    },
    {
      id: 3,
      name: "Mourões para Cerca",
      description: "Mourões robustos e duráveis para cercamento de áreas rurais e urbanas.",
      image: "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/68c3c3e0-1e38-484d-924d-7cfea287d7d1/Leonardo_Kino_XL_eucalyptus_fence_posts_for_agricultural_2.jpg",
      features: [
        "Alta durabilidade",
        "Tratamento especializado",
        "Resistência garantida",
        "Padrão uniforme"
      ],
      icon: <Fence className="h-6 w-6" />,
      applications: [
        "Cercas rurais",
        "Delimitação de áreas",
        "Contenções",
        "Estruturas de suporte"
      ]
    }
  ];
  {/*const products: Product[] = [
    {
      name: "Treated Eucalyptus Lumber",
      description: "High-quality treated eucalyptus lumber for construction projects.",
      image: "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/fb59acaa-67b4-4828-bab7-0642cd19b08b/Leonardo_Kino_XL_Treated_Eucalyptus_LumberHighquality_treated_0.jpg",
    },
    {
      name: "Landscaping Timbers",
      description: "Durable eucalyptus timbers perfect for garden and landscape design.",
      image: "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/8e4571d8-610a-4d53-bd23-db730e619ad3/Leonardo_Kino_XL_Paisagismo_de_um_jardim_com_casa_de_madeira_d_1.jpg",
    },
    {
      name: "Fence Posts",
      description: "Long-lasting eucalyptus fence posts for agricultural and residential use.",
      image: "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/68c3c3e0-1e38-484d-924d-7cfea287d7d1/Leonardo_Kino_XL_eucalyptus_fence_posts_for_agricultural_2.jpg",
    },
    {
      name: "Decking Boards",
      description: "Beautiful and resilient eucalyptus decking boards for outdoor living spaces.",
      image: "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/53170e99-dd55-4793-b30a-2a7546d0cf28/Leonardo_Kino_XL_Decking_Boards_Beautiful_and_resilient_eucaly_3.jpg",
    },
    {
      name: "Custom Milling Services",
      description: "Tailored milling services to meet your specific project requirements.",
      image: "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/db913b3e-038b-4d8f-b588-7c2b57f2e1e1/Leonardo_Kino_XL_Custom_Milling_Services_Tailored_milling_serv_1.jpg",
    },
    {
      name: "Eucalyptus Poles",
      description: "Versatile eucalyptus poles for various construction and landscaping applications.",
      image: "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/182655f6-1b01-4d3f-b3d3-84cef7b2077d/Leonardo_Kino_XL_Versatile_eucalyptus_poles_for_various_constr_1.jpg",
    },
  ]
*/}
return (
  <div className="bg-stone-50 min-h-screen">

    {/* Hero Section */}
    <HeroSection 
        title="Soluções em Madeira de"
        highlightedText="Qualidade Superior"
        description="Do Vale do São Francisco para seus projetos, oferecemos produtos que combinam durabilidade excepcional com beleza natural."
        imageUrl="https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/c9d30451-58ad-4abe-91a9-35c0c055dc8b/Leonardo_Kino_XL_A_stunningly_crafted_eucalyptus_wood_hero_sec_2.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"  // Substitua pela URL real da imagem
    />


    {/* Filtros e Categorias */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            selectedCategory === 'all'
              ? 'bg-brand-green-dark text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Todos os Produtos
        </button>
        <button
          onClick={() => setSelectedCategory('construction')}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            selectedCategory === 'construction'
              ? 'bg-brand-green-dark text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Construção
        </button>
        <button
          onClick={() => setSelectedCategory('landscaping')}
          className={`px-6 py-3 rounded-full font-medium transition-colors ${
            selectedCategory === 'landscaping'
              ? 'bg-brand-green-dark text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Paisagismo
        </button>
      </div>
    </div>

    {/* Lista de Produtos */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2">
              <Image className="w-full h-full object-cover"
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
              />
              </div>
              <div className="absolute top-4 left-4 bg-brand-green-dark text-white p-3 rounded-full">
                {product.icon}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-brand-green-dark" />
                    Características
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2 text-brand-green-dark">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Grid className="h-5 w-5 mr-2 text-brand-green-dark" />
                    Aplicações
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.applications.map((application, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2 text-brand-green-dark">•</span>
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <a
                href="/get-quote"
                className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-green-dark hover:bg-brand-green-light transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Final */}
    <CTAFinal />
  </div>
  )
}
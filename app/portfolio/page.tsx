"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from 'next/image'
import HeroSection from "../components/HeroSection"
import CTAFinal from "../components/CTAFinal"

const projects = [
  {
    id: 1,
    title: "Deck Residencial de Alto Padrão",
    description: "Projeto residencial com deck em eucalipto tratado, combinando durabilidade e sofisticação.",
    category: "Área de Lazer",
    location: "Petrolina, PE",
    area: "120m²",
    images: [
      "https://i.ibb.co/wN4SmJh/A-luxury-residential-deck-made-from-treated-e-0.jpg",
      "https://i.ibb.co/wN4SmJh/A-luxury-residential-deck-made-from-treated-e-0.jpg",
  	  "https://i.ibb.co/pJznFV4/A-luxury-residential-deck-made-from-treated-e-2.jpg",
      "https://i.ibb.co/c1cz63p/A-luxury-residential-deck-made-from-treated-e-3.jpg"
    ],
    features: [
      "Madeira de eucalipto premium",
      "Acabamento personalizado",
      "Resistência UV",
      "Garantia de 10 anos"
    ]
  },
  {
    id: 2,
    title: "Cercamento de Propriedade Rural",
    description: "Projeto de cercamento completo utilizando mourões de eucalipto tratado de alta durabilidade.",
    category: "Área Rural",
    location: "Juazeiro, BA",
    area: "5000m lineares",
    images: [
      "https://i.ibb.co/6PY1GvQ/A-beautifully-crafted-rural-property-enclosur-3.jpg",
      "https://i.ibb.co/LNZGYcv/A-beautifully-crafted-rural-property-enclosur-2.jpg",
      "https://i.ibb.co/RHGrmPp/A-beautifully-crafted-rural-property-enclosur-2-1.jpg",
      "https://i.ibb.co/C5D7tCN/A-beautifully-crafted-rural-property-enclosur-1.jpg",
      "https://i.ibb.co/N9ZT6qV/A-beautifully-crafted-rural-property-enclosur-0.jpg"
    ],
    features: [
      "Mourões de eucalipto certificados",
      "Tratamento em autoclave",
      "Alta resistência mecânica",
      "Durabilidade garantida"
    ]
  },
  {
    id: 3,
    title: "Revitalização de Parque Municipal",
    description: "Projeto completo de mobiliário urbano em eucalipto tratado para área de lazer pública.",
    category: "Projeto Urbano",
    location: "Paulo Afonso, BA",
    area: "800m²",
    images: [
      "https://i.ibb.co/2y8Ccqy/Leonardo-Kino-XL-Comprehensive-park-renovation-featuring-our-t-0-1.jpg",
      "https://i.ibb.co/hcj843c/Leonardo-Kino-XL-Comprehensive-park-renovation-featuring-our-t-1-1.jpg",
      "https://i.ibb.co/9n908bb/Leonardo-Kino-XL-Comprehensive-park-renovation-featuring-our-t-2-1.jpg",
      "https://i.ibb.co/xmYDwzw/Leonardo-Kino-XL-Comprehensive-park-renovation-featuring-our-t-3-1.jpg"
    ],
    features: [
      "Bancos e pergolados",
      "Deck para área de convivência",
      "Estruturas de sombreamento",
      "Resistência a intempéries"
    ]
  },
]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState('todos')

  const handleLightbox = {
    open: (projectId: number, imageIndex: number) => {
      setSelectedProject(projectId)
      setCurrentImageIndex(imageIndex)
    },
    close: () => {
      setSelectedProject(null)
      setCurrentImageIndex(0)
    },
    next: () => {
      if (selectedProject !== null) {
        const project = projects.find(p => p.id === selectedProject)
        if (project) {
          setCurrentImageIndex((currentImageIndex + 1) % project.images.length)
        }
      }
    },
    prev: () => {
      if (selectedProject !== null) {
        const project = projects.find(p => p.id === selectedProject)
        if (project) {
          setCurrentImageIndex((currentImageIndex - 1 + project.images.length) % project.images.length)
        }
      }
    }
  }

  return (
    <div className="bg-stone-50 min-h-screen">
    <HeroSection 
        title="Projetos Madeiras do"
        highlightedText="Vale"
        description="Conheça alguns dos nossos trabalhos que demonstram a qualidade e versatilidade do eucalipto tratado do Vale do São Francisco."
        imageUrl="https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/c9d30451-58ad-4abe-91a9-35c0c055dc8b/Leonardo_Kino_XL_A_stunningly_crafted_eucalyptus_wood_hero_sec_2.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  // Substitua pela URL real da imagem
    />


      {/* Filtros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {['todos', 'Área de Lazer', 'Área Rural', 'Projeto Urbano'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-brand-green-dark text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Projetos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter(project => activeFilter === 'todos' || project.category === activeFilter)
            .map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image className="w-full h-full object-cover cursor-pointer"
                    src={project.images[0]}
                    alt={project.title}
                    onClick={() => handleLightbox.open(project.id, 0)}
                    width={500}
                    height={500}
                  />
                  <div className="absolute top-4 left-4 bg-brand-green-dark text-white px-4 py-2 rounded-full text-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Localização:</span>
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-medium mr-2">Área:</span>
                      {project.area}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-2">Destaques do Projeto</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-brand-green-dark mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.images.slice(1, 4).map((image, index) => (
                      <div key={index} className="h-16 w-16">
                        <Image className="w-full h-full object-cover rounded cursor-pointer"
                          width={500}
                          height={500}
                          src={image}
                          alt={`${project.title} thumbnail ${index + 1}`}  
                          onClick={() => handleLightbox.open(project.id, index + 1)}
                        />
                      </div>
                    ))}
                    {project.images.length > 4 && (
                      <div
                        className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center cursor-pointer"
                        onClick={() => handleLightbox.open(project.id, 4)}
                      >
                        <span className="text-gray-600 font-semibold">+{project.images.length - 4}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
        {/* Lightbox */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="relative max-w-5xl w-full mx-4">
              <button
                onClick={handleLightbox.close}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                aria-label="Fechar visualização"
              >
                <X className="h-8 w-8" />
              </button>
            
              <div className="relative">
                <Image 
                  className="mx-auto max-h-[80vh] object-contain"
                  src={projects.find(p => p.id === selectedProject)?.images[currentImageIndex] || ''}
                  width={500}
                  height={500}
                  alt={`Imagem do projeto ${currentImageIndex + 1}`}
                />
              
                <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between">
                  <button
                    onClick={handleLightbox.prev}
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transform -translate-y-1/2"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                  <button
                    onClick={handleLightbox.next}
                    className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-3 transform -translate-y-1/2"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </div>
              </div>

              <div className="text-white text-center mt-4">
                <h3 className="text-xl font-bold">
                  {projects.find(p => p.id === selectedProject)?.title}
                </h3>
                <p className="text-gray-300 mt-2">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
        <CTAFinal />
      </div>
  )
}
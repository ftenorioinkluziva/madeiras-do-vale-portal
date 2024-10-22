"use client"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// This would typically come from a database or API
const projects = [
  {
    id: 1,
    title: "Luxury Deck Construction",
    description: "A high-end residential deck project using our premium eucalyptus decking boards.",
    images: [
      "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/db913b3e-038b-4d8f-b588-7c2b57f2e1e1/Leonardo_Kino_XL_Custom_Milling_Services_Tailored_milling_serv_0.jpg",
      "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/db913b3e-038b-4d8f-b588-7c2b57f2e1e1/Leonardo_Kino_XL_Custom_Milling_Services_Tailored_milling_serv_2.jpg",
    ],
  },
  {
    id: 2,
    title: "Sustainable Farm Fencing",
    description: "Large-scale agricultural fencing project utilizing our durable eucalyptus fence posts.",
    images: [
      "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/68c3c3e0-1e38-484d-924d-7cfea287d7d1/Leonardo_Kino_XL_eucalyptus_fence_posts_for_agricultural_3.jpg",
      "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/68c3c3e0-1e38-484d-924d-7cfea287d7d1/Leonardo_Kino_XL_eucalyptus_fence_posts_for_agricultural_2.jpg",
      "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/68c3c3e0-1e38-484d-924d-7cfea287d7d1/Leonardo_Kino_XL_eucalyptus_fence_posts_for_agricultural_1.jpg",
    ],
  },
  {
    id: 3,
    title: "Urban Park Renovation",
    description: "Comprehensive park renovation featuring our treated eucalyptus lumber for benches and structures.",
    images: [
      "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/a9b1a828-cd53-4a58-8b22-442a888fc56e/Leonardo_Kino_XL_Comprehensive_park_renovation_featuring_our_t_3.jpg",
      "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/a9b1a828-cd53-4a58-8b22-442a888fc56e/Leonardo_Kino_XL_Comprehensive_park_renovation_featuring_our_t_2.jpg",
      "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/a9b1a828-cd53-4a58-8b22-442a888fc56e/Leonardo_Kino_XL_Comprehensive_park_renovation_featuring_our_t_1.jpg",
      "https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/a9b1a828-cd53-4a58-8b22-442a888fc56e/Leonardo_Kino_XL_Comprehensive_park_renovation_featuring_our_t_0.jpg",
    ],
  },
  // Add more projects as needed
]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (projectId: number, imageIndex: number) => {
    setSelectedProject(projectId)
    setCurrentImageIndex(imageIndex)
  }

  const closeLightbox = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projects.find(p => p.id === selectedProject)
      if (project) {
        setCurrentImageIndex((currentImageIndex + 1) % project.images.length)
      }
    }
  }

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projects.find(p => p.id === selectedProject)
      if (project) {
        setCurrentImageIndex((currentImageIndex - 1 + project.images.length) % project.images.length)
      }
    }
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Portfolio Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Portfolio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Showcasing Our Finest Work
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore our diverse range of projects featuring our premium eucalyptus wood products.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.id} className="bg-white overflow-hidden shadow-lg rounded-lg">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="cursor-pointer"
                      onClick={() => openLightbox(project.id, 0)}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <p className="mt-2 text-gray-600">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.images.slice(1, 4).map((image, index) => (
                        <div key={index} className="relative h-16 w-16">
                          <Image
                            src={image}
                            alt={`${project.title} thumbnail ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded cursor-pointer"
                            onClick={() => openLightbox(project.id, index + 1)}
                          />
                        </div>
                      ))}
                      {project.images.length > 4 && (
                        <div
                          className="h-16 w-16 bg-gray-200 rounded flex items-center justify-center cursor-pointer"
                          onClick={() => openLightbox(project.id, 4)}
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
        </div>
      </div>

      {/* Lightbox */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-96 md:h-[32rem] bg-white">
                <Image
                  src={projects.find(p => p.id === selectedProject)?.images[currentImageIndex] || ''}
                  alt={`Project image ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="absolute left-4 right-4 bottom-4 flex justify-between">
                <button
                  onClick={prevImage}
                  className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
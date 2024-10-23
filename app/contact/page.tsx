"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, MessageSquare, Building2, Truck } from "lucide-react"
import Image from 'next/image'
import HeroSection from "../components/HeroSection"
import CTAFinal from "../components/CTAFinal"


interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Sobre qualquer dúvida ou solicitação"
        highlightedText="Fale Conosco."
        description="Estamos prontos para atender você e desenvolver a melhor solução em madeira tratada para seu projeto."
        imageUrl="https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/c9d30451-58ad-4abe-91a9-35c0c055dc8b/Leonardo_Kino_XL_A_stunningly_crafted_eucalyptus_wood_hero_sec_2.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"  // Substitua pela URL real da imagem
    />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cards de Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-brand-green-dark rounded-lg flex items-center justify-center text-white mb-4">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Escritório Central</h3>
            <p className="text-gray-600">
              Localizado no coração do Vale do São Francisco, com fácil acesso e amplo estacionamento.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-brand-green-dark rounded-lg flex items-center justify-center text-white mb-4">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Entrega Nacional</h3>
            <p className="text-gray-600">
              Atendemos todo o território nacional com nossa rede de distribuição especializada.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-brand-green-dark rounded-lg flex items-center justify-center text-white mb-4">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Suporte Técnico</h3>
            <p className="text-gray-600">
              Equipe especializada para auxiliar em todas as etapas do seu projeto.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulário de Contato */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-green-dark focus:border-brand-green-dark"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-green-dark focus:border-brand-green-dark"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-green-dark focus:border-brand-green-dark"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-green-dark focus:border-brand-green-dark"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-green-dark focus:border-brand-green-dark"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva como podemos ajudar você..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-green-dark hover:bg-brand-green-light transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-green-dark/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-brand-green-dark" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">E-mail</p>
                    <p className="text-gray-600">contato@madeirasdovale.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-green-dark/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-5 w-5 text-brand-green-dark" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Telefone</p>
                    <p className="text-gray-600">(87) 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-green-dark/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-brand-green-dark" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Endereço</p>
                    <p className="text-gray-600">
                      Rua do Eucalipto, 123<br />
                      Petrolina, PE - CEP: 56000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-brand-green-dark/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-5 w-5 text-brand-green-dark" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Horário de Funcionamento</p>
                    <p className="text-gray-600">
                      Segunda a Sexta: 08h às 18h<br />
                      Sábado: 08h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Nossa Localização</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <Image className="w-full h-full object-cover"
                  src="/api/placeholder/800/400"
                  width={800}
                  height={400}
                  alt="Mapa de localização"
                />
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <CTAFinal />
    </div>
  )
}
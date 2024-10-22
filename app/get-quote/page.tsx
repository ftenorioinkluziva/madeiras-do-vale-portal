"use client"

import { useState } from "react";
//import Image from "next/image";
import HeroSection from "../components/HeroSection";

import { 
  Ruler, 
  Calendar, 
  Truck, 
  ClipboardCheck,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  productType: string;
  quantity: string;
  deadline: string;
  location: string;
  details: string;
}

export default function GetQuotePage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    productType: '',
    quantity: '',
    deadline: '',
    location: '',
    details: ''
  });

  const [step, setStep] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log(formData);
    alert('Orçamento solicitado com sucesso! Entraremos em contato em breve.');
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <HeroSection 
        title="Do Vale do São Francisco para seu "
        highlightedText="Projeto"
        description="Estamos prontos para fornecer a solução ideal em madeira de eucalipto tratado do Vale do São Francisco para suas necessidades."
        imageUrl="https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/c9d30451-58ad-4abe-91a9-35c0c055dc8b/Leonardo_Kino_XL_A_stunningly_crafted_eucalyptus_wood_hero_sec_2.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"  // Substitua pela URL real da imagem
    />

{/* Formulário de Orçamento */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="bg-white shadow-lg rounded-lg p-8">
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-ellipsis text-gray-900">Solicite seu Orçamento</h2>
      <p className="text-gray-600">
        Quanto mais detalhes você fornecer, melhor poderemos entender e atender suas necessidades.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-8">
      {step === 1 && (
        <>
          <div className="space-y-8">
            {/* Informações Pessoais */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Informações de Contato</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-green-dark hover:bg-brand-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-dark"
            >
              Próximo
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="space-y-8">
            {/* Detalhes do Projeto */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalhes do Projeto</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
                    Tipo de Projeto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="construcao">Construção Civil</option>
                    <option value="paisagismo">Paisagismo</option>
                    <option value="rural">Área Rural</option>
                    <option value="comercial">Área Comercial</option>
                    <option value="residencial">Área Residencial</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-gray-700">
                    Tipo de Produto *
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                    required
                  >
                    <option value="">Selecione...</option>
                    <option value="madeira-tratada">Madeira Tratada</option>
                    <option value="mourao">Mourões</option>
                    <option value="deck">Deck</option>
                    <option value="pergolado">Pergolado</option>
                    <option value="cerca">Cercamento</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                    Quantidade Estimada *
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    placeholder="Ex: 100 metros lineares, 50 unidades"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
                    Prazo Desejado
                  </label>
                  <input
                    type="text"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    placeholder="Ex: 30 dias, 2 meses"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                    Local de Entrega *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Cidade/Estado"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                    Detalhes Adicionais do Projeto
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={6}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-green-dark focus:border-brand-green-dark sm:text-sm  text-gray-700"
                    placeholder="Descreva detalhes específicos do seu projeto, medidas especiais, acabamentos desejados ou qualquer outra informação relevante."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-dark"
            >
              Voltar
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-brand-green-dark hover:bg-brand-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-dark"
            >
              Solicitar Orçamento
            </button>
          </div>
        </>
      )}
    </form>
  </div>
</div>
      {/* Processo de Orçamento */}
      <div className="bg-gray-50 py-16 bg-gradient-to-r from-brand-brown-light to-brand-brown-dark/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white-900">Como Funciona</h2>
            <p className="mt-4 text-lg text-white">
              Processo simplificado para você obter seu orçamento de forma rápida e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ClipboardCheck className="h-8 w-8" />,
                title: "1. Solicite seu Orçamento",
                description: "Preencha o formulário com os detalhes do seu projeto"
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "2. Análise Técnica",
                description: "Nossa equipe avaliará suas necessidades em até 24h"
              },
              {
                icon: <Ruler className="h-8 w-8" />,
                title: "3. Proposta Detalhada",
                description: "Você receberá uma proposta personalizada e completa"
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: "4. Aprovação e Entrega",
                description: "Após aprovação, organizamos a produção e entrega"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-brand-green-dark rounded-lg flex items-center justify-center text-white mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ - Perguntas Frequentes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
          <p className="mt-4 text-lg text-gray-600">
            Tire suas principais dúvidas sobre nosso processo de orçamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              question: "Qual o prazo para receber o orçamento?",
              answer: "Nosso compromisso é responder todas as solicitações em até 24 horas úteis."
            },
            {
              question: "Vocês fazem entrega em todo Brasil?",
              answer: "Sim, realizamos entregas em todo o território nacional através de transportadoras parceiras."
            },
            {
              question: "É possível solicitar amostras dos produtos?",
              answer: "Sim, disponibilizamos amostras mediante solicitação para projetos específicos."
            },
            {
              question: "Oferecem suporte técnico?",
              answer: "Sim, nossa equipe técnica está disponível para auxiliar em todas as etapas do seu projeto."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )}
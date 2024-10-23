import React from 'react';

const CTAFinal: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-brown-light/90 to-brand-brown-dark/90" />
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
  );
};

export default CTAFinal;

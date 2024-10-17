import type { Metadata } from "next";
//import Image from 'next/image'
//import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sobre Nós | Madeiras do Vale - Nossa História e Valores",
  description: "Conheça a Madeiras do Vale, líder em eucalipto tratado. Descubra nossa história, compromisso com a sustentabilidade e excelência em produtos de madeira.",
  openGraph: {
    title: "Sobre a Madeiras do Vale - Tradição em Eucalipto Tratado",
    description: "Mais de duas décadas de experiência em soluções sustentáveis de madeira. Conheça nossa jornada e compromisso com a qualidade.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-stone-50 min-h-screen">

      {/* About Us Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-brand-olive font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Madeiras do Vale: Your Trusted Wood Partner
            </p>
            <p className="mt-4 max-w-2xl text-xl text-brand-green-dark lg:mx-auto">
              With over two decades of experience, we ve been at the forefront of sustainable eucalyptus wood solutions.
            </p>
          </div>

          <div className="mt-20">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-olive text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-brand-green-dark">Sustainable Practices</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We are committed to sustainable forestry practices, ensuring that our products are environmentally friendly and responsibly sourced.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-olive text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-brand-green-dark">Quality Assurance</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our rigorous quality control processes ensure that every product meets the highest standards of durability and performance.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-olive text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-brand-green-dark">Innovation</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We continuously invest in research and development to improve our products and processes, staying at the forefront of the industry.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-olive text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-brand-green-dark">Customer Support</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our dedicated team of experts is always ready to provide guidance and support, ensuring your projects success from start to finish.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
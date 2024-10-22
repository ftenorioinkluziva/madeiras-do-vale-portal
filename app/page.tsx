"use client"

import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {

  return (
    <div className="bg-stone-50 min-h-screen">

  {/* Hero Section */}
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0  bg-brand-green-dark overflow-hidden">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-brand-green-dark transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image src="https://cdn.leonardo.ai/users/a5b938ed-a440-4cf6-a923-a28d2c4ae909/generations/c9d30451-58ad-4abe-91a9-35c0c055dc8b/Leonardo_Kino_XL_A_stunningly_crafted_eucalyptus_wood_hero_sec_2.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt={"Eucalyptus wood products"}         
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            width={1260}
            height={750}
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h1 className="text-4xl tracking-tight font-sf-pro font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Quality Eucalyptus Wood</span>{" "}
            <span className="block text-brand-green-light xl:inline">for Your Projects</span>
          </h1>
          <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Madeiras do Vale provides premium treated eucalyptus wood products and services for construction and landscaping.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
              href="/get-quote"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-sf-pro font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              > Get a Quote
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
              href="/contact"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
              > Contact Us
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* End Hero Section */}

      {/* Company Introduction */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-brand-olive font-semibold tracking-wide uppercase">About Madeiras do Vale</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sustainable Wood Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              With over 20 years of experience, Madeiras do Vale is committed to providing high-quality eucalyptus wood products while promoting sustainable forestry practices.
            </p>
          </div>
        </div>
      </div>

      {/* Highlighted Products and Services */}
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Our Products and Services</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Treated Lumber", description: "High-quality treated eucalyptus lumber for construction projects." },
              { name: "Landscaping Timbers", description: "Durable eucalyptus timbers perfect for garden and landscape design." },
              { name: "Custom Milling", description: "Custom milling services to meet your specific project needs." },
            ].map((product) => (
              <div key={product.name} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 truncate">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
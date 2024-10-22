"use client"

import Image from "next/image"
import Link from "next/link"
//import PlaceholderImage from "../components/PlaceholderImage"


// Define an interface for the product type
interface Product {
  name: string;
  description: string;
  image: string;
}

export default function ProductsPage() {
  // Updated product array with image paths
  const products: Product[] = [
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

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Products Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-brand-green-dark font-semibold tracking-wide uppercase">Our Products</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Quality Eucalyptus Wood Solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover our range of premium treated eucalyptus wood products for your construction and landscaping needs.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.name} className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <Image
                      src={product.image}
                      width={600}
                      height={400}
                      alt={product.name}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.description}</p>
                </div>
              ))}            
              </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Need a custom solution?</h3>
            <p className="mt-4 text-lg text-gray-500">
              Our team of experts is ready to help you find the perfect wood solution for your project.
            </p>
            <div className="mt-8">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-green-dark hover:bg-brand-green-light"
              >
                Contact Us for Custom Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
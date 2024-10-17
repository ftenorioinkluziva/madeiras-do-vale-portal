//import Image from 'next/image'
import Link from 'next/link'
import PlaceholderImage from '../components/PlaceholderImage'

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
      name: 'Treated Eucalyptus Lumber',
      description: 'High-quality treated eucalyptus lumber for construction projects.',
      image: 'treated-lumber',
    },
    {
      name: 'Landscaping Timbers',
      description: 'Durable eucalyptus timbers perfect for garden and landscape design.',
      image: '/images/landscaping-timbers.jpg',
    },
    {
      name: 'Fence Posts',
      description: 'Long-lasting eucalyptus fence posts for agricultural and residential use.',
      image: '/images/fence-posts.jpg',
    },
    {
      name: 'Decking Boards',
      description: 'Beautiful and resilient eucalyptus decking boards for outdoor living spaces.',
      image: '/images/decking-boards.jpg',
    },
    {
      name: 'Custom Milling Services',
      description: 'Tailored milling services to meet your specific project requirements.',
      image: '/images/custom-milling.jpg',
    },
    {
      name: 'Eucalyptus Poles',
      description: 'Versatile eucalyptus poles for various construction and landscaping applications.',
      image: '/images/eucalyptus-poles.jpg',
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
                  <PlaceholderImage
                      width={600}
                      height={400}
                      text={product.name}
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
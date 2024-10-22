"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"


export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:  "",
    productType:  "",
    quantity: "",
    additionalInfo: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your server or API
    console.log("Form submitted:", formData)
    // Reset form or show success message
    alert("Your quote request has been submitted. We will contact you soon!")
  }

  return (
    <div className="bg-stone-50 min-h-screen">

      {/* Get a Quote Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Request a Quote</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get Pricing for Your Project
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Fill out the form below, and we ll provide you with a custom quote for your eucalyptus wood needs.
            </p>
          </div>

          <div className="mt-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm font-medium text-gray-700"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm font-medium text-gray-700"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm font-medium text-gray-700"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="productType" className="block text-sm font-medium text-gray-700">Product Type</label>
                <div className="relative mt-1">
                  <select
                    name="productType"
                    id="productType"
                    required
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 appearance-none text-sm font-medium text-gray-700"
                    value={formData.productType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a product</option>
                    <option value="lumber">Treated Eucalyptus Lumber</option>
                    <option value="timbers">Landscaping Timbers</option>
                    <option value="posts">Fence Posts</option>
                    <option value="decking">Decking Boards</option>
                    <option value="poles">Eucalyptus Poles</option>
                    <option value="custom">Custom Milling</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Estimated Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  placeholder="e.g., 100 linear feet, 50 posts"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 text-sm font-medium text-gray-700"
                  value={formData.quantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  id="additionalInfo"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Please provide any additional details about your project or specific requirements."
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Request Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
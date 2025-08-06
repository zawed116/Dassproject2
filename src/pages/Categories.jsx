// src/pages/Categories.jsx
import React from 'react';

const Categories = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Background image for the entire page */}
      <div className="fixed inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" 
          alt="background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Section 1: Main Heading with background */}
      <section className="mb-12 relative bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-md">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="section background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">What do you need designed?</h1>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Logo & identity', 'Web & app design', 'Business & advertising', 
            'Clothing & merchandise', 'Art & illustration', 'Packaging & label', 
            'Book & magazine'].map((category) => (
            <button 
              key={category}
              className="px-6 py-3 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors text-left backdrop-blur-sm bg-opacity-70"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8"></div>

      {/* Section 2: Pricing Packages with background */}
      <section className="grid md:grid-cols-2 gap-8 relative bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-6 shadow-md">
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-xl">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" 
            alt="section background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Package 1 */}
        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white bg-opacity-70 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-2">Logo design</h2>
          <p className="text-gray-600 font-medium mb-2">from US$209</p>
          <p className="text-gray-700 mb-4">An unforgettable logo crafted for your brand</p>
          <a href="#" className="text-blue-600 font-medium">Save US$70</a>
        </div>

        {/* Package 2 */}
        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white bg-opacity-70 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-2">Logo & brand guide</h2>
          <p className="text-gray-600 font-medium mb-2">from US$429</p>
          <p className="text-gray-700 mb-4">Extend your logo design into a real brand with matching fonts, colors and style</p>
          <ul className="space-y-2 mb-4">
            {['Logo', 'Brand guide document'].map((item) => (
              <li key={item} className="flex items-center">
                <span className="mr-2">✔️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="text-blue-600 font-medium">Save 23%</a>
        </div>

        {/* Package 3 */}
        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white bg-opacity-70 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-2">Brand starter pack</h2>
          <p className="text-gray-600 font-medium mb-2">from US$509</p>
          <p className="text-gray-700 mb-4">A logo, business card and social assets to make an impression on and offline</p>
          <ul className="space-y-2 mb-4">
            {['Logo', 'Brand guide', 'Social media assets', 'Business card'].map((item) => (
              <li key={item} className="flex items-center">
                <span className="mr-2">✔️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="text-blue-600 font-medium">Save 53%</a>
        </div>

        {/* Package 4 */}
        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow bg-white bg-opacity-70 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-2">Brand launch pack</h2>
          <p className="text-gray-600 font-medium mb-2">from US$609</p>
          <p className="text-gray-700 mb-4">A logo, brand guide plus digital and print materials to launch your business</p>
          <ul className="space-y-2 mb-4">
            {['Logo', 'Brand guide', 'Social media assets', 'Business card', 'Protocol flyer', 'Letterhead'].map((item) => (
              <li key={item} className="flex items-center">
                <span className="mr-2">✔️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="text-blue-600 font-medium">Save 33%</a>
        </div>







        <div className="relative rounded-xl overflow-hidden shadow-lg h-96 w-full max-w-2xl mx-auto">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" 
      alt="Brand Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  </div>

  {/* Content */}
  <div className="relative h-full flex flex-col justify-between p-8 text-white">
    <div>
      <h2 className="text-3xl font-bold mb-2">Full-Service Brand Pack</h2>
      <p className="text-2xl font-medium">from US$4,499</p>
      <p className="text-lg mt-2">A strategically crafted brand identity, guided end-to-end by your personal Brand Strategist</p>
    </div>

    <div>
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
        <span className="font-medium">by dallbor_ngch</span>
      </div>
      <p className="italic pt-4 border-t border-white border-opacity-30">
        Still haven't found what you're looking for? Search and ye shall find
      </p>
    </div>
  </div>
</div>












      </section>


      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
    
    {/* Column 1: Company */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Company</h3>
      <ul className="space-y-2">
        {['About', 'Contact', 'Careers', 'Team', 'Press releases', 'In the media', 'Testimonials', '99nonprofits'].map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 2: Design services */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Design services</h3>
      <ul className="space-y-2">
        {['Design contests', '1-to-1 Projects', 'Find a designer', 'Discover inspiration', 'Pricing', '99designs Studio', '99designs Pro', 'Browse all categories'].map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 3: Get a design */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Get a design</h3>
      <ul className="space-y-2">
        {['Logo design', 'Business card', 'Web page design', 'Brand guide', 'Packaging design', 'T-shirt design', 'Book cover design', 'Designer resources'].map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 4: Resources */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Resources</h3>
      <ul className="space-y-2">
        {['Become a designer', 'Blog', 'Design without borders', '99awards', 'Affiliates', 'Logo ideas', 'T-shirt ideas', 'Featured partners'].map((item) => (
          <li key={item}>
            <a href="#" className="text-gray-600 hover:text-gray-900">{item}</a>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 5: Help (shown only on lg screens) */}
    <div className="hidden lg:block">
      <h3 className="text-lg font-semibold mb-4">Help</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a>
        </li>
      </ul>
    </div>

  </div>
</div>
    </div>
  );
};

export default Categories;
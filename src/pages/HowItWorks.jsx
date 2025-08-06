import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Brief',
      description: 'Tell us about your project and design needs.'
    },
    {
      number: '2',
      title: 'Connect',
      description: 'We match you with the perfect designer for your project.'
    },
    {
      number: '3',
      title: 'Collaborate',
      description: 'Work directly with your designer to create amazing results.'
    }
  ];

  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">How it works</h2>
        
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          We make great design work happen with our global community of professional designers. 
          If you'd like to speak to a human, talk to one of our design experts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start bg-white/90 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg mr-3">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 pl-13">{step.description}</p>
            </div>
          ))}
        </div>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
          Get started
        </button>
      </div>







      <div class="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    
    <div class="relative h-full rounded-lg overflow-hidden shadow-xl">
      <img 
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
        alt="Design workspace" 
        class="w-full h-full object-cover min-h-[400px]"
      />
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    
    <div class="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Tell us what you need designed</h2>
      
      <p class="text-lg text-gray-700 mb-8">
        Start by creating a simple brief to help designers understand your design needs
      </p>
      
      <div class="mb-10">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Features:</h3>
        <ul class="space-y-2">
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-gray-700">Only takes a few minutes</span>
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-gray-700">Captures your style and space</span>
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-gray-700">From super simple to crazy complex projects</span>
          </li>
        </ul>
      </div>
      
      <div class="mb-10">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Common Questions:</h3>
        <ul class="space-y-3">
          <li>
            <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline flex items-center">
              <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              What can I get designed?
            </a>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline flex items-center">
              <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How long does it take?
            </a>
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:text-blue-800 hover:underline flex items-center">
              <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How much does it cost?
            </a>
          </li>
        </ul>
      </div>
      
      <div class="text-center">
        <a href="#" class="inline-block px-6 py-2 text-blue-600 hover:text-blue-800 font-medium hover:underline">
          Read more FAQs
        </a>
      </div>
    </div>
  </div>
</div>







<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
 
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
         alt="Design pattern background" 
         class="w-full h-full object-cover opacity-5"
    />
  </div>

  <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-12">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Hire a designer</h1>
    <p class="text-gray-600 mb-6">We'll help you find a designer you'll love so you can collaborate together closely on your brief.</p>
    
    <div class="flex items-center mb-6">
      <div class="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-lg mr-4">
        jpadesign
      </div>
      <div class="flex items-center">
        <span class="text-gray-700 mr-2">Top Level</span>
        <div class="text-yellow-400">
          ★★★★★★
        </div>
      </div>
    </div>
    
    <div class="border-t border-gray-200 pt-6 mb-6"></div>
    
    <ul class="space-y-3 mb-8">
      <li class="flex items-start">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-gray-700">Design experts in over 90 skill sets</span>
      </li>
      <li class="flex items-start">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-gray-700">Review portfolios and request quotes</span>
      </li>
      <li class="flex items-start">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-gray-700">All designers vetted for quality</span>
      </li>
    </ul>
    
    <div class="mb-6">
      <h4 class="font-bold text-gray-800 mb-3">We recommend this for...</h4>
      <div class="flex items-center text-gray-600 mb-2">
        <span class="mr-2">+</span>
        <span>How much do designers charge?</span>
      </div>
      <div class="flex items-center text-gray-600">
        <span class="mr-2">+</span>
        <span>How do you screen designer quality?</span>
      </div>
    </div>
    
    <a href="#" class="text-blue-600 hover:underline font-medium">Read more FAQs</a>
  </div>


  <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Start a contest</h1>
    <p class="text-gray-600 mb-6">Open your brief to our entire design community. Designers submit their ideas and you pick your favorite design.</p>
    
    <div class="mb-6">
      <div class="font-bold">Asaci Varas</div>
      <div class="text-gray-500">Mexico</div>
    </div>
    
    <div class="mb-6">
      <div class="font-bold">Winner</div>
      <div class="text-gray-500">1</div>
    </div>
    
    <div class="font-bold text-lg mb-6">MEI BOURNE 2018</div>
    
    <div class="border-t border-gray-200 pt-6 mb-6"></div>
    
    <ul class="space-y-3 mb-8">
      <li class="flex items-start">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-gray-700">Creative concepts from multiple designers</span>
      </li>
      <li class="flex items-start">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-gray-700">Select one design to own</span>
      </li>
      <li class="flex items-start">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span class="text-gray-700">100% money-back guarantee</span>
      </li>
    </ul>
    
    <div class="mb-6">
      <h4 class="font-bold text-gray-800 mb-3">We recommend this for...</h4>
      <div class="flex items-center text-gray-600 mb-2">
        <span class="mr-2">+</span>
        <span>How much are contests?</span>
      </div>
      <div class="flex items-center text-gray-600">
        <span class="mr-2">+</span>
        <span>How does a contest finish?</span>
      </div>
    </div>
    
    <a href="#" class="text-blue-600 hover:underline font-medium">Read more FAQs</a>
  </div>
</div>









<div class="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
   
  <div class="p-8 border-b border-gray-200">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">
      Finalize your design and continue working together
    </h1>
    <p class="text-gray-600 mb-6">
      Once you're happy with your design, you can begin discussing your next project together.
    </p>
    
    
    <ul class="space-y-3 mb-8">
      <li class="flex items-start">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Securely release payment upon completion</span>
      </li>
      <li class="flex items-start">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Production ready files for print and digital</span>
      </li>
      <li class="flex items-start">
        <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>Copyright and ownership is all yours</span>
      </li>
    </ul>
    
   
    <div class="space-y-2 mb-8">
      <p>What files do I need?</p>
      <p>Where are my design files stored?</p>
      <p>Can I keep working with my designer?</p>
    </div>
     
    
    <div class="border-t border-gray-200 my-6"></div>
    
    
    <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md">
      Get started
    </button>
  </div>
  
 
  <div class="p-8 border-b border-gray-200 bg-gray-50">
    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg shadow-sm max-w-xs">
        <p class="font-medium">Hey, can you make it yellow?</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm max-w-xs ml-8">
        <p>You got it. How's that?</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-sm max-w-xs">
        <p class="font-medium">Love it! Now I need a T-shirt design...</p>
      </div>
    </div>
  </div>
 
  <div class="p-8">
    <p class="font-bold text-lg">ARTISANAL CUFFEE NET 250 ML</p>
    <p class="text-gray-500 text-sm">by Kayshod</p>
  </div>
</div>










<div class="max-w-6xl mx-auto px-4 py-8">

  <div class="flex justify-center items-center gap-12 mb-8 border-b pb-6">
    <div class="text-center">
      <h1 class="text-xl font-bold mb-2">WALL STREET JOURNAL</h1>
      <p class="font-semibold text-gray-700">TechCrunch</p>
      <p class="text-gray-600">Entrepreneur</p>
    </div>
    <div class="text-center">
      <h2 class="text-xl font-bold">The New York Times</h2>
      <p class="font-semibold text-gray-700 mt-2">Forbes</p>
    </div>
  </div>


   
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
     
    <div>
      <h3 class="font-bold text-gray-900 mb-3">Company</h3>
      <ul class="space-y-2 text-gray-600">
        <li>About</li>
        <li>Contact</li>
        <li>Careers</li>
        <li>Team</li>
        <li>Press releases</li>
        <li>In the media</li>
        <li>Testimonials</li>
        <li>99nonprofits</li>
      </ul>
    </div>

   
    <div>
      <h3 class="font-bold text-gray-900 mb-3">Design services</h3>
      <ul class="space-y-2 text-gray-600">
        <li>Design contests</li>
        <li>1-to-1 Projects</li>
        <li>Find a designer</li>
        <li>Discover inspiration</li>
        <li>Pricing</li>
        <li>99designs Studio</li>
        <li>99designs Pro</li>
      </ul>
    </div>

   
    <div>
      <h3 class="font-bold text-gray-900 mb-3">Get a design</h3>
      <ul class="space-y-2 text-gray-600">
        <li>Logo design</li>
        <li>Business card</li>
        <li>Web page design</li>
        <li>Brand guide</li>
        <li>Packaging design</li>
        <li>T-shirt design</li>
        <li>Book cover design</li>
        <li>Browse all categories</li>
      </ul>
    </div>
 
    <div>
      <h3 class="font-bold text-gray-900 mb-3">Resources</h3>
      <ul class="space-y-2 text-gray-600">
        <li>Become a designer</li>
        <li>Blog</li>
        <li>Design without borders</li>
        <li>99awards</li>
        <li>Affiliates</li>
        <li>Logo ideas</li>
        <li>T-shirt ideas</li>
        <li>Designer resources</li>
        <li>Featured partners</li>
        <li>Help</li>
      </ul>
    </div>
  </div>
</div>










    </section>
  );
};

export default HowItWorks;
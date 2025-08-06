// src/components/Studio/StudioHero.js
import React from 'react';

const StudioHero = () => {
  return (
    <div className="bg-white">
      {/* Main Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
          <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden">
            <img 
              src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2022%2F09%2F13%2F15%2F51%2F36%2F95d3ecce-7b04-419c-9436-b865a901c70d%2FLedgermatic-Square-05.png?auto=format&ch=Width%2CDPR" 
              alt="Pro Sstudio creative work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Pro</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">Sstudio</h2>
            
            <p className="text-lg font-medium mb-6">
              The brand agency for 99designs
            </p>
            
            <p className="text-gray-700 mb-8">
              Your creative project, led by strategists who love to build brands and know the 99d community by heart:
            </p>
            
            <ul className="space-y-3 mb-10">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Dedicated Brand Strategist leading your brief</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We'll shape your brand story with the top talent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>More than visual identity; business naming, brand messaging, campaigns & more</span>
              </li>
            </ul>
            
            <div className="border-t border-gray-200 pt-6 mb-8">
              <p className="font-bold mb-4">Talk to us</p>
              <a 
                href="#" 
                className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
              >
                Get the full-service brand pack →
              </a>
            </div>
            
            <div className="text-sm text-gray-500">
              <p className="mb-2">Illustration by SPN99</p>
              <div className="space-y-1">
                <p>Oligen</p>
                <p>Oligen</p>
                <p>by SPN99</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Portfolio Showcase Section */}
      <div className="py-20 px-8 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our recent brand transformations that helped businesses stand out in competitive markets

              Studio is brought to you by Circlemakers, an independent collective of experienced Brand Strategists who help you get the best from the crowd. We work with a global network of creatives to bring the best ideas to your brief, and implement them cohesively: 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2022%2F09%2F13%2F15%2F51%2F57%2F72c110fb-213a-4095-9f1b-a72af0f14eb5%2FLedgermatic-Square-04%20%281%29.png?auto=format&ch=Width%2CDPR" 
                alt="Brand Identity Project"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h4 className="text-white font-bold text-xl">Ledgermatic</h4>
                  <p className="text-gray-200">Brand Identity & Web Design</p>
                </div>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2022%2F09%2F13%2F15%2F51%2F47%2F3a867824-e218-44bf-846b-f742e0d2a581%2FOligen-Square-02%20%281%29.png?auto=format&ch=Width%2CDPR" 
                alt="Campaign Design"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h4 className="text-white font-bold text-xl">Oligen</h4>
                  <p className="text-gray-200">Product Branding & Campaign</p>
                </div>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://99designs-start-attachments.imgix.net/alchemy-pictures/2022%2F09%2F13%2F15%2F51%2F21%2Fae15b6ce-5ab7-4934-b0cf-1315198db490%2FNivea-01.png?auto=format&ch=Width%2CDPR" 
                alt="Naming Project"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h4 className="text-white font-bold text-xl">Nexora</h4>
                  <p className="text-gray-200">Business Naming & Identity</p>
                </div>
              </div>
            </div>
          </div>




          <div className="text-center mt-12">
            <a 
              href="#" 
              className="inline-block border-2 border-black text-black px-8 py-3 rounded font-medium hover:bg-black hover:text-white transition"
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
 
     
  




      <div className="min-h-screen bg-white flex flex-col md:flex-row">
  {/* Left Side - Content */}
  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
    <div className="max-w-md mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Branding from strategy to delivery
      </h1>
      
      <p className="text-gray-700 mb-8 text-lg">
        Studio is brought to you by Girdermakers, an independent collective of experienced Brand Strategists who help you get the best from the crowd. We work with a global network of creatives to bring the best ideas to your brief, and implement them cohesively:
      </p>
      
      <ul className="space-y-3 mb-10 text-gray-700">
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>Brand experts with 10+ years in the creative industry</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>Tap into the global creative community with our expert guidance</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>Add one include brand workshops, naming, digital branding, illustration, icons, packaging, pitch decks & more.</span>
        </li>
      </ul>
      
      <div className="mb-10">
        <p className="font-medium mb-4 text-gray-700">Want to brainstorm your branding needs?</p>
        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-medium">
          Book a consult
        </button>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-bold mb-4 text-lg">Brand Strategist</h3>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2 text-black">•</span>
            <span>Top creative talent</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-black">•</span>
            <span>Top creative talent</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
    <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
      <img 
        src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2969&q=80" 
        alt="Brand strategist working"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
  




<div className="min-h-screen bg-white flex flex-col md:flex-row">
  {/* Left Side - Image */}
  <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <img 
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" 
        alt="Brand package presentation"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Right Side - Content */}
  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
    <div className="max-w-md mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Begin with our brand package
      </h1>
      
      <p className="text-gray-700 mb-8 text-lg">
        Get the brand classics, with the benefit of end-to-end guidance from Circlemakers Studio. Get your business off to an outstanding start, and set yourself up to scale:
      </p>
      
      <ul className="space-y-3 mb-10 text-gray-700">
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>Discovery session with your Brand Strategist</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>Moodboard & creative brief</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>We'll present 9 curated logo concepts</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>Brand development, color & font selection, and branded business templates</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>Calls with your dedicated team</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>Brand guidelines</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-black">•</span>
          <span>Approx 4-6 weeks</span>
        </li>
      </ul>
      
      <div className="border-t border-gray-200 pt-6 mb-8">
        <h3 className="font-bold mb-4 text-xl">Brand Strategies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Brand Guidelines</h4>
            <ul className="space-y-1 text-gray-600">
              <li>Strategic</li>
              <li>Culture</li>
              <li>Sustainability</li>
              <li>Trade</li>
              <li>Risk</li>
              <li>Fairness</li>
              <li>Losses</li>
              <li>Legend</li>
              <li>Growth</li>
              <li>Energy</li>
              <li>Energy Sustainable</li>
              <li>Culture Update</li>
              <li>Culture</li>
            </ul>
          </div>
        </div>
      </div>
      
      <button className="bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors font-medium text-lg w-full md:w-auto">
        Get the package
      </button>
    </div>
  </div>
</div>









<div className="min-h-screen bg-white flex flex-col md:flex-row">
  {/* Left Side - Content */}
  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
    <div className="max-w-md mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Custom solutions
      </h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Brand strategy</h2>
          <p className="text-gray-700">
            We offer brand workshops to help you better define your brand positioning and messaging.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's strategize</h2>
          <h3 className="font-bold text-lg mb-2">Brand & product naming</h3>
          <p className="text-gray-700">
            We'll run a naming workshop, brainstorm key themes together and provide 10 strategic naming options.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's name</h2>
          <h3 className="font-bold text-lg mb-2">Custom creative</h3>
          <p className="text-gray-700">
            Got a larger creative project? We'll find specialists, build a creative team, or run your project for you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Let's customize</h2>
          <h3 className="font-bold text-lg mb-2">About us</h3>
          <p className="text-gray-700 mb-6">
            Circhemakers Studio is an independent branding agency that brings decades of expertise in business, design and marketing from our time at agencies and 99designs. With hubs in Berlin & San Francisco, Circhemaker Studio works 100% online to strategically bring together the best global talent from 99designs so you can create a brand that's built to last.
          </p>
          <p className="text-gray-500 italic">circlemakers studio</p>
        </section>
      </div>
    </div>
  </div>

  {/* Right Side - Image */}
  <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
      <img 
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80" 
        alt="Custom brand solutions"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>










<div className="min-h-screen bg-white p-8 md:p-12 font-sans">
  <div className="max-w-6xl mx-auto">
    {/* Team Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      {/* Laura McLeod */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
            alt="Laura McLeod"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Laura McLeod | San Francisco</h3>
          <p className="text-gray-700">
            Laura brings deep expertise in strategic brand messaging and development. Prior to joining 90designs in 2016, where she held several senior marketing roles, Laura spent over a decade in global design agencies. Laura curiously seeks to understand the specific goals of her clients and thrives on translating them into a brand story that works.
          </p>
        </div>
      </div>

      {/* Eva Missling */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-32 h-32 flex-shrink-0 rounded-full overflow-hidden bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80" 
            alt="Eva Missling"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Eva Missling | Berlin</h3>
          <p className="text-gray-700">
            Eva combines entrepreneurship with a love for good design. Helping founders define their positioning and visual identity is Eva's forté. As a founder herself, Eva brings a deep understanding of what it takes to grow a brand on a budget. Before founding a graphic design marketplace, which was later sold to 90designs, Eva worked for a decade in digital agencies.
          </p>
        </div>
      </div>
    </div>

    {/* Clients Section */}
    <div className="mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Our clients</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {/* Replace these with actual client logo images */}
        <div className="flex items-center justify-center h-20">
          <img src="https://tse2.mm.bing.net/th/id/OIP.sp_VDDuisGdTYS43OxHKjwHaEK?pid=Api&P=0&h=180" alt="NIVEA" className="h-12 object-contain" />
        </div>
        <div className="flex items-center justify-center h-20">
          <img src="https://tse2.mm.bing.net/th/id/OIP.wSzK3RZ4LI-CfmaeA3QUaAHaGG?pid=Api&P=0&h=180" alt="Cricket" className="h-12 object-contain" />
        </div>
        <div className="flex items-center justify-center h-20">
          <img src="https://cdn1.vectorstock.com/i/1000x1000/08/05/fully-cooked-label-or-sticker-vector-28920805.jpg  " alt="Colooked" className="h-12 object-contain" />
        </div>
        <div className="flex items-center justify-center h-20">
          <img src="https://static.vecteezy.com/system/resources/previews/000/063/865/original/vector-jeep-logo.jpg " alt="Jeep" className="h-12 object-contain" />
        </div>
        <div className="flex items-center justify-center h-20">
          <img src="https://tse3.mm.bing.net/th/id/OIP.fw_Mbjs4noOEw6OO927fmQHaE8?pid=Api&P=0&h=180" alt="Rules SPORT" className="h-12 object-contain" />
        </div>
        <div className="flex items-center justify-center h-20">
          <img src="https://images.seeklogo.com/logo-png/57/2/burg-wachter-logo-png_seeklogo-576162.png" alt="Burg" className="h-12 object-contain" />
        </div>
      </div>
    </div>

    Services Section
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="border-t-2 border-black pt-6">
        <h3 className="text-xl font-bold mb-4">Founding & executive teams</h3>
        <p className="text-gray-700">
          We'll translate your unique story into a strategic brand, helping you to appeal to your customers and investors alike.
        </p>
      </div>
      <div className="border-t-2 border-black pt-6">
        <h3 className="text-xl font-bold mb-4">Communication teams</h3>
        <p className="text-gray-700">
          Combine experience and ideation to deliver limited editions and campaigns that look unique.
        </p>
      </div>
      <div className="border-t-2 border-black pt-6">
        <h3 className="text-xl font-bold mb-4">Brand teams</h3>
        <p className="text-gray-700">
          Innovate with fresh global perspectives. Ideate at scale, develop custom illustrations, or rebrand it all.
        </p>
      </div>
    </div>
  </div>
</div>





<div class="max-w-2xl mx-auto px-4 py-6 font-sans">
  <h1 class="text-3xl font-bold text-gray-900 mb-6">FAQs</h1>
  
</div>
    

<div class="max-w-3xl  mx-auto">
  {/* <h1 class="text-3xl font-bold text-gray-900 mb-6">FAQs</h1> */}
  

  <div class="flex justify-between items-center border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">Who are Circlemakers Studio and are they part of 99designs?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
  

  <div class="flex justify-between items-center py-4 border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">What makes the Circlemakers Studio brand packages different?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
</div>

<div class="max-w-3xl  mx-auto">
  {/* <h1 class="text-3xl font-bold text-gray-900 mb-6">FAQs</h1> */}
  

  <div class="flex justify-between items-center border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">Who are Circlemakers Studio and are they part of 99designs?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
  

  <div class="flex justify-between items-center py-4 border-b border-gray-300">
  <h2 class="text-lg font-medium text-gray-900">How long does the Full-Service Brand Pack take?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
</div>
<div class="max-w-3xl  mx-auto">
  {/* <h1 class="text-3xl font-bold text-gray-900 mb-6">FAQs</h1> */}
  

  <div class="flex justify-between items-center border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">Who are Circlemakers Studio and are they part of 99designs?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
  

  <div class="flex justify-between items-center py-4 border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">How much does it cost to work with Circlemakers Studio?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
</div>
<div class="max-w-3xl  mx-auto">
  {/* <h1 class="text-3xl font-bold text-gray-900 mb-6">FAQs</h1> */}
  

  <div class="flex justify-between items-center border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">How long does it take to run a project with Circlemakers Studio?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
  

  <div class="flex justify-between items-center py-4 border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">Do you have a money back guarantee?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
</div>
<div class="max-w-3xl  mx-auto">
  {/* <h1 class="text-3xl font-bold text-gray-900 mb-6">FAQs</h1> */}
  

  <div class="flex justify-between items-center border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">Can you help me with business naming?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
  

  <div class="flex justify-between items-center py-4 border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">What methods of payment do you accept?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
</div>

<div class="max-w-3xl  mx-auto">
  {/* <h1 class="text-3xl font-bold text-gray-900 mb-6">FAQs</h1> */}
  

  <div class="flex justify-between items-center border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">Can you help with brand messaging?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
  

  <div class="flex justify-between items-center py-4 border-b border-gray-300">
    <h2 class="text-lg font-medium text-gray-900">In which languages does Circlemakers Studio work?</h2>
    <span class="text-gray-500 text-xl">+</span>
  </div>
</div>






  





      
    </div>
  );
};

export default StudioHero;
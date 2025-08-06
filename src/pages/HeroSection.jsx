import React from "react";
import heroImage from "../assets/1.png"; // Make sure to have this image in your assets

const SimpleWebsitesHero = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="md:w-1/2 w-full">
            <img 
              src={heroImage} 
              alt="Simple website examples" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: "500px" }}
            />
          </div>

          {/* Right Column - Content */}
          <div className="md:w-1/2 w-full space-y-4">
            <div className="text-sm text-gray-500">
              <span>Home / Inspiration / Websites / Simple</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Lumina Studios
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Make your business shine online with a custom simple website designed just for you by a professional designer. 
              Need ideas? We've collected some amazing 
              examples of simple websites from our global community of designers.
               Get inspired and start planning the perfect simple web design today.
               It all starts with a blank page.
Just an idea, a spark — something waiting to shine.

At Lumina Studios, we believe your story deserves a space to live online — clean, focused, and beautifully simple.

Whether you're building your dream brand or launching your next big idea, we craft websites that don't just look good — they speak.

No noise. No clutter. Just a story — yours — told with purpose.
            </p>
          </div>
        </div>
      </div>




      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Image 1 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://tse4.mm.bing.net/th/id/OIP.3hG0Eya-ESjgcyy_iAuoCwHaED?pid=Api&P=0&h=180" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            <p className="text-lg">Make Medium jealous with our clean blog design</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2">Make Medium jealous with our clean blog design</p>
        <p className="text-sm text-gray-500">
        They publish thought pieces and analyses of emerging trends in business, technology, and society.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 2 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://www.cavagnero.com/wp-content/uploads/2023/09/Night-shot-scaled.jpg" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            <p className="text-lg">Featured Articles</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2"> <strong>   Make Medium jealous with our clean blog design </strong> </p>
        <p className="text-sm text-gray-500">
        Web design for crypto currency trading platform. Designed the home page and dashboard in desktop and mobile formats.        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 3 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://tse3.mm.bing.net/th/id/OIP.3Cz4OINTEOwQy59WDGbJOAHaEW?pid=Api&P=0&h=180" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            <p className="text-lg">E-Commerce Design</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2">Make Medium jealous with our clean blog design</p>
        <p className="text-sm text-gray-500">
        Great emotions sent throughout the design. Clean sections and friendly usability
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>
  </div>
</div>












<div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Image 1 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-platform.99static.com//xQbse1Ke1k3I9K412Nv-a_2UTP0=/160x0:1459x1299/fit-in/500x500/99designs-contests-attachments/72/72662/attachment_72662248" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">Make Medium jealous with our clean blog design</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">  
        <p className="text-gray-600 mb-2">   <strong>  Website Design for Ultimatum</strong>     </p>
        <p className="text-sm text-gray-500">
        I liked the idea of implementhing something clear and white in a parallel mix of darker colours. Using a flat concept was a great idea in obtaining something great.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 2 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-platform.99static.com//10TsrumJyiZ5eAVap80NZGTnaC4=/0x0:1700x1700/fit-in/500x500/projects-files/53/5306/530639/c86b6656-8262-43e3-bd2f-517bbd4e485a.png" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">Featured Articles</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2"> <strong>   RedStone Partners Website Redesign</strong> </p>
        <p className="text-sm text-gray-500">
        Web design for crypto currency trading platform. Designed the home page and dashboard in desktop and mobile formats.        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 3 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-platform.99static.com//tphp834SZzqw0h_5ol6K8ytnT0E=/221x52:1271x1102/fit-in/500x500/99designs-contests-attachments/128/128027/attachment_128027732" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">E-Commerce Design</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2">    <strong>Skara Ventures</strong>    </p>
        <p className="text-sm text-gray-500">
        It was a pleasure working with Redstone Partners. I'm really happy with the end result.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>
  </div>
</div>













<div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Image 1 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-platform.99static.com//ICCV1kzX6CY-eT497HL1hzGRi3U=/0x0:1600x1600/fit-in/500x500/projects-files/68/6868/686814/5b943d05-d12d-46a3-b649-4775734619e4.png" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">Make Medium jealous with our clean blog design</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">  
        <p className="text-gray-600 mb-2">   <strong>  Codecourse Website</strong>     </p>
        <p className="text-sm text-gray-500">
        I liked the idea of implementhing something clear and white in a parallel mix of darker colours. Using a flat concept was a great idea in obtaining something great.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 2 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-workbench.99static.com/WT3P3E2_FOShkSqtTWROcksArTU=/http://s3.amazonaws.com/projects-files/33/3391/339161/a2e9c4d3-3af8-47a2-92bd-aaf1c3adbaff.png" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">Featured Articles</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2"> <strong>   Tutor Reactive simple web page design</strong> </p>
        <p className="text-sm text-gray-500">
        Tutor Reactive simple web page design
Client request simple and minimalist web page with material style look.        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 3 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-workbench.99static.com/0dO80HQ0EV46ZnsS6isrpRSEp6g=/99designs-contests-attachments/43/43326/attachment_43326358" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">E-Commerce Design</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2">    <strong>Uptown Blow Dry Bar Web</strong>    </p>
        <p className="text-sm text-gray-500">
        It was a pleasure working with Redstone Partners. I'm really happy with the end result.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>
  </div>
</div>





















<div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Image 1 with Overlay Text */}
    <div className="relative group">
      <div className="h-full bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-workbench.99static.com/be92b0esV_9XYvmGeFOoU92xa90=/99designs-contests-attachments/92/92122/attachment_92122113" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">Make Medium jealous with our clean blog design</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">  
        {/* <p className="text-gray-600 mb-2">   <strong>  Luxury website for ALEXXA</strong>     </p> */}
        {/* <p className="text-sm text-gray-500">
        I liked the idea of implementhing something clear and white in a parallel mix of darker colours. Using a flat concept was a great idea in obtaining something great.
        </p> */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 2 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-workbench.99static.com/5QGUEbBIfSB9A6O0nfEFVI8jBPc=/http://s3.amazonaws.com/projects-files/41/4157/415717/1a4a4897-debc-4deb-9e84-20e2acd33a77.jpg" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">Featured Articles</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2"> <strong>   Website for a Web-Developer</strong> </p>
        <p className="text-sm text-gray-500">
        It was a lot of fun designing the Webpage for Web Developer Charles! I like the browser illustration with some stats in it and of course the look and feel of this site.       </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 3 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-workbench.99static.com/IZZn1jKgaQpVzozq1lvWgRHyXqs=/99designs-contests-attachments/55/55200/attachment_55200802" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">E-Commerce Design</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2">    <strong>New Pastoral Training Website Needed</strong>    </p>
        {/* <p className="text-sm text-gray-500">
        It was a pleasure working with Redstone Partners. I'm really happy with the end result.
        </p> */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>
  </div>
</div>














<div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Image 1 with Overlay Text */}
    <div className="relative group">
      <div className="h-full bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-workbench.99static.com/gMm_sNEiI4I0123cRoY2Jow_HEg=/99designs-contests-attachments/57/57922/attachment_57922435" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">Make Medium jealous with our clean blog design</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">  
        {/* <p className="text-gray-600 mb-2">   <strong>  Luxury website for ALEXXA</strong>     </p> */}
        {/* <p className="text-sm text-gray-500">
        I liked the idea of implementhing something clear and white in a parallel mix of darker colours. Using a flat concept was a great idea in obtaining something great.
        </p> */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 2 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src="https://images-workbench.99static.com/YDtMGghGPZbW9dvBbS8_yWxkvUA=/99designs-contests-attachments/73/73759/attachment_73759345" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">Featured Articles</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2"> <strong> Clean design for a subscription company</strong> </p>
        <p className="text-sm text-gray-500">
        It was a lot of fun designing the Webpage for Web Developer Charles! I like the browser illustration with some stats in it and of course the look and feel of this site.       </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>

    {/* Image 3 with Overlay Text */}
    <div className="relative group">
      <div className="h-64 bg-gray-200 overflow-hidden rounded-lg">
        <img 
          src=" https://images-workbench.99static.com/kqYiBy0XwX97UJ3TzbEVmsUm5yk=/99designs-contests-attachments/86/86569/attachment_86569318" 
          alt="TBD Consulting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
          <div className="text-white text-center">
            {/* <h2 className="text-2xl font-bold mb-2">TBD Consulting</h2> */}
            {/* <p className="text-lg">E-Commerce Design</p> */}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600 mb-2">    <strong>UX design for appliancesonline.com.au</strong>    </p>
        <p className="text-sm text-gray-500">
        It was a pleasure working with Redstone Partners. I'm really happy with the end result.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {/* <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE STUDIES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">CODE RECIPES</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GIVEN INSTEAD</span>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded">GOOD SYSTEMS</span> */}
        </div>
      </div>
    </div>
  </div>
</div>









<div className="max-w-4xl mx-auto p-6 font-sans">
  <div className="mb-8 flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl font-bold text-gray-800">More simple websites</h2>
    <p className="text-gray-600 mt-2">Simple websites not a good fit? Try something else:</p>
</div>

  <div className="mb-6">
    <div className="flex items-center mb-4">
      <span className="text-gray-700 font-medium mr-2">Q.</span>
      <span className="text-gray-600">Search keywords eg, retro, minimal, bear, mystery</span>
    </div>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Fun websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Cool websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Creative websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Beautiful websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Aesthetic websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Clean websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Awesome websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Luxury websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Unique websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Innovative websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Winning websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Premium websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Building websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Icon websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Ecommerce websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Design firm websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Course websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Dark websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Clothing websites</p>
    </div>
    <div className="p-3 hover:bg-gray-50 rounded cursor-pointer">
      <p className="text-gray-700">Online store websites</p>
    </div>
  </div>
</div>




    </section>
  );
};

export default SimpleWebsitesHero;
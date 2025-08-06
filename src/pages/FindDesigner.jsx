import React from 'react';

const FindDesigner = () => {
  return (

    <section>
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find a designer you'll love</h1>
          <p className="text-lg text-gray-600 mb-6">
            We have professional designers in over 90 design skill sets.<br />
            Sign up to find the perfect designer for whatever you need.
          </p>
          
          <h2 className="font-bold text-gray-800 mb-4">What do you need designed?</h2>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span>Logo design</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span>Product packaging</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span>Web page design</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span>Product label</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span>Postcard, flyer or print</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span>Book cover</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span>See all</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="https://assets.99static.com/workbench/assets/images/designer-search-logged-out-header-9e99c15bdf.png" 
            alt="Designers working" 
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>

      {/* New Section: Designer Categories */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse Designers by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            'Logo Designers',
            'Web Designers',
            'Illustrators',
            'Packaging Designers',
            'Brand Identity',
            'Print Designers',
            'Social Media Design',
            'UX/UI Designers',
            'Typography Experts',
            'Motion Graphics',
            '3D Designers',
            'Icon Designers'
          ].map((category) => (
            <div key={category} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-gray-800">{category}</h3>
              <p className="text-sm text-gray-500 mt-1">View portfolio →</p>
            </div>
          ))}
        </div>
      </div>

  
    </div>















    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
  {/* Main Title */}
  <h1 className="text-3xl font-bold mb-8">Logo and identity designers</h1>

  <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Sidebar - Filters */}
    <div className="w-full lg:w-1/4 space-y-6">
      {/* Categories Section */}
      <div>
        <h2 className="font-semibold mb-3 text-lg">Categories</h2>
        <div className="space-y-2">
          {['Logo & identity', 'Web & app design', 'Business & advertising', 'Clothing & merchandise', 'Art & illustration', 'Packaging & label', 'Book & magazine'].map((category) => (
            <div key={category} className="flex items-center">
              <input 
                type="checkbox" 
                id={`cat-${category.split(' ')[0]}`} 
                className="mr-2 h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor={`cat-${category.split(' ')[0]}`} className="text-gray-800">{category}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="mt-6">
        <h2 className="font-semibold mb-3 text-lg">Industries</h2>
        
        <div className="border-t border-gray-200 pt-3">
          <h3 className="text-sm font-medium mb-2 text-gray-500">Source: Top Level</h3>
          <div className="space-y-1">
            <a href="#" className="block text-blue-600 hover:underline">Top Level</a>
            <a href="#" className="block text-blue-600 hover:underline">Top Level</a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-3 mt-3">
          <h3 className="text-sm font-medium mb-2 text-gray-500">Akira X3</h3>
          <a href="#" className="block text-blue-600 hover:underline">Top Level</a>
        </div>

        <div className="border-t border-gray-200 pt-3 mt-3">
          <h3 className="text-sm font-medium mb-2 text-gray-500">Toggle</h3>
          <a href="#" className="block text-blue-600 hover:underline">Top Level</a>
        </div>

        <a href="#" className="block mt-4 font-medium text-blue-600 hover:underline">See all results →</a>
      </div>
    </div>

    {/* Right Content - Designers Grid */}
    <div className="w-full lg:w-3/4">
      {/* Designers Grid - 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Designer 1 */}
        <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/U0bBsHXzjLl8TzBC_iJcUDwktC0=/0x0:2000x2000/400x400/99designs-work-samples/work-sample-designs/868215/ac578bcb-033f-4f55-9d63-8b69c5d9bc05          " 
              alt="Logo Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Design Studio</h3>
            <p className="text-sm text-gray-600 mt-1">[Top Level]</p>
          </div>
        </div>

        {/* Designer 2 */}
        <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/aN4YwkkJzRwuhhpcnCjGffeo0Qc=/420x0:1500x1080/400x400/99designs-contests-attachments/157/157772/attachment_157772811" 
              alt="Logo Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Brand Creators</h3>
            <p className="text-sm text-gray-600 mt-1">[Top Level]</p>
          </div>
        </div>

        {/* Designer 3 */}
        <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/wufVxc8s-7ywxLVnO6ukNyAB0wY=/355x53:2145x1842/400x400/projects-files/180/18093/1809397/eadd6bfb-dca9-4bd4-be5c-9688efcae071.png" 
              alt="Logo Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Identity Masters</h3>
            <p className="text-sm text-gray-600 mt-1">[Top Level]</p>
          </div>
        </div>

        {/* Designer 4 */}
        <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/LC1x21kAG_ejXwU_aDHPwGb2p2M=/0x0:2880x2880/400x400/99designs-work-samples/work-sample-designs/2111778/5b699941-0319-4005-9654-ee0ea2c56971" 
              alt="Logo Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Visual Identity</h3>
            <p className="text-sm text-gray-600 mt-1">[Top Level]</p>
          </div>
        </div>

        {/* Designer 5 */}
        <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/M8I4dEyN9WAcsc4rnUfPI-lhcNg=/0x0:1600x1600/400x400/99designs-contests-attachments/157/157458/attachment_157458011" 
              alt="Logo Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Logo Experts</h3>
            <p className="text-sm text-gray-600 mt-1">[Top Level]</p>
          </div>
        </div>

        {/* Designer 6 */}
        <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/fL5zKGqsVKMwOWeXQuE608GmIag=/0x0:1920x1920/400x400/99designs-work-samples/work-sample-designs/1111048/5ad75ef2-6332-4e14-aa9b-2cbbd043139a" 
              alt="Logo Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Branding Pros</h3>
            <p className="text-sm text-gray-600 mt-1">[Top Level]</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



















<div className="max-w-7xl mx-auto px-4 py-8 font-sans">
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Sidebar - Language Filters */}
    <div className="w-full lg:w-1/4">
      <div className="mb-8">
        <h2 className="font-semibold mb-4 text-lg">Language</h2>
        <div className="space-y-2">
          {['Chinese', 'Dutch', 'English', 'French', 'German', 'Indonesian', 'Italian', 'Japanese', 'Korean', 'Portuguese', 'Spanish'].map((language) => (
            <div key={language} className="flex items-center">
              <input 
                type="checkbox" 
                id={`lang-${language}`} 
                className="mr-3 h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor={`lang-${language}`} className="text-gray-800">{language}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-semibold mb-4 text-lg">Certifications</h2>
        <div className="space-y-2">
          {['Print basics', 'Jimdo', 'Squarespace', 'Prezi'].map((cert) => (
            <div key={cert} className="flex items-center">
              <input 
                type="checkbox" 
                id={`cert-${cert}`} 
                className="mr-3 h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor={`cert-${cert}`} className="text-gray-800">{cert}</label>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Right Content - Designers Grid */}
    <div className="w-full lg:w-3/4">
      <h1 className="text-2xl font-bold mb-6">Packaging and label designers</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Designer 1 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/pxluWJBFCkVXuwW0u3iFsKZ95Lc=/776x0:6047x5271/400x400/projects-files/135/13588/1358862/cc877ed1-fb04-49e3-ad50-be6da821b303.jpg" 
              alt="Packaging Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">anananai4</h3>
            <p className="text-sm text-gray-600">Top Level</p>
          </div>
        </div>

        {/* Designer 2 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/jqbbPmWhtfanBg3j1bvyVxkNqww=/86x75:716x705/400x400/projects-files/194/19411/1941128/a89f0559-c52e-46eb-8d51-aa4662266be2.jpg" 
              alt="Packaging Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">gianni88</h3>
            <p className="text-sm text-gray-600">Top Level</p>
          </div>
        </div>

        {/* Designer 3 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-100">
            <img 
              src=" https://images-platform.99static.com/X21JEgjsypZhBVtkhfgAgdz-dqM=/118x254:1905x2040/400x400/99designs-contests-attachments/138/138417/attachment_138417594" 
              alt="Packaging Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">Helma</h3>
            <p className="text-sm text-gray-600">Top Level</p>
          </div>
        </div>

        {/* Designer 4 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/1Ym81Er50C3gd-bHdgEK3pmVdUw=/9x0:2559x2550/400x400/projects-files/55/5529/552939/ff3e168d-0b1a-46fc-a442-8a2af6c53b70.jpg" 
              alt="Packaging Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">RIZETA</h3>
            <p className="text-sm text-gray-600">Top Level</p>
          </div>
        </div>

        {/* Designer 5 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/98aaSSMxQS9hMmIz-7Q3UqOEjNc=/14x0:1231x1217/400x400/99designs-contests-attachments/113/113397/attachment_113397364  " 
              alt="Packaging Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">JAZZER</h3>
            <p className="text-sm text-gray-600">Top Level</p>
          </div>
        </div>

        {/* Designer 6 */}
        <div className="border rounded-lg overflow-hidden">
          <div className="h-48 bg-gray-100">
            <img 
              src="https://images-platform.99static.com/hsr5c_sEVpq96nRFfG-D_RlY97A=/410x0:950x540/400x400/99designs-contests-attachments/43/43179/attachment_43179853" 
              alt="Packaging Designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold">MOTHER</h3>
            <p className="text-sm text-gray-600">Top Level</p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button className="text-blue-600 font-medium hover:underline">See all results →</button>
      </div>
    </div>
  </div>
</div>












<div className="max-w-7xl mx-auto px-4 py-8 font-sans">
  {/* Main Title */}
  <h1 className="text-3xl font-bold mb-8">Designers with a watercolor style</h1>

  {/* Designers Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Designer 1 - Hedwigvina */}
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-64 bg-gray-100">
        <img 
          src="https://images-platform.99static.com/ndQmYn_7WlQej5LDAkA47Ri4bkU=/0x0:2000x2002/400x400/projects-files/188/18846/1884663/75b53ec6-577a-45ef-a9b3-d99fe5dfa9ec.jpg" 
          alt="Hedwigvina Watercolor"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">Hedwigvina</h3>
        <p className="text-sm text-gray-600">Top Level</p>
      </div>
    </div>

    {/* Designer 2 - Moonlit Fox */}
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-64 bg-gray-100">
        <img 
          src="https://images-platform.99static.com/NNpa_9dXgQTLsG-9URdKG2X4qak=/0x0:1060x1062/400x400/projects-files/183/18377/1837707/2a91d656-39ff-4bee-86b8-896967356561.png  " 
          alt="Moonlit Fox Watercolor"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">Moonlit Fox</h3>
        <p className="text-sm text-gray-600">Top Level</p>
      </div>
    </div>

    {/* Designer 3 - Nevermura */}
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-64 bg-gray-100">
        <img 
          src="https://images-platform.99static.com/U4kDxX04AygRTRHAKzARgPqgupE=/163x182:1079x1098/400x400/99designs-contests-attachments/108/108254/attachment_108254937" 
          alt="Nevermura Watercolor"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">Nevermura</h3>
        <p className="text-sm text-gray-600">Top Level</p>
      </div>
    </div>
  </div>
</div>










<div className="bg-gray-100 py-12 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      {/* Design services column */}
      <div>
        <h3 className="font-bold mb-4">Design services</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-black">Design contests</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">1-to-1 Projects</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Find a designer</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Discover inspiration</a></li>
        </ul>
      </div>

      {/* Support column */}
      <div>
        <h3 className="font-bold mb-4">Support</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-black">Help</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Become a designer</a></li>
        </ul>
      </div>

      {/* Resources column */}
      <div>
        <h3 className="font-bold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-black">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Contact</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">90awards</a></li>
        </ul>
      </div>

      {/* Company column */}
      <div>
        <h3 className="font-bold mb-4">Company</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">90designs Studio</a></li>
          <li><a href="#" className="text-gray-600 hover:text-black">90designs Pro</a></li>
        </ul>
      </div>
    </div>

    {/* Bottom section */}
    <div className="border-t border-gray-300 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-500 text-sm mb-4 md:mb-0">
          © 99designs | by Vista | <a href="#" className="hover:text-black">Terms and Conditions</a> | <a href="#" className="hover:text-black">Privacy</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-black">English</a>
          <a href="#" className="text-gray-500 hover:text-black">español</a>
        </div>
      </div>
    </div>
  </div>
</div>






    </section>
  );
};

export default FindDesigner;
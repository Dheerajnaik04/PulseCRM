'use client'

const colors = [
  { name: 'Primary-50', color: 'bg-primary-50', text: 'text-gray-900' },
  { name: 'Primary-100', color: 'bg-primary-100', text: 'text-gray-900' },
  { name: 'Primary-200', color: 'bg-primary-200', text: 'text-gray-900' },
  { name: 'Primary-300', color: 'bg-primary-300', text: 'text-gray-900' },
  { name: 'Primary-400', color: 'bg-primary-400', text: 'text-gray-900' },
  { name: 'Primary-500', color: 'bg-primary-500', text: 'text-white' },
  { name: 'Primary-600', color: 'bg-primary-600', text: 'text-white' },
  { name: 'Primary-700', color: 'bg-primary-700', text: 'text-white' },
  { name: 'Primary-800', color: 'bg-primary-800', text: 'text-white' },
  { name: 'Primary-900', color: 'bg-primary-900', text: 'text-white' },
]

const grays = [
  { name: 'Gray-50', color: 'bg-gray-50', text: 'text-gray-900' },
  { name: 'Gray-100', color: 'bg-gray-100', text: 'text-gray-900' },
  { name: 'Gray-200', color: 'bg-gray-200', text: 'text-gray-900' },
  { name: 'Gray-300', color: 'bg-gray-300', text: 'text-gray-900' },
  { name: 'Gray-400', color: 'bg-gray-400', text: 'text-gray-900' },
  { name: 'Gray-500', color: 'bg-gray-500', text: 'text-white' },
  { name: 'Gray-600', color: 'bg-gray-600', text: 'text-white' },
  { name: 'Gray-700', color: 'bg-gray-700', text: 'text-white' },
  { name: 'Gray-800', color: 'bg-gray-800', text: 'text-white' },
  { name: 'Gray-900', color: 'bg-gray-900', text: 'text-white' },
]

const spacingValues = [
  '0', '0.25rem', '0.5rem', '0.75rem', '1rem', '1.25rem', '1.5rem', '1.75rem', '2rem', '2.25rem', '2.5rem',
  '3rem', '4rem', '5rem', '6rem', '8rem', '10rem', '12rem', '16rem', '20rem'
]

export default function StyleGuide() {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">T-CRM Style Guide</h1>

          {/* Typography Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Typography</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Headings</h3>
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                  <div>
                    <h1 className="text-5xl font-bold text-gray-900">Heading 1</h1>
                    <p className="text-sm text-gray-500 mt-1">5xl (3rem) | Font Weight: Bold</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">Heading 2</h2>
                    <p className="text-sm text-gray-500 mt-1">4xl (2.25rem) | Font Weight: Bold</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Heading 3</h3>
                    <p className="text-sm text-gray-500 mt-1">3xl (1.875rem) | Font Weight: Bold</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900">Heading 4</h4>
                    <p className="text-sm text-gray-500 mt-1">2xl (1.5rem) | Font Weight: Semibold</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-900">Heading 5</h5>
                    <p className="text-sm text-gray-500 mt-1">xl (1.25rem) | Font Weight: Semibold</p>
                  </div>
                  <div>
                    <h6 className="text-lg font-medium text-gray-900">Heading 6</h6>
                    <p className="text-sm text-gray-500 mt-1">lg (1.125rem) | Font Weight: Medium</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Body Text</h3>
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                  <div>
                    <p className="text-xl text-gray-800">Large Body Text (xl)</p>
                    <p className="text-sm text-gray-500 mt-1">Used for hero sections and important paragraphs</p>
                  </div>
                  <div>
                    <p className="text-base text-gray-800">Regular Body Text (base)</p>
                    <p className="text-sm text-gray-500 mt-1">Default text size for most content</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Small Body Text (sm)</p>
                    <p className="text-sm text-gray-500 mt-1">Used for secondary information and metadata</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Font Weights</h3>
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                  <p className="font-light text-lg text-gray-900">Light (300)</p>
                  <p className="font-normal text-lg text-gray-900">Regular (400)</p>
                  <p className="font-medium text-lg text-gray-900">Medium (500)</p>
                  <p className="font-semibold text-lg text-gray-900">Semibold (600)</p>
                  <p className="font-bold text-lg text-gray-900">Bold (700)</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Colors Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Colors</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colors.map((color) => (
                  <div key={color.name} className={`${color.color} p-4 rounded-lg shadow-sm`}>
                    <div className={`${color.text} font-medium`}>{color.name}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Grayscale</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {grays.map((color) => (
                  <div key={color.name} className={`${color.color} p-4 rounded-lg shadow-sm`}>
                    <div className={`${color.text} font-medium`}>{color.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Spacing Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Spacing</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex flex-wrap gap-4">
                {[1, 2, 3, 4, 6, 8, 12, 16].map((space) => (
                  <div key={space} className="text-center">
                    <div className={`w-${space} h-${space} bg-primary-500 mb-2 mx-auto`}></div>
                    <p className="text-sm text-gray-600">{space}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Spacing Scale</h3>
                <p className="text-gray-600 mb-4">
                  We use a 4px (0.25rem) spacing scale. Common values:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 text-sm">
                  {spacingValues.map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-gray-500">{index}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Components Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Components</h2>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-700 mb-3">Buttons</h3>
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <h4 className="text-base font-medium text-gray-700">Primary Buttons</h4>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-primary">Primary Button</button>
                    <button className="btn-primary bg-primary-700">Primary Dark</button>
                    <button className="btn-primary bg-primary-500">Primary Light</button>
                    <button className="btn-primary opacity-50 cursor-not-allowed">Disabled</button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-base font-medium text-gray-700">Secondary Buttons</h4>
                  <div className="flex flex-wrap gap-4">
                    <button className="btn-secondary">Secondary Button</button>
                    <button className="btn-secondary border-gray-400">Secondary Dark</button>
                    <button className="btn-secondary bg-gray-50">Secondary Light</button>
                    <button className="btn-secondary opacity-50 cursor-not-allowed">Disabled</button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-base font-medium text-gray-700">Button Sizes</h4>
                  <div className="flex flex-wrap items-center gap-4">
                    <button className="btn-primary text-sm px-3 py-1.5">Small</button>
                    <button className="btn-primary">Medium (Default)</button>
                    <button className="btn-primary text-lg px-5 py-2.5">Large</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-3">Form Elements</h3>
              <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <h4 className="text-base font-medium text-gray-700">Text Inputs</h4>
                  <div className="space-y-4 max-w-md">
                    <div>
                      <label htmlFor="demo-input" className="block text-sm font-medium text-gray-700 mb-1">
                        Input Label
                      </label>
                      <input
                        type="text"
                        id="demo-input"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Placeholder text"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="demo-input-error" className="block text-sm font-medium text-gray-700 mb-1">
                        Input with Error
                      </label>
                      <input
                        type="text"
                        id="demo-input-error"
                        className="w-full rounded-lg border border-red-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Placeholder text"
                      />
                      <p className="mt-1 text-sm text-red-600">This field is required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 
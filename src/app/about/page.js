export default function About() {
  return (
    <div className="min-h-screen">
      {/* Biography Section */}
      <section className="section bg-white">
        <div className="container">
          <h1 className="text-center mb-12">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              I am a passionate software developer with a strong foundation in
              web development and a keen interest in creating user-friendly
              applications.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My journey in software development began with a curiosity about
              how things work on the internet. This curiosity led me to learn
              programming and eventually pursue a career in software
              development. I'm constantly learning and exploring new
              technologies to stay at the forefront of web development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Frontend Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#0D6EFD] rounded-full mr-2"></span>
                  React.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#0D6EFD] rounded-full mr-2"></span>
                  JavaScript (ES6+)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#0D6EFD] rounded-full mr-2"></span>
                  HTML5 & CSS3
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#0D6EFD] rounded-full mr-2"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Backend Development
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#0D6EFD] rounded-full mr-2"></span>
                  Node.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#0D6EFD] rounded-full mr-2"></span>
                  Express.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#0D6EFD] rounded-full mr-2"></span>
                  MongoDB
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#0D6EFD] rounded-full mr-2"></span>
                  RESTful APIs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

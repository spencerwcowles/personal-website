export default function Resume() {
  return (
    <div className="min-h-screen">
      <section className="container pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Resume</h1>
          <p className="text-lg text-gray-600 mb-8">
            I'm a software engineer with expertise in building modern web
            applications and scalable systems.
          </p>
          <div className="flex gap-4 mb-16">
            <a href="/resume.pdf" download className="btn btn-primary">
              Download PDF
            </a>
            <a
              href="mailto:your.email@example.com"
              className="btn btn-secondary"
            >
              Contact Me
            </a>
          </div>

          <div className="space-y-16">
            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Experience</h2>
              <div className="space-y-12">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">
                      Senior Software Engineer
                    </h3>
                    <span className="text-gray-500">2020 - Present</span>
                  </div>
                  <p className="text-gray-600 mb-4">Company Name</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Led development of key features for enterprise
                      applications
                    </li>
                    <li>
                      Mentored junior developers and conducted code reviews
                    </li>
                    <li>Implemented best practices and coding standards</li>
                    <li>
                      Optimized application performance and reduced load times
                      by 40%
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">
                      Software Developer
                    </h3>
                    <span className="text-gray-500">2018 - 2020</span>
                  </div>
                  <p className="text-gray-600 mb-4">Previous Company</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Developed and maintained multiple web applications</li>
                    <li>Collaborated with cross-functional teams</li>
                    <li>
                      Improved application performance and user experience
                    </li>
                    <li>Implemented automated testing and CI/CD pipelines</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Languages & Frameworks
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>JavaScript / TypeScript</li>
                    <li>React.js / Next.js</li>
                    <li>Node.js / Express</li>
                    <li>HTML5 / CSS3</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Tools & Technologies
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Git / GitHub</li>
                    <li>MongoDB / PostgreSQL</li>
                    <li>AWS / Vercel</li>
                    <li>Docker / Kubernetes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">
                    Bachelor of Science in Computer Science
                  </h3>
                  <span className="text-gray-500">2014 - 2018</span>
                </div>
                <p className="text-gray-600">University Name</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

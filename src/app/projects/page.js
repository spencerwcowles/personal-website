export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern e-commerce platform with real-time inventory management, seamless payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind.",
      technologies: "Next.js · React · Node.js · MongoDB · Stripe",
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.com",
      year: "2023",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management application featuring real-time updates, drag-and-drop organization, and team collaboration tools. Optimized for both desktop and mobile use.",
      technologies: "React · Firebase · Tailwind CSS · DnD Kit",
      github: "https://github.com/yourusername/taskmanager",
      demo: "https://demo-taskmanager.com",
      year: "2023",
    },
    {
      title: "AI Writing Assistant",
      description:
        "An AI-powered writing assistant that helps users improve their writing with real-time suggestions, grammar checking, and style recommendations.",
      technologies: "Next.js · OpenAI API · TailwindCSS · PostgreSQL",
      github: "https://github.com/yourusername/ai-writer",
      demo: "https://ai-writer-demo.com",
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="container pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            A selection of projects I've worked on, ranging from web
            applications to design systems.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-6 overflow-hidden">
                {/* Project preview image would go here */}
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700"></div>
              </div>
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">{project.title}</h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    · {project.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {project.technologies}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="container pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-8">
            Software Engineer
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            I'm a Computer Science student at UC San Diego, passionate about
            software development and building impactful solutions. As an active
            member of Triton Unmanned Areial Systems (TUAS) and Triton
            Consulting Group (TCG), I collaborate with fellow students to
            deliver real-world projects while gaining hands-on experience in
            full-stack development and technical consulting.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/spencerwcowles"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/spencercowles"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              LinkedIn
            </a>
            <a href="mailto:spencerwcowles@gmail.com" className="link">
              Email
            </a>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          {[
            {
              title: "E-commerce Platform",
              description:
                "A modern e-commerce platform with real-time inventory management and seamless payment processing.",
              tech: "Next.js · React · Node.js · MongoDB",
              link: "/projects",
            },
            {
              title: "Task Management System",
              description:
                "Collaborative task management application with real-time updates and team features.",
              tech: "React · Firebase · Tailwind CSS",
              link: "/projects",
            },
          ].map((project, index) => (
            <a key={index} href={project.link} className="card group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-color">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-sm text-gray-500">{project.tech}</p>
            </a>
          ))}
        </div>
        <div className="mt-8">
          <a href="/projects" className="link">
            View all projects →
          </a>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-2xl font-bold mb-8">Experience</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-semibold">Senior Software Engineer</h3>
            <p className="text-gray-600 mb-2">Company Name · 2020 - Present</p>
            <p className="text-gray-600">
              Led development of key features for enterprise applications.
              Mentored junior developers and implemented best practices for code
              quality and performance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Software Developer</h3>
            <p className="text-gray-600 mb-2">Previous Company · 2018 - 2020</p>
            <p className="text-gray-600">
              Developed and maintained multiple web applications. Collaborated
              with cross-functional teams to deliver high-quality solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

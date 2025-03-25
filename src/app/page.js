import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="container py-16">
        <h2 className="text-2xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
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

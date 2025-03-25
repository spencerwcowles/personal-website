import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="container py-16">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8">Recent Projects</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              delay={index * 0.1}
              className="card group dark:bg-gray-800 dark:border-gray-700"
            >
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-8">
          <a href="/projects" className="link">
            View all projects →
          </a>
        </div>
      </section>

      <section className="container py-16">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8">Experience</h2>
        </AnimatedSection>
        <div className="space-y-12">
          <AnimatedSection>
            <h3 className="text-lg font-semibold">Computer Science Fellow</h3>
            <p className="text-gray-400 mb-2">
              Headstarter · July 2024 - August 2024
            </p>
            <p className="text-gray-500">
              Built a pantry food tracker application using Python and SQLite,
              reducing inventory mismanagement by over 30%. Developed a personal
              website to showcase projects and professional experience.
              Collaborated with a team of 4 fellows to implement best practices
              in software development.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="text-lg font-semibold">Math Tutor</h3>
            <p className="text-gray-400 mb-2">
              Mathnasium · Feb. 2021 - Feb. 2022
            </p>
            <p className="text-gray-500">
              Tutored over 40 students (elementary to high school), improving
              average test scores by 15% through customized lesson plans.
              Developed personalized lesson plans and monitored student progress
              weekly. Organized and led 20+ parent meetings to review growth.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h3 className="text-lg font-semibold">Summer Teaching Assistant</h3>
            <p className="text-gray-400 mb-2">
              All Saints Episcopal Day School · June 2024 - August 2024
            </p>
            <p className="text-gray-500">
              Supported classroom instruction for 8 classes and assisted in
              developing/delivering 50+ lesson plans for K-8 students.
              Facilitated small group activities and tutoring sessions,
              resulting in a 20% improvement in engagement scores. Organized 15+
              educational games/interactive activities with 95% participation
              rate.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}

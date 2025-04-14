import { projects } from "../../data/projects";
import Footer from "../../components/Footer";
import AnimatedSection from "../../components/AnimatedSection";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect.jsx";
import Image from "next/image";

//TODO: add tcg website
//TODO: add photos of projects
//TODO: maybe change the projects page into a grid of some sort? but it depends on how clean i want to keep it or not

export default function Projects() {
    return (
        <div className="min-h-screen">
            <section className="container pt-32 pb-24">
                <div className="text-4xl font-bold mb-6">
                    My Projects
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <AnimatedSection key={index} delay={index * 0.1}>
                            <div className="group">
                                {project.image && (
                                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-6 overflow-hidden relative">
                                        <Image
                                            src={project.image}
                                            alt={"Spencer Cowles"}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            style={{ objectFit: "cover" }}
                                            loading="lazy"
                                            quality={90}
                                        />
                                    </div>
                                )}
                                <div className="max-w-3xl">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h2 className="text-2xl font-bold">{project.title}</h2>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {project.year}
                                            </span>
                                        </div>
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
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="link"
                                            >
                                                Link to Project ↗
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}

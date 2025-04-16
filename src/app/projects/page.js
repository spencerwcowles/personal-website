import { projects } from "../../data/projects";
import Footer from "../../components/Footer";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";

export default function Projects() {
    return (
        <div className="min-h-screen">
            <section className="container px-4 pt-32 pb-24">
                <h1 className="text-5xl font-bold mb-16 text-neutral-900 dark:text-white">
                    My Projects
                </h1>

                <BentoGrid>
                    {projects.map((project, index) => (
                        <BentoGridItem
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            header={
                                project.image && (
                                    <div className="relative h-full w-full">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                                            style={{
                                                objectFit: "cover",
                                                borderRadius: "0.5rem",
                                            }}
                                            loading="lazy"
                                            quality={95}
                                        />
                                    </div>
                                )
                            }
                            links={
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors underline underline-offset-4"
                                        >
                                            GitHub ↗
                                        </a>
                                    )}
                                    {project.devpost && (
                                        <a
                                            href={project.devpost}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors underline underline-offset-4"
                                        >
                                            Devpost ↗
                                        </a>
                                    )}
                                </div>
                            }
                        />
                    ))}
                </BentoGrid>
            </section>
            <Footer />
        </div>
    );
}

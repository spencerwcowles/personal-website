"use client";

import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div id="header">
        <HeroSection />
      </div>

      <section id="projects" className="container py-16">
        <h2 className="text-4xl font-extrabold mb-12 text-center">Projects</h2>
        <Projects />
      </section>

      <section id="experience" className="container py-16">
        <Experience />
      </section>
      <div className="h-32" />
      <Footer />
    </div>
  );
}

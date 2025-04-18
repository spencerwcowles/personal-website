import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function HeroSection() {
  return (
    <section className="container pt-32 pb-16">
      <div className="flex flex-col md:flex-row gap-12 items-start max-w-4xl">
        <div className="flex-1 order-2 md:order-1">
          <div className="flex items-center gap-3 mb-8">
            <TextGenerateEffect
              words="Hi, I'm Spencer Cowles 👋"
              className="text-5xl sm:text-6xl font-bold"
            />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            I'm a second-year at <strong>UC San Diego</strong>, majoring in{" "}
            <strong>Mathematics</strong> and <strong>Computer Science</strong>{" "}
            and minoring in <strong>Economics</strong>. As an active member of{" "}
            <i>Triton Unmanned Aerial Systems</i> (TUAS) and{" "}
            <i>Triton Consulting Group</i> (TCG), I collaborate with fellow
            students to deliver real-world projects while gaining hands-on
            experience in full-stack development and technical consulting.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            In my free time, I enjoy discovering new music, playing basketball,
            and expanding my vinyl collection. I'd love to connect and chat
            about any of these interests or tech in general, so feel free to
            reach out!
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://github.com/spencerwcowles"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/spencercowles"
              target="_blank"
              rel="noopener noreferrer"
              className="link text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:spencerwcowles@gmail.com" className="link">
              Email
            </a>
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-transparent dark:border-gray-700 bg-gray-900 dark:bg-gray-800 text-white rounded-lg py-1 px-3 hover:bg-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-600 transition-colors"
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </div>
        <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 flex-shrink-0 shadow-md mt-16 order-1 md:order-2">
          <Image
            src="/assets/profile-optimized.jpg"
            alt="Spencer Cowles"
            fill
            sizes="(max-width: 768px) 256px, 256px"
            quality={95}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}

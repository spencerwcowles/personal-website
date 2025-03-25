export default function ProjectCard({ title, description, tech, link }) {
  return (
    <a href={link} className="card group dark:bg-gray-800 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-color dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{tech}</p>
    </a>
  );
}

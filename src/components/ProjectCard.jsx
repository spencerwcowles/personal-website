export default function ProjectCard({ title, description, tech, link, year }) {
  const content = (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <h3 className="text-xl font-semibold group-hover:text-accent-color dark:text-white">
          {title}
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {year}
          </span>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{tech}</p>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        className="block"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return <div className="block">{content}</div>;
}

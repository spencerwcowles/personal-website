export default function ProjectCard({ title, description, tech, link }) {
  const content = (
    <>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-color dark:text-white">
        {title}
      </h3>
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

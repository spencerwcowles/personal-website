export default function ProjectCard({ title, description, tech, link }) {
  return (
    <a href={link} className="card group">
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-color">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500">{tech}</p>
    </a>
  );
}

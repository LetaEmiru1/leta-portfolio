// The 'type' definition tells TypeScript what kind of data to expect.
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
};

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tech-list">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </a>
  );
}

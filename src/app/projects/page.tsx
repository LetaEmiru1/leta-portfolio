import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="page-title">Selected Works</h1>
      <div className="project-grid">

        <ProjectCard
          title="Simple Shell"
          description="A custom command-line interpreter built from the ground up in C, capable of executing commands with arguments, managing environment variables, and handling the system's PATH."
          technologies={["C", "Unix System Calls", "Process Management", "Memory Management"]}
          link="https://github.com/LetaEmiru1/simple_shell"
        />

        <ProjectCard
          title="Code Executor API"
          description="A secure REST API that executes untrusted code in isolated Docker containers. Built with Node.js and TypeScript, it demonstrates a strong understanding of modern backend development and security."
          technologies={["Node.js", "Express", "TypeScript", "Docker", "REST API", "Security"]}
          link="https://github.com/LetaEmiru1/alx-portfolio-code-executor-api"
        />

      </div>
    </div>
  );
}

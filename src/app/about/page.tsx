import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <h1 className="page-title">About Me</h1>
      <div className="about-grid">
        <div className="about-image-container">
          <Image
            src="/profile.jpg" // This MUST EXACTLY MATCH your file name
            alt="Headshot of Leta Malimo"
            width={200}
            height={200}
            className="about-profile-image"
          />
        </div>
        <div className="about-text">
          <p>
            I began my journey in mechanical engineering, mastering the physics of how the world works. Driven by a passion for building and creating, I transitioned into software engineering to construct the digital systems that power our modern world.
          </p>
          <p>
            This background gives me a unique perspective. I don't just write code; I engineer solutions with a robust, first-principles approach. Whether I'm working at the core of an operating system with C or building a modern cloud API with Node.js and Docker, I bring a commitment to precision, performance, and architectural integrity.
          </p>
        </div>
      </div>
      <div className="skills-section">
        <h2>My Technical Skills</h2>
        <ul className="skills-list">
          <li>C</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Docker</li>
          <li>Git & GitHub</li>
          <li>Unix / Linux</li>
          <li>REST APIs</li>
        </ul>
      </div>
    </div>
  );
}

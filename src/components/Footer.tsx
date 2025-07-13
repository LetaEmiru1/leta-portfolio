import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/LetaEmiru1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/leta-malimo-211a09219/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <p>© 2024 Leta Malimo. All Rights Reserved.</p>
    </footer>
  );
}

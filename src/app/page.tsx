import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero-section">
      <h1>A software engineer with a mechanical engineering mindset, bridging the gap between foundational systems and modern cloud applications.</h1>
      <p className="hero-subtitle">I design and build robust, high-performance software solutions, from the ground up.</p>
      <div className="hero-cta">
        <Link href="/projects" className="button-primary">View My Work</Link>
      </div>
    </div>
  )
}

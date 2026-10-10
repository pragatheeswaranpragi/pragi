import { profile } from "../lib/content";
export default function HomeBanner() {
  return (
    <section id="home" className="hero wrap" aria-labelledby="hero-name">
      <div className="hero-copy">
        <p className="eyebrow entrance">Front-end engineer · Chennai, India</p>
        <h1 id="hero-name" className="entrance">
          Pragatheeswaran{" "}
          <span>
            Kasinathan<span className="name-period">.</span>
          </span>
        </h1>
        <p className="hero-role entrance">
          Thoughtful interfaces. Solid engineering.
        </p>
        <p className="hero-description entrance">
          I build web applications with React, Next.js and TypeScript. Since
          2019, I’ve worked across healthcare, finance and developer tools—and
          built a few products of my own.
        </p>
        <div className="hero-actions entrance">
          <a className="button primary" href="#recent-builds">
            Explore my projects <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href="/Pragatheeswaran-K-Resume.pdf"
            download
          >
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      <figure className="hero-portrait entrance">
        <img
          src="/img/pragatheeswaran-k.webp"
          alt="Pragatheeswaran Kasinathan, front-end engineer based in Chennai"
          width="1100"
          height="851"
          fetchPriority="high"
        />
        <figcaption>
          <span>
            Currently at <strong>Ideas2IT</strong>
          </span>
          <span>Technical Analyst</span>
        </figcaption>
      </figure>
    </section>
  );
}

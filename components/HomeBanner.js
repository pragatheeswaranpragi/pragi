export default function HomeBanner() {
  return (
    <section id="home" className="hero wrap" aria-labelledby="hero-name">
      <div className="hero-copy">
        <p className="eyebrow entrance">
          Front-end engineering / Chennai, India
        </p>
        <h1 id="hero-name" className="entrance">
          Pragatheeswaran{" "}
          <span>
            Kasinathan<span className="name-period">.</span>
          </span>
        </h1>
        <div className="hero-introduction entrance">
          <p className="hero-role">
            Front-end engineer.
            <br />
            <em>Builder of web products.</em>
          </p>
          <p className="hero-description">
            I turn complex workflows into useful web experiences. React, Next.js
            and TypeScript since 2019. Here’s a look at what I’ve been building.
          </p>
        </div>
        <div className="hero-actions entrance">
          <a
            className="text-link"
            href="/Pragatheeswaran-K-Resume.pdf"
            download
          >
            Download résumé <span aria-hidden="true">↓</span>
          </a>
          <a
            className="hero-scroll"
            href="#recent-builds"
            aria-label="Explore selected projects"
          >
            <span>Explore the work</span>
            <span aria-hidden="true">↘</span>
          </a>
        </div>
      </div>
    </section>
  );
}

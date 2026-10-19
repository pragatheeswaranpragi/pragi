export default function HomeBanner() {
  return (
    <section id="home" className="hero wrap" aria-labelledby="hero-name">
      <div className="hero-copy">
        <p className="eyebrow entrance">Independent thinking. Thoughtful engineering.</p>
        <h1 id="hero-name" className="entrance">
          Pragatheeswaran{" "}
          <span>Kasinathan<span className="name-period">.</span></span>
        </h1>
        <div className="hero-introduction entrance">
          <p className="hero-role">Complex ideas.<br /><em>Considered experiences.</em></p>
          <p className="hero-description">
            I’m a front-end engineer turning complex workflows into clear,
            useful web products. Building with React, Next.js and TypeScript
            since 2019.
          </p>
        </div>
        <div className="hero-actions entrance">
          <a className="button primary" href="#recent-builds">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="/Pragatheeswaran-K-Resume.pdf" download>
            Download résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-context entrance" aria-label="Specialisation and location">
          <span>Front-end engineering</span><span>Chennai, India</span>
        </div>
      </div>
      <figure className="hero-portrait entrance">
        <div className="portrait-composition">
          <span className="portrait-outline" aria-hidden="true" />
          <div className="portrait-frame">
            <img src="/img/pragatheeswaran-k.webp" width="1100" height="851"
              alt="Pragatheeswaran Kasinathan" fetchPriority="high" />
          </div>
          <span className="portrait-index" aria-hidden="true">A person behind the pixels.</span>
        </div>
        <figcaption>
          <span className="portrait-status">Currently building at</span>
          <strong>Ideas2IT</strong>
          <span>Technical Analyst</span>
        </figcaption>
      </figure>
    </section>
  );
}

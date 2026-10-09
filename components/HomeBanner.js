import BrandMark from "./BrandMark";
import { profile } from "../lib/content";
export default function HomeBanner() {
  return (
    <div className="home-banner">
      <section id="home" className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="location-dot" /> Chennai, India{" "}
            <span className="eyebrow-divider">/</span> Front-end engineer
          </p>
          <h1>
            {profile.name}
            <span className="name-period">.</span>
          </h1>
          <h2 className="hero-statement">
            Interfaces
            <br />
            <em>with purpose.</em>
            <span>Engineering with care.</span>
          </h2>
          <p className="hero-description">
            I turn complex workflows into clear, useful interfaces. Building
            with React, Next.js and TypeScript since 2019.
          </p>
          <div className="hero-actions">
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
        <div className="hero-composition">
          <span className="portrait-orbit" aria-hidden="true" />
          <div className="portrait-margin-note" aria-hidden="true">
            A little curiosity.
            <br />A lot of building.
          </div>
          <figure className="hero-portrait">
            <div className="portrait-topline">
              <span>THE PERSON BEHIND THE PIXELS</span>
              <span aria-hidden="true">↗</span>
            </div>
            <div className="portrait-image">
              <img
                src="/img/pragatheeswaran-k.webp"
                alt="Pragatheeswaran Kasinathan, front-end engineer based in Chennai"
                width="1100"
                height="851"
                fetchPriority="high"
              />
            </div>
            <figcaption>
              <span>Pragatheeswaran Kasinathan</span>
              <BrandMark />
            </figcaption>
          </figure>
          <div className="hero-current">
            <span className="eyebrow">Currently building at</span>
            <strong>Ideas2IT</strong>
            <span>Technical Analyst</span>
          </div>
        </div>
      </section>
      <nav
        className="portfolio-index wrap"
        aria-label="Explore portfolio sections"
      >
        <div className="index-intro">
          <span className="eyebrow">Choose your starting point</span>
          <p>A closer look at my work.</p>
        </div>
        <a href="#open-source">
          <span className="index-number">01</span>
          <span>
            <strong>Pragi String</strong>
            <small>A published developer tool</small>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
        <a href="#recent-builds">
          <span className="index-number">02</span>
          <span>
            <strong>Personal projects</strong>
            <small>Arena Night & The Border</small>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
        <a href="#work">
          <span className="index-number">03</span>
          <span>
            <strong>Professional work</strong>
            <small>Healthcare, finance & IDEs</small>
          </span>
          <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </div>
  );
}

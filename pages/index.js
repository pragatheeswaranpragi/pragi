import { useState, useEffect, useRef } from "react";
import PackageShowcase from "../components/PackageShowcase";
import CompanyJourney from "../components/CompanyJourney";
import RecentProjects from "../components/RecentProjects";
import Seo from "../components/Seo";
import BrandMark from "../components/BrandMark";
import HomeBanner from "../components/HomeBanner";
import { profile, personalProjects } from "../lib/content";
import { installPortfolioMotion } from "../lib/portfolio-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const menuRef = useRef(null);
  useEffect(() => installPortfolioMotion(document), []);
  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [menuOpen]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Please select and copy the email below.");
    }
  }
  return (
    <div className="portfolio">
      <Seo />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a
          className="wordmark"
          href="#home"
          aria-label="Pragatheeswaran Kasinathan home"
        >
          <BrandMark />
        </a>
        <button
          className="menu-toggle"
          ref={menuRef}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close" : "Menu"}{" "}
          <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
        </button>
        <nav
          id="site-nav"
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {[
            ["Projects", "recent-builds"],
            ["Open source", "open-source"],
            ["Experience", "work"],
            ["About", "about"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <HomeBanner />
        <RecentProjects />
        <PackageShowcase />
        <CompanyJourney />
        <section
          id="about"
          className="section wrap about-section"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">04 / About me</p>
            <h2 id="about-title">
              Built to last,
              <br />
              <em>and easy to use.</em>
            </h2>
          </div>
          <div className="about-copy reveal">
            <p>
              I’m Pragatheeswaran Kasinathan, a front-end engineer based in
              Chennai. I enjoy turning complex workflows into interfaces people
              can understand.
            </p>
            <p>
              My focus is reusable architecture, rendering performance and
              accessibility. I care about how a product works today—and how
              easily the next engineer can maintain it.
            </p>
            <div className="skill-groups">
              <div>
                <h3>Everyday toolkit</h3>
                <p>
                  React · Next.js · TypeScript · JavaScript
                  <br />
                  Tailwind CSS · MUI · Redux · Zustand
                </p>
              </div>
              <div>
                <h3>Engineering focus</h3>
                <p>
                  Architecture · Performance · Accessibility
                  <br />
                  Jest · React Testing Library
                </p>
              </div>
            </div>
            <details className="more-experiments">
              <summary>
                Earlier experiments{" "}
                <span className="disclosure-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="details-content experiment-list">
                {personalProjects.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <strong>{p.name}</strong>
                      <small>{p.description}</small>
                    </span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </details>
          </div>
        </section>
        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-title"
        >
          <div className="wrap contact-inner">
            <div>
              <p className="eyebrow">Have a role or a project in mind?</p>
              <h2 id="contact-title">Let’s talk.</h2>
              <p>I’d be happy to hear what you’re working on.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email} <span aria-hidden="true">↗</span>
              </a>
              <button className="copy-email" onClick={copyEmail}>
                Copy email
              </button>
              <span role="status" className="copy-status">
                {copyStatus}
              </span>
              <div className="contact-links">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  href="/Pragatheeswaran-K-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Résumé ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <p>© {new Date().getFullYear()} Pragatheeswaran Kasinathan</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

import { useState, useEffect } from "react";
import PackageShowcase from "../components/PackageShowcase";
import CompanyJourney from "../components/CompanyJourney";
import RecentProjects from "../components/RecentProjects";
import Seo from "../components/Seo";
import BrandMark from "../components/BrandMark";
import HomeBanner from "../components/HomeBanner";
import ProjectVisual from "../components/ProjectVisual";
import { projects, profile, personalProjects } from "../lib/content";

function Arrow({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"} />
    </svg>
  );
}
function Project({ project, index }) {
  return (
    <article id={`work-${index}`} className="project-row reveal">
      <div className="project-number">0{index + 1}</div>
      <div className="project-copy">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-intro">{project.summary}</p>
        <ul className="tech-list" aria-label={`${project.name} technologies`}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <details className="case-detail">
          <summary>
            My contribution <span aria-hidden="true">+</span>
          </summary>
          <div className="case-body">
            <h4>The work</h4>
            <p>{project.context}</p>
            <h4>What I built</h4>
            <ul>
              {project.contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>
      <ProjectVisual project={project} />
    </article>
  );
}

export default function Home() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.querySelector(".menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Please select and copy the email above");
    }
  }
  return (
    <div className="portfolio">
      <Seo />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <a
          className="wordmark"
          href="#home"
          aria-label="Pragatheeswaran Kasinathan home"
        >
          <BrandMark />
        </a>
        <button
          className="menu-toggle"
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
            ["Pragi String", "open-source"],
            ["Work", "work"],
            ["Projects", "recent-builds"],
            ["Journey", "experience"],
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
            Let’s talk <Arrow diagonal />
          </a>
        </nav>
      </header>
      <main id="main">
        <HomeBanner />
        <PackageShowcase />
        <section id="work" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Selected work</p>
              <h2>A few things I’ve helped build.</h2>
            </div>
            <p>
              Production work, challenging problems,
              <br className="desktop-break" /> and the decisions behind the
              interface.
            </p>
          </div>
          <div className="project-list">
            {projects.map((p, i) => (
              <Project key={p.name} project={p} index={i} />
            ))}
          </div>
          <p className="work-note">
            These are professional projects. The illustrations explain the work
            without showing private product screens.
          </p>
        </section>
        <section id="about" className="section wrap about-section">
          <div className="about-heading">
            <p className="eyebrow">A little about me</p>
            <h2>
              I care about what happens
              <br />
              after the first release.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m Pragatheeswaran Kasinathan, a front-end engineer based in
              Chennai. Since 2019, I’ve worked on financial planning tools,
              healthcare workflows and assessment platforms.
            </p>
            <p>
              I enjoy the parts of front-end development that sit beneath the
              surface: rendering behavior, reusable architecture, performance
              and accessibility. Good software should be easy to use and easier
              for the next engineer to maintain.
            </p>
            <p>
              Outside product work, I build small tools, publish JavaScript
              utilities and write about the things I’m learning.
            </p>
            <div className="skill-groups">
              <div>
                <h3>My everyday toolkit</h3>
                <p>
                  React · Next.js · TypeScript · JavaScript
                  <br />
                  Tailwind CSS · MUI · Redux · Zustand
                </p>
              </div>
              <div>
                <h3>What I pay attention to</h3>
                <p>
                  Front-end architecture · Web performance
                  <br />
                  Accessibility · Jest · React Testing Library
                </p>
              </div>
            </div>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <Arrow diagonal />
            </a>
          </div>
        </section>
        <CompanyJourney />
        <RecentProjects />
        <section
          className="section wrap personal-section"
          aria-labelledby="personal-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / More experiments</p>
              <h2 id="personal-title">Smaller builds. Same care.</h2>
            </div>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              More on GitHub <Arrow diagonal />
            </a>
          </div>
          <div className="personal-grid">
            {personalProjects.map((p) => (
              <article className="personal-project reveal" key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="personal-image"
                  aria-label={`View ${p.name}`}
                >
                  <img
                    src={`/img/${p.image}.webp`}
                    alt={`${p.name} interface preview`}
                    width="1100"
                    height="750"
                    loading="lazy"
                  />
                </a>
                <p className="eyebrow">{p.category}</p>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  {p.label} <Arrow diagonal />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="wrap contact-inner">
            <div>
              <p className="eyebrow">Have something in mind?</p>
              <h2>
                Let’s build something
                <br />
                worth using<span>.</span>
              </h2>
              <p>
                A product challenge, a front-end role, or just a conversation.
                <br />
                I’d be happy to hear from you.
              </p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email} <Arrow diagonal />
              </a>
              <button
                className="copy-email"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copyStatus === "Email copied" ? "Email copied" : "Copy email"}
              </button>
              <span role="status" className="copy-status">
                {copyStatus === "Email copied" ? "" : copyStatus}
              </span>
            </div>
            <div className="contact-links">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <Arrow diagonal />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Arrow diagonal />
              </a>
              <a
                href="/Pragatheeswaran-K-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <p>© {new Date().getFullYear()} Pragatheeswaran Kasinathan</p>
        <p>Built with care in Chennai.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

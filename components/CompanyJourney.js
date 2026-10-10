import { experience, projects } from "../lib/content";
export default function CompanyJourney() {
  return (
    <section
      id="work"
      className="section wrap"
      aria-labelledby="experience-title"
    >
      <div id="experience" className="section-heading">
        <div>
          <p className="eyebrow">03 / Professional experience</p>
          <h2 id="experience-title">The work behind the résumé.</h2>
        </div>
        <p>Teams, responsibilities and the interfaces I helped build.</p>
      </div>
      <div className="career-list">
        {experience.map((entry, index) => (
          <article className="career-row reveal" key={entry.company}>
            <div className="career-meta">
              <p className="eyebrow">{entry.period}</p>
              <h3>{entry.company}</h3>
              <p>{entry.role}</p>
            </div>
            <div className="career-copy">
              <p>{entry.summary}</p>
              {index === 0 && (
                <div className="career-projects">
                  {projects.map((project, i) => (
                    <details
                      className="case-detail"
                      id={`work-${i}`}
                      key={project.name}
                    >
                      <summary>
                        <span>
                          <strong>{project.name}</strong>
                          <small>{project.category}</small>
                        </span>
                        <span className="disclosure-icon" aria-hidden="true">
                          +
                        </span>
                      </summary>
                      <div className="details-content">
                        <p>{project.context}</p>
                        <ul>
                          {project.contributions.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <p className="project-stack">
                          {project.tech.join(" · ")}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
      <a
        className="text-link resume-link"
        href="/Pragatheeswaran-K-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the full résumé <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

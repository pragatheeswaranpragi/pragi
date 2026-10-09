import { experience } from "../lib/content";
const companyProjects = [
  [
    {
      name: "SPICE 2.0",
      detail: "Healthcare · Front-end redevelopment",
      href: "#work-0",
    },
    {
      name: "MSCIQ",
      detail: "FinTech · Spreadsheet interfaces",
      href: "#work-1",
    },
    {
      name: "LegacyLeap",
      detail: "Developer tools · Code diff & impact view",
      href: "#work-2",
    },
  ],
  [
    { name: "Terv", detail: "Assessments, learning and AI proctoring" },
    { name: "DocsAuth", detail: "JSON-driven certificate application forms" },
  ],
  [
    {
      name: "Engineering Tracker",
      detail: "CAD / SP3D workflows, task tracking and reports",
    },
  ],
];
export default function CompanyJourney() {
  return (
    <section id="experience" className="section wrap journey-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / Organisations & the work behind them</p>
          <h2>
            Different teams.
            <br />A growing body of work.
          </h2>
        </div>
        <p>
          From engineering workflows to healthcare.
          <br />A closer look at where I’ve contributed.
        </p>
      </div>
      <div className="journey-grid">
        {experience.map((e, i) => (
          <article
            className={`journey-card journey-${i} reveal`}
            key={e.company}
          >
            <div className="journey-card-top">
              <span className="company-monogram" aria-hidden="true">
                {["I²", "T", "P"][i]}
              </span>
              <span className="journey-period">{e.period}</span>
            </div>
            <div className="journey-company">
              <p className="eyebrow">
                {
                  [
                    "The current chapter",
                    "Learning at product scale",
                    "Where it began",
                  ][i]
                }
              </p>
              <h3>{e.company}</h3>
              <p className="journey-role">{e.role}</p>
            </div>
            <p className="journey-summary">{e.summary}</p>
            <div className="journey-projects">
              <span className="eyebrow">Projects I worked on</span>
              {companyProjects[i].map((p) => (
                <div className="journey-project" key={p.name}>
                  <div>
                    <h4>{p.name}</h4>
                    <p>{p.detail}</p>
                  </div>
                  {p.href && (
                    <a
                      href={p.href}
                      aria-label={`Explore ${p.name} contribution`}
                    >
                      ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
        <aside className="journey-note reveal">
          <span className="journey-note-symbol" aria-hidden="true">
            ↗
          </span>
          <p className="eyebrow">The thread through it all</p>
          <h3>
            Understand the problem.
            <br />
            Build the foundation.
            <br />
            <em>Keep improving it.</em>
          </h3>
          <a
            href="/Pragatheeswaran-K-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            See the full résumé ↗
          </a>
        </aside>
      </div>
    </section>
  );
}

import { useRef, useState } from "react";
import { openScreenshot, closeScreenshot } from "../lib/portfolio-motion";
const builds = [
  {
    id: "varavuselavu",
    name: "VaravuSelavu",
    category: "Personal finance / PWA",
    description:
      "Income, expenses, commitments and savings goals—with shared household spaces and separate debt collection rooms.",
    features: [
      "Expenses & commitments",
      "Shared households",
      "Debt collection",
      "Offline queue & CSV export",
    ],
    detail:
      "Built with JavaScript, Supabase Auth, PostgreSQL and an IndexedDB queue for offline changes. Personal, household and collection records stay in separate spaces. Commitment schedules distinguish planned payments from money already spent.",
    href: "https://vsvaravuselavu.vercel.app/",
  },
  {
    id: "the-border",
    name: "The Border",
    category: "Browser game experiment",
    image: "the-border.png",
    width: 1919,
    height: 974,
    alt: "The Border arena with contestants, a central stage and viewing controls",
    description:
      "An Alice in Borderland-inspired web game exploring a cinematic arena, contestant views and sound controls.",
    features: [
      "Arena & contestant views",
      "Stage perspectives",
      "Sound controls",
    ],
    detail:
      "The screenshot shows the arena foundation. Contestants surround a central stage, with multiple viewing modes and optional sound. The game continues to evolve through development sprints.",
  },
  {
    id: "arena-night",
    name: "Arena Night",
    category: "Tournament management",
    image: "arena-night.png",
    width: 1889,
    height: 955,
    alt: "Arena Night tournament dashboard showing league progress and standings navigation",
    description:
      "A tournament workspace connecting player auctions, fixtures, standings and final results.",
    features: ["Auction room", "Fixtures & standings", "Tournament overview"],
    detail:
      "Built around our family’s MK1 tournament. The auction room, match scheduling and points table make the competition easier to organise and follow.",
  },
];
export default function RecentProjects() {
  const [paused, setPaused] = useState(false);
  function selectProject(id) {
    const detail = document.getElementById(id);
    if (detail) detail.open = true;
  }
  return (
    <section
      id="recent-builds"
      className="section wrap recent-builds"
      aria-labelledby="recent-builds-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / The project collection</p>
          <h2 id="recent-builds-title">A few things of my own.</h2>
        </div>
        <div className="marquee-controls">
          <button
            className="marquee-toggle"
            data-marquee-toggle
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? "Resume motion" : "Pause motion"}{" "}
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
          </button>
        </div>
      </div>
      <div className={`project-marquee${paused ? " is-paused" : ""}`}>
        <div
          className="marquee-window"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              event.currentTarget.scrollLeft = 0;
          }}
        >
          <div className="marquee-track">
            {[false, true].map((duplicate) => (
              <div
                className={`marquee-group${duplicate ? " marquee-duplicate" : ""}`}
                key={String(duplicate)}
                aria-hidden={duplicate || undefined}
              >
                {builds.map((project, index) => (
                  <a
                    className={`marquee-card marquee-card-${project.id}`}
                    href={`#${project.id}`}
                    tabIndex={duplicate ? -1 : undefined}
                    data-project-target={project.id}
                    key={project.id}
                    onClick={() => selectProject(project.id)}
                  >
                    <div className="marquee-art">
                      {project.image ? (
                        <img
                          src={`/img/${project.image}`}
                          width={project.width}
                          height={project.height}
                          alt={duplicate ? "" : project.alt}
                          loading="lazy"
                        />
                      ) : (
                        <div className="marquee-vs-art">
                          <img
                            src="/img/varavuselavu-icon.svg"
                            width="48"
                            height="48"
                            alt=""
                            loading="lazy"
                          />
                          <span>VS — Varavu Selavu</span>
                          <p>
                            A little clarity,
                            <br />
                            <em>every day.</em>
                          </p>
                          <small>Income ↙ &nbsp; Expenses ↗</small>
                          <span className="marquee-art-note">
                            Product illustration
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="marquee-card-meta">
                      <span className="eyebrow">
                        0{index + 1} / {project.category}
                      </span>
                      <span aria-hidden="true">↗</span>
                    </div>
                    <h3>{project.name}</h3>
                    <span className="marquee-card-action">
                      Explore the project
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="marquee-hint">
        <span className="desktop-marquee-hint">
          Hover to pause. Select a project for details.
        </span>
        <span className="static-marquee-hint">
          Scroll sideways to explore. Select a project for details.
        </span>
      </p>
      <div className="marquee-project-details">
        {builds.map((project) => (
          <details className="case-detail" id={project.id} key={project.id}>
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
              <p>{project.description}</p>
              <ul className="recent-features">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <p>{project.detail}</p>
              {project.href && (
                <a
                  className="text-link"
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open VaravuSelavu <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {project.image && <ScreenshotPreview project={project} />}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
function ScreenshotPreview({ project }) {
  const dialogRef = useRef(null);
  return (
    <>
      <figure className="recent-image">
        <a
          className="screenshot-link"
          href={`/img/${project.image}`}
          data-dialog={`preview-${project.id}`}
          aria-label={`Enlarge ${project.name} screenshot`}
          onClick={(event) => {
            if (openScreenshot(dialogRef.current)) event.preventDefault();
          }}
        >
          <img
            src={`/img/${project.image}`}
            width={project.width}
            height={project.height}
            loading="lazy"
            alt={project.alt}
          />
          <span className="screenshot-hint">View full screenshot ↗</span>
        </a>
        <figcaption>Actual project screenshot</figcaption>
      </figure>
      <dialog
        ref={dialogRef}
        id={`preview-${project.id}`}
        className="screenshot-dialog"
        aria-labelledby={`preview-title-${project.id}`}
        onCancel={(event) => {
          event.preventDefault();
          closeScreenshot(event.currentTarget);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget)
            closeScreenshot(event.currentTarget);
        }}
      >
        <div className="screenshot-dialog-top">
          <h3 id={`preview-title-${project.id}`}>{project.name}</h3>
          <form
            method="dialog"
            onSubmit={(event) => {
              event.preventDefault();
              closeScreenshot(dialogRef.current);
            }}
          >
            <button aria-label={`Close ${project.name} screenshot`}>
              Close ×
            </button>
          </form>
        </div>
        <img
          src={`/img/${project.image}`}
          width={project.width}
          height={project.height}
          loading="lazy"
          alt={project.alt}
        />
        <p>Actual project screenshot · Press Escape to close</p>
      </dialog>
    </>
  );
}

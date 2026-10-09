import { useRef } from "react";
const builds = [
  {
    id: "arena-night",
    name: "Arena Night",
    category: "Tournament management",
    image: "arena-night.png",
    width: 1889,
    height: 955,
    tagline: "A home for our game nights.",
    description:
      "A tournament workspace that brings player auctions, fixtures, standings and the final result into one place.",
    detail:
      "Built around our family’s MK1 tournament. The interface connects the auction room with match scheduling and a points table, so the competition is easier to organise and follow.",
    features: ["Auction room", "Fixtures & standings", "Tournament overview"],
  },
  {
    id: "the-border",
    name: "The Border",
    category: "Browser game experiment",
    image: "the-border.png",
    width: 1919,
    height: 974,
    tagline: "Stepping inside the arena.",
    description:
      "An Alice in Borderland-inspired web game project, exploring a cinematic arena, contestant views and sound controls.",
    detail:
      "The screenshot captures the arena foundation: contestants arranged around a central stage, multiple viewing modes and an optional sound control. The game continues to evolve through separate development sprints.",
    features: [
      "Arena & contestant views",
      "Stage perspectives",
      "Sound controls",
    ],
  },
];
export default function RecentProjects() {
  return (
    <section
      id="recent-builds"
      className="section wrap recent-builds"
      aria-labelledby="recent-builds-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / Personal projects</p>
          <h2 id="recent-builds-title">
            Built for play.
            <br />
            Made to explore.
          </h2>
        </div>
        <p>
          Two recent builds, from organising
          <br />a game night to imagining an arena.
        </p>
      </div>
      <div className="recent-grid">
        {builds.map((project, index) => (
          <article
            className={`recent-project recent-project-${index} reveal`}
            id={project.id}
            key={project.id}
          >
            <div className="recent-project-top">
              <span className="eyebrow">{project.category}</span>
              <span className="recent-index" aria-hidden="true">
                0{index + 1}
              </span>
            </div>
            <h3>{project.name}</h3>
            <p className="recent-tagline">{project.tagline}</p>
            <ScreenshotPreview project={project} />
            <p className="recent-description">{project.description}</p>
            <ul
              className="recent-features"
              aria-label={`${project.name} highlights`}
            >
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <details className="recent-details">
              <summary>
                Behind the build <span aria-hidden="true">+</span>
              </summary>
              <p>{project.detail}</p>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScreenshotPreview({ project }) {
  const dialogRef = useRef(null);
  const alt =
    project.id === "arena-night"
      ? "Arena Night dashboard showing an MK1 family tournament, league progress and standings navigation"
      : "The Border arena foundation showing six contestants around a central stage and viewing controls";
  return (
    <>
      <figure className="recent-image">
        <a
          className="screenshot-link"
          href={`/img/${project.image}`}
          data-dialog={`preview-${project.id}`}
          aria-label={`Enlarge ${project.name} screenshot`}
          onClick={(event) => {
            if (dialogRef.current?.showModal) {
              event.preventDefault();
              dialogRef.current.showModal();
            }
          }}
        >
          <img
            src={`/img/${project.image}`}
            width={project.width}
            height={project.height}
            loading="lazy"
            alt={alt}
          />
          <span className="screenshot-hint">
            View full screenshot <span aria-hidden="true">↗</span>
          </span>
        </a>
        <figcaption>
          {project.id === "arena-night"
            ? "Tournament overview · Actual project screenshot"
            : "Arena foundation · Actual project screenshot"}
        </figcaption>
      </figure>
      <dialog
        ref={dialogRef}
        id={`preview-${project.id}`}
        className="screenshot-dialog"
        aria-labelledby={`preview-title-${project.id}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="screenshot-dialog-top">
          <h3 id={`preview-title-${project.id}`}>{project.name}</h3>
          <form method="dialog">
            <button aria-label={`Close ${project.name} screenshot`}>
              Close <span aria-hidden="true">×</span>
            </button>
          </form>
        </div>
        <img
          src={`/img/${project.image}`}
          width={project.width}
          height={project.height}
          loading="lazy"
          alt={alt}
        />
        <p>Actual project screenshot · Press Escape to close</p>
      </dialog>
    </>
  );
}

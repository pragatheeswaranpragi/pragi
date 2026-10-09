export default function ProjectVisual({ project }) {
  return (
    <div
      className={`project-visual ${project.visual}`}
      aria-label={`${project.name} conceptual illustration`}
    >
      <span className="visual-label">{project.visualLabel}</span>
      {project.visual === "healthcare" && (
        <>
          <div className="form-preview">
            <div className="preview-top">
              <span className="preview-symbol">+</span>
              <span>Clinical workflows</span>
            </div>
            <div className="preview-rule" />
            <div className="preview-fields">
              <span>Patient record</span>
              <span>Assessment</span>
              <span>Follow-up</span>
            </div>
            <div className="preview-block">
              <i />
              <i />
              <i />
            </div>
            <div className="preview-bottom">
              A reusable foundation <span>→</span>
            </div>
          </div>
          <span className="visual-note">
            Architecture · Dynamic forms · FHIR
          </span>
        </>
      )}
      {project.visual === "finance" && (
        <>
          <div className="sheet-preview">
            <div className="sheet-title">
              Financial planning <span>FY</span>
            </div>
            <div className="sheet-grid">
              {[
                "",
                "Q1",
                "Q2",
                "Q3",
                "Revenue",
                "—",
                "—",
                "—",
                "Expenses",
                "—",
                "—",
                "—",
                "Forecast",
                "—",
                "—",
                "—",
              ].map((v, i) => (
                <span key={i}>{v}</span>
              ))}
            </div>
            <div className="sheet-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <span className="visual-note">Complex data. Clear interfaces.</span>
        </>
      )}
      {project.visual === "developer" && (
        <>
          <div className="diff-preview">
            <div className="diff-title">
              <span /> legacy → modern
            </div>
            <div className="diff-line removed">− Original implementation</div>
            <div className="diff-line added">+ Suggested transformation</div>
            <div className="diff-line added">+ Review the impact</div>
            <div className="diff-heatmap">
              {Array.from({ length: 15 }, (_, i) => (
                <i key={i} />
              ))}
            </div>
          </div>
          <span className="visual-note">Code comparison · Impact view</span>
        </>
      )}
      <span className="illustration-caption">Concept illustration</span>
    </div>
  );
}

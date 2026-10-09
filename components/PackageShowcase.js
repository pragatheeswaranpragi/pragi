import { useState } from "react";
import { packageModes, transformPackageInput } from "../lib/package-demo.mjs";
export default function PackageShowcase() {
  const [mode, setMode] = useState("titleCase");
  const [input, setInput] = useState("hello from pragi");
  const [copyState, setCopyState] = useState("");
  const selected = packageModes.find((m) => m.id === mode);
  let output = "",
    error = "";
  try {
    output = transformPackageInput(mode, input);
  } catch (e) {
    error = e.message;
  }
  async function copyInstall() {
    try {
      await navigator.clipboard.writeText("npm install pragi-string");
      setCopyState("Copied");
    } catch {
      setCopyState("Select the command to copy");
    }
  }
  return (
    <section
      id="open-source"
      className="package-feature wrap reveal"
      aria-labelledby="opensource-title"
    >
      <div className="package-topline">
        <p className="eyebrow">01 / Built by me. Published for everyone.</p>
        <span className="package-release">
          npm package <span aria-hidden="true">·</span> v1.1.3
        </span>
      </div>
      <div className="package-layout">
        <div className="package-story">
          <div className="package-emblem" aria-hidden="true">
            <span>{"{ "}</span>p<span>{" }"}</span>
          </div>
          <h2 id="opensource-title">
            Pragi<span>String</span>
            <i aria-hidden="true">.</i>
          </h2>
          <p className="package-lead">
            The little utilities
            <br />
            you shouldn’t have to rewrite.
          </p>
          <p className="package-description">
            I built pragi-string to handle the everyday formatting jobs: text,
            numbers and time. A small JavaScript package, made for the details
            that keep coming up.
          </p>
          <div className="package-links">
            <a
              href="https://npm.io/package/pragi-string"
              target="_blank"
              rel="noopener noreferrer"
              className="button primary"
            >
              Explore the package ↗
            </a>
            <a
              href="https://www.npmjs.com/package/pragi-string"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View on npm ↗
            </a>
          </div>
          <div className="install-command">
            <code>npm install pragi-string</code>
            <button
              onClick={copyInstall}
              aria-label="Copy package install command"
            >
              {copyState === "Copied" ? "Copied ✓" : "Copy"}
            </button>
          </div>
          <span role="status" className="package-copy-status">
            {copyState}
          </span>
        </div>
        <div className="package-playground">
          <div className="playground-header">
            <span className="playground-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>pragi-string / playground</span>
            <span className="live-badge">Try it</span>
          </div>
          <div className="playground-body">
            <div
              className="demo-modes"
              role="group"
              aria-label="Package transformation"
            >
              {packageModes.map((m) => (
                <button
                  key={m.id}
                  aria-pressed={mode === m.id}
                  data-package-mode={m.id}
                  onClick={() => {
                    setMode(m.id);
                    setInput(m.example);
                  }}
                >
                  {m.label}
                </button>
              ))}
            </div>
            <label htmlFor="package-input">YOUR INPUT</label>
            <input
              id="package-input"
              value={input}
              maxLength={120}
              inputMode={mode === "titleCase" ? "text" : "numeric"}
              onChange={(e) => setInput(e.target.value)}
              aria-describedby="package-hint package-error"
            />
            <p id="package-hint" className="demo-hint">
              {selected.hint}
            </p>
            <div className="demo-source">
              <span aria-hidden="true">↳</span>
              <code id="package-code">{selected.code}</code>
            </div>
            <div className="demo-output">
              <span>THE RESULT</span>
              <output
                htmlFor="package-input"
                aria-live="polite"
                id="package-output"
              >
                {error ? "—" : output || "Your result appears here"}
              </output>
            </div>
            <p id="package-error" role="status" className="demo-error">
              {error}
            </p>
            <p className="demo-footnote">
              Running the published package, right here in your browser.
            </p>
          </div>
        </div>
      </div>
      <div className="package-capabilities">
        <div>
          <span>01</span>
          <h3>Text, tidied up.</h3>
          <p>Title case, trimming and truncation.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Numbers that read well.</h3>
          <p>Words, ordinals and Roman numerals.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Time, made human.</h3>
          <p>Readable durations and digital time.</p>
        </div>
      </div>
    </section>
  );
}

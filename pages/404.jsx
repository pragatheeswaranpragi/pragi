import Head from "next/head";
export default function NotFound() {
  return (
    <div
      className="portfolio wrap"
      style={{ paddingTop: 100, paddingBottom: 100 }}
    >
      <Head>
        <title>Page not found | Pragatheeswaran K</title>
        <meta name="robots" content="noindex" />
      </Head>
      <p className="eyebrow">404 / Page not found</p>
      <h1
        style={{ fontFamily: "Georgia,serif", fontSize: 40, margin: "20px 0" }}
      >
        Let’s get you back.
      </h1>
      <p style={{ marginBottom: 25 }}>
        This page isn’t available. You can find my work on the homepage.
      </p>
      <a href="/" className="button primary">
        Back to portfolio →
      </a>
    </div>
  );
}

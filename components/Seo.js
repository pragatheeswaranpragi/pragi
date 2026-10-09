import Head from "next/head";
import { profile, structuredData } from "../lib/content";
export default function Seo() {
  return (
    <Head>
      <title>
        Pragatheeswaran Kasinathan | Front-End Engineer · React & Next.js
      </title>
      <meta
        name="description"
        content="Pragatheeswaran Kasinathan is a front-end engineer and Technical Analyst in Chennai, building React, Next.js and TypeScript applications for healthcare, fintech and edtech."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Pragatheeswaran Kasinathan" />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta
        name="google-site-verification"
        content="6RAzRdIOx5lJ63F0aAYkegAFWF6znGflBI8JXCQKxfg"
      />
      <link rel="canonical" href={`${profile.url}/`} />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta name="theme-color" content="#f6f5f0" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pragatheeswaran Kasinathan" />
      <meta
        property="og:title"
        content="Pragatheeswaran Kasinathan — Front-End Engineer"
      />
      <meta
        property="og:description"
        content="Thoughtful interfaces. Solid engineering. Explore my work in React, TypeScript, healthcare, fintech and developer tools."
      />
      <meta property="og:url" content={`${profile.url}/`} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={`${profile.url}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Pragatheeswaran Kasinathan, Front-End Engineer in Chennai"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Pragatheeswaran Kasinathan — Front-End Engineer"
      />
      <meta
        name="twitter:description"
        content="React, Next.js and TypeScript. Selected work, experience and open-source contributions."
      />
      <meta name="twitter:image" content={`${profile.url}/og-image.png`} />
      <link rel="preload" as="image" href="/img/pragatheeswaran-k.webp" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </Head>
  );
}

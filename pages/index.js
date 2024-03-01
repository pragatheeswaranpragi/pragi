import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './component/banner';
import Career from './component/career';
import OwnProjects from './component/ownProjects';
import Company from './component/company';
import Footer from './component/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pragatheeswaran K</title>
        <meta name="description" content="pragatheeswaran k" />
        <link rel="icon" href="/favicon.ico" />
    <meta name="application-name" content="pragatheeswaran K" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content="pragatheeswaran K" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#3B82F6" />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="./favicon.svg"/>
    <meta name="viewport" content="width=device-width" />
    <meta charSet="utf-8" />
    <title>Pragatheeswaran K - Senior Software Engineer | React js | Next Js | Typescript | Javascript | UI and UX designing
    </title>
    <meta property="og:title"
      content="Pragatheeswaran K - Senior Software Engineer | React js | Next Js | Typescript | Javascript | UI and UX designing" />
    <meta name="image" content="./favicon.svg" />
    <meta name="google-site-verification" content="6RAzRdIOx5lJ63F0aAYkegAFWF6znGflBI8JXCQKxfg" />
    <meta name="twitter:title"
      content="Pragatheeswaran K - Senior Software Engineer | React js | Next Js | Typescript | Javascript | UI and UX designing" />
    <meta itemProp="name" content="Pragatheeswaran K - Senior Software Engineer | React js | Typescript | Javascript | UI and UX designing" />
    <meta name="application-name"
      content="Pragatheeswaran K - Senior Software Engineer | React js | Next Js | Typescript | Javascript | UI and UX designing" />
    <meta property="og:site_name" content="Pragatheeswaran k" />
    <meta name="description"
      content="Pragatheeswaran K - Senior Software Engineer | React js | Next Js | Typescript | Javascript | UI and UX designing" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="url" content="https://Pragatheeswaran.vercel.app" />
    <meta property="og:url" content="https://Pragatheeswaran.vercel.app" />
    <meta property="og:locale" content="en" />
    <meta name="language" content="en" />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta name="theme-color" content="#141414" />
    <meta name="msapplication-TileColor" content="#141414" />
    <meta name="keywords" content="pragatheeswaran k, pragatheeswaran, pragi" />
    <meta name="imagemode" content="force" />
    <meta name="copyright" content="pragatheeswaran k" />
    <meta name="classification" content="pragatheeswaran k" />
    <meta name="coverage" content="pragatheeswaran k" />
    <meta name="distribution" content="Global" />
    <meta name="HandheldFriendly" content="True" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="apple-mobile-web-app-title" content="pragatheeswaran" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-touch-fullscreen" content="yes" />
    <link rel="preload" href="/_next/static/css/ccad57aac228ee1a126d.css" as="style" />
    <link rel="stylesheet" href="/_next/static/css/ccad57aac228ee1a126d.css" data-n-g="" />
    <noscript data-n-css="true"></noscript>
    <link rel="preload" href="/_next/static/chunks/main-d4cbd8777f8c8d4581f6.js" as="script" />
    <link rel="preload" href="/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js" as="script" />
    <link rel="preload" href="/_next/static/chunks/framework.6da128e7067b458ee997.js" as="script" />
    <link rel="preload" href="/_next/static/chunks/05d954cf.f1d8677dec32dd1ebf6c.js" as="script" />
    <link rel="preload" href="/_next/static/chunks/b637e9a5.0525a7f91bdee31be29f.js" as="script" />
    <link rel="preload" href="/_next/static/chunks/commons.a91e4f58f9897850f771.js" as="script" />
    <link rel="preload" href="/_next/static/chunks/244f6cc5d115af0baf06061eaf3f02e0952193dd.99d4429dd3952d115767.js"
      as="script" />
    <link rel="preload" href="/_next/static/chunks/a98549d11936286c6d156e4aab1b55ad5801213e.75d519465f751e7ff301.js"
      as="script" />
    <link rel="preload" href="/_next/static/chunks/pages/_app-09d9c381e8c2597b2ebd.js" as="script" />
    <link rel="preload" href="/_next/static/chunks/eb9f418bda89756abf0bc6a45e74b304a789484e.9c2053c24edda3725dc9.js"
      as="script" />
    <link rel="preload" href="/_next/static/chunks/ce663f1d16f44128c4d7fb6b346de7dc2064c691.7ad1cc5d64107bb9a913.js"
      as="script" />
    <link rel="preload" href="/_next/static/chunks/60fc052c05b12fbe129d31f7db046de194a2634f.3a9665d8fb0a749aa591.js"
      as="script" />
    <link rel="preload" href="/_next/static/chunks/76e08eff52b1fa2a25ae270882df6c7e37114b07.776c9d253c2178d54e8a.js"
      as="script" />
    <link rel="preload" href="/_next/static/chunks/pages/index-6a7b54abab432d565939.js" as="script" />
  </Head>
      {/* <div className="relative px-4 py-3 text-white bg-indigo-600 pr-14">
  <p className="text-sm font-medium text-left sm:text-center">
      This page is under construction, would you like more information about me?
    <a className="underline" href="https://pragi.vercel.app/portfolio"> Learn More &rarr; </a>
  </p>
</div> */}
      <Banner />
      <Career />
      <Company />
      <OwnProjects />
      <Footer />
    </div>
  )
}

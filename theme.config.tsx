import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://it-scripts.github.io${asPath}`;
  const description = frontMatter.description || "Documentation for all it-scripts projects";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/it-logo.ico" />
      <meta httpEquiv="Content-Language" content="en" />

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://i.imgur.com/OenvzZz.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://i.imgur.com/OenvzZz.png" />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, " ").split("/");
  const category = (arr[1][0] !== "#" && arr[1]) || "it-scripts";
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : "%s";

  return {
    titleTemplate: `${title} | ${
      rawTitle === category ? "Documentation" : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: "50px",
        lineHeight: "38px",
        background: "url(/it-logo.png) no-repeat left",
        backgroundSize: "38px",
        fontWeight: 550,
      }}
    >
      it-scripts
    </div>
  ),
  project: {
    link: "https://github.com/it-scripts",
  },
  chat: {
    link: "https://discord.it-scripts.com",
  },
  docsRepositoryBase: "https://github.com/it-scripts/it-scripts.github.io/blob/main",
  footer: {
    text: "it-scripts © 2025",
  },
  primaryHue: { dark: 169, light: 169 },
  primarySaturation: { dark: 100, light: 50},
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  toc: {
    backToTop: true,
  },
  head: useHead,
  useNextSeoProps: useNextSeoProps,
};

export default config;

module.exports = {
  title: "Stethoscope",
  tagline: "Track and visualize your health and life data",
  url: "https://stethoscope.js.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "https://stethoscope-js.github.io/branding/stethoscope-icon.svg",
  organizationName: "stethoscope-js",
  projectName: "stethoscope.js.org",
  themeConfig: {
    navbar: {
      title: "Stethoscope",
      logo: {
        alt: "Stethoscope Logo",
        src: "https://stethoscope-js.github.io/branding/stethoscope-icon.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/stethoscope-js/stethoscope.js.org",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Style Guide",
      //         to: "docs/",
      //       },
      //       {
      //         label: "Second Doc",
      //         to: "docs/doc2/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/stethoscope-js/stethoscope.js.org",
      //       },
      //     ],
      //   },
      // ],
      copyright: `© ${new Date().getFullYear()} Stethoscope`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/stethoscope-js/stethoscope.js.org/blob/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/stethoscope-js/stethoscope.js.org/blob/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

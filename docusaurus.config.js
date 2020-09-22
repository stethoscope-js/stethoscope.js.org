module.exports = {
  title: "Stethoscope",
  tagline: "Track, visualize, and embed your health and life data",
  url: "https://stethoscope.js.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "https://stethoscope.js.org/branding/stethoscope-icon.svg",
  organizationName: "stethoscope-js",
  projectName: "stethoscope.js.org",
  themeConfig: {
    navbar: {
      title: "Stethoscope",
      logo: {
        alt: "Stethoscope Logo",
        src: "https://stethoscope.js.org/branding/stethoscope-icon.svg",
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
          href: "https://github.com/stethoscope-js/stethoscope",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Stethoscope",
          items: [
            {
              label: "Documentation",
              to: "docs/",
            },
            {
              label: "Get started",
              to: "docs/get-started",
            },
            {
              label: "Integrations",
              to: "docs/integrations/",
            },
            {
              label: "Embed",
              to: "docs/embed/",
            },
          ],
        },
        {
          title: "Lifestyle integrations",
          items: [
            {
              label: "Spotify",
              to: "docs/integrations/spotify",
            },
            {
              label: "Last.fm",
              to: "docs/integrations/last-fm",
            },
            {
              label: "Pocket Casts",
              to: "docs/integrations/pocket-casts",
            },
            {
              label: "Goodreads",
              to: "docs/integrations/goodreads",
            },
          ],
        },
        {
          title: "Time tracking integrations",
          items: [
            {
              label: "Rescue Time",
              to: "docs/integrations/rescue-time",
            },
            {
              label: "Wakatime",
              to: "docs/integrations/wakatime",
            },
            {
              label: "Clockify",
              to: "docs/integrations/clockify",
            },
          ],
        },
        {
          title: "Health integrations",
          items: [
            {
              label: "Google Fit",
              to: "docs/integrations/google-fit",
            },
            {
              label: "Oura Ring",
              to: "docs/integrations/oura-ring",
            },
            {
              label: "Apple Health",
              to: "docs/integrations/apple-health",
            },
          ],
        },
      ],
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

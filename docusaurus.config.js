// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Goliath Bot Documentation',
  tagline: 'Official Documentation for the Goliath Discord Bot',
  favicon: 'https://goliath.bot/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.goliath.bot',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GoliathBot', // Usually your GitHub org/user name.
  projectName: 'docs.goliath.bot', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl: 'https://github.com/goliathbot/docs.goliath.bot/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://goliath.bot/assets/goliath_96_98.png',
      metadata: [
        { name: "keywords", content: "Goliath, Goliath Bot, Goliath Discord Bot, Goliath Discord, Discord Bot" },
        { name: "theme-color", content: "#0F3F17" }
      ],
      navbar: {
        title: 'Goliath Bot Documentation',
        items: [
          {
            href: 'https://goliath.bot',
            label: 'Home',
            position: 'right',
          },
          {
            href: 'https://support.goliath.bot',
            label: 'Support',
            position: 'right',
          },
          {
            href: 'https://invite.goliath.bot',
            label: 'Invite',
            position: 'right',
          },
          {
            href: 'https://github.com/goliathbot/docs.goliath.bot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© Goliath Bot. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false
      }
    })
};

export default config;

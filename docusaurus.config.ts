import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Cybersecurity Networking Vault',
  tagline: 'A comprehensive Zettelkasten knowledge base for computer networking and cybersecurity',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://Saransh0503.github.io',
  baseUrl: '/networking-vault/',

  organizationName: 'Saransh0503',
  projectName: 'networking-vault',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Networking Vault',
      logo: {
        alt: 'Networking Vault Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            {label: 'Models', to: '/docs/category/models'},
            {label: 'Protocols', to: '/docs/category/protocols'},
            {label: 'Attacks', to: '/docs/category/attacks'},
            {label: 'Defenses', to: '/docs/category/defenses'},
          ],
        },
        {
          title: 'Explore',
          items: [
            {label: 'Maps of Content', to: '/docs/category/maps-of-content'},
            {label: 'Models', to: '/docs/category/models'},
            {label: 'Protocols', to: '/docs/category/protocols'},
            {label: 'Attacks', to: '/docs/category/attacks'},
            {label: 'Defenses', to: '/docs/category/defenses'},
          ],
        },
        {
          title: 'Built With',
          items: [
            {label: 'Obsidian', href: 'https://obsidian.md'},
            {label: 'Docusaurus', href: 'https://docusaurus.io'},
            {label: 'Zettelkasten Method', href: 'https://zettelkasten.de'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} — Cybersecurity Networking Knowledge Base`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

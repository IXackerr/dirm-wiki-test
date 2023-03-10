// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ДИРМ Вики',
  tagline: 'Наши боты крутые',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Xackerr', // Usually your GitHub org/user name.
  projectName: 'dirmwiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ДИРМ Вики',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Туториалы',
          },
          { to: '/blog', label: 'Обновления', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Страницы',
            items: [
              {
                label: 'Туториалы',
                to: '/docs/intro',
              },
              {
                label: 'Обновления',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Полезные ссылки',
            items: [
              {
                label: 'Дискорд ДИРМ',
                href: 'https://discord.gg/T78v77vgpP',
              },
              {
                label: 'Разраб',
                href: 'https://www.twitch.tv/xackerr_off',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ДИРМ ВИКИ, Сделано Хаскером`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

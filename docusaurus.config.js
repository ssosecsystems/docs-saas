
import { themes as prismThemes } from 'prism-react-renderer';

export default {
  title: 'SSOSEC',
  tagline: 'Enterprise Security solutions to protect Users, Apps, Devices and Data',
  url: 'http://ssosec.com',
  baseUrl: '/',
  favicon: 'img/ssosec-favicon.ico',

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'SSSOEC',
        src: 'img/ssosec.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        //{ to: '/blog', label: 'Blog', position: 'left' },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      // style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SSOSEC Systems India Pvt. Ltd. All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      }),
    ],
  ],
};


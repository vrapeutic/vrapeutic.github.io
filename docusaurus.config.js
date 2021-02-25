module.exports = {
  title: 'VRapeutic',
  tagline: 'Virtual Worlds, Real Hope.',
  url: 'https://vrapeutic.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/vrapeutic-logo.ico',
  organizationName: 'vrapeutic', // Usually your GitHub org/user name.
  projectName: 'vrapeutic.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'VRapeutic',
      logo: {
        alt: 'VRapeutic Logo',
        src: 'img/vrapeutic-logo.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },
        // {
        //   href: 'https://myvrapeutic.com/',
        //   label: 'VRapeutic',
        //   position: 'right',
        // },
        // {
        //   href: 'http://yuram.tech/',
        //   label: 'Yuram',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'WebXR',
              to: 'docs/',
            },
            {
              label: "Therapeutic Modules' Library",
              to: 'docs/ellie-tale/',
            },
          ],
        },
        {
          title: 'VRapeutic on Social Media',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/myvrapeutic',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/myvrapeutic',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/myvrapeutic/',
            },
          ],
        },
        {
          title: 'Yuram on Social Media',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/yuramcares/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/yuramcares',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/yuramcares/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'VRapeutic Website',
              href: 'https://myvrapeutic.com/',
            },
            {
              label: 'Yuram Blog',
              href: 'http://yuram.tech/blog/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VRapeutic, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'lailai\'s Blog',
  tagline: '光锥之内，就是命运。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',



  url: 'https://lailai0916.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lailai0916', // Usually your GitHub org/user name.
  projectName: 'lailai\'s Blog', // Usually your repo name.
  trailingSlash: false,





  // onBrokenLinks: 'throw',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {

            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],

          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        blog: {


          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],


          showReadingTime: true,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '文章列表',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'lailai\'s Blog',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs1',
            position: 'left',
            label: '竞赛',
            to: '/docs/竞赛'
          },
          {
            type: 'docSidebar',
            sidebarId: 'docs2',
            position: 'left',
            label: '数学',
            to: '/docs/数学',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docs3',
            position: 'left',
            label: '项目',
            to: '/docs/项目',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/lailai0916/lailai0916.github.io',
            // label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            // 'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        links: [
          {
            title: '文档',
            items: [
              {
                label: '竞赛',
                to: '/docs/竞赛',
              },
              {
                label: '数学',
                to: '/docs/数学',
              },
              {
                label: '项目',
                to: '/docs/项目',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ',
                href: 'http://wpa.qq.com/msgrd?v=3&uin=11548585&site=qq&menu=yes',
              },
              {
                label: '洛谷',
                href: 'https://www.luogu.com.cn/user/455474',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/lailai0916',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '作者',
                to: '/blog/authors',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lailai0916/lailai0916.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} lailai0916. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),


  themes: [
    // ... Your other themes.
    [
        // 本地搜索
        // https://github.com/easyops-cn/docusaurus-search-local
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],


};

export default config;

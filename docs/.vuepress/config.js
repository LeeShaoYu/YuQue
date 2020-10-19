const {description} = require('../../package')

module.exports = {
    title: 'Byteoooooo',
    description: '天青色等烟雨, 而我等不到你',
    base: '/Notes/',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png'}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    themeConfig: {
        repo: 'https://github.com/byteoo/Notes',
        repoLabel: 'Github',
        docsDir: 'docs',
        // // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
        // // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '有问题？点我修改',
        // displayAllHeaders: true,
        lastUpdated: true,
        displayAllHeaders: false,
        activeHeaderLinks: false,
        smoothScroll: true,
        sidebarDepth: 5,
        // displayAllHeaders: true,
        sidebar: 'auto',
        // navbar: false,
        nav: [
            {
                text: 'Java',
                link: '/java/',
            },
            {
                text: 'Github',
                link: 'https://github.com/byteoo'
            },
        ],
    },

    markdown: {
        lineNumber: true,
        plugins: [],
        toc: {includeLevel: [4, 5]}
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@vuepress/last-updated',
        '@vuepress/nprogress',
        '@vuepress/register-components',
        '@vuepress/active-header-links',{
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }
    ]
};

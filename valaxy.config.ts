import { defineConfig } from 'valaxy';
import type { ThemeConfig } from 'valaxy-theme-yun';
import { addonWaline } from 'valaxy-addon-waline';

// add icons what you will need
const safelist: string[] = [
    'i-ri-home-line',
];

/**
 * User Config
 */
export default defineConfig<ThemeConfig>({
    // 启用评论
    comment: {
        enable: true
    },
    // 设置 valaxy-addon-waline 配置项
    addons: [
        addonWaline({
            serverURL: 'https://walineapi.neila.ga',
        }),
    ],
    lang: 'zh-CN',
    title: 'Neila',
    subtitle: "Neila的小破站",
    author: {
        name: 'Neila',
        email: "neila@neila.ga",
        link: "https://neila.ga/",
        avatar: "https://avatars.githubusercontent.com/u/78797625?v=4"
    },
    description: '由于年久失修，现在已经被鉴定为3级危站。',
    social: [
        {
            name: 'RSS',
            link: '/atom.xml',
            icon: 'i-ri-rss-line',
            color: 'orange',
        },/*
    {
      name: 'QQ 群 1050458482',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },*/
        {
            name: 'GitHub',
            link: 'https://github.com/neila-a',
            icon: 'i-ri-github-line',
            color: '#6e5494',
        },
        {
            name: '微博',
            link: 'https://weibo.com/neilaaaa',
            icon: 'i-ri-weibo-line',
            color: '#E6162D',
        },/*
    {
      name: '豆瓣',
      link: 'https://www.douban.com/people/yunyoujun/',
      icon: 'i-ri-douban-line',
      color: '#007722',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=247102977',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },*/
        {
            name: '知乎',
            link: 'https://www.zhihu.com/people/neila-76/',
            icon: 'i-ri-zhihu-line',
            color: '#0084FF',
        },
        {
            name: '哔哩哔哩',
            link: 'https://space.bilibili.com/1479626105',
            icon: 'i-ri-bilibili-line',
            color: '#FF8EB3',
        },/*
    {
      name: '微信公众号',
      link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/YunYouJun',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },*/
        {
            name: 'Telegram',
            link: 'https://t.me/neila',
            icon: 'i-ri-telegram-line',
            color: '#0088CC',
        },
        {
            name: 'E-Mail',
            link: 'mailto:neila@neila.ga',
            icon: 'i-ri-mail-line',
            color: '#8E71C1',
        },
        {
            name: 'Travelling',
            link: 'https://travellings.link',
            icon: 'i-ri-train-line',
            color: 'var(--va-c-text)',
        },
    ],

    search: {
        enable: true,
    },

    url: "https://neila.ga/",

    sponsor: {
        enable: true,
        title: "就你小子不给我钱是吧！",
        methods: [/*
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },*/
        ],
    },

    theme: 'yun',

    themeConfig: {
        outlineTitle: "",
        banner: {
            enable: true,
            title: 'Neila',
        },

        pages: [
            {
                name: '项目',
                url: '/projects/',
                icon: 'i-ri-todo-line',
                color: 'black',
            }
            /*,
            {
              name: '喜欢的女孩子',
              url: '/girls/',
              icon: 'i-ri-women-line',
              color: 'hotpink',
            },*/
        ],

        footer: {
            since: 2022,
            beian: {
                enable: false,
                icp: '萌ICP备20222036号',
            },
        },
    },

    unocss: {
        safelist
    },
})

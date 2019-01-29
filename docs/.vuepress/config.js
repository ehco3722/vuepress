// const path = require('path')

module.exports = {
  title: '2019-01-25',  // 设置网站标题
  // dest: './dist',    // 设置输出目录
  base: '/vuepress/', // 设置站点根路径
  // repo: 'https://ehco3722.github.io/vuepress', // 添加 github 链接
  configureWebpack: {
    resolve: {
      alias: {
        'alia': '../.vuepress/public' // path.resolve(__dirname, './public')   // 'public'
      }
    }
  },
  themeConfig: {
    sidebarDepth: 3,
    // 添加导航栏
    nav: [
      { text: 'vue', link: '/vue/one' },
      { text: 'js', link: '/javascript/three' },
      { text: 'happy', link: '/happy/0126' },
      { text: 'os', link: '/os/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/txs1992/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/txs1992/stylus-converter' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/vue/': [
        {
          title: 'Vue',
          collapsable: false,
          children: [
            'one',
            'two'
          ]
        }
      ],
      '/javascript/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            'three',
            'four'
          ]
        }
      ],
      '/os/': [
        {
          title: 'os',
          collapsable: false,
          children: [
            '中断',
            // ''
          ]
        }
      ],
      '/happy/': [
        {
          title: 'happy',
          collapsable: false,
          children: [
            '0126',
            '0127'
          ]
        }
      ],
    }
  }
}
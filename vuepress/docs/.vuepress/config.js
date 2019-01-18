module.exports = {
    title: 'cheathide',
    dest: '.vuepress/../../dist',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'about', link: '/about/' }
      ],
      sidebar: {
        '/about/': [
            '',
            'first',
            'second'
        ]
      }
    }
  }
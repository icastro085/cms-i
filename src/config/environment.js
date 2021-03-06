const config = {
  sideBar: {
    items: [
      { icon: 'home', link: '/', label: 'content.home' },
      { icon: 'file', link: '/page', label: 'content.page' },
      { icon: 'newspaper-o', link: '/news', label: 'content.news' },
      'line',
      { icon: 'cog', link: '/setting', label: 'content.setting' },
      { icon: 'sign-out', link: '/sign-out', label: 'content.sign-out' },
    ],
  },
  contents: [
    {
      type: 'page',
      fields: ['title', 'text'],
    }, {
      type: 'news',
      fields: ['title', 'text'],
    },
  ],
};

export default Object.assign({ }, config, __APP_CONFIG__);

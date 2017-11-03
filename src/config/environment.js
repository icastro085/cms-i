const config =  {
  sideBar: {
    items: [
      { icon: 'home', link: '/', label: 'content.home' },
      { icon: 'file', link: '/content/page', label: 'content.page' },
      { icon: 'newspaper-o', link: '/content/news', label: 'content.news' },
      'line',
      { icon: 'cog', link: '/setting', label: 'content.setting' },
      { icon: 'sign-out', link: '/sign-out', label: 'content.sign-out' },
    ],
  },
};

export default Object.assign({}, config, __APP_CONFIG__);
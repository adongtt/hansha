interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://adongtt.github.io/hansha/',
  logo: 'https://www.custombaseballgloves.com/static/images/oldwang.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://adongtt.github.io/hansha/',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page/blob/master/README-CN.md',
    },
  ],
};

export default data;

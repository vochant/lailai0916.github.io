export const Friends: Friend[] = [
  {
    title: 'lailai',
    description: 'Blogger',
    website: 'https://www.lailai.one',
    avatar: '/img/avatar/lailai.png',
  },
  {
    title: 'sintle',
    description: '人类最古老而强大的情感是恐惧，而最古老而强烈的恐惧来源于未知。',
    website: 'https://www.luogu.com.cn/user/681591',
    avatar: '/img/avatar/sintle.png',
  },
  {
    title: 'YunLuo',
    description: '这是个人',
    website: 'https://www.luogu.com.cn/user/765961',
    avatar: '/img/avatar/yunluo.png',
  },
  {
    title: 'AKorz',
    description: 'face the sin, save the e.g.o.',
    website: 'https://www.luogu.com.cn/user/716602',
    avatar: '/img/avatar/akorz.png',
  },
  {
    title: 'Mirekintocn',
    description: 'Zako Chuugaku Sannensei OIer & Personal Developer',
    website: 'https://www.luogu.com.cn/user/556000',
    avatar: '/img/avatar/mirekintoc.png',
  },
  {
    title: 'CEFqwq',
    description: '代词使用她',
    website: 'https://www.luogu.com.cn/user/482610',
    avatar: '/img/avatar/cefqwq.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}

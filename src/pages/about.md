---
title: 关于
hide_table_of_contents: true
---

import { Icon } from '@iconify/react'

import social from '@site/data/social'
import GiscusComponent from "@site/src/components/giscus/giscus.tsx";

<div style={{maxWidth: '65ch', margin: "auto"}}>

# 你好，我是 lailai! 👋

## 兴趣爱好

## 我的设备

- <div style="width: 50px; height: 50px; display: inline-block; text-align: center; vertical-align: middle;">
    <img src="/img/icon/iPhone.svg" alt="iPhone" style="max-width: 100%; max-height: 100%;">
  </div> iPhone 13
- <div style="width: 50px; height: 50px; display: inline-block; text-align: center; vertical-align: middle;">
    <img src="/img/icon/iPad.svg" alt="iPad" style="max-width: 100%; max-height: 100%;">
  </div> iPad Pro (M1)
- <div style="width: 50px; height: 50px; display: inline-block; text-align: center; vertical-align: middle;">
    <img src="/img/icon/MacBook.svg" alt="MacBook" style="max-width: 100%; max-height: 100%;">
  </div> MacBook Pro (M3 Max)
- <div style="width: 50px; height: 50px; display: inline-block; text-align: center; vertical-align: middle;">
    <img src="/img/icon/AirPods.svg" alt="AirPods" style="max-width: 100%; max-height: 100%;">
  </div> AirPods Pro 2
- <div style="width: 50px; height: 50px; display: inline-block; text-align: center; vertical-align: middle;">
    <img src="/img/icon/iPod.svg" alt="iPod" style="max-width: 100%; max-height: 100%;">
  </div> iPod shuffle 4
- <div style="width: 50px; height: 50px; display: inline-block; text-align: center; vertical-align: middle;">
    <img src="/img/icon/Mouse.svg" alt="Mouse" style="max-width: 100%; max-height: 100%;">
  </div> Logitech G PRO X SUPERLIGHT 2

## 联系方式

<p style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
  <Icon icon="ri:github-line" width="20" heigth="20" />
  <a href={social.github.href} target="_blank">kuizuo</a>
</p>

<p style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
  <Icon icon="ri:twitter-x-line" width="20" heigth="20" />
  <a href={social.x.href} target="_blank">kuizuo</a>
</p>

<p style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
  <Icon icon="ri:wechat-2-line" width="20" heigth="20" />
  <a href={social.wx.href} target="_blank">kuizuo12</a>
</p>

<p style={{ display: 'flex', 'align-items': 'center', gap: '0.5rem' }}>
  <Icon icon="ri:mail-open-line" width="20" heigth="20" />
  <a href={social.email.href} target="_blank">hi@kuizuo.cn</a>
</p>

## 赞助

:::tip

欢迎支持我的网站，您的赞助将帮助我持续创作更多有价值的内容！

:::

|               支付宝               |              微信支付              |
| :--------------------------------: | :--------------------------------: |
| ![Alipay](/img/QR-code/Alipay.svg) | ![WeChat](/img/QR-code/WeChat.svg) |

## 评论

感谢您的阅读，希望这些分享对您有帮助！

如有疑问，欢迎咨询，我会尽力回复。期待您的评论！

<GiscusComponent />

</div>


# Aegis Of The RenRen

The Millennials was said to own a shield that protected their renren.com accounts from death itself.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# 人人之守护

> 允许用户浏览自己人人网账号已发布的日志内容。朝花夕拾，一如年少摸样。

**APP 地址：https://obwang49.github.io/aegis-of-the-renren**

## 使用指南

* 初次访问需登录人人账号后才可以访问个人数据。
* 授权码会保存在浏览器 cookie 中供下次使用。
* 如果授权码无效或失效将退回到首页以便重新登陆。

## [常见问题](https://obwang49.github.io/aegis-of-the-renren/?path=faq)

#### 问： 为什么会想要做这个 APP?

答： 中学时候在人人上写过一些日志，然而当时并没有存档。前一段突然想要整理一下的时候才恍然发现：由于众所周知的原因，人人的日志功能从 2019 年下半年后就无法继续访问了。几经搜寻后，虽然也找到了两个备份工具，然而日志功能也是挂掉的状态。机缘巧合之下，发现人人网当年发布的 API 居然还能用？日志数据居然也能拿到!!于是才有了现在的这个 APP。

#### 问： 为什么给 APP 起了这么中二的一个名字?

答： 说来好笑，印象里中学那会儿在网上进行的主要活动就是刷人人和打刀塔。。。曾经万分大神，如今归隐云端。。。我只想说一句：恭喜 OG。

#### 问： 用这个 APP 登录人人账号安全吗?

答： 只要使用的是最新的浏览器，在这里登录就是安全的。因为这个 APP 本质上只是一个 Github 提供的静态网页，只有前端代码而无任何后端服务。所以所有信息都是浏览器本地处理的。更何况登陆操作还是跳转到人人官网上完成的，并由人人服务器返回授权码，所以 APP 本身并不会参与中间的关键环节。

#### 问： 为什么只做了日志这个功能?

答： 目前来看其他的功能，包括状态、相册等等，在人人官网上还是可以正常访问的，所以暂时还不需要去担心太多。另外如果需要一键备份的话，可以尝试使用下面列出的两个选项。
* 选项一：[人人一键备份](https://chrome.google.com/webstore/detail/%E4%BA%BA%E4%BA%BA%E4%B8%80%E9%94%AE%E5%A4%87%E4%BB%BD/efddmnffdanhlbgmmblkpfbllampcijp)浏览器插件，亲测 Chrome 可用。
* 选项二：搜索[Github renrenBackup](https://github.com/whusnoopy/renrenBackup)，并按 README 提示使用。
  需要强调的是这两个备份工具的日志功能都挂掉了，这样才更彰显出了本 APP 存在的价值和意义。当然，有需求或者反馈的话欢迎随时邮件联系！

#### 问： 为什么感觉 APP 页面加载的这么慢?

答： 再次强调，这个 APP 本质上是由 Github 提供服务的静态网页。因此加载时间完全取决与 Github 服务器连接到人人服务器需要多久。。。从 APP 的角度并没有太多优化的空间。另外为了规避 CORS 限制，本 APP 还需借道公用 CORS 代理服务器，所以加载时间可能会长达约一分钟。还望您能耐心等待，谢谢！

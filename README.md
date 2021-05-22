# Aegis Of The RenRen

The Millennials was said to own a shield that protected their renren.com accounts from death itself.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


:warning: [05/2021] 人人网近期进行了网站升级改版，“我的应用”页面也处于404状态。本网页基于的应用之前已经提交了审核，然而现在也不知道会怎么样了，所以实际是处于无法使用的状态。只是通过我自己的账号暂时还可以访问日志数据，说明人人API目前还没有变动，等哪天通过了审核再来更新。

# 人人之守护

> 允许用户浏览自己人人网账号已发布的日志内容。朝花夕拾，一如年少摸样。

**APP 地址：https://obwang49.github.io/aegis-of-the-renren**

## 使用指南

* 初次使用需登录人人账号后才可以访问个人数据。
* 授权码会保存在浏览器cookie中供下次使用。
* 如果授权码无效或失效将退回到首页以便重新登陆。

## [常见问题](https://obwang49.github.io/aegis-of-the-renren/?path=faq)

#### 问：为什么会想要做这个APP?

答：中学时候在人人上写过一些日志，然而当时并没有存档。前一段突然想要整理一下的时候才恍然发现：由于众所周知的原因，人人的日志功能从2019年下半年后就无法继续访问了。几经搜寻后，虽然也找到了两个备份工具，然而日志功能也是挂掉的状态。机缘巧合之下，发现人人网当年发布的API居然还能用？日志数据居然也能拿到!!于是才有了现在的这个APP。

#### 问：为什么给APP起了这么中二的一个名字?

答：说来好笑，印象里中学那会儿在网上进行的主要活动就是刷人人和打刀塔。。。曾经万分大神，如今归隐云端。。。我只想说一句：恭喜OG。

#### 问：用这个APP登录人人账号安全吗?

答：只要使用的是最新的浏览器，在这里登录就是安全的。因为这个APP本质上只是一个Github提供的静态网页，只有前端代码而无任何后端服务。所以所有信息都是浏览器本地处理的。更何况登陆操作还是跳转到人人官网上完成的，并由人人服务器返回授权码，所以APP本身并不会参与中间的关键环节。

#### 问：为什么这个APP可以访问日志而备份工具却不行?

答：是因为本APP与备份工具的工作原理有本质上的不同。从源代码和技术文档来看，备份工具应该是采用的网络爬虫的工作机制。所以自从人人网将日志页面404之后，自然就无法再抓取数据了。另外备份工具再登陆的处理上也比较激进，这里不是重点就不再赘述了。相比之下，本APP可以相当正统及规范了。因为APP完全依据人人官方技术文档，使用人人Oauth2.0和人人API2.0来完成相应的登录和数据请求。因此本APP才得以读取出采用爬虫手段无法获得的日志数据。

#### 问：为什么只做了日志这个功能?

答：目前来看其他的功能，包括状态、相册等等，在人人官网上还是可以正常访问的，所以暂时还不需要去担心太多。另外如果需要一键备份的话，可以尝试使用下面列出的两个选项。
* 选项一：[人人一键备份](https://chrome.google.com/webstore/detail/%E4%BA%BA%E4%BA%BA%E4%B8%80%E9%94%AE%E5%A4%87%E4%BB%BD/efddmnffdanhlbgmmblkpfbllampcijp)浏览器插件，亲测Chrome可用。
* 选项二：搜索[Github renrenBackup](https://github.com/whusnoopy/renrenBackup)，并按README提示使用。
  需要强调的是这两个备份工具的日志功能都挂掉了，这样才更彰显出了本APP存在的价值和意义。当然，有需求或者反馈的话欢迎随时邮件联系！

#### 问：为什么感觉APP页面加载的这么慢?

答：再次强调，这个APP本质上是由Github提供服务的静态网页。因此加载时间完全取决与Github服务器连接到人人服务器需要多久。。。APP的角度并没有太多优化的空间。另外为了规避CORS限制，本APP还借道了公用CORS代理服务器，所以加载时间可能会长达约一分钟。还望您能耐心等待，谢谢！

## References
+ RenRen Oauth 2.0
  - @usage: RenRen oauthentication
  - @link: http://open.renren.com/wiki/OAuth2.0
+ RenRen API 2.0
  - @usage: RenRen data fetching 
  - @link: http://open.renren.com/wiki/API2
+ Create React App
  - @usage: App creation & bootstrapping
  - @link: https://create-react-app.dev/
+ Gh Pages
  - @usage: Github page publishing & deployment
  - @link: https://www.npmjs.com/package/gh-pages
+ Material-UI
  - @usage: UI framework & design system
  - @link: https://material-ui.com/
+ React
  - @usage: UI framework & library
  - @link: https://reactjs.org/
+ React Cookie
  - @usage: browser cookie handling & interaction
  - @link: https://www.npmjs.com/package/react-cookie
+ React HTML Parser
  - @usage: html text parsing & rendering
  - @link: https://www.npmjs.com/package/react-html-parser
+ React Router
  - @usage: browser rounting & navigation
  - @link: https://reactrouter.com/
+ Recoil
  - @usage: app state management & control
  - @link: https://recoiljs.org/

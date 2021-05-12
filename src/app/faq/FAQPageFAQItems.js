/**
 * Copyright (c) 2021 - The Millennials
 *
 * Aegis Of The RenRen
 *
 * @author: obwang49 <obwang49@gmail.com>
 */

export type FAQItem = {
  answerText: {
    cn: string,
    eng: string,
  },
  questionText: {
    cn: string,
    eng: string,
  },
};

export const faqItems = Object.freeze({
  1: {
    answerText: {
      cn:
        "中学时候在人人上写过一些日志，然而当时并没有存档。" +
        "前一段突然想要整理一下的时候才恍然发现：由于众所周知的原因，" +
        "人人的日志功能从2019年下半年后就无法继续访问了。" +
        "几经搜寻后，虽然也找到了两个备份工具，然而日志功能也是挂掉的状态。" +
        "机缘巧合之下，发现人人网当年发布的API居然还能用？日志数据居然也能拿到!!" +
        "于是才有了现在的这个APP。",
      eng:
        "Published a few blogs on renren.com back in high school, " +
        "but never saved them locally. " +
        "Suddenly felt the urge to organize them, only to find that: " +
        "due to well-known reasons, " +
        "RenRen.com blogs page has been taken down since H2 2019. " +
        "Found 2 backup tools online after extensive searching, " +
        "however the blog backup feature for them are broken as well. " +
        "Accidentally figured out that, " +
        "the previous RenRen.com API are still working? " +
        "And the blogs data are all there!! " +
        "That is what leads to the APP as of today.",
    },
    questionText: {
      cn: "为什么会想要做这个APP?",
      eng: "What is the motivation behind this APP?",
    },
  },
  2: {
    answerText: {
      cn:
        "说来好笑，印象里中学那会儿在网上进行的主要活动就是刷人人和打刀塔。。。" +
        "曾经万分大神，如今归隐云端。。。我只想说一句：恭喜OG。",
      eng:
        "It is actually funny because, all those enjoyable memories about " +
        "surfing the Internet in those naive days, " +
        "was either on renren.com or playing DOTA... " +
        "Once a 10k player but now so disconnected and barely 0.1k... " +
        "All I want to say is: Congrats OG.",
    },
    questionText: {
      cn: "为什么给APP起了这么中二的一个名字?",
      eng: "Why do you come up with such a lmao name for the APP?",
    },
  },
  3: {
    answerText: {
      cn:
        "只要使用的是最新的浏览器，在这里登录就是安全的。" +
        "因为这个APP本质上只是一个Github提供的静态网页，" +
        "只有前端代码而无任何后端服务。所以所有信息都是浏览器本地处理的。" +
        "更何况登陆操作还是跳转到人人官网上完成的，并由人人服务器返回授权码，" +
        "所以APP本身并不会参与中间的关键环节。",
      eng:
        "It is safe to sign in as long as the browser is up to date. " +
        "That is because that this APP itself is essentially a static page " +
        "served by Github servers. " +
        "The APP only has frontend code but no backend services. " +
        "Therefore all data is processed by the browser locally. " +
        "Moreover, the sign in action is redirected to the official page of " +
        "RenRen.com, and an access token will be returned by the RenRen " +
        "server once successful, so the APP itself is not involved in this " +
        "sign in process by any means.",
    },
    questionText: {
      cn: "用这个APP登录人人账号安全吗?",
      eng: "Is it safe to sign in to my RenRen.com account in this APP?",
    },
  },
  4: {
    answerText: {
      cn:
        "目前来看其他的功能，包括状态、相册等等，在人人官网上还是可以正常访问的，" +
        "所以暂时还不需要去担心太多。" +
        "另外如果需要一键备份的话，可以尝试使用下面列出的两个选项。" +
        "选项一：人人一键备份浏览器插件，亲测Chrome可用。" +
        "选项二：搜索Github renrenBackup，并按README提示使用。" +
        "需要强调的是这两个备份工具的日志功能都挂掉了，" +
        "这样才更彰显出了本APP存在的价值和意义。" +
        "当然，有需求或者反馈的话欢迎随时邮件联系！",
      eng:
        "Currently, all the other features, such as statuses, albumns, etc., " +
        "are still working well on the RenRen.com pages," +
        "so seems too early to start worrying about those." +
        "Additionally, there are 2 options available in case any one needs " +
        "to do a quick and simple backup." +
        "Option 1: Use the Ren Ren Backup browser extension, " +
        "that proves to work well in Chrome. " +
        "Option 2: Search for Github renrenBackup, " +
        "and follow the instructions in README." +
        "It is worth pointing out that the blog backup feature are broken, " +
        "which emphasises on how valuable and meaningful this APP will be." +
        "Of course, feedback and requirements are always welcomed, " +
        "feel free to drop an email at any time!",
    },
    questionText: {
      cn: "为什么只做了日志这个功能?",
      eng: "Why is the APP only for RenRen blogs?",
    },
  },
  5: {
    answerText: {
      cn:
        "再次强调，这个APP本质上是由Github提供服务的静态网页。" +
        "因此加载时间完全取决与Github服务器连接到人人服务器需要多久。。。" +
        "从APP的角度并没有太多优化的空间。" +
        "另外为了规避CORS限制，本APP还需借道公用CORS代理服务器，" +
        "所以加载时间可能会长达约一分钟。还望您能耐心等待，谢谢！",
      eng:
        "Once again, this APP itself is essentially a static page served by " +
        "Github servers. Therefore the loading time depends solely on " +
        "how long it takes for Github servers to talk to RenRen servers... " +
        "There is not much that the APP can do to optimize here." +
        "Also, this APP relies on public CORS proxy servers to bypass CORS " +
        "restrictions, so the loading time can be as long as 1 minute. " +
        "Many thanks in advance for your patience!",
    },
    questionText: {
      cn: "为什么感觉APP页面加载的这么慢?",
      eng: "Why is it taking so long for the APP page to load?",
    },
  },
});

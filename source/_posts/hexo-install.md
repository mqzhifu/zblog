---
title: hexo_install
date: 2022-08-26 09:51:08
tags: ["hexo","blog","博客"]
---
安装与体验
----
前置条件：git node npm

先安装它的工具-指令行
```
npm install -g hexo-cli
```

创建一个文件夹并进入：
```
>mkdir /data/www/golang/myblog
>cd /data/www/golang/myblog
```
安装：
```
>hexo init   #初始化，感觉就是下代码
>npm install #安装，应该安装具体的库 改改配置文件之类的
```
生成静态文件：
>hexo g  

开启守护进程:
>hexo s  # 本地预览博客

打开网页，看看效果:
>http://localhost:4000/

创建一个篇文章：
>hexo n 'my-first-blog'

vim /data/www/golang/myblog/source/_posts/my-first-blog.md

生成静态页面：
hexo g

重新启动：
hexo s


hexo c


简单修改主配置
---
vim _config.yml

```
# Site
title: xiaoz - blog
subtitle: 'life detail'
description: 'Attentively records the good life'
keywords: "technology tech jobs job life worker internet golang php vue js"
author: xiaoz
language: en | zh-Hans
timezone: 'Asia/Shanghai'
```

主题
----
官方主题地址：
>https://hexo.io/themes/

这里选择:next主题，先下载主题
```
cd /data/www/golang/myblog
git clone https://github.com/iissnan/hexo-theme-next themes/next
```

修改主站配置:
vim _config.yml
```
theme: next
```

修改next主题配置：
>vim /data/www/golang/myblog/themes/next/_config.yml

貌似报错，得安装个：
npm i hexo-renderer-swig
 
hexo s --debug


分类与tag
----
创建一个分类:
>hexo new page categories

根据提示符打开文件：
>vim /data/www/golang/myblog/source/categories/index.md
```
type : categories
```

创建一个tags:
>hexo new page tags

根据提示符打开文件：
>vim /data/www/golang/myblog/source/tags/index.md
```
type: "tags"
```
修改配置文件：
>vim _config.yml
```
category_dir: /categories/
tag_dir: /tags/
```
找一个文章修改，试试效果
>vim /data/www/golang/myblog/source/_posts/my-first-blog.md
```
categories : web前端
tags : vue
```



hexo s

添加统计
----
>vim /data/www/golang/myblog/themes/next/_config.yml
```
busuanzi_count:
  enable: true
```

vim /data/www/golang/myblog/themes/next/layout/_third-party/analytics/busuanzi-counter.swig
```
<script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
```

添加搜索
---
```
cd /data/www/golang/myblog/
npm install hexo-generator-searchdb --save
```
vim themes/next/_config.yml
```
local_search:
    enable: true
```

错误
----
转到next主题后，发现左侧菜单所有的链接多了一个：%20
vim themes/next/_config.yml
搜索menu
把每个连接的空格删除了


隐藏网页底部无用信息
----
vim themes/next/layout/_partials/footer.swig
```
footer:
    powered: false
  theme:
    enable: false
    version: false
```

安装分享功能
---
npm install theme-next/hexo-next-share
npm install -g grunt



hexo d  # 上传网页文件到github




快速重启
----
hexo clean && hexo g && hexo s



git上创建一个项目,clone 一下代码：
>cd /data/www/golang
>git clone git@github.com:mqzhifu/zblog.git

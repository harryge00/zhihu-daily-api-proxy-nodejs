# 知乎日报 API 代理网站 - Nodejs 版

部署网站：[https://zhihu-daily-api-proxy-nodejs.herokuapp.com](https://zhihu-daily-api-proxy-nodejs.herokuapp.com)

Python Flask 版本：[https://zhihu-daily-api-proxy-python.herokuapp.com](https://zhihu-daily-api-proxy-python.herokuapp.com)

> 最近在学习 Vue.js，照着示例实现了一个知乎日报 Web 版，但是想要部署在网上的话有个问题，就是 API 跨域访问，直接使用 Ajax 获取知乎日报的 API 会报错，常用的方法就是使用代理，本版本是用 Nodejs 实现的。并部署在了 Heroku。

### 请求 API

#### 获取所有主题

**`/themes`**

```shell
curl https://zhihu-daily-api-proxy-python.herokuapp.com/themes

{
    limit: 1000,
    subscribed: [ ],
    others: [
    {
    color: 15007,
    thumbnail: "http://pic3.zhimg.com/0e71e90fd6be47630399d63c58beebfc.jpg",
    description: "了解自己和别人，了解彼此的欲望和局限。",
    id: 13,
    name: "日常心理学"
    },
    {
    color: 8307764,
    thumbnail: "http://pic4.zhimg.com/2c38a96e84b5cc8331a901920a87ea71.jpg",
    description: "内容由知乎用户推荐，海纳主题百万，趣味上天入地",
    id: 12,
    name: "用户推荐日报"
    },
    {
    color: 14483535,
    thumbnail: "http://pic3.zhimg.com/00eba01080138a5ac861d581a64ff9bd.jpg",
    description: "除了经典和新片，我们还关注技术和产业",
    id: 3,
    name: "电影日报"
    },
    {
    color: 8307764,
    thumbnail: "http://pic4.zhimg.com/4aa8400ba46d3d46e34a9836744ea232.jpg",
    description: "为你发现最有趣的新鲜事，建议在 WiFi 下查看",
    id: 11,
    name: "不许无聊"
    },
......
```

#### 获取某一主题

**`/theme/<id>`**

```shell
curl https://zhihu-daily-api-proxy-python.herokuapp.com/theme/2

{
    stories: [
    {
    images: [
    "http://pic2.zhimg.com/878b8960b617bfb4721a103e24a0509d.jpg"
    ],
    type: 0,
    id: 7785695,
    title: "Necromanov：分裂红海：辐射4的喧嚣和争议"
    },
    {
    images: [
    "http://pic1.zhimg.com/9e9a4e7c539784f5488093cb6b0eeb50_t.jpg"
    ],
    type: 0,
    id: 7225331,
    title: "MGS V幻痛：沙盘化的心血和代价"
    },
    {
    images: [
    "http://pic2.zhimg.com/761acb25a50564c8bafce6d1d4ec5b05_t.jpg"
    ],
    type: 0,
    id: 7173926,
    title: "幸存者偏差——死在中国游戏圈的一百万种方式"
    },
    {
    images: [
    "http://pic3.zhimg.com/956663ab7cf64103a5a08d567db3f1c6_t.jpg"
    ],
    type: 0,
    id: 7121745,
    title: "前《永恒之塔》技术总监谈如何使用Unity实现次世代效果"
    },
......
```

#### 获取具体日报

**`/news/<id>`**

```shell
curl https://zhihu-daily-api-proxy-python.herokuapp.com/news/9674509

{
    body: "<div class="main-wrap content-wrap"> <div class="headline"> <div class="img-place-holder"></div> </div> <div class="content-inner"> <div class="question"> <h2 class="question-title">【行业设定】太空时代会有哪些新兴职业？</h2> <div class="answer"> <div class="meta"> <img class="avatar" src="http://pic4.zhimg.com/v2-ccf403cbb9c55c3c7bb8f53dd4228847_is.jpg"> <span class="author">ProtossProbe，</span><span class="bio">Pluto is a Planet</span> </div> <div class="content"> <p>上一篇：</p> <p><a class="internal" href="https://zhuanlan.zhihu.com/p/34474815">ProtossProbe：【历史设定】太阳系外围开发</a></p> <p>在火星移民兴起的背景下，许多新的行业应运而生。</p> <p><strong><strong>太空工程师</strong></strong></p> <p><strong>飞船驾驶员</strong></p> <p>按照《太阳系和平开发与利用公法》（简称系法）中关于飞船驾驶的有关规定，货运飞船可在无人驾驶的情况下按照预定航线进行自主飞行，并由引航员进行远程跟踪与遥控。而对于载人飞船，为了保障乘客的安全，至少需要配备一名合格的飞船驾驶员。</p> <p>随着地火航线及其他周边航线的开通，对于载人飞船的需求量逐年上升。此外，购买私人飞船也在富人圈子中也流行起来。不过，由于飞船的驾驶需要特定的训练和认证，很多人都不想花费太多的精力来取得飞船驾驶执照，而是
......
```

#### 获取某一天日报

**`/news/before/<date>`**

```shell
curl https://zhihu-daily-api-proxy-python.herokuapp.com/news/before/20180322

{
    date: "20180321",
    stories: [
    {
    images: [
    "https://pic2.zhimg.com/v2-3e2f72aaa905b4e1d2246ea954d34c01.jpg"
    ],
    type: 0,
    id: 9675270,
    ga_prefix: "032122",
    title: "小事 · 我再努力还有什么意义？"
    },
    {
    images: [
    "https://pic3.zhimg.com/v2-a8e0314086ee96e273a4e4c1af0a81ae.jpg"
    ],
    type: 0,
    id: 9675278,
    ga_prefix: "032121",
    title: "土地就是羊，土地下的石油就是羔羊的血"
    },
    {
    images: [
    "https://pic3.zhimg.com/v2-65f23598c612726386e5bef64d51766a.jpg"
    ],
    type: 0,
    id: 9674956,
    ga_prefix: "032119",
    title: "今天是世界睡眠日，谈谈经常熬夜的危害"
    },
    {
    images: [
    "https://pic2.zhimg.com/v2-42d51f480661d2fc439852bee19a1701.jpg"
    ],
    type: 0,
    id: 9675081,
    ga_prefix: "032117",
    title: "「干我们这行，长得好看的男公关才是第一生产力」"
    },
......
```

#### 获取图片

**`/img/<url>`**

```shell
https://zhihu-daily-api-proxy-nodejs.herokuapp.com/img/https://pic3.zhimg.com/v2-96a4f06040cd013877f57edb08e0d35e.jpg
```
![](https://user-images.githubusercontent.com/19553554/37832100-8d85dcec-2ee2-11e8-9d10-b736c5af5aa4.jpg) 

### LICENSE

MIT [@chenjiandongx](https://github.com/chenjiandongx)

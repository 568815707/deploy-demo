# deploy-demo  about interview system back-end。

### 一、项目架构

```
|-- config // 就是一些配置，目前只有部署在正式环境的配置
|-- libs // 数据库使用的封装+工具集，没有啥逻辑
|-- pm2 // 运行配置
|-- server // 要写的服务
    |-- xxx.js 路由文件

```

### 二、开发流程

哎呀，目前的开发流程比较粗暴，简单。

1、在 server 下创建一个 js 文件（脚本里面写的都是 router）。
2、在 index.js 文件中引用你刚刚创建的 js 文件， 然后 use 一下就行了。

### 三、注意

node 版本需要是 7+ 的

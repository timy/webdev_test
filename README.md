# 测试 "MEAN" 实现网络应用

## 计划

* 后台框架 Express 4
* 数据库 MongoHQ (MongoDB, Mongoose)
* 前台框架 AngularJS
* 部署在 Heroku 上

## 数据库测试
在 Heroku 上建立 MongoDB 数据库的入门介绍：[Object Modeling in Node.js with Mongoose](https://devcenter.heroku.com/articles/nodejs-mongoose), [GitHub上的示例代码](https://github.com/mongolab/hello-mongoose/blob/master/app.js).

[Heroku上应用MongoHQ的一些官方说明](https://devcenter.heroku.com/articles/mongohq#additional-documentation).

[Express API 文档](http://expressjs.com/api).

This application support the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## 本地运行

确定已安装 [Node.js](http://nodejs.org/) 与 [Heroku Toolbelt](https://toolbelt.heroku.com/)。

```sh
$ git clone git@github.com:timy/webdev_test.git
$ cd webdev_test
$ npm install
$ npm start
```

端口可在 `app.js` 中更改。默认本地运行地址 [localhost:5000](http://localhost:5000/)。

## Heroku上的部署

```
$ heroku create
$ git push heroku master
$ heroku open
```

## 文档

### Express 与各种中间件


#### Express.Router()
[官方关于 Express 4 的路由](http://expressjs.com/migrating-4.html#routing)
[Express 4 路由的 Blog](http://scotch.io/tutorials/javascript/learn-to-use-the-new-router-in-expressjs-4)

#### body-parser
[Express 4 下的 body-parser](https://github.com/expressjs/body-parser?_ga=1.160154749.1165600469.1410616874)
[Do Not Use bodyParser with Express.js](http://andrewkelley.me/post/do-not-use-bodyparser-with-express-js.html)


### MongoDB
[Mongoose + RESTful 狗熊教程](http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4)


### Heroku部署
关于 Heroku 上使用 Node.js 的更多信息，参见 Dev Center 的文章：

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

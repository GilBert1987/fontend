# fontend

 这是一个前端学习的Demo，主要的知识点总结如下
 
 FIS3+AMD+RequireJS+Backbone+Underscore+JQuery结合的例子
 
 项目运行需要的资源
 安装Node NPM 和 FIS  注意有版本的要求
 http://fis.baidu.com/fis3/docs/beginning/install.html

安装FIS3 依赖的插件，本项目中主要用到
. fis3-hook-amd 本地解析替换路径，为合并做准备
. fis3-postpackager-loader 解析 fis3 的 RESOURCE_MAP 来生成 require.paths 列表，以实现对资源加 md5 或者 cdn 的需求
后续随着学习的深入会陆续增加

项目运行：
fis3 release
常用的其他的命令
fis3 server open 查看输出到的服务器的目录
fis3 release -d ./out/  将FIS的"编译" 结果生成到out 目录，方便进行检查。

学习文档&参考资料
JS 基础知识
https://www.cnblogs.com/wilber2013/p/4924309.html

HTML+CSS+LESS
https://developer.mozilla.org/zh-CN/docs/Web
https://c.runoob.com/

RequireJS+CommonJS+AMD
https://requirejs.org/
Module Export的定义
https://nodejs.org/api/modules.html#modules_modules
AMD 规范 https://zhaoda.net/webpack-handbook/amd.html

Backbone+underscore+Template
underscore学习
under score API https://www.css88.com/doc/underscore/
under score 源码分析 https://github.com/hanzichi/underscore-analysis
JQUERY学习
https://api.jquery.com/
JQUERY  AJAX 参数
http://api.jquery.com/jQuery.ajax/#jqXHR

http://backbonejs.org/#
https://blog.csdn.net/cdnight/article/details/40350611
https://github.com/the5fire/backbonejs-learning-note/blob/master/chapters/07-backbonejs-todos-2.rst

FIS的学习资料
https://github.com/fex-team/fis3-demo
http://fis.baidu.com/

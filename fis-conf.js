// 开启 amd 插件
fis.hook('amd');
//fis.log.level = fis.log.L_DEBUG & fis.log.L_WARNI;

fis.match('/static/lib/backbone/backbone.js', {
  isMod: true
});

fis.match('/static/lib/jquery/jquery.js', {
  isMod: true
});

fis.match('/static/lib/underscore/underscore.js', {
  isMod: true
});

fis.match('/static/lib/utils/utils.js', {
  isMod: true
});


// 需要排除的文件
fis.match('/static/lib/require/require.js', {
    isMod: false
});

fis.match('/static/*.js', {
  isMod: true
});

fis.match('/app.js', {
  isMod: true
});

fis.match('/router.js', {
  isMod: true
});


fis.hook('amd', {
  packages: [
    {
      name: 'jquery',
      location: '/static/lib/jquery',
      main: 'jquery.js'
    },
    {
      name: 'backbone',
      location: '/static/lib/backbone',
      main: 'backbone.js'
    },
    {
      name: 'underscore',
      location: '/static/lib/underscore',
      main: 'underscore.js'
    },
    {
      name: 'utils',
      location: '/static/lib/utils',
      main: 'utils.js'
    },
    {
      name: 'router',
      location: './',
      main: 'router.js'
    },
    {
      name: 'app',
      location: './',
      main: 'app.js'
    },
    {
      name: 'view',
      location: '/static',
      main: 'view.js'
    },
    {
      name: 'model',
      location: '/static',
      main: 'model.js'
    }
  ]
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        useInlineMap: true // 资源映射表内嵌
    })
})

fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  rExt: '.css'
})


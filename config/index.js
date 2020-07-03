const path = require('path');

const config = {
  projectName: 'myApp',
  date: '2020-6-26',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      [
        'env',
        {
          modules: false
        }
      ]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      [
        'transform-runtime',
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime'
        }
      ]
    ]
  },
  plugins: ['@tarojs/plugin-less', '@tarojs/plugin-sass', '@tarojs/plugin-terser'],
  defineConstants: {},
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  alias: {
    '@/assets': path.resolve(__dirname, '..', 'src/assets'),
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/config': path.resolve(__dirname, '..', 'src/config'),
    '@/context': path.resolve(__dirname, '..', 'src/context'),
    '@/models': path.resolve(__dirname, '..', 'src/models'),
    '@/pages': path.resolve(__dirname, '..', 'src/pages'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    react: 'nervjs',
    'react-dom': 'nervjs'
  },
  // 解决无法打包微信小程序 sitemap.json
  copy: {
    patterns: [{ from: 'sitemap.json', to: 'dist/sitemap.json' }]
  }
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};

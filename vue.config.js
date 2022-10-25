const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  baseUrl: '/',

  lintOnSave: true,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'));
  },

  // 解决：This relative module was not found: ./cptable in ./node_modules/xlsx-style@0.8.13@xlsx-style/dist/cpexcel.js
  configureWebpack: config => {
    config.externals = {
      './cptable': 'var cptable'
    };
  },

  // 打包时不生成.map文件
  productionSourceMap: false
};

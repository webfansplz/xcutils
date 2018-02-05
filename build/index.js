const webpack = require('webpack');

//path 路径模块
const path = require('path');

//fs模块的扩展
const fs = require('fs-extra');

//node loading
const ora = require('ora');

//rm -rf for node.
const rm = require('rimraf');

//node console style
const chalk = require('chalk');

const config = require('./webpack.conf');
const pkg = require('../package.json');
const rootPath = path.resolve(__dirname, '../');

new Promise((resolve, reject) => {
  const building = ora('building...');
  building.start();
  rm(path.join(rootPath, 'public', `${pkg.name}.min.js`), err => {
    if (err) throw err;
    webpack(config, (err, stats) => {
      building.stop();
      if (err) throw err;
      process.stdout.write(
        stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        }) + '\n\n'
      );
      console.log(chalk.cyan('  Build complete.\n'));
    });
  });
});

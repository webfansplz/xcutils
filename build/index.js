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

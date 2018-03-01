const formatResTime = require('./Time/formatResTime');
const formatDate = require('./Time/formatDate');
const debounce = require('./Optimize/debounce');
const throttle = require('./Optimize/throttle');
const spliceReqParams = require('./Url/spliceReqParams');
module.exports = {
  formatResTime,
  formatDate,
  debounce,
  throttle,
  spliceReqParams
};

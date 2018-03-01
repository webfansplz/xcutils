/**
 * 函数节流 限制函数调用频率
 *
 *  最快每200毫秒执行一次!
 *
 *
 *
 * @param {any} action 函数名! (执行函数需要传参的话,在函数名后面按顺序传入即可)
 * @returns
 */
const throttle = function(action) {
  let last = 0;
  let args = Array.from(arguments);
  args.shift();
  return function() {
    let cur = +new Date();
    if (cur - last > 200) {
      action.apply(this, args);
      last = cur;
    }
  };
};
module.exports = throttle;

/**
 * 函数防抖 限制函数调用频率
 *
 *  200毫秒后执行!
 *
 *
 *
 * @param {any} action 函数名! (执行函数需要传参的话,在函数名后面按顺序传入即可)
 * @returns
 */
const debounce = function(action) {
  let args = Array.from(arguments);
  args.shift();
  return function() {
    clearTimeout(action.tId);
    action.tId = setTimeout(() => {
      action.apply(this, args);
    }, 200);
  };
};
module.exports = debounce;

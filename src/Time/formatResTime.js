/**
 * 格式化剩余时间(created-by webfansplz created-at 2018-02-24)
 *
 * @param {any} num 毫秒数 例:6666000
 * @param {string} [format='hh:mm:ss'] 格式 默认为hh:mm:ss 例:hh时mm分ss秒
 * @returns 格式化后时间 例:01时51分06秒
 */
const formatResTime = (num, format = 'hh:mm:ss') => {
  if (!num) return;
  num /= 1000;
  let h = parseInt(num / 3600),
    m = parseInt(num / 60),
    s = parseInt(num % 60);
  const v_list = {
    //时
    hh: (h > 60 ? (h -= 60) : h) < 10 ? '0' + h : h,
    //分
    mm: (m > 60 ? (m -= 60) : m) < 10 ? '0' + m : m,
    //秒
    ss: (s > 60 ? (s -= 60) : s) < 10 ? '0' + s : s
  };
  return [
    {
      id: format.indexOf('hh'),
      v: v_list.hh + format.charAt(format.indexOf('hh') + 2)
    },
    {
      id: format.indexOf('mm'),
      v: v_list.mm + format.charAt(format.indexOf('mm') + 2)
    },
    {
      id: format.indexOf('ss'),
      v: v_list.ss + format.charAt(format.indexOf('ss') + 2)
    }
  ]
    .filter(v => v.id > -1)
    .reduce((a, b) => a + b.v, '');
};
module.exports = formatResTime;

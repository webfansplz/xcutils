/**
 * 格式化剩余时间
 *
 * @param {any} num 毫秒数 例:6666000
 * @param {string} [format='hh:mm:ss'] 格式 默认为hh:mm:ss 例:hh时mm分ss秒
 * @returns 格式化后时间 例:01时51分06秒
 */
const formatResTime = (num, format = 'hh:mm:ss') => {
  if (!num) return;
  //ms->s
  num /= 1000;
  const reg_d = /dd(\S*)hh/,
    reg_h = /hh(\S*)mm/,
    reg_m = /mm(\S*)ss/,
    reg_s = /ss(\S*)/;
  const timerList = {};
  //天数
  if (format.match(reg_d)) {
    let d = parseInt(num / 86400),
      f = format.match(reg_d)[1];
    timerList.day = d < 10 ? '0' + d + f : d + f;
  }
  //小时
  if (format.match(reg_h)) {
    let h = parseInt(num / 3600),
      f = format.match(reg_h)[1];
    timerList.hour = (h > 60 ? (h = h - 60) : h) < 10 ? '0' + h + f : h + f;
  }
  //分钟
  if (format.match(reg_m)) {
    let m = parseInt(num / 60),
      f = format.match(reg_m)[1];
    timerList.min = (m > 60 ? (m = m - 60) : m) < 10 ? '0' + m + f : m + f;
  }
  //秒
  if (format.match(reg_s)) {
    let s = parseInt(num % 60),
      f = format.match(reg_s)[1];
    timerList.sec = (s > 60 ? (m = s - 60) : s) < 10 ? '0' + s + f : s + f;
  }
  return Object.values(timerList).reduce((a, b) => a + b, '');
};
module.exports = formatResTime;

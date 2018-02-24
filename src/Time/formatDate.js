/**
 * 格式化日期(created-by webfansplz created-at 2018-02-24)
 *
 * @param {any} time 日期 默认为new Date() 例:new Date()
 * @param {string} [format='YY-MM-DD hh:mm:ss'] 格式 默认为YY-MM-DD hh:mm:ss 例:YY-MM-DD hh:mm:ss
 * @returns 格式化后日期 例:2018-02-24 18:18:18
 */
const formatDate = (time = new Date(), format = 'YY-MM-DD hh:mm:ss') => {
  const reg_y = /YY(\S|\s)*MM/,
    reg_mo = /MM(\S|\s)*DD/,
    reg_d = /DD(\S|\s)*hh/,
    reg_h = /hh(\S|\s)*mm/,
    reg_m = /mm(\S|\s)*ss/,
    reg_s = /ss(\S|\s)*/;
  const dateList = {};
  //年
  if (format.match(reg_y)) {
    let y = time.getFullYear(),
      f = format.match(reg_y)[1] || '';
    dateList.year = y + f;
  }
  //月
  if (format.match(reg_mo)) {
    let m = time.getMonth(),
      f = format.match(reg_mo)[1] || '';
    dateList.month = m + 1 < 10 ? '0' + (m + 1) + f : m + 1 + f;
  }
  //日
  if (format.match(reg_d)) {
    let d = time.getDate(),
      f = format.match(reg_d)[1] || '';
    dateList.day = d < 10 ? '0' + d + f : d + f;
  }
  //时
  if (format.match(reg_h)) {
    let h = time.getHours(),
      f = format.match(reg_h)[1] || '';
    dateList.hour = h < 10 ? '0' + h + f : h + f;
  }
  //分
  if (format.match(reg_m)) {
    let m = time.getMinutes(),
      f = format.match(reg_m)[1] || '';
    dateList.min = m < 10 ? '0' + m + f : m + f;
  }
  //秒
  if (format.match(reg_s)) {
    let s = time.getSeconds(),
      f = format.match(reg_s)[1] || '';
    dateList.sec = s < 10 ? '0' + s + f : s + f;
  }
  return Object.values(dateList).reduce((a, b) => a + b, '');
};
module.exports = formatDate;

/**
   * 拼接请求参数
   * 
   * @param {any} v 参数对象
   * {
    user_name: 'webfansplz',
    age: 28,
    id: ''
    }
   * @returns ?user_name=webfansplz&age=28
   */
const spliceReqParams = v => {
  const obj = JSON.parse(JSON.stringify(v));
  //过滤空数据
  for (let k in obj) {
    !obj[k] ? delete obj[k] : true;
  }
  const r = Object.values(obj).reduce(
    (a, b, i) => `${a}${Object.keys(obj)[i]}=${b}&`,
    '?'
  );
  return r.substring(0, r.length - 1);
};
module.exports = spliceReqParams;

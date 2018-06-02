/**
   * 对象序列化
   * 
   * @param {any} v 参数对象
   * {
    user_name: 'webfansplz',
    age: 28,
    id: ''
    }
   * @returns user_name=webfansplz&age=28
   */
const queryStringify = v => {
  const obj = JSON.parse(JSON.stringify(v));
  //过滤空数据
  for (let k in obj) {
    !obj[k] ? delete obj[k] : true;
  }
  const r = Object.values(obj).reduce(
    (a, b, i) => `${a}${Object.keys(obj)[i]}=${b}&`,
    ''
  );
  return r.substring(0, r.length - 1);
};
module.exports = queryStringify;

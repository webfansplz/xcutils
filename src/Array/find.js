/**
 *根据条件从数组中提取数据
 *
 * @param {*} collection 数组 [Array]
 * [{
 *     name:'webfansplz',
 *     age:18
 *   },
 *  {
 *    name:'xiaoming',
 *    age:16
 *  },
 *  {
 *    name:'xiaoxuan',
 *    age:17
 *  }
 * ]
 * @param {*} criteria  条件 [Object]
 * {
 *    age:16
 * }
 * @returns {age:16,name:'xiaoming'}
 */
function xcEval(fn) {
  let Fn = Function;
  return new Fn('v', `return ${fn}`);
}
const find = (collection, criteria) => {
  let r = Object.values(criteria).reduce((a, b, i) => `${a}${Object.keys(criteria)[i]}=='${b}'&&v.`, 'v.');
  r = r.substring(0, r.length - 4);
  return collection.filter(v => xcEval(r)(v));
};
module.exports = find;

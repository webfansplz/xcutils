describe('Url API:', function() {
  describe('#spliceReqParams()', function() {
    it(`xcutils.spliceReqParams should be return right result`, function() {
      const spliceReqParams = xcutils.spliceReqParams;
      const obj = {
        user_name: 'webfansplz',
        age: 28,
        id: ''
      };
      const res = spliceReqParams(obj);
      assert.equal(res, '?user_name=webfansplz&age=28');
    });
  });
});

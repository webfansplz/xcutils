describe('Time API:', function() {
  describe('#formatDate()', function() {
    it(`xcutils.formatDate 'YY' be return right formatter`, function() {
      const formatDate = xcutils.formatDate;
      const res = formatDate(new Date(1526100299896), 'YY');
      assert.equal(res, '2018');
    });
    it(`xcutils.formatDate 'YY-MM-DD' be return right formatter`, function() {
      const formatDate = xcutils.formatDate;
      const res = formatDate(new Date(1526100299896), 'YY-MM-DD');
      assert.equal(res, '2018-05-12');
    });
    it(`xcutils.formatDate 'YY-MM-DD hh:mm:ss' be return right formatter`, function() {
      const formatDate = xcutils.formatDate;
      const res = formatDate(new Date(1526000006666));
      assert.equal(res, '2018-05-11 08:53:26');
    });
  });
  describe('#formatResTime()', function() {
    it(`xcutils.formatResTime should be return right formatter`, function() {
      const formatResTime = xcutils.formatResTime;
      const res = formatResTime(6666000);
      assert.equal(res, '01:51:06');
    });
    it(`xcutils.formatResTime should be return right formatter`, function() {
      const formatResTime = xcutils.formatResTime;
      const res = formatResTime(4396000, 'hh时mm分ss秒');
      assert.equal(res, '01时13分16秒');
    });
  });
});

describe('[formatResTime API]', function() {
  it(`xcutils.formatResTime test 1`, function() {
    const formatResTime = xcutils.formatResTime;
    const res = formatResTime(6666000);
    assert.equal(res, '01:51:06');
  });
  it(`xcutils.formatResTime test 2`, function() {
    const formatResTime = xcutils.formatResTime;
    const res = formatResTime(4396000, 'hh时mm分ss秒');
    assert.equal(res, '01时13分16秒');
  });
});

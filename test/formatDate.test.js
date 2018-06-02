describe('[formatDate API]', function() {
  it(`xcutils.formatDate 'YY' test`, function() {
    const formatDate = xcutils.formatDate;
    const res = formatDate(new Date(1526100299896), 'YY');
    assert.equal(res, '2018');
  });
  it(`xcutils.formatDate 'YY-MM-DD' test`, function() {
    const formatDate = xcutils.formatDate;
    const res = formatDate(new Date(1526100299896), 'YY-MM-DD');
    assert.equal(res, '2018-05-12');
  });
  it(`xcutils.formatDate 'YY-MM-DD hh:mm:ss' test`, function() {
    const formatDate = xcutils.formatDate;
    const res = formatDate(new Date(1526000006666));
    assert.equal(res, '2018-05-11 08:53:26');
  });
});

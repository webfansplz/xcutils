describe('[queryStringify API]', function() {
  it(`xcutils.queryStringify test`, function() {
    const queryStringify = xcutils.queryStringify;
    const obj = {
      user_name: 'webfansplz',
      age: 28,
      id: ''
    };
    const res = queryStringify(obj);
    assert.equal(res, 'user_name=webfansplz&age=28');
  });
});

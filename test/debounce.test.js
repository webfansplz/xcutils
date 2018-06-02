describe('[debounce API]', function() {
  it(`xcutils.debounce test`, function(done) {
    let num = 0,
      debounce = xcutils.debounce;
    let debounced = debounce(function() {
      num++;
    });
    let interval = setInterval(debounced, 10);
    setTimeout(function() {
      clearInterval(interval);
    }, 200);
    setTimeout(function() {
      assert.equal(num, 1);
      done();
    }, 500);
  });
});

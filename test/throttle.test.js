describe('[throttle API]', function() {
  it(`xcutils.throttle test`, function(done) {
    let num = 0,
      throttle = xcutils.throttle;
    let throttled = throttle(function() {
      num++;
    });
    let interval = setInterval(throttled, 10);
    setTimeout(function() {
      clearInterval(interval);
      assert.equal(num, 3);
      done();
    }, 600);
  });
});

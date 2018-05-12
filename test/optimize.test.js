describe('Optimize API:', function() {
  describe('#debounce()', function() {
    it(`xcutils.debounce show be called a time`, function(done) {
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
  describe('#throttle()', function() {
    it(`xcutils.throttle show be called 200ms at a time`, function(done) {
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
});

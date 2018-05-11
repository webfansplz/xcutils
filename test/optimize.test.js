describe('Optimize API', function() {
  describe('#debounce()', function() {
    it(`xcutils.debounce show be called 200ms at a time`, function() {
      let num = 0;
      let testFn = xcutils.debounce(function() {
        num++;
        expect(num).to.equal(1);
      });
      let interval = setInterval(testFn, 20);
      setTimeout(function() {
        clearInterval(interval);
      }, 200);
    });
  });
});

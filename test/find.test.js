describe('[find API]', function() {
  it(`xcutils.find with one result`, function() {
    const find = xcutils.find;
    const box = [
      {
        id: 1,
        age: 16,
        name: 'xiaoming1'
      },
      {
        id: 2,
        age: 17,
        name: 'xiaoming2'
      },
      {
        id: 3,
        age: 18,
        name: 'xiaoming3'
      }
    ];
    const res = find(box, { age: 18 });
    assert.deepEqual(res, [
      {
        id: 3,
        age: 18,
        name: 'xiaoming3'
      }
    ]);
  });
  it(`xcutils.find with more results`, function() {
    const find = xcutils.find;
    const box = [
      {
        id: 1,
        age: 16,
        name: 'xiaoming1'
      },
      {
        id: 2,
        age: 18,
        name: 'xiaoming2'
      },
      {
        id: 3,
        age: 18,
        name: 'xiaoming3'
      }
    ];
    const res = find(box, { age: 18 });
    assert.deepEqual(res, [
      {
        id: 2,
        age: 18,
        name: 'xiaoming2'
      },
      {
        id: 3,
        age: 18,
        name: 'xiaoming3'
      }
    ]);
  });
});

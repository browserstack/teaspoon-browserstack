describe('add()', function() {
  var tests = [
    { args: [1, 2],       expected: 3  },
    { args: [1, 2, 3],    expected: 6  },
    { args: [1, 2, 3, 4], expected: 10 }
  ];

  tests.forEach(function(test) {
    it('correctly adds ' + test.args.length + ' args', function() {
      var res = add.apply(null, test.args);
      expect(res).to.be(test.expected);
    });
  });
});

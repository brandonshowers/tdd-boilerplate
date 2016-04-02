// mocha/suite.js

var boilerplate,
    assert;

if (typeof require == 'function') {
  // Re-use in a browser without require.js
  boilerplate = require('../../index.js');
  assert = require('assert');
}

describe('Smoke Test', function () {
  it('should pass', function () {
    assert.equal(boilerplate(), 'boilerplate', 'failure message');
  });
});


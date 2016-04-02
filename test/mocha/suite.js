// mocha/suite.js

var boilerplate,
    expect = chai.expect;

if (typeof require == 'function') {
  boilerplate = require('../../index.js');
}

describe('Smoke Test', function () {
  it('should pass', function () {
  	expect(boilerplate()).to.equal("boilerplate");
  });
});


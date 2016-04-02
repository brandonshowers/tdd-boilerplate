// mocha/suite.js

var boilerplate,
    expect;

if (typeof require == "function") {
  boilerplate = require("../../index.js");
  expect = require("chai").expect;
}

describe("Compare Numbers", function () {
  it("1 should equal 1", function () {
    expect(1).to.equal(1);
  });
  it("2 should be greater than 1", function () {
    expect(2).to.be.greaterThan(1);
  });
});

describe("Smoke Test", function () {
  it("should pass", function () {
    expect(boilerplate()).to.equal("boilerplate");
  });
});


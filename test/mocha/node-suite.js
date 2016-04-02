// test/mocha/node-suite.js

// Run programmatically

// Load mocha
var Mocha = require('mocha');

// Tell mocha to use interface.
var mocha = new Mocha({ ui: "bdd", reporter: "spec" });

// Add your test files
mocha.addFile('./test/mocha/suite.js');

// Run your tests
mocha.run(function (failures) {
  process.exit(failures);
});


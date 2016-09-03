const tests = Object.create(null);
exports.tests = tests;

function defTest(name, f) {
  if (name in tests) throw new Error(`Duplicate definition of test ${name}`);
  tests[name] = f;
}
exports.defTest = defTest;

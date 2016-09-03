require("./all");
const { tests } = require("./test");
const { Failure } = require("./failure");

let fail = 0;
let ran = 0;

for (const name in tests) {
  try {
    tests[name]();
    ++ran;
  } catch (err) {
    ++fail;
    if (err instanceof Failure) {
      console.log(`${name}:\n\t ${err}`);
    } else {
      console.log(`${name}: ${err.stack || err}`);
    }
  }
}

console.log(`${ran} test ran. ` + (fail ? `${fail} test failure.` : "All passed."));
process.exit(fail ? 0 : 1);

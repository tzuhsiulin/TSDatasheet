const { Failure } = require("./failure");

function cmp(data, expected, comment) {
  if (data !== expected) throw new Failure(comment);
}
exports.cmp = cmp;

const { defTest } = require("./test");
const { cmp } = require("./cmp");
const { numToAlphabet, alphabetToNum } = require("../utils/utils");

defTest("datasheetTitle", () => {
  const datas = [1, 7, 26, 702, 111, 234, 566];
  const expectes = ["A", "G", "Z", "ZZ", "DG", "HZ", "UT"];
  for (let i = 0; i < datas.length; i++) {
    cmp(numToAlphabet(datas[i]), expectes[i], `numToAlphabet: ${datas[i]} shoule be ${expectes[i]}`);
  }
});

defTest("datasheetNumber", () => {
  const datas = ["A", "G", "Z", "ZZ", "DG", "HZ", "UT"];
  const expectes = [1, 7, 26, 702, 111, 234, 566];
  for (let i = 0; i < datas.length; i++) {
    cmp(alphabetToNum(datas[i]), expectes[i], `numToAlphabet: ${datas[i]} shoule be ${expectes[i]}`);
  }
});

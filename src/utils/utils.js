
function getBackingStoreRatio(context) {
  return context.webkitBackingStorePixelRatio ||
          context.mozBackingStorePixelRatio ||
          context.msBackingStorePixelRatio ||
          context.oBackingStorePixelRatio ||
          context.backingStorePixelRatio || 1;
}
exports.getBackingStoreRatio = getBackingStoreRatio;

function numToAlphabet(originNum) {
  if (typeof originNum !== "number" || originNum <= 0) throw new Error("invaild parameter");
  // short division
  const remains = [];
  let num;
  for (num = originNum; num >= 1 || remains.length === 0;) {
    const remain = num % 26;
    num = Math.round((num - remain) / 26);
    if (remain) {
      remains.push(remain);
    } else {
      remains.push(26);
      num--;
    }
  }
  // string generate from remains
  return remains.reduce((result, remain) => String.fromCharCode(64 + remain) + result, "");
}
exports.numToAlphabet = numToAlphabet;

function alphabetToNum(s) {
  if (!s.match(/[a-zA-Z]/g)) throw new Error("invaild string");
  const str = s.toLowerCase();
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += (str.charCodeAt(i) - 96) * Math.pow(26, str.length - i - 1);
  }
  return result;
}
exports.alphabetToNum = alphabetToNum;

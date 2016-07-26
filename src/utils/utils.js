
export function getBackingStoreRatio(context) {
  return context.webkitBackingStorePixelRatio ||
          context.mozBackingStorePixelRatio ||
          context.msBackingStorePixelRatio ||
          context.oBackingStorePixelRatio ||
          context.backingStorePixelRatio || 1;
}

export function numToAlphabet(num) {
  if (typeof num !== "number" || num <= 0) throw new Error("invaild parameter");
  // Short division
  const remains = [];
  let result;
  for (result = +num; result >= 1 || remains.length === 0;) {
    const remain = result % 26;
    result = Math.round((result - remain) / 26);
    if (remain) {
      remains.push(remain);
    } else {
      remains.push(26);
      result--;
    }
  }
  // generate string from remains
  let resultStr = "";
  for (let i = 0; i < remains.length; i++) {
    resultStr = String.fromCharCode(64 + remains[i]) + resultStr;
  }
  return resultStr;
}

export function alphabetToNum(s) {
  if (!s.match(/[a-zA-Z]/g)) throw new Error("invaild string");
  const str = s.toLowerCase();
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += (str.charCodeAt(i) - 96) * Math.pow(26, str.length - i);
  }
  return result;
}

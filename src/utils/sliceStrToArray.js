//切割字符
export default function sliceStrToArr(str, sliceLen) {  //str 为被切割的字符串，sliceLen为长度
  let strLen = str.length;
  let arr = []
  if (strLen > sliceLen) {
    let loopLen = Math.ceil(strLen / sliceLen);
    for (let index = 0; index < loopLen; index++) {
      arr.push(str.slice(sliceLen * index, sliceLen * (index + 1)))
    }
    return arr
  } else {
    return [str]
  }
}
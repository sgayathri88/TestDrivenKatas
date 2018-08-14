const wrap = (str, colNum) => {
  if (str.length < colNum) {
    return str;
  }
  else {
    let strArr = str.split(' ');
    let returnArr = [], currCol = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
      if (strArr[i].length+1+currCol.length <= colNum) {
        currCol += ' ' + strArr[i];
      } else {
        currCol += '\n';
        returnArr.push(currCol);
        currCol = strArr[i];
      }
    }
    returnArr.push(currCol);
    return returnArr.join('');
  }
}

module.exports = wrap;

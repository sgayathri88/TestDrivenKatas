const twoSum = (arr, target) => {
  let result = [];

  if (arr.length < 2) return result;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result = [i, j];
        return result;
      }
    }
  }
  return result;
}

module.exports = twoSum;

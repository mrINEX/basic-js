module.exports = function countCats(matrix) {

  let arr = matrix.flat();

  let count = 0;
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === '^^') {
      count += 1;
    }
  }
  return count;
  // throw 'Not implemented';
  // // remove line with error and write your code here
};

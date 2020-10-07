
// You should implement your task here.

module.exports = function towelSort (arr) {
  let newArr = [];
  let subArr = [];
  let x;
  if (!arr || arr.length === 0) {
    newArr = [];
  } else {
    for(let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {            
            for(let j = 0; j < arr[i].length; j++) {
                newArr.push(arr[i][j])
            }
           } else {
                for(let j = 0; j < arr[i].length; j++) {
                   
                    subArr.push(arr[i][j]);
                   
            }
            subArr.reverse();
            for(let k = 0; k < subArr.length; k++) {
                   
                    newArr.push(subArr[k]);
                   
            }
            subArr = [];
         }
    }
  }
  return newArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let split = Math.floor(arr.length / 2);
    let left = arr.slice(0, split);
    let right = arr.slice(split);
  
    let newLeft = mergeSort(left);
    let newRight = mergeSort(right);
  
    let newArr = [];
  
    while (newLeft.length > 0 || newRight.length > 0) {
      if (newRight.length === 0 || newLeft[0] <= newRight[0]) {
        newArr.push(newLeft.shift());
      } else if (newLeft.length === 0 || newRight[0] <= newLeft[0]) {
        newArr.push(newRight.shift());
      }
    }
  
    return newArr;
  }
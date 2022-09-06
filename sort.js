function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const middle = Math.ceil(arr.length / 2);
  const leftSide = arr.slice(0, middle);
  const rightSide = arr.slice(middle);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(leftSide, rightSide) {
  let mergedArray = [];

  while (leftSide.length > 0 && rightSide.length > 0) {
    if (leftSide[0] < rightSide[0]) {
      mergedArray.push(leftSide.shift());
    } else {
      mergedArray.push(rightSide.shift());
    }
  }
  return mergedArray.concat(leftSide, rightSide);
}

// console.log(mergeSort([6,6,3,65,3,6,3,7,89,9,1,23,]));
console.log(mergeSort([7, 4, 5, 3, 2, 6, 9, 1]));

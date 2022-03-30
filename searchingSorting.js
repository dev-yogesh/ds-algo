// - Linear searching can said to be a special case of Brute- force method.

// 1st
// Linear Search
// TC - O(n)
const linearSearch = (arr, key) => {
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    if (arr[i] == key) {
      return i;
    }
  }

  return -1;
};
// console.log(linearSearch([10, 20, 5, 30, 67], 30));

// 2nd
/**
 * Given an array of non-negative integers, write a code to search the position of an
 * element in the array in the reverse order. Do not print anything when the element
 * is not present in the given array.
 * Also, if the key is repeated, print the index where the key is appearing for the
 * first time in reverse order.
 */
const reverseSearch = (arr, key) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      result = arr.length - 1 - i;
    }
  }

  if (result >= 0) console.log(result);
};
// reverseSearch([10, 20, 5, 30, 67], 20);

// 3rd
// Binary Search
// Note - you need a sorted array
// TC - O(log n)
const binarySearch = (inputArr, key) => {
  let start = 0;
  let end = inputArr.length - 1;

  while (start <= end) {
    // let mid = (start + end) / 2;

    // IN JS
    // let mid = Math.floor((start + end) / 2);

    // IMPROVED VERSION
    let mid = Math.floor(start + (end - start) / 2);

    if (key == inputArr[mid]) {
      return mid;
    }
    if (key < inputArr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};
// console.log(binarySearch([2, 4, 6, 8, 10, 12, 14, 16], 14));

//4th
const getBinarySearchUnsuccessfulComparisonCount = (inputArr, key) => {
  let l = 0;
  let r = inputArr.length - 1;
  let count = 0;
  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);
    if (key == inputArr[mid]) {
      return count;
    }

    //Increment the unsuccessful comparison count here.
    count++;

    if (key < inputArr[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return count;
};
// console.log(getBinarySearchUnsuccessfulComparisonCount([2, 3, 4, 5, 8], 8));

// 5th
const getLinearSearchUnsuccessfulComparisonCount = (inputArr, key) => {
  let count = 0;
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] == key) {
      return count;
    }
    count++;
  }
  return count;
};
// console.log(getLinearSearchUnsuccessfulComparisonCount([2, 3, 4, 5, 8], 8));

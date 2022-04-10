// 1st
/**
 * Search in an unsorted array
 * You are given an unsorted array with n integers. You need to check if an integer k
 * is present in that array. If  k is present in the given array, print “true” else
 * print “false”.
 */

const search = (arr, k) => {
  let flag = false;
  // Traverse the array and check if the current element is equal to k
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      flag = true;
      break;
    }
  }

  console.log(flag);
};
// search([5, 8, 2, 15, 6, 25, 1, 11, 13], 11);

// 2nd
/**
 * Reverse the array
 * You are given an unsorted array with n integers. You need to implement the code to
 * reverse the array and print the array.
 */
// Method to reverse the array
const reverseArray = (arr) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let temp;

  while (leftIndex < rightIndex) {
    temp = arr[leftIndex];
    arr[leftIndex++] = arr[rightIndex];
    arr[rightIndex--] = temp;
  }

  return arr;
};
// console.log(reverseArray([5, 8, 2, 15, 6, 25, 1, 11, 13]));

// 3rd
/**
 * Move all zeros to the end of the array
 * You are given an unsorted array with n integers. You need to move all zeros(if any)
 * to the end of the array and the order of the non-zero integers shouldn’t be altered.
 */
// Method to find move all zeros to the end of the array
const moveZerosToEnd = (arr) => {
  let index = 0;
  // Suppose there are k non-zero integers in the given n integers, then store that k non-zero integers at
  // first k positions in the array. Then store zeros at remaining positions.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[index++] = arr[i];
    }
  }

  for (let i = index; i < arr.length; i++) {
    arr[i] = 0;
  }

  return arr;
};
// console.log(moveZerosToEnd([5, 8, 0, 15, 6, 0, 1, 0, 13]));

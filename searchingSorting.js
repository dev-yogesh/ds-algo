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

// 6th
// Bubble Sort
// TC - O(n^2)
const swap = (i, j, array) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const bubbleSort = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length - i; j++) {
      if (numbers[j - 1] > numbers[j]) {
        //swap elements
        swap(j - 1, j, numbers);
      }
    }
  }
  return numbers; // returning the final sorted array
};
// console.log(bubbleSort([1, 56, 3, 16, 2, 19]));

// Optimized
// const bubbleSort2 = (numbers) => {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 1; j < numbers.length - i; j++) {
//       let swapCount = 0;
//       if (numbers[j - 1] > numbers[j]) {
//         //swap elements
//         swap(j - 1, j, numbers);
//         swapCount = 1;
//       }
//     }

//     if (swapCount === 0) {
//       break;
//     }
//   }

//   return numbers; // returning the final sorted array
// };

// console.log(bubbleSort2([1, 2, 3, 4, 5, 6]));

// 7th
/**
 * Write a bubble sort program that prints the number of swaps made after M number of
 * iterations
 */
const totalBubbleSortSwaps = (array, M) => {
  let size = array.length;
  let temp = 0;
  let totalSwaps = 0;
  for (let i = 0; i < M; i++) {
    for (let j = 1; j < size - i; j++) {
      if (array[j - 1] < array[j]) {
        // swap elements
        temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
        totalSwaps++;
      }
    }
  }
  return totalSwaps;
};
// console.log(totalBubbleSortSwaps([1, 2, 3, 4], 2));

// 8th
// Selection Sort
// TC - O(n^2)
const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) if (arr[j] < arr[min]) min = j;

    // Swap the found minimum element with the first element of the unsorted array
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }

  return arr;
};
// console.log(selectionSort([12, 5, 18, 3, 56]));

// 9th
// Insertion Sort
// TC - O(n^2)
const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; ++i) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j = j - 1;
    }
  }

  return arr;
};
// console.log(insertionSort([2, 7, 5, 21, 13]));

// 10th
const insertionSortDescending = (array) => {
  let n = array.length;
  for (let j = 1; j < n; j++) {
    let key = array[j];
    let i = j - 1;

    while (i > -1 && array[i] < key) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = key;
  }

  return array;
};
// console.log(insertionSortDescending([2, 7, 5, 21, 13]));

// 11th
const sortDescending = (lastNames) => {
  let n = lastNames.length;
  for (let j = 1; j < n; j++) {
    let key = lastNames[j];
    let i = j - 1;
    while (i > -1 && lastNames[i].localeCompare(key) < 0) {
      lastNames[i + 1] = lastNames[i];
      i--;
    }
    lastNames[i + 1] = key;
  }

  return lastNames;
};

const sortAescending = (firstNames) => {
  let n = firstNames.length;
  for (let j = 1; j < n; j++) {
    let key = firstNames[j];
    let i = j - 1;
    while (i > -1 && firstNames[i].localeCompare(key) >= 0) {
      firstNames[i + 1] = firstNames[i];
      i--;
    }
    firstNames[i + 1] = key;
  }

  return firstNames;
};
// const firstNames = ['logan', 'jean '];
// const lastNames = ['gray', 'wolverine'];
const firstNames = [
  'janella',
  'arianna',
  'bob',
  'sheryll',
  'katelynn',
  'alphonso',
  'bertha',
  'ivette',
  'michiko',
  'evelin',
];
const lastNames = [
  'valene',
  'krista',
  'lyn',
  'melony',
  'laila',
  'laree',
  'raylene',
  'lynwood',
  'tim',
  'keech',
];
// console.log(sortAescending(firstNames));
// console.log(sortDescending(lastNames));

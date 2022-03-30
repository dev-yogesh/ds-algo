// 1st
// ====================================================================================
const findDuplicates1 = (id) => {
  console.log('Duplicate student id : ');
  for (let i = 0; i < id.length; i++) {
    for (let j = i + 1; j < id.length; j++) {
      if (id[i] == id[j]) {
        console.log(id[i] + ' ');
        break;
      }
    }
  }
};
// const ids = [22, 20, 3, 18, 4, 17, 17, 10, 4, 11, 3, 1];
// findDuplicates(ids);

// 2nd
// ====================================================================================
const findDuplicates2 = (id) => {
  console.log('Duplicate student id : ');
  const count = new Array(22).fill(0);
  //   const count = Array.from({ length: 22 }, () => 0);

  console.log(count);
  for (let i = 0; i < id.length; i++) {
    count[id[i]]++;
    if (count[id[i]] == 2) console.log(id[i] + ' ');
  }
};
// const ids = [22, 20, 3, 18, 4, 17, 17, 10, 4, 11, 3, 1];
// findDuplicates2(ids);

// 3rd [============ Algorithm 1 ===========]
// ====================================================================================
// Note - %10 is because, as the value of n increase it is hard to store the value of fibonacci(n). Hence we are considering only last digit of fibonacci(n).
// Issue - not able to calculate for 100 - execution time issue
const fibonacci = (n) => {
  if (n < 2) return n;
  else return (fibonacci(n - 1) + fibonacci(n - 2)) % 10;
};
// console.log(fibonacci(4));

// 4th
// ====================================================================================
const reverseString = (st) => {
  if (st == null || st.length <= 1) console.log(st);
  else {
    console.log(st.charAt(st.length - 1));
    reverseString(st.substring(0, st.length - 1));
  }
};
// reverseString('abc d efg');

// 5th
// ====================================================================================
/**
 * Write a Java program to calculate the sum of n consecutive natural numbers using recursion.
 * For example: if input = 3, then the sum = 3 + 2 + 1 = 6, so output = 6
 */
const sum = (n) => {
  if (n != 0) return n + sum(n - 1);
  else return n;
};
// console.log(sum(5));

// 6th
/**
 * Power of a number using recursion.
 *
 * You are given the base and exponent values, then you have to return the power of a given value. The base and exponent
 * values are passed to the function named “powerfunc” where you have to write the code. You have to calculate the power of
 * the base value and return the output.
 *
 */
const powerfunc = (base, power) => {
  if (power != 0) return base * powerfunc(base, power - 1);
  else return 1;
};
// console.log(powerfunc(2, 4));

// 7th
/**
 * Print the given pattern using recursion.
 * For example:  *
 *               **
 *               ***
 *               ****
 *               *****
 */
const printPattern = (n) => {
  if (n <= 0) return '';

  let res = printPattern(n - 1);
  res = res + '*';
  console.log(res);
  return res;
};
// printPattern(5);

// 8th
/**
 * Program to find the factorial of a number using recursion.
 */
const factorial = (n) => {
  if (n == 0) return 1;
  else return n * factorial(n - 1);
};
// console.log(factorial(5));

// 9th [============ Algorithm 2 ===========]
// Issue - not able to calculate for 10**9 - space issue
const fibonacci2 = (n) => {
  let f = [];
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) f[i] = (f[i - 1] + f[i - 2]) % 10;
  console.log('Fibonacci number : ' + f[n]);
};
// fibonacci2(8);

// 10th [============ Algorithm 3 ===========]
// Note: no issue
const fibonacci3 = (n) => {
  let a = 0;
  let b = 1;
  let c = n;
  for (let i = 2; i <= n; i++) {
    c = (a + b) % 10;
    a = b;
    b = c;
  }
  return c;
};
// console.log(fibonacci3(8));

// 11th
/**
 * Calculate the sum of the even numbers till n
 */
const evenSum = (n) => {
  if (n <= 1) return 0;
  else if (n % 2 == 0) return n + evenSum(n - 1);
  else return evenSum(n - 1);
};
// console.log(evenSum(10));

// 12th
const evenSum2 = (n) => {
  return (n / 2) * (1 + n / 2);
};
// console.log(evenSum2(10));

// 13th
/**
 * Write a program to calculate the sum of the digits of a given number, using
 * recursion.
 */
const sumDigits = (n) => {
  if (n == 0) return 0;
  else return (n % 10) + sumDigits(n / 10);
};
// console.log(sumDigits(12));

// 14th
/**
 * Write a program using recursion to check if an input of 5 digits is a
 * palindrome or not. A palindrome is a sequence of characters which reads the same
 * backwards and forwards.
 */
const palindrome = (num, index) => {
  if (index > num.length / 2) return true;
  if (num[index] == num[num.length - index - 1])
    return palindrome(num, index + 1);
  else return false;
};
// console.log(palindrome([1, 2, 1], 0));

// Solve all of the following prompts using recursion.

// yo

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function (n, result = 1) {
  // base case - n === 1, return the value we have.
  if (n < 0) {
    return null;
  }
  if (n <= 1) {
    return result;
  }
  //recursive case
  result = result * n;
  return factorial(n - 1, result);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function (array, result = 0) {
  //base - array is empty
  if (!array.length) {
    return result;
  }
  //recursive
  result += array[0];
  return sum(array.slice(1, array.length), result);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array, result = 0) {
  //base - if array is empty
  if (!array.length) {
    return result;
  }
  // recurse
  if (Array.isArray(array[0])) {
    result += arraySum(array[0])
  } else {
    result += array[0];
  }
  return arraySum(array.slice(1, array.length), result);
};

// 4. Check if a number is even.
var isEven = function (n) {
  // base case
  if (n === 0) {
    return true;
  } else if (n === 1 || n === -1) {
    return false;
  }
  // recursive
  if (n > 0) {
    return isEven(n - 2);
  } else if (n < 0) {
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n, sum = 0) {
  // base case
  // if n is 0, return sum
  if (!n) {
    return sum;
  }

  // else, add number below n to sum
  if (n > 0) {
    sum += n - 1;
    return sumBelow(n - 1, sum);
  } else {
    sum += n + 1;
    return sumBelow(n + 1, sum);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function (x, y) {
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp, quotient = base) {
  // base case(s)
  // if exponent is 0, return 1
  // if exponent is 1, return quotient
  if (!exp) {
    return 1;
  } else if (exp === 1) {
    return quotient;
  } else if (exp === -1) {
    quotient /= base;
    quotient /= base;
    return quotient;
  }

  if (exp > 0) {
    quotient *= base;
    return exponent(base, exp - 1, quotient);
  } else {
    quotient /= base;
    return exponent(base, exp + 1, quotient)
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n, val = 2) {
  // base case
  // if val is equal to n or n is equal to 1
  // return true, else if val is greater than n
  // return false
  if (val === n || n === 1) {
    return true;
  } else if (val > n) {
    return false;
  }

  // recursive case
  // val multiplied by 2, return powerOfTwo and pass in n and val again
  val *= 2;
  return powerOfTwo(n, val);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function (string) {
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {
  string = string.toLowerCase();
  string = string.replaceAll(' ', '');

  if (!string.length || string.length === 1) {
    return true;
  }

  if (string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, -1));
  } else {
    return false;
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function (x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').

// x = 78, y = 453
// x = 453, y = 78
var multiply = function (x, y, sum = 0) {
  if (x < y) {
    return multiply(y, x, sum);
  }

  sum += x;

  if (y === 1) {
    return sum;
  } else if (y === 0) {
    return 0;
  } else if (y === -1) {
    return -sum
  }

  if (y < 0) {
    return multiply(x, y + 1, sum);
  } else {
    return multiply(x, y - 1, sum);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function (x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function (x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function (str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function (str) {
};

// 17. Reverse the order of an array
var reverseArr = function (array, revArr = []) {
  if (revArr.length === array.length) {
    return revArr;
  }

  revArr.push(array[array.length - 1 - revArr.length])

  return reverseArr(array, revArr);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function (value, length) {
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback, newArr = []) {
  if (newArr.length === array.length) {
    return newArr;
  }

  newArr.push(callback(array[newArr.length], newArr.length, array));

  return rMap(array, callback, newArr);
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function (obj, key, counter = 0) {

  let keys = Object.keys(obj);

  keys.forEach((item) => {
    if (item === key) {
      counter++;
    } else if (typeof obj[item] === 'object') {
      counter = countKeysInObj(obj[item], key, counter);
    }
  });

  return counter;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function (obj, value, counter = 0) {

  let values = Object.values(obj);

  values.forEach((item) => {
    if (item === value) {
      counter++;
    } else if (typeof item === 'object') {
      counter = countValuesInObj(item, value, counter);
    }
  });

  return counter;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function (obj, key, newKey, newObj = {}) {

  // iterate thru obj
  // if keys in obj match specified key, push value
  // but under the name newKey instead
  // otherwise push to newObj as is

  let keys = Object.keys(obj);

  // iterate thru keys of obj
  keys.forEach((item) => {
    // check if item is equal to key
    if (item === key) {
      // if it is, check if value is an object
      if (typeof obj[item] === 'object') {
        // set newKey value to iterate thru object again
        newObj[newKey] = replaceKeysInObj(obj[item], key, newKey, newObj[item]);
      } else {
        // if value is not an object just set newKey value to be old key value
        newObj[newKey] = obj[key];
      }
    } else {
      // if it isn't, do the same as before but with regular key instead of newKey
      if (typeof obj[item] === 'object') {
        // if obj, set value to be iterated obj
        newObj[item] = replaceKeysInObj(obj[item], key, newKey, newObj[item]);
      } else {
        // if not, set value to be same value as before
        newObj[item] = obj[item];
      }
    }
  });

  return newObj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function (n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (input) {
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function (array, newArr = []) {
  if (newArr.length === array.length) {
    return newArr;
  }

  if (Array.isArray(array[newArr.length])) {
    newArr.push(capitalizeFirst(array[newArr.length]));
  } else {
    newArr.push(array[newArr.length][0].toUpperCase() + array[newArr.length].slice(1))
  }

  return capitalizeFirst(array, newArr);
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function (str, obj) {
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function (list, newList = [], counter = 0) {
  if (counter === list.length - 1) {
    return newList;
  }

  if (newList[newList.length - 1] !== list[counter]) {
    newList.push(list[counter]);
  }

  counter++
  return compress(list, newList, counter);
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str, newStr = '') {
  if (str.length === 0) {
    return newStr;
  }

  if (str[0] === '1') {
    newStr += "one";
  } else if (str[0] === '2') {
    newStr += "two";
  } else if (str[0] === '3') {
    newStr += "three"
  } else if (str[0] === '4') {
    newStr += "four"
  } else if (str[0] === '5') {
    newStr += "five"
  } else if (str[0] === '6') {
    newStr += "six"
  } else if (str[0] === '7') {
    newStr += "seven"
  } else if (str[0] === '8') {
    newStr += "eight"
  } else if (str[0] === '9') {
    newStr += "nine"
  } else if (str[0] === '0') {
    newStr += "zero"
  } else {
    newStr += str[0]
  }

  return numToText(str.slice(1), newStr);
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function (array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function (array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------

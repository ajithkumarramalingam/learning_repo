// ------------------------------------------------------------
// 2) Modulo program (print symbols based on divisibility)
// ------------------------------------------------------------
const numbersFromOneToHundred = 100;
for(let i = 1; i <= numbersFromOneToHundred; i++) {
  if (i % 2 == 0) {
    console.log(i, "If divisible by 2 =>", "*");
  }

  if (i % 3 == 0) {
    console.log(i, "If divisible by 3 =>", "#");
  }

  if (i % 4 == 0) {
    console.log(i, "If divisible by 4 =>", "$");
  }

  if (i % 5 == 0) {
    console.log(i, "If divisible by 5 =>", "+");
  }

  if (i % 10 == 0) {
    console.log(i, "If divisible by 10 =>", "=");
  }
}

// ------------------------------------------------------------
// 3) Remove duplicate from array
// ------------------------------------------------------------
const duplicateArrayOne = [1, 2, 3, 3];
let uniqueArrayOne: any = [];

for (let arrayIndex = 0; arrayIndex < duplicateArrayOne.length; arrayIndex++) {
  const currentValue = duplicateArrayOne[arrayIndex];

  if (currentValue != undefined) {
    if (!uniqueArrayOne.includes(currentValue)) {
      uniqueArrayOne.push(currentValue);
    }
  }
}
console.log("uniqueArrayOne", uniqueArrayOne);

const duplicateArrayTwo = [5, 5, 5, 7];
const seenValuesMap: any = {};
const uniqueArrayTwo: number[] = [];

for (let arrayIndex = 0; arrayIndex < duplicateArrayTwo.length; arrayIndex++) {
  const currentValue = duplicateArrayTwo[arrayIndex];
  if (currentValue != undefined) {
    if (!seenValuesMap[currentValue]) {
      seenValuesMap[currentValue] = true;
      uniqueArrayTwo.push(currentValue);
    }
  }
}
console.log("uniqueArrayTwo", uniqueArrayTwo);

// ------------------------------------------------------------
// 4) Find second largest number in array
// ------------------------------------------------------------

// Method-1
let numberDataForLargest: number[] = [10, 20, 4, 45, 99, 99, 45];
const uniqueList = [...new Set(numberDataForLargest)];
const descendingList = uniqueList.sort((first, second) => second - first);
// console.log('Second largest number in the array', descendingList[1]);

// Method-2
let largestNumber: number = -Infinity;
let secondLargestNumber: number = -Infinity;

for (let arrayIndex = 0; arrayIndex < numberDataForLargest.length; arrayIndex++) {
  const currentValue = numberDataForLargest[arrayIndex];
  if (currentValue !== undefined) {
    if (currentValue > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = currentValue;
    } else if (currentValue > secondLargestNumber && currentValue < largestNumber) {
      secondLargestNumber = currentValue;
    }
  }
}

console.log("Second Largest:", secondLargestNumber);

// ------------------------------------------------------------
// 5) Reverse string without built-in reverse
// ------------------------------------------------------------
const originalName = "Ajith";
let reversedName = "";

for (let charIndex = originalName.length - 1; charIndex >= 0; charIndex--) {
  reversedName += originalName[charIndex];
}
console.log("reversedName", reversedName);

// string array reverse style
const namesArray = ["Ajith", "ram", "rasi"];
let reversedNamesArray: any = [];

for (let nameIndex = namesArray.length - 1; nameIndex >= 0; nameIndex--) {
  const currentName = namesArray[nameIndex];
  if (currentName != undefined) {
    if (!reversedNamesArray.includes(currentName)) {
      reversedNamesArray.push(currentName);
    }
  }
}
console.log("reversedNamesArray", reversedNamesArray);

// ------------------------------------------------------------
// 6) Count repeated characters / numbers
// ------------------------------------------------------------
const inputText = "hello";
const characterCountMap: { [key: string]: number } = {};

for (let charIndex = 0; charIndex < inputText.length; charIndex++) {
  const currentCharacter = inputText[charIndex];
  if (currentCharacter != undefined) {
    characterCountMap[currentCharacter] = (characterCountMap[currentCharacter] || 0) + 1;
  }
}

console.log("characterCountMap", characterCountMap);

// ------------------------------------------------------------
// 7) Flatten nested array
// ------------------------------------------------------------
const nestedArray: any[] = [1, [2, 3], [4, [5, 6]]];

function flattenArray(inputArray: any[]): any[] {
  let flattenedResult: any[] = [];

  for (let currentItem of inputArray) {
    if (Array.isArray(currentItem)) {
      flattenedResult = flattenedResult.concat(flattenArray(currentItem));
      console.log("flattenedResult after nested", flattenedResult);
    } else {
      flattenedResult.push(currentItem);
      console.log("flattenedResult after value", flattenedResult);
    }
  }

  return flattenedResult;
}

console.log("flattenArray", flattenArray(nestedArray));

// ------------------------------------------------------------
// 8) Palindrome program
// ------------------------------------------------------------
const palindromeInputText: string = "level";
let palindromeReversedText: string = "";

for (let charIndex = palindromeInputText.length - 1; charIndex >= 0; charIndex--) {
  palindromeReversedText += palindromeInputText[charIndex];
}

if (palindromeInputText === palindromeReversedText) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// ------------------------------------------------------------
// 9) Factorial
// ------------------------------------------------------------
const factorialInput = 5;
let factorialResult = 1;

for (let loopNumber = 1; loopNumber <= factorialInput; loopNumber++) {
  factorialResult *= loopNumber;
}
console.log("factorialResult", factorialResult);

// ------------------------------------------------------------
// 10) Fibonacci series
// ------------------------------------------------------------
let fibonacciFirst = 0;
let fibonacciSecond = 1;

console.log("fibonacciFirst", fibonacciFirst);
console.log("fibonacciSecond", fibonacciSecond);

for (let termIndex = 2; termIndex <= 10; termIndex++) {
  const fibonacciNext = fibonacciFirst + fibonacciSecond;
  console.log("fibonacciNext", fibonacciNext);
  fibonacciFirst = fibonacciSecond;
  fibonacciSecond = fibonacciNext;
}

// ------------------------------------------------------------
// 11) Check whether number is prime
// ------------------------------------------------------------
const primeInputNumber = 7;
let isPrimeNumber = true;

for (let divisor = 2; divisor < primeInputNumber; divisor++) {
  if (primeInputNumber % divisor == 0) {
    isPrimeNumber = false;
    break;
  }
}
console.log("isPrimeNumber", isPrimeNumber);

// Check whether numbers are prime in array
const primeCheckArray = [1, 3, 4, 5, 7];

for (let arrayIndex = 0; arrayIndex < primeCheckArray.length; arrayIndex++) {
  const currentValue = primeCheckArray[arrayIndex];
  let isArrayPrime = true;

  if (currentValue != undefined) {
    if (currentValue <= 1) {
      isArrayPrime = false;
    } else {
      for (let divisor = 2; divisor < currentValue; divisor++) {
        if (currentValue % divisor == 0) {
          isArrayPrime = false;
          break;
        }
      }
    }
  }
  console.log("isArrayPrime", isArrayPrime);
}

// ------------------------------------------------------------
// 12) Swap two numbers without third variable
// ------------------------------------------------------------
let firstNumber = 10;
let secondNumber = 20;

firstNumber = firstNumber + secondNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;

console.log("firstNumber", firstNumber);
console.log("secondNumber", secondNumber);

// ------------------------------------------------------------
// 13) Sort (Bubble Sort)
// ------------------------------------------------------------
const unsortedArray: any = [5, 3, 8, 1, 2];

for (let outerIndex = 0; outerIndex < unsortedArray.length - 1; outerIndex++) {
  console.log("remainingComparisons", unsortedArray.length - 1 - outerIndex);
  for (let innerIndex = 0; innerIndex < unsortedArray.length - 1 - outerIndex; innerIndex++) {
    if (unsortedArray[innerIndex] > unsortedArray[innerIndex + 1]) {
      let tempValue = unsortedArray[innerIndex];
      console.log("tempValue", tempValue);
      unsortedArray[innerIndex] = unsortedArray[innerIndex + 1];
      unsortedArray[innerIndex + 1] = tempValue;
    }
  }
}

console.log("sortedArray", unsortedArray);

// ------------------------------------------------------------
// 14) Find largest number in array
// ------------------------------------------------------------
const largestCheckArray = [1, 2, 3, 100];
let maxValue = largestCheckArray[0] ?? 0;

for (let arrayIndex = 0; arrayIndex < largestCheckArray.length; arrayIndex++) {
  let currentValue = largestCheckArray[arrayIndex];
  if (currentValue != undefined) {
    if (currentValue > maxValue) {
      maxValue = currentValue;
    }
  }
}
console.log("maxValue", maxValue);

// ------------------------------------------------------------
// 15) Find minimum number in array
// ------------------------------------------------------------
const minimumCheckArray = [100, 23, 34, 12];
let minValue = minimumCheckArray[0] ?? 0;

for (let arrayIndex = 0; arrayIndex < minimumCheckArray.length; arrayIndex++) {
  const currentValue = minimumCheckArray[arrayIndex];
  if (currentValue != undefined) {
    if (currentValue < minValue) {
      minValue = currentValue;
    }
  }
}

console.log("minValue", minValue);

// ------------------------------------------------------------
// 16) Array sum
// ------------------------------------------------------------
const sumInputArray = [1, 2, 3, 4];
let sumResult = 0;

for (let arrayIndex = 0; arrayIndex < sumInputArray.length; arrayIndex++) {
  const currentValue = sumInputArray[arrayIndex];
  if (currentValue != undefined) {
    sumResult += currentValue;
  }
}
console.log("sumResult", sumResult);

// ------------------------------------------------------------
// 17) Rotate array (Right) - using your existing method
// ------------------------------------------------------------
const rotateRightArray: any = [1, 2, 3, 4];
const rotateRightSteps: any = 1;

for (let stepIndex = 0; stepIndex < rotateRightSteps; stepIndex++) {
  const firstValue = rotateRightArray[stepIndex];

  for (let arrayIndex = 0; arrayIndex < rotateRightArray.length; arrayIndex++) {
    rotateRightArray[arrayIndex] = rotateRightArray[arrayIndex + 1];
  }

  rotateRightArray[rotateRightArray.length - 1] = firstValue;
}
console.log("rotateRightArray", rotateRightArray);

// ------------------------------------------------------------
// 18) Rotate array (Left) - using your existing method
// ------------------------------------------------------------
const rotateLeftArray: any = [1, 2, 3, 4];
const rotateLeftSteps = 1;

for (let stepIndex = 0; stepIndex < rotateLeftSteps; stepIndex++) {
  const lastValue = rotateLeftArray[rotateLeftArray.length - 1];

  for (let arrayIndex = rotateLeftArray.length - 1; arrayIndex > 0; arrayIndex--) {
    rotateLeftArray[arrayIndex] = rotateLeftArray[arrayIndex - 1];
  }

  rotateLeftArray[0] = lastValue;
}
console.log("rotateLeftArray", rotateLeftArray);

// What is a Callback Function?
// A function that is passed as an argument to another function and called later when needed.

function greet(name: any, callback: any) {
  console.log('Hello ' + name);
  callback();                    // ← calling the passed function
}

function sayBye() {
  console.log('Goodbye!');
}

greet('Kumar', sayBye);

// Output:
// Hello Kumar
// Goodbye!


// What is a Promise?
// A Promise is an object that represents a value that will be available now, later, or never.

// Think of it like ordering food in a restaurant — you get a token (promise), and the food will come later. You don't wait standing at the counter.

// What is Async / Await?
// A cleaner way to write Promises that looks like normal synchronous code but runs asynchronously.

// Think of it like a token at a government office — you sit and wait for your number to be called, but others are also being served at the same time. You are not blocking the entire office.

// Explain
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// Self Intro
// "Hi, my name is Ajith Kumar.
// I'm a Full Stack Developer with 3+ years of experience.
// I'm currently working at Finstein Advizory Service in Chennai as a Full Stack Developer.
// My tech stack is Angular and Ionic for frontend, NestJS and Node.js for backend, and MySQL for database.
// In my current company I've built products like an Attendance Management System with face recognition, biometric, geofencing and offline sync, and also a Finance Product where I optimized database performance by 30%+.
// I have strong experience in REST API design, Redis queue, multi-database architecture, and handling large datasets.
// I'm looking for a new opportunity where I can grow and contribute to a good team.
// That's a quick summary about me — happy to go into more detail on anything!"

// Write a function to capitalize the first letter of each word in a sentence
function capitalizeWords(sentence: any) {
  return sentence
    .split(' ')
    .map((word: any) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

console.log(capitalizeWords("hello world"));

// Write a program to find the length of a string without using the library function
const name = 'AJITH';
let count = 0;

while (name[count] !== undefined) {
  console.log('name[count]', name[count]);
  count++;
}
console.log(count);

for (let i = 0; i < name.length; i++) {
  console.log('i', i);

  const chr = name[i];
  console.log('chr', chr);

  if (chr !== undefined) {
    count++;
  }
}

console.log('count', count);

// Write a program to calculate the factorial of a number using recursion

function factorial(num: number): any {
  if (num === 0 || num === 1) {
    return num = 1;
  }

  return num * factorial(num - 1);
}

console.log('factorial',factorial);

// Write a program to display the pattern like a right-angle triangle using an asterisk (*)

const rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = '';

  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }
  console.log(pattern);
}

// Write a program to create and display unique three-digit numbers using 1, 2, 3, 4 and also count how many numbers are there

const numbers = [1, 2, 3, 4];

// let count = 0;

for (let i = 0; i < numbers.length; i++) {

  for (let j = 0; j < numbers.length; j++) {

    for (let k = 0; k < numbers.length; k++) {

      // Check digits are unique
      if (i !== j && j !== k && i !== k) {

        const result = `${numbers[i]}${numbers[j]}${numbers[k]}`;

        console.log(result);

        count++;
      }
    }
  }
}

console.log("Total count:", count);

// Write a program to count the letters, spaces, numbers, and other characters of an input string
const str = "Hello 123 @World";

let letters = 0;
let num = 0;
let spaces = 0;
let specialChars = 0;

for(let i = 0; i < str.length; i++) {
  const char = str[i];
  if (char != undefined) {
    if (
      char >= 'a' && char <= 'z' ||
      char >= 'A' && char <= 'Z'
    ) {
      letters ++
    } else if (
      char >= '0' && char <= '9'
    ) {
      num ++
    } else if (
      char === ' '
    ) {
      spaces ++
    } else {
      specialChars ++
    }
  }
}

console.log("Letters:", letters);
console.log("Numbers:", num);
console.log("Spaces:", spaces);
console.log("Special Characters:", specialChars);


// Anagram
function isAnagram(str1: any, str2: any) {

  if(str1.length !== str2.length) {
    return false;
  }

  let count: any = {};

  for(let ch of str1) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for(let ch of str2) {

    if(!count[ch]) {
      return false;
    }

    count[ch]--;
  }

  return true;
}

console.log(
 isAnagram("listen","silent")
);

// Merge Two Arrays
const arr1 = [1,2];
const arr2 = [3,4];

let result = [];

for(let i=0;i<arr1.length;i++){
 result[result.length]=arr1[i];
}

for(let i=0;i<arr2.length;i++){
 result[result.length]=arr2[i];
}

console.log(result);

// Missing Number
const arr: any = [1,2,3,5];
const n = 5;

let total = 0;

for(let i=1;i<=n;i++){
 total += i;
}

let current = 0;

for(let i=0;i<arr.length;i++){
 current += arr[i];
}

console.log(total-current);

// Count Vowels
const str1: any = "Angular";

let count2: number = 0;

for(let i=0;i<str1.length;i++){

 if(
  str[i] === 'a' ||
  str[i] === 'e' ||
  str[i] === 'i' ||
  str[i] === 'o' ||
  str[i] === 'u' ||
  str[i] === 'A' ||
  str[i] === 'E' ||
  str[i] === 'I' ||
  str[i] === 'O' ||
  str[i] === 'U'
 ){
   count2++;
 }
}

console.log(count2);

// FizzBuzz

for(let i=1;i<=20;i++){

  if(i%3===0 && i%5===0){
    console.log("FizzBuzz");
  }
  else if(i%3===0){
    console.log("Fizz");
  }
  else if(i%5===0){
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
 }

 // Elite company interview question
 let inp = [
  {name: 'firstname', value: 'johndoe'},
      {name: 'age', value: '28'},
      {name: 'language', value: 'English'},
      {name: 'language', value: 'Tamil'},
      {name: 'language', value: 'Hindi'},
  ];
  
  let output: any = {};
  inp.forEach(e => {
      console.log(output[e.name]);
      if(output[e.name]) {
         if(!Array.isArray(output[e.name])) {
             output[e.name] = [output[e.name]];
         }
         output[e.name].push(e.value);
      } else {
          output[e.name] = (e.value);
      }
  });
  console.log('output------', output);

  // Print without duplicate string

  const names = 'nataraj';
  let checkDup: any = {};
  let withOutDup = '';

  for(let i = 0; i < names.length; i++) {
    const chr = name[i];
    if (chr != undefined) {
      if (!checkDup[chr]) {
        checkDup[chr] = true;
        withOutDup += chr
      }
    }
  }
  console.log('checkDup',checkDup);
  console.log('withOutDup',withOutDup);

  // Given an array of integers, find all the leaders in the array An element is a leader if it is greater than or 
  // equal to all elements to its right side. The last element is always a leader.

  const arr7 = [16, 17, 4, 3, 5, 2];
  const leader = [];
  let max = arr7[arr7.length - 1] ?? 0;
  console.log('max',max);
  leader.push(max);

  for(let i = arr7.length - 2; i >= 0; i--) {
    const num = arr7[i];
    console.log('num',num);
    if (num != undefined) {
      if (num > max) {
        max = num;
        leader.push(num);
      }
    }
  }
  console.log('leader',leader.reverse());

  // Am strong Number
  const nums = 9474;

  const digits = nums.toString().split('');
  const power = digits.length;
  
  let sum = 0;
  console.log('digits',digits);
  console.log('power',power);
  for (const digit of digits) {
    sum += Number(digit) ** power;
    console.log('sum',sum);
  }
  
  console.log(sum === num ? "Armstrong Number" : "Not Armstrong Number");


  // find the smallest and largest word in the stri
  const letter = "I Love You";
  const arrLetter = letter.split(" ");
  console.log('arrLetter',arrLetter);
  let min = arrLetter[0] ?? '';
  let max1 = arrLetter[0] ?? '';
  for(let i = 1; i < arrLetter.length; i++) {
    const char = arrLetter[i];
    if (char != undefined) {
      console.log('char',char);
      if (char.length < min.length) {
        min = char;
      }

      if (char.length > max1.length) {
        max1 = char;
      }
    }
  }
  console.log('min',min);
  console.log('max',max);

  // every word second letter should change cap
  const sentence = "my name is ajith";

  const words = sentence.split(" ");
  let output4 = "";

  for (let i = 0; i < words.length; i++) {
    const word: any = words[i];

    if (word.length >= 2) {
      output4 += word[0] + word[1].toUpperCase() + word.substring(2);
    } else {
      output4 += word;
    }

    if (i < words.length - 1) {
      output4 += " ";
    }
  }

  console.log(output4);

  const input = "hello world";
  const words2: any = input.split(" ");
  let output2 = '';

  for(let i = 0; i < words2.length; i++) {
    const ls = words2[i];
    if (ls != undefined) {
      output2 += ls[0].toUpperCase() + ls.substring(1);
      if (i < words2.length - 1) {
        output2 += " ";
      }
    }
  }
  console.log('output2',output2);

  // How many duplicate word is there

  const name8 = "logesh palani";
  let check: any = {};
  let duplicateCount = 0;

  for (let i = 0; i < name8.length; i++) {
      const char: any = name8[i];
      if (char !== " ") {
          if (check[char]) {
              duplicateCount++;
              console.log("Duplicate Count:", char, duplicateCount);
          } else {
              check[char] = true;
          }
      }
  }

  // First Non-Repeating Character ?

  const char = 'aabbccddef';
  let nonRepeat: any = {};
  let found = false;

  for(let i = 0; i < char.length; i++) {
    const ls = char[i];
    if (ls != undefined) {
      nonRepeat[ls] = (nonRepeat[ls] || 0) + 1;
    }
  }

  console.log('nonRepeat',nonRepeat);

  for(let i = 0; i < char.length; i++) {
    const ls = char[i];
    if (ls != undefined) {
      if (nonRepeat[ls] === 1) {
        console.log("non-repeating character found is", ls);
        found = true;
        break;
      }
    }
  }

  if (found) {
    console.log("non-repeating character found");
  } else {
    console.log("No non-repeating character found");
  }

  // given string reverse only before space

  const name2 = 'hello word';
  let first = '';
  let second = '';
  let reverse = '';
  let found2 = false;

  for(let i = 0; i < name2.length; i++) {
    const ls = name2[i];
    if (ls != undefined) {
      if (ls === ' ') {
        found2 = true;
        continue;
      }
      if (found2) {
        second += ls;
      } else {
        first += ls;
      }
    }
  }

  for(let i = first.length - 1; i >= 0; i--) {
    const l = first[i];
    if (l != undefined) {
      reverse += l;
    }
  }
  const output1 = reverse + ' ' + second;
  console.log('first',first);
  console.log('second',second);
  console.log('reverse',reverse);
  console.log('output1',output1);

  // merge two object

  const obj1: any = {
    name: "Ajith",
    age: 25
  };
  
  const obj2: any = {
    age: 30,
    city: "Chennai"
  };

  let merge: any ={}; 
  
  for(let i in obj1) {
    merge[i] = obj1[i];
  }

  for(let i in obj2) {
    merge[i] = obj2[i];
  }

  console.log('merge',merge);

  // Reverse the whole sentence
  const wordsArr = sentence.split(" ");
  let reversedSentence = "";

  for (let i = wordsArr.length - 1; i >= 0; i--) {
    reversedSentence += wordsArr[i];
    console.log('i',i);
    if (i !== 0) reversedSentence += " "; // add space between words
  }

  console.log(reversedSentence);
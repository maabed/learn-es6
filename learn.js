let name = 'Mohamed';
let condition = true; // false
let undef = undefined;
let array = ['Sara', '22', false, undef]
let obj = {
  name: 'Salah',
  age: 25,
}



// document.write(sum + '<br>');

// let student = {
//   name: 'Ahmad',
//   age: 25,
//   adderss: '123 AMM'
// }
// let arr = [11, 4, 5, 100, 2, 22, 45];

// for(index in arr) {
//   console.log(index);
//   console.log(arr[index]);
// }


// ==================== forEach ======================== //
// let numbers = [5, 7, 1, 9, 8, 5];
// let oddNumbers = [];
// let eventNumbers = [];
 
// let results = numbers.forEach((value, idx) => {
//   console.log(value)
//   if (value % 2) {
//     oddNumbers.push(value);
//   } else {
//     eventNumbers.push(value);
//   }
// });

// ==================== map ======================== //
// const numbers = [2, 4, 8, 10];
// const halves = numbers.map((x, idx) => {
//   return x / 2;
// });
// console.log(halves);

// ================== map vs forEach ===================== //
// The main difference that you need to know is .map() returns a new array while .forEach() doesn't. That is why you see that difference in the output. .forEach() just operates on every value in the array.

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((num, index) => {
//   return arr[index] = num * 2;
// });
// arr = [2, 4, 6, 8, 10]
// let doubled = arr.map(num => {
//   return num * 2;
// });

// doubled = [2, 4, 6, 8, 10]

// ===================== filter ======================= //
// halves is [1, 2, 4, 5]
// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// const longWords = words.filter((word) => { 
//   return word.length < 6
// });
// // longWords is ["exuberant", "destruction", "present"]
// console.log(longWords)

let data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];

// ==================== reduce ======================== //


// const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
// let objResult = data.reduce((sum, i) => sum + i.age, 0);
// console.log(objResult/data.length);

// let numArry = [1, 4, 6, 8];  // sum = 11 +8 = 19
// let result = numArry.reduce((sum, value) =>  sum + value);
// console.log(result/numArry.length);

// ===================== every =======================//

// [12, 5, 8, 130, 44].every(x => x >= 10); // false
// [12, 54, 18, 130, 44].every(x => x >= 10); // true


// ==================== findIndex ========================//

// const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

// const index = fruits.findIndex(x => x === "blueberries");

// console.log(index); // 3
// console.log(fruits[3]); // blueberries

// ====================== Chaines ======================//  

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.map(num => num * 2)
//               .filter(num => num > 5)
//               .findIndex((x) =>  x === 8);

// console.log(arr2);


// arr2 = [6, 8, 10]

// Note
// let numArry = [1, 4, 6, 8];
// let total = 0

// for (let i = 0; i < numArry.length; total += numArry[i++]);


// testing merge conflicts 
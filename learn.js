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
let numbers = [5, 7, 1, 9, 8, 5];
 
numbers.forEach((value, idx) => {
  if (value % 2) {
    console.log('odd');
  } else {
    console.log('even');
  }
});

// ==================== map ======================== //
// const numbers = [2, 4, 8, 10];
// const halves = numbers.map(x => x / 2);

// ================== map vs forEach ===================== //
// The main difference that you need to know is .map() returns a new array while .forEach() doesn't. That is why you see that difference in the output. .forEach() just operates on every value in the array.

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((num, index) => {
//   return arr[index] = num * 2;
// });
// // arr = [2, 4, 6, 8, 10]
// let doubled = arr.map(num => {
//   return num * 2;
// });

// doubled = [2, 4, 6, 8, 10]

// ===================== filter ======================= //
// halves is [1, 2, 4, 5]
// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// const longWords = words.filter(word => word.length > 6);
// // longWords is ["exuberant", "destruction", "present"]

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
// let objResult = data.reduce((a, i) =>  a + i.age, 0);
// console.log(objResult/data.length);

// let numArry = [1, 4, 6, 8];
// let result = numArry.reduce((a, i) =>  a + i);
// console.log(result);

// ===================== every =======================//
// [12, 5, 8, 130, 44].every(x => x >= 10); // false
// [12, 54, 18, 130, 44].every(x => x >= 10); // true


// ==================== findIndex ========================//

// const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

// const index = fruits.findIndex(fruit => fruit === "blueberries");

// console.log(index); // 3
// console.log(fruits[index]); // blueberries

// ====================== Chaines ======================//  

// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.map(num => num * 2).filter(num => num > 5);
// arr2 = [6, 8, 10]

// Note
// let numArry = [1, 4, 6, 8];
// let total = 0
// for (let i = 0; i < numArry.length; total += numArry[i++]);
// console.log(total)



// testing merge conflicts 
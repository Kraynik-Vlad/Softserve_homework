// task 1
const a = 4;
const b = 5;
const c = 6;  
if (a < b && b < c) {
  console.log("a < b < c");
} else {
  console.log("loss");
}

// task 2
let x = 1;
let y = 2;

let res1 = x.toString() + y.toString();// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x).toString() + y.toString();// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(y - x);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = "string" / x / y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

//task 3
let isAdult = prompt("Введіть ваш вік!");
if (isAdult  >= 18){
    console.log("Ви досягли повнолітнього віку");
}else console.log("Ви ще надто молоді");

//task 4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let data; // 5
let count = 0;
let maxCount = 0;

for (let i = 0; i < arr.length; i++) {
  count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    data = arr[i];
  }
}
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== data) {
    newArr.push(arr[i]);
  }
}

arr = newArr;

console.log(arr) // [4, 2, 1, 6, 3, 2]
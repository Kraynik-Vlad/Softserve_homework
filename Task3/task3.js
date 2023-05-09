// task 1
/*
Написати функцію createArray(start, end), 
яка приймає на вхід 2 параметри:
- початкове значення
- кінцеве значення
а на виході отримує масив із діапазоном цих значень 
(реалізувати достатньо лише із числовими значеннями)
*/
function createArray(start, end){
    let res = [];
    for(let i = start; i <= end; i++){
        res.push(i);
    }
    return res;
}

let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]

// task 2
/*  
2.
Задані цілі числа a і b (a < b). 
Виведіть усі цілі числа від a до b включно, 
при цьому a виводится 1 раз, число а+1 - два рази і т.д.
// 1,2,2,3,3,3...
*/
function task2(a, b){
    let res = [];
    for (let i = a; i <= b; i++) {
        for (let j = 0; j < i - a + 1; j++) {
            res.push(i);
        }
    }
    return res;
}
let arr2 = task2(1, 10);
console.log(arr2);

// task 3
/*
3. 
Напишіть функцію randArray(k), 
яка заповнюватиме масив k випадковими цілими числами.
Випадкові числа генеруються із діапазону 1-500.
randArray(5);  // [399,310,232,379,40]
*/
function randArray(k){
    let res = [];
    for(let i = 0; i < k; i++){
        res.push(Math.floor(Math.random() * 500) + 1);
    }
    return res;
}
let arr3 = randArray(5);
console.log(arr3);

//task 4
/*
4.
Написати функцію compact() яка має приймати на вхід масив,
а на вихід має повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]
*/

function compact(array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
      if (!result.includes(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
}
let array = [5, 3, 4, 5,6,7,3,5,5,5,5,5,5,100,101,102];
console.log(compact(array));

// task 5
/*
Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”],
 “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із 
даних початкового масиву, але одного типу даних 
(не приводити тип стрінг в число навіть якщо там лише число)
let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, 
    “text”], “strong”, “broun”];
let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/

function separateArray(arr5) {
    const numArr = arr.filter(el => typeof el === 'number');
    const strArr = arr.filter(el => typeof el === 'string');
    
    const nestedArr = numArr.map(el => Array.isArray(el) ? el.filter(e => typeof e === 'number') : el);
    const flattenedNumArr = nestedArr.reduce((acc, curr) => acc.concat(curr), []);
    
    return [flattenedNumArr, strArr];
}
let arr5 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];  
console.log(separateArray(arr5));

//
/*
6.
Напишіть функцію calc(a, b, op), 
яка виконує над числами a і b одну із арифметичних операцій та повертає її результат.
Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, 
інші значення – додавання.
calc(10, 3, 1); // => 7
*/
function calc(a, b, op){
    if (op === 1){
        console.log(a - b);
    }
    else if (op === 2){
        console.log(a + b);
    }
    else console.log(a*b);
}

//
/*
7. 
Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
  }
  console.log(findUnique([1, 2, 3, 5, 3]));
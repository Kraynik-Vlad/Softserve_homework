/*
Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().

Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище. Підключіть створений файл до HTML-документу.

a) оголосіть дві змінні;
 b) запишіть у змінні будь-які значення;
 c) виведіть на екран значення змінних;
 d) скопіюйте значення однієї змінної в іншу;
 e) виведіть на екран значення змінних.

Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.

Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.

В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
ваше ім’я
ваше прізвище
навчальна група
ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану.
Визначте тип кожної змінної. 
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String. 
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.

За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
 */

alert("Kraynik");
let a;
let b;
a = 10;
b = 20;
console.log(a, b);
a = b;
console.log(a, b);

let object = {
    String: "Hello, world!",
    Number: "28",
    Boolean: true,
    Undefined: undefined,
    null: null
};
console.log(object);

let isAdult = confirm("Ви досягли повнолітнього віку?");
console.log("Користувач підтвердив, що досяг повнолітнього віку:",isAdult);

let name = "Vlad";
let surname = "Kraynik";
let group = "js_fundamentals";
let birthday = 28;
let married = false;
console.log(typeof(name));
console.log(typeof(surname));
console.log(typeof(group));
console.log(typeof(birthday));
console.log(typeof(married));
console.log(birthday);
console.log(married);
console.log(name, surname, group);
let myUndefined = undefined;
let myNull = null;
console.log(typeof(myUndefined), typeof(null));

let login = prompt("Write login");
let email = prompt("Write email");
let password = prompt("Write password");
console.log("Dear User, your email is: ", email, ", your password is: ", password);


const secondsPerHour = 60 * 60;
console.log(`Кількість секунд в годині: ${secondsPerHour}`);
const secondsPerDay = secondsPerHour * 24;
console.log(`Кількість секунд в добі: ${secondsPerDay}`);
const secondsPerMonth = secondsPerDay * 30; 
console.log(`Кількість секунд в місяці: ${secondsPerMonth}`);


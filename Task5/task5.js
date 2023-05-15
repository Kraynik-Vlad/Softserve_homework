// task 1
/*
1. 
Напишіть клас Круг та реалізуйте функціонал:
 - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
 - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
 - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
 - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
 - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
 - Визначте метод перевірки попадання крапки до кола;
 - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).

*/

class Circle {
    constructor (x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    getCircumference(){
        let Circumference = 2 * Math.PI * this.radius;
        return Circumference;
    }
    static getCircumferenceWithRadius(radius){
        let CircumferenceWithRadius = 2 * Math.PI * radius;
        return CircumferenceWithRadius;
    }
    getObjCircle(){
        let Circle1 = new Circle(this.x, this.y, this.radius)
        return Circle1;
    }
    static createCircle(x, y, radius){
        let Circle2 = new Circle(x, y, radius)
        return Circle2;
    }
    isPointInCircle(x, y) {
        let distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
        return distance <= this.radius;
    }
    toString() {
        return `Circle { x: ${this.x}, y: ${this.y}, radius: ${this.radius} }`;
    }
}

// task 2
/*
2. 
Напишіть функцію propsCount(currentObject), яка приймає об’єкт і 
визначає кількість властивостей цього об’єкта.
Наприклад:
 let mentor = { 
            course: "JS fundamental", 
            duration: 3,
            direction: "web-development" 
        };
propsCount(mentor);  // 3
*/
function propsCount(currentObject){
    let count = Object.keys(currentObject);
    return count;
}

// task 3
/*
3. 
Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
 - Від класу Person наслідується клас Student, конструктор якого крім name і surname, 
    приймає параметр year (рік вступу до університету). 
 - В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, 
    прізвище, але і по-батькові (midleName) студента. 
 - Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
Приклад результату:
const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
*/

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(name, surname){
        console.log('Name is: %s . Surname is: %s', this.name, this.surname);
    }
}
 
class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName){
        return `${this.surname} ${this.name} ${midleName}`;
    }
    showCourse(){
        let nowYear = new Date().getFullYear();
        let course = nowYear - this.year + 1;
        return course;
    }
}
const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName('Petrovych'));
console.log("Course is:" + stud1.showCourse());

// task 4
/*
4. 
А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
 - поле, яке зберігає колір маркера;
 - поле, яке зберігає кількість чорнила в маркері (у відсотках);
 - метод друку (метод приймає рядок і виводить текст відповідним кольором;
 текст виводиться до тих пір, поки в маркері є чорнило;
 один не пробіловий символ – це 0,5% чорнила в маркері).
В. Реалізувати клас, що описує маркер, що заправляється, 
успадкувавши його від простого маркера і додавши метод для заправки маркера. 
Продемонструвати роботу написаних методів
*/

class Marker{
    constructor(color, ink ){
        this.color = color;
        this.ink  = ink;
    }
    print(text) {
        let printedText = '';
        for (let i = 0; i < text.length; i++) {
          if (this.ink <= 0) {
            break;
          }
          if (text[i] !== ' ') {
            printedText += text[i];
            this.ink -= 0.5;
          } else {
            printedText += ' ';
          }
        }
        console.log('%c' + printedText, 'color:' + this.color);
      }
}

class MegaMarker extends Marker{
    refill(inkAmount) {
        if (this.ink + inkAmount <= 100) {
          this.ink += inkAmount;
          console.log('Маркер був успішно заправлений.');
        } else {
          console.log('Занадто багато чорнила. Маркер не може вмістити стільки.');
        }
    }
}
const marker1 = new Marker('blue', 50);
marker1.print('Hello, world!');

const marker2 = new MegaMarker('green', 70);
marker2.print('This is a refillable marker');
marker2.refill(30);
marker2.print('refillable marker');

// task 5
/*
5.
Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), 
dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
    1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. 
    Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
    2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як 
    додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). 
    Вивести значення зарплати з цим коефіцієнтом.
    3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
    4) Вивести значення зарплати з новим experience.
    5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. 
    Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
    6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
Example usage:
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
. . . . . .

let worker3 = new Worker("Andy Ander", 29, 23);
. . . . . .
*/
class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._experience = 1.2;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this._experience;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  get experience() {
    return this._experience;
  }

  set experience(value) {
    this._experience = value;
  }

  static compareSalary(workerA, workerB) {
    const salaryA = workerA.dayRate * workerA.workingDays * workerA._experience;
    const salaryB = workerB.dayRate * workerB.workingDays * workerB._experience;

    if (salaryA < salaryB) {
      return -1;
    } else if (salaryA > salaryB) {
      return 1;
    } else {
      return 0;
    }
  }
}

// Приклад використання

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
// ...
let worker3 = new Worker("Andy Ander", 29, 23);
// ...

console.log("\nSorted salary:");
const workers = [worker1, worker2, worker3];
workers.sort(Worker.compareSalary);
workers.forEach((worker) => {
  const salary = worker.dayRate * worker.workingDays * worker.experience;
  console.log(`${worker.fullName}: ${salary}`);
});









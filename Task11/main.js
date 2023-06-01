//task 1

function getPromise(message, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(message);
    }, delay);
  });
}

//task2
function calcArrProduct(arr) {
  return new Promise(function(resolve, reject) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'number') {
        reject("Error! Incorrect array!");
        return;
      }
      product *= arr[i];
    }
    resolve(product);
  });
}

//task3
new Promise(function (resolve, reject) {
    let number = prompt("Enter a number:");
    if (isNaN(number)) {
        reject();
      } else {
        resolve(number);
    }
 }).catch(function (error) {
    return new Promise(function (resolve, reject) {
       function askNumber() {
        let number = prompt("Please enter a number:");
  
        if (isNaN(number)) {
          askNumber();
        } else {
          resolve(number);
        }
      }
  
      askNumber();
    });
 }).then(function (result) {
    console.log(result);
 });

//task4
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

async function showNumbers() {
  for (let i = 0; i <= 9; i++) {
    const randomTime = Math.random() * 3000; 
    await delay(i, randomTime);
    console.log(i);
  }
}

showNumbers();
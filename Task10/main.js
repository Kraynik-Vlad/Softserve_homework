//task1
let names = {
first: "Tom",
second: "Sam",
third: "Ray",
fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f); 
console.log(x); 
console.log(fifth); 

//task2
let data = {
names: ["Sam", "Tom", "Ray", "Bob"],
ages: [20, 24, 22, 26],
};

let { names: [ , name2, , name4], ages: [ , age2, , age4] } = data;

console.log(name2); 
console.log(age2); 
console.log(name4); 
console.log(age4); 

//task3
function mul(...params) {
  let result = 1;
  let hasNumber = false;

  for (let param of params) {
    if (typeof param === 'number') {
      result *= param;
      hasNumber = true;
    }
  }

  return hasNumber ? result : 0;
}

console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

//task4
function mapBuilder(keysArray, valuesArray) {
  let map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }
  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size);
console.log(map.get(2)); 

//task5

var arr = [];

for (var i = 0; i <= 2; i++) {
  arr[i] = (function (num) {
    return function () {
      console.log(num);
    };
  })(i);
}

arr[0](); 
arr[arr.length - 1]();
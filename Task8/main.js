//Task8_1
function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
      return "String starts with an uppercase character";
    } else {
      return "String does not start with an uppercase character";
    }
  }
  
  console.log(upperCase('regexp')); 
  console.log(upperCase('RegExp')); 

//task8_2

function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
}
  
console.log(checkEmail("Qmail2@gmail.com"));

//task8_3
function swapSubstrings(input, substring1, substring2) {
    const regex = new RegExp(`(${substring1})(.*)(\\s)(${substring2})`);
    const output = input.replace(regex, "$4, $2");
    return output;
}
  
const inputString = "Java Script";
const outputString = swapSubstrings(inputString, "Java", "Script");
console.log(outputString); 

//task8_4
function validateCreditCardNumber(cardNumber) {
    const regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    return regex.test(cardNumber);
}
  
console.log(validateCreditCardNumber("1234-5678-9012-3456"));
console.log(validateCreditCardNumber("1234-5678-9012"));
console.log(validateCreditCardNumber("1234567890123456")); 

//task8_5
function checkEmail(email) {
  const regex = /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
  if (regex.test(email)) {
    return "Email is correct!";
  } else {
    return "Email is not correct!";
  }
}
  
console.log(checkEmail('my_mail@gmail.com')); 

//task8_6
function checkLogin(login) {
  const regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
  const numbers = login.match(/[0-9]+(\.[0-9]+)?/g);
  
  if (regex.test(login)) {
    console.log("Login is correct!");
    if (numbers !== null) {
      console.log("Numbers found: " + numbers.join(', '));
    } else {
      console.log("No numbers found.");
    }
    return true;
  } else {
    console.log("Login is not correct!");
    return false;
  }
}
  
checkLogin('ee1.1ret3');

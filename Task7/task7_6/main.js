/*
Реалізуйте програму, 
яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера 
і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
*/

function updateWindowSize() {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
    let sizeElement = document.getElementById("size");
    sizeElement.textContent = "Ширина: " + width + ", Висота: " + height;
}
  
updateWindowSize();
  
window.addEventListener("resize", updateWindowSize);
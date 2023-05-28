/*
напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і 
змінюватиме стиль вмісту тега <p>:
 колір шрифту – оранжевий,
 розмір шрифту 20px,
 шрифт сімейства "Comic Sans MS".
*/
function changeCSS(){
    let p = document.getElementById('text');
    p.style.color = 'orange';
    p.style.fontSize = '20px';
    p.style.fontFamily = 'Comic Sans MS';
}

let button = document.querySelector('button');
button.addEventListener('click', changeCSS);
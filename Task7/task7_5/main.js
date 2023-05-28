/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", 
при наведенні на кнопку виводитиме повідомлення "Mouse on me!", 
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
*/

let button = document.getElementById('button');
let message = document.getElementById('message');

button.addEventListener('click', function(){
    let pElem_1 = document.createElement('p');
    pElem_1.textContent = 'I was pressed!';
    message.appendChild(pElem_1);
});
button.addEventListener('mouseover', function(){
    let pElem_2 = document.createElement('p');
    pElem_2.textContent = 'Mouse on me!';
    message.appendChild(pElem_2);
});
button.addEventListener('mouseout', function(){
    let pElem_3 = document.createElement('p');
    pElem_3.textContent = 'Mouse is not on me!';
    message.appendChild(pElem_3);
});


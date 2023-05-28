/*
1-ша кнопка – при кліку на неї колір 
 фону сторінки міняється на синій
2-га кнопка – при подвійному кліку на неї
 колір фону сторінки міняється на рожевий
3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. 
При відпусканні – білий.
При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
*/
let button_bl = document.getElementById('button_bl');
button_bl.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue';
});

let button_pink = document.getElementById('button_pink');
button_pink.addEventListener('dblclick', function(){
    document.body.style.backgroundColor = 'pink';
});

let button_colful = document.getElementById('button_colful');
button_colful.addEventListener('mousedown', function(){
    document.body.style.backgroundColor = 'brown';
});

button_colful.addEventListener('mouseup', function(){
    document.body.style.backgroundColor = 'white'
});

let link = document.getElementById('link');
link.addEventListener('mouseover', function(){
    document.body.style.backgroundColor = 'yellow';
});
link.addEventListener('mouseout', function(){
    document.body.style.backgroundColor = 'white';
});
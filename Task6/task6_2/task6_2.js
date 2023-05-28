let header = document.querySelector("h1");
header.style.backgroundColor = "#99ee00";

let myDiv = document.querySelectorAll("#myDiv p");
let styleParams = ['font-weight: bold;', 'color:red;', 'text-decoration: underline;', "font-style: italic;"];
myDiv.forEach((item, index)=>{
  item.style = styleParams[index];
})

let myList = document.getElementById('myList');
myList.style = 'display:flex; list-style: none;'

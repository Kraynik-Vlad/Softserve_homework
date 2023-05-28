document.addEventListener('DOMContentLoaded', function() {
    let btn = document.querySelector('.btn');
    let outBlock = document.querySelector('.out');
    let inputForm = document.querySelectorAll('.arr');
  
    btn.addEventListener('click', function() {
      outBlock.innerHTML = '';
  
      inputForm.forEach(function(element) {
        let label = element.getAttribute('data-form');
        let value = element.value;
        outBlock.innerHTML += `${label}: ${value}<br>`;
      });
    });
  });
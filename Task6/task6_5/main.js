const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  const animValue = circle.getAttribute('data-anim');
  circle.classList.add(animValue);
});

circles.forEach(circle => {
  const appliedAnimations = circle.classList;
  console.log(appliedAnimations);
});
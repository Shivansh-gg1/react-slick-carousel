let stars = document.getElementById('stars');
let mountains_behind = document.getElementById("mountains_behind");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
let nav = document.querySelector('nav');
window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  mountains_behind.style.top = value * 0.2  + "px";  
  mountains_front.style.top = value * 0.1 + "px";
  btn.style.marginTop = value * 1.5 + "px";
  nav.style.Top = value * 0.5 + "px";
});
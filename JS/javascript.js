var loader_bg = document.querySelector(".loader_bg")
window.addEventListener("load", arslan);
function arslan(){
  loader_bg.classList.add("disappear");
}


window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}


AOS.init({
    duration: 1200,
});
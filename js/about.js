//sidebar

const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');

toggle_btn.onclick = function() {
    nav.classList.toggle('hide');
};

//navbar-m

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
//slider

var myIndex=0;
slider();

function slider() {
    var i;
    var x = document.getElementsByClassName("sliderImg");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slider, 4000); // Change image every 2 seconds
}

//sidebar

const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');

toggle_btn.onclick = function() {
    nav.classList.toggle('hide');
};

//navbar-m

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navItem = document.getElementById("item-a");

navItem.addEventListener('click', function(){
  navMenu.classList.toggle('active');
});

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//Fade in Animation

const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry);
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>{
  observer.observe(el);
})
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

//gallery-filter

const filterButtons = document.querySelectorAll('.filter-buttons button');
const filteredCards = document.querySelectorAll('.filtered-cards .card');

const filterCards = e =>{
    document.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");

    filteredCards.forEach(card =>{

        card.classList.add("hide");
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name==="all"){
            card.classList.remove("hide");
        }
    });

}

filterButtons.forEach(button =>button.addEventListener("click",filterCards));

//Image Modal
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}

//Slider Modal

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
  }
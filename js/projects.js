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
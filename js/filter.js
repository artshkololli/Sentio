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

//Slider Modal

const sliders = document.querySelectorAll(".slider");

for (let i = 0; i < sliders.length; i++) {
  
  firstImg = sliders[i].querySelectorAll(".slider img")[0];
  let isDragStart = false , isDragging=false , prevPageX , prevScrollLeft , positionDiff;
  let firstImgWidth = firstImg.clientWidth;

  const autoSlide = () =>{
    if(sliders[i].scrollLeft == (sliders[i].scrollWidth - sliders[i].clientWidth)) return;
  
    positionDiff=Math.abs(positionDiff);
    let firstImgWidth=firstImg.clientWidth;
    let valDifference=firstImgWidth - positionDiff;
  
    if(sliders[i].scrollLeft > prevScrollLeft){
      return sliders[i].scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    sliders[i].scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
  }
  
  const dragStart = (e) =>{
    isDragStart=true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft=sliders[i].scrollLeft;
  }
  
  const dragStop = () =>{
    isDragStart=false;
    if(!isDragging){
      return;
    }
    isDragging=false;
    autoSlide();
  }
  
  const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    isDragging=true;
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    sliders[i].scrollLeft = prevScrollLeft - positionDiff;
  }
  
  sliders[i].addEventListener("mousedown",dragStart);
  sliders[i].addEventListener("touchstart",dragStart);
  
  sliders[i].addEventListener("mousemove",dragging);
  sliders[i].addEventListener("touchmove",dragging);
  
  sliders[i].addEventListener("mouseup",dragStop);
  sliders[i].addEventListener("mouseleave",dragStop);
  sliders[i].addEventListener("touchend",dragStop);
}

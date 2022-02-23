// ======== show menu ==============
const navToggle = document.getElementById('nav-toggle')
const navMenu = document.getElementById('nav-menu')
const navclose = document.getElementById('nav-close')

if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navclose){
  navclose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

var swiper = new Swiper(".discover-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop:true,
  spaceBetween:32,
  coverflowEffect: {
    rotate: 0,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  },
});


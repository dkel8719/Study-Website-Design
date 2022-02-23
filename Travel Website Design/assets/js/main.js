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

// ================== swiper ===================== 
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

// ===================== video ========================
const videoFile = document.getElementById('video-file')
const videoButton = document.getElementById('video-button')
const videoIcon = document.getElementById('video-icon')

function playVideo(){
  if(videoFile.paused){
    videoFile.play();
    videoIcon.classList.add('ri-pause-line')
    videoIcon.classList.remove('ri-play-line')
  } else {
    videoFile.pause();
    videoIcon.classList.remove('re-pause-line')
    videoIcon.classList.add('ri-play-line')
  }
}

videoButton.addEventListener('click', playVideo)

function endedVideo(){
  videoIcon.classList.remove('ri-pause-line');
  videoIcon.classList.add('ri-play-line');
}

videoFile.addEventListener('ended', endedVideo)
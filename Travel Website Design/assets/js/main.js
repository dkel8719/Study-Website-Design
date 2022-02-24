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

// ================= remove menu ========================
const navLink =document.querySelectorAll('.nav-link')

navLink.forEach(link => link.addEventListener('click', () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}))

// ===================== scroll event =========================== 
// ===================== active link color =====================
const sections = document.querySelectorAll('section[id]')

function activeLink(){
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionTop = current.offsetTop - 1 
    const sectionHeight = current.offsetHeight;
    const sectionId = current.getAttribute('id')

    if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
      document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add('active-link')
    } else {
      document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove('active-link')
    }

    console.log(scrollY)
    console.log(sectionTop)
    console.log(sectionHeight)
    console.log(sectionId)
  
  })
}

window.addEventListener('scroll', activeLink)

// ================= change background header ==================
function scrollHeader(){
  const header = document.getElementById('header')
  
  if(this.scrollY >= 100){
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader)

// ==================== show scroll up =======================
function showScrollUp(){
  const scrollUp = document.getElementById('scroll-up')
  if(this.scrollY >= 200){
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}

window.addEventListener('scroll', showScrollUp)

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



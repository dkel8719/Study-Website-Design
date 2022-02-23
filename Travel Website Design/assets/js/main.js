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


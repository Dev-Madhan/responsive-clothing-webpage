/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

// Menu show
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add("show-menu")
    })
}

// Menu Hidden

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link")

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    // When we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper('.home-swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768:{
            slidesPerView: 3,
            centeredSlides: 'auto',
        },
        1152:{
            centeredSlides: 'auto',
            spaceBetween: -64,
        }
    }
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    // reset: true
})

sr.reveal(`.home-swiper, .home-footer`)
sr.reveal(`.home-circle`,{scale: 1.5, delay: 300})
sr.reveal(`.home-subcircle`,{scale: 1.5, delay: 500})
sr.reveal(`.home-title`,{scale: 1, origin: 'bottom', delay: 1200})
sr.reveal(`.swiper-button-prev, .swiper-button-next`,{origin: 'bottom', delay: 1200})
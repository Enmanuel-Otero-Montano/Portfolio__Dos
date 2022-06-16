const menu = document.getElementById("menu")
const hamburger = document.querySelectorAll(".hamburger-menu")
const nav = document.querySelector(".nav")
const inputSun = document.querySelector(".sun")
const inputMoon = document.querySelector(".moon")
const switchMode = document.querySelector(".switch")
const body = document.querySelector("body")
const overlay = document.querySelector(".body-overlay")
const navLinks = document.querySelectorAll(".nav-links")
const comingSoon = document.querySelectorAll(".coming-soon")
const logo = document.querySelector(".logo-container")
const yellowIcon = document.querySelectorAll(".yellow-icon")
const projectImages = document.querySelectorAll(".project-images")
const projectImagesContainer = document.querySelector(".container-presentation-image")

menu.addEventListener("click", ()=> {
    if(window.matchMedia("(min-width: 1024px)").matches){
        overlay.classList.toggle("body-overlay-show")
    }else{
        hamburger[0].classList.toggle("top")
        hamburger[1].classList.toggle("middle")
        hamburger[2].classList.toggle("botton")
        nav.classList.toggle("nav-hidden")
        overlay.classList.toggle("body-overlay-show")
    }
})

inputMoon.addEventListener("click", ()=> {
    if(inputMoon.checked == true)
    inputMoon.hidden = true
    inputSun.hidden = false
    body.classList.add("dark")
    for(const icon of yellowIcon){
        icon.classList.add("yellow-icon-dark")
    }
})

inputSun.addEventListener("click", ()=> {
    if(inputSun.checked == true)
    inputSun.hidden = true
    inputMoon.hidden = false
    body.classList.remove("dark")
    for(const icon of yellowIcon){
        icon.classList.remove("yellow-icon-dark")
    }
})

for(const navLink of navLinks) {
    navLink.addEventListener("click", ()=> {
        hamburger[0].classList.remove("top")
        hamburger[1].classList.remove("middle")
        hamburger[2].classList.remove("botton")
        nav.classList.add("nav-hidden")
        overlay.classList.remove("body-overlay-show")
    })
}

logo.addEventListener("click", ()=>{
    logo.classList.add("logo-container-hidden")
})

/* Functions */

setInterval(() => {
    comingSoonAnimation()
    projectImagesSlide()
    console.log(counterImage)
}, 3000);

const comingSoonAnimation = ()=> {
    for(const early of comingSoon) {
        early.classList.toggle("coming-soon-showing")
        early.nextElementSibling.classList.toggle("overlay-coming-soon-hidden")
    }
}

const projectImagesArray = Array.from(projectImages)

const numberOfImages = {
    class: "project-images-slide-first",
}

let counterImage = 0

const projectImagesSlide = ()=> {
    counterImage = ++counterImage
    if(counterImage === 1) {
        numberOfImages.class = "project-images-slide-first"
        projectImagesArray.forEach(element => element.classList.add(`${numberOfImages.class}`))
    }else if(counterImage === 2) {
        numberOfImages.class = "project-images-slide-second"
        projectImagesArray.forEach(element => element.classList.add(`${numberOfImages.class}`))
    }else if (counterImage > 2) {
        counterImage = 0
        projectImagesArray.forEach(element => element.classList.remove("project-images-slide-first", "project-images-slide-second"))
    }
}

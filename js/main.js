const menu = document.getElementById("menu")
const hamburger = document.querySelectorAll(".hamburger-menu")
const nav = document.querySelector(".nav")
/* const onOff = document.querySelector(".on-off")
const musicalLyrics = document.querySelector(".musical-lyrics") */
const inputSun = document.querySelector(".sun")
const inputMoon = document.querySelector(".moon")
const switchMode = document.querySelector(".switch")
const body = document.querySelector("body")
const overlay = document.querySelector(".body-overlay")
const heroName = document.querySelector(".hero__name-hidden")
const navLinks = document.querySelectorAll(".nav-links")
const comingSoon = document.querySelectorAll(".coming-soon")
const navContactLogo = document.querySelectorAll(".nav-contact-logo")


menu.addEventListener("click", ()=> {
    hamburger[0].classList.toggle("top")
    hamburger[1].classList.toggle("middle")
    hamburger[2].classList.toggle("botton")
    nav.classList.toggle("nav-hidden")
    overlay.classList.toggle("body-overlay-show")
    setTimeout(() => {
        showNavLogo()
    }, 1150);
    
})

/* onOff.addEventListener("click", ()=> {
    if(onOff.textContent == "off") {
        onOff.textContent = "on"
        musicalLyrics.classList.add("musical-lyrics-active")//Transicion a la letra musical
        setTimeout(() => {
            re()
        }, 250);
    }else{
        onOff.textContent = "off"
    }
}) */

inputMoon.addEventListener("click", ()=> {
    if(inputMoon.checked == true)
    inputMoon.hidden = true
    inputSun.hidden = false
    body.classList.add("dark")
    switchMode.classList.add("switch-dark")
})

inputSun.addEventListener("click", ()=> {
    if(inputSun.checked == true)
    inputSun.hidden = true
    inputMoon.hidden = false
    body.classList.remove("dark")
    switchMode.classList.remove("switch-dark")
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

document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(()=> {
        showHeroName()
    }, 900)
})

/* Functions */

setInterval(() => {
    comingSoonAnimation()
}, 2500);

//Funcion que interviene en el proceso de cambio de tamaño de la letra musical
/* const re = ()=> {
    musicalLyrics.classList.remove("musical-lyrics-active")
} */

const showNavLogo = ()=> {
    navContactLogo[0].classList.toggle("nav-contact-logo-show")
    navContactLogo[1].classList.toggle("nav-contact-logo-show")
}

const showHeroName = ()=> {
    heroName.classList.remove("hero__name-hidden")
    heroName.classList.add("hero__name")
}

const comingSoonAnimation = ()=> {
    for(const early of comingSoon) {
        early.classList.toggle("coming-soon-showing")
        early.nextElementSibling.classList.toggle("overlay-coming-soon-hidden")
    }
}


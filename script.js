const navbar = document.querySelector("section.nav-bar img")
const nav = document.querySelector("nav")

navbar.addEventListener("click", ()=>{
    const src = navbar.getAttribute("src")

    if(src === "./assets/icons/menu-white.svg"){
        navbar.setAttribute("src", "./assets/icons/close-white.svg")
    }else{
        navbar.setAttribute("src", "./assets/icons/menu-white.svg")
    }

    nav.classList.toggle("active")
})
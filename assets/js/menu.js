let show = true

const menuSection = document.querySelector(".menu-section")
const menuToggle = document.querySelector(".menu-toggle")
const navClose = document.querySelector("ul")



menuToggle.addEventListener("click", () => {
    navClose.addEventListener("click", () => {        
        menuSection.classList.remove("on")
    })
        
    menuSection.classList.toggle("on", show)
    show = !show;
})

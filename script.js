let openMenu = document.getElementById("open")
let closeMenu = document.getElementById("close")
let sidemenu = document.querySelector(".sidemenu")
let gitLink = document.querySelector(".git-link")
let projectCard = document.querySelector(".project-card")

let OpenMenuBar = ()=>{
    sidemenu.style.right = "0"
}

let closeMenuBar = ()=>{
    sidemenu.style.right = "-250px"
}

openMenu.addEventListener("click",()=>{
    OpenMenuBar();
})
closeMenu.addEventListener("click",()=>{
    closeMenuBar();
})

projectCard.addEventListener("mouseover",()=>{
    gitLink.classList.remove("display-none")
})
projectCard.addEventListener("mouseout",()=>{
    gitLink.classList.add("display-none")
})
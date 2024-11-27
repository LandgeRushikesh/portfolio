let openMenu = document.getElementById("open")
let closeMenu = document.getElementById("close")
let sidemenu = document.querySelector(".sidemenu")

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
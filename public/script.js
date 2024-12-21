let openMenu = document.getElementById("open")
let closeMenu = document.getElementById("close")
let sidemenu = document.querySelector(".sidemenu")
let gitLink = document.querySelector(".git-link")
let projectCard = document.querySelectorAll(".project-card")
let see = document.querySelector(".see")
let form = document.querySelector("form")

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
for(let i=3;i<projectCard.length;i++){
    projectCard[i].style.display = "none"
}
see.addEventListener("click",()=>{
    if(see.classList.contains("see-less")){
        for(let i=3;i<projectCard.length;i++){
            projectCard[i].style.display = "none"
        }
        see.innerText = "See More"
        see.classList.remove("see-less");
    }
    else{
        for(let i=3;i<projectCard.length;i++){
            projectCard[i].style.display = "grid"
        }
        see.innerHTML = `<a href="#Project-sec">See Less</a>`
        see.classList.add("see-less");
    }
})

// Form submission 
let confirmationMsg = document.querySelector(".confirmation-msg")

confirmationMsg.style.display = "none";


form.addEventListener("submit",(event)=>{
    event.preventDefault()

    confirmationMsg.style.display = "block"

    setTimeout(()=>{
        confirmationMsg.style.display = "none"
        form.reset();
    },5000)
})
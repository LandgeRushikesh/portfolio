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

// Scroll effect
let logos = document.querySelectorAll(".logo")

// Add an event listener to detect when the user scrolls the page
document.addEventListener("scroll", () => {
    for (let logo of logos) {
        // Get the vertical position of the logo relative to the document
        let logoTop = logo.offsetTop;

        // Get the height of the logo element
        let logoHeight = logo.offsetHeight;

        // Calculate the position of the bottom edge of the viewport
        let windowBottom = window.scrollY + window.innerHeight;

        // Check if any part of the logo is within the visible viewport
        if (windowBottom > logoTop && window.scrollY < logoTop + logoHeight) {
            logo.classList.add("visible");
        } else {
            logo.classList.remove("visible");
        }
    }
});


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
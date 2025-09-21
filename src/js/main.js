/* Your JS here. */
console.log('Hello World!')


window.addEventListener("scroll", function(){
    const navbar = document.getElementById("navbar");
    if(window.scrollY > 70){
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

const open = document.querySelectorAll(".openModal");
const close = document.querySelectorAll(".close");

open.forEach(btn => {
    btn.addEventListener("click", () => {
        const ID = btn.getAttribute("data-target");
        document.getElementById(ID).style.display = "flex";
    });
});


close.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.style.display = "none";
    });
});

window.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        e.target.style.display = "none"
    }
});
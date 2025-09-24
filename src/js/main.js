/* Your JS here. */
console.log('Hello World!')

//current section code
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#navbar a');
    const sections = Array.from(links).map(link => document.querySelector(link.getAttribute('href')));

    function highlightcurr(){
        const pos = window.scrollY + document.getElementById('navbar').offsetHeight + 1; 

        let currindx = 0; 
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
            currindx = sections.length - 1;
        }  else{

         for(let i = 0; i < sections.length; i++){
            const top = sections[i].offsetTop;
            const height = sections[i].offsetHeight;

            if(pos >= top && pos < top + height){
                currindx = i; 
                break;
            }
        }
    }
        links.forEach(link => link.classList.remove('active'));
        links[currindx].classList.add('active');

    }
    window.addEventListener('scroll', highlightcurr);
    highlightcurr();
});


//helps shrink navbar when scrolling down
window.addEventListener("scroll", function(){
    const navbar = document.getElementById("navbar");
    if(window.scrollY > 70){
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});



//carousel
const slides = document.querySelector('.carousel .slides');
const slideImages = document.querySelectorAll('.carousel .slides img');
const prev = document.querySelector('.carousel .prev');
const next = document.querySelector('.carousel .next');

let ind = 0; 
const total = slideImages.length;

function show(index){
    if(index < 0) ind = total - 1; 
    else if (index >= total) ind = 0; 
    else ind = index; 

    slides.style.transform = `translateX(-${ind * 100}%)`;
}


//modal
prev.addEventListener('click', () => show(ind - 1));
next.addEventListener('click', () => show(ind + 1));

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
        const modal = btn.closest(".modal");
        modal.style.display = "none"
        
        document.body.style.filter = "brightness(1)";
    });
});

window.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        e.target.style.display = "none"
    }
});
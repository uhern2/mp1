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
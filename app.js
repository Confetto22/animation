const menuEl = document.querySelector(".mobile-menu-img");
const menuWindowEl = document.querySelector(".slide-menu");
const closeButtonEl = document.querySelector(".close-button");


function menuAnimate() {
    menuEl.addEventListener("click", function () {
        menuWindowEl.classList.toggle("slide-in");
    })
}

function closeFunction() {
    closeButtonEl.addEventListener("click", function () {
        menuWindowEl.classList.remove("slide-in");
    });
}
closeFunction();
menuAnimate();
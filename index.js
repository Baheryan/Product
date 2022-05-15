//buttonMenu click animation

var buttonMenu = document.getElementById("buttonMenu");

buttonMenu.onclick = function() {
    var buttonMenuElements = document.querySelectorAll(".header__nav, .header__button__container, .buttonMenu, .color__switch");
    buttonMenuElements.forEach((buttonMenuElements) => {
        buttonMenuElements.classList.toggle("active");
    });
}


//theme color switch

const body = document.getElementById("body");
const colorSwitch = document.getElementById("colorSwitch");

colorSwitch.onclick = function() {
    body.classList.toggle("colored");
    var menuElements = document.querySelectorAll(".switched");
    menuElements.forEach((menuElements) => {
        menuElements.classList.toggle("colored");
    });
}

//buttonMenu click animation

var buttonMenu = document.getElementById("buttonMenu");

buttonMenu.onclick = function () {
    buttonMenu.classList.toggle("active");
    headerNav.classList.toggle("active");
    headerButtons.classList.toggle("active");
    colorSwitch.classList.toggle("active");
}


//theme color switch


const body = document.getElementById("body");
const colorSwitch = document.getElementById("colorSwitch");

colorSwitch.onclick = function() {
    body.classList.toggle("colored");
    var elementsForSwitch = document.getElementsByClassName("switched");
    elementsForSwitch.classList.toggle("colored");
}

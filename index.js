//buttonMenu click animation

var buttonMenu = document.getElementById("buttonMenu");

buttonMenu.onclick = function () {
    buttonMenu.classList.toggle("active");
    headerNav.classList.toggle("active");
    headerButtons.classList.toggle("active");
    colorSwitch.classList.toggle("active");
}


//color theme switch

// var switchMode = document.getElementById("colorSwitch");

// switchMode.onclick = function() {

//     var theme = document.getElementById("theme");

//     if (theme.getAttribute("href") == "styles/styles.css") {

//         theme.href = "styles/lightTheme.css";
//     }

//     else {

//         theme.href = "styles/styles.css";
//     }

// }



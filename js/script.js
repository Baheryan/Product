//buttonMenu click animation

$(document).ready(function() {
    $('.buttonMenu').click(function(event) {
        $('.buttonMenu, .header__nav, .header__button__container, .color__switch').toggleClass('active');
    });
});


//color theme switch

var switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {

    var theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "styles/styles.css") {

        theme.href = "styles/lightTheme.css";
    }

    else {

        theme.href = "styles/styles.css";
    }
}

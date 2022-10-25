"use strict";

//buttonMenu click animation

var buttonMenu = document.getElementById("buttonMenu");

buttonMenu.onclick = () => {
    var buttonMenuElements = document.querySelectorAll(".header__nav, .header__button__container, .buttonMenu, .color__switch");
    buttonMenuElements.forEach((buttonMenuElements) => {
        buttonMenuElements.classList.toggle("active");
    });
};


//theme color switch

const body = document.getElementById("body");
const colorSwitch = document.getElementById("colorSwitch");

colorSwitch.onclick = () => {
    body.classList.toggle("colored");
    var menuElements = document.querySelectorAll(".switched");
    menuElements.forEach((menuElements) => {
        menuElements.classList.toggle("colored");
    });
};

//Banner form validation

const form = document.getElementById("bannerForm");
const emailInput = document.getElementById("bannerInput");
const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", element => {
    element.preventDefault();
    validation();
});

form.addEventListener('mouseout', function removeClass() {
    form.classList.remove("invalid");
    form.classList.remove("valid");
});

const validation = () => {
    let emailInputValue = document.getElementById("bannerInput").value;
    if (emailInputValue.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
    }
};
"use strict"

// header
const bars = document.querySelector('#main_header .fa-bars');
const mainHeader = document.querySelector('#main_header');
bars.addEventListener('click', function () {

return mainHeader.classList.add("show-menu");

});
const times = document.querySelector('#main_header .fa-times');
times.addEventListener('click', function () {

return mainHeader.classList.remove("show-menu");

});
const overlay = document.querySelector('#main_header .overlay');
overlay.addEventListener('click', function () {

return mainHeader.classList.remove("show-menu");

});

// scroll
window.addEventListener('scroll', scrollFun);


// hero

// about me

// portfolio

// services
renderServices( services );

// team

// numbers
renderNumbers( numbers );

// pricing

// blog
renderBlog ( blog );

// contact us

// maps

// footer

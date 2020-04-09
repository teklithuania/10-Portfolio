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
window.addEventListener('scroll', headerBackground);


// hero

// about me
renderAboutUs( skills );
renderIcon( iconz );


// Lightbox
const lightBox = document.querySelector('.lightbox .background');
const show = document.querySelector('.lightbox');
lightBox.addEventListener('click', () => {
  
    return show.classList.remove('show');
});

const playButton = document.querySelector('.play-btn');
playButton.addEventListener('click', () => {
  
    return show.classList.add('show');
});
// window.addEventListener('keypress', function(event){
//     console.log(event);
    
    // closeVideo(event.key);
    // const isEscape = (evt.keyCode === 27);
//  });
//  function closeVideo(key) {
//      switch (key) {
//          case 'isEscape':
//              show.classList.remove('show');
//              break;
          
//              default: console.log('Wrong button!');
//                      console.log('Press displayed button!');
//                      console.log('-----------------------');
//      }
//  }
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        show.classList.remove('show');
    }
};

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

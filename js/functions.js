"use strict"

// header

// hero

// about me

// portfolio

// services

function renderServices( serviceList ) {
    
    let HTML = '';

    for (let i = 0; i < serviceList.length; i++) {
        const service = services[i];
        HTML += `<div class="service">
                    <i class="fa fa-${service.icon} servicesIcon"></i>
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }
    
    return document.querySelector('.transferServices').innerHTML = HTML;
}

// team

// numbers
function renderNumbers( numberList ) {
    let HTML = '';

    for (let i = 0; i < numberList.length; i++) {
        const numberSection = numberList[i];
        HTML += `<div class="transferNumbers"> 
                    <div><i class="fa fa-${numberSection.icon} numberIcon"></i></div>
                    <div><h3>${numberSection.number}</h3>
                    <p>${numberSection.title}</p></div>
                </div>`;
    }
    return document.querySelector('.transferNumbers').innerHTML = HTML;
}


// pricing

// blog

// contact us

// maps

// footer
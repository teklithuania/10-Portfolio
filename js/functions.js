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
    
    return document.querySelector('.transferServaices').innerHTML = HTML;
}

// team

// numbers

// pricing

// blog

// contact us

// maps

// footer
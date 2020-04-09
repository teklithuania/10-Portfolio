"use strict"

// header
function scrollFun() {
    // current scroll pozition
    const headerHeight = document.querySelector('#main_header').offsetHeight;

    const height = window.scrollY+headerHeight;
    
    // make list of section
    let links = [];
    const DOMlinks = document.querySelectorAll('#main_header nav > a');

    for (let i = 0; i < DOMlinks.length; i++) {
        const link = DOMlinks[i];
        const href = link.href;
        const split = href.split('#');
        if (split.length > 1) {
            links.push('#'+split[1]);
            
        } 
    }
    
    // find out height position of section
const sectionHeights = [];
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link === '#') {
        sectionHeights.push(0);
    } else {
        const section = document.querySelector(link);
        
        sectionHeights.push(section.offsetTop);
    }
}

    // find out which of sections are nearest to current position
    let wantedSection = 0;
    for (let i = 0; i < sectionHeights.length; i++) {
        const sectionH = sectionHeights[i];  

        if (sectionH <= height) {
            wantedSection = i;
        } else {
            break;
        }
    }
    
        // if find out nierest section

            // pries tai buvusi nuoroda header > nav netanka active klases
            document.querySelector(`#main_header nav > a.active`).classList.remove('active');
            // naujoji nuoroda gauna active clase
            document.querySelector(`#main_header nav > a[href="${links[wantedSection]}"]`).classList.add('active');

            
    return;
};

function headerBackground() {
    if (window.scrollY > 100) {
        mainHeader.classList.remove("header-transparent");
    } else {
        mainHeader.classList.add("header-transparent");
        
    }
    return;
}

// hero

// about me
function renderAboutUs( skillsList ) {
    let HTML = '';
    for (let i = 0; i < skillsList.length; i++) {
        const skillz = skillsList[i];
        HTML += `<div class="progress-bar">
                    <div class="texts">
                        <div class="label">${skillz.title}</div>
                        <div class="value">${skillz.value}%</div>
                    </div>
                    <div class="bar">
                        <div class="value" style="width: ${skillz.value}%;">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`;
    }
    return document.querySelector('#skills').innerHTML = HTML;
}
function renderIcon(iconzList) {
    let HTML = '';
    for (let i = 0; i < iconzList.length; i++) {
        const iconz = iconzList[i];
        HTML +=     `<div class="icon-row col-4">
                        <div class="ico fa fa-${iconz.title} col-2"></div>
                        <div class="iconText">${iconz.description}</div>
                    </div>`;
    }
    return document.querySelector('#iconz').innerHTML = HTML;
}


// portfolio

// services

function renderServices( serviceList ) {
    
    let HTML = '';

    // if ( !Array.isArray(serviceList) ) {
    //     return console.log('ERROR: duok sarasa..');  
    // }
    // if ( serviceList.length === 0 ) {
    //     return console.log('ERROR: sarasas negali buti tuscias');  
    // }

    for (let i = 0; i < serviceList.length; i++) {
        const service = services[i];
        HTML += `<div class="service col-4 col-md-6 col-sm-12">
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

    if ( !Array.isArray(numberList) ) {
        return console.log('ERROR: duok sarasa..');  
    }
    if ( numberList.length === 0 ) {
        return console.log('ERROR: sarasas negali buti tuscias');  
    }

    for (let i = 0; i < numberList.length; i++) {
        const numberSection = numberList[i];
        HTML += `<div class="transferNumbers col-md-6 col-sm-6 col-xs-12"> 
                    <div><i class="fa fa-${numberSection.icon} numberIcon"></i></div>
                    <div><h3>${numberSection.number}</h3>
                    <p>${numberSection.title}</p></div>
                </div>`;
    }
    return document.querySelector('.transferNumbers').innerHTML = HTML;
}


// pricing

// blog
function renderBlog( blogList ) {
    let HTML = '';

    if ( !Array.isArray(blogList) ) {
        return console.log('ERROR: duok sarasa..');  
    }
    if ( blogList.length === 0 ) {
        return console.log('ERROR: sarasas negali buti tuscias');  
    }

    for (let i = 0; i < blogList.length; i++) {
        const blogSection = blogList[i];
        const pd = blogSection.data;
        const dateLink = `${pd.year}/${pd.month}/${pd.day}`;
        const year = new Date().getFullYear();
        let formatedDate = `${pd.day} ${months[pd.month-1]}`; 
        if (year !== pd.year) {
            formatedDate += `, ${pd.year}`;
        }


        HTML += `<div class="blog col-4 col-md-6 col-sm-12">
                        <img src="./img/blog/${blogSection.photo.src}" alt="${blogSection.photo.alt}">
                        <a class="date bg-primary" href="${blogSection.link}/articles-by-date/${dateLink}">${formatedDate}</a>
                        <a class="title" href="${blogSection.link}">${blogSection.title}</a>
                        <p>${blogSection.description}</p>
                        <a class="more" href="${blogSection.link}">Learn more</a>
                </div>`;
    }
    return document.querySelector('.transferBlog').innerHTML = HTML;
}



// contact us

// maps

// footer
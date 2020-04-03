"use strict"

// header

// hero

// about me

// portfolio

// services

function renderServices( serviceList ) {
    
    let HTML = '';

    if ( !Array.isArray(serviceList) ) {
        return console.log('ERROR: duok sarasa..');  
    }
    if ( serviceList.length === 0 ) {
        return console.log('ERROR: sarasas negali buti tuscias');  
    }

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


        HTML += `<div class="blog">
                        <img src="./img/blog/${blogSection.photo.src}" alt="${blogSection.photo.alt}">
                        <a class="date" href="${blogSection.link}/articles-by-date/${dateLink}">${formatedDate}</a>
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
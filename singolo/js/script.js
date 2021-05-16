// This Array with images for portfolio
let imgArray = [
    './src/img/portfolio-1.png',
    './src/img/portfolio-2.png',
    './src/img/portfolio-3.png',
    './src/img/portfolio-4.png',
    './src/img/portfolio-5.png',
    './src/img/portfolio-6.png',
    './src/img/portfolio-7.png',
    './src/img/portfolio-8.png',
    './src/img/portfolio-9.png',
    './src/img/portfolio-10.png',
    './src/img/portfolio-11.png',
    './src/img/portfolio-12.png'
]

// This header nav menu
const menu = document.querySelector('.menu');
// This nav menu elements li
const menuItems = menu.querySelectorAll('li');

// This tags menu
const tags = document.querySelector('.tags');
// This tags menu elements li
const tagsItems = tags.querySelectorAll('li');

// This portfolio container for images
const portfolio = document.querySelector('.portfolio-images');
// This images tags in portfolio container
const imgPort = portfolio.querySelectorAll('img')

// Shuffle function
const shuffleImages = (images) => {
    images.sort(() => Math.random() - 0.5);
    return images;
}

// Active links for nav menu
menu.addEventListener('click', e => {
    menuItems.forEach(el => {
        el.querySelector('a').classList.remove('active_link');
    })
    e.target.classList.add('active_link')
})

// Active tags for tags menu and shuffle Images in Portfolio
tags.addEventListener('click', e => {
    if(!e.target.classList.contains('active_tag')) {
        tagsItems.forEach(el => {
            el.classList.remove('active_tag');
    })
        e.target.classList.add('active_tag');
        allImgPortfolio(shuffleImages(imgArray), imgPort);
    }   
})

// This function for displaying images into portfolio
const allImgPortfolio = (array,imgPort) => {
    
    for(let i = 0; i < array.length; i++) { 
         imgPort[i].setAttribute('src', array[i]);
    }
}
allImgPortfolio(imgArray,imgPort);

// This add active_link when scrolling
document.addEventListener('scroll', onScroll);

    function onScroll() {
        const curPos = window.scrollY;
        const sections = document.querySelectorAll('header, section');
        
        sections.forEach((el) => {
            const heightHeader = 95;
            if(el.offsetTop - heightHeader <= curPos && (el.offsetTop + el.offsetHeight - heightHeader) > curPos) {
                menuItems.forEach((a) => {
                    a.querySelector('a').classList.remove('active_link');
                    if(el.getAttribute('id') === a.querySelector('a').getAttribute('href').substring(1)) {
                        a.querySelector('a').classList.add('active_link');
                    }
                })
            }
        })
    }

// This correct offset when you scrolling
document.addEventListener('scroll', ()=> {
// Active links for header menu
    menuItems.forEach(el => {
        el.querySelector('a').classList.remove('active_link');

        if (pageYOffset <= 550 && (el.querySelector('a').innerText ==='HOME')) {
            el.querySelector('a').setAttribute('class', 'active_link');
        }

        if ((pageYOffset > 555 && pageYOffset < 1165) && (el.querySelector('a').innerText ==='SERVICES')) {
            el.querySelector('a').setAttribute('class', 'active_link');
        }

        if ((pageYOffset > 1165 && pageYOffset < 1965) && (el.querySelector('a').innerText ==='PORTFOLIO')) {
            el.querySelector('a').setAttribute('class', 'active_link');
        }
    })
// Active links for burger menu
    menuBurgerItems.forEach(el => {
        el.querySelector('a').classList.remove('active_link');

        if (pageYOffset <= 305 && (el.querySelector('a').innerText ==='HOME')) {
            el.querySelector('a').setAttribute('class', 'active_link');
        }

        if ((pageYOffset > 305 && pageYOffset < 1310) && (el.querySelector('a').innerText ==='SERVICES')) {
            el.querySelector('a').setAttribute('class', 'active_link');
        }

        if ((pageYOffset > 1310 && pageYOffset < 2215) && (el.querySelector('a').innerText ==='PORTFOLIO')) {
            el.querySelector('a').setAttribute('class', 'active_link');
        }
    })
})

// Menu burger open\close effect and active menu items
const burgerActive = document.querySelectorAll('.burger');

const menuBurger = document.querySelector('.menu-burger');

const wrapperBurger = document.querySelector('.wrapper-burger');

const html = document.querySelector('html');

const menuBurgerUl = document.querySelector('.menu-burger__items');

const menuBurgerItems = menuBurgerUl.querySelectorAll('li');

burgerActive.forEach(e => {
    e.addEventListener('click', () => {
        wrapperBurger.classList.toggle('active_menu');
        html.classList.toggle('active_menu');
        menuBurger.classList.toggle('active_menu');
    })
})

menuBurgerItems.forEach(elem=> {
    elem.querySelector('a').addEventListener('click', ()=> {
        wrapperBurger.classList.remove('active_menu');
        html.classList.remove('active_menu');
        menuBurger.classList.remove('active_menu');
    })
})


















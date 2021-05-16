"use strict";

// This Array with images for portfolio
var imgArray = ['./src/img/portfolio-1.png', './src/img/portfolio-2.png', './src/img/portfolio-3.png', './src/img/portfolio-4.png', './src/img/portfolio-5.png', './src/img/portfolio-6.png', './src/img/portfolio-7.png', './src/img/portfolio-8.png', './src/img/portfolio-9.png', './src/img/portfolio-10.png', './src/img/portfolio-11.png', './src/img/portfolio-12.png']; // This header nav menu

var menu = document.querySelector('.menu'); // This nav menu elements li

var menuItems = menu.querySelectorAll('li'); // This tags menu

var tags = document.querySelector('.tags'); // This tags menu elements li

var tagsItems = tags.querySelectorAll('li'); // This portfolio container for images

var portfolio = document.querySelector('.portfolio-images'); // This images tags in portfolio container

var imgPort = portfolio.querySelectorAll('img'); // Shuffle function

var shuffleImages = function shuffleImages(images) {
  images.sort(function () {
    return Math.random() - 0.5;
  });
  return images;
}; // Active links for nav menu


menu.addEventListener('click', function (e) {
  menuItems.forEach(function (el) {
    el.querySelector('a').classList.remove('active_link');
  });
  e.target.classList.add('active_link');
}); // Active tags for tags menu and shuffle Images in Portfolio

tags.addEventListener('click', function (e) {
  if (!e.target.classList.contains('active_tag')) {
    tagsItems.forEach(function (el) {
      el.classList.remove('active_tag');
    });
    e.target.classList.add('active_tag');
    allImgPortfolio(shuffleImages(imgArray), imgPort);
  }
}); // This function for displaying images into portfolio

var allImgPortfolio = function allImgPortfolio(array, imgPort) {
  for (var i = 0; i < array.length; i++) {
    imgPort[i].setAttribute('src', array[i]);
  }
};

allImgPortfolio(imgArray, imgPort); // This add active_link when scrolling

document.addEventListener('scroll', onScroll);

function onScroll() {
  var curPos = window.scrollY;
  var sections = document.querySelectorAll('header, section');
  sections.forEach(function (el) {
    var heightHeader = 95;

    if (el.offsetTop - heightHeader <= curPos && el.offsetTop + el.offsetHeight - heightHeader > curPos) {
      menuItems.forEach(function (a) {
        a.querySelector('a').classList.remove('active_link');

        if (el.getAttribute('id') === a.querySelector('a').getAttribute('href').substring(1)) {
          a.querySelector('a').classList.add('active_link');
        }
      });
    }
  });
} // This correct offset when you scrolling


document.addEventListener('scroll', function () {
  // Active links for header menu
  menuItems.forEach(function (el) {
    el.querySelector('a').classList.remove('active_link');

    if (pageYOffset <= 550 && el.querySelector('a').innerText === 'HOME') {
      el.querySelector('a').setAttribute('class', 'active_link');
    }

    if (pageYOffset > 555 && pageYOffset < 1165 && el.querySelector('a').innerText === 'SERVICES') {
      el.querySelector('a').setAttribute('class', 'active_link');
    }

    if (pageYOffset > 1165 && pageYOffset < 1965 && el.querySelector('a').innerText === 'PORTFOLIO') {
      el.querySelector('a').setAttribute('class', 'active_link');
    }
  }); // Active links for burger menu

  menuBurgerItems.forEach(function (el) {
    el.querySelector('a').classList.remove('active_link');

    if (pageYOffset <= 305 && el.querySelector('a').innerText === 'HOME') {
      el.querySelector('a').setAttribute('class', 'active_link');
    }

    if (pageYOffset > 305 && pageYOffset < 1310 && el.querySelector('a').innerText === 'SERVICES') {
      el.querySelector('a').setAttribute('class', 'active_link');
    }

    if (pageYOffset > 1310 && pageYOffset < 2215 && el.querySelector('a').innerText === 'PORTFOLIO') {
      el.querySelector('a').setAttribute('class', 'active_link');
    }
  });
}); // Menu burger open\close effect and active menu items

var burgerActive = document.querySelectorAll('.burger');
var menuBurger = document.querySelector('.menu-burger');
var wrapperBurger = document.querySelector('.wrapper-burger');
var html = document.querySelector('html');
var menuBurgerUl = document.querySelector('.menu-burger__items');
var menuBurgerItems = menuBurgerUl.querySelectorAll('li');
burgerActive.forEach(function (e) {
  e.addEventListener('click', function () {
    wrapperBurger.classList.toggle('active_menu');
    html.classList.toggle('active_menu');
    menuBurger.classList.toggle('active_menu');
  });
});
menuBurgerItems.forEach(function (elem) {
  elem.querySelector('a').addEventListener('click', function () {
    wrapperBurger.classList.remove('active_menu');
    html.classList.remove('active_menu');
    menuBurger.classList.remove('active_menu');
  });
});
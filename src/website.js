import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function loadNav() {
    const buttons = document.querySelectorAll('.button-nav');
    const navMenuIcon = document.getElementById('nav-menu-icon');
    const navCloseButton = document.getElementById('nav-closebtn');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) return;
            setActiveButton(button);
        });
    });

    
    navMenuIcon.addEventListener('click', openNav);
    navCloseButton.addEventListener('click', closeNav);

}

function runOnScroll() {
    const header = document.getElementById('header');
    const top = window.scrollY;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (top >= 100 && vw >= 1199) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
    console.log('scrolling')
 };

function runOnResize() {
    const header = document.getElementById('header');

    if (window.innerWidth <= 1199) {
        header.classList.remove('active');
    }
    else if (window.innerWidth > 1199) {
        header.classList.add('active');
    }
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove('active-button');
        }
    });

    button.classList.add('active-button');
    console.log('Set Active')
}

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("nav-open-canvas").style.width = "100vw";
    document.getElementById("nav-open-canvas").addEventListener("click", closeNav);
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("nav-open-canvas").style.width = "0";
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const copyright = document.createElement("p");
    copyright.textContent = "Copyright © 2021 adrian-derose6";
  
    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/adrian-derose6";
  
    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");
  
    /* githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink); */
  
    return footer;
}

function initializeWebsite() {
    const content = document.getElementById('content');

    loadNav();
    content.appendChild(createFooter());

    window.addEventListener("scroll", runOnScroll);
    window.addEventListener("resize", runOnResize);
}

window.onload = function() {

}

export default initializeWebsite;
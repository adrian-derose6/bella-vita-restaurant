function loadNav() {
    const buttons = document.querySelectorAll('.button-nav');
    const navMenuIcon = document.getElementById('nav-menu-icon');
    const navCloseButton = document.getElementById('nav-closebtn');

    navMenuIcon.addEventListener('click', openNav);
    navCloseButton.addEventListener('click', closeNav);

    window.addEventListener("scroll", runOnScroll);
    window.addEventListener("resize", runOnResize);
}

function runOnScroll() {
    const homeHeader = document.getElementById('home-header');
    const pagesHeader = document.getElementById('pages-header'); 
    const top = window.scrollY;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (top >= 100 && vw >= 1199 && homeHeader) {
        homeHeader.classList.add('active');
    }
    if (top < 100 && vw >= 1199 && homeHeader){
        homeHeader.classList.remove('active');
    }
    if (top > 54 && vw >= 1199 && pagesHeader) {
        pagesHeader.classList.add('sticky');
    }
    if (top <= 54 && vw >= 1199 && pagesHeader) {
        pagesHeader.classList.remove('sticky');
    }
};

function runOnResize() {
    const header = document.getElementById('home-header');
    var pathname = window.location.pathname;

    if (window.innerWidth <= 1199 && header) {
        header.classList.remove('active');
    }
    if (window.innerWidth > 1199 && header) {
        header.classList.add('active');
    }
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

export default loadNav;
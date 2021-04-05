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
    const header = document.getElementById('header');
    const top = window.scrollY;
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    if (top >= 100 && vw >= 1199) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
};

function runOnResize() {
    const header = document.getElementById('header');
    var pathname = window.location.pathname;

    if (window.innerWidth <= 1199 && pathname === '/') {
        header.classList.remove('active');
    }
    else if (window.innerWidth > 1199 && pathname === '/') {
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
import loadCarousels from './carousel.js';
import loadHome from './home.js';
import loadNav from './nav.js';

function initializeWebsite() {
    loadNav();

    var pathname = window.location.pathname;
    switch(pathname) {
    case "/" :
        loadHome();
        break;
    case "/menu.html" :
        console.log("menu");
        break;
    }
}

export default initializeWebsite;
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import loadCarousels from './carousel.js';
import loadNav from './nav.js';


function initializeWebsite() {
    const content = document.getElementById('content');

    loadNav();
    loadCarousels();
    loadHome();
}

export default initializeWebsite;
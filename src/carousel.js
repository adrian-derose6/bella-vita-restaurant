import Flickity from 'flickity';

function loadCarousels() {
    let features = new Flickity('#features-carousel', {
        wrapAround: true,
        pageDots: true,
    });

    let homeMenu = new Flickity('#home-menu-carousel', {
        wrapAround: true,
        pageDots: false
    });
}

export default loadCarousels;
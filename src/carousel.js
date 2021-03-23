import Flickity from 'flickity';

function loadCarousels(){
    let features = new Flickity('#features-carousel', {
        wrapAround: true,
        pageDots: true,
    });
}

export default loadCarousels;
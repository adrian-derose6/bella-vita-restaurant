import Flickity from 'flickity-hash';

function loadCarousels() {
    let features = new Flickity('#features-carousel', {
        wrapAround: true,
        pageDots: true,
    });

    let homeMenu = new Flickity('#home-menu-carousel', {
        wrapAround: true,
        pageDots: false,
        hash: true
    });

    let homeMenuNavs = document.querySelectorAll('.home-menu-nav');
    homeMenuNavs[0].classList.add('active');

    homeMenu.on('change', function() {
        console.log("Active: " + homeMenu.selectedIndex);
        homeMenuNavs.forEach(nav => {
            if (nav.getAttribute('data-index') == homeMenu.selectedIndex) {
                nav.classList.add('active');
            }
            else if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        })
    });
}

export default loadCarousels;
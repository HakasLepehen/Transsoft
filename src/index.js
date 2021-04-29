import './styles/styles.scss';
//images
import './img/logo55.webp';
import './img/bsmts.webp';
import './img/video.webp';
import './img/autopilot.webp';
import './img/tahograph.webp';
import './img/podogrev.webp';
import './img/iridium.webp';
import './img/dopog.webp';
import './img/train.webp';
import './img/gbo.webp';
import './img/new1.webp';
import './img/new2.webp';
import './img/new3.webp';
import './img/map-marker.svg';

//libraries
import 'bootstrap';
import '@popperjs/core';
import DG from '2gis-maps';

let map = DG.map('map', {
    'center': [55.022912, 73.263413],
    'zoom': 17
})

DG.marker([55.023075, 73.2628]).addTo(map);

// const a = document.querySelectorAll('a[href*="#"]:not([href="#"])');
// a.forEach((el) => {
//     el.addEventListener('click', function (e) {
//
//         if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
//             || location.hostname === this.hostname) {
//
//             let target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 e.preventDefault();
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                 }, 500);
//                 return false;
//             }
//         }
//     })
// })



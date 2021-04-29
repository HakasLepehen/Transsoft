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

function scroll(element) {

    const nav = document.querySelector('.navigation')
        .getBoundingClientRect().height;

    window.scrollTo({
        top: element.offsetTop - nav,
        behavior: 'smooth'
    });
}

const addressBtn = document.querySelector('.map-marker');

addressBtn.addEventListener('click', evt => {
    let mapElement = document.getElementById('map');
    mapElement.style.height = 400 + 'px';

    let map = DG.map('map', {
        'center': [55.022912, 73.263413],
        'zoom': 17
    })

    DG.marker([55.023075, 73.2628]).addTo(map);

    scroll(mapElement);
});

document.querySelectorAll('.nav-item')
    .forEach(element => {
       element.addEventListener('click', evt => {
           evt.preventDefault();

           const id = evt.target.getAttribute('href').replace('#', '');
           const section = document.getElementById(id);

           scroll(section);
       })
    });

const love = document.querySelector('.prod');

const home = document.querySelector('.main-title');

love.addEventListener('click', e => scroll(home));



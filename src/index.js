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
import './img/map-marker.svg'

//libraries
import 'bootstrap';
import '@popperjs/core';

window.onload = function () {
    let btn = document.querySelectorAll('.card');
    btn.forEach((el) => {
        el.addEventListener('click', (e) => {
            console.log('Нажато:', e.target);
        })
    })

}



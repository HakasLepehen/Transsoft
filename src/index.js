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

//libraries
import 'bootstrap';
import '@popperjs/core';

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
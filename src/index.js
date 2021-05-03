import "./styles/styles.scss";
//images
import "./img/logo55.webp";
import "./img/bsmts.webp";
import "./img/video.webp";
import "./img/autopilot.webp";
import "./img/tahograph.webp";
import "./img/podogrev.webp";
import "./img/iridium.webp";
import "./img/dopog.webp";
import "./img/train.webp";
import "./img/gbo.webp";
import "./img/new1.webp";
import "./img/new2.webp";
import "./img/new3.webp";
import "./img/map-marker.svg";

//libraries
import "bootstrap";
import "@popperjs/core";
import DG from "2gis-maps";

window.onload = function () {
  let currentNav;
  const sections = document.querySelectorAll(".hide");
  const navs = document.querySelectorAll('.nav-link');

  window.addEventListener("scroll", () => {
    sections.forEach((section, index) => {
      
      let positionOfSection = section.offsetTop;

      if (window.pageYOffset + window.innerHeight / 2 > positionOfSection) {
        show(section);
        navs.forEach(nav => {
          if (nav.getAttribute('href').replace('#', '') === section.id) {
            nav.style.color = '#3d60f4';
            nav.style.fontSize = '1.2rem';
            nav.style.fontWeight = '900';
          } else {
            nav.style.color = '#585b60';
            nav.style.fontSize = '1.1rem';
          }
        });
      }

      if (window.pageYOffset === 0) {
        navs[0].style.color = '#585b60';
        navs[0].style.fontSize = '1.1rem';
      }
    });
  });

  function show(e) {
    if (e.classList.contains("hide")) {
      e.classList.remove("hide");
      e.classList.add("show");
      return;
    }

    if (e.classList.contains("show")) {
      return;
    }
  }
};

function scroll(element) {
  const nav = document.querySelector(".navigation").getBoundingClientRect()
    .height;

  window.scrollTo({
    top: element.offsetTop - nav,
    behavior: "smooth",
  });
}

//работа с картой

const addressBtn = document.querySelector(".map-marker");

addressBtn.addEventListener("click", (evt) => {
  let mapElement = document.getElementById("map");
  if (!mapElement.style.height) {
    mapElement.style.height = 400 + "px";

    let map = DG.map("map", {
      center: [55.022912, 73.263413],
      zoom: 17,
    });

    let popup = DG.popup()
      .setLatLng([55.023075, 73.2628])
      .setContent("<p>Офис компании</p>")
      .openOn(map);

    scroll(mapElement);
  } else {
    mapElement.style.height = "";
  }
});

document.querySelectorAll(".nav-item").forEach((element) => {
  element.addEventListener("click", (evt) => {
    evt.preventDefault();

    const id = evt.target.getAttribute("href").replace("#", "");
    const section = document.getElementById(id);

    document.querySelectorAll(".nav-link").forEach((e) => {
      if (e.classList.contains("active")) {
        e.classList.remove("active");
      }
    });

    evt.target.classList.add("active");
    scroll(section);
    console.log(evt.target.classList.value);
  });
});

const love = document.querySelector(".prod");

const home = document.querySelector(".main-title");

love.addEventListener("click", (e) => scroll(home));

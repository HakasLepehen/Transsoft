(()=>{"use strict";var e,t={864:(e,t,r)=>{r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p,r.p;r(169);var o=r(162),n=r.n(o);function i(e){const t=document.querySelector(".navigation").getBoundingClientRect().height;window.scrollTo({top:e.offsetTop-t,behavior:"smooth"})}window.onload=function(){const e=document.querySelectorAll(".hide"),t=document.querySelectorAll(".nav-link");window.addEventListener("scroll",(()=>{e.forEach(((e,r)=>{let o=e.offsetTop;window.pageYOffset+window.innerHeight/2>o&&(!function(e){if(e.classList.contains("hide"))return e.classList.remove("hide"),void e.classList.add("show");if(e.classList.contains("show"));}(e),t.forEach((t=>{t.getAttribute("href").replace("#","")===e.id?(t.style.color="#3d60f4",t.style.fontSize="1.2rem",t.style.fontWeight="900"):(t.style.color="#585b60",t.style.fontSize="1.1rem")}))),0===window.pageYOffset&&(t[0].style.color="#585b60",t[0].style.fontSize="1.1rem")}))}))};document.querySelector(".map-marker").addEventListener("click",(e=>{let t=document.getElementById("map");if(t.style.height)t.style.height="";else{t.style.height="400px";let e=n().map("map",{center:[55.022912,73.263413],zoom:17});n().popup().setLatLng([55.023075,73.2628]).setContent("<p>Офис компании</p>").openOn(e);i(t)}})),document.querySelectorAll(".nav-item").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").replace("#",""),r=document.getElementById(t);document.querySelectorAll(".nav-link").forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),e.target.classList.add("active"),i(r),console.log(e.target.classList.value)}))}));const l=document.querySelector(".prod"),c=document.querySelector(".main-title");l.addEventListener("click",(e=>i(c)))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var l=1/0;for(a=0;a<e.length;a++){for(var[r,n,i]=e[a],c=!0,s=0;s<r.length;s++)(!1&i||l>=i)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(c=!1,i<l&&(l=i));c&&(e.splice(a--,1),t=n())}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[r,n,i]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[l,c,s]=r,a=0;for(n in c)o.o(c,n)&&(o.m[n]=c[n]);for(s&&s(o),t&&t(r);a<l.length;a++)i=l[a],o.o(e,i)&&e[i]&&e[i][0](),e[l[a]]=0;o.O()},r=self.webpackChunkTranssoft=self.webpackChunkTranssoft||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[153],(()=>o(864)));n=o.O(n)})();
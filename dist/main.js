(()=>{"use strict";var e,t,n,o,r,a,i,s,c,d,u,l,m,h,f={208:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(601),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([e.id,"* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    background-color: aqua;\n}\n",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=o.base?c[0]+o.base:c[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var m=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=r(h,o);o.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),d=0;d<a.length;d++){var u=n(a[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},p={};function y(e){var t=p[e];if(void 0!==t)return t.exports;var n=p[e]={id:e,exports:{}};return f[e](n,n.exports,y),n.exports}y.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return y.d(t,{a:t}),t},y.d=(e,t)=>{for(var n in t)y.o(t,n)&&!y.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},y.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),y.nc=void 0,e=y(72),t=y.n(e),n=y(825),o=y.n(n),r=y(659),a=y.n(r),i=y(56),s=y.n(i),c=y(540),d=y.n(c),u=y(113),l=y.n(u),m=y(208),(h={}).styleTagTransform=l(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals,document.body.appendChild(function(){const e=document.createElement("div");return e.append(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("nav");t.classList.add("nav");const n=document.createElement("button");n.setAttribute("id","homeBtn");const o=document.createElement("button");o.setAttribute("id","menuBtn");const r=document.createElement("button");return r.setAttribute("id","aboutBtn"),e.appendChild(t),t.append(n,o,r),e}(),function(){const e=document.createElement("div");return e.setAttribute("id","content"),e.append(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("h1");t.setAttribute("id","home-h1"),t.textContent="The Reyhoon.";const n=document.createElement("hr");n.classList.add("title");const o=document.createElement("p");return o.setAttribute("id","home-quote"),o.textContent="Welcome to Reyhoon, where opulence meets tradition in every sumptuous bite. Nestled in the heart of Tehran, Reyhoon invites you to embark on a culinary journey fit for royalty. Steeped in the rich tapestry of Persian heritage, our restaurant exudes elegance from the moment you step through the door. The ambiance is a harmonious blend of modern sophistication and timeless charm, with intricate Persian motifs adorning the walls and the soft glow of traditional lanterns casting a warm, inviting glow.At Reyhoon, gastronomic delights await at every turn, as our master chefs craft exquisite dishes using only the finest ingredients sourced from across Iran. Indulge your palate with the delicate flavors of saffron-infused rice, succulent kebabs grilled to perfection, and decadent stews simmered to tantalizing perfection. Each dish is a testament to centuries of culinary mastery, offering a glimpse into the rich and vibrant culinary heritage of Iran.But Reyhoon is more than just a restaurant; it's a sanctuary where friends and family come together to savor the joys of life and create lasting memories. Whether you're celebrating a special occasion or simply craving a taste of luxury, Reyhoon promises an unforgettable dining experience that will leave you longing to return again and again. Join us at Reyhoon and elevate your senses to new heights as you indulge in the unparalleled luxury of Persian cuisine.",e.append(t,n,o),e}(),function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("h1");t.setAttribute("id","menu-h1"),t.textContent="Reyhoon Menu.",document.createElement("hr").classList.add("titleHr");const n=document.createElement("div");n.setAttribute("id","qs-container");const o=document.createElement("h2");o.classList.add("menuTitles"),o.textContent="Qorme Sabzi";const r=document.createElement("p");r.classList.add("menuDes"),r.textContent="Qorme Sabzi: A cherished Persian stew featuring a vibrant mix of fresh herbs, tender meat, and fragrant spices. Served with aromatic saffron rice.";const a=document.createElement("p");a.classList.add("menuPrice"),a.textContent="$24.99";const i=document.createElement("hr");i.classList.add("menuHr"),n.append(o,r,a,i);const s=document.createElement("div");s.setAttribute("id","koobideh-container");const c=document.createElement("h2");c.classList.add("menuTitles"),c.textContent="Koobideh";const d=document.createElement("p");d.classList.add("menuDes"),d.textContent="Koobideh: Traditional Persian ground meat kebabs, seasoned to perfection and grilled to juicy perfection. served with fluffy saffron rice.";const u=document.createElement("p");u.classList.add("menuPrice"),u.textContent="$27.99";const l=document.createElement("hr");l.classList.add("menuHr"),s.append(c,d,u,l);const m=document.createElement("div");m.setAttribute("id","jooje-container");const h=document.createElement("h2");h.classList.add("menuTitles"),h.textContent="jooje";const f=document.createElement("p");f.classList.add("menuDes"),f.textContent="Koobideh: Traditional Persian ground meat kebabs, seasoned to perfection and grilled to juicy perfection. served with fluffy saffron rice.";const p=document.createElement("p");p.classList.add("menuPrice"),p.textContent="$28.99";const y=document.createElement("hr");return y.classList.add("menuHr"),s.append(h,f,p,y),e.append(t,n,s,m),e}(),function(){const e=document.createElement("div");e.classList.add("about");const t=document.createElement("h1");t.setAttribute("id","about-h1"),t.textContent="About us.";const n=document.createElement("hr");n.classList.add("titleHr");const o=document.createElement("p");return o.setAttribute("id","about-quote"),o.textContent="Welcome to Reyhoon, where culinary excellence meets cultural heritage. Nestled in the heart of Tehran, Reyhoon is more than just a restaurant; it's a celebration of the rich tapestry of Persian cuisine and hospitality.At Reyhoon, we are passionate about preserving and sharing the flavors of Iran with our guests. Our journey began with a vision to create a dining experience that transcends mere sustenance, offering a space where friends and family can come together to savor the joys of life and create lasting memories.Drawing inspiration from centuries of culinary tradition, our menu is a testament to the vibrant diversity of Persian cuisine. From aromatic stews to succulent kebabs and delicate rice dishes, each recipe is crafted with care and precision, using only the finest ingredients sourced from trusted suppliers.But Reyhoon is more than just a destination for exceptional food; it's a sanctuary where guests can immerse themselves in the warmth and hospitality of Persian culture. Our inviting ambiance, adorned with traditional motifs and bathed in soft light, sets the stage for an unforgettable dining experience.Whether you're joining us for a special celebration or simply craving a taste of luxury, we invite you to embark on a culinary journey like no other at Reyhoon. Come, experience the magic of Persian hospitality, one unforgettable bite at a time.",e.append(t,n,o),e}()),e}(),function(){const e=document.createElement("div");e.classList.add("footer");const t=document.createElement("p");return t.setAttribute("id","footer-text"),t.textContent="Developed By Mohammad Akhawan.",e.appendChild(t),e}()),e}())})();
(()=>{"use strict";var n,e,t,r={448:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"div {\n  height: 16.66667vw;\n  width: 90.00000vw;\n  box-sizing: border-box;\n  border: 0.83333vw solid #ddd;\n  top: 16.66667vw!important;\n}\n\np {\n  border: 1px solid #000;\n}\n\n@media screen and (min-width:1080px) {\n  div {\n    height: 33.33333vw;\n    animation: move 10s ease-in;\n    position: absolute;\n    top: calc(16.66667vw - 3.33333vw);\n  }\n}\n\n@keyframes move {\n  from {\n    transform: translate(0px, 0px);\n    background-color: #000;\n  }\n\n  50% {\n    transform: translate(16.66667vw, 33.33333vw);\n    background-color: #666;\n  }\n\n  100% {\n    transform: translate(33.33333vw, 66.66667vw);\n    background-color: #fff;\n  }\n}\n\n.testcase {\n  height: 16.66667vw;\n  width: 16.66667vw;\n  border-radius: 3.33333vw;\n  padding: 1.66667vw 1.66667vw 1.66667vw!important;\n  margin: 1.66667vw;\n  font-size: 2.66667vw;\n  background-color: bisque;\n}\n\n@media (min-width: 1200px) {\n  .testcase {\n    border-radius: 5.00000vw;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n\n@supports (width: 100px) {\n  div {\n    width: 16.66667vw;\n  }\n}\n\n@page {\n  margin: 10px;\n}\n\n@keyframes anim {\n  0% {\n    height: 6.25000vw;\n    width: 6.25000vw;\n    border: 1px solid #ddd;\n  }\n\n  100% {\n    height: 12.50000vw;\n    width: 12.50000vw;\n    border: 0.33333vw solid #ddd;\n  }\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),e.push(d))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var s=n[o],d=e.base?s[0]+e.base:s[0],c=t[d]||0,u="".concat(d," ").concat(c);t[d]=c+1;var l=a(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:u,updater:h(f,e),references:1}),r.push(u)}return r}function d(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,u=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function l(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var v=null,p=0;function h(n,e){var t,r,o;if(e.singleton){var i=p++;t=v||(v=d(e)),r=l.bind(null,t,i,!1),o=l.bind(null,t,i,!0)}else t=d(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=s(n,e),c=0;c<t.length;c++){var u=a(t[c]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=d}}}}},o={};function i(n){if(o[n])return o[n].exports;var e=o[n]={id:n,exports:{}};return r[n](e,e.exports,i),e.exports}i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=i(379),e=i.n(n),t=i(448),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals})();
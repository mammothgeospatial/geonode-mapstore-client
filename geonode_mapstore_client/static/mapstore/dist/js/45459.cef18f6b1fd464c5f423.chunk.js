(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[45459],{545459:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>X});var n=o(893379),r=o.n(n),i=o(949916);r()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var s=o(727418),a=o.n(s),c=o(611847),p=o(558493),l=o(193409),u=o(623068),h=o(973410),g=o(473392),f=o(116892),d=o(752043),m=o(869669),y=o(798090),b=o(898185),v=o(120767),w=o(831219),O=o(639166),k=o(823493),x=o.n(k),P=o(414293),E=o.n(P),j=o(199405);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function S(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function C(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?S(Object(o),!0).forEach((function(e){Z(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function L(t,e,o){return e=F(e),function(t,e){if(e&&("object"==A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,D()?Reflect.construct(e,o||[],F(t).constructor):e.apply(t,o))}function D(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(D=function(){return!!t})()}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function Z(t,e,o){return(e=_(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function _(t){var e=function(t,e){if("object"!=A(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!=A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==A(e)?e:e+""}var T=function(){var t=document.createElement("div");t.setAttribute("class","ol-popup");var e=document.createElement("a");e.setAttribute("class","ol-popup-close-btn"),e.setAttribute("href","#close"),e.innerHTML="x";var o=document.createElement("div");o.setAttribute("class","ol-popup-cnt-wrapper");var n=document.createElement("div");n.setAttribute("class","ol-popup-cnt"),o.appendChild(n);var r=document.createElement("div");r.setAttribute("class","ol-popup-tip-wrapper");var i=document.createElement("div");return i.setAttribute("class","ol-popup-tip"),r.appendChild(i),t.appendChild(e),t.appendChild(o),t.appendChild(r),t}(),U=function(t){function e(t,o){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Z(n=L(this,e,[{state:"DISABLED"}]),"start",(function(){this.geolocate.on("error",this.errorHandler),this.follow=this.options.follow,this.geolocate.setTracking(!0),this.layer.setMap(this.map),this.map.addOverlay(this.overlay),this.options.showPopup&&(this.map.on("click",this.clickHandler),this.map.on("touch",this.clickHandler)),this.options.stopFollowingOnDrag&&this.map.on("pointerdrag",this.stopHandler),this.p?this._updatePosFt():this.set("state","LOCATING")})),Z(n,"startFollow",(function(){this.follow=!0,this.options.stopFollowingOnDrag&&this.map.on("pointerdrag",this.stopHandler),this.p&&this._updatePosFt()})),Z(n,"stop",(function(){this.geolocate.un("error",this.errorHandler),this.geolocate.setTracking(!1),this.popup.hide=!0,this.map.removeOverlay(this.overlay),this.layer.setMap(null),this.options.showPopup&&(this.map.un("click",this.clickHandler),this.map.un("touch",this.clickHandler)),this.options.stopFollowingOnDrag&&this.map.un("pointerdrag",this.stopHandler),this.set("state","DISABLED")})),Z(n,"stopFollow",(function(){this.follow=!1,this.map.un("pointerdrag",this.stopHandler),this.set("state","ENABLED")})),Z(n,"_updatePosFt",(function(){var t=this.get("state"),e=this.follow?"FOLLOWING":"ENABLED";e!==t&&this.set("state",e);var o=this.geolocate.getPosition();this.p=o;var n=new d.Z([parseFloat(o[0]),parseFloat(o[1])]);if(this.options.drawCircle)if(null===this.geolocate.getAccuracyGeometry()){var r=new m.Z([parseFloat(o[0]),parseFloat(o[1])],this.geolocate.getAccuracy());this.posFt.setGeometry(new y.Z([n,r]))}else{var i=this.geolocate.getAccuracyGeometry();this.posFt.setGeometry(new y.Z([n,i]))}else this.posFt.setGeometry(new y.Z([n]));var s=this.geolocate.getHeading();if(this.posFt.setProperties({heading:s}),this.popup.hidden||this._updatePopUpCnt(),this.follow&&this.updateView(n),this.options.remainActive||this.geolocate.setTracking(!1),"true"===(0,c.vl)(window.location.search).locateDebug){var a=document.getElementById("OL_LOCATION_DEBUG");a||((a=document.createElement("div")).setAttribute("id","OL_LOCATION_DEBUG"),a.setAttribute("style","position: absolute; bottom: 0; width: 100%; height: 200px; z-index:100000; background: rgba(5,5,5,.5)"),document.body.appendChild(a));var p=this.geolocate.getSpeed();a.innerHTML="<pre>\n                Position: ".concat(o[0],", ").concat(o[1],",\n                Heading: ").concat(s,"\n                speed: ").concat(p,"\n            </pre>")}})),Z(n,"updateView",(function(t){this.follow&&(this.map.getView().setCenter(t.getCoordinates()),this.options.keepCurrentZoomLevel||this.map.getView().setZoom(this.options.locateOptions.maxZoom))})),Z(n,"_updatePopUpCnt",(function(){var t,e;this.options.metric?(t=this.geolocate.getAccuracy(),e=this.options.strings.metersUnit):(t=Math.round(3.2808399*this.geolocate.getAccuracy()),e=this.options.strings.feetUnit);var o=this.options.strings.popup.replace("{distance}",t);this.popCnt.innerHTML=o.replace("{unit}",e),this.overlay.setPosition(this.posFt.getGeometry().getGeometries()[0].getCoordinates()),this.popup.hidden=!1})),Z(n,"onLocationError",(function(t){alert(t.message)})),Z(n,"mapClick",(function(t){var e=this.map.forEachFeatureAtPixel(t.pixel,(function(t){return t}));e&&"_locate-pos"===e.get("id")&&this.popup.hidden?this._updatePopUpCnt():this.popup.hidden||(T.hidden=!0)})),Z(n,"_getDefaultStyles",(function(){var t=this,e="#2A93EE",o={fill:new b.Z({color:"rgba(19,106,236,0.15)"}),stroke:new v.Z({color:"rgba(19,106,236,1)",width:2})},n=(0,j.w)({color:e,svgAttributes:'width="300" height="300"'}),r=(0,j.B)({color:e,svgAttributes:'width="300" height="300"'});return function(e){var i,s=null===(i=e.getProperties())||void 0===i?void 0:i.heading,a=t.geolocate.getSpeed();return!E()(s)&&a>t.options.locateOptions.speedThreshold?new w.ZP(C({image:new O.Z({imgSize:[300,300],anchorXUnits:"fraction",anchorYUnits:"fraction",anchor:[.5,.5],scale:.2,rotation:null!=s?s:0,opacity:1,src:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n)})},o)):new w.ZP(C({image:new O.Z({imgSize:[300,300],anchorXUnits:"fraction",anchorYUnits:"fraction",anchor:[.5,.5],scale:.2,rotation:null!=s?s:0,opacity:1,src:"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(r)})},o))}})),Z(n,"setStrings",(function(t){this.options.strings=a()({},this.options.strings,t)})),Z(n,"setTrackingOptions",(function(t){this.geolocate&&(this.geolocate.setTrackingOptions(t),this.options.locateOptions=C({},t))})),n.map=t;var r={drawCircle:!0,follow:!0,stopFollowingOnDrag:!1,remainActive:!0,style:n._getDefaultStyles()||{},metric:!0,onLocationError:n.onLocationError,keepCurrentZoomLevel:!1,showPopup:!0,strings:{metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point"},locateOptions:{speedThreshold:.8,maximumAge:2e3,enableHighAccuracy:!1,timeout:1e4,maxZoom:18}};return n.options=a()({},r,o||{}),n.geolocate=new f.Z({projection:n.map.getView().getProjection(),trackingOptions:n.options.locateOptions}),n.updateHandler=n._updatePosFt.bind(n),n.geolocate.on("change:position",n.options.locateOptions.rateControl?x()(n.updateHandler,n.options.locateOptions.rateControl):n.updateHandler),n.geolocate.on("change:heading",(function(){var t=n.geolocate.getHeading();n.geolocate.getSpeed()>n.options.locateOptions.speedThreshold&&n.posFt.setProperties({heading:t})})),n.popup=T,n.popup.hidden=!0,n.popCnt=T.getElementsByClassName("ol-popup-cnt")[0],n.overlay=new l.Z({element:n.popup,positioning:"top-center",stopEvent:!1}),n.layer=new g.Z({source:new h.Z({useSpatialIndex:!1})}),n.posFt=new u.Z({geometry:n.geolocate.getAccuracyGeometry(),properties:{heading:n.geolocate.getHeading()},name:"position",id:"_locate-pos"}),n.posFt.setStyle(n.options.style),n.layer.getSource().addFeature(n.posFt),n.clickHandler=n.mapClick.bind(n),n.stopHandler=n.stopFollow.bind(n),n.errorHandler=n.options.onLocationError.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(e,t),o=e,Object.defineProperty(o,"prototype",{writable:!1}),o;var o}(p.Z);const B=U;function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function I(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,V(n.key),n)}}function N(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function z(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?N(Object(o),!0).forEach((function(e){M(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):N(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function M(t,e,o){return(e=V(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function V(t){var e=function(t,e){if("object"!=G(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!=G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==G(e)?e:e+""}var R={follow:!0,remainActive:!0,metric:!0,stopFollowingOnDrag:!0,keepCurrentZoomLevel:!1,locateOptions:{speedThreshold:.8,maximumAge:2e3,enableHighAccuracy:!0,timeout:1e4,maxZoom:18}};function W(t){return z(z(z({},R),t),{},{locateOptions:z(z({},R.locateOptions),t.locateOptions)})}var Y=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},e=[{key:"start",value:function(t){var e=t.map,o=t.options,n=t.messages,r=t.status,i=t.onStateChange,s=t.onLocationError;this.locate=new B(e,W(o)),this.locate.setStrings(n),this.locate.options.onLocationError=s,this.locate.on("propertychange",(function(t){i(t.target.get(t.key))})),this.configureLocate(r)}},{key:"update",value:function(t){var e=t.status,o=t.messages,n=t.options;this.configureLocate(e),this.locate.setStrings(o),this.locate.setTrackingOptions(W(n).locateOptions)}},{key:"clear",value:function(){}},{key:"configureLocate",value:function(t){var e=this.locate.get("state");"ENABLED"===t&&"DISABLED"===e?this.locate.start():"FOLLOWING"===t&&"ENABLED"===e?this.locate.startFollow():"DISABLED"===t&&this.locate.stop()}}],e&&I(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();const X=Y},199405:(t,e,o)=>{"use strict";o.d(e,{w:()=>r,B:()=>i});var n=8;function r(t){var e=t.color,o=void 0===e?"#2A93EE":e,r=t.svgAttributes,i=t.strokeWidth,s=void 0===i?n:i;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(r,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(s,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n        <g transform="matrix(-0.12 -0.22 0.22 -0.12 47.11 20.53)">\n            <polygon style="stroke: rgb(255,255,255); stroke-width: ').concat(s,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" points="0,-42.5 50,42.5 -50,42.5 "/>\n        </g>\n    </svg>')}function i(t){var e=t.color,o=void 0===e?"#2A93EE":e,r=t.svgAttributes,i=t.strokeWidth,s=void 0===i?n:i;return'<svg xmlns="http://www.w3.org/2000/svg" '.concat(r,' viewBox="0 0 100 100" xml:space="preserve">\n\t\t<g transform="matrix(0.2 0 0 0.2 49.8 50.19)">\n            <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -65 -65)" x1="65" y1="130" x2="65" y2="0">\n                <stop offset="100%" style="stop-color:rgba(0, 132, 202, 1);"/>\n                <stop offset="100%" style="stop-color:rgba(0, 0, 255, 1);"/>\n            </linearGradient>\n            <circle style="stroke: rgb(255,255,255); stroke-width: ').concat(s,"; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: ").concat(o,'; fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke" cx="0" cy="0" r="65"/>\n        </g>\n    </svg>')}},949916:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});var n=o(923645),r=o.n(n)()((function(t){return t[1]}));r.push([t.id,'.msgapi .ol-popup {\n    position: absolute;\n    text-align: center;\n    font: 12px/1.5 "Helvetica Neue", Arial, Helvetica, sans-serif;\n    -ms-transform: translate(-50%,-100%); /* IE 9 */\n    -webkit-transform: translate(-50%,-100%); /* Safari */\n    transform: translate(-50%,-100%);\n}\n.msgapi a.ol-popup-close-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 4px 4px 0 0;\n  text-align: center;\n  width: 18px;\n  height: 14px;\n  font: 16px/14px Tahoma, Verdana, sans-serif;\n  color: #c3c3c3;\n  text-decoration: none;\n  font-weight: bold;\n  background: transparent;\n}\n.msgapi .ol-popup-cnt-wrapper {\n  padding: 1px;\n  text-align: left;\n  border-radius: 12px;\n}\n.msgapi .ol-popup-cnt-wrapper, .msgapi .ol-popup-tip {\n  background: white;\n  box-shadow: 0 3px 14px rgba(0,0,0,0.4);\n}\n.msgapi .ol-popup-cnt {\n  margin: 13px 19px;\n  line-height: 1.4;\n   white-space: nowrap;\n\n}\n.msgapi .ol-popup-tip-wrapper {\n  margin: 0 auto;\n  width: 40px;\n  height: 20px;\n  position: relative;\n  overflow: hidden;\n\n}\n.msgapi .ol-popup-tip {\n  width: 17px;\n  height: 17px;\n  padding: 1px;\n  margin: -10px auto 0;\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n',""]);const i=r}}]);
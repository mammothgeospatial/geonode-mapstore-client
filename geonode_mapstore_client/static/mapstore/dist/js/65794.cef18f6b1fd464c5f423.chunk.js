(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[65794],{2400:(e,t,r)=>{"use strict";r.d(t,{Z:()=>C});var o=r(124852),n=r.n(o),i=r(119690),a=r(727418),s=r.n(a),p=r(45697),l=r.n(p),u=r(59854),c=r.n(u),d=r(414293),m=r.n(d),v=r(552259);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function O(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,T(o.key),o)}}function P(e,t,r){return t=E(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,w()?Reflect.construct(t,r||[],E(e).constructor):t.apply(e,r))}function w(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(w=function(){return!!e})()}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function j(e,t,r){return(t=T(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=f(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var S=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return j(e=P(this,t,[].concat(o)),"updateZIndex",(function(t){var r=t||e.props.position;if(e.provider){var o=e.props.map.imageryLayers._layers.indexOf(e.provider),n=g(e.props.map.imageryLayers._layers).sort((function(t,o){return(t===e.provider?r:t._position)-(o===e.provider?r:o._position)})).indexOf(e.provider)-o;0!==n&&g(new Array(Math.abs(n)).keys()).forEach((function(){e.props.map.imageryLayers[n>0?"raise":"lower"](e.provider)})),e.props.map.scene.requestRender()}})),j(e,"setDetachedLayerVisibility",(function(t,r){var o;if(null===(o=e.layer)||void 0===o||!o.setVisible)return t?(e.removeLayer(),void e.createLayer(r.type,h(h({},r.options),{},{visibility:t}),r.position,r.map,r.securityToken)):void e.removeLayer();e.layer.setVisible(t)})),j(e,"setImageryLayerVisibility",(function(t,r){if(t)return e.addLayer(r),void e.updateZIndex();e.removeLayer()})),j(e,"setLayerVisibility",(function(t){var r,o=e.getVisibilityOption(e.props),n=e.getVisibilityOption(t);n!==o&&(null!==(r=e.layer)&&void 0!==r&&r.detached?e.setDetachedLayerVisibility(n,t):e.setImageryLayerVisibility(n,t),t.map.scene.requestRender())})),j(e,"getVisibilityOption",(function(e){var t=e.options,r=void 0===t?{}:t,o=e.zoom,n=e.resolutions,i=void 0===n?(0,v.MR)():n,a=c()(o),s=r||{},p=s.visibility,l=s.minResolution,u=void 0===l?-1/0:l,d=s.maxResolution,f=void 0===d?1/0:d;if(!s.disableResolutionLimits&&!m()(i[a])){var y=i[a];if(!(y<f&&y>=u))return!1}return!!p})),j(e,"setLayerOpacity",(function(t){t!==(e.props.options&&void 0!==e.props.options.opacity?e.props.options.opacity:1)&&e.layer&&e.provider&&(e.provider.alpha=t,e.props.map.scene.requestRender())})),j(e,"createLayer",(function(t,r,o,n,a){if(t){var p=s()({},r,o?{zIndex:o}:null,{securityToken:a});e.layer=i.default.createLayer(t,p,n),e.layer&&(e.layer.layerName=r.name,e.layer.layerId=r.id),null===e.layer&&e.props.onCreationError(r),e.props.map.scene.requestRender()}})),j(e,"updateLayer",(function(t,r){var o=i.default.updateLayer(t.type,e.layer,h(h({},t.options),{},{securityToken:t.securityToken}),h(h({},r.options),{},{securityToken:r.securityToken}),e.props.map);o&&(e.removeLayer(),e.layer=o,t.options.visibility&&e.addLayer(t)),t.map.scene.requestRender()})),j(e,"addLayerInternal",(function(t){t.options.useForElevation?e.props.map.terrainProvider=e.layer:(e.provider=e.props.map.imageryLayers.addImageryProvider(e.layer),e.provider._position=e.props.position,void 0!==t.options.opacity&&(e.provider.alpha=t.options.opacity)),t.map.scene.requestRender()})),j(e,"addLayer",(function(t){if(e.layer&&!e.layer.detached&&(e.addLayerInternal(t),e.props.options.refresh&&e.layer.updateParams)){var r=0;e.refreshTimer=setInterval((function(){var o=e.layer.updateParams(s()({},e.props.options.params,{_refreshCounter:r++}));e.removeLayer(),e.layer=o,e.addLayerInternal(t),e.props.map.scene.requestRender()}),e.props.options.refresh)}})),j(e,"removeLayer",(function(t){var r,o,n=t||e.provider;n&&e.props.map.imageryLayers.remove(n),null!==(r=e.layer)&&void 0!==r&&r.detached&&null!==(o=e.layer)&&void 0!==o&&o.remove&&e.layer.remove(),e.props.map.scene.requestRender()})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(t,e),r=t,(o=[{key:"componentDidMount",value:function(){var e=this.getVisibilityOption(this.props);this.createLayer(this.props.type,h(h({},this.props.options),{},{visibility:e}),this.props.position,this.props.map,this.props.securityToken),this.props.options&&this.layer&&e&&(this.addLayer(this.props),this.updateZIndex())}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;this.setLayerVisibility(e);var r=e.options&&void 0!==e.options.opacity?e.options.opacity:1;if(this.setLayerOpacity(r),e.position!==this.props.position&&(this.updateZIndex(e.position),this.provider&&(this.provider._position=e.position)),this.props.options&&this.props.options.params&&this.layer.updateParams&&e.options.visibility&&Object.keys(this.props.options.params).reduce((function(r,o){return e.options.params[o]!==t.props.options.params[o]||r}),!1)){var o=this.provider,n=this.layer.updateParams(e.options.params);this.layer=n,this.addLayer(e),setTimeout((function(){t.removeLayer(o)}),1e3)}this.updateLayer(e,this.props)}},{key:"componentWillUnmount",value:function(){var e;this.layer&&this.props.map&&!this.props.map.isDestroyed()&&(this.layer.detached&&null!==(e=this.layer)&&void 0!==e&&e.remove?this.layer.remove():(this.layer.destroy&&this.layer.destroy(),this.props.map.imageryLayers.remove(this.provider)),this.refreshTimer&&clearInterval(this.refreshTimer))}},{key:"render",value:function(){var e=this;if(this.props.children){var t=this.layer,r=t?n().Children.map(this.props.children,(function(r){return r?n().cloneElement(r,{container:t,styleName:e.props.options&&e.props.options.styleName}):null})):null;return n().createElement(n().Fragment,null,r)}return i.default.renderLayer(this.props.type,this.props.options,this.props.map,this.props.map.id,this.layer)}}])&&O(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(n().Component);j(S,"propTypes",{map:l().object,type:l().string,options:l().object,onCreationError:l().func,position:l().number,securityToken:l().string,zoom:l().number});const C=S},872892:(e,t,r)=>{"use strict";r.d(t,{Z:()=>X});var o=r(532056),n=r(849986),i=r(250305),a=r(638601),s=r(660904),p=r(344485),l=r(812693),u=r(271533),c=r(143450),d=r(29379),m=r(586360),v=r(35961),f=r(809069),y=(r(319683),r(508665),r(169819)),h=r(45697),g=r.n(h),b=r(49977),O=r.n(b),P=r(124852),w=r.n(P),E=r(180307),k=r.n(E),j=r(737275),T=r(433353),S=r(552259),C=r(916651),Z=r(727418),L=r.n(Z),I=r(823493),_=r.n(I),M=r(618446),F=r.n(M),D=["type"];function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},x.apply(null,arguments)}function R(e,t){if(e){if("string"==typeof e)return H(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,t):void 0}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,$(o.key),o)}}function B(e,t,r){return t=U(t),function(e,t){if(t&&("object"==A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,W()?Reflect.construct(t,r||[],U(e).constructor):t.apply(e,r))}function W(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(W=function(){return!!e})()}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function G(e,t){return G=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},G(e,t)}function q(e,t,r){return(t=$(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function $(e){var t=function(e,t){if("object"!=A(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=A(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==A(t)?t:t+""}var K=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,d=new Array(r),m=0;m<r;m++)d[m]=arguments[m];return q(e=B(this,t,[].concat(d)),"state",{renderError:null}),q(e,"onClick",(function(t,r){if(e.props.onClick&&null!==r.position){var n=t.camera.pickEllipsoid(r.position,t.scene.globe.ellipsoid),i=e.getIntersectedFeatures(t,r.position),a=T.ZP.getMouseXYZ(t,r)||n&&o.Z.fromCartesian(n);if(a){var s,p,l=180*a.latitude/Math.PI,u=180*a.longitude/Math.PI,c=Math.round(a.height);null!==(s=e.map)&&void 0!==s&&null!==(p=s.msElevationLayers)&&void 0!==p&&p[0]&&(c=e.getElevation(a.longitude,a.latitude));var d=(90-l)/180*e.props.standardHeight*(e.props.zoom+1),m=(180+u)/360*e.props.standardWidth*(e.props.zoom+1);e.props.onClick({pixel:{x:m,y:d},height:e.props.mapOptions&&e.props.mapOptions.terrainProvider||i.length>0?a.height:void 0,cartographic:a,latlng:{lat:l,lng:u,z:c},crs:"EPSG:4326",intersectedFeatures:i,resolution:(0,S.MR)()[Math.round(e.props.zoom)]})}}})),q(e,"onMouseMove",(function(t){var r;if(e.props.onMouseMove&&t.endPosition&&null!==(r=e.map)&&void 0!==r&&r.camera){var n=e.map.camera.pickEllipsoid(t.endPosition,e.map.scene.globe.ellipsoid),i=T.ZP.getMouseXYZ(e.map,t)||n&&o.Z.fromCartesian(n);if(i){var a,s,p=e.getIntersectedFeatures(e.map,t.endPosition),l=Math.round(i.height);null!==(a=e.map)&&void 0!==a&&null!==(s=a.msElevationLayers)&&void 0!==s&&s[0]&&(l=e.getElevation(i.longitude,i.latitude)),e.props.onMouseMove({y:180*i.latitude/Math.PI,x:180*i.longitude/Math.PI,z:l,crs:"EPSG:4326",intersectedFeatures:p})}}})),q(e,"getDocument",(function(){return e.props.document||document})),q(e,"getMapOptions",(function(e){var t={};if(e.terrainProvider){var r=e.terrainProvider,o=r.type,a=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(r,D);switch(o){case"cesium":t.terrainProvider=new n.Z(a);break;case"ellipsoid":t.terrainProvider=new i.Z}}return L()({},e,t)})),q(e,"getCenter",(function(){var t=e.map.scene.globe.pick(new a.Z(e.map.camera.position,e.map.camera.direction),e.map.scene);t||(t=s.Z.add(s.Z.clone(e.map.camera.position),s.Z.multiplyByScalar(s.Z.clone(e.map.camera.direction),1e5,new s.Z),new s.Z));var r=o.Z.fromCartesian(new s.Z(t.x,t.y,t.z));return{longitude:p.Z.toDegrees(r.longitude),latitude:p.Z.toDegrees(r.latitude),height:r.height}})),q(e,"getZoomFromHeight",(function(t){return Math.log2(e.props.zoomToHeight/t)+1})),q(e,"getHeightFromZoom",(function(t){return e.props.zoomToHeight/Math.pow(2,t-1)})),q(e,"getIntersectedFeatures",(function(e,t){var r=e.scene.drillPick(t).filter((function(e){var t,r,o,n,i,a=(null==e||null===(t=e.id)||void 0===t?void 0:t._msIsQueryable)||(null==e||null===(r=e.primitive)||void 0===r?void 0:r._msIsQueryable);return a?a():!(!1===(null==e||null===(o=e.id)||void 0===o||null===(n=o.entityCollection)||void 0===n||null===(i=n.owner)||void 0===i?void 0:i.queryable))}));if(r){var o=r.reduce((function(e,t){var r,o,n,i,a;if(t instanceof l.Z&&null!=t&&null!==(r=t.tileset)&&void 0!==r&&r.msId){i=t.tileset.msId;var s=t.getPropertyIds();a=Object.fromEntries(s.map((function(e){return[e,t.getProperty(e)]})))}else if(null!=t&&null!==(o=t.id)&&void 0!==o&&o._msGetFeatureById||null!=t&&null!==(n=t.primitive)&&void 0!==n&&n._msGetFeatureById){var p,u,c=((null==t||null===(p=t.id)||void 0===p?void 0:p._msGetFeatureById)||(null==t||null===(u=t.primitive)||void 0===u?void 0:u._msGetFeatureById))(t.id);a=c.feature.properties,i=c.msId}return a&&i?V(V({},e),{},q({},i,e[i]?[].concat(function(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e[i]),[{type:"Feature",properties:a,geometry:null}]):[{type:"Feature",properties:a,geometry:null}])):e}),[]);return Object.keys(o).map((function(e){return{id:e,features:o[e]}}))}return[]})),q(e,"gestureStartListener",(function(e){e.preventDefault()})),q(e,"setMousePointer",(function(t){e.map&&(k().findDOMNode(e).getElementsByClassName("cesium-viewer")[0].style.cursor=t||"auto")})),q(e,"_updateMapPositionFromNewProps",(function(t){var r=e.getCenter(),o=e.map.camera.positionCartographic,n=e.getZoomFromHeight(o.height),i=function(e,t){return void 0!==e&&void 0!==t&&e.toFixed(12)-t.toFixed(12)<=1e-12};if(void 0!==t.center){var a=!i(t.center.x,r.longitude)||!i(t.center.y,r.latitude),p=t.zoom!==n;if(a||p){var l,u,c,d,m,v,f,y,h,g,b,O={destination:s.Z.fromDegrees(null!==(l=null===(u=t.viewerOptions)||void 0===u||null===(c=u.cameraPosition)||void 0===c?void 0:c.longitude)&&void 0!==l?l:t.center.x,null!==(d=null===(m=t.viewerOptions)||void 0===m||null===(v=m.cameraPosition)||void 0===v?void 0:v.latitude)&&void 0!==d?d:t.center.y,null!==(f=null===(y=t.viewerOptions)||void 0===y||null===(h=y.cameraPosition)||void 0===h?void 0:h.height)&&void 0!==f?f:e.getHeightFromZoom(null!==(g=t.zoom)&&void 0!==g?g:0)),orientation:null===(b=t.viewerOptions)||void 0===b?void 0:b.orientation};e.setView(O)}}})),q(e,"setView",(function(t){e.map.camera.cancelFlight(),e.map.camera.setView(t)})),q(e,"subscribeClickEvent",(function(t){var r={LEFT_UP:u.Z.LEFT_UP,LEFT_DOWN:u.Z.LEFT_DOWN,LEFT_CLICK:u.Z.LEFT_CLICK,PINCH_START:u.Z.PINCH_START,PINCH_END:u.Z.PINCH_END,PINCH_MOVE:u.Z.PINCH_MOVE},o=new(O().Subject),n=new(O().Subject);Object.keys(r).forEach((function(t){return e.hand.setInputAction((function(e){n.next({type:r[t],movement:e}),o.next({type:r[t],movement:e})}),r[t])})),n.filter((function(e){return e.type===r.PINCH_END})).switchMap((function(){return O().Observable.of(!0).concat(O().Observable.of(!1).delay(500))})).startWith(!1).switchMap((function(e){return e?O().Observable.never():o})).filter((function(e){return e.type===r.LEFT_DOWN})).switchMap((function(e){var t=e.movement;return o.filter((function(e){return e.type===r.LEFT_CLICK})).takeUntil(O().Observable.timer(500).merge(o.filter((function(e){return e.type!==r.LEFT_UP&&e.type!==r.LEFT_CLICK||e.type===r.LEFT_UP&&(o=t&&t.position,n=e.movement&&e.movement.position,!(o&&n&&o.x===n.x&&o.y===n.y));var o,n}))))})).subscribe((function(r){var o=r.movement;return e.onClick(t,o)})),e.clickStream$=o,e.pauserStream$=n})),q(e,"registerHooks",(function(){e.props.hookRegister.registerHook(S.hL),e.props.hookRegister.registerHook(S.kW),e.props.hookRegister.registerHook(S.TH,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.crs,n=r.duration,i=(0,C.reprojectBbox)(t,o,"EPSG:4326");if(e.map.camera.flyTo){var a=c.Z.fromDegrees(i[0],i[1],i[2],i[3]);e.map.camera.flyTo({destination:a,duration:n,complete:e.updateMapInfoState})}}))})),q(e,"updateMapInfoState",(function(){var t=e.getCenter(),r=e.map.camera.positionCartographic,o=e.getZoomFromHeight(r.height),n={height:Math.round(e.props.standardWidth*(o+1)),width:Math.round(e.props.standardHeight*(o+1))},i=e.map.camera.computeViewRectangle();e.props.onMapViewChanges({x:t.longitude,y:t.latitude,crs:"EPSG:4326"},o,{bounds:i?{minx:p.Z.toDegrees(i.west),miny:p.Z.toDegrees(i.south),maxx:p.Z.toDegrees(i.east),maxy:p.Z.toDegrees(i.north)}:{minx:-180,miny:-90,maxx:180,maxy:90},crs:"EPSG:4326",rotation:0},n,e.props.id,e.props.projection,{cameraPosition:{longitude:p.Z.toDegrees(r.longitude),latitude:p.Z.toDegrees(r.latitude),height:r.height},orientation:{heading:e.map.camera.heading,pitch:e.map.camera.pitch,roll:e.map.camera.roll}},(0,S.MR)()[Math.round(o)])})),q(e,"updateInteractions",(function(t){var r,o=V(V({},null===(r=t.mapOptions)||void 0===r?void 0:r.interactions),!t.interactive&&{dragPan:!1,mouseWheelZoom:!1});e.map.scene.screenSpaceCameraController.enableZoom=!(!1===o.mouseWheelZoom),e.map.scene.screenSpaceCameraController.enableRotate=!(!1===o.dragPan),e.map.scene.screenSpaceCameraController.enableTranslate=!(!1===o.dragPan),e.map.scene.screenSpaceCameraController.enableTilt=!(!1===o.dragPan)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&G(e,t)}(t,e),r=t,(h=[{key:"UNSAFE_componentWillMount",value:function(){this.getDocument().addEventListener("gesturestart",this.gestureStartListener)}},{key:"componentDidMount",value:function(){var e,t,r,o,n,i,a,p,l,c,h,g,b,O,P,w,E,k,j,T,S,C,Z,I,M,F=this,D=document.querySelector((null===(e=this.props.mapOptions)||void 0===e||null===(t=e.attribution)||void 0===t?void 0:t.container)||"#footer-attribution-container"),A=new d.Z(this.getDocument().getElementById(this.props.id),L()({imageryProvider:new m.Z,baseLayerPicker:!1,animation:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,navigationInstructionsInitiallyVisible:!1,creditContainer:D||void 0,requestRenderMode:!0,maximumRenderTimeChange:1/0,skyBox:!1,scene3DOnly:!0},this.getMapOptions(this.props.mapOptions)));A.screenSpaceEventHandler.removeInputAction(u.Z.LEFT_DOUBLE_CLICK),this.props.errorPanel&&(A.cesiumWidget.showErrorPanel=function(e,t,r){F.setState({renderError:{title:e,message:t,error:r}})}),this.props.registerHooks&&this.registerHooks(),!1!==(null===(r=this.props.mapOptions)||void 0===r?void 0:r.navigationTools)&&A.extend(y.Z,{enableCompass:null===(M=this.props.mapOptions)||void 0===M?void 0:M.navigationTools,enableZoomControls:!1,enableDistanceLegend:!1}),A.scene.globe.baseColor=v.Z.WHITE,A.imageryLayers.removeAll(),A.camera.moveEnd.addEventListener(this.updateMapInfoState),this.hand=new f.Z(A.scene.canvas),this.subscribeClickEvent(A),this.hand.setInputAction(_()(this.onMouseMove.bind(this),500),u.Z.MOUSE_MOVE);var x,R,H=[null!==(o=null===(n=this.props.viewerOptions)||void 0===n||null===(i=n.cameraPosition)||void 0===i?void 0:i.longitude)&&void 0!==o?o:null===(a=this.props.center)||void 0===a?void 0:a.x,null!==(p=null===(l=this.props.viewerOptions)||void 0===l||null===(c=l.cameraPosition)||void 0===c?void 0:c.latitude)&&void 0!==p?p:null===(h=this.props.center)||void 0===h?void 0:h.y,null!==(g=null===(b=this.props.viewerOptions)||void 0===b||null===(O=b.cameraPosition)||void 0===O?void 0:O.height)&&void 0!==g?g:this.getHeightFromZoom(this.props.zoom)];void 0!==H[0]&&void 0!==H[1]&&A.camera.setView({destination:(x=s.Z).fromDegrees.apply(x,H),orientation:null===(R=this.props.viewerOptions)||void 0===R?void 0:R.orientation}),this.setMousePointer(this.props.mousePointer),this.map=A;var N=this.map.scene;if(this.updateInteractions(this.props),N.skyAtmosphere.show=null===(P=null===(w=this.props.mapOptions)||void 0===w?void 0:w.showSkyAtmosphere)||void 0===P||P,N.fog.enabled=null!==(E=null===(k=this.props.mapOptions)||void 0===k?void 0:k.enableFog)&&void 0!==E&&E,N.globe.showGroundAtmosphere=null!==(j=null===(T=this.props.mapOptions)||void 0===T?void 0:T.showGroundAtmosphere)&&void 0!==j&&j,N.globe.depthTestAgainstTerrain=null!==(S=null===(C=this.props.mapOptions)||void 0===C?void 0:C.depthTestAgainstTerrain)&&void 0!==S&&S,null!==(Z=this.props.mapOptions)&&void 0!==Z&&Z.minimumZoomDistance||null!==(I=this.props.mapOptions)&&void 0!==I&&I.maximumZoomDistance){var V,z,B=null===(V=this.props.mapOptions)||void 0===V?void 0:V.minimumZoomDistance,W=null===(z=this.props.mapOptions)||void 0===z?void 0:z.maximumZoomDistance;B&&(A.scene.screenSpaceCameraController.minimumZoomDistance=B),W&&(A.scene.screenSpaceCameraController.maximumZoomDistance=W)}this.forceUpdate(),A.scene.requestRender()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){return e.mousePointer!==this.props.mousePointer&&this.setMousePointer(e.mousePointer),e.mapStateSource!==this.props.id&&this._updateMapPositionFromNewProps(e),!1}},{key:"componentDidUpdate",value:function(e){var t,r,o,n,i,a,p,l;if(null!==(t=this.props)&&void 0!==t&&t.orientate&&e&&!F()(this.props.orientate,null==e?void 0:e.orientate)){var u={destination:s.Z.fromDegrees(parseFloat(this.props.orientate.x),parseFloat(this.props.orientate.y),this.getHeightFromZoom(parseFloat(this.props.orientate.z))),orientation:{heading:parseFloat(this.props.orientate.heading),pitch:parseFloat(this.props.orientate.pitch),roll:parseFloat(this.props.orientate.roll)}};this.map.camera.cancelFlight(),this.map.camera.flyTo(u,this.props.mapOptions.defaultFlightOptions)}e&&this.props.mapOptions.showSkyAtmosphere!==(null==e||null===(r=e.mapOptions)||void 0===r?void 0:r.showSkyAtmosphere)&&(this.map.scene.skyAtmosphere.show=this.props.mapOptions.showSkyAtmosphere),e&&this.props.mapOptions.showGroundAtmosphere!==(null==e||null===(o=e.mapOptions)||void 0===o?void 0:o.showGroundAtmosphere)&&(this.map.scene.globe.showGroundAtmosphere=this.props.mapOptions.showGroundAtmosphere),e&&this.props.mapOptions.enableFog!==(null==e||null===(n=e.mapOptions)||void 0===n?void 0:n.enableFog)&&(this.map.scene.fog.enabled=this.props.mapOptions.enableFog),e&&this.props.mapOptions.depthTestAgainstTerrain!==(null==e||null===(i=e.mapOptions)||void 0===i?void 0:i.depthTestAgainstTerrain)&&(this.map.scene.globe.depthTestAgainstTerrain=this.props.mapOptions.depthTestAgainstTerrain),(null==e?void 0:e.interactive)===this.props.interactive&&F()(null==e||null===(a=e.mapOptions)||void 0===a?void 0:a.interactions,null===(p=this.props)||void 0===p||null===(l=p.mapOptions)||void 0===l?void 0:l.interactions)||this.updateInteractions(this.props)}},{key:"componentWillUnmount",value:function(){var e,t;this.clickStream$.complete(),this.pauserStream$.complete(),this.hand.destroy(),this.getDocument().removeEventListener("gesturestart",this.gestureStartListener),null!==(e=this.map)&&void 0!==e&&null!==(t=e.cesiumNavigation)&&void 0!==t&&t.destroy&&this.map.cesiumNavigation.destroy(),this.map.destroy()}},{key:"getElevation",value:function(e,t){var r,o=this.map.msElevationLayers||[];return null!=o&&null!==(r=o[0])&&void 0!==r&&r.getElevation?o[0].getElevation({longitude:e,latitude:t}):void 0}},{key:"render",value:function(){var e,t=this,r=this.map,o=this.props.projection,n=r?w().Children.map(this.props.children,(function(e){return e?w().cloneElement(e,{map:r,projection:o,onCreationError:t.props.onCreationError,zoom:t.props.zoom}):null})):null,i=this.props.errorPanel;return w().createElement("div",{id:this.props.id,style:this.props.style},n,i?w().createElement(i,{show:!!this.state.renderError,error:null===(e=this.state.renderError)||void 0===e?void 0:e.error,onReload:function(){return t.props.onReload()}}):null)}}])&&z(r.prototype,h),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,h}(w().Component);q(K,"propTypes",{id:g().string,document:g().object,center:j.ZP.PropTypes.center,zoom:g().number.isRequired,mapStateSource:j.ZP.PropTypes.mapStateSource,projection:g().string,onMapViewChanges:g().func,onCreationError:g().func,onClick:g().func,onMouseMove:g().func,mapOptions:g().object,standardWidth:g().number,standardHeight:g().number,mousePointer:g().string,zoomToHeight:g().number,registerHooks:g().bool,hookRegister:g().object,viewerOptions:g().object,orientate:g().object,zoomControl:g().bool,errorPanel:g().func,onReload:g().func,style:g().object,interactive:g().bool}),q(K,"defaultProps",{id:"map",onMapViewChanges:function(){},onClick:function(){},onCreationError:function(){},projection:"EPSG:3857",mapOptions:{},standardWidth:512,standardHeight:512,zoomToHeight:8e7,registerHooks:!0,hookRegister:{registerHook:S.hx},orientate:void 0,viewerOptions:{orientation:{heading:0,pitch:-1*Math.PI/2,roll:0}},onReload:function(){},interactive:!0});const X=(0,P.forwardRef)((function(e,t){var r,o,n=(r=(0,P.useState)(1),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,a,s=[],p=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;p=!1}else for(;!(p=(o=i.call(r)).done)&&(s.push(o.value),s.length!==t);p=!0);}catch(e){l=!0,n=e}finally{try{if(!p&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw n}}return s}}(r,o)||R(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=n[0],a=n[1];return w().createElement(K,x({key:i,ref:t},e,{onReload:function(){return a(i+1)}}))}))},433353:(e,t,r)=>{"use strict";r.d(t,{u4:()=>s,ZP:()=>p});var o=r(532056),n=r(11020),i=r(604274),a=r(958913);function s(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).pickObjectsLimit,n=void 0===r?Number.MAX_VALUE:r,s=e.scene,p=e.camera,l=t.position||t.endPosition,u=s.pick(l),c=s.pickPosition(l);if(!((null==u?void 0:u.primitive)instanceof i.Z)&&!((null==u?void 0:u.primitive)instanceof a.Z)&&u&&c)return{cartesian:c,cartographic:o.Z.fromCartesian(c),feature:u};var d,m=p.getPickRay(l),v=s.drillPickFromRay(m,n).find((function(e){var t=e.exclude,r=e.object,o=e.position;return!t&&o&&r}))||null;if(v)return{cartesian:v.position,cartographic:o.Z.fromCartesian(v.position),feature:null==v||null===(d=v.object)||void 0===d?void 0:d.primitive};var f=s.globe.pick(m,s);return f?{cartesian:f,cartographic:o.Z.fromCartesian(f)}:{}}const p={getMouseXYZ:function(e,t){var r=e.scene,i=t.position||t.endPosition;if(!i)return null;if(e.scene.drillPick(i).find((function(e){var t,r,o;return!(!1===(null==e||null===(t=e.id)||void 0===t||null===(r=t.entityCollection)||void 0===r||null===(o=r.owner)||void 0===o?void 0:o.queryable))}))){var a=r.globe.depthTestAgainstTerrain,s=r.pickTranslucentDepth;r.globe.depthTestAgainstTerrain=!0,r.pickTranslucentDepth=!0;var p=r.pickPosition(i);if(r.globe.depthTestAgainstTerrain=a,r.pickTranslucentDepth=s,p)return o.Z.fromCartesian(p)}var l=e.camera.getPickRay(i),u=e.scene.globe.pick(l,e.scene),c=r._globe.ellipsoid;if(n.Z(u)){var d=c.cartesianToCartographic(u),m=function(e,t){if(null!==t.position){var r=e.scene,o=r._globe.ellipsoid;return r.camera.pickEllipsoid(t.position||t.endPosition,o)}return null}(e,t);return m&&(d.height=r._globe.getHeight(d),d.cartesian=m,d.position=u),d}return null},getMouseTile:function(e,t){var r=e.scene;if(!t.position)return null;var o=e.camera.getPickRay(t.position);return e.scene.globe.pickTile(o,r)}}}}]);
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[33122],{223502:(e,t,r)=>{"use strict";r.d(t,{$:()=>u,b:()=>c});var n=r(737275),i=r(701469),o=r.n(i),a=r(513218),l=r.n(a),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o()(e))return e.reduce((function(e,t){return u(t)&&e}),!0);var r=!1,i=!(0===e.indexOf("http")),a=!i&&e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(a){var c=window.location;i=a[1]===c.protocol&&a[3]===c.hostname;var s=a[4],m=c.port;(80!==s&&""!==s||"80"!==m&&""!==m)&&(i=i&&s===m)}if(!i){var y=n.ZP.getProxyUrl(t);if(y){var p=[];l()(y)&&(p=y.useCORS||[],y=y.url),p.reduce((function(t,r){return t||0===e.indexOf(r)}),!1)||(r=!0)}}return r},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.ZP.getProxyUrl(e);return t&&l()(t)&&(t=t.url),t}},833122:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ve});var n=r(545477),i=r(35961),o=r(312763),a=r(660904),l=r(532056),u=r(888340),c=r(11020),s=r(659635),m=r(720794),y=r(160629),p=r(218157),d=r(344485),f=r(405254),g=r(296541),v=r(990778),h=r(644001),T=r(205522),b=r(428709),O=r(730617),P=r(203547),C=r(503939),Z=r(65792),E=r.n(Z),S=r(984596),w=r.n(S),L=r(281763),G=r.n(L),x=r(618446),R=r.n(x),I=r(396026),H=r.n(I),j=r(807654),N=r.n(j),z=r(223502),A=r(830049),D=r(507122),M=r(976337),k=r(407578);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}var F=["msTranslateX","msTranslateY","msHeight"],W=["msGeometry"],B=["msGeometry"];function U(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,q(n.key),n)}}function V(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){$(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $(e,t,r){return(t=q(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){var t=function(e){if("object"!=_(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==_(t)?t:t+""}function J(e){return function(e){if(Array.isArray(e))return K(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Q(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){if(e){if("string"==typeof e)return K(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?K(e,t):void 0}}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var ee=D.v.cesium({Cesium:n});function te(e){var t=e.color,r=e.opacity;if(!t)return new i.Z(0,0,0,0);var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,l=[],u=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||Q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(E()(t).gl(),4),o=n[0],a=n[1],l=n[2],u=n[3];return void 0!==r?new i.Z(o,a,l,r):new i.Z(o,a,l,u)}function re(e){var t=e.color,r=e.opacity,n=e.dasharray;if((null==n?void 0:n.length)<=0)return te({color:t,opacity:r});var i=n.reduce((function(e,t){return e+t}),0);return new o.Z({color:te({color:t,opacity:r}),dashLength:i,dashPattern:parseInt(n.map((function(e){return Math.floor(e/i*16)})).map((function(e,t){return H()(e).map((function(){return t%2==0?"1":"0"})).join("")})).join(""),2)})}var ne=function(e){var t=parseFloat(e);return!N()(t)&&G()(t)?t:null},ie=function(e){var t=e.map,r=e.positions,n=e.heightReference,i=e.sampleTerrain,o=e.initialHeight,s=null!=n?n:"none",m={none:function(e){return e},relative:function(e,t){return e+t},clamp:function(e,t){return t}},y=[],p=function(e){var t=m[s],r=1/0,n=-1/0,i=1/0,o=-1/0,l=e.map((function(e,l){var u=y[l]||0,c="none"===s?0:e.height||0,m=t(u,c);return r=m<r?m:r,n=m>n?m:n,i=c<i?c:i,o=c>o?c:o,a.Z.fromRadians(e.longitude,e.latitude,m)}));return{height:{min:r,max:n},sampledHeight:{min:i,max:o},positions:l}},d=r.map((function(e){var t,r=l.Z.fromCartesian(e);return y.push(null!==(t=null!=o?o:r.height)&&void 0!==t?t:0),new l.Z(r.longitude,r.latitude,null!=o?o:0)})),f=null==t?void 0:t.terrainProvider;return"none"!==s&&f?(f.ready?Promise.resolve(!0):f.readyPromise).then((function(){var e,t,r,n=null!=f&&f.availability?u.Z(f,d):i(f,null!==(e=null==f?void 0:f.sampleTerrainZoomLevel)&&void 0!==e?e:18,d);return c.Z(n)?null===(t=n.then((function(e){return p(e)})))||void 0===t||null===(r=t.catch)||void 0===r?void 0:r.call(t,(function(){return p(d)})):p(d)})):Promise.resolve(p(d))},oe={};function ae(e){var t=e.offset,r=void 0===t?[]:t,n=e.msLeaderLineWidth,i=null!=n?n:1,o=Math.abs(r[0]||1),a=Math.abs(r[1]||1),l=Math.sign(r[0])===Math.sign(r[1]),u=[o,a,i,l].join(";");if(oe[u])return oe[u];var c=document.createElement("canvas");c.setAttribute("width",o),c.setAttribute("height",a);var s=c.getContext("2d");return s.strokeStyle="#ffffff",s.lineWidth=i,s.beginPath(),s.moveTo.apply(s,J(l?[0,0]:[o,0])),s.lineTo.apply(s,J(l?[o,a]:[0,a])),s.stroke(),oe[u]=c,c}var le=function(e,t){var r=t||{},n=r.msTranslateX,i=r.msTranslateY,o=ne(n),l=ne(i);return o||l?s.Z.multiplyByPoint(m.Z.eastNorthUpToFixedFrame(e),new a.Z(o||0,l||0,0),new a.Z):e},ue={none:"NONE",relative:"RELATIVE_TO_GROUND",clamp:"CLAMP_TO_GROUND"},ce=function(e){switch(e){case"top-left":return{horizontalOrigin:y.Z.LEFT,verticalOrigin:p.Z.TOP};case"top":return{horizontalOrigin:y.Z.CENTER,verticalOrigin:p.Z.TOP};case"top-right":return{horizontalOrigin:y.Z.RIGHT,verticalOrigin:p.Z.TOP};case"left":return{horizontalOrigin:y.Z.LEFT,verticalOrigin:p.Z.CENTER};case"center":default:return{horizontalOrigin:y.Z.CENTER,verticalOrigin:p.Z.CENTER};case"right":return{horizontalOrigin:y.Z.RIGHT,verticalOrigin:p.Z.CENTER};case"bottom-left":return{horizontalOrigin:y.Z.LEFT,verticalOrigin:p.Z.BOTTOM};case"bottom":return{horizontalOrigin:y.Z.CENTER,verticalOrigin:p.Z.BOTTOM};case"bottom-right":return{horizontalOrigin:y.Z.RIGHT,verticalOrigin:p.Z.BOTTOM}}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Square",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("Circle"===e){for(var r=[],n=0;n<360;n++){var i=d.Z.toRadians(n);r.push(new f.Z(t*Math.cos(i),t*Math.sin(i)))}return r}return"Square"===e?[new f.Z(-t,-t),new f.Z(t,-t),new f.Z(t,t),new f.Z(-t,t)]:[]},me=function(e,t){var r=t||{},n=r.heading,i=r.pitch,o=r.roll;if(n||i||o){var a=new g.Z(d.Z.toRadians(null!=n?n:0),d.Z.toRadians(null!=i?i:0),d.Z.toRadians(null!=o?o:0));return m.Z.headingPitchRollQuaternion(e,a)}return null},ye=function(e,t){var r,n=t.radius,i=e;if(t.geodesic){var o=M.Z.computeEllipsePositions({granularity:.02,semiMajorAxis:n,semiMinorAxis:n,rotation:0,center:i},!1,!0).outerPositions;r=a.Z.unpackArray(o),r=[].concat(J(r),[r[0]])}else{var l=s.Z.multiplyByTranslation(m.Z.eastNorthUpToFixedFrame(i),new a.Z(0,0,0),new s.Z);r=k.Z.computePositions(0,n,n,128,!1),r=(r=J((r=a.Z.unpackArray(r)).splice(0,Math.ceil(r.length/2)))).map((function(e){return s.Z.multiplyByPoint(l,e,new a.Z)})),r=[].concat(J(r),[r[0]])}return r},pe=function(e,t){var r=(t||{}).msHeight,n=ne(r);if(null!==n){var i=l.Z.fromCartesian(e);return a.Z.fromRadians(i.longitude,i.latitude,n)}return e},de={point:function(e){var t=e.feature,r=e.primitive,n=e.parsedSymbolizer;if("Point"===t.geometry.type){var i=pe(t.positions[0][0],n),o=me(i,n);return X(X({},e),{},{primitive:X(X({},r),{},{orientation:o,geometry:le(i,n)})})}var a=ee(X({msGeometry:{name:"centerPoint"}},n))(t).position,l=me(a,n);return X(X({},e),{},{primitive:X(X({},r),{},{orientation:l,geometry:le(pe(a,n),n)})})},leaderLine:function(e,t){var r=t.map,n=t.sampleTerrain,i=e.parsedSymbolizer,o=(i.msTranslateX,i.msTranslateY,i.msHeight,V(i,F)),a=de.point(X(X({},e),{},{parsedSymbolizer:o})).primitive;return Promise.all([ie({map:r,positions:[a.geometry],heightReference:"clamp",sampleTerrain:n}).then((function(e){return e.positions[0]})),ie({map:r,positions:[le(pe(a.geometry,i),i)],heightReference:i.msHeightReference,sampleTerrain:n}).then((function(e){return e.positions[0]}))]).then((function(t){return X(X({},e),{},{primitive:X(X({},a),{},{geometry:[t]})})}))},polyline:function(e,t){var r=t.map,n=t.sampleTerrain,i=e.feature,o=e.primitive,a=e.parsedSymbolizer,l=ne(a.msExtrudedHeight),u=ne(a.msHeight);if(null!==u||a.msExtrusionRelativeToGeometry){var c=1/0,s=-1/0;return Promise.all(null==i?void 0:i.positions.map((function(e){return ie({map:r,positions:e,heightReference:a.msHeightReference,sampleTerrain:n,initialHeight:u}).then((function(e){var t=e[a.msExtrusionRelativeToGeometry?"height":"sampledHeight"];return c=t.min<c?t.min:c,s=t.max>s?t.max:s,e.positions}))}))).then((function(t){return X(X({},e),{},{primitive:X(X({},o),{},{geometry:t,extrudedHeight:l?l+(l>0?s:c):void 0})})}))}return X(X({},e),{},{primitive:X(X({},o),{},{geometry:null==i?void 0:i.positions},null!==l&&{extrudedHeight:l})})},wall:function(e,t){return Promise.resolve(de.polyline(e,t)).then((function(t){var r,n,i=t.primitive;return X(X({},e),{},{primitive:X(X({},i),{},{geometry:null==i?void 0:i.geometry,minimumHeights:null==i||null===(r=i.geometry)||void 0===r?void 0:r.map((function(e){return e.map((function(e){return l.Z.fromCartesian(e).height}))})),maximumHeights:null==i||null===(n=i.geometry)||void 0===n?void 0:n.map((function(e){return e.map((function(){return i.extrudedHeight}))}))})})}))},polygon:function(e,t){var r,n,i=t.map,o=t.sampleTerrain,a=e.feature,l=e.primitive,u=e.parsedSymbolizer,c=ne(u.msExtrudedHeight),s=ne(u.msHeight);if("none"!==(u.msHeightReference||"none")||u.msExtrusionRelativeToGeometry){var m=1/0,y=-1/0;return Promise.all(null==a?void 0:a.positions.map((function(e){return ie({map:i,positions:e,heightReference:u.msHeightReference,sampleTerrain:o,initialHeight:s}).then((function(e){var t=e[u.msExtrusionRelativeToGeometry?"height":"sampledHeight"];return m=t.min<m?t.min:m,y=t.max>y?t.max:y,e.positions}))}))).then((function(t){var r,n,i={height:void 0,extrudedHeight:c?c+(c>0?y:m):void 0};return X(X({},e),{},{primitive:X(X({},l),{},{geometry:t},null!=l&&null!==(r=l.entity)&&void 0!==r&&r.polygon?{entity:{polygon:X(X({},null==l||null===(n=l.entity)||void 0===n?void 0:n.polygon),i)}}:i)})}))}var p=X(X({},null!==c&&{extrudedHeight:c}),null!==s&&{height:s,perPositionHeight:!1});return X(X({},e),{},{primitive:X(X({},l),{},{geometry:null==a?void 0:a.positions},null!=l&&null!==(r=l.entity)&&void 0!==r&&r.polygon?{entity:{polygon:X(X({},null==l||null===(n=l.entity)||void 0===n?void 0:n.polygon),p)}}:p)})},circlePolyline:function(e){var t=e.feature,r=e.primitive,n=e.parsedSymbolizer;if("Point"===t.geometry.type){var i=a.Z.fromDegrees(t.geometry.coordinates[0],t.geometry.coordinates[1],t.geometry.coordinates[2]||0),o=ye(i,n);return X(X({},e),{},{primitive:X(X({},r),{},{geometry:[o]})})}return e},circlePolygon:function(e){var t=e.feature,r=e.primitive,n=e.parsedSymbolizer;if("Point"===t.geometry.type){var i=a.Z.fromDegrees(t.geometry.coordinates[0],t.geometry.coordinates[1],t.geometry.coordinates[2]||0),o=ye(i,n);return X(X({},e),{},{primitive:X(X({},r),{},{geometry:[o]})})}return e}},fe={Mark:function(e){var t,r=e.parsedSymbolizer,n=e.globalOpacity,i=e.images,o=e.symbolizer,a=i.find((function(e){return e.id===(0,A.kD)(r,o)}))||{},l=a.image,u=a.width,c=a.height,s=u>c?u:c,m=2*r.radius/s;return l&&!N()(m)?[{type:"point",geometryType:"point",entity:{billboard:{image:l,scale:m,rotation:d.Z.toRadians(-1*r.rotate||0),disableDepthTestDistance:r.msBringToFront?Number.POSITIVE_INFINITY:0,heightReference:v.Z[ue[r.msHeightReference]||"NONE"],color:te({color:"#ffffff",opacity:1*n})}}}].concat(J(r.msLeaderLineWidth?[{type:"leaderLine",geometryType:"leaderLine",entity:{polyline:{material:te({color:r.msLeaderLineColor||"#000000",opacity:(null!==(t=r.msLeaderLineOpacity)&&void 0!==t?t:1)*n}),width:r.msLeaderLineWidth}}}]:[])):[]},Icon:function(e){var t,r=e.parsedSymbolizer,n=e.globalOpacity,i=e.images,o=e.symbolizer,a=i.find((function(e){return e.id===(0,A.kD)(r,o)}))||{},l=a.image,u=a.width,c=a.height,s=u>c?u:c,m=r.size/s;return l&&!N()(m)?[{type:"point",geometryType:"point",entity:{billboard:X(X({image:l,scale:m},ce(r.anchor)),{},{pixelOffset:r.offset?new f.Z(r.offset[0],r.offset[1]):null,rotation:d.Z.toRadians(-1*r.rotate||0),disableDepthTestDistance:r.msBringToFront?Number.POSITIVE_INFINITY:0,heightReference:v.Z[ue[r.msHeightReference]||"NONE"],color:te({color:"#ffffff",opacity:r.opacity*n})})}}].concat(J(r.msLeaderLineWidth?[{type:"leaderLine",geometryType:"leaderLine",entity:{polyline:{material:te({color:r.msLeaderLineColor||"#000000",opacity:(null!==(t=r.msLeaderLineOpacity)&&void 0!==t?t:1)*n}),width:r.msLeaderLineWidth}}}]:[])):[]},Text:function(e){var t,r,n,i,o=e.parsedSymbolizer,a=e.feature,l=e.globalOpacity,u=ne(null==o||null===(t=o.offset)||void 0===t?void 0:t[0]),c=ne(null==o||null===(r=o.offset)||void 0===r?void 0:r[1]);return[{type:"point",geometryType:"point",entity:{label:X(X({text:(0,A.xV)({properties:a.properties},o.label,""),font:[o.fontStyle,o.fontWeight,"".concat(o.size,"px"),w()(o.font||["serif"]).join(", ")].filter((function(e){return e})).join(" "),fillColor:te({color:o.color,opacity:1*l})},ce(o.anchor)),{},{disableDepthTestDistance:o.msBringToFront?Number.POSITIVE_INFINITY:0,heightReference:v.Z[ue[o.msHeightReference]||"NONE"],pixelOffset:new f.Z(null!=u?u:0,null!=c?c:0)},o.haloWidth>0&&{style:h.Z.FILL_AND_OUTLINE,outlineColor:te({color:o.haloColor,opacity:1*l}),outlineWidth:o.haloWidth})}}].concat(J(o.msLeaderLineWidth?[{type:"leaderLine",geometryType:"leaderLine",entity:{polyline:{material:te({color:o.msLeaderLineColor||"#000000",opacity:(null!==(n=o.msLeaderLineOpacity)&&void 0!==n?n:1)*l}),width:o.msLeaderLineWidth}}}]:[]),J(o.msLeaderLineWidth&&(u||c)?[{type:"offset",geometryType:"point",entity:{billboard:{image:ae(o),scale:1,pixelOffset:new f.Z((u||0)/2,(c||0)/2),color:te({color:o.msLeaderLineColor||"#000000",opacity:(null!==(i=o.msLeaderLineOpacity)&&void 0!==i?i:1)*l})}}}]:[]))},Model:function(e){var t,r,n,i,o=e.parsedSymbolizer,a=e.globalOpacity;return null!=o&&o.model?[{type:"point",geometryType:"point",entity:{model:{uri:new T.Z({proxy:(0,z.$)(null==o?void 0:o.model)?new b.Z((0,z.b)()):void 0,url:null==o?void 0:o.model}),color:te({color:null!==(t=o.color)&&void 0!==t?t:"#ffffff",opacity:(null!==(r=o.opacity)&&void 0!==r?r:1)*a}),scale:null!==(n=null==o?void 0:o.scale)&&void 0!==n?n:1,heightReference:v.Z[ue[o.msHeightReference]||"NONE"]}}}].concat(J(o.msLeaderLineWidth?[{type:"leaderLine",geometryType:"leaderLine",entity:{polyline:{material:te({color:o.msLeaderLineColor||"#000000",opacity:(null!==(i=o.msLeaderLineOpacity)&&void 0!==i?i:1)*a}),width:o.msLeaderLineWidth}}}]:[])):[]},Line:function(e){var t,r,n=e.parsedSymbolizer,i=e.feature,o=e.globalOpacity,a=ee(n),l=a?a(i):{};return[].concat(J(n.color&&0!==n.width?[{type:"polyline",geometryType:"polyline",entity:{polyline:X({material:null!=n&&n.dasharray?re({color:n.color,opacity:n.opacity*o,dasharray:n.dasharray}):te({color:n.color,opacity:n.opacity*o}),width:n.width,clampToGround:n.msClampToGround,arcType:n.msClampToGround?O.Z.GEODESIC:O.Z.NONE},l)}}]:[]),J(n.msClampToGround||!n.msExtrudedHeight||n.msExtrusionType?[]:[{type:"polylineVolume",geometryType:"wall",entity:{wall:{material:te({color:n.msExtrusionColor||"#000000",opacity:(null!==(t=n.msExtrusionOpacity)&&void 0!==t?t:1)*o})}}}]),J(!n.msClampToGround&&n.msExtrudedHeight&&n.msExtrusionType?[{type:"polylineVolume",geometryType:"polyline",entity:{polylineVolume:{material:te({color:n.msExtrusionColor||"#000000",opacity:(null!==(r=n.msExtrusionOpacity)&&void 0!==r?r:1)*o}),shape:se(n.msExtrusionType,n.msExtrudedHeight/2)}}}]:[]))},Fill:function(e){var t=e.parsedSymbolizer,r=e.feature,n=e.globalOpacity,i=!t.msClampToGround&&!!t.msExtrudedHeight,o=ee(t),a=o?o(r):{};return[{type:"polygon",geometryType:"polygon",clampToGround:t.msClampToGround,entity:{polygon:X(X({material:te({color:t.color,opacity:t.fillOpacity*n}),perPositionHeight:!t.msClampToGround},t.msClampToGround?{classificationType:"terrain"===t.msClassificationType?P.Z.TERRAIN:"3d"===t.msClassificationType?P.Z.CESIUM_3D_TILE:P.Z.BOTH}:void 0),{},{arcType:t.msClampToGround?O.Z.GEODESIC:void 0},a)}}].concat(J(t.outlineColor&&0!==t.outlineWidth&&!i?[{type:"polyline",geometryType:"polyline",entity:{polyline:X(X({material:null!=t&&t.outlineDasharray?re({color:t.outlineColor,opacity:t.outlineOpacity*n,dasharray:t.outlineDasharray}):te({color:t.outlineColor,opacity:t.outlineOpacity*n}),width:t.outlineWidth,clampToGround:t.msClampToGround},t.msClampToGround?{classificationType:"terrain"===t.msClassificationType?P.Z.TERRAIN:"3d"===t.msClassificationType?P.Z.CESIUM_3D_TILE:P.Z.BOTH}:void 0),{},{arcType:t.msClampToGround?O.Z.GEODESIC:O.Z.NONE},a)}}]:[]))},Circle:function(e){var t=e.parsedSymbolizer,r=e.globalOpacity;return[{type:"polygon",geometryType:"circlePolygon",clampToGround:t.msClampToGround,entity:{polygon:X({material:te({color:t.color,opacity:t.opacity*r})},t.geodesic?X(X({perPositionHeight:!t.msClampToGround},t.msClampToGround?{classificationType:"terrain"===t.msClassificationType?P.Z.TERRAIN:"3d"===t.msClassificationType?P.Z.CESIUM_3D_TILE:P.Z.BOTH}:void 0),{},{arcType:O.Z.GEODESIC}):{perPositionHeight:!0,arcType:void 0})}}].concat(J(t.outlineColor&&0!==t.outlineWidth?[{type:"polyline",geometryType:"circlePolyline",entity:{polyline:X({material:null!=t&&t.outlineDasharray?re({color:t.outlineColor,opacity:t.outlineOpacity*r,dasharray:t.outlineDasharray}):te({color:t.outlineColor,opacity:t.outlineOpacity*r}),width:t.outlineWidth},t.geodesic?X(X({clampToGround:t.msClampToGround},t.msClampToGround?{classificationType:"terrain"===t.msClassificationType?P.Z.TERRAIN:"3d"===t.msClassificationType?P.Z.CESIUM_3D_TILE:P.Z.BOTH}:void 0),{},{arcType:O.Z.GEODESIC}):{clampToGround:!1,arcType:O.Z.NONE})}}]:[]))}},ge=function(e,t){e.msGeometry;var r=V(e,W),n=(t.msGeometry,V(t,B));return!R()(r,n)};const ve=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(t=[{key:"readStyle",value:function(){return new Promise((function(e,t){try{e(null)}catch(e){t(e)}}))}},{key:"writeStyle",value:function(e){return new Promise((function(t,r){try{t(function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).rules,t=void 0===e?[]:e;return function(e){var r=e.opacity,n=void 0===r?1:r,i=e.features,o=e.getPreviousStyledFeature,a=void 0===o?function(){}:o,l=e.map,u=e.sampleTerrain,c=void 0===u?C.Z:u;return(0,A.vg)({rules:t},{features:i}).then((function(e){var r=function(e){var t=e.rules,r=e.features,n=e.globalOpacity,i=e.images;return null==t?void 0:t.map((function(e){var t=r.filter((function(t){var r=t.properties;return!e.filter||(0,A.NG)({properties:r||{}},e.filter)}));return e.symbolizers.map((function(e){return t.filter((function(t){return function(e){var t=e.geometry,r=e.symbolizer;return!("Point"===t.type&&["Fill","Line"].includes(r.kind)||"LineString"===t.type&&["Fill"].includes(r.kind)||"Polygon"===t.type&&["Line"].includes(r.kind))}({geometry:t.geometry,symbolizer:e})})).map((function(t){var r=(0,A.mL)(e,t);return(fe[r.kind]?fe[r.kind]:function(){return[]})({feature:t,symbolizer:e,images:i,parsedSymbolizer:r,globalOpacity:n}).map((function(n){return{id:"".concat(t.id,":").concat(r.symbolizerId,":").concat(n.type),feature:t,primitive:n,symbolizer:e,parsedSymbolizer:r}}))})).flat()})).flat()})).flat()}({rules:t,features:i,globalOpacity:n,images:e});return Promise.all(r.map((function(e){var t,r,n,i,o,u,s=a(e);if(!s||(n=s.parsedSymbolizer,i=e.parsedSymbolizer,(null==n||null===(o=n.msGeometry)||void 0===o?void 0:o.name)!==(null==i||null===(u=i.msGeometry)||void 0===u?void 0:u.name)||(null==n?void 0:n.msHeight)!==(null==i?void 0:i.msHeight)||(null==n?void 0:n.msHeightReference)!==(null==i?void 0:i.msHeightReference)||(null==n?void 0:n.msExtrudedHeight)!==(null==i?void 0:i.msExtrudedHeight)||(null==n?void 0:n.msExtrusionRelativeToGeometry)!==(null==i?void 0:i.msExtrusionRelativeToGeometry)||(null==n?void 0:n.msExtrusionType)!==(null==i?void 0:i.msExtrusionType)||(null==n?void 0:n.msTranslateX)!==(null==i?void 0:i.msTranslateX)||(null==n?void 0:n.msTranslateY)!==(null==i?void 0:i.msTranslateY)||(null==n?void 0:n.heading)!==(null==i?void 0:i.heading)||(null==n?void 0:n.pitch)!==(null==i?void 0:i.pitch)||(null==n?void 0:n.roll)!==(null==i?void 0:i.roll))){var m,y,p=de[null==e||null===(m=e.primitive)||void 0===m?void 0:m.geometryType]?de[null==e||null===(y=e.primitive)||void 0===y?void 0:y.geometryType]:function(){return e};return Promise.resolve(p(e,{map:l,sampleTerrain:c})).then((function(e){return X(X({},e),{},{action:"replace"})}))}return Promise.resolve(X(X({},e),{},{primitive:X(X(X({},null==s?void 0:s.primitive),null==e?void 0:e.primitive),{},{geometry:null==s||null===(t=s.primitive)||void 0===t?void 0:t.geometry,entity:X({},Object.keys((null==e||null===(r=e.primitive)||void 0===r?void 0:r.entity)||{}).reduce((function(t,r){var n,i,o,a;return X(X({},t),{},$({},r,X(X({},null==s||null===(n=s.primitive)||void 0===n||null===(i=n.entity)||void 0===i?void 0:i[r]),null==e||null===(o=e.primitive)||void 0===o||null===(a=o.entity)||void 0===a?void 0:a[r])))}),{}))}),action:ge(s.parsedSymbolizer,e.parsedSymbolizer)?"update":"none"}))})))})).then((function(e){return e.filter((function(e){return!!e.primitive.geometry}))}))}}(e))}catch(e){r(e)}}))}}])&&U(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}()},507122:(e,t,r)=>{"use strict";r.d(t,{v:()=>s});var n=r(664632),i=r(894417),o=r(180651),a=r(916651);function l(e,t){if(e){if("string"==typeof e)return u(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var c=function(e){return["centerPoint","lineToArc","startPoint","endPoint"].includes(null==e?void 0:e.name)},s={cesium:function(e){var t=e.Cesium,r=function(e){if(null!=e&&e.positions)return{type:e.geometry.type,positions:null==e?void 0:e.positions[0]};var r=("Polygon"===e.geometry.type?e.geometry.coordinates[0]:e.geometry.coordinates).map((function(e){return t.Cartesian3.fromDegrees(e[0],e[1],e[2])}));return{type:e.geometry.type,positions:r}},n={centerPoint:function(e){var n,i=r(e),a=i.positions,c=i.type,s=a.map((function(e){var r=t.Cartographic.fromCartesian(e),n=r.longitude,i=r.latitude,o=r.height;return[t.Math.toDegrees(n),t.Math.toDegrees(i),o]}));if("LineString"===c){var m=a.reduce((function(e,r,n){return a[n+1]?e+t.Cartesian3.distance(r,a[n+1]):e}),0)/2,y=s.map((function(e,r){var n=a.filter((function(e,t){return t<r+1}));return[e[0],e[1],e[2],n.reduce((function(e,r,i){return n[i+1]?e+t.Cartesian3.distance(r,n[i+1]):e}),0)]})),p=y.find((function(e){return e[3]>m})),d=y.indexOf(p)-1,f=y[d],g=m-f[3],v=t.Cartographic.toCartesian(t.Cartographic.fromDegrees(f[0],f[1],f[2])),h=t.Cartesian3.normalize(t.Cartesian3.subtract(t.Cartographic.toCartesian(t.Cartographic.fromDegrees(p[0],p[1],p[2])),v,new t.Cartesian3),new t.Cartesian3);return{position:t.Cartesian3.add(v,t.Cartesian3.multiplyByScalar(h,g,new t.Cartesian3),new t.Cartesian3)}}var T,b=((0,o.Z)({type:"Polygon",coordinates:[[].concat((T=s,function(e){if(Array.isArray(e))return u(e)}(T)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(T)||l(T)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[s[0]])]})||{}).geometry,O=s.reduce((function(e,t){return e+function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o,a,l=[],u=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,i=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,3)[2]}),0)/s.length,P=[b.coordinates[0],b.coordinates[1],O]||0;return{position:t.Cartographic.toCartesian((n=t.Cartographic).fromDegrees.apply(n,P))}},lineToArc:function(){return{arcType:t.ArcType.GEODESIC,perPositionHeight:void 0}},startPoint:function(e){return{position:r(e).positions[0].clone()}},endPoint:function(e){var t=r(e).positions;return{position:t["Polygon"===e.geometry.type?t.length-2:t.length-1].clone()}}};return function(e){var t=e.msGeometry;return c(t)&&n[null==t?void 0:t.name]?n[t.name]:null}},openlayers:function(e){var t=e.Point,r=e.LineString,o=e.Polygon,l=e.GeoJSON,u=e.getCenter,s=new l,m={centerPoint:function(e){return function(r){var o=r.getGeometry().getType();if(["Point","MultiPoint"].includes(o))return r.getGeometry();var l=e?e.getView().getProjection().getCode():"EPSG:3857",c=r.getGeometry();if(["LineString"].includes(o)){var m=JSON.parse(s.writeFeature(r,{dataProjection:"EPSG:4326",featureProjection:l})),y=(0,n.Z)(m)/2,p=(0,i.Z)(m,y),d=(0,a.reproject)(p.geometry.coordinates,"EPSG:4326",l);return new t([d.x,d.y])}var f=c.getExtent(),g=u(f);return new t(g)}},lineToArc:function(e){return function(t){var n=e?e.getView().getProjection().getCode():"EPSG:3857",i=t.getGeometry().getType();if("LineString"===i||"MultiPoint"===i){var l=t.getGeometry().getCoordinates();return l=(0,a.transformLineToArcs)(l.map((function(e){var t=(0,a.reproject)(e,n,"EPSG:4326");return[t.x,t.y]}))),new r(l.map((function(e){var t=(0,a.reproject)(e,"EPSG:4326",n);return[t.x,t.y]})))}if("Polygon"===i){var u=t.getGeometry().getCoordinates()[0];return u=(0,a.transformLineToArcs)(u.map((function(e){var t=(0,a.reproject)(e,n,"EPSG:4326");return[t.x,t.y]}))),new o([u.map((function(e){var t=(0,a.reproject)(e,"EPSG:4326",n);return[t.x,t.y]}))])}return t.getGeometry()}},startPoint:function(){return function(e){var r=e.getGeometry(),n=r.getType();if(["Point","MultiPoint"].includes(n))return e.getGeometry();var i="Polygon"===n?r.getCoordinates()[0]:r.getCoordinates();return i.length>1?new t(i[0]):null}},endPoint:function(){return function(e){var r=e.getGeometry(),n=r.getType();if(["Point","MultiPoint"].includes(n))return e.getGeometry();var i="Polygon"===n?r.getCoordinates()[0]:r.getCoordinates();return new t(i.length>3?i[i.length-("Polygon"===n?2:1)]:i[i.length-1])}}};return function(e,t,r){var n,i=e.msGeometry;if(c(i)&&m[null==i?void 0:i.name])return{geometry:m[i.name](r)};var o=(null==t?void 0:t.getGeometry)&&(null==t||null===(n=t.getGeometry())||void 0===n?void 0:n.getType());return["Mark","Icon"].includes(e.kind)&&["LineString","MultiLineString","Polygon","MultiPolygon"].includes(o)?{geometry:m.centerPoint(r)}:null}},geojson:function(){var e={centerPoint:function(e){if(["LineString"].includes(e.geometry.type)){var t=(0,n.Z)(e)/2;return(0,i.Z)(e,t).geometry.coordinates}return(0,o.Z)(e).geometry.coordinates},lineToArc:function(e){return"LineString"===e.geometry.type?(0,a.transformLineToArcs)(e.geometry.coordinates):"Polygon"===e.geometry.type?e.geometry.coordinates.map(a.transformLineToArcs):null},startPoint:function(e){return"Polygon"===e.geometry.type?e.geometry.coordinates[0][0]:"LineString"===e.geometry.type?e.geometry.coordinates[0]:null},endPoint:function(e){return"Polygon"===e.geometry.type?e.geometry.coordinates[0][e.geometry.coordinates[0].length-2]:"LineString"===e.geometry.type?e.geometry.coordinates[e.geometry.coordinates.length-1]:null}};return function(t){var r=t.msGeometry;return c(r)&&e[null==r?void 0:r.name]?e[r.name]:null}}}}}]);
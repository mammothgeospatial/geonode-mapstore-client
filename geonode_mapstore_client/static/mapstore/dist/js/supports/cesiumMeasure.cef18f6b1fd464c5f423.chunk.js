(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[68175],{420819:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>X});var n=r(124852),o=r.n(n),i=r(45697),a=r.n(i),l=r(968929),u=r.n(l),c=r(480681),s=r(200020),f=r(180307),d=r(38560),m=r(660904),p=r(532056),g=r(405254),v=r(160629),y=r(218157),b=r(644001),E=r(344485),h=r(883900),O=r(472568),I=r(185447),D=r(423570),S=r.n(D),T=r(37532),A=r(808797),N=r(916651),C=r(550172),_=r(637453);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(e,t)||G(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t,r){if(Z())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&P(o,r.prototype),o}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function Z(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Z=function(){return!!e})()}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=L(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=L(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==L(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||G(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,t){if(e){if("string"==typeof e)return x(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function H(e){var t=m.Z.distance(e[1],e[0]),r=m.Z.distance(e[1],e[2]),n=m.Z.normalize(m.Z.subtract(e[0],e[1],new m.Z),new m.Z),o=m.Z.normalize(m.Z.subtract(e[2],e[1],new m.Z),new m.Z),i=m.Z.normalize((0,_.eN)(n,o),new m.Z),a=(t>r?r:t)/3;return[n,i,o].map((function(t){return m.Z.add(e[1],m.Z.multiplyByScalar(t,a,new m.Z),new m.Z)}))}const M=function(e){var t,r=e.map,i=e.active,a=void 0!==i&&i,l=e.type,u=e.clearId,c=e.hideInfoLabel,s=e.hideSegmentsLengthLabels,f=e.onUpdateCollection,d=void 0===f?function(){}:f,D=e.unitsOfMeasure,L=void 0===D?{}:D,P=e.tooltipLabels,Z=void 0===P?{}:P,w=e.style,G=void 0===w?{primaryLabel:{font:"12px sans-serif",fillColor:"#ffffff",backgroundColor:"rgba(0, 0, 0, 0.6)"},secondaryLabel:{font:"12px sans-serif",fillColor:"#ffffff",outlineColor:"#000000",outlineWidth:4,offset:[0,-16]},tooltip:{font:"12px sans-serif",fillColor:"#ffffff",backgroundColor:"rgba(0, 0, 0, 0.5)",offset:[8,8]},lineDrawing:{color:"#000000",opacity:1,depthFailColor:"#000000",depthFailOpacity:.4,width:3,dashLength:8},line:{color:"#ffcc33",opacity:1,depthFailColor:"#ffcc33",depthFailOpacity:.4,width:2},areaDrawing:{color:"#ffffff",opacity:.5,depthFailColor:"#ffffff",depthFailOpacity:.25},area:{color:"#ffffff",opacity:.5,depthFailColor:"#ffffff",depthFailOpacity:.25},cursor:{color:"#000000"},coordinatesNode:{color:"#333333"}}:w,x=e.infoLabelsFormat,M=void 0===x?k(k(k(k(k(k({},A.sW.POLYLINE_DISTANCE_3D,(function(e){return e})),A.sW.AREA_3D,(function(e){return e})),A.sW.HEIGHT_FROM_TERRAIN,(function(e){return e})),A.sW.ANGLE_3D,(function(e){return e})),A.sW.SLOPE,(function(e){return e})),A.sW.POINT_COORDINATES,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.latitude,n=t.longitude;return"latitude: ".concat(r.toFixed(6),"\n")+"longitude: ".concat(n.toFixed(6),"\n")+"altitude: ".concat(e)})):x,Y=e.getPositionInfo,$=(0,n.useRef)(),U=(0,n.useRef)(),q=(0,n.useRef)(),B=(0,n.useRef)(),K=(0,n.useRef)(),V=(0,n.useRef)(),z=(0,n.useRef)({type:"FeatureCollection",features:[]}),J=(0,n.useRef)(),Q=(0,n.useRef)(),X=(0,n.useRef)();X.current=L;var ee=(0,n.useRef)();ee.current=Z;var te=(0,n.useRef)();function re(){return{color:(0,C.KF)(F({},null==G?void 0:G.coordinatesNode)),disableDepthTestDistance:Number.POSITIVE_INFINITY}}function ne(){var e=(null==G?void 0:G.primaryLabel)||{},t=e.font,r=void 0===t?"12px sans-serif":t,n=e.fillColor,o=void 0===n?"#ffffff":n,i=e.backgroundColor,a=void 0===i?"rgba(0, 0, 0, 0.6)":i,l=e.offset,u=void 0===l?[0,-16]:l;return{font:r,disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:(0,C.KF)({color:o}),showBackground:!0,backgroundColor:(0,C.KF)({color:a}),backgroundPadding:new g.Z(4,4),pixelOffset:W(g.Z,j(u)),horizontalOrigin:v.Z.CENTER,verticalOrigin:y.Z.BASELINE}}function oe(e,t,r){return e&&e.value!==r?"".concat((0,A.Ov)(t,r,e.value).toFixed(2)," ").concat(e.label):"".concat(t.toFixed(2)," ").concat(e.label)}function ie(e,t,r){var n,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=r===A.sW.AREA_3D?A.vq[null===(n=X.current[r])||void 0===n?void 0:n.value]:X.current[r];return s?null:t.map((function(r,n){var a,l,u,c,s,f,d,h,O,I=t[n+1];if(I){var D=(0,_.eN)(r,I),S=m.Z.distance(r,I);if(o){var T=p.Z.fromCartesian(r),A=p.Z.fromCartesian(I);S=(0,N.calculateDistance)([[E.Z.toDegrees(T.longitude),E.Z.toDegrees(T.latitude)],[E.Z.toDegrees(A.longitude),E.Z.toDegrees(A.latitude)]])}var L=p.Z.fromCartesian(D),R=L.longitude,W=L.latitude,P=L.height,Z=oe(i,S,"m");return e.add(F({position:D,text:Z},(u=void 0===(l=(a=(null==G?void 0:G.secondaryLabel)||{}).font)?"12px sans-serif":l,s=void 0===(c=a.fillColor)?"#ffffff":c,d=void 0===(f=a.outlineColor)?"#000000":f,O=void 0===(h=a.outlineWidth)?4:h,{font:u,disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:(0,C.KF)({color:s}),outlineColor:(0,C.KF)({color:d}),outlineWidth:O,style:b.Z.FILL_AND_OUTLINE,showBackground:!1,backgroundPadding:new g.Z(4,4),pixelOffset:new g.Z(0,0),horizontalOrigin:v.Z.CENTER,verticalOrigin:y.Z.BASELINE}))),[E.Z.toDegrees(R),E.Z.toDegrees(W),P,S,Z]}return null})).filter((function(e){return e}))}function ae(e){var t,n,o,i,a=e.coordinates,l=e.feature,u=e.measureType,s="",f=a[a.length-1],d=X.current[u],m=te.current[u];switch(u){case A.sW.HEIGHT_FROM_TERRAIN:q.current.add({position:a[a.length-1],image:J.current,color:(0,C.KF)({color:"#ffff00"}),disableDepthTestDistance:Number.POSITIVE_INFINITY,allowPicking:!1}),s=m(oe(d,l.properties.height,"m")),$.current.add((0,C.c4)(F(F({},null==G?void 0:G.line),{},{coordinates:j(a)})));break;case A.sW.ANGLE_3D:$.current.add((0,C.c4)(F(F({},null==G?void 0:G.line),{},{coordinates:j(a)}))),s=m(oe(d,o=R((0,_.Ys)(a),1)[0],"deg")),f=a[1],$.current.add((0,C.c4)(F(F({},null==G?void 0:G.line),{},{coordinates:H(a)})));break;case A.sW.SLOPE:$.current.add((0,C.XI)(F(F({},null==G?void 0:G.area),{},{coordinates:j(a)}))),$.current.add((0,C.c4)(F(F({},null==G?void 0:G.line),{},{coordinates:j(a)}))),s=m(oe(d,i=R((0,_.Qg)(a,null==r||null===(t=r.camera)||void 0===t?void 0:t.position),1)[0],"deg")),f=(0,_.bj)(a);break;case A.sW.POINT_COORDINATES:q.current.add({position:a[a.length-1],image:J.current,color:(0,C.KF)({color:"#ffff00"}),disableDepthTestDistance:Number.POSITIVE_INFINITY,allowPicking:!1}),s=m(oe(d,l.geometry.coordinates[2],"m"),{latitude:l.geometry.coordinates[1],longitude:l.geometry.coordinates[0]});break;case A.sW.POLYLINE_DISTANCE_3D:a.length>1&&($.current.add((0,C.c4)(F(F({},null==G?void 0:G.line),{},{coordinates:j(a)}))),n=ie(K.current,a,A.sW.POLYLINE_DISTANCE_3D),s=m(oe(d,l.properties.length,"m")));break;case A.sW.LENGTH:if(a.length>1){var g=a.map((function(e){var t=p.Z.fromCartesian(e),r=t.longitude,n=t.latitude;return[E.Z.toDegrees(r),E.Z.toDegrees(n)]})),v=(0,_.Rk)(a,(function(e){return e[e.length-1].height})),y=(0,N.calculateDistance)(g);f=v[a.length-1],s=m(oe(d,y,"m")),$.current.add((0,C.c4)(F(F({},null==G?void 0:G.line),{},{coordinates:j(v),geodesic:!0}))),n=ie(K.current,v,A.sW.LENGTH,!0)}break;case A.sW.AREA_3D:a.length>2&&($.current.add((0,C.XI)(F(F({},null==G?void 0:G.area),{},{coordinates:j(a)}))),$.current.add((0,C.c4)(F(F({},null==G?void 0:G.line),{},{coordinates:j(a)}))),n=ie(K.current,a,A.sW.AREA_3D),s=m(oe(d,l.properties.area,"m²")))}c||K.current.add(F({position:f,text:s},ne()));var b=null!=l&&l.id?l.id:S()();return F(F({},l),{},{id:b,properties:F(F(F(F(F({},null==l?void 0:l.properties),{},{id:b,measureType:u},n&&{segments:n,segmentsCRS:"WGS84",segmentsColumns:["longitude","latitude","height:m","length:m","label"]}),s&&{infoLabelText:s}),o&&{angle:o,angleUom:"deg"}),i&&{slope:i,slopeUom:"deg"})})}function le(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.coordinates,n=e.area,o=e.distance;U.current.removeAll(),B.current.removeAll(),V.current.removeAll();var i,a,u,s,f,d,m,b,h,O="",I="",D=t[t.length-1],S=X.current[l],T=ee.current[l]||{},L=te.current[l];switch(l){case A.sW.HEIGHT_FROM_TERRAIN:I=T.start,2===(null==t?void 0:t.length)&&(U.current.add((0,C.c4)(F(F({},null==G?void 0:G.lineDrawing),{},{coordinates:j(t)}))),O=o?L(oe(S,o,"m")):"");break;case A.sW.ANGLE_3D:I=T.start,3===t.length&&(O=L(oe(S,R((0,_.Ys)(t),1)[0],"deg")),D=t[1],U.current.add((0,C.c4)(F(F({},null==G?void 0:G.lineDrawing),{},{coordinates:H(t)}))));break;case A.sW.SLOPE:var P;I=T.start,3===t.length&&(O=L(oe(S,R((0,_.Qg)(t,null==r||null===(P=r.camera)||void 0===P?void 0:P.position),1)[0],"deg")),D=(0,_.bj)(t));break;case A.sW.POINT_COORDINATES:if(I=T.start,t[0]){var Z=p.Z.fromCartesian(t[0]);O=L(oe(S,Z.height,"m"),{latitude:E.Z.toDegrees(Z.latitude),longitude:E.Z.toDegrees(Z.longitude)})}break;case A.sW.POLYLINE_DISTANCE_3D:I=T.start,t.length>1&&(I=T.end,O=L(oe(S,o,"m")),ie(V.current,t,A.sW.POLYLINE_DISTANCE_3D),t.forEach((function(e,r){r!==t.length-1&&B.current.add(F({position:e,image:Q.current},re()))})));break;case A.sW.LENGTH:if(I=T.start,t.length>1){I=T.end;var w=t.map((function(e){var t=p.Z.fromCartesian(e),r=t.longitude,n=t.latitude;return[E.Z.toDegrees(r),E.Z.toDegrees(n)]})),k=(0,N.calculateDistance)(w),x=(0,_.Rk)(t,(function(e){return e[e.length-1].height}));O=L(oe(S,k,"m")),ie(V.current,x,A.sW.LENGTH,!0),x.forEach((function(e,r){r!==t.length-1&&B.current.add(F({position:e,image:Q.current},re()))}))}break;case A.sW.AREA_3D:I=T.start,t.length>1&&(ie(V.current,t,A.sW.AREA_3D),t.forEach((function(e,r){r!==t.length-1&&B.current.add(F({position:e,image:Q.current},re()))}))),t.length>2&&(I=T.end,O=L(oe(S,n,"m²"))),2===t.length&&(I=T.missingVertex)}t.length>0&&(V.current.add(F({position:t[t.length-1],text:I},(u=void 0===(a=(i=(null==G?void 0:G.tooltip)||{}).font)?"12px sans-serif":a,f=void 0===(s=i.fillColor)?"#ffffff":s,m=void 0===(d=i.backgroundColor)?"rgba(0, 0, 0, 0.5)":d,h=void 0===(b=i.offset)?[8,8]:b,{font:u,disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:(0,C.KF)({color:f}),showBackground:!0,backgroundColor:(0,C.KF)({color:m}),backgroundPadding:new g.Z(4,4),pixelOffset:W(g.Z,j(h)),horizontalOrigin:v.Z.LEFT,verticalOrigin:y.Z.TOP}))),c||V.current.add(F({position:D,text:O},ne())),V.current.update(r.scene.frameState)),r.scene.requestRender()}({coordinates:e.coordinates,area:e.area,distance:e.distance})}return te.current=M,(0,n.useEffect)((function(){return r&&($.current=new h.Z({destroyPrimitives:!0}),r.scene.primitives.add($.current),q.current=new O.Z({scene:r.scene}),r.scene.primitives.add(q.current),K.current=new I.Z({scene:r.scene}),r.scene.primitives.add(K.current),U.current=new h.Z({destroyPrimitives:!0}),r.scene.primitives.add(U.current),B.current=new O.Z({scene:r.scene}),r.scene.primitives.add(B.current),V.current=new I.Z({scene:r.scene}),r.scene.primitives.add(V.current),J.current=(0,C.xB)(12,{stroke:"#ffffff",strokeWidth:2,fill:!1}),Q.current=(0,C.xB)(8,{stroke:"#ffffff",strokeWidth:2,fill:!1})),function(){null!=r&&r.isDestroyed&&!r.isDestroyed()&&((0,C.U2)(r,$.current),$.current=null,(0,C.U2)(r,q.current),q.current=null,(0,C.U2)(r,K.current),K.current=null,(0,C.U2)(r,U.current),U.current=null,(0,C.U2)(r,B.current),B.current=null,(0,C.U2)(r,V.current),V.current=null)}}),[r]),(0,n.useEffect)((function(){a||(U.current.removeAll(),B.current.removeAll(),V.current.removeAll(),r.scene.requestRender())}),[a]),(0,n.useEffect)((function(){u&&(U.current.removeAll(),B.current.removeAll(),V.current.removeAll(),$.current.removeAll(),q.current.removeAll(),K.current.removeAll(),z.current={type:"FeatureCollection",features:[]},d(z.current),r.scene.requestRender())}),[u]),(0,n.useEffect)((function(){var e;null!==(e=L[l])&&void 0!==e&&e.value&&function(){$.current.removeAll(),q.current.removeAll(),K.current.removeAll();var e=(z.current||{}).features,t=(void 0===e?[]:e).map((function(e){var t,r=function(e){var t,r,n,o=e.properties,i=void 0===o?{}:o,a=e.geometry,l=void 0===a?{}:a,u=i.measureType,c=l.coordinates,s=void 0===c?[]:c;switch(u){case A.sW.HEIGHT_FROM_TERRAIN:return[p.Z.toCartesian((t=p.Z).fromDegrees.apply(t,j(null==i?void 0:i.terrainCoordinates))),p.Z.toCartesian((r=p.Z).fromDegrees.apply(r,j(s)))];case A.sW.POINT_COORDINATES:return[p.Z.toCartesian((n=p.Z).fromDegrees.apply(n,j(s)))];case A.sW.ANGLE_3D:case A.sW.POLYLINE_DISTANCE_3D:case A.sW.LENGTH:return s.map((function(e){var t;return p.Z.toCartesian((t=p.Z).fromDegrees.apply(t,j(e)))}));case A.sW.SLOPE:case A.sW.AREA_3D:return s[0].map((function(e){var t;return p.Z.toCartesian((t=p.Z).fromDegrees.apply(t,j(e)))}));default:return[]}}(e);return ae({coordinates:r,feature:e,measureType:null==e||null===(t=e.properties)||void 0===t?void 0:t.measureType})}));z.current.features=t,d(z.current),r.scene.requestRender()}()}),[null===(t=L[l])||void 0===t?void 0:t.value]),o().createElement(T.default,{key:l,map:r,active:a,geometryType:function(){switch(l){case A.sW.HEIGHT_FROM_TERRAIN:case A.sW.POINT_COORDINATES:return"Point";case A.sW.ANGLE_3D:case A.sW.LENGTH:case A.sW.POLYLINE_DISTANCE_3D:return"LineString";case A.sW.SLOPE:case A.sW.AREA_3D:return"Polygon";default:return null}}(),geodesic:l===A.sW.LENGTH,onDrawStart:le,onMouseMove:le,onDrawing:le,onDrawEnd:function(e){var t,n,o=e.coordinates,i=e.feature;o&&i&&(n=ae({coordinates:(t={coordinates:o,feature:i}).coordinates,feature:t.feature,measureType:l}),z.current.features.push(n),d(z.current),r.scene.requestRender())},depthTestAgainstTerrain:!1,sampleTerrain:A.sW.HEIGHT_FROM_TERRAIN===l,coordinatesLength:function(){switch(l){case A.sW.ANGLE_3D:case A.sW.SLOPE:return 3;case A.sW.HEIGHT_FROM_TERRAIN:case A.sW.POINT_COORDINATES:case A.sW.POLYLINE_DISTANCE_3D:case A.sW.AREA_3D:default:return null}}(),getPositionInfo:Y,getObjectsToExcludeOnPick:function(){return[U.current,B.current,V.current,$.current,q.current,K.current]}})};var Y=r(904577),$=r(815135),U=r(86638),q=r(988753),B=r(50993);function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function V(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=K(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==K(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var J=(0,$.Z)(d.Z);function Q(e,t){var r,i,a,l,d=e.map,m=e.active,p=e.targetId,g=void 0===p?B.Dy:p,v=e.measureType,y=e.onChangeMeasureType,b=e.defaultMeasureType,E=e.hideInfoLabel,h=e.hideSegmentsLengthLabels,O=e.unitsOfMeasure,I=e.unitsOfMeasureOptions,D=void 0===I?A.O$:I,S=e.onUpdateFeatures,T=e.onChangeUnitOfMeasure,N=e.tools,C=void 0===N?[A.sW.LENGTH,A.sW.POLYLINE_DISTANCE_3D,A.sW.AREA_3D,A.sW.POINT_COORDINATES,A.sW.HEIGHT_FROM_TERRAIN,A.sW.ANGLE_3D,A.sW.SLOPE]:N,_=e.onClose,L=e.measurement,R=e.onAddAsLayer,W=t.messages,P=(a=(0,n.useState)(0),l=2,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,c=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(a,l)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(a,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),Z=P[0],w=P[1],F=D[v];function k(e){y(e)}if((0,n.useEffect)((function(){m&&k(b)}),[m,b]),!m)return null;var j=document.querySelector("#".concat(g));return j&&(0,f.createPortal)(o().createElement(o().Fragment,null,o().createElement(M,{map:d,active:!!v,type:v,clearId:Z,hideInfoLabel:E,hideSegmentsLengthLabels:h,unitsOfMeasure:O,onUpdateCollection:function(e){return S((null==e?void 0:e.features)||[])},tooltipLabels:V(V(V(V(V(V(V({},A.sW.LENGTH,{start:(0,U.S$)(W,"measureComponent.tooltipPolylineDistance3DStart"),end:(0,U.S$)(W,"measureComponent.tooltipPolylineDistance3DEnd")}),A.sW.POLYLINE_DISTANCE_3D,{start:(0,U.S$)(W,"measureComponent.tooltipPolylineDistance3DStart"),end:(0,U.S$)(W,"measureComponent.tooltipPolylineDistance3DEnd")}),A.sW.AREA_3D,{start:(0,U.S$)(W,"measureComponent.tooltipArea3DStart"),missingVertex:(0,U.S$)(W,"measureComponent.tooltipArea3DMissingVertex"),end:(0,U.S$)(W,"measureComponent.tooltipArea3DEnd")}),A.sW.POINT_COORDINATES,{start:(0,U.S$)(W,"measureComponent.tooltipPointCoordinatesStart")}),A.sW.HEIGHT_FROM_TERRAIN,{start:(0,U.S$)(W,"measureComponent.tooltipHeightFromTerrainStart")}),A.sW.ANGLE_3D,{start:(0,U.S$)(W,"measureComponent.tooltipAngle3DStart")}),A.sW.SLOPE,{start:(0,U.S$)(W,"measureComponent.tooltipSlopeStart")}),infoLabelsFormat:V(V(V(V(V(V(V({},A.sW.LENGTH,(function(e){return e})),A.sW.POLYLINE_DISTANCE_3D,(function(e){return e})),A.sW.AREA_3D,(function(e){return e})),A.sW.POINT_COORDINATES,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.latitude,n=t.longitude;return"".concat((0,U.S$)(W,"measureComponent.latitude"),": ").concat(r.toFixed(6),"\n")+"".concat((0,U.S$)(W,"measureComponent.longitude"),": ").concat(n.toFixed(6),"\n")+"".concat((0,U.S$)(W,"measureComponent.altitude"),": ").concat(e)})),A.sW.HEIGHT_FROM_TERRAIN,(function(e){return e})),A.sW.ANGLE_3D,(function(e){return e})),A.sW.SLOPE,(function(e){return e}))}),o().createElement(Y.Z,{info:o().createElement(s.DropdownList,{disabled:!F,value:O[v],data:F,onChange:function(e){T(v,e)},textField:"label",valueField:"value"}),onClose:_},o().createElement(c.Si,null,o().createElement(c.hE,null,C.map((function(e){return o().createElement(J,{key:e,className:"square-button-md",bsStyle:v===e?"success":"primary",tooltipId:"measureComponent.".concat(u()(e),"Measure"),tooltipPosition:"bottom",active:v===e,onClick:k.bind(null,e)},o().createElement(c.gG,{glyph:A.r2[e]}))}))),o().createElement(c.hE,null,o().createElement(J,{className:"square-button-md",bsStyle:"primary",tooltipId:"measureComponent.resetTooltip",onClick:function(){return w(Z+1)}},o().createElement(c.gG,{glyph:"trash"}))),o().createElement(c.hE,null,o().createElement(J,{className:"square-button-md",bsStyle:"primary",tooltipId:"measureComponent.exportToGeoJSON",disabled:0===((null==L||null===(r=L.features)||void 0===r?void 0:r.length)||0),onClick:function(){return(0,q.LR)(JSON.stringify((0,B.tL)(L.features)),"measurements.json","application/geo+json")}},o().createElement(c.gG,{glyph:"ext-json"})),R&&o().createElement(J,{className:"square-button-md",bsStyle:"primary",tooltipId:"measureComponent.addAsLayer",disabled:0===((null==L||null===(i=L.features)||void 0===i?void 0:i.length)||0),onClick:function(){return R(L.features)}},o().createElement(c.gG,{glyph:"add-layer"})))))),j)}Q.contextTypes={messages:a().object};const X=Q}}]);
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3155],{791753:(e,t,o)=>{"use strict";o.d(t,{Z:()=>I});var r=o(45697),n=o.n(r),a=o(124852),i=o.n(a),p=o(610928),s=o.n(p),c=o(414293),u=o.n(c),l=o(845243),d=o.n(l),f=(o(921787),o(451172),o(552259));function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?m(Object(o),!0).forEach((function(t){P(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function g(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function P(e,t,o){return(t=O(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function O(e){var t=function(e){if("object"!=y(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!=y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}d().Draw.Polygon.prototype._calculateFinishDistance=function(e){if(this._markers.length>0){var t=this._map.latLngToContainerPoint(this._markers[0].getLatLng()),o=this._map.latLngToContainerPoint(this._markers[this._markers.length-1].getLatLng()),r=new(d().Marker)(e,{icon:this.options.icon,zIndexOffset:2*this.options.zIndexOffset}),n=this._map.latLngToContainerPoint(r.getLatLng());return Math.min(t.distanceTo(n),o.distanceTo(n))}return 1/0};var j=o(727418),L=o(916651),S=L.reproject,C=L.reprojectBbox,E=L.calculateCircleCoordinates,D=L.reprojectGeoJson,M=o(680379).pointToLayer,G=Math.PI/180,k=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"EPSG:4326";if("EPSG:4326"===o||void 0===e)return{center:t,projection:o,radius:e};var r=S({x:t.lng,y:t.lat},o,"EPSG:4326");if(void 0===e)return{center:r,projection:o,radius:e};var n=S([t.lng+e,t.lat],o,"EPSG:4326");return{center:r,projection:"EPSG:4326",radius:Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2))*Math.cos(G*r.y)*40075017/360}},_=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return P(e=function(e,t,o){return t=v(t),function(e,t){if(t&&("object"==y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,h()?Reflect.construct(t,o||[],v(e).constructor):t.apply(e,o))}(this,t,[].concat(r)),"onDrawStart",(function(){e.drawing=!0})),P(e,"onDrawCreated",(function(t){e.drawing=!1;var o,r=t.layer,n=r.toGeoJSON();"marker"===t.layerType?o=d().latLngBounds(n.geometry.coordinates,n.geometry.coordinates):(r._map||(r._map=e.props.map,r._renderer=e.props.map.getRenderer(r),r._project()),o=r.getBounds());var a=function(e){return[e.getWest(),e.getSouth(),e.getEast(),e.getNorth()]}(o),i=o.getCenter();i=[i.lng,i.lat];var p=n.geometry.coordinates,s="EPSG:4326",c=n.geometry.type,u=r.getRadius?r.getRadius():0;if("circle"===t.layerType){n.projection="EPSG:4326",a=C(a,"EPSG:4326",s="EPSG:3857");var l=function(e,t,o){if("EPSG:4326"===o)return{center:t,srs:o,radius:e};var r=e/40075017*360/Math.cos(G*t[1]),n=S(t,"EPSG:4326",o);if(r){var a=S([t[0]+r,t[1]],"EPSG:4326",o);return{center:n,srs:o,radius:Math.sqrt(Math.pow(n.x-a.x,2)+Math.pow(n.y-a.y,2))}}return{center:n,srs:o,radius:e}}(r._mRadius,i,s);i=l.center,u=l.radius,p=E(i,u,100),n.radius=r.getRadius?r.getRadius():0,i=[i.x,i.y],c="Polygon"}e.drawLayer.addData(n);var f={type:c,extent:a,center:i,coordinates:p,radius:u,projection:s};e.props.options&&e.props.options.stopAfterDrawing&&e.props.onChangeDrawingStatus("stop",e.props.drawMethod,e.props.drawOwner);var y=e.convertFeaturesToGeoJson(t.layer,e.props);e.props.onEndDrawing(f,e.props.drawOwner),e.props.onGeometryChanged([y],e.props.drawOwner,e.props.options&&e.props.options.stopAfterDrawing?"enterEditMode":"")})),P(e,"onUpdateGeom",(function(t,o){var r=e.convertFeaturesToGeoJson(t,o);o.onGeometryChanged([r],o.drawOwner)})),P(e,"addLayer",(function(t){e.clean();var o=d().geoJson(null,{pointToLayer:function(e,t){var o=k(e.radius,t,e.projection),r=o.center,n=o.radius;return d().circle(r,n||5)},style:function(e){return t.style&&t.style[e.geometry.type]||{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}}});e.props.map.addLayer(o),t.features&&t.features.length>0&&o.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod)),e.drawLayer=o})),P(e,"addGeojsonLayer",(function(t){var o=t.features,r=t.projection,n=t.style;e.clean();var a=d().geoJson(o,{style:function(e){return e.style||n},pointToLayer:function(e,t){var o=S({x:t.lng,y:t.lat},r,"EPSG:4326");return M(d().latLng(o.y,o.x),e,n)}});e.drawLayer=a.addTo(e.props.map)})),P(e,"replaceFeatures",(function(t){e.drawLayer?(e.drawLayer.clearLayers(),"Circle"===e.props.drawMethod?(e.drawLayer.options.pointToLayer=function(e,t){var o=k(e.radius,t,e.projection),r=o.center,n=o.radius;return d().circle(r,n||5)},e.drawLayer.options.style={color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}):e.drawLayer.options.pointToLayer=function(e,o){var r=S({x:o.lng,y:o.lat},t.options&&t.options.featureProjection||"EPSG:4326","EPSG:4326");return M(d().latLng(r.y,r.x),e,t.style)},e.drawLayer.addData(e.convertFeaturesPolygonToPoint(t.features,e.props.drawMethod))):e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style})})),P(e,"endDrawing",(function(t){e.replaceFeatures(t);var o=s()(t.features);"Circle"!==e.props.drawMethod||!o||u()(o.center)||u()(o.radius)?o&&e.props.onEndDrawing(o,e.props.drawOwner):e.props.onEndDrawing(w(w({},o),{},{coordinates:E(o.center,o.radius,100)}),e.props.drawOwner)})),P(e,"addDrawInteraction",(function(t){e.removeAllInteractions(),"Point"===t.drawMethod||"MultiPoint"===t.drawMethod?e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}):e.addLayer(t),e.props.map.on("draw:created",e.onDrawCreated,e),e.props.map.on("draw:drawstart",e.onDrawStart,e),"LineString"===t.drawMethod||"Bearing"===t.drawMethod||"MultiLineString"===t.drawMethod?e.drawControl=new(d().Draw.Polyline)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},showLength:!1,repeatMode:!0,icon:new(d().DivIcon)({iconSize:new(d().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(d().DivIcon)({iconSize:new(d().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Polygon"===t.drawMethod||"MultiPolygon"===t.drawMethod?e.drawControl=new(d().Draw.Polygon)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5],guidelineDistance:5},allowIntersection:!1,showLength:!1,showArea:!1,repeatMode:!0,icon:new(d().DivIcon)({iconSize:new(d().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(d().DivIcon)({iconSize:new(d().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"BBOX"===t.drawMethod?e.drawControl=new(d().Draw.Rectangle)(e.props.map,{draw:!1,shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},repeatMode:!0,icon:new(d().DivIcon)({iconSize:new(d().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(d().DivIcon)({iconSize:new(d().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}):"Circle"===t.drawMethod?e.drawControl=new(d().Draw.Circle)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2,dashArray:[5,5]},showRadius:!1,repeatMode:!0}):"Point"!==t.drawMethod&&"MultiPoint"!==t.drawMethod||(e.drawControl=new(d().Draw.Marker)(e.props.map,{shapeOptions:{color:"#000000",weight:2,fillColor:"#ffffff",fillOpacity:.2},repeatMode:!0})),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable(),e.drawControl.enable()})),P(e,"addDrawOrEditInteractions",(function(t){var o=[];t.features.map((function(e){var t;e&&e.geometry&&e.geometry.type&&!(0,f.Zl)(e.geometry.type)&&("GeometryCollection"===e.geometry.type?(t=e.geometry.geometries.map((function(t){return t.coordinates.map((function(o,r){return{type:"Feature",properties:w({},e.properties),id:t.type+r,geometry:{coordinates:o,type:(0,f.kY)(t.type)}}}))})),o.push({type:"FeatureCollection",features:t})):(t=e.geometry.coordinates.map((function(t,o){return{type:"Feature",properties:w({},e.properties),id:e.geometry.type+o,geometry:{coordinates:t,type:(0,f.kY)(e.geometry.type)}}})),o.push({type:"FeatureCollection",features:t})))}));var r=j({},t,{features:o.length>0?o:[{}]});e.drawLayer?(e.drawLayer.clearLayers(),e.drawLayer.addData(e.convertFeaturesPolygonToPoint(r.features,r.drawMethod))):e.addGeojsonLayer({features:t.features&&t.options.featureProjection&&"EPSG:4326"!==t.options.featureProjection?t.features.map((function(e){return D(e,t.options.featureProjection,"EPSG:4326")})):t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:t.style&&t.style[t.drawMethod]||t.style}),t.options.editEnabled&&e.addEditInteraction(r),t.options.drawEnabled&&e.addDrawInteraction(r)})),P(e,"addEditInteraction",(function(t){e.clean(),e.addGeojsonLayer({features:t.features,projection:t.options&&t.options.featureProjection||"EPSG:4326",style:j({},t.style,{poly:{icon:new(d().DivIcon)({iconSize:new(d().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(d().DivIcon)({iconSize:new(d().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}})});var o=e.drawLayer.getLayers();setTimeout((function(){o.forEach((function(o){o.getLayers&&o.getLayers()&&o.getLayers().length?o.getLayers().forEach((function(o){o.on("edit",(function(o){return e.onUpdateGeom(o.target,t)})),o.on("moveend",(function(o){return e.onUpdateGeom(o.target,t)})),o.editing&&o.editing.enable()})):(o.on("edit",(function(o){return e.onUpdateGeom(o.target,t)})),o.on("moveend",(function(o){return e.onUpdateGeom(o.target,t)})),o.editing&&o.editing.enable())}))}),0),e.editControl=new(d().Control.Draw)({edit:{featureGroup:e.drawLayer,poly:{allowIntersection:!1},edit:!0},draw:{polygon:{allowIntersection:!1,showArea:!0}}}),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable()})),P(e,"removeAllInteractions",(function(){e.removeEditInteraction(),e.removeDrawInteraction()})),P(e,"removeDrawInteraction",(function(){null!==e.drawControl&&void 0!==e.drawControl&&(e.props.options&&e.props.options.stopAfterDrawing&&(e.drawControl.setOptions({repeatMode:!1}),e.props.onDrawStopped()),e.drawControl.disable(),e.drawControl=null,e.props.map.off("draw:created",e.onDrawCreated,e),e.props.map.off("draw:drawstart",e.onDrawStart,e),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable())})),P(e,"removeEditInteraction",(function(){e.drawLayer&&(e.drawLayer.getLayers().forEach((function(e){e.getLayers&&e.getLayers()&&e.getLayers().length?e.getLayers().forEach((function(e){e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable()})):(e.off("edit"),e.off("moveend"),e.editing&&e.editing.disable())})),e.editControl=null),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable()})),P(e,"cleanAndStop",(function(){e.removeAllInteractions(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),P(e,"clean",(function(){e.removeEditInteraction(),e.removeDrawInteraction(),e.drawLayer&&(e.drawLayer.clearLayers(),e.props.map.removeLayer(e.drawLayer),e.drawLayer=null)})),P(e,"convertFeaturesPolygonToPoint",(function(e,t){return"Circle"===t?e.map((function(e){var t=void 0!==e.center&&void 0!==e.radius?k(e.radius,{lat:e.center.y,lng:e.center.x},e.projection):e,o=t.center,r=t.projection,n=t.radius;return w(w({},e),{},{coordinates:o?[o.x,o.y]:e.coordinates,center:o||e.center,projection:r||e.projection,radius:void 0!==n?n:e.radius,type:"Point"})})):e})),P(e,"convertFeaturesToGeoJson",(function(t,o){var r;if((0,f.Zl)(o.drawMethod))r=t.toGeoJSON().geometry;else{if("GeometryCollection"===o.drawMethod)return{type:"GeometryCollection",geometries:e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()})).map((function(e){return"FeatureCollection"===e.type?{type:"Multi"+e.features[0].geometry.type,coordinates:e.features.map((function(e){return e.geometry.coordinates}))}:{type:e.geometry.type,coordinates:e.geometry.coordinates}}))};var n=e.drawLayer.getLayers().map((function(e){return e.toGeoJSON()}));r={type:o.drawMethod,coordinates:n.reduce((function(e,t){return e.concat([t.geometry.coordinates])}),[])}}return j({},t.toGeoJSON(),{geometry:r})})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),o=t,(r=[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=!(!this.props.messages&&!this.context.messages)&&this.context.messages.drawLocal;if(t&&(d().drawLocal=t),this.props.drawStatus!==e.drawStatus||"replace"===e.drawStatus||this.props.drawMethod!==e.drawMethod||this.props.features!==e.features)switch(e.drawStatus){case"create":this.addGeojsonLayer({features:e.features,projection:e.options&&e.options.featureProjection||"EPSG:4326",style:e.style&&e.style[e.drawMethod]||e.style});break;case"start":this.addDrawInteraction(e);break;case"drawOrEdit":this.addDrawOrEditInteractions(e);break;case"stop":this.removeAllInteractions();break;case"replace":this.replaceFeatures(e);break;case"clean":this.cleanAndStop();break;case"endDrawing":this.endDrawing(e);break;default:return}}},{key:"render",value:function(){return null}}])&&g(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,r}(i().Component);P(_,"displayName","DrawSupport"),P(_,"propTypes",{map:n().object,drawOwner:n().string,drawStatus:n().string,drawMethod:n().string,options:n().object,features:n().array,onChangeDrawingStatus:n().func,onGeometryChanged:n().func,onDrawStopped:n().func,onEndDrawing:n().func,messages:n().object,style:n().object}),P(_,"defaultProps",{map:null,drawOwner:null,drawStatus:null,drawMethod:null,features:null,options:{stopAfterDrawing:!0},onChangeDrawingStatus:function(){},onGeometryChanged:function(){},onDrawStopped:function(){},onEndDrawing:function(){},style:{color:"#ffcc33",opacity:1,weight:3,fillColor:"#ffffff",fillOpacity:.2,clickable:!1,editing:{fill:1}}});const I=_},967465:(e,t,o)=>{"use strict";o.d(t,{Z:()=>j});var r=o(124852),n=o.n(r),a=o(180307),i=o.n(a),p=o(45697),s=o.n(p),c=o(845243),u=o.n(c),l=o(747037),d=o.n(l),f=o(925064),y=o(821751);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function w(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function g(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,O(r.key),r)}}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function P(e,t,o){return(t=O(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function O(e){var t=function(e){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,"string");if("object"!=m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}var j=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return P(e=function(e,t,o){return t=v(t),function(e,t){if(t&&("object"==m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,h()?Reflect.construct(t,o||[],v(e).constructor):t.apply(e,o))}(this,t,[].concat(r)),"updatePopup",(function(){(e._popups||[]).map((function(e){return e.popup.update()}))})),P(e,"popupClose",(function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target,o=(void 0===t?{}:t).options,r=(void 0===o?{}:o).id;r&&e.props.onPopupClose(r)})),P(e,"preparePopups",(function(){var t=e.props,o=t.popups,r=void 0===o?[]:o,n=t.map,a=e.props.map.getSize();return(e._popups||[]).forEach((function(t){var o=t.popup;o.off("remove",e.popupClose),o&&e.props.map.removeLayer(o)})),e._popups=r.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=.9*a.x,r=.9*a.y,i=t.id,p=t.position.coordinates,s=t.component,c=t.content,l=t.className,d=t.maxWidth,y=void 0===d?o:d,m=t.maxHeight,g=void 0===m?r:m,h=t.autoPan,v=void 0===h||h,b=t.offset,O=void 0===b?[0,7]:b,j=y>o?o:y,L=g>r?r:g,S=f.fH(i,l);S.setAttribute("style","max-width: ".concat(j,"px; max-height: ").concat(L,"px")),f.R3(S,c);var C=u().popup({id:i,autoClose:!1,closeOnClick:!1,autoPan:v,autoPanPadding:u().point(70,70),maxWidth:j,maxHeight:L,className:"ms-leaflet-popup",offset:O}).setContent(S);return C.once("remove",e.popupClose),s&&function(e,t){var o=new MutationObserver((function(){e.update()}));e.once("remove",(function(){o&&o.disconnect(),o=null})),o.observe(t,{attributes:!0,childList:!0,subtree:!0})}(C,S),C.setLatLng(p),n.addLayer(C),function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?w(Object(o),!0).forEach((function(t){P(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({popup:C},t)})),e._popups})),P(e,"stopPropagationOnMouseMove",(function(e){e.stopPropagation()})),P(e,"fireMouseOutEvent",(function(){e.props.map.fireEvent("mouseout")})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),o=t,(r=[{key:"UNSAFE_componentWillMount",value:function(){this.props.map&&(this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().querySelector(".leaflet-popup-pane").addEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"componentDidMount",value:function(){this.props.map&&this.props.map.on("resize",this.updatePopup)}},{key:"shouldComponentUpdate",value:function(e){return e.popups!==this.props.popups}},{key:"componentWillUnmount",value:function(){var e=this;(this._popups||[]).forEach((function(t){var o,r,n=t.popup;n.off("remove",e.popupClose),n&&(null===(o=e.props.map)||void 0===o||null===(r=o.removeLayer)||void 0===r||r.call(o,n))})),this.props.map&&(this.props.map.off("resize",this.updatePopup),this.props.map.getContainer().removeEventListener("mousemove",this.stopPropagationOnMouseMove),this.props.map.getContainer().removeEventListener("mouseenter",this.fireMouseOutEvent))}},{key:"renderPopups",value:function(){return this.preparePopups().filter((function(e){return!!e.component})).map((function(e){var t=e.popup,o=e.props,r=void 0===o?{}:o,a=e.component,p=e.id,s=t.getContent(),c=d()(a)&&y.default[a]||a,u=n().isValidElement(c)&&c||n().createElement(c,r);return s?i().createPortal(u,s,p):null}))}},{key:"render",value:function(){return n().createElement("div",null,this.renderPopups())}}])&&g(o.prototype,r),Object.defineProperty(o,"prototype",{writable:!1}),o;var o,r}(n().Component);P(j,"propTypes",{map:s().object,popups:s().arrayOf(s().object),onPopupClose:s().func}),P(j,"defaultProps",{popups:[],onPopupClose:function(){}})},821751:(e,t,o)=>{"use strict";o.r(t),o.d(t,{IDENTIFY_POPUP:()=>O,default:()=>j});var r=o(124852),n=o.n(r),a=o(173014),i=o(11196),p=o(867076),s=o(171703),c=o(22222),u=o(307877),l=o(921914),d=o(542872),f=o(701469),y=o.n(f),m=o(352353),w=o.n(m),g=o(979870),h=o(800827),v=(0,p.compose)((0,s.connect)((0,c.P1)(u.Qf,(function(e){return{index:e}})),{setIndex:l.oO}),(0,p.defaultProps)({index:0,responses:[]})),b=(0,c.P1)([u.q7,u.o9,u.OK,u.us,u.x0,h.hp,u.vR],(function(e,t,o,r,n,a,i){return{responses:e,validResponses:t,requests:o,format:r,showEmptyMessageGFI:n,missingResponses:(o||[]).length-(e||[]).length,renderValidOnly:a,loaded:i}}));const P=(0,p.compose)((0,s.connect)(b),(0,p.defaultProps)({responses:[],container:function(e){var t=e.index,o=e.children;return n().createElement(n().Fragment,null,y()(o)&&o[t]||o)},header:g.Z}),v,i.Yy,i.mI,(0,a.Z)((function(e){var t=e.loaded;return w()(t)})))(d.Z);var O="identify";const j={identify:P}},925064:(e,t,o)=>{"use strict";o.d(t,{fH:()=>a,FP:()=>i,R3:()=>p});var r=o(455877),n=o.n(r),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n()(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ms-map-popup",o=document.createElement("div");return o.setAttribute("id",e+"-map-popup"),o.setAttribute("class",t),o},i=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").startsWith("<")},p=function(e,t){if(!t)return e;if(t instanceof Node){var o=document.createDocumentFragment();o.appendChild(t),e.appendChild(o)}else i(t)?e.innerHTML=t:e.append(document.createTextNode(String(t)));return e}},352353:e=>{e.exports=function(e){return void 0===e}},531351:e=>{var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},410240:(e,t,o)=>{var r=o(829750),n=o(880531),a=o(640554),i=o(479833);e.exports=function(e,t,o){return e=i(e),o=null==o?0:r(a(o),0,e.length),t=n(t),e.slice(o,o+t.length)==t}}}]);
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[83436],{442047:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>E});var o=t(45697),n=t.n(o),a=t(124852),i=t.n(a),s=t(727418),l=t.n(s),u=t(845243),p=t.n(u),m=t(414293),c=t.n(m),f=t(512571),d=t.n(f),g=t(916651),y=t(808797);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){k(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return L(e,r);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?L(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=Array(r);t<r;t++)o[t]=e[t];return o}function T(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,D(o.key),o)}}function O(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(O=function(){return!!e})()}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function _(e,r){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e},_(e,r)}function k(e,r,t){return(r=D(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function D(e){var r=function(e){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var t=r.call(e,"string");if("object"!=h(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(r)?r:r+""}t(921787),t(451172);var M={km:2,ha:2,m:2,mi:2,ac:2,yd:0,ft:0,nm:2,sqkm:2,sqha:2,sqm:2,sqmi:2,sqac:2,sqyd:2,sqft:2,sqnm:2};p().getMeasureWithTreshold=function(e,r,t,o,n,a,i){return e>r?p().GeometryUtil.formattedNumber((0,y.Ov)(e,t,o),n[o])+" "+i:p().GeometryUtil.formattedNumber(e,n[t])+" "+a};var S=p().GeometryUtil.readableDistance;p().GeometryUtil.readableDistance=function(e,r,t,o,n,a){if(!a)return S.apply(null,arguments);if("Bearing"===a.geomType)return a.bearing;var i=p().Util.extend({},M,n),s=a.uom.length,l=s.unit,u=s.label,m=p().GeometryUtil.formattedNumber((0,y.Ov)(e,"m",l),i[l])+" "+u;return a.useTreshold&&(r&&(m=p().getMeasureWithTreshold(e,1e3,"m","km",i,"m","km")),"mi"===l&&(m=p().getMeasureWithTreshold((0,y.Ov)(e,"m","yd"),1760,"yd","mi",i,"yd","mi"))),m};var P=p().GeometryUtil.readableArea;p().GeometryUtil.readableArea=function(e,r,t,o){if(!o)return P.apply(null,arguments);var n=o.uom.area,a=n.unit,i=n.label,s=p().Util.extend({},M,t),l=p().GeometryUtil.formattedNumber((0,y.Ov)(e,"sqm",a),s[a])+" "+i;return o.useTreshold&&(r&&(l=p().getMeasureWithTreshold(e,1e6,"sqm","sqkm",s,"m²","km²")),"sqmi"===a&&(l=p().getMeasureWithTreshold((0,y.Ov)(e,"sqm","sqyd"),3097600,"sqyd","sqmi",s,"yd²","mi²"))),l};var j=p().Draw.Polygon.prototype._getMeasurementString;p().Draw.Polygon.prototype._getMeasurementString=function(){if(!this.options.uom)return j.apply(this,arguments);var e=this._area,r="";if(!e&&!this.options.showLength)return null;if(this.options.showLength&&(r=p().Draw.Polyline.prototype._getMeasurementString.call(this)),e){var t={uom:this.options.uom,useTreshold:this.options.useTreshold};r+=this.options.showLength?"<br>":""+p().GeometryUtil.readableArea(e,this.options.metric,this.options.precision,t)}return r};var A=p().Draw.Polyline.prototype._getMeasurementString;p().Draw.Polyline.prototype._getMeasurementString=function(){if(!this.options.uom)return A.apply(this,arguments);var e,r=this._currentLatLng,t=this._markers[this._markers.length-1].getLatLng();e=p().GeometryUtil.isVersion07x()?t&&r&&r.distanceTo?this._measurementRunningTotal+r.distanceTo(t)*(this.options.factor||1):this._measurementRunningTotal||0:t&&r?this._measurementRunningTotal+this._map.distance(r,t)*(this.options.factor||1):this._measurementRunningTotal||0;var o={uom:this.options.uom,useTreshold:this.options.useTreshold,geomType:this.options.geomType,bearing:this.options.bearing?(0,y.rp)(this.options.bearing,this.options.trueBearing):0};return p().GeometryUtil.readableDistance(e,this.options.metric,this.options.feet,this.options.nautic,this.options.precision,o)};var q=function(e){function r(){var e;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return k(e=function(e,r,t){return r=C(r),function(e,r){if(r&&("object"==h(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,O()?Reflect.construct(r,t||[],C(e).constructor):r.apply(e,t))}(this,r,[].concat(o)),"onDrawStart",(function(){e.props.map.off("click",e.restartDrawing,e),e.removeArcLayer(),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.disable(),e.drawing=!0})),k(e,"onDrawCreated",(function(r){e.drawing=!1,e.props.map.addLayer(r.layer),e.lastLayer=r.layer;var t=e.lastLayer&&e.lastLayer.toGeoJSON()||{};if("LineString"===e.props.measurement.geomType&&(t=l()({},t,{geometry:l()({},t.geometry,{coordinates:(0,g.transformLineToArcs)(t.geometry.coordinates)})})),"Point"===e.props.measurement.geomType){var o=e.drawControl._marker.getLatLng(),n={x:o.lng,y:o.lat,srs:"EPSG:4326"},a=l()({},e.props.measurement,{point:n,feature:t});e.props.changeMeasurementState(a)}else{var i=l()({},e.props.measurement,{feature:t});e.props.changeMeasurementState(i)}e.props.measurement.lineMeasureEnabled&&e.lastLayer&&e.addArcsToMap([t]),setTimeout((function(){e.props.map.off("click",e.restartDrawing,e),e.props.map.on("click",e.restartDrawing,e)}),100)})),k(e,"onDrawVertex",(function(){var r=e.drawControl._markers||[];"Bearing"===e.props.measurement.geomType&&r.length>=2?setTimeout((function(){e.drawControl._markers=d()(e.drawControl._markers,0,2),e.drawControl._poly._latlngs=d()(e.drawControl._poly._latlngs,0,2),e.drawControl._poly._originalPoints=d()(e.drawControl._poly._originalPoints,0,2),e.updateMeasurementResults(),e.drawControl._finishShape(),e.drawControl.disable()}),100):e.updateMeasurementResults()})),k(e,"addArcsToMap",(function(r){e.removeLastLayer();var t=r.map((function(e){return l()({},e,{geometry:l()({},e.geometry,{coordinates:(0,g.transformLineToArcs)(e.geometry.coordinates)})})}));e.arcLayer=p().geoJson(t,{style:{color:"#ffcc33",opacity:1,weight:1,fillColor:"#ffffff",fillOpacity:.2,clickable:!1}}),e.props.map.addLayer(e.arcLayer),t&&t.length>0&&e.arcLayer.addData(t)})),k(e,"updateMeasurementResults",(function(){if(e.drawing&&e.drawControl){var r=0,t=0,o=0,n=e.drawControl._currentLatLng;if("LineString"===e.props.measurement.geomType&&e.drawControl._markers&&e.drawControl._markers.length>1){var a=e.drawControl._markers.reduce((function(e,r){var t=r.getLatLng(),o=t.lng,n=t.lat;return[].concat(v(e),[[o,n]])}),[]);r=(0,g.calculateDistance)(a,e.props.measurement.lengthFormula)}else if("Polygon"===e.props.measurement.geomType&&e.drawControl._poly){var i=[].concat(v(e.drawControl._poly.getLatLngs()),[n]);t=p().GeometryUtil.geodesicArea(i)}else"Bearing"===e.props.measurement.geomType&&e.drawControl._markers&&e.drawControl._markers.length>0&&(o=e.calculateBearing());var s=l()({},e.props.measurement,{point:null,len:r,area:t,bearing:o});e.props.changeMeasurementState(s)}})),k(e,"restartDrawing",(function(){e.props.map.off("click",e.restartDrawing,e),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable(),e.props.map.removeLayer(e.lastLayer),e.drawControl.enable(),e.drawing=!0})),k(e,"addDrawInteraction",(function(r){if(e.removeDrawInteraction(),e.props.map.on("draw:created",e.onDrawCreated,e),e.props.map.on("draw:drawstart",e.onDrawStart,e),e.props.map.on("draw:drawvertex",e.onDrawVertex,e),e.props.map.on("mousemove",e.updateBearing,e),e.props.updateOnMouseMove&&e.props.map.on("mousemove",e.updateMeasurementResults,e),"Point"===r.measurement.geomType)e.drawControl=new(p().Draw.Marker)(e.props.map,{repeatMode:!1});else if("LineString"===r.measurement.geomType||"Bearing"===r.measurement.geomType){var t=e.uomLengthOptions(r);e.drawControl=new(p().Draw.Polyline)(e.props.map,b(b({shapeOptions:{color:"#ffcc33",weight:2},showLength:!0,useTreshold:r.useTreshold,uom:r.uom,geomType:r.measurement.geomType},t),{},{repeatMode:!1,icon:new(p().DivIcon)({iconSize:new(p().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(p().DivIcon)({iconSize:new(p().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"}),trueBearing:r.measurement.trueBearing}))}else if("Polygon"===r.measurement.geomType){var o=e.uomAreaOptions(r);e.drawControl=new(p().Draw.Polygon)(e.props.map,b(b({shapeOptions:{color:"#ffcc33",weight:2,fill:"rgba(255, 255, 255, 0.2)"},showArea:!0,allowIntersection:!1,showLength:!1,repeatMode:!1,useTreshold:r.useTreshold,uom:r.uom,geomType:r.measurement.geomType},o),{},{icon:new(p().DivIcon)({iconSize:new(p().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon"}),touchIcon:new(p().DivIcon)({iconSize:new(p().Point)(8,8),className:"leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"})}))}e.drawControl.enable()})),k(e,"removeDrawInteraction",(function(){null!==e.drawControl&&void 0!==e.drawControl&&(e.drawControl.disable(),e.drawControl=null,e.removeLastLayer(),e.removeArcLayer(),e.props.map.off("draw:created",e.onDrawCreated,e),e.props.map.off("draw:drawstart",e.onDrawStart,e),e.props.map.off("draw:drawvertex",e.onDrawVertex,e),e.props.map.off("mousemove",e.updateBearing,e),e.props.map.off("click",e.restartDrawing,e),e.props.updateOnMouseMove&&e.props.map.off("mousemove",e.updateMeasurementResults,e),e.props.map.doubleClickZoom&&e.props.map.doubleClickZoom.enable())})),k(e,"removeLastLayer",(function(){e.lastLayer&&e.props.map.removeLayer(e.lastLayer)})),k(e,"removeArcLayer",(function(){e.arcLayer&&e.props.map.removeLayer(e.arcLayer)})),k(e,"uomLengthOptions",(function(e){var r=e.uom.length.unit;return{metric:"m"===r||"km"===r,nautic:"nm"===r,feet:"ft"===r}})),k(e,"uomAreaOptions",(function(e){var r=e.uom.area.unit;return{metric:"sqm"===r||"sqkm"===r,nautic:"sqnm"===r,feet:"sqft"===r}})),k(e,"calculateBearing",(function(){var r,t=e.drawControl._currentLatLng,o=e.drawControl._markers,n=[o[0].getLatLng().lng,o[0].getLatLng().lat];return 1===o.length?r=[t.lng,t.lat]:2===o.length&&(r=[o[1].getLatLng().lng,o[1].getLatLng().lat]),n=(0,g.reproject)(n,"EPSG:4326",e.props.projection),r=(0,g.reproject)(r,"EPSG:4326",e.props.projection),(0,g.calculateAzimuth)(n,r,e.props.projection)})),k(e,"updateBearing",(function(){if("Bearing"===e.props.measurement.geomType&&e.drawControl._markers&&e.drawControl._markers.length>0){var r=e.props.measurement&&e.props.measurement.trueBearing;e.drawControl.setOptions({bearing:e.calculateBearing(),trueBearing:r})}})),e}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&_(e,r)}(r,e),t=r,(o=[{key:"UNSAFE_componentWillMount",value:function(){var e,r,t,o;null!==(e=this.props.measurement)&&void 0!==e&&e.geomType&&(null!==(r=this.props.measurement)&&void 0!==r&&r.lineMeasureEnabled||null!==(t=this.props.measurement)&&void 0!==t&&t.areaMeasureEnabled||null!==(o=this.props.measurement)&&void 0!==o&&o.bearingMeasureEnabled)&&c()(this.drawControl)&&this.props.enabled&&this.addDrawInteraction(this.props)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){if((e&&e.uom&&e.uom.length&&e.uom.length.unit)!==(this.props&&this.props.uom&&this.props.uom.length&&this.props.uom.length.unit)&&this.drawControl){var r=this.uomLengthOptions(e);this.drawControl.setOptions(b(b({},r),{},{uom:e.uom}))}if((e&&e.uom&&e.uom.area&&e.uom.area.unit)!==(this.props&&this.props.uom&&this.props.uom.area&&this.props.uom.area.unit)&&this.drawControl){var t=this.uomAreaOptions(e);this.drawControl.setOptions(b(b({},t),{},{uom:e.uom}))}(e.measurement.geomType&&e.measurement.geomType!==this.props.measurement.geomType||e.measurement.geomType&&this.props.measurement.geomType&&(e.measurement.lineMeasureEnabled||e.measurement.areaMeasureEnabled||e.measurement.bearingMeasureEnabled)&&!this.props.enabled&&e.enabled)&&this.addDrawInteraction(e),e.measurement.geomType||this.removeDrawInteraction()}},{key:"componentWillUnmount",value:function(){this.removeDrawInteraction()}},{key:"render",value:function(){var e=this.props.messages||!!this.context.messages&&this.context.messages.drawLocal;return e&&(p().drawLocal=e),null}}])&&T(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o}(i().Component);k(q,"displayName","MeasurementSupport"),k(q,"propTypes",{map:n().object,metric:n().bool,feet:n().bool,nautic:n().bool,enabled:n().bool,useTreshold:n().bool,projection:n().string,measurement:n().object,changeMeasurementState:n().func,messages:n().object,uom:n().object,updateOnMouseMove:n().bool}),k(q,"contextTypes",{messages:n().object}),k(q,"defaultProps",{uom:{length:{unit:"m",label:"m"},area:{unit:"sqm",label:"m²"}},updateOnMouseMove:!1,metric:!0,nautic:!1,useTreshold:!1,feet:!1});const E=q}}]);
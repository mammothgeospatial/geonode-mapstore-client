(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[97615],{669811:(r,e,t)=>{var o=t(539518),n=t(532347),i=n.point,a=o.coordEach,s=o.featureEach,u=n.featureCollection;r.exports=function(r){var e=[];return"FeatureCollection"===r.type?s(r,(function(r){a(r,(function(t){e.push(i(t,r.properties))}))})):a(r,(function(t){e.push(i(t,r.properties))})),u(e)}},532347:r=>{function e(r,e,t,o){if(void 0===r)throw new Error("geometry is required");if(e&&e.constructor!==Object)throw new Error("properties must be an Object");if(t&&4!==t.length)throw new Error("bbox must be an Array of 4 numbers");if(o&&-1===["string","number"].indexOf(typeof o))throw new Error("id must be a number or a string");var n={type:"Feature"};return o&&(n.id=o),t&&(n.bbox=t),n.properties=e||{},n.geometry=r,n}function t(r,t,o,n){if(!r)throw new Error("No coordinates passed");if(void 0===r.length)throw new Error("Coordinates must be an array");if(r.length<2)throw new Error("Coordinates must be at least 2 numbers long");if(!w(r[0])||!w(r[1]))throw new Error("Coordinates must contain numbers");return e({type:"Point",coordinates:r},t,o,n)}function o(r,t,o,n){if(!r)throw new Error("No coordinates passed");for(var i=0;i<r.length;i++){var a=r[i];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<a[a.length-1].length;s++){if(0===i&&0===s&&!w(a[0][0])||!w(a[0][1]))throw new Error("Coordinates must contain numbers");if(a[a.length-1][s]!==a[0][s])throw new Error("First and last Position are not equivalent.")}}return e({type:"Polygon",coordinates:r},t,o,n)}function n(r,t,o,n){if(!r)throw new Error("No coordinates passed");if(r.length<2)throw new Error("Coordinates must be an array of two or more positions");if(!w(r[0][1])||!w(r[0][1]))throw new Error("Coordinates must contain numbers");return e({type:"LineString",coordinates:r},t,o,n)}function i(r,t,o,n){if(!r)throw new Error("No coordinates passed");return e({type:"MultiLineString",coordinates:r},t,o,n)}function a(r,t,o,n){if(!r)throw new Error("No coordinates passed");return e({type:"MultiPoint",coordinates:r},t,o,n)}function s(r,t,o,n){if(!r)throw new Error("No coordinates passed");return e({type:"MultiPolygon",coordinates:r},t,o,n)}var u={miles:3960,nauticalmiles:3441.145,degrees:57.2957795,radians:1,inches:250905600,yards:6969600,meters:6373e3,metres:6373e3,centimeters:6373e5,centimetres:6373e5,kilometers:6373,kilometres:6373,feet:20908792.65},f={kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,centimetres:1e4,millimeter:1e6,acres:247105e-9,miles:386e-9,yards:1.195990046,feet:10.763910417,inches:1550.003100006};function l(r,e){if(null==r)throw new Error("radians is required");var t=u[e||"kilometers"];if(!t)throw new Error("units is invalid");return r*t}function c(r,e){if(null==r)throw new Error("distance is required");var t=u[e||"kilometers"];if(!t)throw new Error("units is invalid");return r/t}function g(r){if(null==r)throw new Error("radians is required");return r%(2*Math.PI)*180/Math.PI}function w(r){return!isNaN(r)&&null!==r&&!Array.isArray(r)}r.exports={feature:e,geometry:function(r,e,u){if(!r)throw new Error("type is required");if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(u&&4!==u.length)throw new Error("bbox must be an Array of 4 numbers");var f;switch(r){case"Point":f=t(e).geometry;break;case"LineString":f=n(e).geometry;break;case"Polygon":f=o(e).geometry;break;case"MultiPoint":f=a(e).geometry;break;case"MultiLineString":f=i(e).geometry;break;case"MultiPolygon":f=s(e).geometry;break;default:throw new Error(r+" is invalid")}return u&&(f.bbox=u),f},featureCollection:function(r,e,t){if(!r)throw new Error("No features passed");if(!Array.isArray(r))throw new Error("features must be an Array");if(e&&4!==e.length)throw new Error("bbox must be an Array of 4 numbers");if(t&&-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string");var o={type:"FeatureCollection"};return t&&(o.id=t),e&&(o.bbox=e),o.features=r,o},geometryCollection:function(r,t,o,n){if(!r)throw new Error("geometries is required");if(!Array.isArray(r))throw new Error("geometries must be an Array");return e({type:"GeometryCollection",geometries:r},t,o,n)},point:t,multiPoint:a,lineString:n,multiLineString:i,polygon:o,multiPolygon:s,radiansToDistance:l,distanceToRadians:c,distanceToDegrees:function(r,e){return g(c(r,e))},radians2degrees:g,degrees2radians:function(r){if(null==r)throw new Error("degrees is required");return r%360*Math.PI/180},bearingToAngle:function(r){if(null==r)throw new Error("bearing is required");var e=r%360;return e<0&&(e+=360),e},convertDistance:function(r,e,t){if(null==r)throw new Error("distance is required");if(!(r>=0))throw new Error("distance must be a positive number");return l(c(r,e),t||"kilometers")},convertArea:function(r,e,t){if(null==r)throw new Error("area is required");if(!(r>=0))throw new Error("area must be a positive number");var o=f[e||"meters"];if(!o)throw new Error("invalid original units");var n=f[t||"kilometers"];if(!n)throw new Error("invalid final units");return r/o*n},round:function(r,e){if(null==r||isNaN(r))throw new Error("num is required");if(e&&!(e>=0))throw new Error("precision must be a positive number");var t=Math.pow(10,e||0);return Math.round(r*t)/t},isNumber:w}},539518:(r,e,t)=>{"use strict";function o(r,e,t){if(null!==r){var n,i,a,s,u,f,l,c,g,w,d=0,m=0,h=r.type,y="FeatureCollection"===h,p="Feature"===h,v=y?r.features.length:1;for(n=0;n<v;n++)for(l=(w=!!(g=y?r.features[n].geometry:p?r.geometry:r)&&"GeometryCollection"===g.type)?g.geometries.length:1,i=0;i<l;i++){var b=0;if(null!==(f=w?g.geometries[i]:g)){c=f.coordinates;var E=f.type;switch(d=!t||"Polygon"!==E&&"MultiPolygon"!==E?0:1,E){case null:break;case"Point":e(c,m,n,b),m++,b++;break;case"LineString":case"MultiPoint":for(a=0;a<c.length;a++)e(c[a],m,n,b),m++,"MultiPoint"===E&&b++;"LineString"===E&&b++;break;case"Polygon":case"MultiLineString":for(a=0;a<c.length;a++){for(s=0;s<c[a].length-d;s++)e(c[a][s],m,n,b),m++;"MultiLineString"===E&&b++}"Polygon"===E&&b++;break;case"MultiPolygon":for(a=0;a<c.length;a++){for(s=0;s<c[a].length;s++)for(u=0;u<c[a][s].length-d;u++)e(c[a][s][u],m,n,b),m++;b++}break;case"GeometryCollection":for(a=0;a<f.geometries.length;a++)o(f.geometries[a],e,t);break;default:throw new Error("Unknown Geometry Type")}}}}}function n(r,e,t,n){var i=t;return o(r,(function(r,o,n,a){i=0===o&&void 0===t?r:e(i,r,o,n,a)}),n),i}function i(r,e){var t;switch(r.type){case"FeatureCollection":for(t=0;t<r.features.length;t++)e(r.features[t].properties,t);break;case"Feature":e(r.properties,0)}}function a(r,e,t){var o=t;return i(r,(function(r,n){o=0===n&&void 0===t?r:e(o,r,n)})),o}function s(r,e){if("Feature"===r.type)e(r,0);else if("FeatureCollection"===r.type)for(var t=0;t<r.features.length;t++)e(r.features[t],t)}function u(r,e,t){var o=t;return s(r,(function(r,n){o=0===n&&void 0===t?r:e(o,r,n)})),o}function f(r){var e=[];return o(r,(function(r){e.push(r)})),e}function l(r,e){var t,o,n,i,a,s,u,f,l=0,c="FeatureCollection"===r.type,g="Feature"===r.type,w=c?r.features.length:1;for(t=0;t<w;t++){for(s=c?r.features[t].geometry:g?r.geometry:r,f=c?r.features[t].properties:g?r.properties:{},a=(u=!!s&&"GeometryCollection"===s.type)?s.geometries.length:1,n=0;n<a;n++)if(null!==(i=u?s.geometries[n]:s))switch(i.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":e(i,l,f);break;case"GeometryCollection":for(o=0;o<i.geometries.length;o++)e(i.geometries[o],l,f);break;default:throw new Error("Unknown Geometry Type")}else e(null,l,f);l++}}function c(r,e,t){var o=t;return l(r,(function(r,n,i){o=0===n&&void 0===t?r:e(o,r,n,i)})),o}function g(r,e){l(r,(function(r,t,o){var n,i=null===r?null:r.type;switch(i){case null:case"Point":case"LineString":case"Polygon":return void e(h(r,o),t,0)}switch(i){case"MultiPoint":n="Point";break;case"MultiLineString":n="LineString";break;case"MultiPolygon":n="Polygon"}r.coordinates.forEach((function(r,i){e(h({type:n,coordinates:r},o),t,i)}))}))}function w(r,e,t){var o=t;return g(r,(function(r,n,i){o=0===n&&0===i&&void 0===t?r:e(o,r,n,i)})),o}function d(r,e){g(r,(function(r,t,o){var i=0;if(r.geometry){var a=r.geometry.type;"Point"!==a&&"MultiPoint"!==a&&n(r,(function(n,a){var s=y([n,a],r.properties);return e(s,t,o,i),i++,a}))}}))}function m(r,e,t){var o=t,n=!1;return d(r,(function(r,i,a,s){o=!1===n&&void 0===t?r:e(o,r,i,a,s),n=!0})),o}function h(r,e){if(void 0===r)throw new Error("No geometry passed");return{type:"Feature",properties:e||{},geometry:r}}function y(r,e){if(!r)throw new Error("No coordinates passed");if(r.length<2)throw new Error("Coordinates must be an array of two or more positions");return{type:"Feature",properties:e||{},geometry:{type:"LineString",coordinates:r}}}function p(r,e){if(!r)throw new Error("geojson is required");var t=r.geometry?r.geometry.type:r.type;if(!t)throw new Error("invalid geojson");if("FeatureCollection"===t)throw new Error("FeatureCollection is not supported");if("GeometryCollection"===t)throw new Error("GeometryCollection is not supported");var o=r.geometry?r.geometry.coordinates:r.coordinates;if(!o)throw new Error("geojson must contain coordinates");switch(t){case"LineString":return void e(o,0,0);case"Polygon":case"MultiLineString":for(var n=0,i=0;i<o.length;i++)"MultiLineString"===t&&(n=i),e(o[i],i,n);return;case"MultiPolygon":for(var a=0;a<o.length;a++)for(var s=0;s<o[a].length;s++)e(o[a][s],s,a);return;default:throw new Error(t+" geometry not supported")}}function v(r,e,t){var o=t;return p(r,(function(r,n,i){o=0===n&&void 0===t?r:e(o,r,n,i)})),o}t.r(e),t.d(e,{coordEach:()=>o,coordReduce:()=>n,propEach:()=>i,propReduce:()=>a,featureEach:()=>s,featureReduce:()=>u,coordAll:()=>f,geomEach:()=>l,geomReduce:()=>c,flattenEach:()=>g,flattenReduce:()=>w,segmentEach:()=>d,segmentReduce:()=>m,feature:()=>h,lineString:()=>y,lineEach:()=>p,lineReduce:()=>v})},420273:(r,e,t)=>{var o=t(989049);function n(r,e,t){var o=!1;e[0][0]===e[e.length-1][0]&&e[0][1]===e[e.length-1][1]&&(e=e.slice(0,e.length-1));for(var n=0,i=e.length-1;n<e.length;i=n++){var a=e[n][0],s=e[n][1],u=e[i][0],f=e[i][1];if(r[1]*(a-u)+s*(u-r[0])+f*(r[0]-a)==0&&(a-r[0])*(u-r[0])<=0&&(s-r[1])*(f-r[1])<=0)return!t;s>r[1]!=f>r[1]&&r[0]<(u-a)*(r[1]-s)/(f-s)+a&&(o=!o)}return o}r.exports=function(r,e){var t=o.getCoord(r),i=e.geometry.coordinates;"Polygon"===e.geometry.type&&(i=[i]);for(var a=0,s=!1;a<i.length&&!s;a++)if(n(t,i[a][0])){for(var u=!1,f=1;f<i[a].length&&!u;)n(t,i[a][f],!0)&&(u=!0),f++;u||(s=!0)}return s}},989049:r=>{function e(r){if(!r)throw new Error("obj is required");var e;if(r.length?e=r:r.coordinates?e=r.coordinates:r.geometry&&r.geometry.coordinates&&(e=r.geometry.coordinates),e)return t(e),e;throw new Error("No valid coordinates")}function t(r){if(r.length>1&&"number"==typeof r[0]&&"number"==typeof r[1])return!0;if(Array.isArray(r[0])&&r[0].length)return t(r[0]);throw new Error("coordinates must only contain numbers")}function o(r){if(!r)throw new Error("geojson is required");if(void 0!==r.geometry)return r.geometry;if(r.coordinates||r.geometries)return r;throw new Error("geojson must be a valid Feature or Geometry Object")}r.exports={geojsonType:function(r,e,t){if(!e||!t)throw new Error("type and name required");if(!r||r.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.type)},collectionOf:function(r,e,t){if(!r)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!r||"FeatureCollection"!==r.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var o=0;o<r.features.length;o++){var n=r.features[o];if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+n.geometry.type)}},featureOf:function(r,e,t){if(!r)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!r||"Feature"!==r.type||!r.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!r.geometry||r.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.geometry.type)},getCoord:function(r){if(!r)throw new Error("obj is required");var t=e(r);if(t.length>1&&"number"==typeof t[0]&&"number"==typeof t[1])return t;throw new Error("Coordinate is not a valid Point")},getCoords:e,containsNumber:t,getGeom:o,getGeomType:function(r){if(!r)throw new Error("geojson is required");var e=o(r);if(e)return e.type}}},235385:(r,e,t)=>{var o=t(555962).featureCollection,n=t(610172),i=t(740551),a=t(420273),s=t(669811);function u(r,e,t,o,n,i){if(Math.sqrt((n-t)*(n-t)+(i-o)*(i-o))===Math.sqrt((r-t)*(r-t)+(e-o)*(e-o))+Math.sqrt((n-r)*(n-r)+(i-e)*(i-e)))return!0}r.exports=function(r){"FeatureCollection"!==r.type&&("Feature"!==r.type&&(r={type:"Feature",geometry:r,properties:{}}),r=o([r]));for(var e=n(r),t=!1,f=0;!t&&f<r.features.length;){var l,c=r.features[f].geometry,g=!1;if("Point"===c.type)e.geometry.coordinates[0]===c.coordinates[0]&&e.geometry.coordinates[1]===c.coordinates[1]&&(t=!0);else if("MultiPoint"===c.type){var w=!1;for(l=0;!w&&l<c.coordinates.length;)e.geometry.coordinates[0]===c.coordinates[l][0]&&e.geometry.coordinates[1]===c.coordinates[l][1]&&(t=!0,w=!0),l++}else if("LineString"===c.type)for(l=0;!g&&l<c.coordinates.length-1;)u(e.geometry.coordinates[0],e.geometry.coordinates[1],c.coordinates[l][0],c.coordinates[l][1],c.coordinates[l+1][0],c.coordinates[l+1][1])&&(g=!0,t=!0),l++;else if("MultiLineString"===c.type)for(var d=0;d<c.coordinates.length;){g=!1,l=0;for(var m=c.coordinates[d];!g&&l<m.length-1;)u(e.geometry.coordinates[0],e.geometry.coordinates[1],m[l][0],m[l][1],m[l+1][0],m[l+1][1])&&(g=!0,t=!0),l++;d++}else"Polygon"!==c.type&&"MultiPolygon"!==c.type||a(e,{type:"Feature",geometry:c,properties:{}})&&(t=!0);f++}if(t)return e;var h,y=o([]);for(f=0;f<r.features.length;f++)y.features=y.features.concat(s(r.features[f]).features);var p=1/0;for(f=0;f<y.features.length;f++){var v=i(e,y.features[f],"miles");v<p&&(p=v,h=y.features[f])}return h}},123742:(r,e,t)=>{var o=t(863245).pZ;r.exports=function(r){var e=[1/0,1/0,-1/0,-1/0];return o(r,(function(r){e[0]>r[0]&&(e[0]=r[0]),e[1]>r[1]&&(e[1]=r[1]),e[2]<r[0]&&(e[2]=r[0]),e[3]<r[1]&&(e[3]=r[1])})),e}},610172:(r,e,t)=>{var o=t(123742),n=t(555962).point;r.exports=function(r,e){var t=o(r),i=(t[0]+t[2])/2,a=(t[1]+t[3])/2;return n([i,a],e)}},740551:(r,e,t)=>{var o=t(698200).getCoord,n=t(555962).radiansToDistance;r.exports=function(r,e,t){var i=Math.PI/180,a=o(r),s=o(e),u=i*(s[1]-a[1]),f=i*(s[0]-a[0]),l=i*a[1],c=i*s[1],g=Math.pow(Math.sin(u/2),2)+Math.pow(Math.sin(f/2),2)*Math.cos(l)*Math.cos(c);return n(2*Math.atan2(Math.sqrt(g),Math.sqrt(1-g)),t)}},555962:r=>{function e(r,e,t,o){if(void 0===r)throw new Error("geometry is required");if(e&&e.constructor!==Object)throw new Error("properties must be an Object");if(t&&4!==t.length)throw new Error("bbox must be an Array of 4 numbers");if(o&&-1===["string","number"].indexOf(typeof o))throw new Error("id must be a number or a string");var n={type:"Feature"};return o&&(n.id=o),t&&(n.bbox=t),n.properties=e||{},n.geometry=r,n}function t(r,t,o,n){if(!r)throw new Error("No coordinates passed");if(void 0===r.length)throw new Error("Coordinates must be an array");if(r.length<2)throw new Error("Coordinates must be at least 2 numbers long");if(!w(r[0])||!w(r[1]))throw new Error("Coordinates must contain numbers");return e({type:"Point",coordinates:r},t,o,n)}function o(r,t,o,n){if(!r)throw new Error("No coordinates passed");for(var i=0;i<r.length;i++){var a=r[i];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<a[a.length-1].length;s++){if(0===i&&0===s&&!w(a[0][0])||!w(a[0][1]))throw new Error("Coordinates must contain numbers");if(a[a.length-1][s]!==a[0][s])throw new Error("First and last Position are not equivalent.")}}return e({type:"Polygon",coordinates:r},t,o,n)}function n(r,t,o,n){if(!r)throw new Error("No coordinates passed");if(r.length<2)throw new Error("Coordinates must be an array of two or more positions");if(!w(r[0][1])||!w(r[0][1]))throw new Error("Coordinates must contain numbers");return e({type:"LineString",coordinates:r},t,o,n)}function i(r,t,o,n){if(!r)throw new Error("No coordinates passed");return e({type:"MultiLineString",coordinates:r},t,o,n)}function a(r,t,o,n){if(!r)throw new Error("No coordinates passed");return e({type:"MultiPoint",coordinates:r},t,o,n)}function s(r,t,o,n){if(!r)throw new Error("No coordinates passed");return e({type:"MultiPolygon",coordinates:r},t,o,n)}var u={miles:3960,nauticalmiles:3441.145,degrees:57.2957795,radians:1,inches:250905600,yards:6969600,meters:6373e3,metres:6373e3,centimeters:6373e5,centimetres:6373e5,kilometers:6373,kilometres:6373,feet:20908792.65},f={kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,centimetres:1e4,millimeter:1e6,acres:247105e-9,miles:386e-9,yards:1.195990046,feet:10.763910417,inches:1550.003100006};function l(r,e){if(null==r)throw new Error("radians is required");var t=u[e||"kilometers"];if(!t)throw new Error("units is invalid");return r*t}function c(r,e){if(null==r)throw new Error("distance is required");var t=u[e||"kilometers"];if(!t)throw new Error("units is invalid");return r/t}function g(r){if(null==r)throw new Error("radians is required");return r%(2*Math.PI)*180/Math.PI}function w(r){return!isNaN(r)&&null!==r&&!Array.isArray(r)}r.exports={feature:e,geometry:function(r,e,u){if(!r)throw new Error("type is required");if(!e)throw new Error("coordinates is required");if(!Array.isArray(e))throw new Error("coordinates must be an Array");if(u&&4!==u.length)throw new Error("bbox must be an Array of 4 numbers");var f;switch(r){case"Point":f=t(e).geometry;break;case"LineString":f=n(e).geometry;break;case"Polygon":f=o(e).geometry;break;case"MultiPoint":f=a(e).geometry;break;case"MultiLineString":f=i(e).geometry;break;case"MultiPolygon":f=s(e).geometry;break;default:throw new Error(r+" is invalid")}return u&&(f.bbox=u),f},featureCollection:function(r,e,t){if(!r)throw new Error("No features passed");if(!Array.isArray(r))throw new Error("features must be an Array");if(e&&4!==e.length)throw new Error("bbox must be an Array of 4 numbers");if(t&&-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string");var o={type:"FeatureCollection"};return t&&(o.id=t),e&&(o.bbox=e),o.features=r,o},geometryCollection:function(r,t,o,n){if(!r)throw new Error("geometries is required");if(!Array.isArray(r))throw new Error("geometries must be an Array");return e({type:"GeometryCollection",geometries:r},t,o,n)},point:t,multiPoint:a,lineString:n,multiLineString:i,polygon:o,multiPolygon:s,radiansToDistance:l,distanceToRadians:c,distanceToDegrees:function(r,e){return g(c(r,e))},radians2degrees:g,degrees2radians:function(r){if(null==r)throw new Error("degrees is required");return r%360*Math.PI/180},bearingToAngle:function(r){if(null==r)throw new Error("bearing is required");var e=r%360;return e<0&&(e+=360),e},convertDistance:function(r,e,t){if(null==r)throw new Error("distance is required");if(!(r>=0))throw new Error("distance must be a positive number");return l(c(r,e),t||"kilometers")},convertArea:function(r,e,t){if(null==r)throw new Error("area is required");if(!(r>=0))throw new Error("area must be a positive number");var o=f[e||"meters"];if(!o)throw new Error("invalid original units");var n=f[t||"kilometers"];if(!n)throw new Error("invalid final units");return r/o*n},round:function(r,e){if(null==r||isNaN(r))throw new Error("num is required");if(e&&!(e>=0))throw new Error("precision must be a positive number");var t=Math.pow(10,e||0);return Math.round(r*t)/t},isNumber:w}},698200:r=>{function e(r){if(!r)throw new Error("obj is required");var e;if(r.length?e=r:r.coordinates?e=r.coordinates:r.geometry&&r.geometry.coordinates&&(e=r.geometry.coordinates),e)return t(e),e;throw new Error("No valid coordinates")}function t(r){if(r.length>1&&"number"==typeof r[0]&&"number"==typeof r[1])return!0;if(Array.isArray(r[0])&&r[0].length)return t(r[0]);throw new Error("coordinates must only contain numbers")}function o(r){if(!r)throw new Error("geojson is required");if(void 0!==r.geometry)return r.geometry;if(r.coordinates||r.geometries)return r;throw new Error("geojson must be a valid Feature or Geometry Object")}r.exports={geojsonType:function(r,e,t){if(!e||!t)throw new Error("type and name required");if(!r||r.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.type)},collectionOf:function(r,e,t){if(!r)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!r||"FeatureCollection"!==r.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var o=0;o<r.features.length;o++){var n=r.features[o];if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+n.geometry.type)}},featureOf:function(r,e,t){if(!r)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!r||"Feature"!==r.type||!r.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!r.geometry||r.geometry.type!==e)throw new Error("Invalid input to "+t+": must be a "+e+", given "+r.geometry.type)},getCoord:function(r){if(!r)throw new Error("obj is required");var t=e(r);if(t.length>1&&"number"==typeof t[0]&&"number"==typeof t[1])return t;throw new Error("Coordinate is not a valid Point")},getCoords:e,containsNumber:t,getGeom:o,getGeomType:function(r){if(!r)throw new Error("geojson is required");var e=o(r);if(e)return e.type}}},863245:(r,e,t)=>{"use strict";function o(r,e,t){if(null!==r){var n,i,a,s,u,f,l,c,g,w,d=0,m=0,h=r.type,y="FeatureCollection"===h,p="Feature"===h,v=y?r.features.length:1;for(n=0;n<v;n++)for(l=(w=!!(g=y?r.features[n].geometry:p?r.geometry:r)&&"GeometryCollection"===g.type)?g.geometries.length:1,i=0;i<l;i++){var b=0;if(null!==(f=w?g.geometries[i]:g)){c=f.coordinates;var E=f.type;switch(d=!t||"Polygon"!==E&&"MultiPolygon"!==E?0:1,E){case null:break;case"Point":e(c,m,n,b),m++,b++;break;case"LineString":case"MultiPoint":for(a=0;a<c.length;a++)e(c[a],m,n,b),m++,"MultiPoint"===E&&b++;"LineString"===E&&b++;break;case"Polygon":case"MultiLineString":for(a=0;a<c.length;a++){for(s=0;s<c[a].length-d;s++)e(c[a][s],m,n,b),m++;"MultiLineString"===E&&b++}"Polygon"===E&&b++;break;case"MultiPolygon":for(a=0;a<c.length;a++){for(s=0;s<c[a].length;s++)for(u=0;u<c[a][s].length-d;u++)e(c[a][s][u],m,n,b),m++;b++}break;case"GeometryCollection":for(a=0;a<f.geometries.length;a++)o(f.geometries[a],e,t);break;default:throw new Error("Unknown Geometry Type")}}}}}t.d(e,{pZ:()=>o})},498805:(r,e,t)=>{var o=t(440180),n=t(862689),i=t(683140),a=t(479833);r.exports=function(r){return function(e){e=a(e);var t=n(e)?i(e):void 0,s=t?t[0]:e.charAt(0),u=t?o(t,1).join(""):e.slice(1);return s[r]()+u}}},548403:(r,e,t)=>{var o=t(479833),n=t(711700);r.exports=function(r){return n(o(r).toLowerCase())}},352353:r=>{r.exports=function(r){return void 0===r}},531351:r=>{var e=Array.prototype.reverse;r.exports=function(r){return null==r?r:e.call(r)}},410240:(r,e,t)=>{var o=t(829750),n=t(880531),i=t(640554),a=t(479833);r.exports=function(r,e,t){return r=a(r),t=null==t?0:o(i(t),0,r.length),e=n(e),r.slice(t,t+e.length)==e}},711700:(r,e,t)=>{var o=t(498805)("toUpperCase");r.exports=o}}]);
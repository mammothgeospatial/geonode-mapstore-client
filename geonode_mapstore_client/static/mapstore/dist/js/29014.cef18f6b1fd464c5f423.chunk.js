(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[29014],{529014:(r,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>n});var o=t(583996);function n(r){for(var e,t,n=(0,o.r7)(r),i=0,a=1;a<n.length;)e=t||n[0],i+=((t=n[a])[0]-e[0])*(t[1]+e[1]),a++;return i>0}},583996:(r,e,t)=>{"use strict";function o(r){if(!r)throw new Error("coord is required");if(!Array.isArray(r)){if("Feature"===r.type&&null!==r.geometry&&"Point"===r.geometry.type)return r.geometry.coordinates;if("Point"===r.type)return r.coordinates}if(Array.isArray(r)&&r.length>=2&&!Array.isArray(r[0])&&!Array.isArray(r[1]))return r;throw new Error("coord must be GeoJSON Point or an Array of numbers")}function n(r){if(Array.isArray(r))return r;if("Feature"===r.type){if(null!==r.geometry)return r.geometry.coordinates}else if(r.coordinates)return r.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function i(r){return"Feature"===r.type?r.geometry:r}t.d(e,{c9:()=>o,r7:()=>n,wA:()=>i}),t(640271)}}]);
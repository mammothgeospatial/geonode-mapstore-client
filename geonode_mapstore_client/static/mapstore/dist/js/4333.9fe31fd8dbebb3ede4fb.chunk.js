(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[4333],{321956:(e,t,r)=>{"use strict";r.d(t,{pf:()=>d,A7:()=>m,FU:()=>y,Fi:()=>v});var n=r(409669),o=r.n(n),i=r(490173),a=r(552259);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e){if("object"!=l(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var d=function(e){var t=e.data,r=e.ifcModule.ifcApi,n=new Uint8Array(t),o=r.OpenModel(n,{COORDINATE_TO_ORIGIN:!1,USE_FAST_BOOLS:!0});r.LoadAllGeometry(o);var i=r.GetCoordinationMatrix(o);i&&r.SetGeometryTransformation(o,i);var a=[],l=1/0,u=-1/0,s=1/0,c=-1/0,f=1/0,d=-1/0;return r.StreamAllMeshes(o,(function(e){for(var t=e.geometries,n=[],i=0;i<t.size();i++){for(var p=t.get(i),m=r.GetGeometry(o,p.geometryExpressID),y=r.GetVertexArray(m.GetVertexData(),m.GetVertexDataSize()),v=r.GetIndexArray(m.GetIndexData(),m.GetIndexDataSize()),b=new Float64Array(y.length/2),g=new Float32Array(y.length/2),h=0;h<y.length;h+=6){var O=y[h],S=y[h+1],A=y[h+2];O<l&&(l=O),S<s&&(s=S),A<f&&(f=A),O>u&&(u=O),S>c&&(c=S),A>d&&(d=A),b[h/2]=O,b[h/2+1]=S,b[h/2+2]=A,g[h/2]=y[h+3],g[h/2+1]=y[h+4],g[h/2+2]=y[h+5]}n.push({color:p.color,positions:b,normals:g,indices:Array.from(v),flatTransformation:p.flatTransformation}),m.delete()}var I=r.GetLine(o,e.expressID);a.push({geometry:n,id:e.expressID,properties:Object.keys(I).reduce((function(e,t){var r;return e[t]=(null===(r=I[t])||void 0===r?void 0:r.value)||I[t],e}),{})})})),r.CloseModel(o),{meshes:a,extent:[l,s,u,c,f,d],center:[l+(u-l)/2,s+(c-s)/2,f+(d-f)/2],size:[u-l,c-s,d-f]}},p={},m=function(e){return(p[e]?function(){return Promise.resolve(p[e])}:function(){return o().get(e,{responseType:"arraybuffer"}).then((function(t){var r=t.data;return p[e]=r,r}))})().then((function(e){return r.e(17555).then(r.bind(r,617555)).then((function(e){var t=new e.IfcAPI;return t.SetWasmPath("./web-ifc/"),t.Init().then((function(){return{ifcApi:t,WebIFC:e}}))})).then((function(t){return{data:e,ifcModule:t}}))}))},y=function(e){return m(e).then((function(t){var r=t.ifcModule,n=t.data,o=r.ifcApi,l=o.OpenModel(new Uint8Array(n),{COORDINATE_TO_ORIGIN:!1,USE_FAST_BOOLS:!0}),u=function(e,t,r){var n,o,i=e.ifcApi;return{version:void 0!==(null==i?void 0:i.GetModelSchema(t))?null!==(n=i.GetModelSchema(t))&&void 0!==n&&n.includes("IFC4")?"IFC4":i.GetModelSchema(t):"IFC4",format:(o=(r||"").split(/\./g))[o.length-1],properties:{}}}(r,l,e),c=function(e,t,r){var n=e.ifcApi,o=e.WebIFC,a={};if(null!=t&&t.includes("IFC4")){var l,u,s=n.GetLineIDsWithType(r,o.IFCPROJECTEDCRS),c=n.GetLineIDsWithType(r,o.IFCMAPCONVERSION);if(s.size()){var f,d=s.get(0),p=n.GetLine(r,d);l=null==p||null===(f=p.Name)||void 0===f?void 0:f.value}if(c.size()){var m,y,v,b,g,h,O,S,A=c.get(0),I=n.GetLine(r,A);if(u={northings:null==I||null===(m=I.Northings)||void 0===m?void 0:m.value,eastings:null==I||null===(y=I.Eastings)||void 0===y?void 0:y.value,orthogonalHeight:null==I||null===(v=I.OrthogonalHeight)||void 0===v?void 0:v.value,xAxisOrdinate:null==I||null===(b=I.XAxisOrdinate)||void 0===b?void 0:b.value,xAxisAbscissa:null==I||null===(g=I.XAxisAbscissa)||void 0===g?void 0:g.value,rotation:180*Math.atan2((null==I||null===(h=I.XAxisOrdinate)||void 0===h?void 0:h.value)||0,(null==I||null===(O=I.XAxisAbscissa)||void 0===O?void 0:O.value)||0)/Math.PI,scale:null==I||null===(S=I.Scale)||void 0===S?void 0:S.value},i.default.defs(l)){var w=(0,i.default)(i.default.defs(l),i.default.defs("EPSG:4326"),[u.eastings,u.northings]);a={projectedCrs:l,longitude:w[0]||0,latitude:w[1]||0,height:u.orthogonalHeight||0,scale:u.scale||1,heading:u.rotation,mapConversion:u}}else a={projectedCrs:l,projectedCrsNotSupported:!0,mapConversion:u}}}return a}(r,u.version,l),p=function(e){var t,r=e.modelID,n=e.ifcModule,o=e.data,i=n.ifcApi,a=n.WebIFC,l=i.GetLineIDsWithType(r,a.IFCBOUNDINGBOX).size();return l?(t=Array(l).keys(),function(e){if(Array.isArray(e))return f(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=i.GetLineIDsWithType(r,a.IFCBOUNDINGBOX).get(e),n=i.GetLine(r,t),o=i.GetLine(r,n.Corner.value),l=((null==o?void 0:o.Coordinates)||[]).map((function(e){return(null==e?void 0:e.value)||0}));return[n.XDim.value+Math.abs(l[0]),n.YDim.value+Math.abs(l[1]),n.ZDim.value+Math.abs(l[2])]}))[0]:d({data:o,ifcModule:n}).size}({modelID:l,ifcModule:r,data:n});u.properties=s(s(s({},u.properties),c),{},{size:p}),o.CloseModel(l);var m=u.properties,y={bounds:{minx:(m.longitude||0)-p[0]/2/a.Wm.degrees,miny:(m.latitude||0)-p[1]/2/a.Wm.degrees,maxx:(m.longitude||0)+p[0]/2/a.Wm.degrees,maxy:(m.latitude||0)+p[1]/2/a.Wm.degrees},crs:"EPSG:4326"};return s(s({},u),y&&{bbox:y})}))},v="MODEL"},504333:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var n=r(124852),o=r.n(n),i=r(461928),a=r(319180),l=r(898631),u=r(180651),s=r(321956),c=r(552259),f=r(143450),d=r(809069),p=r(376213),m=r(35961),y=r(271533),v=r(809195);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e){if("object"!=b(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,l=[],u=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){s=!0,o=e}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return l}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return j(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var E=(0,a.Z)(i.Z);E.displayName="Map";var P={gltf:function(e){var t=e.feature,r=e.url;return Promise.resolve({type:"vector",visibility:!0,features:[t],style:{format:"geostyler",body:{name:"",rules:[{name:"",symbolizers:[{kind:"Model",model:r}]}]}}})},ifc:function(e){var t=e.feature,r=e.url;return(0,s.FU)(r).then((function(e){return{type:"model",visibility:!0,url:r,features:[t],capabilities:e}}))}},C={gltf:function(e){var t=e.map,r=e.setLoading;return(0,n.useEffect)((function(){t.scene.globe.depthTestAgainstTerrain=!1,t.scene.screenSpaceCameraController.enableCollisionDetection=!1;var e=t.dataSources.get(0),n=function(){e.entities.values[0]&&(t.flyTo(e.entities.values[0],{duration:0}),r(!1))};return e.entities.collectionChanged.addEventListener(n),function(){e.entities.collectionChanged.removeEventListener(n)}}),[]),null},ifc:function(e){var t=e.map,r=e.setLoading,i=e.container,a=e.center,l=e.layer,u=I((0,n.useState)({}),2),s=u[0],v=u[1],b=null==i?void 0:i.getBoundingClientRect();return(0,n.useEffect)((function(){var e,n=(((null==l?void 0:l.capabilities)||{}).properties||{}).size,o=void 0===n?[100,100,100]:n,i=I((null==a||null===(e=a.geometry)||void 0===e?void 0:e.coordinates)||[0,0],2),u=i[0],s=i[1],d=f.Z.fromDegrees((u||0)-o[0]/2/c.Wm.degrees,(s||0)-o[1]/2/c.Wm.degrees,(u||0)+o[0]/2/c.Wm.degrees,(s||0)+o[1]/2/c.Wm.degrees);t.camera.setView({destination:d}),r(!1)}),[l]),(0,n.useEffect)((function(){var e,r=new d.Z(t.scene.canvas);return r.setInputAction((function(r){var n,o=t.scene.pick(r.endPosition);v({}),e&&(e.primitive.getGeometryInstanceAttributes(e.id).color=p.Z.toValue(function(e,t,r){if(A())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var o=new(e.bind.apply(e,n));return r&&S(o,r.prototype),o}(m.Z,function(e){if(Array.isArray(e))return j(e)}(n=e.color)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||w(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),e=void 0,t.scene.requestRender());var i=o||{},a=i.primitive,l=i.id;if(a&&a._msGetFeatureById){var u,s=a.getGeometryInstanceAttributes(l);e={id:l,color:[s.color[0]/255,s.color[1]/255,s.color[2]/255,s.color[3]/255],primitive:a},s.color=p.Z.toValue(m.Z.RED),t.scene.requestRender();var c=a._msGetFeatureById(l);v({x:r.endPosition.x,y:r.endPosition.y,properties:null==c||null===(u=c.feature)||void 0===u?void 0:u.properties})}}),y.Z.MOUSE_MOVE),function(){r.destroy()}}),[]),null!=s&&s.properties?o().createElement("div",{className:"shadow gn-media-scene-3d-info gn-details-info-fields",style:h({position:"absolute",zIndex:10,padding:"0.25rem",pointerEvents:"none",maxWidth:3*b.width/2,wordBreak:"break-word",transition:"0.3s all",minWidth:300,userSelect:"none"},function(){if(b.width<768||b.height<768)return{left:0,top:0,transform:"translateX(1rem) translateY(1rem)"};var e=null==s?void 0:s.x,t=null==s?void 0:s.y,r=e>b.width/2?"translateX(calc(-100% - 1rem))":"translateX(1rem)",n=t>b.height/2?"translateY(calc(-100% - 1rem))":"translateY(1rem)";return{left:e,top:t,transform:"".concat(r," ").concat(n)}}())},o().createElement("div",{className:"gn-media-scene-3d-info-bg",style:{opacity:.85,position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),Object.keys(s.properties).map((function(e){return o().createElement("div",{key:e,className:"gn-details-info-row"},o().createElement("div",{className:"gn-details-info-label",style:{width:(t=Object.keys(s.properties||{}).reduce((function(e,t){return e.length>t.length?e:t})),t.length?"".concat(.5*t.length,"rem"):"auto")}},e),o().createElement("div",{className:"gn-details-info-value",style:{maxWidth:"none"}},s.properties[e]));var t}))):null}};const G=function(e){var t=e.src,r=e.mediaType,i=e.bboxPolygon,a=(0,n.useRef)(),s=I((0,n.useState)(!0),2),c=s[0],f=s[1],d=I((0,n.useState)(null),2),p=d[0],m=d[1],y=i?(0,u.Z)(i):{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{}},b=C[r];return(0,n.useEffect)((function(){P[r]&&P[r]({url:t,feature:y}).then((function(e){m(e)}))}),[r]),o().createElement("div",{ref:a,className:"gn-media-scene-3d"},p?o().createElement(E,{id:"gn-media-scene-3d-map",mapType:l.Bk.CESIUM,map:{registerHooks:!1,projection:"EPSG:4326"},styleMap:{position:"absolute",width:"100%",height:"100%"},eventHandlers:{},layers:[p]},o().createElement(b,{src:t,center:y,container:a.current,setLoading:f,layer:p})):null,c?o().createElement(v.Z,null):null)}}}]);
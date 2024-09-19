/*! For license information please see 31273.cef18f6b1fd464c5f423.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[31273],{931273:(e,t,r)=>{"use strict";r.d(t,{WX:()=>c,r7:()=>l,V3:()=>s,HR:()=>f,xi:()=>p,ur:()=>v,vK:()=>m,nm:()=>d,QF:()=>y,zZ:()=>g,uN:()=>b,Bz:()=>w,im:()=>O,CO:()=>S,$X:()=>A,Mt:()=>E,Oq:()=>T,YO:()=>x,PR:()=>C,wI:()=>R,bv:()=>L,mh:()=>P,$Y:()=>G,eA:()=>_,UT:()=>I,cS:()=>D,l7:()=>j,l3:()=>M,Kz:()=>N,vg:()=>F,xM:()=>k,do:()=>W,lb:()=>B,yu:()=>V,Xp:()=>U,c$:()=>H,tt:()=>q,nX:()=>X,BG:()=>$,Rc:()=>Y,K4:()=>Z,Dw:()=>z,dL:()=>Q,In:()=>K,r1:()=>J,XW:()=>ee,L8:()=>te,i3:()=>re,XM:()=>ne,X7:()=>oe,M3:()=>ie,N3:()=>ae,SU:()=>ue,wo:()=>ce,ye:()=>le,m:()=>se,wl:()=>fe,bu:()=>pe,A4:()=>ve,vG:()=>me,Wf:()=>de,Ts:()=>ye,IT:()=>he,XS:()=>ge,tx:()=>be,We:()=>we,nx:()=>Oe,kC:()=>Se,E9:()=>Ae,zX:()=>Ee,QT:()=>Te});var n=r(659551),o=r(501157),i=r(603475),a=r(932354),u=r(197395),c=(n.ZP,o.ZP,i.ZP,a.Z,"CATALOG:ADD_LAYERS_FROM_CATALOGS"),l="CATALOG:ADD_LAYER_AND_DESCRIBE",s="CATALOG:TEXT_SEARCH",f="CATALOG:RECORD_LIST_LOADED",p="CATALOG:RESET_CATALOG",v="CATALOG:CATALOG_CLOSE",m="CATALOG:RECORD_LIST_LOAD_ERROR",d="CATALOG:CHANGE_CATALOG_FORMAT",y="CATALOG:ADD_LAYER_ERROR",h="CATALOG:DESCRIBE_ERROR",g="CATALOG:CHANGE_SELECTED_SERVICE",b="CATALOG:CHANGE_CATALOG_MODE",w="CATALOG:CHANGE_METADATA_TEMPLATE",O="CATALOG:CHANGE_TITLE",S="CATALOG:CHANGE_TEXT",A="CATALOG:CHANGE_TYPE",E="CATALOG:CHANGE_SERVICE_PROPERTY",T="CATALOG:CHANGE_SERVICE_FORMAT",x="CATALOG:FOCUS_SERVICES_LIST",C="CATALOG:CHANGE_URL",R="CATALOG:ADD_CATALOG_SERVICE",L="CATALOG:DELETE_CATALOG_SERVICE",P="CATALOG:ADD_SERVICE",G="CATALOG:DELETE_SERVICE",_="CATALOG:SAVING_SERVICE",I="CATALOG:GET_METADATA_RECORD_BY_ID",D="CATALOG:SET_LOADING",j="CATALOG:SHOW_FORMAT_ERROR",M="CATALOG:TOGGLE_TEMPLATE",N="CATALOG:TOGGLE_THUMBNAIL",F="CATALOG:TOGGLE_ADVANCED_SETTINGS",k="CATALOG:FORMAT_OPTIONS_FETCH",W="CATALOG:FORMAT_OPTIONS_LOADING",B="CATALOG:SET_FORMAT_OPTIONS",V="CATALOG:NEW_SERVICE_STATUS",U="CATALOG:INIT_PLUGIN";function H(){return{type:c,layers:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],sources:arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],options:arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]}}function q(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.format,r=e.url,n=e.startPosition,o=e.maxRecords,i=e.text,a=e.options;return{type:s,format:t,url:r,startPosition:n,maxRecords:o,text:i,options:void 0===a?{}:a}}function X(e,t){return{type:f,searchOptions:e,result:t}}function $(e){return{type:d,format:e}}function Y(e){return{type:_,status:e}}function Z(){return{type:D,loading:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}function z(e){return{type:g,service:e}}function Q(e){return{type:x,status:e}}function K(e,t){return{type:b,mode:e,isNew:t}}function J(e){return{type:O,title:e}}function ee(e){return{type:S,text:e}}function te(e,t){return{type:E,property:e,value:t}}function re(e){return{type:T,format:e}}function ne(e){return{type:A,newType:e}}function oe(e){return{type:C,url:e}}function ie(e){return{type:P,options:e}}function ae(e){return{type:R,service:e}}function ue(e){return{type:L,service:e}}function ce(){return{type:G}}function le(){return{type:p}}function se(e){return{type:m,error:e}}function fe(){return{type:v}}function pe(e,t){return{type:h,layer:e,error:t}}var ve=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).zoomToLayer;return{type:l,layer:e,zoomToLayer:void 0!==t&&t}};function me(e){return{type:y,error:e}}var de=function(e){return{type:w,metadataTemplate:e}},ye=function(){return{type:F}},he=function(){return{type:M}},ge=function(){return{type:N}},be=function(e,t){return{type:k,url:e,force:t}},we=function(e){return{type:W,loading:e}},Oe=function(e,t){return{type:B,formats:e,url:t}},Se=function(e){return{type:j,status:e}};function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,u.vU)({title:"catalog.notification.errorTitle",message:"catalog.notification.errorSearchingRecords",values:{records:e}})}var Ee=function(e){return{type:V,status:e}},Te=function(e){return{type:U,options:e}}},659551:(e,t,r)=>{"use strict";r.d(t,{_b:()=>N,kv:()=>H,ZP:()=>Y});var n=r(472500),o=r.n(n),i=r(227361),a=r.n(i),u=r(91175),c=r.n(u),l=r(610928),s=r.n(l),f=r(941106),p=r.n(f),v=r(414293),m=r.n(v),d=r(984596),y=r.n(d),h=r(441609),g=r.n(h),b=r(727418),w=r.n(b),O=r(375875),S=r.n(O),A=r(737275),E=r(916651),T=r(501157),x=r(658918),C=r(611847);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function L(){L=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),u=new _(n||[]);return o(a,"_invoke",{value:x(e,r,u)}),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var p="suspendedStart",v="suspendedYield",m="executing",d="completed",y={};function h(){}function g(){}function b(){}var w={};l(w,a,(function(){return this}));var O=Object.getPrototypeOf,S=O&&O(O(I([])));S&&S!==r&&n.call(S,a)&&(w=S);var A=b.prototype=h.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function r(o,i,a,u){var c=f(e[o],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==R(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,a,u)}),(function(e){r("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return i=i?i.then(o,o):o()}})}function x(t,r,n){var o=p;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=C(u,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=f(t,r,n);if("normal"===l.type){if(o=n.done?d:v,l.arg===y)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=d,n.method="throw",n.arg=l.arg)}}}function C(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function G(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function I(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(R(t)+" is not iterable")}return g.prototype=b,o(A,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=l(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,l(e,c,"GeneratorFunction")),e.prototype=Object.create(A),e},t.awrap=function(e){return{__await:e}},E(T.prototype),l(T.prototype,u,(function(){return this})),t.AsyncIterator=T,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new T(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(A),l(A,c,"Generator"),l(A,a,(function(){return this})),l(A,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=I,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),G(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function P(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,o)}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=R(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==R(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?j(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var M=function(e){var t=o().parse((0,C.eW)(e),!0);return o().format(w()({},t,{search:null},{query:w()({service:"CSW",version:"2.0.2"},t.query,{request:void 0})}))},N='<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" xmlns:gml="http://www.opengis.net/gml" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dct="http://purl.org/dc/terms/" xmlns:gmd="http://www.isotc211.org/2005/gmd" xmlns:gco="http://www.isotc211.org/2005/gco" xmlns:gmi="http://www.isotc211.org/2005/gmi" xmlns:ows="http://www.opengis.net/ows" service="CSW" version="2.0.2" resultType="results" startPosition="${startPosition}" maxRecords="${maxRecords}"> <csw:Query typeNames="csw:Record"> <csw:ElementSetName>full</csw:ElementSetName> <csw:Constraint version="1.1.0"> <ogc:Filter> ${filterXml} </ogc:Filter> </csw:Constraint> ${sortBy} </csw:Query> </csw:GetRecords>',F=function(e,t,r){if(!t.name)return null;switch(e){case"wms":case"wfs":var n=0!==t.value.indexOf("http")?(r&&r.catalogURL||"")+"/"+t.value:t.value;return{type:t.protocol||t.scheme,url:n,SRS:[],params:{name:t.name}};case"arcgis":return{type:"arcgis",url:t.value,SRS:[],params:{name:t.name}};default:return null}},k=[/^OGC:WMS-(.*)-http-get-map/g,/^OGC:WMS/g],W=[/^OGC:WFS-(.*)-http-get-(capabilities|feature)/g,/^OGC:WFS/g],B=/serviceType\/ogc\/wms/g,V=/serviceType\/ogc\/wfs/g,U=k.concat(B),H=function(e,t){var r,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=(null==e?void 0:e.URI)&&y()(e.URI),a=m()(null==t?void 0:t.type)||"wms"===(null==t?void 0:t.type),u="wfs"===(null==t?void 0:t.type);if(i){if(a){var l=c()(i.map((function(e){if(e.protocol){if(k.some((function(t){return e.protocol.match(t)})))return e;if(e.protocol.match(B))return function(e){var t=new Map(Array.from(new URLSearchParams(e.value)).map((function(e){var t=D(e,2),r=t[0],n=t[1];return[r.toLowerCase(),n]}))),r=t.get("layers"),n=t.get("version");return!!r&&_(_({},e),{},{protocol:"OGC:WMS",name:r,value:"".concat(e.value.match(/[^\?]+[\?]+/g),"SERVICE=WMS").concat(n&&"&VERSION=".concat(n))})}(e)}return!1})).filter((function(e){return e})));if(l)return F("wms",l,t)}if(u){var s=c()(i.map((function(e){if(e.protocol){if(W.some((function(t){return e.protocol.match(t)})))return e;if(e.protocol.match(V))return function(e){var t=new Map(Array.from(new URLSearchParams(e.value)).map((function(e){var t=D(e,2),r=t[0],n=t[1];return[r.toLowerCase(),n]}))).get("typename");return!!t&&_(_({},e),{},{protocol:"OGC:WFS",name:t,value:"".concat(e.value.match(/[^\?]+[\?]+/g),"service=WFS")})}(e)}return!1})).filter((function(e){return e})));if(s)return F("wfs",s,t)}}if(null!=e&&null!==(r=e.references)&&void 0!==r&&r.length){var f=y()(e.references),p=c()(f.filter((function(e){return e.scheme&&k.some((function(t){return e.scheme.match(t)}))}))),v=c()(f.filter((function(e){return e.scheme&&W.some((function(t){return e.scheme.match(t)}))})));if(a&&p){var d=o().parse((0,C.eW)(p.value),!0),h=d.query&&d.query.layers||e.alternative;return F("wms",_(_({},p),{},{value:o().format(d),name:h}),t)}if(u&&v){var g=o().parse((0,C.eW)(v.value),!0),b=g.query&&g.query.layers||e.alternative;return F("wfs",_(_({},v),{},{value:o().format(g),name:b}),t)}if(n){var w=c()(f.filter((function(e){return e.scheme&&"WWW:DOWNLOAD-REST_MAP"===e.scheme})));if(w)return F("arcgis",_(_({},w),{},{name:e.alternative}),t)}}return null},q={},X=function(){var e,t=(e=L().mark((function e(t){var r,n,o,i;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",t);case 2:if(null==(r=t.records)||!r.length){e.next=10;break}return n=r.map((function(e){var t;if((null==e||null===(t=e.dc)||void 0===t?void 0:t.format)===x.X){var r,n,o=null===(r=e.dc)||void 0===r||null===(n=r.URI)||void 0===n?void 0:n.value;return(0,x.F)(o)}return Promise.resolve(null)})),e.next=7,Promise.all(n);case 7:return o=e.sent,i=r.map((function(e,t){var r,n,i=o[t];if(!i||null==i||null===(r=i.bbox)||void 0===r||!r.bounds||null==i||null===(n=i.bbox)||void 0===n||!n.crs)return e;var a=(0,E.getExtentFromNormalized)(i.bbox.bounds,i.bbox.crs);return _(_({},e),{},{boundingBox:{extent:a.extent,crs:i.bbox.crs}})})),e.abrupt("return",_(_({},t),{},{records:i}));case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){P(i,n,o,a,u,"next",e)}function u(e){P(i,n,o,a,u,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}(),$={parseUrl:M,getRecordById:function(e){return new Promise((function(t){Promise.all([r.e(99942),r.e(66372)]).then(function(){t(S().get(e).then((function(e){if(e){var t=r(566372).unmarshaller.unmarshalString(e.data);if(t&&t.name&&"GetRecordByIdResponse"===t.name.localPart&&t.value&&t.value.abstractRecord){var n=t.value.abstractRecord[0].value.dcElement;if(n){for(var o={references:[]},i=0;i<n.length;i++){var a=n[i],u=a.name.localPart,c={};c="references"===u&&a.value?{value:a.value.content&&(0,A.$F)(a.value.content[0])||a.value.content||a.value,scheme:a.value.scheme}:a.value.content&&a.value.content[0]||a.value.content||a.value,o[u]&&Array.isArray(o[u])?o[u].push(c):o[u]?o[u]=[o[u],c]:o[u]=c}return{dc:o}}}else if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"};return null}return null})))}.bind(null,r)).catch(r.oe)}))},getRecords:function(e,t,n,o,i){return new Promise((function(u){Promise.all([r.e(99942),r.e(1269)]).then(function(){var l=r(566372),f=l.CSW,v=l.marshaller,d=l.unmarshaller,h=v.marshalString({name:"csw:GetRecords",value:f.getRecords(t,n,"string"!=typeof o&&o)});o&&"string"!=typeof o||(h=function(e,t,r){var n,o=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).options,i=(void 0===o?{}:o).service,a=null!=i?i:{},u=a.filter,c=a.sortBy,l=(null==u?void 0:u.staticFilter)||"<ogc:Or>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n            <ogc:PropertyIsEqualTo>\n                <ogc:PropertyName>dc:type</ogc:PropertyName>\n                <ogc:Literal>http://purl.org/dc/dcmitype/Dataset</ogc:Literal>\n            </ogc:PropertyIsEqualTo>\n       </ogc:Or>",s="<ogc:And>\n        ".concat(p()((null==u?void 0:u.dynamicFilter)||"<ogc:PropertyIsLike wildCard='%' singleChar='_' escapeChar='\\'><ogc:PropertyName>csw:AnyText</ogc:PropertyName> <ogc:Literal>%${searchText}%</ogc:Literal> </ogc:PropertyIsLike> ")({searchText:r}),"\n        ").concat(l,"\n    </ogc:And>"),f=null!=c&&c.name?p()("<ogc:SortBy><ogc:SortProperty><ogc:PropertyName>${name}</ogc:PropertyName><ogc:SortOrder>${order}</ogc:SortOrder></ogc:SortProperty></ogc:SortBy>")({name:null==c?void 0:c.name,order:null!==(n=null==c?void 0:c.order)&&void 0!==n?n:"ASC"}):"";return p()(N)({filterXml:r?s:l,startPosition:e,maxRecords:t,sortBy:f})}(t,n,o,i)),u(S().post(M(e),h,{headers:{"Content-Type":"application/xml"}}).then((function(e){if(e){var t=d.unmarshalString(e.data);if(t&&t.name&&"GetRecordsResponse"===t.name.localPart&&t.value&&t.value.searchResults){var r,n=t.value,o=n.searchResults.abstractRecord||n.searchResults.any,u={numberOfRecordsMatched:n.searchResults.numberOfRecordsMatched,numberOfRecordsReturned:n.searchResults.numberOfRecordsReturned,nextRecord:n.searchResults.nextRecord},l=[];if(o)for(var f=0;f<o.length;f++){var p=o[f].value,v={dateStamp:p.dateStamp&&p.dateStamp.date,fileIdentifier:p.fileIdentifier&&p.fileIdentifier.characterString&&p.fileIdentifier.characterString.value,identificationInfo:p.abstractMDIdentification&&p.abstractMDIdentification.value};if(p.boundingBox){var h,b=void 0;if((h=Array.isArray(p.boundingBox)?c()(p.boundingBox):p.boundingBox)&&h.value){var w,O,S,x,C=null!==(w=null===(O=h.value)||void 0===O?void 0:O.crs)&&void 0!==w?w:"",R=null===(S=C.match(/[\w-]*:[\w-]*:[\w-]*:[\w-]*:[\w-]*:[^:]*:(([\w-]+\s[\w-]+)|[\w-]*)/))||void 0===S?void 0:S[0],L=(0,E.makeNumericEPSG)(null===(x=C.match(/EPSG:[0-9]+/))||void 0===x?void 0:x[0]),P=h.value.lowerCorner,G=h.value.upperCorner,I=L||(0,E.extractCrsFromURN)(R)||s()(C.split(":"));"EPSG:4326"===(I?"EPSG:"===I.slice(0,5)?(0,E.makeNumericEPSG)(I):(0,E.makeNumericEPSG)("EPSG:".concat(I)):"EPSG:4326")&&"CRS84"!==I&&"OGC:CRS84"!==I&&(P=[P[1],P[0]],G=[G[1],G[0]]),b=(0,E.makeBboxFromOWS)(P,G)}v.boundingBox={extent:b,crs:"EPSG:4326"}}var j=p.dcElement;if(j){for(var M={references:[]},N=0;N<j.length;N++){var F=j[N],k=F.name.localPart,W={};W="references"===k&&F.value?{value:F.value.content&&(0,A.$F)(F.value.content[0])||F.value.content||F.value,scheme:F.value.scheme}:F.value.content&&F.value.content[0]||F.value.content||F.value,M[k]&&Array.isArray(M[k])?M[k].push(W):M[k]?M[k]=[M[k],W]:M[k]=W}var B=y()(M.references.length>0?M.references:M.URI);r=r?r.concat(B):B,v.dc=M}l.push(v)}return u.records=l,function(e,t,r){if(!a()(r,"options.service.autoSetVisibilityLimits",!1))return t;var n=((null==e?void 0:e.find((function(e){return U.some((function(t){var r,n;return(null==e||null===(r=e.scheme)||void 0===r?void 0:r.match(t))||(null==e||null===(n=e.protocol)||void 0===n?void 0:n.match(t))}))})))||{}).value,o=D(n&&n.split("?")||[],1)[0];if(!o)return _({},t);var i=q[o],u=!g()(i);return Promise.resolve(u?i:T.ZP.getCapabilities(o+"?version=").then((function(e){return T.ZP.flatLayers(e.Capability)})).catch((function(){return[]}))).then((function(e){var r;return u||(q[o]=e),_(_({},t),{},{records:null==t||null===(r=t.records)||void 0===r?void 0:r.map((function(t){var r=a()(H(null==t?void 0:t.dc,null,!1),"params.name",""),n=e.find((function(e){return e.Name===r}))||{},o=n.MinScaleDenominator,i=n.MaxScaleDenominator;return _(_({},t),(!m()(o)||!m()(i))&&{capabilities:{MaxScaleDenominator:i,MinScaleDenominator:o}})}))})}))}(r,u,i)}if(t&&t.name&&"ExceptionReport"===t.name.localPart)return{error:t.value.exception&&t.value.exception.length&&t.value.exception[0].exceptionText||"GenericError"}}return null})).then((function(e){return X(e)})))}.bind(null,r)).catch(r.oe)}))},textSearch:function(e,t,r,n,o){return new Promise((function(i){i($.getRecords(e,t,r,n,o))}))},workspaceSearch:function(e,t,n,o,i){return new Promise((function(a){Promise.all([r.e(99942),r.e(1269)]).then(function(){var u=r(484454).Filter,c=i||"%",l=o&&"%"+o+"%"||"%",s=u.propertyIsLike("dc:identifier",c+":"+l),f=u.filter(s);a($.getRecords(e,t,n,f))}.bind(null,r)).catch(r.oe)}))},reset:function(){}};const Y=$},658918:(e,t,r)=>{"use strict";r.d(t,{F:()=>m,X:()=>d});var n=r(375875),o=r.n(n),i=r(916651),a=r(552259),u=r(598223);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var m=function(e){return o().get(e).then((function(e){var t,n=e.data;return(t=n,Promise.all([r.e(48764),r.e(29379),r.e(45477),r.e(82582)]).then(r.bind(r,545477)).then((function(e){var r,n,o,u,c=e,l=void 0!==(null==t||null===(r=t.asset)||void 0===r?void 0:r.version)?t.asset.version:"1.0",f=function(e,t){var r,n,o,u,c,l;if(null!=t&&null!==(r=t.root)&&void 0!==r&&null!==(n=r.boundingVolume)&&void 0!==n&&n.region){var s=p(t.root.boundingVolume.region,4),f=s[0],v=s[1],m=s[2],d=s[3];return{bounds:{minx:(0,i.convertRadianToDegrees)(f),miny:(0,i.convertRadianToDegrees)(v),maxx:(0,i.convertRadianToDegrees)(m),maxy:(0,i.convertRadianToDegrees)(d)},crs:"EPSG:4326"}}var y=e.Matrix4.fromArray(t.root.transform||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);if(null!=t&&null!==(o=t.root)&&void 0!==o&&null!==(u=o.boundingVolume)&&void 0!==u&&u.box){var h=p(t.root.boundingVolume.box,3),g=h[0],b=h[1],w=h[2],O=e.Matrix4.multiplyByPoint(y,new e.Cartesian3(g,b,w),new e.Cartesian3),S=e.Matrix4.getMatrix3(y,new e.Matrix4),A=e.Matrix3.multiply(S,e.Matrix3.fromArray(t.root.boundingVolume.box,3,new e.Matrix3),new e.Matrix3),E=e.BoundingSphere.fromOrientedBoundingBox(new e.OrientedBoundingBox(O,A)),T=e.Cartographic.fromCartesian(E.center);if(!T)return null;var x=(0,i.convertRadianToDegrees)(T.longitude),C=(0,i.convertRadianToDegrees)(T.latitude),R=E.radius/a.Wm.degrees;return{bounds:{minx:x-R,miny:C-R,maxx:x+R,maxy:C+R},crs:"EPSG:4326"}}if(null!=t&&null!==(c=t.root)&&void 0!==c&&null!==(l=c.boundingVolume)&&void 0!==l&&l.sphere){var L=p(t.root.boundingVolume.sphere,4),P=L[0],G=L[1],_=L[2],I=L[3],D=e.Matrix4.multiplyByPoint(y,new e.Cartesian3(P,G,_),new e.Cartesian3),j=e.Matrix4.getScale(y,new e.Matrix4),M=I*e.Cartesian3.maximumComponent(j)/a.Wm.degrees,N=e.Cartographic.fromCartesian(D);if(!N)return null;var F=(0,i.convertRadianToDegrees)(N.longitude),k=(0,i.convertRadianToDegrees)(N.latitude);return{bounds:{minx:F-M,miny:k-M,maxx:F+M,maxy:k+M},crs:"EPSG:4326"}}return null}(c,t),v=(u=((null==t||null===(n=t.root)||void 0===n||null===(o=n.content)||void 0===o?void 0:o.uri)||"").split(/\./g))[u.length-1],m=null==t?void 0:t.properties;return s(s({version:l},f&&{bbox:f}),{},{format:v,properties:m})}))).then((function(e){return s({tileset:n},e)}))})).catch((function(e){return(0,u.H)(e),{tileset:{}}}))},d="3D Tiles"},603475:(e,t,r)=>{"use strict";r.d(t,{hn:()=>T,ZP:()=>x});var n=r(375875),o=r.n(n),i=r(737275),a=r(472500),u=r.n(a),c=r(727418),l=r.n(c),s=r(505055),f=r.n(s),p=r(984596),v=r.n(p),m=r(916651),d=r(611847),y=r(707294);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={},S=function(e){var t=u().parse((0,d.eW)(e),!0);return u().format(l()({},t,{search:null},{query:l()({SERVICE:"WMTS",VERSION:"1.0.0",REQUEST:"GetCapabilities"},t.query)}))},A=function(e,t,r,n,o){for(var i=e.Capabilities.Contents,a=(0,y.G6)(e),u=(0,y.s5)(e),c=i.TileMatrixSet&&v()(i.TileMatrixSet)||[],s=[],f=c.length,p=0;p<f;p++)s.push((0,m.getEPSGCode)(c[p]["ows:SupportedCRS"]));var d=i.Layer,h=v()(d).filter((function(e){return!n||-1!==e["ows:Identifier"].toLowerCase().indexOf(n.toLowerCase())||e["ows:Title"]&&-1!==e["ows:Title"].toLowerCase().indexOf(n.toLowerCase())}));return{numberOfRecordsMatched:h.length,numberOfRecordsReturned:Math.min(r,h.length),nextRecord:t+Math.min(r,h.length)+1,records:h.filter((function(e,n){return n>=t-1&&n<t-1+r})).map((function(e){return l()({},e,{SRS:s,TileMatrixSet:c,queryable:!!(0,y.b4)(a,"GetFeatureInfo","KVP"),requestEncoding:u,style:(0,y.EN)(e),format:(0,y.JY)(e),formats:v()(e.Format),GetTileURL:(0,y.b4)(a,"GetTile",u),capabilitiesURL:o})}))}},E={parseUrl:S,getRecords:function(e,t,r,n){var a=O[e];return a&&(new Date).getTime()<a.timestamp+1e3*((0,i.u8)("cacheExpire")||60)?new Promise((function(o){o(A(a.data,t,r,n,e))})):o().get(S(e)).then((function(o){var i;return f().parseString(o.data,{explicitArray:!1},(function(e,t){i=t})),O[e]={timestamp:(new Date).getTime(),data:i},A(i,t,r,n,e)}))},getCapabilities:function(e,t){null!=t&&t.force&&O[e]&&delete O[e];var r=O[e];return r&&(new Date).getTime()<r.timestamp+1e3*((0,i.u8)("cacheExpire")||60)?new Promise((function(e){e(r.data)})):o().get(S(e)).then((function(t){var r;return f().parseString(t.data,{explicitArray:!1},(function(e,t){r=t})),O[e]={timestamp:(new Date).getTime(),data:r},r}))},textSearch:function(e,t,r,n){return E.getRecords(e,t,r,n)},reset:function(){Object.keys(O).forEach((function(e){delete O[e]}))}},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;return E.getCapabilities(e,{force:null==r?void 0:r.force}).then((function(e){var r,n,o,i,a=t.split(":"),u=v()((null==e||null===(r=e.Capabilities)||void 0===r||null===(n=r.Contents)||void 0===n?void 0:n.Layer)||[]).find((function(e){return e["ows:Identifier"]===a[1]||e["ows:Identifier"]===t})),c=v()((null==u?void 0:u.TileMatrixSetLink)||[]).map((function(e){return e.TileMatrixSet})),l=v()((null==e||null===(o=e.Capabilities)||void 0===o||null===(i=o.Contents)||void 0===i?void 0:i.TileMatrixSet)||[]).filter((function(e){return c.includes(e["ows:Identifier"])})),s=l.map((function(e){var t=e.TileMatrix.map((function(e){return e.TopLeftCorner.split(" ").map(parseFloat)})),r=e.TileMatrix.map((function(e){return[parseFloat(e.TileWidth),parseFloat(e.TileHeight)]})),n=t[0],o=r[0],i=t.every((function(e){return n[0]===e[0]&&n[1]===e[1]})),a=r.every((function(e){return o[0]===e[0]&&o[1]===e[1]}));return b(b({id:e["ows:Identifier"],crs:(0,m.getEPSGCode)(e["ows:SupportedCRS"]),scales:e.TileMatrix.map((function(e){return parseFloat(e.ScaleDenominator)}))},i?{origin:n}:{origins:t}),a?{tileSize:o}:{tileSizes:r})}));return{tileMatrixSets:l,tileMatrixSetLinks:c,tileGrids:s,styles:v()((null==u?void 0:u.Style)||[]).map((function(e){return e["ows:Identifier"]})),formats:v()((null==u?void 0:u.Format)||[])}}))};const x=E},932354:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(227361),o=r.n(n),i=r(737275),a=function(e,t,r,n){var a=o()(i.ZP.getDefaults(),"initialState.defaultState.catalog.default.staticServices.default_map_backgrounds.backgrounds").filter((function(e){return!n||e.title.indexOf(n)>-1})),u=a.filter((function(e,n){return n>=t-1&&n<r+t-1}));return new Promise((function(e){return e({numberOfRecordsMatched:a.length,numberOfRecordsReturned:u.length,records:u,service:{Name:"Background Provider"}})}))};const u={getRecords:a,reset:function(){},textSearch:function(e,t,r,n){return a(0,t,r,n)}}}}]);
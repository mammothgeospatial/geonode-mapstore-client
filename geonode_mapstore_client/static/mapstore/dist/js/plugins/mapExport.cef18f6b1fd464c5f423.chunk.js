(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[57412],{615402:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var n=r(45697),o=r.n(n),i=r(124852),a=r.n(i);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,y(n.key),n)}}function u(t,e,r){return e=s(e),function(t,e){if(e&&("object"==l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,f()?Reflect.construct(e,r||[],s(t).constructor):e.apply(t,r))}function f(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(f=function(){return!!t})()}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function m(t,e,r){return(e=y(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==l(e)?e:e+""}var b=r(868195).FormattedHTMLMessage,d=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,e,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){return this.context.intl?a().createElement(b,{id:this.props.msgId,values:this.props.msgParams}):a().createElement("span",null,this.props.msgId||"")}}])&&c(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(a().Component);m(d,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),m(d,"contextTypes",{intl:o().object});const v=d},578511:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>nt});var n={};r.r(n),r.d(n,{exportMapContext:()=>K});var o=r(124852),i=r.n(o),a=r(480681),l=r(478718),c=r.n(l),u=r(227361),f=r.n(u),s=r(171703),p=r(867076),m=r(22222),y=r(805346),b=r(615402),d=r(782904),v="EXPORT::EXPORT_MAP",g=function(){return{type:v,format:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mapstore2"}},h=r(607147),E=r(493220),w=r.n(E),x=r(38560);function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}const j=function(t){var e=t.show,r=void 0!==e&&e,n=t.formats,o=void 0===n?{}:n,l=t.selectedFormat,c=t.exportButtonLabel,u=void 0===c?i().createElement(y.Z,{msgId:"mapExport.exportPanel.exportButtonLabel"}):c,s=t.exportPanelTitle,p=void 0===s?i().createElement(b.Z,{msgId:"mapExport.exportPanel.title"}):s,m=t.onSelect,d=void 0===m?function(){}:m,v=t.onExport,g=void 0===v?function(){}:v,h=t.onClose,E=void 0===h?function(){}:h;return r&&i().createElement("div",{className:"export-panel"},i().createElement(x.Z,{style:{border:"none",background:"transparent",color:"white",fontSize:35,top:0,right:0,position:"absolute"},onClick:function(){return E()}},i().createElement(a.gG,{glyph:"1-close"})),i().createElement("div",{style:{margin:"auto",maxWidth:550}},i().createElement("div",null,i().createElement("div",{className:"export-panel-heading-icon"},i().createElement(a.gG,{glyph:"upload"})),i().createElement("div",null,p),i().createElement("br",null),i().createElement("div",{className:"export-panel-formats-container"},w()(o).map((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,r)||function(t,e){if(t){if("string"==typeof t)return O(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],c=n[1],u=c.label,f=c.glyph;return i().createElement(x.Z,{key:o,bsStyle:"default",className:l===o?"format-selected":"",onClick:function(){return d(o)}},i().createElement("div",null,i().createElement(a.gG,{style:{marginRight:"4px"},glyph:f}),u))}))),i().createElement("br",null),i().createElement(x.Z,{bsStyle:"primary",onClick:function(){return g(l)}},u),i().createElement("br",null),i().createElement("br",null),f()(o,"".concat(l,".description"),null),f()(o,"".concat(l,".note"))&&i().createElement(i().Fragment,null,i().createElement("hr",null),f()(o,"".concat(l,".note"))))))};var S=r(49977),P=r.n(S),I=r(604788),A=r.n(I),C=r(552259),T=r(680833),M=r(370415),k=r(988753),Z=r(761868),_=r(800827),F=r(675110),B=r(31935),D=r(658422),N=r(531398),R=r(86638),X=r(887218);function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function L(t){return function(t){if(Array.isArray(t))return $(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||U(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(t,e){if(t){if("string"==typeof t)return $(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(t,e):void 0}}function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function H(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(Object(r),!0).forEach((function(e){q(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function q(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=G(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=G(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==G(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function J(t,e){this.title=t,this.message=e}var Y=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=C.ZP.saveMapConfiguration((0,_.Od)(t),(0,F.l2)(t),(0,F.Bt)(t),(0,B.Mz)(t),(0,X.I)(t),(0,X._)(t),(0,D.UC)(t));return e?H(H({},r),{},{map:H(H({},r.map),{},{bbox:(0,_.Od)(t).bbox})}):r},W={mapstore2:function(t){return P().Observable.of([JSON.stringify(Y(t)),"map.json","application/json"])},wmc:function(t){var e,r=Y(t,!0),n=f()(r,"map.layers",[]).filter((function(t){return!!t.url&&"wms"===t.type}));if(0===n.length)throw new J("mapExport.errorTitle","mapExport.wmcNoLayersError");return(e=P().Observable).forkJoin.apply(e,L(n.map((function(t){return(0,T.kB)(t).catch((function(){return P().Observable.of(null)}))})))).switchMap((function(t){return P().Observable.of([(0,M.Y)((0,Z.t8)("map.layers",A()(n,t).map((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,l=[],c=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);c=!0);}catch(t){u=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return l}}(e,r)||U(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];return H(H({},o),{},{capabilities:i})})),r),{}),"context.wmc","application/xml"])}))}},K=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,r=void 0===e?function(){}:e;return t.ofType(v).switchMap((function(t){var e=t.format;return W[e](r()).do((function(t){return k.LR.apply(void 0,L(t))})).map((function(){return(0,d.Xg)("export","enabled",!1)}))})).catch((function(t,e){return P().Observable.of((0,N.d)(H(H({},t instanceof J?t:(0,R.e$)(t)),{},{autoDismiss:6,position:"tc"}))).concat(e)}))},Q=r(322843);function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var tt=["mapstore2","wmc"],et=(0,h.Yq)("export"),rt=(0,p.compose)((0,s.connect)((0,m.zB)({enabled:et}),{onClose:function(){return(0,d.Xi)("export")},onExport:g}),(0,p.defaultProps)({formats:{mapstore2:{label:i().createElement(y.Z,{msgId:"mapExport.formats.mapstore2.label"}),description:i().createElement(b.Z,{msgId:"mapExport.formats.mapstore2.description"}),glyph:"ext-json"},wmc:{label:i().createElement(y.Z,{msgId:"mapExport.formats.wmc.label"}),description:i().createElement(b.Z,{msgId:"mapExport.formats.wmc.description"}),note:i().createElement(b.Z,{msgId:"mapExport.formats.wmc.note"}),glyph:"ext-wmc"}}}),(0,p.withState)("format","setFormat","mapstore2"))((function(t){var e,r=t.enabled,n=t.format,o=t.formats,a=t.enabledFormats,l=void 0===a?tt:a,u=t.setFormat,f=void 0===u?function(){}:u,s=t.onExport,p=void 0===s?function(){}:s,m=t.onClose,y=void 0===m?function(){}:m;return i().createElement(j,{show:r,formats:c().apply(void 0,[o].concat((e=l,function(t){if(Array.isArray(t))return V(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))),selectedFormat:n,onSelect:f,onExport:p,onClose:y})}));const nt=(0,Q.rx)("MapExport",{component:rt,containers:{SidebarMenu:function(t){var e=f()(t,"cfg.enabledFormats",tt);return{name:"export",position:4,tooltip:"mapExport.tooltip",text:i().createElement(y.Z,{msgId:"mapExport.title"}),icon:i().createElement(a.gG,{glyph:"download"}),action:e.length>1?function(){return(0,d.Xi)("export")}:function(){return g(e[0]||"mapstore2")},priority:1,toggle:!0,doNotHide:!0}},BurgerMenu:function(t){var e=f()(t,"cfg.enabledFormats",tt);return{name:"export",position:4,tooltip:"mapExport.tooltip",text:i().createElement(y.Z,{msgId:"mapExport.title"}),icon:i().createElement(a.gG,{glyph:"download"}),action:e.length>1?function(){return(0,d.Xi)("export")}:function(){return g(e[0]||"mapstore2")},priority:2,toggle:!0,doNotHide:!0}}},epics:n})},531398:(t,e,r)=>{"use strict";r.d(e,{d:()=>o});var n=r(197395),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,r=void 0===e?"notification.warning":e,o=t.autoDismiss,i=void 0===o?6:o,a=t.position,l=void 0===a?"tc":a,c=t.message,u=void 0===c?"Error":c;return(0,n.vU)({title:r,autoDismiss:i,position:l,message:u})}},940690:(t,e,r)=>{var n=r(234963),o=r(829932),i=r(840371),a=r(422545),l=r(229246),c=Math.max;t.exports=function(t){if(!t||!t.length)return[];var e=0;return t=n(t,(function(t){if(l(t))return e=c(t.length,e),!0})),a(e,(function(e){return o(t,i(e))}))}},604788:(t,e,r)=>{var n=r(105976)(r(940690));t.exports=n}}]);
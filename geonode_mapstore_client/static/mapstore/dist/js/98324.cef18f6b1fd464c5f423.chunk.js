(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[98324],{936911:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(45697),u=r.n(i),a=r(630998);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function s(e,t,r){return t=p(t),function(e,t){if(t&&("object"==l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,f()?Reflect.construct(t,r||[],p(e).constructor):t.apply(e,r))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function d(e,t,r){return(t=h(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}var b=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return d(e=s(this,t,[].concat(n)),"setLayer",(function(){var t;e._layer&&e.cleanSupport(),e.props.map.eachLayer((function(r){r.layerId===e.props.layer&&(t=r)}),e),void 0!==t&&t.on("click",e.featureClicked,e),e._layer=t,e.highlightFeatures(e.props.features)})),d(e,"featureClicked",(function(t){var r=t.layer;if((t.originalEvent.ctrlKey||t.originalEvent.metaKey)&&r){var n=(0,a.findIndex)(e._selectedFeatures,(function(e){return e===r}));-1!==n?(e._layer.resetStyle(r),e._selectedFeatures=e._selectedFeatures.filter((function(e,t){return t!==n})),r=null):e._selectedFeatures.push(r)}else e._selectedFeatures.map((function(t){e._layer.resetStyle(t)})),e._selectedFeatures=r?[r]:[];r&&(r.bringToFront(),r.setStyle(e.props.selectedStyle)),e.props.updateHighlighted(e._selectedFeatures.map((function(e){return e.msId})),"")})),d(e,"cleanSupport",(function(){e._layer&&(e._selectedFeatures.map((function(t){e._layer.resetStyle(t)})),e._layer.off("click",e.featureClicked,e)),e._selectedFeatures=[],e._layer=null,e.props.updateHighlighted([],"")})),d(e,"highlightFeatures",(function(t){e._layer||e.setLayer(),e._selectedFeatures.map((function(t){e._layer.resetStyle(t)})),e._selectedFeatures=[],e._layer.eachLayer((function(r){-1!==t.indexOf(r.msId)&&(e._selectedFeatures.push(r),r.bringToFront(),r.setStyle(e.props.selectedStyle))}),e)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this._selectedFeatures=[],this._layer=null,"enabled"===this.props.status&&this.setLayer()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props;return e.status!==t.status||e.layer!==t.layer||"update"===e.status&&e.features.toString()!==t.features.toString()}},{key:"UNSAFE_componentWillUpdate",value:function(e){switch(e.status){case"enabled":this.setLayer();break;case"disabled":this.cleanSupport();break;case"update":this.highlightFeatures(e.features);break;default:return}}},{key:"componentWillUnmount",value:function(){this.cleanSupport()}},{key:"render",value:function(){return null}}])&&c(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);d(b,"propTypes",{map:u().object,layer:u().string,status:u().oneOf(["disabled","enabled","update"]),updateHighlighted:u().func,selectedStyle:u().object,features:u().array}),d(b,"contextTypes",{messages:u().object}),d(b,"defaultProps",{status:"disabled",updateHighlighted:function(){},selectedStyle:{radius:12,weight:4,opacity:1,fillOpacity:1,color:"yellow",fillColor:"red"},features:[]});const v=b},497611:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n={LMap:r(739726).Z,Layer:r(152792).Z,Feature:r(444948).Z,Overview:r(521975),ScaleBar:r(20564),DrawSupport:r(791753).Z,HighlightFeatureSupport:r(936911).Z,PopupSupport:r(967465).Z}},23279:(e,t,r)=>{var n=r(513218),o=r(707771),i=r(14841),u=Math.max,a=Math.min;e.exports=function(e,t,r){var l,c,s,f,p,y,d=0,h=!1,b=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=l,n=c;return l=c=void 0,d=t,f=e.apply(n,r)}function g(e){var r=e-y;return void 0===y||r>=t||r<0||b&&e-d>=s}function _(){var e=o();if(g(e))return S(e);p=setTimeout(_,function(e){var r=t-(e-y);return b?a(r,s-(e-d)):r}(e))}function S(e){return p=void 0,v&&l?m(e):(l=c=void 0,f)}function w(){var e=o(),r=g(e);if(l=arguments,c=this,y=e,r){if(void 0===p)return function(e){return d=e,p=setTimeout(_,t),h?m(e):f}(y);if(b)return clearTimeout(p),p=setTimeout(_,t),m(y)}return void 0===p&&(p=setTimeout(_,t)),f}return t=i(t)||0,n(r)&&(h=!!r.leading,s=(b="maxWait"in r)?u(i(r.maxWait)||0,t):s,v="trailing"in r?!!r.trailing:v),w.cancel=function(){void 0!==p&&clearTimeout(p),d=0,l=y=c=p=void 0},w.flush=function(){return void 0===p?f:S(o())},w}},707771:(e,t,r)=>{var n=r(555639);e.exports=function(){return n.Date.now()}}}]);
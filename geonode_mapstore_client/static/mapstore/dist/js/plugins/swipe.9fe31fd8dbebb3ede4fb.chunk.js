(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[6235],{807472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(727418),o=r.n(n),i=r(45697),a=r.n(i),c=r(124852),l=r.n(c),s=r(485294),u=r.n(s),p=r(472986),f=r.n(p),d=r(805346);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,O(n.key),n)}}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t,r){return(t=O(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t=function(e){if("object"!=y(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}var E=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return S(e=function(e,t,r){return t=h(t),function(e,t){if(t&&("object"==y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,r||[],h(e).constructor):t.apply(e,r))}(this,t,[].concat(n)),"renderLoading",(function(){return e.props.maskLoading?l().createElement("div",{style:{width:"100%",height:"100%",position:"absolute",overflow:"visible",margin:"auto",verticalAlign:"center",left:"0",background:"rgba(255, 255, 255, 0.5)",zIndex:2}},l().createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -40%)"}},l().createElement(d.Z,{msgId:"loading"}),l().createElement(f(),{spinnerName:"circle",noFadeIn:!0,overrideSpinnerClassName:"spinner"}))):null})),S(e,"renderRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t}))})),S(e,"hasRole",(function(t){return l().Children.toArray(e.props.children).filter((function(e){return e.props.role===t})).length>0})),S(e,"onClickOut",(function(t){e.props.onClickOut&&e.mask===t.target&&e.props.onClickOut(t)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=l().createElement("div",{id:this.props.id,style:v({},this.props.style),className:"".concat(this.props.draggable?"modal-dialog-draggable":""," ").concat(this.props.className," modal-dialog-container")},l().createElement("div",{className:this.props.headerClassName+" draggable-header"},this.renderRole("header")),l().createElement("div",{className:this.props.bodyClassName},this.renderLoading(),this.renderRole("body")),this.hasRole("footer")?l().createElement("div",{className:this.props.footerClassName},this.renderRole("footer")):l().createElement("span",null)),r=this.props.draggable?l().createElement(u(),{defaultPosition:this.props.start,bounds:this.props.bounds,handle:".draggable-header, .draggable-header *"},t):t,n=o()({},this.props.style.display?{display:this.props.style.display}:{},this.props.backgroundStyle);return this.props.modal?l().createElement("div",{ref:function(t){e.mask=t},onClick:this.onClickOut,style:n,className:"fade in modal "+this.props.containerClassName,role:"dialog"},r):r}}])&&b(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(l().Component);S(E,"propTypes",{id:a().string.isRequired,style:a().object,backgroundStyle:a().object,className:a().string,maskLoading:a().bool,containerClassName:a().string,headerClassName:a().string,bodyClassName:a().string,footerClassName:a().string,onClickOut:a().func,modal:a().bool,start:a().object,draggable:a().bool,bounds:a().oneOfType([a().string,a().object])}),S(E,"defaultProps",{style:{},backgroundStyle:{background:"rgba(0,0,0,.5)"},start:{x:0,y:150},className:"modal-dialog modal-content",maskLoading:!1,containerClassName:"",headerClassName:"modal-header",bodyClassName:"modal-body",footerClassName:"modal-footer",modal:!1,draggable:!0,bounds:"parent"});const P=E},532425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(45697),o=r.n(n),i=r(124852),a=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e){if("object"!=c(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=function(e){return e>100?"full":e>40?"medium":"small"},f=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:s({width:t,height:t,overflow:"hidden"},n)},!i&&a().createElement("div",{className:"mapstore-".concat(p(t),"-size-loader")}))};f.propTypes={size:o().number,className:o().string,style:o().object};const d=f},212610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(124852),o=r.n(n),i=r(867076),a=r(957557),c=r.n(a),l=r(815135);const s=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled;return!(void 0!==r&&r&&t)}),l.Z,(function(e){return function(t){return o().createElement(e,c()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},617252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(124852),o=r.n(n),i=r(867076),a=r(45697),c=r.n(a),l=r(957557),s=r.n(l),u=r(480681),p=r(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=function(e){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}const h=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),function(e,t,r){return t=m(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],m(e).constructor):t.apply(e,r))}(this,r,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(r,t),n=r,(a=[{key:"renderPopover",value:function(){return o().createElement(u.J2,s()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,s()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&d(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,a}(o().Component),b(t,"propTypes",{popover:c().object}),b(t,"defaultProps",{popover:{trigger:!0}}),t}))},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(819081),a=r.n(i),c=r(480681),l=r(90085),s=["visible","Element","renderButton"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(null,arguments)}const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,p=e.btnDefaultProps,f=void 0===p?{}:p,d=e.transitionProps,y=void 0===d?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:d,m=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,a=e.renderButton,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,s);return n?a||i&&o().createElement(i,u({key:c.key||t},c))||o().createElement(l.Z,u({key:c.key||t},f,c)):null}))};return o().createElement(c.hE,i,y?o().createElement(a(),y,m()):m())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),a=r(805346),c=r(957557),l=r.n(c),s=r(480681),u=r(532425),p=r(212610),f=r(617252),d=r(38560),y=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(null,arguments)}const v=(0,i.compose)(p.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,c=e.textId,p=e.glyphClassName,f=void 0===p?"":p,v=e.loaderProps,b=void 0===v?{}:v,g=e.children,h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,y);return o().createElement(d.Z,l()(h,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(s.gG,{glyph:t,className:f}):null,c?o().createElement(a.Z,{msgId:c}):i,r?o().createElement(u.Z,m({className:"ms-loader".concat(h.bsStyle&&" ms-loader-"+h.bsStyle||"").concat(h.bsSize&&" ms-loader-"+h.bsSize||"")},b)):null,g)}))},436438:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Support:()=>oe,default:()=>le});var n=r(124852),o=r.n(n),i=r(171703),a=r(22222),c=function(e){return e.swipe&&e.swipe||{active:!1}},l=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.spy)||{radius:80}},s=function(e){var t;return(null==e||null===(t=e.swipe)||void 0===t?void 0:t.swipe)||{direction:"cut-vertical"}},u=function(e){var t;return null==e||null===(t=e.swipe)||void 0===t?void 0:t.layerId},p="SWIPE:SET_ACTIVE",f="SWIPE:SET_MODE",d="SWIPE:SET_SWIPE_TOOL_DIRECTION",y="SWIPE:SET_SPY_TOOL_RADIUS",m="SWIPE:SET_SWIPE_LAYER";function v(e){return{type:p,active:e,prop:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"active",layerId:arguments.length>2?arguments[2]:void 0}}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return(t=function(e){var t=function(e){if("object"!=b(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var S=r(49977),O=r.n(S),E=r(580416),P=r(275982);const j={resetLayerSwipeSettingsEpic:function(e,t){return e.ofType(E.c7).switchMap((function(e){var r=e.nodeType,n=t.getState();return c(n).active&&"group"===r?O().Observable.of(v(!1)):O().Observable.empty()}))},deactivateSwipeToolOnSwitchMaps:function(e,t){return e.ofType(P.nk).switchMap((function(){return c(t.getState()).active?O().Observable.of(v(!1)):O().Observable.empty()}))}};var C=r(322843),k=r(743129),T=r(185552),N=r.n(T),I=r(313311),x=r.n(I),R=r(805346),_=r(632107);function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return(t=function(e){var t=function(e){if("object"!=D(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==D(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=[{label:"Horizontal",value:"cut-horizontal"},{label:"Vertical",value:"cut-vertical"}],Z=function(e){var t=e.spyModeSettings,r=e.onSetSpyToolRadius;return o().createElement("div",{className:"mapstore-swipe-settings-spy"},o().createElement("h4",null,o().createElement(R.Z,{msgId:"toc.radius"})),o().createElement("div",{className:"mapstore-slider with-tooltip"},o().createElement(N(),{tooltips:!0,step:10,start:[t.radius],range:{min:[20],max:[100]},onChange:function(e){return r(e[0])}})))},W=function(e){var t=e.swipeModeSettings,r=e.onSetSwipeToolDirection;return o().createElement("div",{className:"mapstore-swipe-settings-slider"},o().createElement("h4",null,o().createElement(R.Z,{msgId:"toc.direction"})),o().createElement(k.ZP,{styles:{menuPortal:function(e){return L(L({},e),{},{zIndex:3100})}},onChange:function(e){var t=e.value;return r(t)},clearable:!1,value:x()(A,["value",t.direction]),options:A}))},G=(0,a.P1)([c,s,l],(function(e,t,r){return{configuring:(null==e?void 0:e.configuring)||!1,toolMode:(null==e?void 0:e.mode)||"swipe",swipeModeSettings:t,spyModeSettings:r}}));const Y=(0,i.connect)(G,{onSetConfigurationActive:v,onSetSwipeToolDirection:function(e){return{type:d,direction:e}},onSetSpyToolRadius:function(e){return{type:y,radius:e}}})((function(e){var t=e.configuring,r=e.toolMode,n=e.swipeModeSettings,i=e.spyModeSettings,a=e.onSetConfigurationActive,c=void 0===a?function(){}:a,l=e.onSetSpyToolRadius,s=void 0===l?function(){}:l,u=e.onSetSwipeToolDirection,p=void 0===u?function(){}:u;return o().createElement("div",{className:"mapstore-swipe-settings"},o().createElement(_.Z,{title:"spy"===r?o().createElement(R.Z,{msgId:"toc.spyconfiguration"}):o().createElement(R.Z,{msgId:"toc.swipeconfiguration"}),open:t,onClose:function(){return c(!1,"configuring")},enableFooter:!1,draggable:!0,size:"xs",bodyClassName:"mapstore-swipe-setiings-modal-body",dialogClassName:" mapstore-swipe-settings-modal",glyph:"transfer"},"spy"===r?o().createElement(Z,{spyModeSettings:i,onSetSpyToolRadius:s}):o().createElement(W,{swipeModeSettings:n,onSetSwipeToolDirection:p})))}));var B=r(480681),F=r(485294),H=r.n(F);const U=function(e){var t=e.map,r=e.layer,o=e.type,i=e.getWidth,a=e.getHeight,c=e.circleCutProp,l=(0,n.useCallback)((function(e){var r=e.context,n=i()*t.pixelRatio_;r.save(),r.beginPath(),r.rect(n,0,r.canvas.width-n,r.canvas.height),r.strokeStyle="rgba(0,0,0,0.5)",r.clip()}),[r,o]),s=(0,n.useCallback)((function(e){e.context.restore()}),[r,o]),u=(0,n.useCallback)((function(e){var r=e.context,n=a()*t.pixelRatio_;r.save(),r.beginPath(),r.rect(0,n,r.canvas.width,r.canvas.height-n),r.clip()}),[r,o]),p=(0,n.useCallback)((function(e){var t=e.context,r=e.frameState.pixelRatio;t.save(),t.beginPath();var n=c.getMousePosition();n&&(t.arc(n[0]*r,n[1]*r,c.radius*r,0,2*Math.PI),t.lineWidth=5*r,t.strokeStyle="rgba(0,0,0,0.5)",t.stroke()),t.clip()}),[r,o,c]);return(0,n.useEffect)((function(){var e=t.getLayers().getArray().filter((function(e){return e.get("msId")===r}))[0];if(e){switch(o){case"cut-vertical":!function(e,t,r){e.on("prerender",t),e.on("postrender",r)}(e,l,s);break;case"cut-horizontal":!function(e,t,r){e.on("prerender",t),e.on("postrender",r)}(e,u,s);break;case"circle":!function(e,t,r){e.on("prerender",t),e.on("postrender",r)}(e,p,s)}return t.render(),function(){e.un("prerender",l),e.un("prerender",u),e.un("prerender",p),e.un("postrender",s),t.render()}}return function(){return t.render()}}),[r,o,c]),null};function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var J=function(e){var t=e.type,r=e.map,i=e.widthRef,a=V((0,n.useState)(),2),c=a[0],l=a[1],s=V((0,n.useState)(!0),2),u=s[0],p=s[1],f=function(){l({x:0,y:0}),i.current=r.getProperties().size[0]/2};return(0,n.useEffect)((function(){return window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}}),[t]),(0,n.useEffect)((function(){i.current=r.getProperties().size[0]/2}),[t]),o().createElement(H(),{position:c,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaX,l({x:t.x,y:t.y}),r.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"100%",top:"0px",left:"".concat(r.getProperties().size[0]/2,"px"),width:"8px",cursor:"col-resize"}},u&&o().createElement("div",{className:"ms-vertical-swipe-slider-arrows",style:{top:"".concat(r.getProperties().size[1]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(B.gG,{glyph:"chevron-left"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(B.gG,{glyph:"chevron-right"})))))},X=function(e){var t=e.type,r=e.map,i=e.heightRef,a=V((0,n.useState)(),2),c=a[0],l=a[1],s=V((0,n.useState)(!0),2),u=s[0],p=s[1],f=function(){l({x:0,y:0}),i.current=r.getProperties().size[1]/2};return(0,n.useEffect)((function(){return window.addEventListener("resize",f),function(){window.removeEventListener("resize",f)}}),[t]),(0,n.useEffect)((function(){i.current=r.getProperties().size[1]/2}),[t]),o().createElement(H(),{position:c,bounds:"parent",onStart:function(){return p(!1)},onDrag:function(e,t){return function(e,t){i.current+=t.deltaY,l({x:t.x,y:t.y}),r.render()}(0,t)},onStop:function(){return p(!0)}},o().createElement("div",{className:"mapstore-swipe-slider",style:{height:"8px",top:"".concat(r.getProperties().size[1]/2,"px"),left:"0px",width:"100%",cursor:"row-resize"}},u&&o().createElement("div",{className:"ms-horizontal-swipe-slider-arrows",style:{left:"".concat(r.getProperties().size[0]/2-26,"px")}},o().createElement("div",{className:"ms-slider-arrows"},o().createElement(B.gG,{glyph:"chevron-up"})),o().createElement("div",{className:"ms-slider-arrows"},o().createElement(B.gG,{glyph:"chevron-down"})))))};const $=function(e){var t=e.map,r=e.layer,i=e.type,a=void 0===i?"cut-vertical":i,c=e.active,l=(0,n.useRef)(),s=(0,n.useRef)();return r&&c?o().createElement(o().Fragment,null,"cut-vertical"===a&&o().createElement(J,{widthRef:s,map:t,type:a}),"cut-horizontal"===a&&o().createElement(X,{heightRef:l,map:t,type:a}),o().createElement(U,{map:t,layer:r,type:a,getWidth:function(){return s.current},getHeight:function(){return l.current}})):null},K=function(e){var t=e.layer,r=e.map,i=e.active,a=e.radius,c=(0,n.useRef)(),l=(0,n.useCallback)((function(e){c.current=r.getEventPixel(e),r.render()}),[t,a]),s=(0,n.useCallback)((function(){c.current=null,r.render()}),[t,a]);(0,n.useEffect)((function(){var e=r.getTargetElement();return e.addEventListener("mousemove",l),e.addEventListener("mouseout",s),function(){e.removeEventListener("mousemove",l),e.removeEventListener("mouseout",s)}}),[]);var u={radius:a,getMousePosition:function(){return c.current}};return t&&i?o().createElement(U,{map:r,layer:t,type:"circle",circleCutProp:u}):null};var Q=r(45697),ee=r.n(Q);function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},te.apply(null,arguments)}var re=function(e){var t,r=e.swipeSettings,n=e.onSetActive,i=e.onSetSwipeMode,a=e.status,c=e.statusTypes,l=e.selectedNodes,s=e.itemComponent,u=e.swipeLayerId,p=e.onSetSwipeLayer,f=void 0===p?function(){}:p,d=s,y=function(e,t){return i(t),!r.active&&a===(null==c?void 0:c.LAYER)||r.active&&u!==e||r.active&&(null==r?void 0:r.mode)!==t?(f(e),n(!0)):(f(),n(!1))},m=null==l||null===(t=l[0])||void 0===t?void 0:t.node;if(![null==c?void 0:c.LAYER].includes(a)||null!=m&&m.error)return null;var v=(null==m?void 0:m.id)===u;return o().createElement(o().Fragment,null,o().createElement(d,te({},e,{active:v&&"swipe"===(null==r?void 0:r.mode),glyph:"transfer",labelId:"toc.swipe",onClick:function(){return y(null==m?void 0:m.id,"swipe")}})),o().createElement(d,te({},e,{active:v&&"spy"===(null==r?void 0:r.mode),glyph:"search",labelId:"toc.spyGlass",onClick:function(){return y(null==m?void 0:m.id,"spy")}})))};re.propTypes={swipeSettings:ee().object,status:ee().string,onSetActive:ee().func,onSetSwipeMode:ee().func},re.defaultProps={status:"LAYER",onSetSwipeMode:function(){},onSetActive:function(){}};const ne=re;var oe=function(e){var t=e.mode,r=e.map,n=e.layer,i=e.active,a=e.swipeModeSettings,c=e.spyModeSettings;return"spy"===t?o().createElement(K,{map:r,layer:n,active:i,radius:c.radius}):o().createElement($,{map:r,layer:n,active:i,type:a.direction})},ie=(0,a.P1)([u,c,s,l],(function(e,t,r,n){return{layer:e,active:t.active||!1,swipeModeSettings:r,spyModeSettings:n,mode:(null==t?void 0:t.mode)||"swipe"}})),ae=(0,i.connect)(ie,null)(oe),ce=(0,a.P1)(u,c,(function(e,t){return{swipeLayerId:e,swipeSettings:t}}));const le=(0,C.rx)("Swipe",{options:{disablePluginIf:"{state('mapType') === 'leaflet' || state('mapType') === 'cesium'}"},component:Y,containers:{TOC:[{name:"Swipe",target:"context-menu",Component:(0,i.connect)(ce,{onSetActive:v,onSetSwipeMode:function(){return{type:f,mode:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"swipe"}},onSetSwipeLayer:function(e){return{type:m,layerId:e}}})(ne),position:13},{name:"Swipe",target:"node-tool",Component:(0,i.connect)(ce,{onSetActive:v})((function(e){var t=e.itemComponent,r=e.node,n=e.swipeLayerId,i=e.swipeSettings,a=e.onSetActive,c=t;return n&&n===(null==r?void 0:r.id)?o().createElement(c,{glyph:"swipe"===(null==i?void 0:i.mode)?"transfer":"search",active:n===(null==r?void 0:r.id),tooltipId:"toc.configureTool",onClick:function(){a(!i.configuring,"configuring")}}):null})),position:13}],Map:{name:"Swipe",Tool:ae}},reducers:{swipe:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return h(h({},e),{},w({},t.prop,t.active));case m:return h(h({},e),{},{layerId:t.layerId});case f:return h(h({},e),{},{mode:t.mode});case d:var r=h(h({},e.swipe),{},{direction:t.direction});return h(h({},e),{},{swipe:r});case y:var n=h(h({},e.spy),{},{radius:t.radius});return h(h({},e),{},{spy:n});default:return e}}},epics:j})}}]);
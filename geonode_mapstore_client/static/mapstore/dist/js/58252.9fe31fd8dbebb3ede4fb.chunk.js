(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[58252],{898939:(e,t,r)=>{"use strict";r.d(t,{d2:()=>n,yX:()=>o,Uo:()=>l,n2:()=>i,SA:()=>c});var n="CHANGE_HELP_STATE",o="CHANGE_HELP_TEXT",l="CHANGE_HELPWIN_VIZ";function i(e){return{type:o,helpText:e}}function c(e){return{type:l,helpwinViz:e}}},383606:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(747037),o=r.n(n),l=r(45697),i=r.n(l),c=r(124852),p=r.n(c),a=r(480681),s=r(86638);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function g(e,t,r){return(t=d(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=function(e){if("object"!=u(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var v=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return g(e=function(e,t,r){return t=b(t),function(e,t){if(t&&("object"==u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],b(e).constructor):t.apply(e,r))}(this,t,[].concat(n)),"onMouseOver",(function(){var t=o()(e.props.helpText)?e.props.helpText:(0,s.S$)(e.context.messages,e.props.helpText.props.msgId);e.props.changeHelpText(t),e.props.changeHelpwinVisibility(!0)})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return p().createElement(a.Ct,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}])&&f(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(p().Component);g(v,"propTypes",{id:i().string,helpText:i().oneOfType([i().string,i().element]),isVisible:i().bool,changeHelpText:i().func,changeHelpwinVisibility:i().func,className:i().string}),g(v,"contextTypes",{messages:i().object}),g(v,"defaultProps",{helpText:"",isVisible:!1});const h=v},658252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var n=r(353131),o=r.n(n),l=r(727418),i=r.n(l),c=r(45697),p=r.n(c),a=r(124852),s=r.n(a),u=r(480681),f=r(171703),y=r(12838),b=r(782904),m=r(898939),g=r(383606),d=r(805346),v=r(950966),h=r(38560),O=r(898631),j=r(93152);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(null,arguments)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,k(n.key),n)}}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function N(e,t,r){return(t=k(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){var t=function(e){if("object"!=S(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==S(t)?t:t+""}var H=(0,f.connect)((function(e){return{isVisible:e.controls&&e.controls.help&&e.controls.help.enabled}}),{changeHelpText:m.n2,changeHelpwinVisibility:m.SA})(g.Z),A=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return N(e=function(e,t,r){return t=C(t),function(e,t){if(t&&("object"==S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,_()?Reflect.construct(t,r||[],C(e).constructor):t.apply(e,r))}(this,t,[].concat(n)),"getToolConfig",(function(t){return t.tool?{}:e.props.toolCfg})),N(e,"getTool",(function(t){if(t.tool)return!0===t.tool?t.plugin:t.tool;var r=function(){return{}},n={};return t.exclusive?(r=function(r){return{active:r.controls&&r.controls[e.props.stateSelector]&&r.controls[e.props.stateSelector].active===t.name}},n[e.props.eventSelector]=b.Xg.bind(null,e.props.stateSelector,"active",t.name,!0)):t.toggle?(r=function(r){return{bsStyle:r.controls[t.toggleControl||t.name]&&r.controls[t.toggleControl||t.name][t.toggleProperty||"enabled"]?e.props.activeStyle:e.props.toolStyle,active:r.controls[t.toggleControl||t.name]&&r.controls[t.toggleControl||t.name][t.toggleProperty||"enabled"]||!1}},n[e.props.eventSelector]=b.Xi.bind(null,t.toggleControl||t.name,t.toggleProperty||null)):t.action&&(n[e.props.eventSelector]=o()(t.action,e.context),r=t.selector||r),(0,f.connect)(r,n,(function(t,r,n){return e.mergeHandlers(w(w({},n),t),r)}))(e.props.tool)})),N(e,"renderTool",(function(r,n){if(r.element)return r.element;var o=r.help?s().createElement(H,{className:"mapstore-helpbadge",helpText:r.help}):s().createElement("span",null),l=r.tooltip?s().createElement(d.Z,{msgId:r.tooltip}):null,i=e.getTool(r),c=e.getToolConfig(r),p=r.childTools||[];return e.addTooltip(s().createElement(i,T({},c,{pluginCfg:r.cfg,tooltip:l,style:r.style,btnSize:e.props.toolSize,bsStyle:e.props.toolStyle,help:o,key:r.name||"tool"+n,mapType:e.props.mapType},r.cfg,{items:r.items||[]}),r.cfg&&r.cfg.glyph?s().createElement(u.gG,{glyph:r.cfg.glyph}):r.icon,o," ",r.text,p.length>0&&s().createElement(t,T({},r.innerProps,{mapType:e.props.mapType,tools:p,panels:r.childPanels}))),r)})),N(e,"renderTools",(function(){return e.props.tools.map(e.renderTool)})),N(e,"renderPanels",(function(){return e.props.panels.filter((function(e){return!e.panel.loadPlugin})).map((function(t){var r=t.panel,n=s().createElement(r,T({key:t.name,mapType:e.props.mapType},t.cfg,t.props||{},{items:t.items||[]})),o=t.title?s().createElement(d.Z,{msgId:t.title}):null;return t.wrap?s().createElement(u.UO,{key:"mapToolBar-item-collapse-"+t.name,in:e.props.activePanel===t.name},s().createElement(u.s_,{header:o,style:e.props.panelStyle,className:e.props.panelClassName},n)):n}))})),N(e,"mergeHandlers",(function(e,t){return Object.keys(t).reduce((function(r,n){return i()(r,N({},n,e[n]?(0,y.qC)(e[n],t[n]):t[n]))}),e)})),N(e,"addTooltip",(function(t,r){if(r.tooltip){var n=s().createElement(u.u,{id:e.props.id+"-"+r.name+"-tooltip"},s().createElement(d.Z,{msgId:r.tooltip}));return s().createElement(v.Z,{key:e.props.id+"-"+r.name+"-overlay",rootClose:!0,placement:"left",overlay:n},t)}return t})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.container;return s().createElement("span",{id:this.props.id,style:this.props.containerWrapperStyle},s().createElement(e,{id:this.props.id+"-container",style:this.props.style,className:this.props.className},this.renderTools()),this.renderPanels())}}])&&E(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(s().Component);N(A,"propTypes",{id:p().string.isRequired,container:p().func,containerWrapperStyle:p().object,tool:p().oneOfType([p().object,p().func]),className:p().string,style:p().object,tools:p().array,panels:p().array,mapType:p().string,toolStyle:p().string,activeStyle:p().string,toolSize:p().string,stateSelector:p().string.isRequired,eventSelector:p().string,panelStyle:p().object,panelClassName:p().string,activePanel:p().string,toolCfg:p().object}),N(A,"contextTypes",{messages:p().object,router:p().object}),N(A,"defaultProps",{container:u.s_,className:"tools-container",style:{},toolStyle:"default",activeStyle:"primary",tools:[],panels:[],tool:h.Z,mapType:O.Bk.OPENLAYERS,eventSelector:"onClick",panelStyle:{},panelClassName:"tools-container-panel",toolSize:null,toolCfg:{}});const R=(0,f.connect)((function(e){return{mapType:(0,j.$v)(e)}}))(A)},353131:(e,t,r)=>{var n=r(105976),o=r(497727),l=r(720893),i=r(846460),c=n((function(e,t){var r=i(t,l(c));return o(e,32,void 0,t,r)}));c.placeholder={},e.exports=c}}]);
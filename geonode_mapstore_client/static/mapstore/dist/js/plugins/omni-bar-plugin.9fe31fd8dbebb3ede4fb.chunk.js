(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[17489],{868004:(n,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>w});var r=e(124852),o=e.n(r),a=e(45697),i=e.n(a),s=e(893379),c=e.n(s),l=e(699410);c()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var p=e(658252),u=e(322843);function f(n){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},f(n)}function d(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,h(r.key),r)}}function b(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(n){}return(b=function(){return!!n})()}function m(n){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},m(n)}function y(n,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},y(n,t)}function g(n,t,e){return(t=h(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function h(n){var t=function(n){if("object"!=f(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,"string");if("object"!=f(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==f(t)?t:t+""}var v=function(n){function t(){var n;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return g(n=function(n,t,e){return t=m(t),function(n,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(n,b()?Reflect.construct(t,e||[],m(n).constructor):t.apply(n,e))}(this,t,[].concat(r)),"getPanels",(function(){return n.props.items.filter((function(n){return n.tools})).reduce((function(n,t){return n.concat(t.tools.map((function(n,e){var r,o;return{name:t.name+e,panel:n,cfg:(null==t||null===(r=t.cfg)||void 0===r||null===(o=r.toolsCfg)||void 0===o?void 0:o[e])||{}}})))}),[])})),g(n,"getTools",(function(){return n.props.items.sort((function(n,t){return n.position-t.position}))})),n}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&y(n,t)}(t,n),e=t,(r=[{key:"render",value:function(){return o().createElement(p.Z,{id:this.props.id,style:this.props.style,containerWrapperStyle:this.props.containerWrapperStyle,className:this.props.className,container:function(n){return o().createElement("div",n,n.children)},toolStyle:"primary",activeStyle:"default",stateSelector:"omnibar",tool:function(n){return o().createElement("div",null,n.children)},tools:this.getTools(),panels:this.getPanels()})}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r}(o().Component);g(v,"propTypes",{className:i().string,style:i().object,containerWrapperStyle:i().object,items:i().array,id:i().string}),g(v,"defaultProps",{items:[],className:"navbar-dx shadow",style:{},containerWrapperStyle:{},id:"mapstore-navbar"});const w=(0,u.rx)("OmniBar",{component:v,options:{disablePluginIf:"{state('featuregridmode') === 'EDIT' || (state('router') && state('router').includes('/geostory/shared') && state('geostorymode') !== 'edit')}"}})},699410:(n,t,e)=>{"use strict";e.d(t,{Z:()=>a});var r=e(923645),o=e.n(r)()((function(n){return n[1]}));o.push([n.id,"/*viewer navbar */\n.msgapi .navbar-dx {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n.msgapi .navbar-dx>ul {\n    padding: 0;\n}\n\n.msgapi .navbar-dx>ul>li {\n    float: left;\n    list-style: none;\n}\n\n.msgapi .navbar-dx .search-wrap .MapSearchBar {\n    right: 0;\n    top: 0;\n    left: 0;\n}\n\n.msgapi .navbar-dx .search-wrap .form-control,\n.msgapi .navbar-dx .search-wrap .form-control:focus {\n    border-right: 0;\n    box-shadow: none;\n}\n\n.msgapi .navbar-dx .search-wrap .MapSearchBar .input-group-addon {\n    border: 0;\n}\n\n.msgapi .navbar-dx .search-result-list {\n    left: 0;\n    max-height: none;\n}\n\n.msgapi .navbar-dx .dropdown-menu {\n    margin: 0;\n    padding-top: 0;\n}\n\n@media (min-width: 1200px) {\n    .msgapi .navbar-dx .search-wrap {\n        width: 500px;\n        height: 50px;\n    }\n}\n\n.msgapi .navbar-dx>* {\n    display: inline-block;\n}\n\n/* Page Navbar */\n.msgapi .navbar-home .dropdown {\n    float: right;\n}\n\n.msgapi .navbar-home .navbar-header {\n    margin-top: 7px;\n    margin-left: 10px;\n    margin-right: 10px;\n    display: inline-block;\n}\n",""]);const a=o}}]);
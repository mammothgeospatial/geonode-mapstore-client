(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[15265],{580967:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});const s=class{constructor(){this.disposed=!1}dispose(){this.disposed||(this.disposed=!0,this.disposeInternal())}disposeInternal(){}}},558493:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var s=n(9520),i=n(713910),r=n(756834),o=n(949179),l=n(913580);class h extends s.ZP{constructor(t,e,n){super(t),this.key=e,this.oldValue=n}}class a extends r.Z{constructor(t){super(),this.on,this.once,this.un,(0,o.sq)(this),this.values_=null,void 0!==t&&this.setProperties(t)}get(t){let e;return this.values_&&this.values_.hasOwnProperty(t)&&(e=this.values_[t]),e}getKeys(){return this.values_&&Object.keys(this.values_)||[]}getProperties(){return this.values_&&Object.assign({},this.values_)||{}}hasProperties(){return!!this.values_}notify(t,e){let n;n=`change:${t}`,this.hasListener(n)&&this.dispatchEvent(new h(n,t,e)),n=i.Z.PROPERTYCHANGE,this.hasListener(n)&&this.dispatchEvent(new h(n,t,e))}addChangeListener(t,e){this.addEventListener(`change:${t}`,e)}removeChangeListener(t,e){this.removeEventListener(`change:${t}`,e)}set(t,e,n){const s=this.values_||(this.values_={});if(n)s[t]=e;else{const n=s[t];s[t]=e,n!==e&&this.notify(t,n)}}setProperties(t,e){for(const n in t)this.set(n,t[n],e)}applyProperties(t){t.values_&&Object.assign(this.values_||(this.values_={}),t.values_)}unset(t,e){if(this.values_&&t in this.values_){const n=this.values_[t];delete this.values_[t],(0,l.x)(this.values_)&&(this.values_=null),e||this.notify(t,n)}}}const u=a},713910:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});const s={PROPERTYCHANGE:"propertychange"}},756834:(t,e,n)=>{"use strict";n.d(e,{B:()=>l,Z:()=>h});var s=n(66575),i=n(173381),r=n(613002);class o extends s.Z{constructor(){super(),this.on=this.onInternal,this.once=this.onceInternal,this.un=this.unInternal,this.revision_=0}changed(){++this.revision_,this.dispatchEvent(i.Z.CHANGE)}getRevision(){return this.revision_}onInternal(t,e){if(Array.isArray(t)){const n=t.length,s=new Array(n);for(let i=0;i<n;++i)s[i]=(0,r.oL)(this,t[i],e);return s}return(0,r.oL)(this,t,e)}onceInternal(t,e){let n;if(Array.isArray(t)){const s=t.length;n=new Array(s);for(let i=0;i<s;++i)n[i]=(0,r.Vx)(this,t[i],e)}else n=(0,r.Vx)(this,t,e);return e.ol_key=n,n}unInternal(t,e){const n=e.ol_key;if(n)l(n);else if(Array.isArray(t))for(let n=0,s=t.length;n<s;++n)this.removeEventListener(t[n],e);else this.removeEventListener(t,e)}}function l(t){if(Array.isArray(t))for(let e=0,n=t.length;e<n;++e)(0,r.bN)(t[e]);else(0,r.bN)(t)}o.prototype.on,o.prototype.once,o.prototype.un;const h=o},179682:(t,e,n)=>{"use strict";function s(t,e,n){let s,r;n=n||i;let o=0,l=t.length,h=!1;for(;o<l;)s=o+(l-o>>1),r=+n(t[s],e),r<0?o=s+1:(l=s,h=!r);return h?o:~o}function i(t,e){return t>e?1:t<e?-1:0}function r(t,e,n){if(t[0]<=e)return 0;const s=t.length;if(e<=t[s-1])return s-1;if("function"==typeof n){for(let i=1;i<s;++i){const s=t[i];if(s===e)return i;if(s<e)return n(e,t[i-1],s)>0?i-1:i}return s-1}if(n>0){for(let n=1;n<s;++n)if(t[n]<e)return n-1;return s-1}if(n<0){for(let n=1;n<s;++n)if(t[n]<=e)return n;return s-1}for(let n=1;n<s;++n){if(t[n]==e)return n;if(t[n]<e)return t[n-1]-e<e-t[n]?n-1:n}return s-1}function o(t,e,n){for(;e<n;){const s=t[e];t[e]=t[n],t[n]=s,++e,--n}}function l(t,e){const n=Array.isArray(e)?e:[e],s=n.length;for(let e=0;e<s;e++)t[t.length]=n[e]}function h(t,e){const n=t.length;if(n!==e.length)return!1;for(let s=0;s<n;s++)if(t[s]!==e[s])return!1;return!0}function a(t,e,n){const s=e||i;return t.every((function(e,i){if(0===i)return!0;const r=s(t[i-1],e);return!(r>0||n&&0===r)}))}n.d(e,{ry:()=>s,j2:()=>i,h7:()=>r,FZ:()=>o,l7:()=>l,fS:()=>h,pT:()=>a})},613002:(t,e,n)=>{"use strict";n.d(e,{oL:()=>i,Vx:()=>r,bN:()=>o});var s=n(913580);function i(t,e,n,s,i){if(s&&s!==t&&(n=n.bind(s)),i){const s=n;n=function(){t.removeEventListener(e,n),s.apply(this,arguments)}}const r={target:t,type:e,listener:n};return t.addEventListener(e,n),r}function r(t,e,n,s){return i(t,e,n,s,!0)}function o(t){t&&t.target&&(t.target.removeEventListener(t.type,t.listener),(0,s.Z)(t))}},9520:(t,e,n)=>{"use strict";n.d(e,{ZP:()=>s});const s=class{constructor(t){this.propagationStopped,this.defaultPrevented,this.type=t,this.target=null}preventDefault(){this.defaultPrevented=!0}stopPropagation(){this.propagationStopped=!0}}},173381:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});const s={CHANGE:"change",ERROR:"error",BLUR:"blur",CLEAR:"clear",CONTEXTMENU:"contextmenu",CLICK:"click",DBLCLICK:"dblclick",DRAGENTER:"dragenter",DRAGOVER:"dragover",DROP:"drop",FOCUS:"focus",KEYDOWN:"keydown",KEYPRESS:"keypress",LOAD:"load",RESIZE:"resize",TOUCHMOVE:"touchmove",WHEEL:"wheel"}},66575:(t,e,n)=>{"use strict";n.d(e,{Z:()=>h});var s=n(580967),i=n(9520),r=n(864011),o=n(913580);class l extends s.Z{constructor(t){super(),this.eventTarget_=t,this.pendingRemovals_=null,this.dispatching_=null,this.listeners_=null}addEventListener(t,e){if(!t||!e)return;const n=this.listeners_||(this.listeners_={}),s=n[t]||(n[t]=[]);s.includes(e)||s.push(e)}dispatchEvent(t){const e="string"==typeof t,n=e?t:t.type,s=this.listeners_&&this.listeners_[n];if(!s)return;const o=e?new i.ZP(t):t;o.target||(o.target=this.eventTarget_||this);const l=this.dispatching_||(this.dispatching_={}),h=this.pendingRemovals_||(this.pendingRemovals_={});let a;n in l||(l[n]=0,h[n]=0),++l[n];for(let t=0,e=s.length;t<e;++t)if(a="handleEvent"in s[t]?s[t].handleEvent(o):s[t].call(this,o),!1===a||o.propagationStopped){a=!1;break}if(0==--l[n]){let t=h[n];for(delete h[n];t--;)this.removeEventListener(n,r.Zn);delete l[n]}return a}disposeInternal(){this.listeners_&&(0,o.Z)(this.listeners_)}getListeners(t){return this.listeners_&&this.listeners_[t]||void 0}hasListener(t){return!!this.listeners_&&(t?t in this.listeners_:Object.keys(this.listeners_).length>0)}removeEventListener(t,e){const n=this.listeners_&&this.listeners_[t];if(n){const s=n.indexOf(e);-1!==s&&(this.pendingRemovals_&&t in this.pendingRemovals_?(n[s]=r.Zn,++this.pendingRemovals_[t]):(n.splice(s,1),0===n.length&&delete this.listeners_[t]))}}}const h=l},864011:(t,e,n)=>{"use strict";n.d(e,{uX:()=>i,Dv:()=>r,Zn:()=>o,qe:()=>l,Vi:()=>h});var s=n(179682);function i(){return!0}function r(){return!1}function o(){}function l(t){let e,n,i,r=!1;return function(){const o=Array.prototype.slice.call(arguments);return r&&this===i&&(0,s.fS)(o,n)||(r=!0,i=this,n=o,e=t.apply(this,arguments)),e}}function h(t){return function(){let e;try{e=t()}catch(t){return Promise.reject(t)}return e instanceof Promise?e:Promise.resolve(e)}()}},208204:(t,e,n)=>{"use strict";n.d(e,{Z:()=>f});var s=n(558493),i=n(949179),r=n(782359),o=n(421915),l=n(218672),h=n(864011),a=n(517882);const u=(0,r.Ue)();class c extends s.Z{constructor(){super(),this.extent_=(0,o.lJ)(),this.extentRevision_=-1,this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=0,this.simplifyTransformedInternal=(0,h.qe)((function(t,e,n){if(!n)return this.getSimplifiedGeometry(e);const s=this.clone();return s.applyTransform(n),s.getSimplifiedGeometry(e)}))}simplifyTransformed(t,e){return this.simplifyTransformedInternal(this.getRevision(),t,e)}clone(){return(0,i.O3)()}closestPointXY(t,e,n,s){return(0,i.O3)()}containsXY(t,e){const n=this.getClosestPoint([t,e]);return n[0]===t&&n[1]===e}getClosestPoint(t,e){return e=e||[NaN,NaN],this.closestPointXY(t[0],t[1],e,1/0),e}intersectsCoordinate(t){return this.containsXY(t[0],t[1])}computeExtent(t){return(0,i.O3)()}getExtent(t){if(this.extentRevision_!=this.getRevision()){const t=this.computeExtent(this.extent_);(isNaN(t[0])||isNaN(t[1]))&&(0,o.YN)(t),this.extentRevision_=this.getRevision()}return(0,o.EO)(this.extent_,t)}rotate(t,e){(0,i.O3)()}scale(t,e,n){(0,i.O3)()}simplify(t){return this.getSimplifiedGeometry(t*t)}getSimplifiedGeometry(t){return(0,i.O3)()}getType(){return(0,i.O3)()}applyTransform(t){(0,i.O3)()}intersectsExtent(t){return(0,i.O3)()}translate(t,e){(0,i.O3)()}transform(t,e){const n=(0,l.U2)(t),s="tile-pixels"==n.getUnits()?function(t,s,i){const h=n.getExtent(),c=n.getWorldExtent(),f=(0,o.Cr)(c)/(0,o.Cr)(h);return(0,r.qC)(u,c[0],c[3],f,-f,0,0,0),(0,a.vT)(t,0,t.length,i,u,s),(0,l.Ck)(n,e)(t,s,i)}:(0,l.Ck)(n,e);return this.applyTransform(s),this}}const f=c},562948:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var s=n(432538),i=n(583729),r=n(421915),o=n(438667),l=n(862418),h=n(686204),a=n(832562);class u extends s.ZP{constructor(t,e){super(),this.maxDelta_=-1,this.maxDeltaRevision_=-1,void 0===e||Array.isArray(t[0])?this.setCoordinates(t,e):this.setFlatCoordinates(e,t)}clone(){return new u(this.flatCoordinates.slice(),this.layout)}closestPointXY(t,e,n,s){return s<(0,r.qf)(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,i.Bv)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,i.H$)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,this.maxDelta_,!0,t,e,n,s))}getArea(){return(0,a.QQ)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getCoordinates(){return(0,h.Ml)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride)}getSimplifiedGeometryInternal(t){const e=[];return e.length=(0,l.dt)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t,e,0),new u(e,"XY")}getType(){return"LinearRing"}intersectsExtent(t){return!1}setCoordinates(t,e){this.setLayout(e,t,1),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,o.Sg)(this.flatCoordinates,0,t,this.stride),this.changed()}}const c=u},752043:(t,e,n)=>{"use strict";n.d(e,{Z:()=>h});var s=n(432538),i=n(421915),r=n(438667),o=n(921882);class l extends s.ZP{constructor(t,e){super(),this.setCoordinates(t,e)}clone(){const t=new l(this.flatCoordinates.slice(),this.layout);return t.applyProperties(this),t}closestPointXY(t,e,n,s){const i=this.flatCoordinates,r=(0,o.bI)(t,e,i[0],i[1]);if(r<s){const t=this.stride;for(let e=0;e<t;++e)n[e]=i[e];return n.length=t,r}return s}getCoordinates(){return this.flatCoordinates?this.flatCoordinates.slice():[]}computeExtent(t){return(0,i.HK)(this.flatCoordinates,t)}getType(){return"Point"}intersectsExtent(t){return(0,i.jE)(t,this.flatCoordinates[0],this.flatCoordinates[1])}setCoordinates(t,e){this.setLayout(e,t,0),this.flatCoordinates||(this.flatCoordinates=[]),this.flatCoordinates.length=(0,r.IG)(this.flatCoordinates,0,t,this.stride),this.changed()}}const h=l},15265:(t,e,n)=>{"use strict";n.d(e,{ZP:()=>m,iu:()=>E,oJ:()=>R,Bb:()=>x});var s=n(562948),i=n(752043),r=n(432538),o=n(583729),l=n(421915),h=n(438667),a=n(179682),u=n(538529),c=n(686204),f=n(260897),d=n(680793),g=n(832562),p=n(430197),v=n(921882),C=n(862418),_=n(870295);class y extends r.ZP{constructor(t,e,n){super(),this.ends_=[],this.flatInteriorPointRevision_=-1,this.flatInteriorPoint_=null,this.maxDelta_=-1,this.maxDeltaRevision_=-1,this.orientedRevision_=-1,this.orientedFlatCoordinates_=null,void 0!==e&&n?(this.setFlatCoordinates(e,t),this.ends_=n):this.setCoordinates(t,e)}appendLinearRing(t){this.flatCoordinates?(0,a.l7)(this.flatCoordinates,t.getFlatCoordinates()):this.flatCoordinates=t.getFlatCoordinates().slice(),this.ends_.push(this.flatCoordinates.length),this.changed()}clone(){const t=new y(this.flatCoordinates.slice(),this.layout,this.ends_.slice());return t.applyProperties(this),t}closestPointXY(t,e,n,s){return s<(0,l.qf)(this.getExtent(),t,e)?s:(this.maxDeltaRevision_!=this.getRevision()&&(this.maxDelta_=Math.sqrt((0,o.Af)(this.flatCoordinates,0,this.ends_,this.stride,0)),this.maxDeltaRevision_=this.getRevision()),(0,o.Xl)(this.flatCoordinates,0,this.ends_,this.stride,this.maxDelta_,!0,t,e,n,s))}containsXY(t,e){return(0,p.wY)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,e)}getArea(){return(0,g.KP)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride)}getCoordinates(t){let e;return void 0!==t?(e=this.getOrientedFlatCoordinates().slice(),(0,d.zX)(e,0,this.ends_,this.stride,t)):e=this.flatCoordinates,(0,c.o1)(e,0,this.ends_,this.stride)}getEnds(){return this.ends_}getFlatInteriorPoint(){if(this.flatInteriorPointRevision_!=this.getRevision()){const t=(0,l.qg)(this.getExtent());this.flatInteriorPoint_=(0,u.X)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t,0),this.flatInteriorPointRevision_=this.getRevision()}return this.flatInteriorPoint_}getInteriorPoint(){return new i.Z(this.getFlatInteriorPoint(),"XYM")}getLinearRingCount(){return this.ends_.length}getLinearRing(t){return t<0||this.ends_.length<=t?null:new s.Z(this.flatCoordinates.slice(0===t?0:this.ends_[t-1],this.ends_[t]),this.layout)}getLinearRings(){const t=this.layout,e=this.flatCoordinates,n=this.ends_,i=[];let r=0;for(let o=0,l=n.length;o<l;++o){const l=n[o],h=new s.Z(e.slice(r,l),t);i.push(h),r=l}return i}getOrientedFlatCoordinates(){if(this.orientedRevision_!=this.getRevision()){const t=this.flatCoordinates;(0,d.$v)(t,0,this.ends_,this.stride)?this.orientedFlatCoordinates_=t:(this.orientedFlatCoordinates_=t.slice(),this.orientedFlatCoordinates_.length=(0,d.zX)(this.orientedFlatCoordinates_,0,this.ends_,this.stride)),this.orientedRevision_=this.getRevision()}return this.orientedFlatCoordinates_}getSimplifiedGeometryInternal(t){const e=[],n=[];return e.length=(0,C.Zh)(this.flatCoordinates,0,this.ends_,this.stride,Math.sqrt(t),e,0,n),new y(e,"XY",n)}getType(){return"Polygon"}intersectsExtent(t){return(0,f.ac)(this.getOrientedFlatCoordinates(),0,this.ends_,this.stride,t)}setCoordinates(t,e){this.setLayout(e,t,2),this.flatCoordinates||(this.flatCoordinates=[]);const n=(0,h._5)(this.flatCoordinates,0,t,this.stride,this.ends_);this.flatCoordinates.length=0===n.length?0:n[n.length-1],this.changed()}}const m=y;function E(t,e,n,s){n=n||32;const i=[];for(let r=0;r<n;++r)(0,a.l7)(i,(0,_.cv)(t,e,2*Math.PI*r/n,s));return i.push(i[0],i[1]),new y(i,"XY",[i.length])}function R(t){const e=t[0],n=t[1],s=t[2],i=t[3],r=[e,n,e,i,s,i,s,n,e,n];return new y(r,"XY",[r.length])}function x(t,e,n){e=e||32;const s=t.getStride(),i=t.getLayout(),r=t.getCenter(),o=s*(e+1),l=new Array(o);for(let t=0;t<o;t+=s){l[t]=0,l[t+1]=0;for(let e=2;e<s;e++)l[t+e]=r[e]}const h=[l.length],a=new y(l,i,h);return function(t,e,n,s){const i=t.getFlatCoordinates(),r=t.getStride(),o=i.length/r-1,l=s||0;for(let t=0;t<=o;++t){const s=t*r,h=l+2*(0,v.$W)(t,o)*Math.PI/o;i[s]=e[0]+n*Math.cos(h),i[s+1]=e[1]+n*Math.sin(h)}t.changed()}(a,r,t.getRadius(),n),a}},432538:(t,e,n)=>{"use strict";n.d(e,{tP:()=>h,Kr:()=>a,ZP:()=>u});var s=n(208204),i=n(949179),r=n(421915),o=n(517882);class l extends s.Z{constructor(){super(),this.layout="XY",this.stride=2,this.flatCoordinates=null}computeExtent(t){return(0,r.GN)(this.flatCoordinates,0,this.flatCoordinates.length,this.stride,t)}getCoordinates(){return(0,i.O3)()}getFirstCoordinate(){return this.flatCoordinates.slice(0,this.stride)}getFlatCoordinates(){return this.flatCoordinates}getLastCoordinate(){return this.flatCoordinates.slice(this.flatCoordinates.length-this.stride)}getLayout(){return this.layout}getSimplifiedGeometry(t){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<=this.simplifiedGeometryMaxMinSquaredTolerance)return this;const e=this.getSimplifiedGeometryInternal(t);return e.getFlatCoordinates().length<this.flatCoordinates.length?e:(this.simplifiedGeometryMaxMinSquaredTolerance=t,this)}getSimplifiedGeometryInternal(t){return this}getStride(){return this.stride}setFlatCoordinates(t,e){this.stride=h(t),this.layout=t,this.flatCoordinates=e}setCoordinates(t,e){(0,i.O3)()}setLayout(t,e,n){let s;if(t)s=h(t);else{for(let t=0;t<n;++t){if(0===e.length)return this.layout="XY",void(this.stride=2);e=e[0]}s=e.length,t=function(t){let e;return 2==t?e="XY":3==t?e="XYZ":4==t&&(e="XYZM"),e}(s)}this.layout=t,this.stride=s}applyTransform(t){this.flatCoordinates&&(t(this.flatCoordinates,this.flatCoordinates,this.stride),this.changed())}rotate(t,e){const n=this.getFlatCoordinates();if(n){const s=this.getStride();(0,o.U1)(n,0,n.length,s,t,e,n),this.changed()}}scale(t,e,n){void 0===e&&(e=t),n||(n=(0,r.qg)(this.getExtent()));const s=this.getFlatCoordinates();if(s){const i=this.getStride();(0,o.bA)(s,0,s.length,i,t,e,n,s),this.changed()}}translate(t,e){const n=this.getFlatCoordinates();if(n){const s=this.getStride();(0,o.Iu)(n,0,n.length,s,t,e,n),this.changed()}}}function h(t){let e;return"XY"==t?e=2:"XYZ"==t||"XYM"==t?e=3:"XYZM"==t&&(e=4),e}function a(t,e,n){const s=t.getFlatCoordinates();if(!s)return null;const i=t.getStride();return(0,o.vT)(s,0,s.length,i,e,n)}const u=l},832562:(t,e,n)=>{"use strict";function s(t,e,n,s){let i=0,r=t[n-s],o=t[n-s+1];for(;e<n;e+=s){const n=t[e],s=t[e+1];i+=o*n-r*s,r=n,o=s}return i/2}function i(t,e,n,i){let r=0;for(let o=0,l=n.length;o<l;++o){const l=n[o];r+=s(t,e,l,i),e=l}return r}function r(t,e,n,s){let r=0;for(let o=0,l=n.length;o<l;++o){const l=n[o];r+=i(t,e,l,s),e=l[l.length-1]}return r}n.d(e,{QQ:()=>s,KP:()=>i,Eu:()=>r})},583729:(t,e,n)=>{"use strict";n.d(e,{Bv:()=>r,Af:()=>o,sD:()=>l,H$:()=>h,Xl:()=>a,gI:()=>u});var s=n(921882);function i(t,e,n,i,r,o,l){const h=t[e],a=t[e+1],u=t[n]-h,c=t[n+1]-a;let f;if(0===u&&0===c)f=e;else{const d=((r-h)*u+(o-a)*c)/(u*u+c*c);if(d>1)f=n;else{if(d>0){for(let r=0;r<i;++r)l[r]=(0,s.t7)(t[e+r],t[n+r],d);return void(l.length=i)}f=e}}for(let e=0;e<i;++e)l[e]=t[f+e];l.length=i}function r(t,e,n,i,r){let o=t[e],l=t[e+1];for(e+=i;e<n;e+=i){const n=t[e],i=t[e+1],h=(0,s.bI)(o,l,n,i);h>r&&(r=h),o=n,l=i}return r}function o(t,e,n,s,i){for(let o=0,l=n.length;o<l;++o){const l=n[o];i=r(t,e,l,s,i),e=l}return i}function l(t,e,n,s,i){for(let r=0,l=n.length;r<l;++r){const l=n[r];i=o(t,e,l,s,i),e=l[l.length-1]}return i}function h(t,e,n,r,o,l,h,a,u,c,f){if(e==n)return c;let d,g;if(0===o){if(g=(0,s.bI)(h,a,t[e],t[e+1]),g<c){for(d=0;d<r;++d)u[d]=t[e+d];return u.length=r,g}return c}f=f||[NaN,NaN];let p=e+r;for(;p<n;)if(i(t,p-r,p,r,h,a,f),g=(0,s.bI)(h,a,f[0],f[1]),g<c){for(c=g,d=0;d<r;++d)u[d]=f[d];u.length=r,p+=r}else p+=r*Math.max((Math.sqrt(g)-Math.sqrt(c))/o|0,1);if(l&&(i(t,n-r,e,r,h,a,f),g=(0,s.bI)(h,a,f[0],f[1]),g<c)){for(c=g,d=0;d<r;++d)u[d]=f[d];u.length=r}return c}function a(t,e,n,s,i,r,o,l,a,u,c){c=c||[NaN,NaN];for(let f=0,d=n.length;f<d;++f){const d=n[f];u=h(t,e,d,s,i,r,o,l,a,u,c),e=d}return u}function u(t,e,n,s,i,r,o,l,h,u,c){c=c||[NaN,NaN];for(let f=0,d=n.length;f<d;++f){const d=n[f];u=a(t,e,d,s,i,r,o,l,h,u,c),e=d[d.length-1]}return u}},430197:(t,e,n)=>{"use strict";n.d(e,{uG:()=>i,TG:()=>r,wY:()=>o,Zl:()=>l});var s=n(421915);function i(t,e,n,i,o){return!(0,s.H6)(o,(function(s){return!r(t,e,n,i,s[0],s[1])}))}function r(t,e,n,s,i,r){let o=0,l=t[n-s],h=t[n-s+1];for(;e<n;e+=s){const n=t[e],s=t[e+1];h<=r?s>r&&(n-l)*(r-h)-(i-l)*(s-h)>0&&o++:s<=r&&(n-l)*(r-h)-(i-l)*(s-h)<0&&o--,l=n,h=s}return 0!==o}function o(t,e,n,s,i,o){if(0===n.length)return!1;if(!r(t,e,n[0],s,i,o))return!1;for(let e=1,l=n.length;e<l;++e)if(r(t,n[e-1],n[e],s,i,o))return!1;return!0}function l(t,e,n,s,i,r){if(0===n.length)return!1;for(let l=0,h=n.length;l<h;++l){const h=n[l];if(o(t,e,h,s,i,r))return!0;e=h[h.length-1]}return!1}},438667:(t,e,n)=>{"use strict";function s(t,e,n,s){for(let s=0,i=n.length;s<i;++s)t[e++]=n[s];return e}function i(t,e,n,s){for(let i=0,r=n.length;i<r;++i){const r=n[i];for(let n=0;n<s;++n)t[e++]=r[n]}return e}function r(t,e,n,s,r){r=r||[];let o=0;for(let l=0,h=n.length;l<h;++l){const h=i(t,e,n[l],s);r[o++]=h,e=h}return r.length=o,r}function o(t,e,n,s,i){i=i||[];let o=0;for(let l=0,h=n.length;l<h;++l){const h=r(t,e,n[l],s,i[o]);0===h.length&&(h[0]=e),i[o++]=h,e=h[h.length-1]}return i.length=o,i}n.d(e,{IG:()=>s,Sg:()=>i,_5:()=>r,QT:()=>o})},686204:(t,e,n)=>{"use strict";function s(t,e,n,s,i){i=void 0!==i?i:[];let r=0;for(let o=e;o<n;o+=s)i[r++]=t.slice(o,o+s);return i.length=r,i}function i(t,e,n,i,r){r=void 0!==r?r:[];let o=0;for(let l=0,h=n.length;l<h;++l){const h=n[l];r[o++]=s(t,e,h,i,r[o]),e=h}return r.length=o,r}function r(t,e,n,s,r){r=void 0!==r?r:[];let o=0;for(let l=0,h=n.length;l<h;++l){const h=n[l];r[o++]=1===h.length&&h[0]===e?[]:i(t,e,h,s,r[o]),e=h[h.length-1]}return r.length=o,r}n.d(e,{Ml:()=>s,o1:()=>i,ug:()=>r})},538529:(t,e,n)=>{"use strict";n.d(e,{X:()=>r,U:()=>o});var s=n(179682),i=n(430197);function r(t,e,n,r,o,l,h){let a,u,c,f,d,g,p;const v=o[l+1],C=[];for(let s=0,i=n.length;s<i;++s){const i=n[s];for(f=t[i-r],g=t[i-r+1],a=e;a<i;a+=r)d=t[a],p=t[a+1],(v<=g&&p<=v||g<=v&&v<=p)&&(c=(v-g)/(p-g)*(d-f)+f,C.push(c)),f=d,g=p}let _=NaN,y=-1/0;for(C.sort(s.j2),f=C[0],a=1,u=C.length;a<u;++a){d=C[a];const s=Math.abs(d-f);s>y&&(c=(f+d)/2,(0,i.wY)(t,e,n,r,c,v)&&(_=c,y=s)),f=d}return isNaN(_)&&(_=o[l]),h?(h.push(_,v,y),h):[_,v,y]}function o(t,e,n,s,i){let o=[];for(let l=0,h=n.length;l<h;++l){const h=n[l];o=r(t,e,h,s,i,2*l,o),e=h[h.length-1]}return o}},260897:(t,e,n)=>{"use strict";n.d(e,{Kz:()=>o,AW:()=>l,mV:()=>h,ac:()=>a,oW:()=>u});var s=n(421915),i=n(95173),r=n(430197);function o(t,e,n,r,o){const l=(0,s.qP)((0,s.lJ)(),t,e,n,r);return!!(0,s.kK)(o,l)&&(!!(0,s.r4)(o,l)||l[0]>=o[0]&&l[2]<=o[2]||l[1]>=o[1]&&l[3]<=o[3]||(0,i.E)(t,e,n,r,(function(t,e){return(0,s.I7)(o,t,e)})))}function l(t,e,n,s,i){for(let r=0,l=n.length;r<l;++r){if(o(t,e,n[r],s,i))return!0;e=n[r]}return!1}function h(t,e,n,s,i){return!!(o(t,e,n,s,i)||(0,r.TG)(t,e,n,s,i[0],i[1])||(0,r.TG)(t,e,n,s,i[0],i[3])||(0,r.TG)(t,e,n,s,i[2],i[1])||(0,r.TG)(t,e,n,s,i[2],i[3]))}function a(t,e,n,s,i){if(!h(t,e,n[0],s,i))return!1;if(1===n.length)return!0;for(let e=1,l=n.length;e<l;++e)if((0,r.uG)(t,n[e-1],n[e],s,i)&&!o(t,n[e-1],n[e],s,i))return!1;return!0}function u(t,e,n,s,i){for(let r=0,o=n.length;r<o;++r){const o=n[r];if(a(t,e,o,s,i))return!0;e=o[o.length-1]}return!1}},680793:(t,e,n)=>{"use strict";function s(t,e,n,s){for(;e<n-s;){for(let i=0;i<s;++i){const r=t[e+i];t[e+i]=t[n-s+i],t[n-s+i]=r}e+=s,n-=s}}function i(t,e,n,s){let i=0,r=t[n-s],o=t[n-s+1];for(;e<n;e+=s){const n=t[e],s=t[e+1];i+=(n-r)*(s+o),r=n,o=s}return 0===i?void 0:i>0}function r(t,e,n,s,r){r=void 0!==r&&r;for(let o=0,l=n.length;o<l;++o){const l=n[o],h=i(t,e,l,s);if(0===o){if(r&&h||!r&&!h)return!1}else if(r&&!h||!r&&h)return!1;e=l}return!0}function o(t,e,n,s,i){for(let o=0,l=n.length;o<l;++o){const l=n[o];if(!r(t,e,l,s,i))return!1;l.length&&(e=l[l.length-1])}return!0}function l(t,e,n,r,o){o=void 0!==o&&o;for(let l=0,h=n.length;l<h;++l){const h=n[l],a=i(t,e,h,r);(0===l?o&&a||!o&&!a:o&&!a||!o&&a)&&s(t,e,h,r),e=h}return e}function h(t,e,n,s,i){for(let r=0,o=n.length;r<o;++r)e=l(t,e,n[r],s,i);return e}function a(t,e){const n=[];let s=0,r=0;for(let o=0,l=e.length;o<l;++o){const l=e[o];if(i(t,s,l,2)){if(0===n.length)continue;n[n.length-1].push(e[r])}else n.push(e.slice(r,o+1));r=o+1,s=l}return n}n.d(e,{Q3:()=>a,$v:()=>r,Oj:()=>o,zX:()=>l,dL:()=>h})},95173:(t,e,n)=>{"use strict";function s(t,e,n,s,i){let r;for(e+=s;e<n;e+=s)if(r=i(t.slice(e-s,e),t.slice(e,e+s)),r)return r;return!1}n.d(e,{E:()=>s})},862418:(t,e,n)=>{"use strict";n.d(e,{dt:()=>i,UJ:()=>r,uZ:()=>o,Zh:()=>h,Pp:()=>a});var s=n(921882);function i(t,e,n,i,r,o,l){const h=(n-e)/i;if(h<3){for(;e<n;e+=i)o[l++]=t[e],o[l++]=t[e+1];return l}const a=new Array(h);a[0]=1,a[h-1]=1;const u=[e,n-i];let c=0;for(;u.length>0;){const n=u.pop(),o=u.pop();let l=0;const h=t[o],f=t[o+1],d=t[n],g=t[n+1];for(let e=o+i;e<n;e+=i){const n=t[e],i=t[e+1],r=(0,s.rU)(n,i,h,f,d,g);r>l&&(c=e,l=r)}l>r&&(a[(c-e)/i]=1,o+i<c&&u.push(o,c),c+i<n&&u.push(c,n))}for(let n=0;n<h;++n)a[n]&&(o[l++]=t[e+n*i],o[l++]=t[e+n*i+1]);return l}function r(t,e,n,s,r,o,l,h){for(let a=0,u=n.length;a<u;++a){const u=n[a];l=i(t,e,u,s,r,o,l),h.push(l),e=u}return l}function o(t,e){return e*Math.round(t/e)}function l(t,e,n,s,i,r,l){if(e==n)return l;let h,a,u=o(t[e],i),c=o(t[e+1],i);e+=s,r[l++]=u,r[l++]=c;do{if(h=o(t[e],i),a=o(t[e+1],i),(e+=s)==n)return r[l++]=h,r[l++]=a,l}while(h==u&&a==c);for(;e<n;){const n=o(t[e],i),f=o(t[e+1],i);if(e+=s,n==h&&f==a)continue;const d=h-u,g=a-c,p=n-u,v=f-c;d*v==g*p&&(d<0&&p<d||d==p||d>0&&p>d)&&(g<0&&v<g||g==v||g>0&&v>g)?(h=n,a=f):(r[l++]=h,r[l++]=a,u=h,c=a,h=n,a=f)}return r[l++]=h,r[l++]=a,l}function h(t,e,n,s,i,r,o,h){for(let a=0,u=n.length;a<u;++a){const u=n[a];o=l(t,e,u,s,i,r,o),h.push(o),e=u}return o}function a(t,e,n,s,i,r,o,l){for(let a=0,u=n.length;a<u;++a){const u=n[a],c=[];o=h(t,e,u,s,i,r,o,c),l.push(c),e=u[u.length-1]}return o}},517882:(t,e,n)=>{"use strict";function s(t,e,n,s,i,r){r=r||[];let o=0;for(let l=e;l<n;l+=s){const e=t[l],n=t[l+1];r[o++]=i[0]*e+i[2]*n+i[4],r[o++]=i[1]*e+i[3]*n+i[5]}return r&&r.length!=o&&(r.length=o),r}function i(t,e,n,s,i,r,o){o=o||[];const l=Math.cos(i),h=Math.sin(i),a=r[0],u=r[1];let c=0;for(let i=e;i<n;i+=s){const e=t[i]-a,n=t[i+1]-u;o[c++]=a+e*l-n*h,o[c++]=u+e*h+n*l;for(let e=i+2;e<i+s;++e)o[c++]=t[e]}return o&&o.length!=c&&(o.length=c),o}function r(t,e,n,s,i,r,o,l){l=l||[];const h=o[0],a=o[1];let u=0;for(let o=e;o<n;o+=s){const e=t[o]-h,n=t[o+1]-a;l[u++]=h+i*e,l[u++]=a+r*n;for(let e=o+2;e<o+s;++e)l[u++]=t[e]}return l&&l.length!=u&&(l.length=u),l}function o(t,e,n,s,i,r,o){o=o||[];let l=0;for(let h=e;h<n;h+=s){o[l++]=t[h]+i,o[l++]=t[h+1]+r;for(let e=h+2;e<h+s;++e)o[l++]=t[e]}return o&&o.length!=l&&(o.length=l),o}n.d(e,{vT:()=>s,U1:()=>i,bA:()=>r,Iu:()=>o})},591358:(t,e,n)=>{"use strict";n.d(e,{V:()=>i,ME:()=>r,G$:()=>o,tK:()=>l,MP:()=>h,Id:()=>a,Tp:()=>u,bM:()=>c});const s="undefined"!=typeof navigator&&void 0!==navigator.userAgent?navigator.userAgent.toLowerCase():"",i=s.includes("firefox"),r=s.includes("safari")&&!s.includes("chrom")&&(s.includes("version/15.4")||/cpu (os|iphone os) 15_4 like mac os x/.test(s)),o=s.includes("webkit")&&!s.includes("edge"),l=s.includes("macintosh"),h="undefined"!=typeof devicePixelRatio?devicePixelRatio:1,a="undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof OffscreenCanvas&&self instanceof WorkerGlobalScope,u="undefined"!=typeof Image&&Image.prototype.decode,c=function(){let t=!1;try{const e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("_",null,e),window.removeEventListener("_",null,e)}catch(t){}return t}()},913580:(t,e,n)=>{"use strict";function s(t){for(const e in t)delete t[e]}function i(t){let e;for(e in t)return!1;return!e}n.d(e,{Z:()=>s,x:()=>i})},782359:(t,e,n)=>{"use strict";n.d(e,{Ue:()=>o,mc:()=>l,Jp:()=>h,lk:()=>u,nn:()=>c,U1:()=>f,bA:()=>d,n3:()=>g,Iu:()=>p,qC:()=>v,nb:()=>C,BB:()=>y});var s=n(591358),i=n(438906);const r=new Array(6);function o(){return[1,0,0,1,0,0]}function l(t){return a(t,1,0,0,1,0,0)}function h(t,e){const n=t[0],s=t[1],i=t[2],r=t[3],o=t[4],l=t[5],h=e[0],a=e[1],u=e[2],c=e[3],f=e[4],d=e[5];return t[0]=n*h+i*a,t[1]=s*h+r*a,t[2]=n*u+i*c,t[3]=s*u+r*c,t[4]=n*f+i*d+o,t[5]=s*f+r*d+l,t}function a(t,e,n,s,i,r,o){return t[0]=e,t[1]=n,t[2]=s,t[3]=i,t[4]=r,t[5]=o,t}function u(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function c(t,e){const n=e[0],s=e[1];return e[0]=t[0]*n+t[2]*s+t[4],e[1]=t[1]*n+t[3]*s+t[5],e}function f(t,e){const n=Math.cos(e),s=Math.sin(e);return h(t,a(r,n,s,-s,n,0,0))}function d(t,e,n){return h(t,a(r,e,0,0,n,0,0))}function g(t,e,n){return a(t,e,0,0,n,0,0)}function p(t,e,n){return h(t,a(r,1,0,0,1,e,n))}function v(t,e,n,s,i,r,o,l){const h=Math.sin(r),a=Math.cos(r);return t[0]=s*a,t[1]=i*h,t[2]=-s*h,t[3]=i*a,t[4]=o*s*a-l*s*h+e,t[5]=o*i*h+l*i*a+n,t}function C(t,e){const n=(s=e)[0]*s[3]-s[1]*s[2];var s;(0,i.h)(0!==n,32);const r=e[0],o=e[1],l=e[2],h=e[3],a=e[4],u=e[5];return t[0]=h/n,t[1]=-o/n,t[2]=-l/n,t[3]=r/n,t[4]=(l*u-h*a)/n,t[5]=-(r*u-o*a)/n,t}let _;function y(t){const e="matrix("+t.join(", ")+")";if(s.Id)return e;const n=_||(_=document.createElement("div"));return n.style.transform=e,n.style.transform}},949179:(t,e,n)=>{"use strict";function s(){throw new Error("Unimplemented abstract method.")}n.d(e,{O3:()=>s,sq:()=>r});let i=0;function r(t){return t.ol_uid||(t.ol_uid=String(++i))}}}]);
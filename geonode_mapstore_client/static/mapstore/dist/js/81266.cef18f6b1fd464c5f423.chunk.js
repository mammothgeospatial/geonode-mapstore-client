(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[81266],{753325:t=>{t.exports=function(t,e){return t>e}},23279:(t,e,i)=>{var n=i(513218),s=i(707771),o=i(14841),r=Math.max,a=Math.min;t.exports=function(t,e,i){var h,d,l,u,g,p,c=0,m=!1,f=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function P(e){var i=h,n=d;return h=d=void 0,c=e,u=t.apply(n,i)}function E(t){var i=t-p;return void 0===p||i>=e||i<0||f&&t-c>=l}function C(){var t=s();if(E(t))return x(t);g=setTimeout(C,function(t){var i=e-(t-p);return f?a(i,l-(t-c)):i}(t))}function x(t){return g=void 0,v&&h?P(t):(h=d=void 0,u)}function O(){var t=s(),i=E(t);if(h=arguments,d=this,p=t,i){if(void 0===g)return function(t){return c=t,g=setTimeout(C,e),m?P(t):u}(p);if(f)return clearTimeout(g),g=setTimeout(C,e),P(p)}return void 0===g&&(g=setTimeout(C,e)),u}return e=o(e)||0,n(i)&&(m=!!i.leading,l=(f="maxWait"in i)?r(o(i.maxWait)||0,e):l,v="trailing"in i?!!i.trailing:v),O.cancel=function(){void 0!==g&&clearTimeout(g),c=0,h=p=d=g=void 0},O.flush=function(){return void 0===g?u:x(s())},O}},843624:(t,e,i)=>{var n=i(314259),s=i(640554);t.exports=function(t,e,i){var o=null==t?0:t.length;return o?(e=i||void 0===e?1:s(e),n(t,0,(e=o-e)<0?0:e)):[]}},606162:(t,e,i)=>{var n=i(456029),s=i(753325),o=i(406557);t.exports=function(t){return t&&t.length?n(t,o,s):void 0}},707771:(t,e,i)=>{var n=i(555639);t.exports=function(){return n.Date.now()}},540188:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend",LOADSTART:"loadstart",LOADEND:"loadend"}},193409:(t,e,i)=>{"use strict";i.d(e,{Z:()=>m});var n=i(558493),s=i(540188),o=i(267644),r=i(421915),a=i(613002),h=i(85386);const d="element",l="map",u="offset",g="position",p="positioning";class c extends n.Z{constructor(t){super(),this.on,this.once,this.un,this.options=t,this.id=t.id,this.insertFirst=void 0===t.insertFirst||t.insertFirst,this.stopEvent=void 0===t.stopEvent||t.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==t.className?t.className:"ol-overlay-container "+o.$A,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.autoPan=!0===t.autoPan?{}:t.autoPan||void 0,this.rendered={transform_:"",visible:!0},this.mapPostrenderListenerKey=null,this.addChangeListener(d,this.handleElementChanged),this.addChangeListener(l,this.handleMapChanged),this.addChangeListener(u,this.handleOffsetChanged),this.addChangeListener(g,this.handlePositionChanged),this.addChangeListener(p,this.handlePositioningChanged),void 0!==t.element&&this.setElement(t.element),this.setOffset(void 0!==t.offset?t.offset:[0,0]),this.setPositioning(t.positioning||"top-left"),void 0!==t.position&&this.setPosition(t.position)}getElement(){return this.get(d)}getId(){return this.id}getMap(){return this.get(l)||null}getOffset(){return this.get(u)}getPosition(){return this.get(g)}getPositioning(){return this.get(p)}handleElementChanged(){(0,h.ep)(this.element);const t=this.getElement();t&&this.element.appendChild(t)}handleMapChanged(){this.mapPostrenderListenerKey&&((0,h.ZF)(this.element),(0,a.bN)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);const t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,a.oL)(t,s.Z.POSTRENDER,this.render,this),this.updatePixelPosition();const e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element),this.performAutoPan()}}render(){this.updatePixelPosition()}handleOffsetChanged(){this.updatePixelPosition()}handlePositionChanged(){this.updatePixelPosition(),this.performAutoPan()}handlePositioningChanged(){this.updatePixelPosition()}setElement(t){this.set(d,t)}setMap(t){this.set(l,t)}setOffset(t){this.set(u,t)}setPosition(t){this.set(g,t)}performAutoPan(){this.autoPan&&this.panIntoView(this.autoPan)}panIntoView(t){const e=this.getMap();if(!e||!e.getTargetElement()||!this.get(g))return;const i=this.getRect(e.getTargetElement(),e.getSize()),n=this.getElement(),s=this.getRect(n,[(0,h.iO)(n),(0,h.Pb)(n)]),o=void 0===(t=t||{}).margin?20:t.margin;if(!(0,r.r4)(i,s)){const n=s[0]-i[0],r=i[2]-s[2],a=s[1]-i[1],h=i[3]-s[3],d=[0,0];if(n<0?d[0]=n-o:r<0&&(d[0]=Math.abs(r)+o),a<0?d[1]=a-o:h<0&&(d[1]=Math.abs(h)+o),0!==d[0]||0!==d[1]){const i=e.getView().getCenterInternal(),n=e.getPixelFromCoordinateInternal(i);if(!n)return;const s=[n[0]+d[0],n[1]+d[1]],o=t.animation||{};e.getView().animateInternal({center:e.getCoordinateFromPixelInternal(s),duration:o.duration,easing:o.easing})}}}getRect(t,e){const i=t.getBoundingClientRect(),n=i.left+window.pageXOffset,s=i.top+window.pageYOffset;return[n,s,n+e[0],s+e[1]]}setPositioning(t){this.set(p,t)}setVisible(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)}updatePixelPosition(){const t=this.getMap(),e=this.getPosition();if(!t||!t.isRendered()||!e)return void this.setVisible(!1);const i=t.getPixelFromCoordinate(e),n=t.getSize();this.updateRenderedPosition(i,n)}updateRenderedPosition(t,e){const i=this.element.style,n=this.getOffset(),s=this.getPositioning();this.setVisible(!0);let o="0%",r="0%";"bottom-right"==s||"center-right"==s||"top-right"==s?o="-100%":"bottom-center"!=s&&"center-center"!=s&&"top-center"!=s||(o="-50%"),"bottom-left"==s||"bottom-center"==s||"bottom-right"==s?r="-100%":"center-left"!=s&&"center-center"!=s&&"center-right"!=s||(r="-50%");const a=`translate(${o}, ${r}) translate(${Math.round(t[0]+n[0])+"px"}, ${Math.round(t[1]+n[1])+"px"})`;this.rendered.transform_!=a&&(this.rendered.transform_=a,i.transform=a)}getOptions(){return this.options}}const m=c},859900:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={IDLE:0,LOADING:1,LOADED:2,ERROR:3,EMPTY:4}}}]);
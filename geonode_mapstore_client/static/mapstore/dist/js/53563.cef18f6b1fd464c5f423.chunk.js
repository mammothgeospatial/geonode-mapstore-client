(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[53563],{593888:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var r=i(83482),n=i(570701);class o extends r.Z{clear(){for(;this.getCount()>0;)this.pop().release();super.clear()}expireCache(t){for(;this.canExpireCache()&&!(this.peekLast().getKey()in t);)this.pop().release()}pruneExceptNewestZ(){if(0===this.getCount())return;const t=this.peekFirstKey(),e=(0,n.Ul)(t)[0];this.forEach((t=>{t.tileCoord[0]!==e&&(this.remove((0,n.km)(t.tileCoord)),t.release())}))}}const s=o},51626:(t,e,i)=>{"use strict";i.d(e,{s:()=>_,Z:()=>p});var r=i(9520),n=i(771405),o=i(593888),s=i(859900),l=i(949179),h=i(438906),c=i(218672),a=i(570701),u=i(386018),g=i(450596);class d extends n.Z{constructor(t){super({attributions:t.attributions,attributionsCollapsible:t.attributionsCollapsible,projection:t.projection,state:t.state,wrapX:t.wrapX,interpolate:t.interpolate}),this.on,this.once,this.un,this.opaque_=void 0!==t.opaque&&t.opaque,this.tilePixelRatio_=void 0!==t.tilePixelRatio?t.tilePixelRatio:1,this.tileGrid=void 0!==t.tileGrid?t.tileGrid:null;this.tileGrid&&(0,g.Pq)(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()),[256,256]),this.tileCache=new o.Z(t.cacheSize||0),this.tmpSize=[0,0],this.key_=t.key||"",this.tileOptions={transition:t.transition,interpolate:t.interpolate},this.zDirection=t.zDirection?t.zDirection:0}canExpireCache(){return this.tileCache.canExpireCache()}expireCache(t,e){const i=this.getTileCacheForProjection(t);i&&i.expireCache(e)}forEachLoadedTile(t,e,i,r){const n=this.getTileCacheForProjection(t);if(!n)return!1;let o,l,h,c=!0;for(let t=i.minX;t<=i.maxX;++t)for(let u=i.minY;u<=i.maxY;++u)l=(0,a.lg)(e,t,u),h=!1,n.containsKey(l)&&(o=n.get(l),h=o.getState()===s.Z.LOADED,h&&(h=!1!==r(o))),h||(c=!1);return c}getGutterForProjection(t){return 0}getKey(){return this.key_}setKey(t){this.key_!==t&&(this.key_=t,this.changed())}getOpaque(t){return this.opaque_}getResolutions(t){const e=t?this.getTileGridForProjection(t):this.tileGrid;return e?e.getResolutions():null}getTile(t,e,i,r,n){return(0,l.O3)()}getTileGrid(){return this.tileGrid}getTileGridForProjection(t){return this.tileGrid?this.tileGrid:(0,u.X$)(t)}getTileCacheForProjection(t){const e=this.getProjection();return(0,h.h)(null===e||(0,c.OP)(e,t),68),this.tileCache}getTilePixelRatio(t){return this.tilePixelRatio_}getTilePixelSize(t,e,i){const r=this.getTileGridForProjection(i),n=this.getTilePixelRatio(e),o=(0,g.Pq)(r.getTileSize(t),this.tmpSize);return 1==n?o:(0,g.bA)(o,n,this.tmpSize)}getTileCoordForTileUrlFunction(t,e){e=void 0!==e?e:this.getProjection();const i=this.getTileGridForProjection(e);return this.getWrapX()&&e.isGlobal()&&(t=(0,u.Cf)(i,t,e)),(0,a.tE)(t,i)?t:null}clear(){this.tileCache.clear()}refresh(){this.clear(),super.refresh()}updateCacheSize(t,e){const i=this.getTileCacheForProjection(e);t>i.highWaterMark&&(i.highWaterMark=t)}useTile(t,e,i,r){}}class _ extends r.ZP{constructor(t,e){super(t),this.tile=e}}const p=d},184548:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});const r={TILELOADSTART:"tileloadstart",TILELOADEND:"tileloadend",TILELOADERROR:"tileloaderror"}},365952:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var r=i(173381),n=i(415107),o=i(707245),s=i(593888),l=i(859900),h=i(327457),c=i(218672),a=i(570701),u=i(386018),g=i(949179);class d extends h.Z{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,opaque:t.opaque,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tileLoadFunction:t.tileLoadFunction?t.tileLoadFunction:_,tilePixelRatio:t.tilePixelRatio,tileUrlFunction:t.tileUrlFunction,url:t.url,urls:t.urls,wrapX:t.wrapX,transition:t.transition,interpolate:void 0===t.interpolate||t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.crossOrigin=void 0!==t.crossOrigin?t.crossOrigin:null,this.tileClass=void 0!==t.tileClass?t.tileClass:n.Z,this.tileCacheForProjection={},this.tileGridForProjection={},this.reprojectionErrorThreshold_=t.reprojectionErrorThreshold,this.renderReprojectionEdges_=!1}canExpireCache(){if(this.tileCache.canExpireCache())return!0;for(const t in this.tileCacheForProjection)if(this.tileCacheForProjection[t].canExpireCache())return!0;return!1}expireCache(t,e){const i=this.getTileCacheForProjection(t);this.tileCache.expireCache(this.tileCache==i?e:{});for(const t in this.tileCacheForProjection){const r=this.tileCacheForProjection[t];r.expireCache(r==i?e:{})}}getGutterForProjection(t){return this.getProjection()&&t&&!(0,c.OP)(this.getProjection(),t)?0:this.getGutter()}getGutter(){return 0}getKey(){let t=super.getKey();return this.getInterpolate()||(t+=":disable-interpolation"),t}getOpaque(t){return!(this.getProjection()&&t&&!(0,c.OP)(this.getProjection(),t))&&super.getOpaque(t)}getTileGridForProjection(t){const e=this.getProjection();if(this.tileGrid&&(!e||(0,c.OP)(e,t)))return this.tileGrid;const i=(0,g.sq)(t);return i in this.tileGridForProjection||(this.tileGridForProjection[i]=(0,u.X$)(t)),this.tileGridForProjection[i]}getTileCacheForProjection(t){const e=this.getProjection();if(!e||(0,c.OP)(e,t))return this.tileCache;const i=(0,g.sq)(t);return i in this.tileCacheForProjection||(this.tileCacheForProjection[i]=new s.Z(this.tileCache.highWaterMark)),this.tileCacheForProjection[i]}createTile_(t,e,i,n,o,s){const h=[t,e,i],c=this.getTileCoordForTileUrlFunction(h,o),a=c?this.tileUrlFunction(c,n,o):void 0,u=new this.tileClass(h,void 0!==a?l.Z.IDLE:l.Z.EMPTY,void 0!==a?a:"",this.crossOrigin,this.tileLoadFunction,this.tileOptions);return u.key=s,u.addEventListener(r.Z.CHANGE,this.handleTileChange.bind(this)),u}getTile(t,e,i,r,n){const s=this.getProjection();if(!s||!n||(0,c.OP)(s,n))return this.getTileInternal(t,e,i,r,s||n);const l=this.getTileCacheForProjection(n),h=[t,e,i];let u;const g=(0,a.km)(h);l.containsKey(g)&&(u=l.get(g));const d=this.getKey();if(u&&u.key==d)return u;const _=this.getTileGridForProjection(s),p=this.getTileGridForProjection(n),T=this.getTileCoordForTileUrlFunction(h,n),C=new o.Z(s,_,n,p,h,T,this.getTilePixelRatio(r),this.getGutter(),((t,e,i,r)=>this.getTileInternal(t,e,i,r,s)),this.reprojectionErrorThreshold_,this.renderReprojectionEdges_,this.getInterpolate());return C.key=d,u?(C.interimTile=u,C.refreshInterimChain(),l.replace(g,C)):l.set(g,C),C}getTileInternal(t,e,i,r,n){let o=null;const s=(0,a.lg)(t,e,i),h=this.getKey();if(this.tileCache.containsKey(s)){if(o=this.tileCache.get(s),o.key!=h){const c=o;o=this.createTile_(t,e,i,r,n,h),c.getState()==l.Z.IDLE?o.interimTile=c.interimTile:o.interimTile=c,o.refreshInterimChain(),this.tileCache.replace(s,o)}}else o=this.createTile_(t,e,i,r,n,h),this.tileCache.set(s,o);return o}setRenderReprojectionEdges(t){if(this.renderReprojectionEdges_!=t){this.renderReprojectionEdges_=t;for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear();this.changed()}}setTileGridForProjection(t,e){const i=(0,c.U2)(t);if(i){const t=(0,g.sq)(i);t in this.tileGridForProjection||(this.tileGridForProjection[t]=e)}}clear(){super.clear();for(const t in this.tileCacheForProjection)this.tileCacheForProjection[t].clear()}}function _(t,e){t.getImage().src=e}const p=d},327457:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var r=i(184548),n=i(51626),o=i(859900),s=i(989434),l=i(570701),h=i(949179);class c extends n.Z{constructor(t){super({attributions:t.attributions,cacheSize:t.cacheSize,opaque:t.opaque,projection:t.projection,state:t.state,tileGrid:t.tileGrid,tilePixelRatio:t.tilePixelRatio,wrapX:t.wrapX,transition:t.transition,interpolate:t.interpolate,key:t.key,attributionsCollapsible:t.attributionsCollapsible,zDirection:t.zDirection}),this.generateTileUrlFunction_=this.tileUrlFunction===c.prototype.tileUrlFunction,this.tileLoadFunction=t.tileLoadFunction,t.tileUrlFunction&&(this.tileUrlFunction=t.tileUrlFunction),this.urls=null,t.urls?this.setUrls(t.urls):t.url&&this.setUrl(t.url),this.tileLoadingKeys_={}}getTileLoadFunction(){return this.tileLoadFunction}getTileUrlFunction(){return Object.getPrototypeOf(this).tileUrlFunction===this.tileUrlFunction?this.tileUrlFunction.bind(this):this.tileUrlFunction}getUrls(){return this.urls}handleTileChange(t){const e=t.target,i=(0,h.sq)(e),s=e.getState();let l;s==o.Z.LOADING?(this.tileLoadingKeys_[i]=!0,l=r.Z.TILELOADSTART):i in this.tileLoadingKeys_&&(delete this.tileLoadingKeys_[i],l=s==o.Z.ERROR?r.Z.TILELOADERROR:s==o.Z.LOADED?r.Z.TILELOADEND:void 0),null!=l&&this.dispatchEvent(new n.s(l,e))}setTileLoadFunction(t){this.tileCache.clear(),this.tileLoadFunction=t,this.changed()}setTileUrlFunction(t,e){this.tileUrlFunction=t,this.tileCache.pruneExceptNewestZ(),void 0!==e?this.setKey(e):this.changed()}setUrl(t){const e=(0,s.Gk)(t);this.urls=e,this.setUrls(e)}setUrls(t){this.urls=t;const e=t.join("\n");this.generateTileUrlFunction_?this.setTileUrlFunction((0,s.uR)(t,this.tileGrid),e):this.setKey(e)}tileUrlFunction(t,e,i){}useTile(t,e,i){const r=(0,l.lg)(t,e,i);this.tileCache.containsKey(r)&&this.tileCache.get(r)}}const a=c},83482:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var r=i(438906);const n=class{constructor(t){this.highWaterMark=void 0!==t?t:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}canExpireCache(){return this.highWaterMark>0&&this.getCount()>this.highWaterMark}expireCache(t){for(;this.canExpireCache();)this.pop()}clear(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}containsKey(t){return this.entries_.hasOwnProperty(t)}forEach(t){let e=this.oldest_;for(;e;)t(e.value_,e.key_,this),e=e.newer}get(t,e){const i=this.entries_[t];return(0,r.h)(void 0!==i,15),i===this.newest_||(i===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(i.newer.older=i.older,i.older.newer=i.newer),i.newer=null,i.older=this.newest_,this.newest_.newer=i,this.newest_=i),i.value_}remove(t){const e=this.entries_[t];return(0,r.h)(void 0!==e,15),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_}getCount(){return this.count_}getKeys(){const t=new Array(this.count_);let e,i=0;for(e=this.newest_;e;e=e.older)t[i++]=e.key_;return t}getValues(){const t=new Array(this.count_);let e,i=0;for(e=this.newest_;e;e=e.older)t[i++]=e.value_;return t}peekLast(){return this.oldest_.value_}peekLastKey(){return this.oldest_.key_}peekFirstKey(){return this.newest_.key_}peek(t){if(this.containsKey(t))return this.entries_[t].value_}pop(){const t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_}replace(t,e){this.get(t),this.entries_[t].value_=e}set(t,e){(0,r.h)(!(t in this.entries_),16);const i={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=i:this.oldest_=i,this.newest_=i,this.entries_[t]=i,++this.count_}setSize(t){this.highWaterMark=t}}},570701:(t,e,i)=>{"use strict";function r(t,e,i,r){return void 0!==r?(r[0]=t,r[1]=e,r[2]=i,r):[t,e,i]}function n(t,e,i){return t+"/"+e+"/"+i}function o(t){return n(t[0],t[1],t[2])}function s(t){const[e,i,r]=t.substring(t.lastIndexOf("/")+1,t.length).split(",").map(Number);return n(e,i,r)}function l(t){return t.split("/").map(Number)}function h(t){return(t[1]<<t[0])+t[2]}function c(t,e){const i=t[0],r=t[1],n=t[2];if(e.getMinZoom()>i||i>e.getMaxZoom())return!1;const o=e.getFullTileRange(i);return!o||o.containsXY(r,n)}i.d(e,{T9:()=>r,lg:()=>n,km:()=>o,MY:()=>s,Ul:()=>l,vp:()=>h,tE:()=>c})},386018:(t,e,i)=>{"use strict";i.d(e,{X$:()=>h,Cf:()=>c,dl:()=>a,Tl:()=>g});var r=i(408930),n=i(810508),o=i(218672),s=i(421915),l=i(450596);function h(t){let e=t.getDefaultTileGrid();return e||(e=function(t,e,i,n){return function(t,e,i,n){n=void 0!==n?n:"top-left";const o=u(t,e,i);return new r.Z({extent:t,origin:(0,s.g0)(t,n),resolutions:o,tileSize:i})}(g(t),void 0,void 0,void 0)}(t),t.setDefaultTileGrid(e)),e}function c(t,e,i){const r=e[0],n=t.getTileCoordCenter(e),o=g(i);if(!(0,s.b8)(o,n)){const e=(0,s.dz)(o),i=Math.ceil((o[0]-n[0])/e);return n[0]+=e*i,t.getTileCoordForCoordAndZ(n,r)}return e}function a(t){const e=t||{},i=e.extent||(0,o.U2)("EPSG:3857").getExtent(),n={extent:i,minZoom:e.minZoom,tileSize:e.tileSize,resolutions:u(i,e.maxZoom,e.tileSize,e.maxResolution)};return new r.Z(n)}function u(t,e,i,r){e=void 0!==e?e:n.e,i=(0,l.Pq)(void 0!==i?i:n.S);const o=(0,s.Cr)(t),h=(0,s.dz)(t);r=r>0?r:Math.max(h/i[0],o/i[1]);const c=e+1,a=new Array(c);for(let t=0;t<c;++t)a[t]=r/Math.pow(2,t);return a}function g(t){let e=(t=(0,o.U2)(t)).getExtent();if(!e){const i=180*o.Wm.degrees/t.getMetersPerUnit();e=(0,s.T9)(-i,-i,i,i)}return e}},408930:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var r=i(19473),n=i(810508),o=i(438906),s=i(921882),l=i(421915),h=i(570701),c=i(260897),a=i(179682),u=i(450596);const g=[0,0,0],d=class{constructor(t){let e;if(this.minZoom=void 0!==t.minZoom?t.minZoom:0,this.resolutions_=t.resolutions,(0,o.h)((0,a.pT)(this.resolutions_,(function(t,e){return e-t}),!0),17),!t.origins)for(let t=0,i=this.resolutions_.length-1;t<i;++t)if(e){if(this.resolutions_[t]/this.resolutions_[t+1]!==e){e=void 0;break}}else e=this.resolutions_[t]/this.resolutions_[t+1];this.zoomFactor_=e,this.maxZoom=this.resolutions_.length-1,this.origin_=void 0!==t.origin?t.origin:null,this.origins_=null,void 0!==t.origins&&(this.origins_=t.origins,(0,o.h)(this.origins_.length==this.resolutions_.length,20));const i=t.extent;void 0===i||this.origin_||this.origins_||(this.origin_=(0,l.rL)(i)),(0,o.h)(!this.origin_&&this.origins_||this.origin_&&!this.origins_,18),this.tileSizes_=null,void 0!==t.tileSizes&&(this.tileSizes_=t.tileSizes,(0,o.h)(this.tileSizes_.length==this.resolutions_.length,19)),this.tileSize_=void 0!==t.tileSize?t.tileSize:this.tileSizes_?null:n.S,(0,o.h)(!this.tileSize_&&this.tileSizes_||this.tileSize_&&!this.tileSizes_,22),this.extent_=void 0!==i?i:null,this.fullTileRanges_=null,this.tmpSize_=[0,0],this.tmpExtent_=[0,0,0,0],void 0!==t.sizes?this.fullTileRanges_=t.sizes.map((function(t,e){const n=new r.Z(Math.min(0,t[0]),Math.max(t[0]-1,-1),Math.min(0,t[1]),Math.max(t[1]-1,-1));if(i){const t=this.getTileRangeForExtentAndZ(i,e);n.minX=Math.max(t.minX,n.minX),n.maxX=Math.min(t.maxX,n.maxX),n.minY=Math.max(t.minY,n.minY),n.maxY=Math.min(t.maxY,n.maxY)}return n}),this):i&&this.calculateTileRanges_(i)}forEachTileCoord(t,e,i){const r=this.getTileRangeForExtentAndZ(t,e);for(let t=r.minX,n=r.maxX;t<=n;++t)for(let n=r.minY,o=r.maxY;n<=o;++n)i([e,t,n])}forEachTileCoordParentTileRange(t,e,i,n){let o,s,l,h=null,c=t[0]-1;for(2===this.zoomFactor_?(s=t[1],l=t[2]):h=this.getTileCoordExtent(t,n);c>=this.minZoom;){if(2===this.zoomFactor_?(s=Math.floor(s/2),l=Math.floor(l/2),o=(0,r.T)(s,s,l,l,i)):o=this.getTileRangeForExtentAndZ(h,c,i),e(c,o))return!0;--c}return!1}getExtent(){return this.extent_}getMaxZoom(){return this.maxZoom}getMinZoom(){return this.minZoom}getOrigin(t){return this.origin_?this.origin_:this.origins_[t]}getResolution(t){return this.resolutions_[t]}getResolutions(){return this.resolutions_}getTileCoordChildTileRange(t,e,i){if(t[0]<this.maxZoom){if(2===this.zoomFactor_){const i=2*t[1],n=2*t[2];return(0,r.T)(i,i+1,n,n+1,e)}const n=this.getTileCoordExtent(t,i||this.tmpExtent_);return this.getTileRangeForExtentAndZ(n,t[0]+1,e)}return null}getTileRangeForTileCoordAndZ(t,e,i){if(e>this.maxZoom||e<this.minZoom)return null;const n=t[0],o=t[1],s=t[2];if(e===n)return(0,r.T)(o,s,o,s,i);if(this.zoomFactor_){const t=Math.pow(this.zoomFactor_,e-n),l=Math.floor(o*t),h=Math.floor(s*t);if(e<n)return(0,r.T)(l,l,h,h,i);const c=Math.floor(t*(o+1))-1,a=Math.floor(t*(s+1))-1;return(0,r.T)(l,c,h,a,i)}const l=this.getTileCoordExtent(t,this.tmpExtent_);return this.getTileRangeForExtentAndZ(l,e,i)}getTileRangeForExtentAndZ(t,e,i){this.getTileCoordForXYAndZ_(t[0],t[3],e,!1,g);const n=g[1],o=g[2];this.getTileCoordForXYAndZ_(t[2],t[1],e,!0,g);const s=g[1],l=g[2];return(0,r.T)(n,s,o,l,i)}getTileCoordCenter(t){const e=this.getOrigin(t[0]),i=this.getResolution(t[0]),r=(0,u.Pq)(this.getTileSize(t[0]),this.tmpSize_);return[e[0]+(t[1]+.5)*r[0]*i,e[1]-(t[2]+.5)*r[1]*i]}getTileCoordExtent(t,e){const i=this.getOrigin(t[0]),r=this.getResolution(t[0]),n=(0,u.Pq)(this.getTileSize(t[0]),this.tmpSize_),o=i[0]+t[1]*n[0]*r,s=i[1]-(t[2]+1)*n[1]*r,h=o+n[0]*r,c=s+n[1]*r;return(0,l.T9)(o,s,h,c,e)}getTileCoordForCoordAndResolution(t,e,i){return this.getTileCoordForXYAndResolution_(t[0],t[1],e,!1,i)}getTileCoordForXYAndResolution_(t,e,i,r,n){const o=this.getZForResolution(i),l=i/this.getResolution(o),c=this.getOrigin(o),a=(0,u.Pq)(this.getTileSize(o),this.tmpSize_);let g=l*(t-c[0])/i/a[0],d=l*(c[1]-e)/i/a[1];return r?(g=(0,s.mD)(g,5)-1,d=(0,s.mD)(d,5)-1):(g=(0,s.GW)(g,5),d=(0,s.GW)(d,5)),(0,h.T9)(o,g,d,n)}getTileCoordForXYAndZ_(t,e,i,r,n){const o=this.getOrigin(i),l=this.getResolution(i),c=(0,u.Pq)(this.getTileSize(i),this.tmpSize_);let a=(t-o[0])/l/c[0],g=(o[1]-e)/l/c[1];return r?(a=(0,s.mD)(a,5)-1,g=(0,s.mD)(g,5)-1):(a=(0,s.GW)(a,5),g=(0,s.GW)(g,5)),(0,h.T9)(i,a,g,n)}getTileCoordForCoordAndZ(t,e,i){return this.getTileCoordForXYAndZ_(t[0],t[1],e,!1,i)}getTileCoordResolution(t){return this.resolutions_[t[0]]}getTileSize(t){return this.tileSize_?this.tileSize_:this.tileSizes_[t]}getFullTileRange(t){return this.fullTileRanges_?this.fullTileRanges_[t]:this.extent_?this.getTileRangeForExtentAndZ(this.extent_,t):null}getZForResolution(t,e){const i=(0,a.h7)(this.resolutions_,t,e||0);return(0,s.uZ)(i,this.minZoom,this.maxZoom)}tileCoordIntersectsViewport(t,e){return(0,c.mV)(e,0,e.length,2,this.getTileCoordExtent(t))}calculateTileRanges_(t){const e=this.resolutions_.length,i=new Array(e);for(let r=this.minZoom;r<e;++r)i[r]=this.getTileRangeForExtentAndZ(t,r);this.fullTileRanges_=i}}},989434:(t,e,i)=>{"use strict";i.d(e,{uR:()=>l,Un:()=>h,Gk:()=>c});var r=i(438906),n=i(921882),o=i(570701);function s(t,e){const i=/\{z\}/g,n=/\{x\}/g,o=/\{y\}/g,s=/\{-y\}/g;return function(l,h,c){if(l)return t.replace(i,l[0].toString()).replace(n,l[1].toString()).replace(o,l[2].toString()).replace(s,(function(){const t=l[0],i=e.getFullTileRange(t);return(0,r.h)(i,55),(i.getHeight()-l[2]-1).toString()}))}}function l(t,e){const i=t.length,r=new Array(i);for(let n=0;n<i;++n)r[n]=s(t[n],e);return h(r)}function h(t){return 1===t.length?t[0]:function(e,i,r){if(!e)return;const s=(0,o.vp)(e),l=(0,n.$W)(s,t.length);return t[l](e,i,r)}}function c(t){const e=[];let i=/\{([a-z])-([a-z])\}/.exec(t);if(i){const r=i[1].charCodeAt(0),n=i[2].charCodeAt(0);let o;for(o=r;o<=n;++o)e.push(t.replace(i[0],String.fromCharCode(o)));return e}if(i=/\{(\d+)-(\d+)\}/.exec(t),i){const r=parseInt(i[2],10);for(let n=parseInt(i[1],10);n<=r;n++)e.push(t.replace(i[0],n.toString()));return e}return e.push(t),e}},578487:(t,e,i)=>{"use strict";function r(t,e){const i=[];Object.keys(e).forEach((function(t){null!==e[t]&&void 0!==e[t]&&i.push(t+"="+encodeURIComponent(e[t]))}));const r=i.join("&");return t=t.replace(/[?&]$/,""),(t+=t.includes("?")?"&":"?")+r}i.d(e,{B:()=>r})}}]);
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9886],{69555:(e,t)=>{"use strict";e.exports=function(e){var t=e||"-9,999.90";t=t.trim();var a="",i="",r="",n=-1,l=-1,g="",s="";for(/^([^()]+)?[(]([^09#]+)?[09#., ]+([^)]+)?[)](.+)?$/.test(t)?(a="brackets",r="(",g=(l=t.indexOf("("))>0?t.slice(0,l):t.search(/0|9|#/)>0?t.slice(1,t.search(/0|9|#/)):"",i=")",(n=(t=t.slice(g.length+1)).indexOf(")"))<t.length-1?(s=t.slice(n+1),t=t.slice(0,n)):(s=t.search(/[^09#,.]([^09#](.+)?)?[)]$/)>-1?t.slice(t.search(/[^09#,.]([^09#](.+)?)?[)]$/),-1):"",t=t.slice(0,t.length-s.length-1),n=0)):-1===t.indexOf("-")?(a="none",g=t.search(/[.,]?[09#]/)>0?t.slice(0,t.search(/[.,]?[09#]/)):"",s=(t=t.slice(g.length)).search(/[^09#,.]([^09#]+|$)/)>-1?t.slice(t.search(/[^09#,.]([^09#]+|$)/)):"",t=t.slice(0,t.length-s.length)):/^([^09#-]+)?-.+$/.test(t)?(a="left",r="-",g=(l=t.indexOf("-"))>0?t.slice(0,l):t.search(/[09#]/)>0?t.slice(1,t.search(/[09#]/)):"",s=(t=t.slice(g.length+1)).search(/[^09#,.]([^09#]+|$)/)>-1?t.slice(t.search(/[^09#,.]([^09#]+|$)/)):"",t=t.slice(0,t.length-s.length)):(g=t.search(/[09#]/)>0?t.slice(0,t.search(/[09#]/)):"",a="right",i="-",(n=(t=t.slice(g.length)).lastIndexOf("-"))<t.length-1?(s=t.slice(n+1),t=t.slice(0,n)):(s=t.search(/[^09#,.]([^09#](.+)?)?-$/)>-1?t.slice(t.search(/[^09#,.]([^09#](.+)?)?-$/),t.length-1):"",t=t.slice(0,t.length-s.length-1),n=0));0===l&&g&&" "===g[0];)r+=" ",g=g.slice(1);for(;0===n&&s&&" "===s[s.length-1];)i=" "+i,s=s.slice(0,-1);for(;l>0&&t.length&&" "===t[0];)r+=" ",t=t.slice(1);for(;n>0&&t.length&&" "===t[t.length-1];)i=" "+i,t=t.slice(0,-1);var f=t,o="",c="",h="",p="",u="";for(","===t[t.length-1]&&t.indexOf(",")===t.length-1?o=",":t.indexOf(".")>-1?o=t.indexOf(".")===t.lastIndexOf(".")?".":",":t.indexOf(",")>-1&&(o=t.indexOf(",")===t.lastIndexOf(",")?",":"."),o&&t.indexOf(o)>-1?(c=t.slice(t.indexOf(o)+1),h=t.slice(0,t.indexOf(o))):(h=t,c="");c.length&&c.search(/[., ]$/)>-1;)c=c.slice(0,-1);for(;h.length&&h[0].search(/[., ]/)>-1;)h=h.slice(1);return h&&h.search(/[., ]/)>0&&(u=h[h.search(/[., ]/)],h=h.replace(/[., ]/g,"")),c&&c.search(/[., ]/)>0&&(p=c[c.search(/[., ]/)],c=c.replace(/[., ]/g,"")),!(h.length&&!/^[09#]+$/.test(h)||c.length&&!/^[09#]+$/.test(c))&&{negativeType:a,negativeLeftPos:l,negativeRightPos:n,negativeLeftSymbol:r,negativeRightSymbol:i,suffix:s,prefix:g,absMask:f,decimalChar:o,integerSeparator:u,decimalsSeparator:p,padLeft:h.indexOf("0")>=0?h.length-h.indexOf("0"):-1,maxLeft:0===h.length||"0"===h[0]||"9"===h[0]?h.length:-1,padRight:c.indexOf("0")>=0?c.lastIndexOf("0")+1:-1,maxRight:0===c.length||"0"===c[c.length-1]||"9"===c[c.length-1]?c.length:-1}}},395877:(e,t,a)=>{"use strict";var i=a(69555),r=a(10793);e.exports=function(e,t,a){var n=[];return t&&(n=i(t.trim())),e=null===e?"":e,e=(e+="").length?e.trim():"",r({negativeType:n.negativeType,negativeLeftSymbol:n.negativeLeftSymbol,negativeRightSymbol:n.negativeRightSymbol,negativeLeftOut:0===n.negativeLeftPos,negativeRightOut:0===n.negativeRightPos,prefix:n.prefix,suffix:n.suffix,integerSeparator:n.integerSeparator,decimalsSeparator:n.decimalsSeparator,decimal:n.decimalChar,padLeft:n.padLeft,padRight:n.padRight,round:n.maxRight,truncate:null})(e,a)}},10793:e=>{e.exports=function(e){if((e=e||{}).negativeType=e.negativeType||("R"===e.negative?"right":"left"),"string"!=typeof e.negativeLeftSymbol)switch(e.negativeType){case"left":e.negativeLeftSymbol="-";break;case"brackets":e.negativeLeftSymbol="(";break;default:e.negativeLeftSymbol=""}if("string"!=typeof e.negativeRightSymbol)switch(e.negativeType){case"right":e.negativeRightSymbol="-";break;case"brackets":e.negativeRightSymbol=")";break;default:e.negativeRightSymbol=""}function t(t,a){if(a=a||{},!t&&0!==t)return"";var i,r,n=[],l="-"===(t=""+t).charAt(0);return t=t.replace(/^\-/g,""),e.negativeLeftOut||a.noUnits||n.push(e.prefix),l&&n.push(e.negativeLeftSymbol),e.negativeLeftOut&&!a.noUnits&&n.push(e.prefix),t=t.split("."),null!=e.round&&function(e,t){if(e[1]&&t>=0&&e[1].length>t){var a=e[1].slice(0,t);if(+e[1].substr(t,1)>=5){for(var i="";"0"===a.charAt(0);)i+="0",a=a.substr(1);(a=i+(a=+a+1+"")).length>t&&(e[0]=+e[0]+ +a.charAt(0)+"",a=a.substring(1))}e[1]=a}}(t,e.round),null!=e.truncate&&(t[1]=(i=t[1],r=e.truncate,i&&(i+=""),i&&i.length>r?i.substr(0,r):i)),e.padLeft>0&&(t[0]=function(e,t){e+="";for(var a=[];a.length+e.length<t;)a.push("0");return a.join("")+e}(t[0],e.padLeft)),e.padRight>0&&(t[1]=function(e,t){e?e+="":e="";for(var a=[];a.length+e.length<t;)a.push("0");return e+a.join("")}(t[1],e.padRight)),!a.noSeparator&&t[1]&&(t[1]=function(e,t){if(e+="",!t)return e;for(var a=/(\d{3})(\d+)/;a.test(e);)e=e.replace(a,"$1"+t+"$2");return e}(t[1],e.decimalsSeparator)),!a.noSeparator&&t[0]&&(t[0]=function(e,t){if(e+="",!t)return e;for(var a=/(\d+)(\d{3})/;a.test(e);)e=e.replace(a,"$1"+t+"$2");return e}(t[0],e.integerSeparator)),n.push(t[0]),t[1]&&(n.push(e.decimal),n.push(t[1])),e.negativeRightOut&&!a.noUnits&&n.push(e.suffix),l&&n.push(e.negativeRightSymbol),e.negativeRightOut||a.noUnits||n.push(e.suffix),n.join("")}return"boolean"!=typeof e.negativeLeftOut&&(e.negativeLeftOut=!1!==e.negativeOut),"boolean"!=typeof e.negativeRightOut&&(e.negativeRightOut=!1!==e.negativeOut),e.prefix=e.prefix||"",e.suffix=e.suffix||"","string"!=typeof e.integerSeparator&&(e.integerSeparator="string"==typeof e.separator?e.separator:","),e.decimalsSeparator="string"==typeof e.decimalsSeparator?e.decimalsSeparator:"",e.decimal=e.decimal||".",e.padLeft=e.padLeft||-1,e.padRight=e.padRight||-1,t.negative=e.negative,t.negativeOut=e.negativeOut,t.negativeType=e.negativeType,t.negativeLeftOut=e.negativeLeftOut,t.negativeLeftSymbol=e.negativeLeftSymbol,t.negativeRightOut=e.negativeRightOut,t.negativeRightSymbol=e.negativeRightSymbol,t.prefix=e.prefix,t.suffix=e.suffix,t.separate=e.separate,t.integerSeparator=e.integerSeparator,t.decimalsSeparator=e.decimalsSeparator,t.decimal=e.decimal,t.padLeft=e.padLeft,t.padRight=e.padRight,t.truncate=e.truncate,t.round=e.round,t.unformat=function(t,a){a=a||[],e.allowedSeparators&&e.allowedSeparators.forEach((function(e){a.push(e)})),a.push(e.integerSeparator),a.push(e.decimalsSeparator);var i=t=(t=t.replace(e.prefix,"")).replace(e.suffix,"");do{t=i;for(var r=0;r<a.length;r++)i=i.replace(a[r],"")}while(i!=t);return t},t}},509886:(e,t,a)=>{"use strict";t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e};t.default=function(e){var t=i({},s,e),a=t.decimal,g={formats:{default:"-#"+t.grouping+"##0"+a},parse:function(e,t,a){if(a){var i=(0,l.default)(a),r=i.negativeLeftSymbol&&-1!==e.indexOf(i.negativeLeftSymbol)||i.negativeRightSymbol&&-1!==e.indexOf(i.negativeRightSymbol),n=(e=e.replace(i.negativeLeftSymbol,"").replace(i.negativeRightSymbol,"").replace(i.prefix,"").replace(i.suffix,"")).split(i.decimalChar);i.integerSeperator&&(n[0]=n[0].replace(new RegExp("\\"+i.integerSeperator,"g"))),i.decimalsSeparator&&(n[1]=n[1].replace(new RegExp("\\"+i.decimalsSeparator,"g"))),""===n[1]&&n.pop(),e=+(e=n.join(".")),r&&(e*=-1)}else e=parseFloat(e);return isNaN(e)?null:e},format:function(e,t){return(0,n.default)(e,t)},decimalChar:function(e){return e&&(0,l.default)(e).decimalsSeparator||"."},precision:function(e){var t=(0,l.default)(e);return-1!==t.maxRight?t.maxRight:null}};return r.default.setNumberLocalizer(g),g};var r=g(a(577036)),n=g(a(395877)),l=g(a(69555));function g(e){return e&&e.__esModule?e:{default:e}}var s={decimal:".",grouping:","};e.exports=t.default}}]);
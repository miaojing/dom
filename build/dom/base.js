//! Copyright 2015, kissy-dom@1.0.2 MIT Licensed, build time: Thu, 05 Feb 2015 06:02:35 GMT 
modulex.add("dom/base",["modulex-util","modulex-ua","modulex-feature","dom/selector"],function(e,t,r){var n,o,i,a,u,l,f,c,s,d,p,v,m=e("modulex-util"),h=e("modulex-ua"),g=e("modulex-feature"),y=e("dom/selector");n=function(e){e={};var t=m,r=window,n=r.document,o=h,i=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,a={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},u=e={version:"1.0.2",isCustomDomain:function(e){e=e||r,e=u.get(e);var t=e.document.domain,n=e.location.hostname;return t!==n&&t!=="["+n+"]"},getEmptyIframeSrc:function(e){return e=e||r,e=u.get(e),o.ie&&u.isCustomDomain(e)?"javascript:void(function(){"+encodeURIComponent('document.open();document.domain="'+e.document.domain+'";document.close();')+"}())":""},NodeType:a,getWindow:function(e){if(!e)return r;if(e=u.get(e),t.isWindow(e))return e;var n=e;return n.nodeType!==a.DOCUMENT_NODE&&(n=e.ownerDocument),n.defaultView||n.parentWindow},getDocument:function(e){return e?(e=u.get(e),t.isWindow(e)?e.document:e.nodeType===a.DOCUMENT_NODE?e:e.ownerDocument):n},isDomNodeList:function(e){return e&&!e.nodeType&&e.item&&!e.setTimeout},nodeName:function(e){var t=u.get(e),r=t.nodeName.toLowerCase();if(o.ie){var n=t.scopeName;n&&"HTML"!==n&&(r=n.toLowerCase()+":"+r)}return r},_RE_NUM_NO_PX:new RegExp("^("+i+")(?!px)[a-z%]+$","i")};return e}(),o=function(e){function t(e){return null==e?"":e+""}function r(e,t){t=N[t]||t;var r=_[t];return r&&r.get?r.get(e,t):e[t]}e={};var o=m,i=n,a=document,u=i.NodeType,l=a&&a.documentElement,f="",c=i.nodeName,s=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,d=/^(?:button|input|object|select|textarea)$/i,p=/^a(?:rea)?$/i,v=/:|^on/,h=/\r/g,g={},y={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1,scrollTop:1,scrollLeft:1},E={tabindex:{get:function(e){var t=e.getAttributeNode("tabindex");return t&&t.specified?parseInt(t.value,10):d.test(e.nodeName)||p.test(e.nodeName)&&e.href?0:void 0}}},N={hidefocus:"hideFocus",tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},T={get:function(e,t){return i.prop(e,t)?t.toLowerCase():void 0},set:function(e,t,r){var n;return t===!1?i.removeAttr(e,r):(n=N[r]||r,n in e&&(e[n]=!0),e.setAttribute(r,r.toLowerCase())),r}},_={},D={},C={select:{get:function(e){var t,r,n,o=e.selectedIndex,a=e.options,u="select-one"===String(e.type);if(0>o)return null;if(u)return i.val(a[o]);for(t=[],r=0,n=a.length;n>r;++r)a[r].selected&&t.push(i.val(a[r]));return t},set:function(e,t){var r=o.makeArray(t),n=e.options;return o.each(n,function(e){e.selected=o.inArray(i.val(e),r)}),r.length||(e.selectedIndex=-1),r}}};return o.each(["radio","checkbox"],function(e){C[e]={get:function(e){return null===e.getAttribute("value")?"on":e.value},set:function(e,t){return o.isArray(t)?(e.checked=o.inArray(i.val(e),t),1):void 0}}}),E.style={get:function(e){return e.style.cssText}},o.mix(i,{_valHooks:C,_propFix:N,_attrHooks:E,_propHooks:_,_attrNodeHook:D,_attrFix:g,prop:function(e,t,n){var a,u,l,f=i.query(e);if("object"==typeof t)return o.each(t,function(e,t){i.prop(f,t,e)}),void 0;if(t=N[t]||t,l=_[t],void 0!==n)for(a=f.length-1;a>=0;a--)u=f[a],l&&l.set?l.set(u,n,t):u[t]=n;else if(f.length)return r(f[0],t);return void 0},hasProp:function(e,t){var n,o,a=i.query(e),u=a.length;for(n=0;u>n;n++)if(o=a[n],void 0!==r(o,t))return!0;return!1},removeProp:function(e,t){t=N[t]||t;var r,n,o=i.query(e);for(r=o.length-1;r>=0;r--){n=o[r];try{n[t]=void 0,delete n[t]}catch(a){}}},attr:function(e,t,r,n){var o,a,l,d=i.query(e),p=d[0];if("object"==typeof t){n=r;for(var m in t)i.attr(d,m,t[m],n);return void 0}if(n&&y[t])return i[t](e,r);if(t=t.toLowerCase(),n&&y[t])return i[t](e,r);if(t=g[t]||t,o=s.test(t)?T:v.test(t)?D:E[t],void 0===r){if(p&&p.nodeType===u.ELEMENT_NODE){if("form"===c(p)&&(o=D),o&&o.get)return o.get(p,t);if(l=p.getAttribute(t),""===l){var h=p.getAttributeNode(t);if(!h||!h.specified)return void 0}return null===l?void 0:l}}else for(a=d.length-1;a>=0;a--)p=d[a],p&&p.nodeType===u.ELEMENT_NODE&&("form"===c(p)&&(o=D),o&&o.set?o.set(p,r,t):p.setAttribute(t,f+r));return void 0},removeAttr:function(e,t){t=t.toLowerCase(),t=g[t]||t;var r,n,o,a=i.query(e);for(o=a.length-1;o>=0;o--)n=a[o],n.nodeType===u.ELEMENT_NODE&&(n.removeAttribute(t),s.test(t)&&(r=N[t]||t)in n&&(n[r]=!1))},hasAttr:l&&!l.hasAttribute?function(e,t){t=t.toLowerCase();var r,n,o,a=i.query(e);for(r=0;r<a.length;r++)if(n=a[r],o=n.getAttributeNode(t),o&&o.specified)return!0;return!1}:function(e,t){for(var r=i.query(e),n=r.length,o=0;n>o;o++)if(r[o].hasAttribute(t))return!0;return!1},val:function(e,r){var n,a,u,l,f,s;if(void 0===r)return u=i.get(e),u?(n=C[c(u)]||C[u.type],n&&"get"in n&&void 0!==(a=n.get(u,"value"))?a:(a=u.value,"string"==typeof a?a.replace(h,""):null==a?"":a)):void 0;for(l=i.query(e),f=l.length-1;f>=0;f--){if(u=l[f],1!==u.nodeType)return void 0;s=r,null==s?s="":"number"==typeof s?s+="":o.isArray(s)&&(s=o.map(s,t)),n=C[c(u)]||C[u.type];var d=n&&"set"in n;d&&void 0!==n.set(u,s,"value")||(u.value=s)}return void 0},text:function(e,t){var r,n,o,a;if(void 0===t)return r=i.get(e),i._getText(r);for(n=i.query(e),o=n.length-1;o>=0;o--)r=n[o],a=r.nodeType,a===u.ELEMENT_NODE?(i.cleanData(r.getElementsByTagName("*")),"textContent"in r?r.textContent=t:r.innerText=t):(a===u.TEXT_NODE||a===u.CDATA_SECTION_NODE)&&(r.nodeValue=t);return void 0},_getText:function(e){return e.textContent}}),e}(),i=function(e){e={};var t=g;if(!t.isClassListSupported()){var r=m,n=" ",o=/[\n\t\r]/g,i=function(e){return(n+e+n).replace(o,n)};e={_hasClass:function(e,t){var r,o,a,u=e.className;if(u){for(r=i(u),a=0,o=t.length;o>a;a++)if(r.indexOf(n+t[a]+n)<0)return!1;return!0}return!1},_addClass:function(e,t){var o,a,u,l=e.className,f=t.length;if(l){for(o=i(l),a=l,u=0;f>u;u++)o.indexOf(n+t[u]+n)<0&&(a+=n+t[u]);a=r.trim(a)}else a=t.join(" ");e.className=a},_removeClass:function(e,t){var o,a,u,l=e.className,f=t.length;if(l&&f){for(o=i(l),a=0;f>a;a++)for(u=n+t[a]+n;o.indexOf(u)>=0;)o=o.replace(u,n);e.className=r.trim(o)}},_toggleClass:function(e,t,r){var n,o,i,a,u=this,l=[],f=[],c=t.length;for(n=0;c>n;n++)o=t[n],i=u._hasClass(e,[o]),a=i?r!==!0&&"remove":r!==!1&&"add","remove"===a?l.push(o):"add"===a&&f.push(o);f.length&&u._addClass(e,f),l.length&&u._removeClass(e,l)}}}return e}(),a=function(e){function t(e,t){return e.getElementsByTagName(t)}function o(e,t){var r=e&&e!==y?e.createElement(_):C;return t&&r===C&&(r.innerHTML=""),r}function i(e,t){var r=o(t);return r.innerHTML="m<div>"+e+"</div>",r.lastChild}function a(e){try{return e.innerHTML="",void 0}catch(t){}for(var r;r=e.lastChild;)u(r,e)}function u(e,t){t&&(L&&t.canHaveChildren&&"removeNode"in e?(e.firstChild&&a(e),e.removeNode(!1)):t.removeChild(e))}function l(e,r,n){var o=r.nodeType;if(o===E.DOCUMENT_FRAGMENT_NODE)for(var i=r.childNodes,a=n.childNodes,u=0;i[u];)a[u]&&l(e,i[u],a[u]),u++;else if(o===E.ELEMENT_NODE)for(var f=t(r,"*"),c=t(n,"*"),s=0;f[s];)c[s]&&e(f[s],c[s]),s++}function f(e,t){var n,o,i=r.require("event/dom");if(t.nodeType!==E.ELEMENT_NODE||g.hasData(e)){n=g.data(e);for(o in n)g.data(t,o,n[o]);i&&i.clone(e,t)}}function c(e,t){var r=e.nodeType;return r===E.ELEMENT_NODE?g.attr(e,t,!0):r===E.DOCUMENT_FRAGMENT_NODE&&g.attr(e.childNodes,t,!0),e}function s(e){var t,r,n,o=null;if(e&&(e.push||e.item)&&e[0])for(r=e[0].ownerDocument,o=r.createDocumentFragment(),e=v.makeArray(e),t=0,n=e.length;n>t;t++)o.appendChild(e[t]);else console.error("Unable to convert "+e+" to fragment.");return o}e={};var d,p,v=m,g=n,y=document,E=g.NodeType,N=h,T=N.ieMode,_="div",D="parentNode",C=y&&y.createElement(_),b=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,w=/<([\w:]+)/,x=/^\s+/,O=/\s+$/,L=!!(T&&9>T),M=L,A=/<|&#?\w+;/,q=y&&"outerHTML"in y.documentElement,S=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,W=g._creators={div:i},H={area:"map",thead:"table",td:"tr",th:"tr",tr:"tbody",tbody:"table",tfoot:"table",caption:"table",colgroup:"table",col:"colgroup",legend:"fieldset"},B="<{tag}>{html}</{tag}>";for(p in H)!function(e){W[p]=function(t,r){return g.create(v.substitute(B,{tag:e,html:t}),d,r)}}(H[p]);return W.option=W.optgroup=function(e,t){return g.create('<select multiple="multiple">'+e+"</select>",void 0,t)},H.option=H.optgroup=1,v.mix(g,{create:function(e,t,r,n){var o=null;if(!e)return o;if(e.nodeType)return g.clone(e);if("string"!=typeof e)return o;void 0===n&&(n=!0),n&&(e=v.trim(e));var a,u,l,f,d,p=g._creators,m=r||y,h=_;return A.test(e)?(l=S.exec(e))?o=m.createElement(l[1]):(e=e.replace(b,"<$1></$2>"),(l=w.exec(e))&&(f=l[1])&&(h=f.toLowerCase()),a=(p[h]||i)(e,m),M&&(u=e.match(x))&&a.insertBefore(m.createTextNode(u[0]),a.firstChild),M&&/\S/.test(e)&&(u=e.match(O))&&a.appendChild(m.createTextNode(u[0])),d=a.childNodes,1===d.length?o=d[0][D].removeChild(d[0]):d.length?o=s(d):console.error(e+" : create node error")):o=m.createTextNode(e),t?c(o,t):o},_fixCloneAttributes:function(e,t){var r,n,o=e.nodeName.toLowerCase(),i=(e.type||"").toLowerCase();"textarea"===o?(t.defaultValue=e.defaultValue,t.value=e.value):"input"!==o||"checkbox"!==i&&"radio"!==i||(n=e.checked,n&&(t.defaultChecked=t.checked=n),r=e.value,t.value!==r&&(t.value=r))},_defaultCreator:i,html:function(e,r,n){var i,a,u,l=g.query(e),f=l[0],c=!1;if(!f)return null;if(void 0===r){if(f.nodeType===E.ELEMENT_NODE)return f.innerHTML;if(f.nodeType===E.DOCUMENT_FRAGMENT_NODE){var s=o(f.ownerDocument,1);return s.appendChild(f),s.innerHTML}return null}if(r+="",!(r.match(/<(?:script|style|link)/i)||M&&r.match(x)||H[(r.match(w)||["",""])[1].toLowerCase()]))try{for(a=l.length-1;a>=0;a--)u=l[a],u.nodeType===E.ELEMENT_NODE&&(g.cleanData(t(u,"*")),u.innerHTML=r);c=!0}catch(d){}return c||(i=g.create(r,0,f.ownerDocument,0),g.empty(l),g.append(i,l,n)),void 0},outerHtml:function(e,t,r){var n,i,a,u=g.query(e),l=u.length,f=u[0];if(!f)return null;if(void 0===t)return q&&f.nodeType!==E.DOCUMENT_FRAGMENT_NODE?f.outerHTML:(n=o(f.ownerDocument,1),n.appendChild(g.clone(f,!0)),n.innerHTML);if(t+="",!t.match(/<(?:script|style|link)/i)&&q)for(i=l-1;i>=0;i--)f=u[i],f.nodeType===E.ELEMENT_NODE&&(g.cleanData(f,1),f.outerHTML=t);else a=g.create(t,0,f.ownerDocument,0),g.insertBefore(a,u,r),g.remove(u);return void 0},remove:function(e,n){var o,i,a,l=g.query(e),f=r.require("event/dom");for(a=l.length-1;a>=0;a--)o=l[a],n||o.nodeType!==E.ELEMENT_NODE||(i=v.makeArray(t(o,"*")),i.push(o),g.removeData(i),f&&f.detach(i)),u(o,o.parentNode)},clone:function(e,t,r,n){"object"==typeof t&&(n=t.deepWithDataAndEvent,r=t.withDataAndEvent,t=t.deep);var o,i,a=g.get(e),u=g._fixCloneAttributes;return a?(i=a.nodeType,o=a.cloneNode(t),(i===E.ELEMENT_NODE||i===E.DOCUMENT_FRAGMENT_NODE)&&(u&&i===E.ELEMENT_NODE&&u(a,o),t&&u&&l(u,a,o)),r&&(f(a,o),t&&n&&l(f,a,o)),o):null},empty:function(e){var t,r,n=g.query(e);for(r=n.length-1;r>=0;r--)t=n[r],g.remove(t.childNodes)},_nodeListToFragment:s}),g.outerHTML=g.outerHtml,e}(),u=function(e){e={};var t=m,o=n,i=window,a="_ks_data_"+t.now(),u={},l={},f={applet:1,object:1,embed:1},c={hasData:function(e,r){if(e)if(void 0!==r){if(r in e)return!0}else if(!t.isEmptyObject(e))return!0;return!1}},s={hasData:function(e,t){if(e==i)return s.hasData(l,t);var r=e[a];return c.hasData(r,t)},data:function(e,t,r){if(e==i)return s.data(l,t,r);var n=e[a];return void 0===r?void 0!==t?n&&n[t]:n=e[a]=e[a]||{}:(n=e[a]=e[a]||{},n[t]=r,void 0)},removeData:function(e,r){if(e==i)return s.removeData(l,r);var n=e[a];if(void 0!==r)delete n[r],t.isEmptyObject(n)&&s.removeData(e);else try{delete e[a]}catch(o){e[a]=void 0}}},d={hasData:function(e,t){var r=e[a];if(!r)return!1;var n=u[r];return c.hasData(n,t)},data:function(e,r,n){if(f[e.nodeName.toLowerCase()])return void 0;var o,i=e[a];if(!i){if(void 0!==r&&void 0===n)return void 0;i=e[a]=t.guid()}return o=u[i],void 0===n?void 0!==r?o&&o[r]:o=u[i]=u[i]||{}:(o=u[i]=u[i]||{},o[r]=n,void 0)},removeData:function(e,r){var n,o=e[a];if(o)if(n=u[o],void 0!==r)delete n[r],t.isEmptyObject(n)&&d.removeData(e);else{delete u[o];try{delete e[a]}catch(i){e[a]=void 0}e.removeAttribute&&e.removeAttribute(a)}}};return t.mix(o,{__EXPANDO:a,hasData:function(e,t){for(var r=!1,n=o.query(e),i=0;i<n.length;i++){var a=n[i];if(r=a.nodeType?d.hasData(a,t):s.hasData(a,t))return r}return r},data:function(e,t,r){var n=o.query(e),i=n[0];if("object"==typeof t){for(var a in t)o.data(n,a,t[a]);return void 0}if(void 0===r){if(i)return i.nodeType?d.data(i,t):s.data(i,t)}else for(var u=n.length-1;u>=0;u--)i=n[u],i.nodeType?d.data(i,t,r):s.data(i,t,r);return void 0},removeData:function(e,t){var r,n,i=o.query(e);for(n=i.length-1;n>=0;n--)r=i[n],r.nodeType?d.removeData(r,t):s.removeData(r,t)},cleanData:function(e,n){var i,a,u=o.query(e),l=r.require("event/dom");for(a=u.length-1;a>=0;a--)if(i=u[a],i.nodeType){var f=n&&t.makeArray(i.getElementsByTagName("*"))||[];f.push(i);for(var c=0,p=f.length;p>c;c++)d.removeData(f[c]);l&&l.detach(f)}else s.removeData(i)}}),e}(),l=function(t){function r(e){return!e.type||g.test(e.type)}function o(e,t){var n,i,a,u=[];for(n=0;e[n];n++)if(i=e[n],a=d(i),i.nodeType===c.DOCUMENT_FRAGMENT_NODE)u.push.apply(u,o(p(i.childNodes),t));else if("script"===a&&r(i))i.parentNode&&i.parentNode.removeChild(i),t&&t.push(i);else{if(i.nodeType===c.ELEMENT_NODE&&!s.test(a)){var l,f,m=[],h=i.getElementsByTagName("script");for(f=0;f<h.length;f++)l=h[f],r(l)&&m.push(l);v.apply(e,[n+1,0].concat(m))}u.push(i)}return u}function i(t){if(t.src)e.load(t.src);else{var r=u.trim(t.text||t.textContent||t.innerHTML||"");r&&u.globalEval(r)}}function a(e,t,r,n){e=l.query(e),n&&(n=[]),e=o(e,n),l._fixInsertionChecked&&l._fixInsertionChecked(e),t=l.query(t);var a,f,c,s,d,p=e.length,v=t.length;if((p||n&&n.length)&&v)for(a=l._nodeListToFragment(e),v>1&&(d=l.clone(a,!0),t=u.makeArray(t)),f=0;v>f;f++)c=t[f],a&&(s=f>0?l.clone(d,!0):a,r(s,c)),n&&n.length&&u.each(n,i)}t={};var u=m,l=n,f="parentNode",c=l.NodeType,s=/^(?:button|input|object|select|textarea)$/i,d=l.nodeName,p=u.makeArray,v=[].splice,h="nextSibling",g=/\/(java|ecma)script/i;return u.mix(l,{_fixInsertionChecked:null,insertBefore:function(e,t,r){a(e,t,function(e,t){t[f]&&t[f].insertBefore(e,t)},r)},insertAfter:function(e,t,r){a(e,t,function(e,t){t[f]&&t[f].insertBefore(e,t[h])},r)},appendTo:function(e,t,r){a(e,t,function(e,t){t.appendChild(e)},r)},prependTo:function(e,t,r){a(e,t,function(e,t){t.insertBefore(e,t.firstChild)},r)},wrapAll:function(e,t){t=l.clone(l.get(t),!0),e=l.query(e),e[0].parentNode&&l.insertBefore(t,e[0]);for(var r;(r=t.firstChild)&&1===r.nodeType;)t=r;l.appendTo(e,t)},wrap:function(e,t){e=l.query(e),t=l.get(t),u.each(e,function(e){l.wrapAll(e,t)})},wrapInner:function(e,t){e=l.query(e),t=l.get(t),u.each(e,function(e){var r=e.childNodes;r.length?l.wrapAll(r,t):e.appendChild(t)})},unwrap:function(e){e=l.query(e),u.each(e,function(e){var t=e.parentNode;l.replaceWith(t,t.childNodes)})},replaceWith:function(e,t){var r=l.query(e);t=l.query(t),l.remove(t,!0),l.insertBefore(t,r),l.remove(r)}}),u.each({prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},function(e,t){l[t]=l[e]}),t}(),f=function(e){function t(e){var t,r,n,o=e.ownerDocument,i=o.body;return e.getBoundingClientRect?(t=e.getBoundingClientRect(),r=t[x],n=t[O],r-=d.clientLeft||i.clientLeft||0,n-=d.clientTop||i.clientTop||0,{left:r,top:n}):{left:0,top:0}}function r(e){var r=t(e),n=p(e);return r.left+=u[L](n),r.top+=u[M](n),r}function o(e,n){var o,i={left:0,top:0},a=p(e),u=e;n=n||a;do o=a==n?r(u):t(u),i.left+=o.left,i.top+=o.top;while(a&&a!=n&&(u=a.frameElement)&&(a=a.parent));return i}function i(e,t){"static"===u.css(e,E)&&(e.style[E]=N);var r,n,i=o(e),a={};for(n in t)r=parseFloat(u.css(e,n))||0,a[n]=r+t[n]-i[n];u.css(e,a)}e={};var a=m,u=n,l=window,f=h,c=l.document,s=u.NodeType,d=c&&c.documentElement,p=u.getWindow,v="CSS1Compat",g="compatMode",y=Math.max,E="position",N="relative",T="document",_="body",D="documentElement",C="viewport",b="scroll",w="client",x="left",O="top",L=b+"Left",M=b+"Top";return a.mix(u,{offset:function(e,t,r){var n;if(void 0===t){n=u.get(e);var a;return n&&(a=o(n,r)),a}var l,f=u.query(e);for(l=f.length-1;l>=0;l--)n=f[l],i(n,t);return void 0},scrollIntoView:function(e,t,r,n){var o,i;if(o=u.get(e)){t&&(t=u.get(t)),t||(t=o.ownerDocument),t.nodeType===s.DOCUMENT_NODE&&(t=p(t)),"object"==typeof r&&(n=r.allowHorizontalScroll,i=r.onlyScrollIfNeeded,r=r.alignWithTop),n=void 0===n?!0:n;var l,f,c,d,v,m,h,g,y,E,N=a.isWindow(t),T=u.offset(o),_=u.outerHeight(o),D=u.outerWidth(o);N?(h=t,E=u.height(h),y=u.width(h),g={left:u.scrollLeft(h),top:u.scrollTop(h)},v={left:T[x]-g[x],top:T[O]-g[O]},m={left:T[x]+D-(g[x]+y),top:T[O]+_-(g[O]+E)},d=g):(l=u.offset(t),f=t.clientHeight,c=t.clientWidth,d={left:u.scrollLeft(t),top:u.scrollTop(t)},v={left:T[x]-(l[x]+(parseFloat(u.css(t,"borderLeftWidth"))||0)),top:T[O]-(l[O]+(parseFloat(u.css(t,"borderTopWidth"))||0))},m={left:T[x]+D-(l[x]+c+(parseFloat(u.css(t,"borderRightWidth"))||0)),top:T[O]+_-(l[O]+f+(parseFloat(u.css(t,"borderBottomWidth"))||0))}),i?(v.top<0||m.top>0)&&(r===!0?u.scrollTop(t,d.top+v.top):r===!1?u.scrollTop(t,d.top+m.top):v.top<0?u.scrollTop(t,d.top+v.top):u.scrollTop(t,d.top+m.top)):(r=void 0===r?!0:!!r,r?u.scrollTop(t,d.top+v.top):u.scrollTop(t,d.top+m.top)),n&&(i?(v.left<0||m.left>0)&&(r===!0?u.scrollLeft(t,d.left+v.left):r===!1?u.scrollLeft(t,d.left+m.left):v.left<0?u.scrollLeft(t,d.left+v.left):u.scrollLeft(t,d.left+m.left)):(r=void 0===r?!0:!!r,r?u.scrollLeft(t,d.left+v.left):u.scrollLeft(t,d.left+m.left)))}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0,scrollTop:0,scrollLeft:0}),a.each(["Left","Top"],function(e,t){var r=b+e;u[r]=function(n,o){if("number"==typeof n)return arguments.callee(l,n);n=u.get(n);var i,a,f,c,d;return n&&n.nodeType===s.ELEMENT_NODE?void 0!==o?n[r]=parseFloat(o):i=n[r]:(c=p(n),void 0!==o?(o=parseFloat(o),a="Left"===e?o:u.scrollLeft(c),f="Top"===e?o:u.scrollTop(c),c.scrollTo(a,f)):(i=c["page"+(t?"Y":"X")+"Offset"],"number"!=typeof i&&(d=c[T],i=d[D][r],"number"!=typeof i&&(i=d[_][r])))),i}}),a.each(["Width","Height"],function(e){u["doc"+e]=function(t){t=u.get(t);var r=u.getDocument(t);return y(r[D][b+e],r[_][b+e],u[C+e](r))},u[C+e]=function(t){t=u.get(t);var r=p(t),n=r["inner"+e];if(f.mobile&&n)return n;var o=w+e,i=r[T],a=i[_],l=i[D],c=l[o];return i[g]===v&&c||a&&a[o]||c}}),e}(),c=function(e){function t(e){if(F[e])return F[e];var t=E(e);return t&&t.propertyName||e}function r(e){var t,r,n=R[e];return R[e]||(t=x.body||x.documentElement,r=x.createElement(e),v.prepend(r,t),n=v.css(r,"display"),t.removeChild(r),R[e]=n),n}function o(e,t,r){var n,o={},i=e.style;for(n in t)o[n]=i[n],i[n]=t[n];r.call(e);for(n in t)i[n]=o[n]}function i(e,r,n,o){var i,a,u;if(!(i=e.style))return void 0;if(r=o?r:P(r),u=k[r],r=t(r),void 0!==n){if(null===n||n===H?n=H:isNaN(Number(n))||W[r]||(n+=B),u&&u.set&&(n=u.set(e,n)),void 0!==n){try{i[r]=n}catch(l){}n===H&&i.removeAttribute&&i.removeAttribute(r)}return i.cssText||(N.webkit&&(i=e.outerHTML),e.removeAttribute("style")),void 0}return u&&"get"in u&&void 0!==(a=u.get(e,!1))||(a=i[r]),void 0===a?"":a}function a(e){var t,r=arguments;return 0!==e.offsetWidth?t=c.apply(void 0,r):o(e,j,function(){t=c.apply(void 0,r)}),t}function u(e,t,r,n){var o,i,a,u=0;for(i=0;i<t.length;i++)if(o=t[i])for(a=0;a<r.length;a++){var l;l="border"===o?o+r[a]+"Width":o+r[a],u+=parseFloat(v._getComputedStyle(e,l,n))||0}return u}function l(e,t){return"border-box"===v._getComputedStyle(e,"boxSizing",t)}function f(e){var t,r=e.ownerDocument;return r.defaultView&&(t=r.defaultView.getComputedStyle(e,null)),t}function c(e,t,r){if(p.isWindow(e))return t===L?v.viewportWidth(e):v.viewportHeight(e);if(9===e.nodeType)return t===L?v.docWidth(e):v.docHeight(e);var n=t===L?["Left","Right"]:["Top","Bottom"],o=t===L?e.offsetWidth:e.offsetHeight,i=f(e),a=l(e,i),c=0;(null==o||0>=o)&&(o=void 0,c=v._getComputedStyle(e,t,i),(null==c||Number(c)<0)&&(c=e.style[t]||0),c=parseFloat(c)||0),void 0===r&&(r=a?C:_);var s=void 0!==o||a,d=o||c;return r===_?s?d-u(e,["border","padding"],n,i):c:s?d+(r===C?0:r===D?-u(e,["border"],n,i):u(e,["margin"],n,i)):c+u(e,T.slice(r),n,i)}function s(e){var t,r,n={top:0,left:0};return"fixed"===v.css(e,"position")?r=e.getBoundingClientRect():(t=d(e),r=v.offset(e),n=v.offset(t),n.top+=parseFloat(v.css(t,"borderTopWidth"))||0,n.left+=parseFloat(v.css(t,"borderLeftWidth"))||0),r.top-=parseFloat(v.css(e,"marginTop"))||0,r.left-=parseFloat(v.css(e,"marginLeft"))||0,{top:r.top-n.top,left:r.left-n.left}}function d(e){for(var t=e.offsetParent||(e.ownerDocument||x).body;t&&!V.test(t.nodeName)&&"static"===v.css(t,"position");)t=t.offsetParent;return t}e={};var p=m,v=n,y=window,E=g.getCssVendorInfo,N=h,T=["margin","border","padding"],_=-1,D=2,C=1,b=0,w=v.nodeName,x=y.document||{},O=/^margin/,L="width",M="height",A="display",q=A+p.now(),S="none",W={fillOpacity:1,fontWeight:1,lineHeight:1,opacity:1,orphans:1,widows:1,zIndex:1,zoom:1},H="",B="px",I=/\d(?!px)[a-z%]+$/i,k={},F={},R={},U=E("userSelect"),$=U&&U.propertyName,P=p.camelCase;F["float"]="cssFloat",p.mix(v,{_cssHooks:k,_cssProps:F,_getComputedStyle:function(e,r,n){var o,i,a,u,l="",f=e.ownerDocument;return r=t(r),(n=n||f.defaultView.getComputedStyle(e,null))&&(l=n.getPropertyValue(r)||n[r]),""!==l||v.contains(f,e)||(l=e.style[r]),v._RE_NUM_NO_PX.test(l)&&O.test(r)&&(u=e.style,o=u.width,i=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=n.width,u.width=o,u.minWidth=i,u.maxWidth=a),l},style:function(e,t,r){var n,o,a,u=v.query(e),l=u[0];if("object"==typeof t){for(n in t)for(n=P(n),a=u.length-1;a>=0;a--)i(u[a],n,t[n],1);return void 0}if(t=P(t),void 0===r)return o="",l&&(o=i(l,t,r,1)),o;for(a=u.length-1;a>=0;a--)i(u[a],t,r,1);return void 0},css:function(e,t,r){var n,o,a,u,l=v.query(e),f=l[0];if("object"==typeof t){for(n in t)for(u=l.length-1;u>=0;u--)i(l[u],n,t[n]);return void 0}if(t=P(t),o=k[t],void 0===r)return a="",f&&(o&&"get"in o&&void 0!==(a=o.get(f,!0))||(a=v._getComputedStyle(f,t))),"undefined"==typeof a?"":a;for(u=l.length-1;u>=0;u--)i(l[u],t,r,1);return void 0},show:function(e){var t,n,o,i,a=v.query(e);for(i=a.length-1;i>=0;i--)o=a[i],o.style[A]=v.data(o,q)||H,v.css(o,A)===S&&(t=o.tagName.toLowerCase(),n=r(t),v.data(o,q,n),o.style[A]=n)},hide:function(e){var t,r,n=v.query(e);for(r=n.length-1;r>=0;r--){t=n[r];var o=t.style,i=o[A];i!==S&&(i&&v.data(t,q,i),o[A]=S)}},toggle:function(e){var t,r,n=v.query(e);for(r=n.length-1;r>=0;r--)t=n[r],v.css(t,A)===S?v.show(t):v.hide(t)},addStyleSheet:function(e,t,r){"string"==typeof e&&(r=t,t=e,e=y);var n,o=v.getDocument(e);r&&(r=r.replace("#",H))&&(n=v.get("#"+r,o)),n||(n=v.create("<style>",{id:r},o),v.get("head",o).appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(o.createTextNode(t)))},unselectable:$?function(e){for(var t=v.query(e),r=t.length-1;r>=0;r--)t[r].style[$]="none"}:function(e){var t,r,n,o,i,a,u=v.query(e),l=0;for(o=["iframe","textarea","input","select"],r=u.length-1;r>=0;r--)for(t=u[r],i=t.style,a=t.getElementsByTagName("*"),t.setAttribute("unselectable","on");n=a[l++];)p.inArray(w(n),o)||n.setAttribute("unselectable","on")},innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0,width:0,height:0}),p.each([L,M],function(e){v["inner"+p.ucfirst(e)]=function(t){var r=v.get(t);return r&&a(r,e,D)},v["outer"+p.ucfirst(e)]=function(t,r){var n=v.get(t);return n&&a(n,e,r?b:C)};var t=e===L?["Left","Right"]:["Top","Bottom"];v[e]=function(r,n){var o=v.get(r);if(void 0!==n){if(o){var i=f(o),c=l(o,i);return c&&(n+=u(o,["padding","border"],t,i)),v.css(o,e,n)}return void 0}return o&&a(o,e,_)},k[e]={get:function(t,r){var n;return r&&(n=a(t,e)+"px"),n}}});var j={position:"absolute",visibility:"hidden",display:"block"};p.each(["left","top"],function(e){k[e]={get:function(t,r){var n,o,i;if(r){if(i=v.css(t,"position"),"static"===i)return"auto";if(n=v._getComputedStyle(t,e),o="auto"===n,o&&"relative"===i)return"0px";(o||I.test(n))&&(n=s(t)[e]+"px")}return n}}});var V=/^(?:body|html)$/i;return e}(),s=function(e){function t(e){var t,r=this,n=r.length;for(t=0;n>t&&e(r[t],t)!==!1;t++);}function r(e){var t=e.substr(1);if(!t)throw new Error("An invalid or illegal string was specified for selector.");return t}function o(e){var t=e.charAt(0);return"#"===t?i(r(e)):"."===t?a(r(e)):u(e)}function i(e){return function(t){var r=v._getElementById(e,E);return r&&v._contains(t,r)?[r]:[]}}function a(e){return function(t){return p(t,e)}}function u(e){return function(t){return t.getElementsByTagName(e)}}function l(e){var t=/,|\+|=|~|\[|\]|:|>|\||\$|\^|\*|\(|\)|[\w-]+\.[\w-]+|[\w-]+#[\w-]+/;return!e.match(t)}function f(e,r){var n,i,a,u,c="string"==typeof e,s=void 0!==r?f(r):(u=1)&&[E],d=s.length;if(e){if(c){if(e=S(e),u)if("body"===e)n=[E.body];else if(O.test(e))n=C(p(E,RegExp.$1));else if(A.test(e))a=v._getElementById(RegExp.$2,E),n=a&&a.nodeName.toLowerCase()===RegExp.$1?[a]:[];else if(L.test(e))a=v._getElementById(e.substr(1),E),n=a?[a]:[];else if(M.test(e))n=C(E.getElementsByTagName(e));else if(l(e)){var m,g,y,N=e.split(/\s+/),T=s;for(i=0,m=N.length;m>i;i++)N[i]=o(N[i]);for(i=0,m=N.length;m>i;i++){var _,w=N[i],q=[];for(g=0,y=T.length;y>g;g++)_=w(T[g]),q.push.apply(q,C(_));if(T=q,!T.length)break}n=T&&T.length>1?v.unique(T):T}if(!n){for(n=[],i=0;d>i;i++)x.apply(n,v._selectInternal(e,s[i]));n.length>1&&d>1&&v.unique(n)}}else if(n=e.nodeType||h.isWindow(e)?[e]:e.getDOMNodes?e.getDOMNodes():D(e)?e:b(e)?C(e):[e],!u){var W,H=n,B=H.length;for(n=[],i=0;B>i;i++)for(W=0;d>W;W++)if(v._contains(s[W],H[i])){n.push(H[i]);break}}}else n=[];return n.each=t,n}function c(e,t){var r=e&&s(e,"class");return r&&(r=r.replace(/[\r\t\n]/g,w))&&(w+r+w).indexOf(w+t+w)>-1}function s(e,t){var r=e&&e.getAttributeNode(t);return r&&r.specified?"value"in r?r.value:r.nodeValue:void 0}function d(e,t){return"*"===t||e.nodeName.toLowerCase()===t.toLowerCase()}e={};var p,v=n,h=m,g=y,E=document,N=E.documentElement,T=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector,_="getElementsByClassName"in E,D=h.isArray,C=h.makeArray,b=v.isDomNodeList,w=" ",x=Array.prototype.push,O=/^\.([\w-]+)$/,L=/^#([\w-]+)$/,M=/^([\w-])+$/,A=/^([\w-]+)#([\w-]+)$/,q=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,S=h.trim;p=_?function(e,t){return e.getElementsByClassName(t)}:function(e,t){var r,n,o=[],i=e.getElementsByTagName("*");for(t=" "+t+" ",r=0;r<i.length;r++)n=i[r],(" "+(n.className||n.getAttribute("class"))+" ").indexOf(t)>-1&&o.push(n);return o};var W="sourceIndex"in N?function(e,t){return e.sourceIndex-t.sourceIndex}:function(e,t){if(!e.compareDocumentPosition||!t.compareDocumentPosition)return e.compareDocumentPosition?-1:1;var r=4&e.compareDocumentPosition(t);return r?-1:1},H=g&&g.matches?g.matches:function(e,t){for(var r,n=[],o=0,i=t.length;i>o;o++)r=t[o],T.call(r,e)&&n.push(r);return n};return h.mix(v,{_getElementsByTagName:function(e,t){return C(t.querySelectorAll(e))},_getElementById:function(e,t){return t.getElementById(e)},_getSimpleAttr:s,_isTag:d,_hasSingleClass:c,_selectInternal:g||function(e,t){return C(t.querySelectorAll(e))},query:f,get:function(e,t){return f(e,t)[0]||null},unique:function(){function e(e,r){return e===r?(t=!0,0):W(e,r)}var t,r=!0;return[0,0].sort(function(){return r=!1,0}),function(n){if(t=r,n.sort(e),t)for(var o=1,i=n.length;i>o;)n[o]===n[o-1]?(n.splice(o,1),--i):o++;return n}}(),filter:function(e,t,r){var n,o,i,a,u=f(e,r),l=[];return"string"==typeof t&&(t=S(t))&&(i=q.exec(t))&&(n=i[1],o=i[2],a=i[3],n?!n||o||a||(t=function(e){return s(e,"id")===n}):t=function(e){var t=!0,r=!0;return o&&(t=d(e,o)),a&&(r=c(e,a)),r&&t}),l="function"==typeof t?h.filter(u,t):H(t,u)},test:function(e,t,r){var n=f(e,r);return n.length&&v.filter(n,t,r).length===n.length}}),e}(),d=function(e){function t(e,t,n,o,l,f,c){if(!(e=a.get(e)))return null;if(0===t)return e;if(f||(e=e[n]),!e)return null;l=l&&a.get(l)||null,void 0===t&&(t=1);var s,d,p=[],v=i.isArray(t);for("number"==typeof t&&(s=0,d=t,t=function(){return++s===d});e&&e!==l&&(!(e.nodeType===u.ELEMENT_NODE||e.nodeType===u.TEXT_NODE&&c)||!r(e,t)||o&&!o(e)||(p.push(e),v));)e=e[n];return v?p:p[0]||null}function r(e,t){if(!t)return!0;if(i.isArray(t)){var r,n=t.length;if(!n)return!0;for(r=0;n>r;r++)if(a.test(e,t[r]))return!0}else if(a.test(e,t))return!0;return!1}function o(e,t,r,n){var o,l,f,c=[],s=a.get(e),d=s;if(s&&r&&(d=s.parentNode),d){for(o=i.makeArray(d.childNodes),l=0;l<o.length;l++)f=o[l],(n||f.nodeType===u.ELEMENT_NODE)&&f!==s&&c.push(f);t&&(c=a.filter(c,t))}return c}e={};var i=m,a=n,u=a.NodeType,l=16;return i.mix(a,{_contains:function(e,t){return!!(e.compareDocumentPosition(t)&l)},closest:function(e,r,n,o){return t(e,r,"parentNode",function(e){return e.nodeType!==u.DOCUMENT_FRAGMENT_NODE},n,!0,o)},parent:function(e,r,n){return t(e,r,"parentNode",function(e){return e.nodeType!==u.DOCUMENT_FRAGMENT_NODE},n,void 0)},first:function(e,r,n){var o=a.get(e);return t(o&&o.firstChild,r,"nextSibling",void 0,void 0,!0,n)},last:function(e,r,n){var o=a.get(e);return t(o&&o.lastChild,r,"previousSibling",void 0,void 0,!0,n)},next:function(e,r,n){return t(e,r,"nextSibling",void 0,void 0,void 0,n)},prev:function(e,r,n){return t(e,r,"previousSibling",void 0,void 0,void 0,n)},siblings:function(e,t,r){return o(e,t,!0,r)},children:function(e,t){return o(e,t,void 0)},contents:function(e,t){return o(e,t,void 0,1)},contains:function(e,t){return e=a.get(e),t=a.get(t),e&&t?a._contains(e,t):!1},index:function(e,t){var r,n,o,l=a.query(e),f=0,c=l[0];if(!t){if(n=c&&c.parentNode,!n)return-1;for(r=c;r=r.previousSibling;)r.nodeType===u.ELEMENT_NODE&&f++;return f}return o=a.query(t),"string"==typeof t?i.indexOf(c,o):i.indexOf(o[0],l)},equals:function(e,t){if(e=a.query(e),t=a.query(t),e.length!==t.length)return!1;for(var r=e.length;r>=0;r--)if(e[r]!==t[r])return!1;return!0}}),e}(),p=function(e){function t(e){e=u.trim(e||"");for(var t,r=e.split(c),n=[],o=r.length,i=0;o>i;i++)(t=r[i])&&n.push(t);return n}function r(e){return function(t,r){var n,o,i,a=t.classList,u=l.call(arguments,2);for(n=0,o=r.length;o>n;n++)(i=r[n])&&a[e].apply(a,[i].concat(u))}}function o(e){return function(r,n){var o=t(n),i=l.call(arguments,2);a.query(r).each(function(t){t.nodeType===f.ELEMENT_NODE&&a[e].apply(a,[t,o].concat(i))})}}e={};var a=n,u=m,l=[].slice,f=a.NodeType,c=/[\.\s]\s*\.?/;return u.mix(a,{_hasClass:function(e,t){var r,n,o,i=e.classList;if(i.length){for(r=0,n=t.length;n>r;r++)if(o=t[r],o&&!i.contains(o))return!1;return!0}return!1},_addClass:r("add"),_removeClass:r("remove"),_toggleClass:r("toggle"),hasClass:function(e,r){var n=!1;return r=t(r),a.query(e).each(function(e){return e.nodeType===f.ELEMENT_NODE&&a._hasClass(e,r)?(n=!0,!1):void 0}),n},replaceClass:function(e,t,r){a.removeClass(e,t),a.addClass(e,r)},addClass:o("_addClass"),removeClass:o("_removeClass"),toggleClass:o("_toggleClass")}),u.mix(a,i),e}(),v=function(e){e={};var t=n;return e=t,r.exports.version="1.0.2",e}(),r.exports=v});
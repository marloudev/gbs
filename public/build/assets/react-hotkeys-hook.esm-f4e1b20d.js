import{r as l}from"./app-ffb1b877.js";function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},S.apply(null,arguments)}var M=["shift","alt","meta","mod","ctrl"],F={esc:"escape",return:"enter",".":"period",",":"comma","-":"slash"," ":"space","`":"backquote","#":"backslash","+":"bracketright",ShiftLeft:"shift",ShiftRight:"shift",AltLeft:"alt",AltRight:"alt",MetaLeft:"meta",MetaRight:"meta",OSLeft:"meta",OSRight:"meta",ControlLeft:"ctrl",ControlRight:"ctrl"};function y(e){return(e&&F[e]||e||"").trim().toLowerCase().replace(/key|digit|numpad|arrow/,"")}function $(e){return M.includes(e)}function A(e,t){return t===void 0&&(t=","),e.split(t)}function P(e,t,r){t===void 0&&(t="+");var o=e.toLocaleLowerCase().split(t).map(function(c){return y(c)}),a={alt:o.includes("alt"),ctrl:o.includes("ctrl")||o.includes("control"),shift:o.includes("shift"),meta:o.includes("meta"),mod:o.includes("mod")},s=o.filter(function(c){return!M.includes(c)});return S({},a,{keys:s,description:r,hotkey:e})}(function(){typeof document<"u"&&(document.addEventListener("keydown",function(e){e.key!==void 0&&N([y(e.key),y(e.code)])}),document.addEventListener("keyup",function(e){e.key!==void 0&&O([y(e.key),y(e.code)])})),typeof window<"u"&&window.addEventListener("blur",function(){v.clear()})})();var v=new Set;function R(e){return Array.isArray(e)}function T(e,t){t===void 0&&(t=",");var r=R(e)?e:e.split(t);return r.every(function(o){return v.has(o.trim().toLowerCase())})}function N(e){var t=Array.isArray(e)?e:[e];v.has("meta")&&v.forEach(function(r){return!$(r)&&v.delete(r.toLowerCase())}),t.forEach(function(r){return v.add(r.toLowerCase())})}function O(e){var t=Array.isArray(e)?e:[e];e==="meta"?v.clear():t.forEach(function(r){return v.delete(r.toLowerCase())})}function z(e,t,r){(typeof r=="function"&&r(e,t)||r===!0)&&e.preventDefault()}function G(e,t,r){return typeof r=="function"?r(e,t):r===!0||r===void 0}function J(e){return I(e,["input","textarea","select"])}function I(e,t){t===void 0&&(t=!1);var r=e.target,o=e.composed,a=null;return Q(r)&&o?a=e.composedPath()[0]&&e.composedPath()[0].tagName:a=r&&r.tagName,R(t)?!!(a&&t&&t.some(function(s){var c;return s.toLowerCase()===((c=a)==null?void 0:c.toLowerCase())})):!!(a&&t&&t)}function Q(e){return!!e.tagName&&!e.tagName.startsWith("-")&&e.tagName.includes("-")}function U(e,t){return e.length===0&&t?(console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'),!0):t?e.some(function(r){return t.includes(r)})||e.includes("*"):!0}var V=function(t,r,o){o===void 0&&(o=!1);var a=r.alt,s=r.meta,c=r.mod,g=r.shift,m=r.ctrl,u=r.keys,k=t.key,E=t.code,p=t.ctrlKey,n=t.metaKey,H=t.shiftKey,C=t.altKey,d=y(E),f=k.toLowerCase();if(!(u!=null&&u.includes(d))&&!(u!=null&&u.includes(f))&&!["ctrl","control","unknown","meta","alt","shift","os"].includes(d))return!1;if(!o){if(a===!C&&f!=="alt"||g===!H&&f!=="shift")return!1;if(c){if(!n&&!p)return!1}else if(s===!n&&f!=="meta"&&f!=="os"||m===!p&&f!=="ctrl"&&f!=="control")return!1}return u&&u.length===1&&(u.includes(f)||u.includes(d))?!0:u?T(u):!u},X=l.createContext(void 0),Y=function(){return l.useContext(X)};function q(e,t){return e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(e).length===Object.keys(t).length&&Object.keys(e).reduce(function(r,o){return r&&q(e[o],t[o])},!0):e===t}var Z=l.createContext({hotkeys:[],enabledScopes:[],toggleScope:function(){},enableScope:function(){},disableScope:function(){}}),ee=function(){return l.useContext(Z)};function te(e){var t=l.useRef(void 0);return q(t.current,e)||(t.current=e),t.current}var D=function(t){t.stopPropagation(),t.preventDefault(),t.stopImmediatePropagation()},ne=typeof window<"u"?l.useLayoutEffect:l.useEffect;function oe(e,t,r,o){var a=l.useState(null),s=a[0],c=a[1],g=l.useRef(!1),m=r instanceof Array?o instanceof Array?void 0:o:r,u=R(e)?e.join(m==null?void 0:m.splitKey):e,k=r instanceof Array?r:o instanceof Array?o:void 0,E=l.useCallback(t,k??[]),p=l.useRef(E);k?p.current=E:p.current=t;var n=te(m),H=ee(),C=H.enabledScopes,d=Y();return ne(function(){if(!((n==null?void 0:n.enabled)===!1||!U(C,n==null?void 0:n.scopes))){var f=function(i,L){var j;if(L===void 0&&(L=!1),!(J(i)&&!I(i,n==null?void 0:n.enableOnFormTags))){if(s!==null){var K=s.getRootNode();if((K instanceof Document||K instanceof ShadowRoot)&&K.activeElement!==s&&!s.contains(K.activeElement)){D(i);return}}(j=i.target)!=null&&j.isContentEditable&&!(n!=null&&n.enableOnContentEditable)||A(u,n==null?void 0:n.splitKey).forEach(function(W){var B,w=P(W,n==null?void 0:n.combinationKey);if(V(i,w,n==null?void 0:n.ignoreModifiers)||(B=w.keys)!=null&&B.includes("*")){if(n!=null&&n.ignoreEventWhen!=null&&n.ignoreEventWhen(i)||L&&g.current)return;if(z(i,w,n==null?void 0:n.preventDefault),!G(i,w,n==null?void 0:n.enabled)){D(i);return}p.current(i,w),L||(g.current=!0)}})}},x=function(i){i.key!==void 0&&(N(y(i.code)),((n==null?void 0:n.keydown)===void 0&&(n==null?void 0:n.keyup)!==!0||n!=null&&n.keydown)&&f(i))},_=function(i){i.key!==void 0&&(O(y(i.code)),g.current=!1,n!=null&&n.keyup&&f(i,!0))},b=s||(m==null?void 0:m.document)||document;return b.addEventListener("keyup",_),b.addEventListener("keydown",x),d&&A(u,n==null?void 0:n.splitKey).forEach(function(h){return d.addHotkey(P(h,n==null?void 0:n.combinationKey,n==null?void 0:n.description))}),function(){b.removeEventListener("keyup",_),b.removeEventListener("keydown",x),d&&A(u,n==null?void 0:n.splitKey).forEach(function(h){return d.removeHotkey(P(h,n==null?void 0:n.combinationKey,n==null?void 0:n.description))})}}},[s,u,n,C]),c}export{oe as u};
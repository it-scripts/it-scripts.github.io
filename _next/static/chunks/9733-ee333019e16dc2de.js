(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9733],{1048:function(e,t,r){"use strict";r.d(t,{Z:function(){return createReactComponent}});var n=r(959),o=r(507),a=r.n(o),i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&__defNormalProp(e,r,t[r]);if(d)for(var r of d(t))u.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>l(e,c(t)),__objRest=(e,t)=>{var r={};for(var n in e)h.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&d)for(var n of d(e))0>t.indexOf(n)&&u.call(e,n)&&(r[n]=e[n]);return r},createReactComponent=(e,t,r)=>{let o=(0,n.forwardRef)((t,o)=>{var{color:a="currentColor",size:s=24,stroke:l=2,children:c}=t,d=__objRest(t,["color","size","stroke","children"]);return(0,n.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:o},i),{width:s,height:s,stroke:a,strokeWidth:l,className:`tabler-icon tabler-icon-${e}`}),d),[...r.map(([e,t])=>(0,n.createElement)(e,t)),...c||[]])});return o.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),stroke:a().oneOfType([a().string,a().number])},o.displayName=`${t}`,o}},500:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(1048).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},7082:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(1048).Z)("external-link","IconExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]])},7090:function(e,t){"use strict";t.Z={src:"/_next/static/media/processing_table_hide.db2fee94.png",height:325,width:318,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAqUlEQVR42hXM7YrCMBCF4SQz6bi0rjewsLCLot7/JQmKUpTSmCbOh/HXgQPv4w/7/5/fPwgAGDbf69v5Mucp0oDb3REjCmtH8XI+pSk5H8Z0x8f0DN575wHxektFqomj1g99H2NUVaLucR/rXBorZpiXlIsL5sexlrIAQMuhcRG7L+qH9YaZ53lRdcL2ubmtmcjLVIgwgAMEVUYIsenMknOtLwuNX3i1ojfs4F0coVpNagAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},1334:function(e,t){"use strict";t.Z={src:"/_next/static/media/processing_table_show.bcdc59ef.png",height:326,width:318,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAArklEQVR42g2L2xKCIBQA+ZXuwjmAhhnTTRNKSsVr4///Sczs0+4skbitW9f3fp6GZfnl5V1l4mlyMvZdN3qVxledKhWrLOGSy0SQwrzzwpz1TV8eDEXEgCFnjJO68a0fpnlx7rs70GApIA3BvGxpTVnaR1EgF4xhRCE0Urn62/humNJMrzb7iOIhAiGPxNi3fVWV+5z0mQIAchBcxjIcTdMO7tMyiNcbut1BADD5A3agKumSa6h2AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},9187:function(e,t,r){"use strict";r.d(t,{Z:function(){return components_Accordion}});var n=r(1527),o=r(959),a=r(1048),i=(0,a.Z)("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]]),s=r(500),l=(0,a.Z)("hash","IconHash",[["path",{d:"M5 9l14 0",key:"svg-0"}],["path",{d:"M5 15l14 0",key:"svg-1"}],["path",{d:"M11 4l-4 16",key:"svg-2"}],["path",{d:"M17 4l-4 16",key:"svg-3"}]]),components_Accordion=e=>{let{title:t,children:r,defaultOpen:a=!1}=e,[c,d]=(0,o.useState)(a),[h,u]=(0,o.useState)(0),[p,g]=(0,o.useState)(!1),m=(0,o.useRef)(null),x=(0,o.useRef)(null),f=t.toLowerCase().replace(/\s+/g,"-"),scrollToAccordion=()=>{x.current&&x.current.scrollIntoView({behavior:"smooth",block:"center"})};(0,o.useEffect)(()=>{window.location.hash==="#".concat(f)&&(d(!0),scrollToAccordion())},[f]),(0,o.useEffect)(()=>{c&&m.current?u(m.current.scrollHeight):u(0)},[c]);let handleHashtagClick=async e=>{e.stopPropagation();let t="".concat(window.location.origin).concat(window.location.pathname,"#").concat(f);window.history.replaceState(null,"",t),scrollToAccordion();try{await navigator.clipboard.writeText(t),g(!0),setTimeout(()=>g(!1),3e3)}catch(e){console.error("Failed to copy: ",e)}};return(0,n.jsxs)("div",{id:f,ref:x,className:"relative border-0 rounded border-zinc-300 bg-zinc-200 dark:bg-zinc-900",children:[(0,n.jsxs)("button",{onClick:()=>{d(!c)},className:"w-full text-left p-4 flex items-center space-x-2 text-black focus:outline-none dark:text-white",children:[(0,n.jsx)("span",{children:c?(0,n.jsx)(i,{}):(0,n.jsx)(s.Z,{})}),(0,n.jsx)("span",{className:"text-lg flex-grow",children:t}),(0,n.jsx)("span",{onClick:handleHashtagClick,className:"text-gray-500 cursor-pointer transition-transform transform hover:scale-110 hover:text-gray-300",title:"Get link to this section",children:(0,n.jsx)(l,{})})]}),(0,n.jsx)("div",{ref:m,style:{height:"".concat(h,"px")},className:"overflow-hidden transition-height duration-300 ease-in-out",children:(0,n.jsx)("div",{className:"p-4 text-gray-900 dark:text-gray-300",children:r})}),p&&(0,n.jsx)("div",{className:"fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500",children:"The link has been copied!"})]})}},2639:function(e,t,r){"use strict";var n=r(1527);r(959),t.Z=e=>{let{children:t}=e;return(0,n.jsxs)("div",{className:"border border-zinc-700 rounded-md bg-gray-900 my-4",children:[" ",t]})}},772:function(e,t,r){"use strict";r.d(t,{U:function(){return Callout}});var n=r(6259),o=r(1048),a=(0,o.Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]),i=(0,o.Z)("alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),s=(0,o.Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),l=(0,o.Z)("alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),c=r(1527),d={default:"\uD83D\uDCA1",success:(0,c.jsx)(a,{className:"mt-1 size-5"}),error:(0,c.jsx)(i,{className:"mt-1 size-5"}),info:(0,c.jsx)(s,{className:"mt-1 size-5"}),warning:(0,c.jsx)(l,{className:"mt-1 size-5"})},h={default:(0,n.Z)("border border-orange-100 bg-orange-50 text-orange-800 dark:border-0 dark:bg-orange-400/20 dark:text-orange-300"),success:(0,n.Z)("border border-green-50 bg-green-50 text-green-900 dark:border-0 dark:bg-green-900/30 dark:text-green-200"),error:(0,n.Z)("border border-red-100 bg-red-100 text-red-900 dark:border-0 dark:bg-red-900/30 dark:text-red-200"),info:(0,n.Z)("border border-blue-100 bg-blue-100 text-blue-900 dark:border-0 dark:bg-blue-900/30 dark:text-blue-200"),warning:(0,n.Z)("border border-yellow-50 bg-yellow-50 text-yellow-900 dark:border-0 dark:bg-yellow-700/30 dark:text-yellow-200")};function Callout(e){let{children:t,type:r="default",emoji:o=d[r]}=e;return(0,c.jsxs)("div",{className:(0,n.Z)("nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4","contrast-more:nx-border-current contrast-more:dark:nx-border-current",h[r]),children:[(0,c.jsx)("div",{className:"nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:o}),(0,c.jsx)("div",{className:"nx-w-full nx-min-w-0 nx-leading-7",children:t})]})}},9013:function(e,t,r){"use strict";var n=r(1527),o=r(959),a=r(500);let fetchMetaData=async e=>{try{var t,r,n,o,a,i;let s=await fetch(e);if(!s.ok)throw Error("Network response was not ok");let l=await s.text(),c=new DOMParser,d=c.parseFromString(l,"text/html"),h=(null===(t=d.querySelector('meta[property="og:title"]'))||void 0===t?void 0:t.getAttribute("content"))||(null===(r=d.querySelector("title"))||void 0===r?void 0:r.textContent)||"No title",u=(null===(n=d.querySelector('meta[property="og:description"]'))||void 0===n?void 0:n.getAttribute("content"))||(null===(o=d.querySelector('meta[name="description"]'))||void 0===o?void 0:o.getAttribute("content"))||"No description",p=(null===(a=d.querySelector('link[rel="icon"]'))||void 0===a?void 0:a.getAttribute("href"))||(null===(i=d.querySelector('link[rel="shortcut icon"]'))||void 0===i?void 0:i.getAttribute("href"))||"https://example.com/default-icon.png";return{title:h,description:u,icon:new URL(p,e).href}}catch(e){return console.error("Error fetching metadata:",e),{title:"Error",description:"Unable to fetch metadata.",icon:"https://example.com/error-icon.png"}}};t.Z=e=>{var t;let{href:r,icon:i,manualTitle:s}=e,[l,c]=(0,o.useState)(null),[d,h]=(0,o.useState)(!0);return((0,o.useEffect)(()=>{s?(c({title:s,description:"No description available",icon:"https://example.com/web-icon.png"}),h(!1)):fetchMetaData(r).then(e=>{c(e),h(!1)})},[r,s]),d)?(0,n.jsx)("div",{children:"Loading..."}):(0,n.jsx)("a",{href:r,className:"w-full my-5 border border-gray-200 shadow-sm hover:shadow-md dark:border-neutral-700 dark:hover:border-neutral-600 transition-all duration-200 dark:bg-neutral-900 bg-white rounded-lg overflow-hidden flex flex-col justify-start relative",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)("div",{className:"flex items-center p-4",children:[i?"string"==typeof i?(0,n.jsx)("img",{src:i,alt:"Favicon",className:"w-6 h-6 mr-3"}):o.isValidElement(i)?o.cloneElement(i,{className:"w-6 h-6 mr-3"}):o.createElement(i,{className:"w-6 h-6 mr-3"}):(0,n.jsx)("img",{src:null==l?void 0:l.icon,alt:"Favicon",className:"w-6 h-6 mr-3"}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("span",{className:"font-semibold text-lg text-gray-700 dark:text-gray-100",children:null==l?void 0:l.title}),(0,n.jsxs)("span",{className:"text-sm text-gray-500 dark:text-gray-300",children:[(null==l?void 0:l.description)&&((t=l.description).length<=100?t:t.substring(0,100)+"...")," "]})]}),(0,n.jsx)("span",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300",children:(0,n.jsx)(a.Z,{})})]})})}},4049:function(e,t,r){"use strict";var n=r(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,r,o,a,i){if(i!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,t,r){e.exports=r(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
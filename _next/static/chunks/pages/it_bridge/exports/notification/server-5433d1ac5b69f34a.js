(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4951],{1048:function(e,r,t){"use strict";t.d(r,{Z:function(){return createReactComponent}});var n=t(959),i=t(507),o=t.n(i),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},a=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,__spreadValues=(e,r)=>{for(var t in r||(r={}))h.call(r,t)&&__defNormalProp(e,t,r[t]);if(d)for(var t of d(r))p.call(r,t)&&__defNormalProp(e,t,r[t]);return e},__spreadProps=(e,r)=>l(e,c(r)),__objRest=(e,r)=>{var t={};for(var n in e)h.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&d)for(var n of d(e))0>r.indexOf(n)&&p.call(e,n)&&(t[n]=e[n]);return t},createReactComponent=(e,r,t)=>{let i=(0,n.forwardRef)((r,i)=>{var{color:o="currentColor",size:a=24,stroke:l=2,children:c}=r,d=__objRest(r,["color","size","stroke","children"]);return(0,n.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:i},s),{width:a,height:a,stroke:o,strokeWidth:l,className:`tabler-icon tabler-icon-${e}`}),d),[...t.map(([e,r])=>(0,n.createElement)(e,r)),...c||[]])});return i.propTypes={color:o().string,size:o().oneOfType([o().string,o().number]),stroke:o().oneOfType([o().string,o().number])},i.displayName=`${r}`,i}},6965:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/it_bridge/exports/notification/server",function(){return t(7778)}])},7778:function(e,r,t){"use strict";t.r(r),t.d(r,{__toc:function(){return a}});var n=t(1527),i=t(7154),o=t(5424),s=t(772);let a=[{depth:2,value:"SendNotification",id:"sendnotification"}];function _createMdxContent(e){let r=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",strong:"strong"},(0,o.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{children:"Server"}),"\n",(0,n.jsx)(s.U,{type:"warning",children:(0,n.jsx)(r.p,{children:"These exports can only be used on the server-side. Make sure to use them in your server-side script files."})}),"\n",(0,n.jsx)(r.h2,{id:"sendnotification",children:"SendNotification"}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"SendNotification"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"(source, title, message, time, "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"type"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", sound)"})]})})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["source: ",(0,n.jsx)(r.code,{children:"number"}),": The player's server ID."]}),"\n",(0,n.jsxs)(r.li,{children:["title: ",(0,n.jsx)(r.code,{children:"string"}),": The notification title."]}),"\n",(0,n.jsxs)(r.li,{children:["message: ",(0,n.jsx)(r.code,{children:"string"}),": The notification message."]}),"\n",(0,n.jsxs)(r.li,{children:["time: ",(0,n.jsx)(r.code,{children:"number"}),": The notification display time in milliseconds."]}),"\n",(0,n.jsxs)(r.li,{children:["type: ",(0,n.jsx)(r.code,{children:"string"}),": The notification type. Can be ",(0,n.jsx)(r.code,{children:"Success"}),", ",(0,n.jsx)(r.code,{children:"Info"}),", ",(0,n.jsx)(r.code,{children:"Warning"}),", or ",(0,n.jsx)(r.code,{children:"Error"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["sound: ",(0,n.jsx)(r.code,{children:"boolean"}),": If the notification should play a sound."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Sends a notification with the specified data."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Example"})}),"\n",(0,n.jsx)(r.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsx)(r.code,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(r.span,{className:"line",children:[(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-function)"},children:"SendNotification"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Title'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Message'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"5000"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Info'"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(r.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})})]})}r.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,o.a)(),e.components);return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/it_bridge/exports/notification/server.mdx",route:"/it_bridge/exports/notification/server",frontMatter:{title:"it_bridge | Server Exports - Notification",description:"Learn how to use the server Notification exports for the it_bridge resource."},title:"it_bridge | Server Exports - Notification",headings:a},pageNextRoute:"/it_bridge/exports/notification/server"})},772:function(e,r,t){"use strict";t.d(r,{U:function(){return Callout}});var n=t(6259),i=t(1048),o=(0,i.Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]),s=(0,i.Z)("alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),a=(0,i.Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),l=(0,i.Z)("alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),c=t(1527),d={default:"\uD83D\uDCA1",success:(0,c.jsx)(o,{className:"mt-1 size-5"}),error:(0,c.jsx)(s,{className:"mt-1 size-5"}),info:(0,c.jsx)(a,{className:"mt-1 size-5"}),warning:(0,c.jsx)(l,{className:"mt-1 size-5"})},h={default:(0,n.Z)("border border-orange-100 bg-orange-50 text-orange-800 dark:border-0 dark:bg-orange-400/20 dark:text-orange-300"),success:(0,n.Z)("border border-green-50 bg-green-50 text-green-900 dark:border-0 dark:bg-green-900/30 dark:text-green-200"),error:(0,n.Z)("border border-red-100 bg-red-100 text-red-900 dark:border-0 dark:bg-red-900/30 dark:text-red-200"),info:(0,n.Z)("border border-blue-100 bg-blue-100 text-blue-900 dark:border-0 dark:bg-blue-900/30 dark:text-blue-200"),warning:(0,n.Z)("border border-yellow-50 bg-yellow-50 text-yellow-900 dark:border-0 dark:bg-yellow-700/30 dark:text-yellow-200")};function Callout(e){let{children:r,type:t="default",emoji:i=d[t]}=e;return(0,c.jsxs)("div",{className:(0,n.Z)("nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4","contrast-more:nx-border-current contrast-more:dark:nx-border-current",h[t]),children:[(0,c.jsx)("div",{className:"nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:i}),(0,c.jsx)("div",{className:"nx-w-full nx-min-w-0 nx-leading-7",children:r})]})}},4049:function(e,r,t){"use strict";var n=t(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,r,t,i,o,s){if(s!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,r,t){e.exports=t(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[7154,9774,2888,179],function(){return e(e.s=6965)}),_N_E=e.O()}]);
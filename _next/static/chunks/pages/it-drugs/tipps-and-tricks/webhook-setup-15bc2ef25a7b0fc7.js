(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[736],{9097:function(e,s,r){"use strict";r.d(s,{Z:function(){return o}});var o=(0,r(1048).Z)("brand-discord","IconBrandDiscord",[["path",{d:"M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-0"}],["path",{d:"M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3",key:"svg-2"}],["path",{d:"M7 16.5c3.5 1 6.5 1 10 0",key:"svg-3"}]])},500:function(e,s,r){"use strict";r.d(s,{Z:function(){return o}});var o=(0,r(1048).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},1343:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/it-drugs/tipps-and-tricks/webhook-setup",function(){return r(5323)}])},5323:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return c}});var o=r(1527),t=r(7154),n=r(5424),l=r(9013),i=r(772),a=r(9097);let c=[];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span"},(0,n.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{children:"Webhook Setup"}),"\n",(0,o.jsxs)(s.p,{children:["With version ",(0,o.jsx)(s.code,{children:"1.3.0"})," of it-drugs the creation of webhooks is changing. From now on the webhooks are set entirely in the file ",(0,o.jsx)(s.code,{children:"server/sv_webhooks"}),"."]}),"\n",(0,o.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" webhookSettings "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'active'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Set to true to enable the webhook"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'name'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'it-drugs'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Name for the webhook"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'avatar'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://i.imgur.com/KvZZn88.png'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Avatar for the webhook"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'urls'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'plant'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--'', -- Webhook URL for plant actions"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'table'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--'', -- Webhook URL for table actions"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sell'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--'', -- Webhook URL for sell actions"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'message'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--'', -- Webhook URL for messages"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,o.jsx)(s.p,{children:"It is now possible to use your own webhook links for the various individual actions of the user."}),"\n",(0,o.jsx)(s.p,{children:"If a valid webhook id is entered and the attribute active is set to true, a webhook message is sent for the corresponding category."}),"\n",(0,o.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" webhookSettings "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'active'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Set to true to enable the webhook"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'name'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'it-drugs'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Name for the webhook"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'avatar'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://i.imgur.com/KvZZn88.png'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Avatar for the webhook"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'urls'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'plant'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://discord.com/api/webhooks/**************/*************************'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Webhook URL for plant actions"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'table'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--'', -- Webhook URL for table actions"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'sell'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--'', -- Webhook URL for sell actions"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'message'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"nil"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--'', -- Webhook URL for messages"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,o.jsx)(s.p,{children:"In this example now the script only sends webhook messages when a user interacts with a plant."}),"\n",(0,o.jsx)(i.U,{type:"info",children:(0,o.jsx)(s.p,{children:"Please note that only messages with in the sell and message area will be sent immediately.\nThe messages for plants and tables are sent every minute all together to prevent Discord from rate limiting your Discord server"})}),"\n",(0,o.jsx)(s.p,{children:"You don't know how to create Discord webhooks no problem check this article from Discord."}),"\n",(0,o.jsx)(l.Z,{href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks",manualTitle:"Intro to Webhooks",icon:a.Z})]})}s.default=(0,t.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,n.a)(),e.components);return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/it-drugs/tipps-and-tricks/webhook-setup.mdx",route:"/it-drugs/tipps-and-tricks/webhook-setup",frontMatter:{title:"it-drugs - Webhook Setup",description:"With the script, it is also possible to create your own consumable drugs directly."},title:"it-drugs - Webhook Setup",headings:c},pageNextRoute:"/it-drugs/tipps-and-tricks/webhook-setup"})},772:function(e,s,r){"use strict";r.d(s,{U:function(){return Callout}});var o=r(6259),t=r(1048),n=(0,t.Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]),l=(0,t.Z)("alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),i=(0,t.Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),a=(0,t.Z)("alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),c=r(1527),h={default:"\uD83D\uDCA1",success:(0,c.jsx)(n,{className:"mt-1 size-5"}),error:(0,c.jsx)(l,{className:"mt-1 size-5"}),info:(0,c.jsx)(i,{className:"mt-1 size-5"}),warning:(0,c.jsx)(a,{className:"mt-1 size-5"})},d={default:(0,o.Z)("border border-orange-100 bg-orange-50 text-orange-800 dark:border-0 dark:bg-orange-400/20 dark:text-orange-300"),success:(0,o.Z)("border border-green-50 bg-green-50 text-green-900 dark:border-0 dark:bg-green-900/30 dark:text-green-200"),error:(0,o.Z)("border border-red-100 bg-red-100 text-red-900 dark:border-0 dark:bg-red-900/30 dark:text-red-200"),info:(0,o.Z)("border border-blue-100 bg-blue-100 text-blue-900 dark:border-0 dark:bg-blue-900/30 dark:text-blue-200"),warning:(0,o.Z)("border border-yellow-50 bg-yellow-50 text-yellow-900 dark:border-0 dark:bg-yellow-700/30 dark:text-yellow-200")};function Callout(e){let{children:s,type:r="default",emoji:t=h[r]}=e;return(0,c.jsxs)("div",{className:(0,o.Z)("nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4","contrast-more:nx-border-current contrast-more:dark:nx-border-current",d[r]),children:[(0,c.jsx)("div",{className:"nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:t}),(0,c.jsx)("div",{className:"nx-w-full nx-min-w-0 nx-leading-7",children:s})]})}},9013:function(e,s,r){"use strict";var o=r(1527),t=r(959),n=r(500);let fetchMetaData=async e=>{try{var s,r,o,t,n,l;let i=await fetch(e);if(!i.ok)throw Error("Network response was not ok");let a=await i.text(),c=new DOMParser,h=c.parseFromString(a,"text/html"),d=(null===(s=h.querySelector('meta[property="og:title"]'))||void 0===s?void 0:s.getAttribute("content"))||(null===(r=h.querySelector("title"))||void 0===r?void 0:r.textContent)||"No title",x=(null===(o=h.querySelector('meta[property="og:description"]'))||void 0===o?void 0:o.getAttribute("content"))||(null===(t=h.querySelector('meta[name="description"]'))||void 0===t?void 0:t.getAttribute("content"))||"No description",k=(null===(n=h.querySelector('link[rel="icon"]'))||void 0===n?void 0:n.getAttribute("href"))||(null===(l=h.querySelector('link[rel="shortcut icon"]'))||void 0===l?void 0:l.getAttribute("href"))||"https://example.com/default-icon.png";return{title:d,description:x,icon:new URL(k,e).href}}catch(e){return console.error("Error fetching metadata:",e),{title:"Error",description:"Unable to fetch metadata.",icon:"https://example.com/error-icon.png"}}};s.Z=e=>{let{href:s,icon:r,manualTitle:l}=e,[i,a]=(0,t.useState)(null),[c,h]=(0,t.useState)(!0);return((0,t.useEffect)(()=>{l?(a({title:l,description:"No description available",icon:"https://example.com/web-icon.png"}),h(!1)):fetchMetaData(s).then(e=>{a(e),h(!1)})},[s,l]),c)?(0,o.jsx)("div",{children:"Loading..."}):(0,o.jsx)("a",{href:s,className:"w-full border border-gray-200 shadow-sm hover:shadow-md dark:border-neutral-700 dark:hover:border-neutral-600 transition-all duration-200 dark:bg-neutral-900 bg-white rounded-lg overflow-hidden flex flex-col justify-start relative",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsxs)("div",{className:"flex items-center p-4",children:[r?"string"==typeof r?(0,o.jsx)("img",{src:r,alt:"Favicon",className:"w-6 h-6 mr-3"}):t.isValidElement(r)?t.cloneElement(r,{className:"w-6 h-6 mr-3"}):t.createElement(r,{className:"w-6 h-6 mr-3"}):(0,o.jsx)("img",{src:null==i?void 0:i.icon,alt:"Favicon",className:"w-6 h-6 mr-3"}),(0,o.jsxs)("div",{className:"flex flex-col",children:[(0,o.jsx)("span",{className:"font-semibold text-lg text-gray-700 dark:text-gray-100",children:null==i?void 0:i.title}),(0,o.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-300",children:null==i?void 0:i.description})]}),(0,o.jsx)("span",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300",children:(0,o.jsx)(n.Z,{})})]})})}}},function(e){e.O(0,[670,774,888,179],function(){return e(e.s=1343)}),_N_E=e.O()}]);
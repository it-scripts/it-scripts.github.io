(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[744],{1048:function(e,s,n){"use strict";n.d(s,{Z:function(){return createReactComponent}});var r=n(959),o=n(507),l=n.n(o),t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,s,n)=>s in e?i(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,__spreadValues=(e,s)=>{for(var n in s||(s={}))d.call(s,n)&&__defNormalProp(e,n,s[n]);if(h)for(var n of h(s))x.call(s,n)&&__defNormalProp(e,n,s[n]);return e},__spreadProps=(e,s)=>a(e,c(s)),__objRest=(e,s)=>{var n={};for(var r in e)d.call(e,r)&&0>s.indexOf(r)&&(n[r]=e[r]);if(null!=e&&h)for(var r of h(e))0>s.indexOf(r)&&x.call(e,r)&&(n[r]=e[r]);return n},createReactComponent=(e,s,n)=>{let o=(0,r.forwardRef)((s,o)=>{var{color:l="currentColor",size:i=24,stroke:a=2,children:c}=s,h=__objRest(s,["color","size","stroke","children"]);return(0,r.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:o},t),{width:i,height:i,stroke:l,strokeWidth:a,className:`tabler-icon tabler-icon-${e}`}),h),[...n.map(([e,s])=>(0,r.createElement)(e,s)),...c||[]])});return o.propTypes={color:l().string,size:l().oneOfType([l().string,l().number]),stroke:l().oneOfType([l().string,l().number])},o.displayName=`${s}`,o}},500:function(e,s,n){"use strict";n.d(s,{Z:function(){return r}});var r=(0,n(1048).Z)("chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]])},9314:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/it-drugs/adjustments/zones",function(){return n(5025)}])},5025:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return c}});var r=n(1527),o=n(7154),l=n(5424),t=n(772),i=n(9187),a=n(2639);let c=[{depth:2,value:"Config.GlobalGrowTime",id:"configglobalgrowtime"},{depth:2,value:"Config.Zones",id:"configzones"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",hr:"hr",strong:"strong"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"\uD83D\uDDFA️・Zones"}),"\n",(0,r.jsx)(t.U,{type:"warning",children:(0,r.jsx)(s.p,{children:"All growth related configurations have significant impacts on the plant growth system.\nMaking any changes to the growth system requires thorough testing and debugging.\nWe strongly recommend any changes are made carefully and methodically as any changes can have unintended consequences."})}),"\n",(0,r.jsx)(s.p,{children:"First, let's take a look at zone management.\nHere, it is possible to create zones that can have an effect on the growth speed of certain plants."}),"\n",(0,r.jsx)(s.h2,{id:"configglobalgrowtime",children:"Config.GlobalGrowTime"}),"\n",(0,r.jsx)(s.p,{children:"This variable defines the growth rate in minutes for the plants and is taken as the base value for all future modifications."}),"\n",(0,r.jsx)(s.p,{children:"To use the different zone settings, this variable must be set to true.\nAs long as it is set to false, any modification in the zones will not be used."}),"\n",(0,r.jsx)(s.h2,{id:"configzones",children:"Config.Zones"}),"\n",(0,r.jsx)(s.p,{children:"The individual zones can be created and edited here.\nWe will now take a closer look at one zone and explain what the individual values mean and what they change."}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'weed_zone_one'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Zone id (Musst be unique)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    points "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2031.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4853.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2007.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4877.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1981.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4903.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2006.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4929.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2032.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4903.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2057.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4878.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    thickness "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    growMultiplier "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- GlobalGrowTime / growMultiplier = Time in minutes for a plant to grow in this zone"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    blip "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        display "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Display blip on map"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        sprite "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"469"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Select blip from (https://docs.fivem.net/docs/game-references/blips/)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        displayColor "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Select blip color from (https://docs.fivem.net/docs/game-references/blips/)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        displayText "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Weed Zone'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})})]})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'weed_zone_one'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]})})}),"\n",(0,r.jsx)(s.p,{children:"We start with the zone id, this specifies the name of the zone, the name is only relevant for the script.\nThe zone id must not contain any special characters or spaces and must be unique."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"points "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2031.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4853.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2007.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4877.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1981.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4903.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2006.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4929.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2032.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4903.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2057.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4878.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"43.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"thickness "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]})]})}),"\n",(0,r.jsx)(t.U,{type:"warning",children:(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Make sure that all z coordinates (laste number) are the same, otherwise the zone will not be created."})})}),"\n",(0,r.jsxs)(s.p,{children:["The points define the area of the zone.\nA straight line is drawn between two consecutive ",(0,r.jsx)(s.code,{children:"vec3() or vec()"})," to define the edge of the zone.\nA line is also automatically drawn between the last and ",(0,r.jsx)(s.code,{children:"first vec3()"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"The thickness can be left at 4 if the zone is created manually.\nHowever, since the script now uses ox_lib for the zones, this can also be created more easily.\nYou can find more information here:"}),"\n",(0,r.jsx)(s.p,{children:"As soon as a player plants a plant in such a zone, it is affected by the zone settings."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"growMultiplier "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]})})}),"\n",(0,r.jsx)(s.p,{children:"The time it takes a plant to grow is divided by this value to calculate the new time.\nSo with a 2, the growth is twice as fast as normal."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"blip "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    display "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- If true blip will be displayed"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    sprite "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"469"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Select blip from (https://docs.fivem.net/docs/game-references/blips/)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    displayColor "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Select blip color from (https://docs.fivem.net/docs/game-references/blips/)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    displayText "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Weed Zone'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Name that will displayed on the map"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})})]})}),"\n",(0,r.jsx)(s.p,{children:"The blip fie zone can be set here.\nThe blip is always displayed in the middle of the zone."}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(a.Z,{children:(0,r.jsx)(i.Z,{title:"Zone configuration template",children:(0,r.jsx)(s.pre,{"data-language":"lua","data-theme":"default",hasCopyCode:!0,children:(0,r.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'uniqe_zone_name'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Zone id (No Spaces)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    coords "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vector3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(coordinate x value, coordinate y value, coordinate z value),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vector3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(coordinate x value, coordinate y value, coordinate z value),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vector3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(coordinate x value, coordinate y value, coordinate z value),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vector3"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(coordinate x value, coordinate y value, coordinate z value),"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- You can add as many vector3 as you want"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    thickness "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4.0"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    growMultiplier "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- GlobalGrowTime / growMultiplier = Time in minutes for a plant to grow in this zone"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    blip "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        display "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Display blip on map"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        sprite "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"469"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Select blip from (https://docs.fivem.net/docs/game-references/blips/)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        displayColor "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Select blip color from (https://docs.fivem.net/docs/game-references/blips/)"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        displayText "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Weed Zone'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    exclusive "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'seed_one_name'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'seed_two_name'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- You can add as many seeds as you want"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})})]})})})})]})}s.default=(0,o.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/it-drugs/adjustments/zones.mdx",route:"/it-drugs/adjustments/zones",frontMatter:{title:"it-drugs - Zones",description:"Here, it is possible to create zones that can have an effect on the growth speed of certain plants."},title:"it-drugs - Zones",headings:c},pageNextRoute:"/it-drugs/adjustments/zones"})},9187:function(e,s,n){"use strict";n.d(s,{Z:function(){return components_Accordion}});var r=n(1527),o=n(959),l=n(1048),t=(0,l.Z)("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]]),i=n(500),a=(0,l.Z)("hash","IconHash",[["path",{d:"M5 9l14 0",key:"svg-0"}],["path",{d:"M5 15l14 0",key:"svg-1"}],["path",{d:"M11 4l-4 16",key:"svg-2"}],["path",{d:"M17 4l-4 16",key:"svg-3"}]]),components_Accordion=e=>{let{title:s,children:n,defaultOpen:l=!1}=e,[c,h]=(0,o.useState)(l),[d,x]=(0,o.useState)(0),[p,k]=(0,o.useState)(!1),y=(0,o.useRef)(null),j=(0,o.useRef)(null),v=s.toLowerCase().replace(/\s+/g,"-"),scrollToAccordion=()=>{j.current&&j.current.scrollIntoView({behavior:"smooth",block:"center"})};(0,o.useEffect)(()=>{window.location.hash==="#".concat(v)&&(h(!0),scrollToAccordion())},[v]),(0,o.useEffect)(()=>{c&&y.current?x(y.current.scrollHeight):x(0)},[c]);let handleHashtagClick=async e=>{e.stopPropagation();let s="".concat(window.location.origin).concat(window.location.pathname,"#").concat(v);window.history.replaceState(null,"",s),scrollToAccordion();try{await navigator.clipboard.writeText(s),k(!0),setTimeout(()=>k(!1),3e3)}catch(e){console.error("Failed to copy: ",e)}};return(0,r.jsxs)("div",{id:v,ref:j,className:"relative border-0 rounded border-zinc-300 bg-zinc-200 dark:bg-zinc-900",children:[(0,r.jsxs)("button",{onClick:()=>{h(!c)},className:"w-full text-left p-4 flex items-center space-x-2 text-black focus:outline-none dark:text-white",children:[(0,r.jsx)("span",{children:c?(0,r.jsx)(t,{}):(0,r.jsx)(i.Z,{})}),(0,r.jsx)("span",{className:"text-lg flex-grow",children:s}),(0,r.jsx)("span",{onClick:handleHashtagClick,className:"text-gray-500 cursor-pointer transition-transform transform hover:scale-110 hover:text-gray-300",title:"Get link to this section",children:(0,r.jsx)(a,{})})]}),(0,r.jsx)("div",{ref:y,style:{height:"".concat(d,"px")},className:"overflow-hidden transition-height duration-300 ease-in-out",children:(0,r.jsx)("div",{className:"p-4 text-gray-900 dark:text-gray-300",children:n})}),p&&(0,r.jsx)("div",{className:"fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-500",children:"The link has been copied!"})]})}},2639:function(e,s,n){"use strict";var r=n(1527);n(959),s.Z=e=>{let{children:s}=e;return(0,r.jsxs)("div",{className:"border border-zinc-700 rounded-md bg-gray-900 my-4",children:[" ",s]})}},772:function(e,s,n){"use strict";n.d(s,{U:function(){return Callout}});var r=n(6259),o=n(1048),l=(0,o.Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]),t=(0,o.Z)("alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),i=(0,o.Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),a=(0,o.Z)("alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),c=n(1527),h={default:"\uD83D\uDCA1",success:(0,c.jsx)(l,{className:"mt-1 size-5"}),error:(0,c.jsx)(t,{className:"mt-1 size-5"}),info:(0,c.jsx)(i,{className:"mt-1 size-5"}),warning:(0,c.jsx)(a,{className:"mt-1 size-5"})},d={default:(0,r.Z)("border border-orange-100 bg-orange-50 text-orange-800 dark:border-0 dark:bg-orange-400/20 dark:text-orange-300"),success:(0,r.Z)("border border-green-50 bg-green-50 text-green-900 dark:border-0 dark:bg-green-900/30 dark:text-green-200"),error:(0,r.Z)("border border-red-100 bg-red-100 text-red-900 dark:border-0 dark:bg-red-900/30 dark:text-red-200"),info:(0,r.Z)("border border-blue-100 bg-blue-100 text-blue-900 dark:border-0 dark:bg-blue-900/30 dark:text-blue-200"),warning:(0,r.Z)("border border-yellow-50 bg-yellow-50 text-yellow-900 dark:border-0 dark:bg-yellow-700/30 dark:text-yellow-200")};function Callout(e){let{children:s,type:n="default",emoji:o=h[n]}=e;return(0,c.jsxs)("div",{className:(0,r.Z)("nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4","contrast-more:nx-border-current contrast-more:dark:nx-border-current",d[n]),children:[(0,c.jsx)("div",{className:"nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:o}),(0,c.jsx)("div",{className:"nx-w-full nx-min-w-0 nx-leading-7",children:s})]})}},4049:function(e,s,n){"use strict";var r=n(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,s,n,o,l,t){if(t!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,s,n){e.exports=n(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=9314)}),_N_E=e.O()}]);
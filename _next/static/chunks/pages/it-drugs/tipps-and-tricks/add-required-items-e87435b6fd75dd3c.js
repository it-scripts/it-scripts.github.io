(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{1048:function(e,s,r){"use strict";r.d(s,{Z:function(){return createReactComponent}});var o=r(959),n=r(507),l=r.n(n),t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,s,r)=>s in e?i(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,__spreadValues=(e,s)=>{for(var r in s||(s={}))d.call(s,r)&&__defNormalProp(e,r,s[r]);if(h)for(var r of h(s))x.call(s,r)&&__defNormalProp(e,r,s[r]);return e},__spreadProps=(e,s)=>a(e,c(s)),__objRest=(e,s)=>{var r={};for(var o in e)d.call(e,o)&&0>s.indexOf(o)&&(r[o]=e[o]);if(null!=e&&h)for(var o of h(e))0>s.indexOf(o)&&x.call(e,o)&&(r[o]=e[o]);return r},createReactComponent=(e,s,r)=>{let n=(0,o.forwardRef)((s,n)=>{var{color:l="currentColor",size:i=24,stroke:a=2,children:c}=s,h=__objRest(s,["color","size","stroke","children"]);return(0,o.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:n},t),{width:i,height:i,stroke:l,strokeWidth:a,className:`tabler-icon tabler-icon-${e}`}),h),[...r.map(([e,s])=>(0,o.createElement)(e,s)),...c||[]])});return n.propTypes={color:l().string,size:l().oneOfType([l().string,l().number]),stroke:l().oneOfType([l().string,l().number])},n.displayName=`${s}`,n}},5689:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/it-drugs/tipps-and-tricks/add-required-items",function(){return r(2185)}])},2185:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return i}});var o=r(1527),n=r(7154),l=r(5424),t=r(772);let i=[{depth:2,value:"Full example",id:"full-example"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",span:"span",h2:"h2"},(0,l.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{children:"Add required items"}),"\n",(0,o.jsxs)(s.p,{children:["A desired feature is that items are required when an item is planted or harvested, this feature is now available with version ",(0,o.jsx)("span",{style:{color:"green"},children:(0,o.jsx)(s.strong,{children:"v1.3.0"})})," but not active by default in the Config.lua.\nTo add the feature the following code must be added to each plant."]}),"\n",(0,o.jsx)(s.pre,{"data-language":"lua","data-theme":"default",hasCopyCode:!0,children:(0,o.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"reqItems "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Items required to plant the seed"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"planting"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"harvesting"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})})]})}),"\n",(0,o.jsx)(s.p,{children:"In each of the 2 categories you can add as many items as you want, the schema you have to use is as follows:"}),"\n",(0,o.jsx)(s.pre,{"data-language":"lua","data-theme":"default",hasCopyCode:!0,children:(0,o.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'item_amount'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {amount "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" number, remove "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"or"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]})})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Example:"})}),"\n",(0,o.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'watering_can'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {amount "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", remove "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]})})}),"\n",(0,o.jsx)(t.U,{type:"warning",children:(0,o.jsx)(s.p,{children:"Please remember to register all the items you list here in your inventory!"})}),"\n",(0,o.jsx)(s.h2,{id:"full-example",children:"Full example"}),"\n",(0,o.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'weed_lemonhaze_seed'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    label "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Lemon Haze'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Label for the plant"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    plantType "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'plant1'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Choose plant types from (plant1, plant2, small_plant)"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    growthTime "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Cutsom growth time in minutes false if you want to use the global growth time"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    onlyZone "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Set to zone id if you want to plant this seed only in a specific zone "})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    zones "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'weed_zone_one'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'weed_zone_two'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}, "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Zones where the seed can be planted"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    products "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Item the plant is going to produce when harvested with the max amount"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'weed_lemonhaze'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {min "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", max "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"4"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},  "})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--['other_item'] = {min = 1, max = 2}"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    seed "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        chance "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Percent of getting back the seed"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        min "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Min amount of seeds"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        max "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Max amount of seeds"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    time "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"3000"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Time it takes to plant/harvest in miliseconds"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    reqItems "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Items required to plant the seed"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"planting"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'watering_can'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {amount "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", remove "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'shovel'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {amount "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", remove "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        },"})}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"harvesting"'}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'watering_can'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {amount "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", remove "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]}),"\n",(0,o.jsxs)(s.span,{className:"line",children:[(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            ["}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'shovel'"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {amount "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", remove "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,o.jsx)(s.span,{className:"line",children:(0,o.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})})]})})]})}s.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/it-drugs/tipps-and-tricks/add-required-items.mdx",route:"/it-drugs/tipps-and-tricks/add-required-items",frontMatter:{title:"it-drugs - Required Items",description:"A guide explaining how to add required items to a plant."},title:"it-drugs - Required Items",headings:i},pageNextRoute:"/it-drugs/tipps-and-tricks/add-required-items"})},772:function(e,s,r){"use strict";r.d(s,{U:function(){return Callout}});var o=r(6259),n=r(1048),l=(0,n.Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]),t=(0,n.Z)("alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),i=(0,n.Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),a=(0,n.Z)("alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),c=r(1527),h={default:"\uD83D\uDCA1",success:(0,c.jsx)(l,{className:"mt-1 size-5"}),error:(0,c.jsx)(t,{className:"mt-1 size-5"}),info:(0,c.jsx)(i,{className:"mt-1 size-5"}),warning:(0,c.jsx)(a,{className:"mt-1 size-5"})},d={default:(0,o.Z)("border border-orange-100 bg-orange-50 text-orange-800 dark:border-0 dark:bg-orange-400/20 dark:text-orange-300"),success:(0,o.Z)("border border-green-50 bg-green-50 text-green-900 dark:border-0 dark:bg-green-900/30 dark:text-green-200"),error:(0,o.Z)("border border-red-100 bg-red-100 text-red-900 dark:border-0 dark:bg-red-900/30 dark:text-red-200"),info:(0,o.Z)("border border-blue-100 bg-blue-100 text-blue-900 dark:border-0 dark:bg-blue-900/30 dark:text-blue-200"),warning:(0,o.Z)("border border-yellow-50 bg-yellow-50 text-yellow-900 dark:border-0 dark:bg-yellow-700/30 dark:text-yellow-200")};function Callout(e){let{children:s,type:r="default",emoji:n=h[r]}=e;return(0,c.jsxs)("div",{className:(0,o.Z)("nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4","contrast-more:nx-border-current contrast-more:dark:nx-border-current",d[r]),children:[(0,c.jsx)("div",{className:"nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:n}),(0,c.jsx)("div",{className:"nx-w-full nx-min-w-0 nx-leading-7",children:s})]})}},4049:function(e,s,r){"use strict";var o=r(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,s,r,n,l,t){if(t!==o){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,s,r){e.exports=r(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=5689)}),_N_E=e.O()}]);
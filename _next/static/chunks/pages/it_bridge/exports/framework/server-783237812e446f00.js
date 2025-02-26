(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7],{1048:function(e,s,r){"use strict";r.d(s,{Z:function(){return createReactComponent}});var l=r(959),n=r(507),a=r.n(n),t={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,s,r)=>s in e?o(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,__spreadValues=(e,s)=>{for(var r in s||(s={}))h.call(s,r)&&__defNormalProp(e,r,s[r]);if(d)for(var r of d(s))x.call(s,r)&&__defNormalProp(e,r,s[r]);return e},__spreadProps=(e,s)=>i(e,c(s)),__objRest=(e,s)=>{var r={};for(var l in e)h.call(e,l)&&0>s.indexOf(l)&&(r[l]=e[l]);if(null!=e&&d)for(var l of d(e))0>s.indexOf(l)&&x.call(e,l)&&(r[l]=e[l]);return r},createReactComponent=(e,s,r)=>{let n=(0,l.forwardRef)((s,n)=>{var{color:a="currentColor",size:o=24,stroke:i=2,children:c}=s,d=__objRest(s,["color","size","stroke","children"]);return(0,l.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:n},t),{width:o,height:o,stroke:a,strokeWidth:i,className:`tabler-icon tabler-icon-${e}`}),d),[...r.map(([e,s])=>(0,l.createElement)(e,s)),...c||[]])});return n.propTypes={color:a().string,size:a().oneOfType([a().string,a().number]),stroke:a().oneOfType([a().string,a().number])},n.displayName=`${s}`,n}},1627:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/it_bridge/exports/framework/server",function(){return r(2414)}])},2414:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return o}});var l=r(1527),n=r(7154),a=r(5424),t=r(772);let o=[{depth:2,value:"GetPlayer",id:"getplayer"},{depth:2,value:"GetPlayerByCitizenId",id:"getplayerbycitizenid"},{depth:2,value:"GetPlayers",id:"getplayers"},{depth:3,value:"Example",id:"example"},{depth:2,value:"GetPlayerName",id:"getplayername"},{depth:3,value:"Example",id:"example-1"},{depth:2,value:"GetPlayerCitizenId",id:"getplayercitizenid"},{depth:3,value:"Example",id:"example-2"},{depth:2,value:"GetPlayerJob",id:"getplayerjob"},{depth:3,value:"Example",id:"example-3"},{depth:2,value:"GetMoney",id:"getmoney"},{depth:3,value:"Example",id:"example-4"},{depth:2,value:"AddMoney",id:"addmoney"},{depth:3,value:"Example",id:"example-5"},{depth:2,value:"RemoveMoney",id:"removemoney"},{depth:3,value:"Example",id:"example-6"},{depth:2,value:"SetMoney",id:"setmoney"},{depth:3,value:"Example",id:"example-7"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},(0,a.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"Server"}),"\n",(0,l.jsx)(t.U,{type:"warning",children:(0,l.jsx)(s.p,{children:"These exports can only be used on the server-side. Make sure to use them in your server-side script files."})}),"\n",(0,l.jsx)(s.h2,{id:"getplayer",children:"GetPlayer"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayer"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["source: ",(0,l.jsx)(s.code,{children:"number"}),": The player's server ID."]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Returns the framework player object from the source.\nYou can execute any framework player function using this object."}),"\n",(0,l.jsx)(s.h2,{id:"getplayerbycitizenid",children:"GetPlayerByCitizenId"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerByCitizenId"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(citizenId)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["citizenId: ",(0,l.jsx)(s.code,{children:"string"}),": The player's citizen ID."]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Returns the framework player object from the citizen ID.\nYou can execute any framework player function using this object."}),"\n",(0,l.jsx)(s.h2,{id:"getplayers",children:"GetPlayers"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayers"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,l.jsx)(s.p,{children:"Returns a table containing all the players on the server."}),"\n",(0,l.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" players "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayers"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" _, player "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ipairs"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(players) "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"do"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player.source)"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})})]})}),"\n",(0,l.jsx)(s.h2,{id:"getplayername",children:"GetPlayerName"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerName"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["player: ",(0,l.jsx)(s.code,{children:"object"}),": The player object."]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Returns the the player's ingame name."}),"\n",(0,l.jsx)(s.h3,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" player "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayer"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" playerName "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerName"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(playerName)"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"getplayercitizenid",children:"GetPlayerCitizenId"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerCitizenId"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["player: ",(0,l.jsx)(s.code,{children:"object"}),": The player object."]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Returns the the player's citizen ID. For every framework, the citizen ID is unique."}),"\n",(0,l.jsx)(s.h3,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" player "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayer"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" citizenId "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerCitizenId"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(citizenId)"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"getplayerjob",children:"GetPlayerJob"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerJob"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["player: ",(0,l.jsx)(s.code,{children:"object"}),": The player object."]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Returns table containing the player's job information."}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    grade: "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- number"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    grade_label: "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Unemployed"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- string"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    grade_salary: "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- number"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    isBoss: "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- boolean"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    label: "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Unemployed"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- string"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    name: "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"unemployed"'}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- string"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    onDuty: "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- boolean"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,l.jsx)(s.h3,{id:"example-3",children:"Example"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" player "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayer"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" job "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetPlayerJob"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(player)"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(job.label) "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Unemployed"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"getmoney",children:"GetMoney"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetMoney"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, moneyType)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["source: ",(0,l.jsx)(s.code,{children:"number"}),": The player's server ID."]}),"\n",(0,l.jsxs)(s.li,{children:["moneyType: ",(0,l.jsx)(s.code,{children:"string"}),": The money type. (cash, bank, black_money)"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Returns the player's money amount."}),"\n",(0,l.jsx)(s.h3,{id:"example-4",children:"Example"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" cash "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GetMoney"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(cash)"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"addmoney",children:"AddMoney"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddMoney"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, moneyType, amount, reason)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["source: ",(0,l.jsx)(s.code,{children:"number"}),": The player's server ID."]}),"\n",(0,l.jsxs)(s.li,{children:["moneyType: ",(0,l.jsx)(s.code,{children:"string"}),": The money type. (cash, bank, black_money)"]}),"\n",(0,l.jsxs)(s.li,{children:["amount: ",(0,l.jsx)(s.code,{children:"number"}),": The amount to add."]}),"\n",(0,l.jsxs)(s.li,{children:["reason: ",(0,l.jsx)(s.code,{children:"string | nil"}),": The reason for adding money."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Adds money to the player's account. Will return ",(0,l.jsx)(s.code,{children:"true"})," if the money was added successfully."]}),"\n",(0,l.jsx)(s.h3,{id:"example-5",children:"Example"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" success "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AddMoney"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1000"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Reward'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(success)"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"removemoney",children:"RemoveMoney"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveMoney"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, moneyType, amount, reason)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["source: ",(0,l.jsx)(s.code,{children:"number"}),": The player's server ID."]}),"\n",(0,l.jsxs)(s.li,{children:["moneyType: ",(0,l.jsx)(s.code,{children:"string"}),": The money type. (cash, bank, black_money)"]}),"\n",(0,l.jsxs)(s.li,{children:["amount: ",(0,l.jsx)(s.code,{children:"number"}),": The amount to remove."]}),"\n",(0,l.jsxs)(s.li,{children:["reason: ",(0,l.jsx)(s.code,{children:"string | nil"}),": The reason for removing money."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Removes money from the player's account. Will return ",(0,l.jsx)(s.code,{children:"true"})," if the money was removed successfully."]}),"\n",(0,l.jsx)(s.h3,{id:"example-6",children:"Example"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" success "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"RemoveMoney"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1000"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Fine'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(success)"})]})]})}),"\n",(0,l.jsx)(s.h2,{id:"setmoney",children:"SetMoney"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(s.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"SetMoney"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, moneyType, amount, reason)"})]})})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["source: ",(0,l.jsx)(s.code,{children:"number"}),": The player's server ID."]}),"\n",(0,l.jsxs)(s.li,{children:["moneyType: ",(0,l.jsx)(s.code,{children:"string"}),": The money type. (cash, bank, black_money)"]}),"\n",(0,l.jsxs)(s.li,{children:["amount: ",(0,l.jsx)(s.code,{children:"number"}),": The amount to set."]}),"\n",(0,l.jsxs)(s.li,{children:["reason: ",(0,l.jsx)(s.code,{children:"string | nil"}),": The reason for setting money."]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["Sets the player's money amount. Will return ",(0,l.jsx)(s.code,{children:"true"})," if the money was set successfully."]}),"\n",(0,l.jsx)(s.h3,{id:"example-7",children:"Example"}),"\n",(0,l.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" success "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" exports.it_bridge:"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"SetMoney"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(source, "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cash'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1000"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Set'"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(success)"})]})]})})]})}s.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.a)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/it_bridge/exports/framework/server.mdx",route:"/it_bridge/exports/framework/server",frontMatter:{title:"it_bridge | Server Exports - Framework",description:"Learn how to use the server framework exports for the it_bridge resource."},title:"it_bridge | Server Exports - Framework",headings:o},pageNextRoute:"/it_bridge/exports/framework/server"})},772:function(e,s,r){"use strict";r.d(s,{U:function(){return Callout}});var l=r(6259),n=r(1048),a=(0,n.Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]),t=(0,n.Z)("alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),o=(0,n.Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),i=(0,n.Z)("alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),c=r(1527),d={default:"\uD83D\uDCA1",success:(0,c.jsx)(a,{className:"mt-1 size-5"}),error:(0,c.jsx)(t,{className:"mt-1 size-5"}),info:(0,c.jsx)(o,{className:"mt-1 size-5"}),warning:(0,c.jsx)(i,{className:"mt-1 size-5"})},h={default:(0,l.Z)("border border-orange-100 bg-orange-50 text-orange-800 dark:border-0 dark:bg-orange-400/20 dark:text-orange-300"),success:(0,l.Z)("border border-green-50 bg-green-50 text-green-900 dark:border-0 dark:bg-green-900/30 dark:text-green-200"),error:(0,l.Z)("border border-red-100 bg-red-100 text-red-900 dark:border-0 dark:bg-red-900/30 dark:text-red-200"),info:(0,l.Z)("border border-blue-100 bg-blue-100 text-blue-900 dark:border-0 dark:bg-blue-900/30 dark:text-blue-200"),warning:(0,l.Z)("border border-yellow-50 bg-yellow-50 text-yellow-900 dark:border-0 dark:bg-yellow-700/30 dark:text-yellow-200")};function Callout(e){let{children:s,type:r="default",emoji:n=d[r]}=e;return(0,c.jsxs)("div",{className:(0,l.Z)("nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4","contrast-more:nx-border-current contrast-more:dark:nx-border-current",h[r]),children:[(0,c.jsx)("div",{className:"nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:n}),(0,c.jsx)("div",{className:"nx-w-full nx-min-w-0 nx-leading-7",children:s})]})}},4049:function(e,s,r){"use strict";var l=r(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,s,r,n,a,t){if(t!==l){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,s,r){e.exports=r(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[7154,9774,2888,179],function(){return e(e.s=1627)}),_N_E=e.O()}]);
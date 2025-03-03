(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2843],{1048:function(e,t,r){"use strict";r.d(t,{Z:function(){return createReactComponent}});var s=r(959),i=r(507),n=r.n(i),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},o=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__spreadValues=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&__defNormalProp(e,r,t[r]);if(h)for(var r of h(t))p.call(t,r)&&__defNormalProp(e,r,t[r]);return e},__spreadProps=(e,t)=>l(e,d(t)),__objRest=(e,t)=>{var r={};for(var s in e)c.call(e,s)&&0>t.indexOf(s)&&(r[s]=e[s]);if(null!=e&&h)for(var s of h(e))0>t.indexOf(s)&&p.call(e,s)&&(r[s]=e[s]);return r},createReactComponent=(e,t,r)=>{let i=(0,s.forwardRef)((t,i)=>{var{color:n="currentColor",size:o=24,stroke:l=2,children:d}=t,h=__objRest(t,["color","size","stroke","children"]);return(0,s.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:i},a),{width:o,height:o,stroke:n,strokeWidth:l,className:`tabler-icon tabler-icon-${e}`}),h),[...r.map(([e,t])=>(0,s.createElement)(e,t)),...d||[]])});return i.propTypes={color:n().string,size:n().oneOfType([n().string,n().number]),stroke:n().oneOfType([n().string,n().number])},i.displayName=`${t}`,i}},8497:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/it_bridge/test",function(){return r(2911)}])},2911:function(e,t,r){"use strict";r.r(t),r.d(t,{__toc:function(){return l}});var s=r(1527),i=r(7154),n=r(5424),a=r(772),o=r(1890);let l=[{depth:3,value:"Configuration of the script",id:"configuration-of-the-script"},{depth:3,value:"Start the it_bridge script",id:"start-the-it_bridge-script"},{depth:3,value:"Start the bridge_tester script",id:"start-the-bridge_tester-script"},{depth:3,value:"Test the script",id:"test-the-script"},{depth:4,value:"1. Test your Framework",id:"1-test-your-framework"},{depth:5,value:"Example input",id:"example-input"},{depth:5,value:"Example output",id:"example-output"},{depth:4,value:"2. Test your Inventory Script",id:"2-test-your-inventory-script"},{depth:5,value:"Example input",id:"example-input-1"},{depth:5,value:"Example output",id:"example-output-1"},{depth:4,value:"3. Test your Notification Script",id:"3-test-your-notification-script"},{depth:5,value:"Example input",id:"example-input-2"},{depth:4,value:"4. Test your TextUI Script",id:"4-test-your-textui-script"},{depth:5,value:"Example input",id:"example-input-3"},{depth:4,value:"5. Test your Menu Script",id:"5-test-your-menu-script"},{depth:4,value:"6. Test your Target Script",id:"6-test-your-target-script"},{depth:3,value:"Report your results",id:"report-your-results"},{depth:3,value:"Stop the bridge_tester script",id:"stop-the-bridge_tester-script"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",p:"p",strong:"strong",h3:"h3",code:"code",pre:"pre",span:"span",a:"a",img:"img",h4:"h4",ul:"ul",li:"li",h5:"h5",em:"em"},(0,n.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{children:"How to test?"}),"\n",(0,s.jsxs)(t.p,{children:["Welcome to the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," test guide, where you can learn how to completely test the our asset on your server, following each step we will achieve a clean and fluid test where you will find any problems with the bridge on your server, as long as the documentation has been completed."]}),"\n",(0,s.jsx)(a.U,{type:"warning",children:(0,s.jsx)(t.p,{children:"Before you start testing the script, make sure that you have followed the installation guide and that the script is correctly installed on your server."})}),"\n",(0,s.jsxs)(o.Rg,{children:[(0,s.jsx)(t.h3,{id:"configuration-of-the-script",children:"Configuration of the script"}),(0,s.jsxs)(t.p,{children:["First you have to configure the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script, you can do this in the ",(0,s.jsx)(t.code,{children:"config.lua"})," file.\nOn most servers you can leave the default settings, but if you want to change something you can do this."]}),(0,s.jsx)(t.h3,{id:"start-the-it_bridge-script",children:"Start the it_bridge script"}),(0,s.jsx)(t.p,{children:"After you have configured the script, you can start the script on your server.\nIf you followed the install guide correctly, the script should start aumaotically when you start your server.\nIf the script does not start automatically, you can start it manually with the following command in your txAdmin Console:"}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"start it_bridge"})})})}),(0,s.jsx)(t.p,{children:"After starting the script, you should see a message in your server console after a few seconds, that the script has started successfully.\nThe script will also tell you which settings are currently active. Please make sure these settings are correct."}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Example Message:"}),"\n",(0,s.jsx)(t.a,{href:"https:/i.imgur.com/gyQOv2X.png",title:"Open Image",children:(0,s.jsx)(t.img,{src:"https://i.imgur.com/gyQOv2X.png",alt:"Example Message"})})]}),(0,s.jsx)(t.h3,{id:"start-the-bridge_tester-script",children:"Start the bridge_tester script"}),(0,s.jsxs)(t.p,{children:["After you started the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script, you can start the ",(0,s.jsx)(t.strong,{children:"bridge_tester"})," script.\nThis script is used to test the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script and to make sure that everything is working correctly.\nYou can start the ",(0,s.jsx)(t.strong,{children:"bridge_tester"})," script with the following command in your txAdmin console:"]}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"start bridge_tester"})})})}),(0,s.jsx)(t.h3,{id:"test-the-script",children:"Test the script"}),(0,s.jsxs)(t.p,{children:["After you have started the ",(0,s.jsx)(t.strong,{children:"bridge_tester"})," script, you can test the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script."]}),(0,s.jsxs)(o.Rg,{children:[(0,s.jsx)(t.h4,{id:"1-test-your-framework",children:"1. Test your Framework"}),(0,s.jsx)(t.p,{children:"To test if the it_brige script is working correctly, with your framework, you can use the following command in your txAdmin console:"}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTestFramework id money bank blackMoney"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"money"}),": The amount of money (cash) the player currently has."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"bank"}),": The amount of money the player currently has in the bank."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"blackMoney"}),": The amount of black money the player currently has."]}),"\n"]}),(0,s.jsx)(a.U,{type:"info",children:(0,s.jsxs)(t.p,{children:["If you are using ",(0,s.jsx)(t.strong,{children:"qb-core"}),", ",(0,s.jsx)(t.strong,{children:"qBox"})," as your framework set the amount for ",(0,s.jsx)(t.strong,{children:"blackMoney"})," to the amount of crypto the player has.\nIf you are using ",(0,s.jsx)(t.strong,{children:"ND_Core"})," set the amount for ",(0,s.jsx)(t.strong,{children:"blackMoney"})," to 0."]})}),(0,s.jsxs)(t.p,{children:["After you issued the command, you should see some messages in your server console,\nthe script will automatically test the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script with the given values."]}),(0,s.jsxs)(t.p,{children:["The script will print the result of every test in the server console.\nIf you encounter any errors, please report them in the ",(0,s.jsx)(t.a,{href:"https://discord.it-scripts.com",children:"Discord"}),"."]}),(0,s.jsx)(t.h5,{id:"example-input",children:"Example input"}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTestFramework "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1000"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"500"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]})})}),(0,s.jsx)(t.h5,{id:"example-output",children:"Example output"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https:/i.imgur.com/X4SPCCK.png",title:"Open Image",children:(0,s.jsx)(t.img,{src:"https://i.imgur.com/X4SPCCK.png",alt:"Example Output"})})}),(0,s.jsx)(t.h4,{id:"2-test-your-inventory-script",children:"2. Test your Inventory Script"}),(0,s.jsxs)(t.p,{children:["To test if the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script is working correctly with your inventory script, you can use the following command in your txAdmin console:"]}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTestInventory id item"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"item"}),": The item you want to test the script with."]}),"\n"]}),(0,s.jsx)(a.U,{type:"info",children:(0,s.jsxs)(t.p,{children:["For the item parameter, you can use any item that is in your inventory ",(0,s.jsx)(t.strong,{children:"except"})," for the money items."]})}),(0,s.jsxs)(t.p,{children:["After you issued the command, you should see some messages in your server console,\nthe script will automatically test the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script with the given values."]}),(0,s.jsxs)(t.p,{children:["The script will print the result of every test in the server console.\nIf you encounter any errors, please report them in the ",(0,s.jsx)(t.a,{href:"https://discord.it-scripts.com",children:"Discord"}),"."]}),(0,s.jsx)(t.h5,{id:"example-input-1",children:"Example input"}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTestInventory "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" bread"})]})})}),(0,s.jsx)(t.h5,{id:"example-output-1",children:"Example output"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https:/i.imgur.com/OIiB92j.png",title:"Open Image",children:(0,s.jsx)(t.img,{src:"https://i.imgur.com/OIiB92j.png",alt:"Example Output"})})}),(0,s.jsx)(t.h4,{id:"3-test-your-notification-script",children:"3. Test your Notification Script"}),(0,s.jsxs)(t.p,{children:["To test if the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script is working correctly with your notification script, you can use the following command in your txAdmin console:"]}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTestNotify id"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n"]}),(0,s.jsx)(t.p,{children:"After you issued the command, the targeted player should receive 4 notifications (every notification type for 5 Seconds) on the screen."}),(0,s.jsxs)(t.p,{children:["If the player does not receive the notifications, please report this in the ",(0,s.jsx)(t.a,{href:"https://discord.it-scripts.com",children:"Discord"}),"."]}),(0,s.jsx)(t.h5,{id:"example-input-2",children:"Example input"}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTestNotify "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]})})}),(0,s.jsx)(t.h4,{id:"4-test-your-textui-script",children:"4. Test your TextUI Script"}),(0,s.jsxs)(t.p,{children:["To test if the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script is working correctly with your TextUI script, you can use the following command in your txAdmin console:"]}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTestTextUI id"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n"]}),(0,s.jsx)(t.p,{children:"After you issued the command, the targeted player should receive a TextUI on the screen. On some TextUI scripts, you will recive TextUIs with a different design and on others you will recive a TextUI with the default design.\nThis is normal and should not be a problem."}),(0,s.jsxs)(t.p,{children:["If the player does not receive the TextUI, please report this in the ",(0,s.jsx)(t.a,{href:"https://discord.it-scripts.com",children:"Discord"}),"."]}),(0,s.jsx)(t.h5,{id:"example-input-3",children:"Example input"}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(t.span,{className:"line",children:[(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTestTextUI "}),(0,s.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]})})}),(0,s.jsx)(t.h4,{id:"5-test-your-menu-script",children:"5. Test your Menu Script"}),(0,s.jsx)(a.U,{type:"warning",children:(0,s.jsx)(t.p,{children:"Before testing the Menu, please make sure you have tested the Notification script."})}),(0,s.jsxs)(t.p,{children:["To test if the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script is working correctly with your Menu script, you can use the following command in your txAdmin console:"]}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTestMenu id"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n"]}),(0,s.jsx)(t.p,{children:"After you issued the command, the targeted player should receive a Menu on the screen. If you press any button on the menu, the script will show a notification."}),(0,s.jsxs)(t.p,{children:["If the player does not receive the Menu, please report this in the ",(0,s.jsx)(t.a,{href:"https://discord.it-scripts.com",children:"Discord"}),"."]}),(0,s.jsx)(t.h4,{id:"6-test-your-target-script",children:"6. Test your Target Script"}),(0,s.jsx)(a.U,{type:"info",children:(0,s.jsx)(t.p,{children:"To test your Target script, you need more than one command to test it, because you have to test every target type separately."})}),(0,s.jsxs)(t.p,{children:["To test if the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script is working correctly with your Target script, you can use the following commands in your txAdmin console:"]}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeBoxZone id"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n"]}),(0,s.jsx)(t.p,{children:"After you issued the command, in front of the targeted player should appear a prop with a box zone around. If the player tries to target the zone there should be two options.\nThe prop and the box zone should disappear after 15 seconds."}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeTargetEntity id"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n"]}),(0,s.jsx)(t.p,{children:"After you issued the command, in front of the targeted player should appear a prop. If the player tries to target the entity there should be two options.\nThe prop should disappear after 15 seconds."}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeGlobalPedTest id"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n"]}),(0,s.jsxs)(t.p,{children:["After you issued the command, the targeted player should have two target options on every ped in the server. ",(0,s.jsx)(t.strong,{children:"The script will not spawn a ped!"}),"\nAfter 15 seconds the target options should disappear."]}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeGlobalVehicle id"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n"]}),(0,s.jsxs)(t.p,{children:["After you issued the command, the targeted player should have two target options on every vehicle in the server. ",(0,s.jsx)(t.strong,{children:"The script will not spawn a vehicle!"}),"\nAfter 15 seconds the target options should disappear."]}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeGlobalPlayer id"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n"]}),(0,s.jsx)(a.U,{type:"warning",children:(0,s.jsx)(t.p,{children:"To test the globalPlayer command there should be at least one other player in the server."})}),(0,s.jsx)(t.p,{children:"After you issued the command, the targeted player should have two target options on every player in the server.\nAfter 15 seconds the target options should disappear."}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"bridgeModel id"})})})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"id"}),": The player ID you want to test the script with."]}),"\n"]}),(0,s.jsx)(t.p,{children:"After you issued the command, in front of the targeted player should appear a prop. If the player tries to target the prop there should be two options.\nThe prop should disappear after 15 seconds."}),(0,s.jsxs)(t.p,{children:["If there any problems with the target script, please report this in the ",(0,s.jsx)(t.a,{href:"https://discord.it-scripts.com",children:"Discord"}),"."]})]}),(0,s.jsx)(t.h3,{id:"report-your-results",children:"Report your results"}),(0,s.jsxs)(t.p,{children:["After you have tested the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script, you should report your results in the ",(0,s.jsx)(t.a,{href:"https://discord.it-scripts.com",children:"Discord"}),".\nPlease report your results regardless of whether there were errors or not, this will help us to improve the script and to fix any errors that may occur."]}),(0,s.jsxs)(t.p,{children:["For reporting, please join the Discord and go to the ",(0,s.jsx)(t.code,{children:"\uD83D\uDCD1・tickets"})," channel and open a ",(0,s.jsx)(t.code,{children:"Bridge Results"})," Ticket.\nIn this ticket, please provide the following information:"]}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Image of the startup message of the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script."]}),"\n",(0,s.jsxs)(t.li,{children:["Results of the tests.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsxs)(t.em,{children:["If you do not have any errors you can just send a short message like ",(0,s.jsx)(t.code,{children:"No errors found!"})]})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"If you have any errors, please provide the error message and a description of what you did before the error occurred. And an image of you txAdmin and F8 Console."})}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(t.h3,{id:"stop-the-bridge_tester-script",children:"Stop the bridge_tester script"}),(0,s.jsxs)(t.p,{children:["After you have tested the ",(0,s.jsx)(t.strong,{children:"it_bridge"})," script, you can stop the ",(0,s.jsx)(t.strong,{children:"bridge_tester"})," script with the following command in your txAdmin console:"]}),(0,s.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(t.span,{className:"line",children:(0,s.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"stop bridge_tester"})})})})]})]})}t.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,n.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/it_bridge/test.mdx",route:"/it_bridge/test",frontMatter:{title:"it_bridge - How to test?",description:"Welcome to the it_bridge test guide, here you can learn how to completely test our asset, following each step we will achieve a clean and fluid test where you will not find any problems, as long as the documentation has been completed in full."},title:"it_bridge - How to test?",headings:l},pageNextRoute:"/it_bridge/test"})},772:function(e,t,r){"use strict";r.d(t,{U:function(){return Callout}});var s=r(6259),i=r(1048),n=(0,i.Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]),a=(0,i.Z)("alert-triangle","IconAlertTriangle",[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),o=(0,i.Z)("info-circle","IconInfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]),l=(0,i.Z)("alert-circle","IconAlertCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 8v4",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]]),d=r(1527),h={default:"\uD83D\uDCA1",success:(0,d.jsx)(n,{className:"mt-1 size-5"}),error:(0,d.jsx)(a,{className:"mt-1 size-5"}),info:(0,d.jsx)(o,{className:"mt-1 size-5"}),warning:(0,d.jsx)(l,{className:"mt-1 size-5"})},c={default:(0,s.Z)("border border-orange-100 bg-orange-50 text-orange-800 dark:border-0 dark:bg-orange-400/20 dark:text-orange-300"),success:(0,s.Z)("border border-green-50 bg-green-50 text-green-900 dark:border-0 dark:bg-green-900/30 dark:text-green-200"),error:(0,s.Z)("border border-red-100 bg-red-100 text-red-900 dark:border-0 dark:bg-red-900/30 dark:text-red-200"),info:(0,s.Z)("border border-blue-100 bg-blue-100 text-blue-900 dark:border-0 dark:bg-blue-900/30 dark:text-blue-200"),warning:(0,s.Z)("border border-yellow-50 bg-yellow-50 text-yellow-900 dark:border-0 dark:bg-yellow-700/30 dark:text-yellow-200")};function Callout(e){let{children:t,type:r="default",emoji:i=h[r]}=e;return(0,d.jsxs)("div",{className:(0,s.Z)("nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4","contrast-more:nx-border-current contrast-more:dark:nx-border-current",c[r]),children:[(0,d.jsx)("div",{className:"nx-select-none nx-text-xl ltr:nx-pl-3 ltr:nx-pr-2 rtl:nx-pr-3 rtl:nx-pl-2",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'},children:i}),(0,d.jsx)("div",{className:"nx-w-full nx-min-w-0 nx-leading-7",children:t})]})}},4049:function(e,t,r){"use strict";var s=r(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,r,i,n,a){if(a!==s){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,t,r){e.exports=r(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[7154,9774,2888,179],function(){return e(e.s=8497)}),_N_E=e.O()}]);
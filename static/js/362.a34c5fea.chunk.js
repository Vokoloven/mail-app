"use strict";(self.webpackChunkmail_app=self.webpackChunkmail_app||[]).push([[362],{6077:function(e,t,n){n.d(t,{h:function(){return a}});var o=n(4942),r=n(1614),a=(0,n(6934).ZP)(r.Z)((function(e){var t,n=e.theme;return t={padding:0},(0,o.Z)(t,n.breakpoints.up("mobile"),{maxWidth:n.breakpoints.values.mobile}),(0,o.Z)(t,n.breakpoints.up("tablet"),{maxWidth:n.breakpoints.values.tablet}),(0,o.Z)(t,n.breakpoints.up("laptop"),{maxWidth:n.breakpoints.values.laptop}),(0,o.Z)(t,n.breakpoints.up("desktop"),{maxWidth:n.breakpoints.values.desktop}),t}))},9589:function(e,t,n){n.d(t,{R:function(){return d},X:function(){return h}});var o=n(9434),r=n(5527),a=n(4554),i=n(890),l=n(7047),s=n(7342),c=n(184),d=function(){var e=(0,o.v9)(s.C),t=e.loading,n=e.data.data,d=[{name:"status",field:null===n||void 0===n?void 0:n[0].Status},{name:"sender",field:null===n||void 0===n?void 0:n[0].WarehouseSender},{name:"receiver",field:null===n||void 0===n?void 0:n[0].WarehouseRecipient}];return"idle"!==t?(0,c.jsx)(r.Z,{sx:{mt:4,p:2},elevation:4,children:(0,c.jsx)(a.Z,{component:"ul",sx:{p:0,m:0},children:d.map((function(e){var n,o=e.name,r=e.field;return r&&(0,c.jsx)(a.Z,{component:"li",sx:{listStyle:"none","&:not(:last-child)":{mb:1}},children:(0,c.jsx)(i.Z,{variant:"h6",component:"p",sx:{fontSize:16},children:"pending"===t?(0,c.jsx)(l.Z,{}):"".concat((n=o,n.replace(/\w/,(function(e){return e.toUpperCase()}))),": ").concat(r)})},o)}))})}):null},u=n(2791),p=n(7621),v=n(9504),h=u.forwardRef((function(e,t){var n=e.warehouse,o=n.Description,r=n.ShortAddress,a=e.loading;return t?(0,c.jsx)(p.Z,{ref:t,sx:{minWidth:275,"&:not(last-child)":{mb:2}},elevation:4,children:(0,c.jsxs)(v.Z,{children:[(0,c.jsx)(i.Z,{sx:{fontSize:14,fontWeight:"bold"},color:"text.secondary",gutterBottom:!0,children:"pending"===a?(0,c.jsx)(l.Z,{}):o.match(/[\u0430-\u0449\u0410-\u0429\u042c\u044c\u042e\u044e\u042f\u044f\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491' \u2116\d"()]+/)}),(0,c.jsxs)(i.Z,{color:"text.secondary",children:[" ","pending"===a?(0,c.jsx)(l.Z,{}):r]})]})}):(0,c.jsx)(p.Z,{sx:{minWidth:275,"&:not(last-child)":{mb:2}},elevation:4,children:(0,c.jsxs)(v.Z,{children:[(0,c.jsx)(i.Z,{sx:{fontSize:14,fontWeight:"bold"},color:"text.secondary",gutterBottom:!0,children:"pending"===a?(0,c.jsx)(l.Z,{}):o.match(/[\u0430-\u0449\u0410-\u0429\u042c\u044c\u042e\u044e\u042f\u044f\u0407\u0457\u0406\u0456\u0404\u0454\u0490\u0491' \u2116\d"()]+/)}),(0,c.jsx)(i.Z,{color:"text.secondary",children:"pending"===a?(0,c.jsx)(l.Z,{}):r})]})})}))},6362:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var o=n(4942),r=n(1413),a=n(9589),i=n(890),l=n(3366),s=n(7462),c=n(2791),d=n(3733),u=n(4419),p=n(2065),v=n(6934),h=n(1402),m=n(4036),x=n(5527),f=n(5878),g=n(1217);function Z(e){return(0,g.Z)("MuiAlert",e)}var j=(0,f.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),b=n(3400),C=n(9201),S=n(184),A=(0,C.Z)((0,S.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),y=(0,C.Z)((0,S.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),k=(0,C.Z)((0,S.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=(0,C.Z)((0,S.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),w=(0,C.Z)((0,S.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),W=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],z=(0,v.ZP)(x.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["".concat(n.variant).concat((0,m.Z)(n.color||n.severity))]]}})((function(e){var t=e.theme,n=e.ownerState,r="light"===t.palette.mode?p._j:p.$n,a="light"===t.palette.mode?p.$n:p._j,i=n.color||n.severity;return(0,s.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},i&&"standard"===n.variant&&(0,o.Z)({color:t.vars?t.vars.palette.Alert["".concat(i,"Color")]:r(t.palette[i].light,.6),backgroundColor:t.vars?t.vars.palette.Alert["".concat(i,"StandardBg")]:a(t.palette[i].light,.9)},"& .".concat(j.icon),t.vars?{color:t.vars.palette.Alert["".concat(i,"IconColor")]}:{color:t.palette[i].main}),i&&"outlined"===n.variant&&(0,o.Z)({color:t.vars?t.vars.palette.Alert["".concat(i,"Color")]:r(t.palette[i].light,.6),border:"1px solid ".concat((t.vars||t).palette[i].light)},"& .".concat(j.icon),t.vars?{color:t.vars.palette.Alert["".concat(i,"IconColor")]}:{color:t.palette[i].main}),i&&"filled"===n.variant&&(0,s.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert["".concat(i,"FilledColor")],backgroundColor:t.vars.palette.Alert["".concat(i,"FilledBg")]}:{backgroundColor:"dark"===t.palette.mode?t.palette[i].dark:t.palette[i].main,color:t.palette.getContrastText(t.palette[i].main)}))})),L=(0,v.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),I=(0,v.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0",minWidth:0,overflow:"auto"}),R=(0,v.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),P={success:(0,S.jsx)(A,{fontSize:"inherit"}),warning:(0,S.jsx)(y,{fontSize:"inherit"}),error:(0,S.jsx)(k,{fontSize:"inherit"}),info:(0,S.jsx)(M,{fontSize:"inherit"})},B=c.forwardRef((function(e,t){var n,o,r,a,i,c,p=(0,h.Z)({props:e,name:"MuiAlert"}),v=p.action,x=p.children,f=p.className,g=p.closeText,j=void 0===g?"Close":g,C=p.color,A=p.components,y=void 0===A?{}:A,k=p.componentsProps,M=void 0===k?{}:k,B=p.icon,N=p.iconMapping,H=void 0===N?P:N,O=p.onClose,T=p.role,_=void 0===T?"alert":T,E=p.severity,F=void 0===E?"success":E,V=p.slotProps,X=void 0===V?{}:V,K=p.slots,$=void 0===K?{}:K,D=p.variant,U=void 0===D?"standard":D,q=(0,l.Z)(p,W),G=(0,s.Z)({},p,{color:C,severity:F,variant:U}),J=function(e){var t=e.variant,n=e.color,o=e.severity,r=e.classes,a={root:["root","".concat(t).concat((0,m.Z)(n||o)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,u.Z)(a,Z,r)}(G),Q=null!=(n=null!=(o=$.closeButton)?o:y.CloseButton)?n:b.Z,Y=null!=(r=null!=(a=$.closeIcon)?a:y.CloseIcon)?r:w,ee=null!=(i=X.closeButton)?i:M.closeButton,te=null!=(c=X.closeIcon)?c:M.closeIcon;return(0,S.jsxs)(z,(0,s.Z)({role:_,elevation:0,ownerState:G,className:(0,d.Z)(J.root,f),ref:t},q,{children:[!1!==B?(0,S.jsx)(L,{ownerState:G,className:J.icon,children:B||H[F]||P[F]}):null,(0,S.jsx)(I,{ownerState:G,className:J.message,children:x}),null!=v?(0,S.jsx)(R,{ownerState:G,className:J.action,children:v}):null,null==v&&O?(0,S.jsx)(R,{ownerState:G,className:J.action,children:(0,S.jsx)(Q,(0,s.Z)({size:"small","aria-label":j,title:j,color:"inherit",onClick:O},ee,{children:(0,S.jsx)(Y,(0,s.Z)({fontSize:"small"},te))}))}):null]}))})),N=n(4554),H=n(3239),O=n(6077),T=n(6321),_=function(){var e=(0,T._f)(),t=e.loading,n=e.warehouses,l=e.lastOfWarehouses,s=null===n||void 0===n?void 0:n.map((function(e,o){return(null===n||void 0===n?void 0:n.length)===o+1?(0,S.jsx)(a.X,{ref:l,warehouse:e,loading:t},e.SiteKey):(0,S.jsx)(a.X,{warehouse:e,loading:t},e.SiteKey)}));return(0,S.jsxs)(O.h,{children:[Boolean(n.length)?(0,S.jsx)(i.Z,{component:"h1",variant:"h4",sx:{mb:3,fontWeight:"500"},children:"Office locations"}):(0,S.jsx)(B,{severity:"warning",children:"For viewing nearest office locations, please write TTN number on Home Page"}),(0,S.jsx)(N.Z,{sx:function(e){return(0,o.Z)({},e.breakpoints.up("tablet"),(0,r.Z)({maxWidth:"420px"},"pending"!==t&&{pb:8}))},children:s}),"pending"===t&&(0,S.jsxs)(N.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",pb:4},children:[(0,S.jsx)(i.Z,{component:"p",variant:"h6",sx:{mr:3},children:"Loading..."}),(0,S.jsx)(H.Z,{sx:{color:"violet.main"}})]})]})}}}]);
//# sourceMappingURL=362.a34c5fea.chunk.js.map
(this["webpackJsonpwifi-hotspots"]=this["webpackJsonpwifi-hotspots"]||[]).push([[0],{39:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(13),i=n.n(s),r=(n(39),n(15)),o=n(9),l=n(4);function j(){return Object(l.jsxs)("div",{className:"hero",children:[Object(l.jsx)("h1",{children:"Need free wifi? No problem, we got you covered."}),Object(l.jsx)("h2",{children:"Check available locations below"}),Object(l.jsx)(r.b,{to:"/map",children:Object(l.jsx)("button",{className:"button accent",children:"Go to map"})})]})}function d(){return Object(l.jsx)("div",{className:"home-wrapper",children:Object(l.jsx)(j,{})})}var b=n(14),u=n(22),O=n(30);O.a.initializeApp({apiKey:"AIzaSyBFwVednYbsHTG7dVPa-R6M22axYOhR49g",authDomain:"wi-fi-passwords-1507376197308.firebaseapp.com",databaseURL:"https://wi-fi-passwords-1507376197308.firebaseio.com",projectId:"wi-fi-passwords-1507376197308",storageBucket:"wi-fi-passwords-1507376197308.appspot.com",messagingSenderId:"1065417100124"});var h=O.a,x=n(28),p=n(29),f=function(e){var t=Object(a.useState)(!0),n=Object(b.a)(t,2),c=n[0],s=n[1],i=e.data;return Object(l.jsxs)("div",{className:"marker-container",children:[e.isActive?Object(l.jsxs)("div",{className:"info-container",hidden:c,children:[Object(l.jsxs)("h2",{children:["Name: ",e.data.name," "]}),Object(l.jsxs)("h2",{children:["Network: ",e.data.network," "]}),Object(l.jsxs)("h2",{children:["Password: ",e.data.pass," "]})]}):Object(l.jsxs)("div",{className:"functions-container ".concat(c?null:"show"),children:[Object(l.jsx)("button",{className:"button rounded",onClick:function(t){h.database().ref("places").child(e.id).remove().then((function(e){console.log(e)}))},children:Object(l.jsx)(x.a,{icon:p.b})}),Object(l.jsx)("button",{className:"button rounded",onClick:function(t){return function(t){t.preventDefault(),e.onEdit(e.data,e.id)}(t)},children:Object(l.jsx)(x.a,{icon:p.a})})]}),Object(l.jsx)("div",{className:"pin ".concat(i?null:"not-active"),onClick:function(){return i?s(!c):null}})]})};function m(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){h.database().ref("places").on("value",(function(e){c(e.val())}))}),[]);var s={center:{lat:42.28389,lng:22.69111},zoom:14};return Object(l.jsx)("div",{children:Object(l.jsx)("div",{style:{height:"92vh",width:"100%"},children:Object(l.jsx)(u.a,{bootstrapURLKeys:{key:"AIzaSyBFwVednYbsHTG7dVPa-R6M22axYOhR49g"},defaultCenter:s.center,defaultZoom:s.zoom,children:n?Object.keys(n).map((function(e,t){return Object(l.jsx)(f,{lat:n[e].marker.lat,lng:n[e].marker.lon,data:n[e],id:e,isActive:!0},t)})):null})})})}var v=n(21),g=n(18);function w(){var e=Object(a.useState)(void 0),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(void 0),i=Object(b.a)(s,2),r=i[0],j=i[1],d=Object(a.useState)(null),O=Object(b.a)(d,2),x=O[0],p=O[1],m=Object(o.f)(),w=Object(a.useState)({name:"",network:"",pass:"",id:"",marker:{lat:"",lon:"",x:"",y:""}}),k=Object(b.a)(w,2),y=k[0],N=k[1];Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;c({lat:n,lon:a})})),h.database().ref("places").on("value",(function(e){p(e.val())}))}),[]);var C=function(e,t){N(Object(g.a)(Object(g.a)({},y),{},{name:e.name,network:e.network,pass:e.pass,id:t,marker:Object(g.a)({},e.marker)}))},S=function(e){var t=e.target;N(Object(g.a)(Object(g.a)({},y),{},Object(v.a)({},t.name,t.value)))};return n?Object(l.jsxs)("div",{className:"new-location-page",children:[Object(l.jsx)("div",{className:"map-wrapper",children:Object(l.jsxs)(u.a,{bootstrapURLKeys:{key:"AIzaSyBFwVednYbsHTG7dVPa-R6M22axYOhR49g"},defaultCenter:{lat:n.lat,lng:n.lon},onClick:function(e){return function(e){j({lat:e.lat,lon:e.lng,x:e.x,y:e.y}),N(Object(g.a)(Object(g.a)({},y),{},{marker:{lat:e.lat,lon:e.lng,x:e.x,y:e.y}}))}(e)},defaultZoom:15,children:[x?Object.keys(x).map((function(e,t){return Object(l.jsx)(f,{lat:x[e].marker.lat,lng:x[e].marker.lon,data:x[e],id:e,isActive:!1,onEdit:C},t)})):null,r?Object(l.jsx)(f,{lat:r.lat,lng:r.lon,isActive:!1}):null]})}),Object(l.jsxs)("form",{className:"form",children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("div",{children:"Name"}),Object(l.jsx)("input",{type:"text",name:"name",value:y.name,onChange:S})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("div",{children:"WiFi Network"}),Object(l.jsx)("input",{type:"text",name:"network",value:y.network,onChange:S})]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("div",{children:"WiFi Password"}),Object(l.jsx)("input",{type:"text",name:"pass",value:y.pass,onChange:S})]}),Object(l.jsxs)("div",{className:"button-wrapper",children:[Object(l.jsx)("button",{className:"button secondary",onClick:function(e){return y.id?void h.database().ref("places").child(y.id).update(y):function(e){e.preventDefault(),h.database().ref("places").push(y).then((function(e){alert("added marker"),m.push("/map")}))}(e)},children:y.id?"save":"submit"}),Object(l.jsx)("button",{className:"button primary",onClick:function(e){e.preventDefault(),j(null)},children:"clear marker"})]})]})]}):Object(l.jsx)("h1",{children:"Loading..."})}var k=function(){return Object(l.jsxs)("nav",{className:"navigation",children:[Object(l.jsxs)("div",{className:"logo",children:[" ",Object(l.jsx)(r.b,{to:"/",children:"WifiHotspots"})]}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/map",children:"Map"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/location",children:"Add Location"})})]})]})},y=function(){return Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{path:"/about",children:Object(l.jsx)("h1",{children:"About"})}),Object(l.jsx)(o.a,{path:"/location",children:Object(l.jsx)(w,{})}),Object(l.jsx)(o.a,{path:"/map",children:Object(l.jsx)(m,{})}),Object(l.jsx)(o.a,{path:"/",children:Object(l.jsx)(d,{})})]})};function N(){return Object(l.jsxs)(r.a,{basename:"/WifiHotspots/",children:[Object(l.jsx)(k,{}),Object(l.jsx)(y,{})]})}var C=function(){return Object(l.jsx)(N,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),S()}},[[50,1,2]]]);
//# sourceMappingURL=main.d05f0ca4.chunk.js.map
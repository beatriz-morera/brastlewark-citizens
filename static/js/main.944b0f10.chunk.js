(this["webpackJsonpbrastlewark-citizens"]=this["webpackJsonpbrastlewark-citizens"]||[]).push([[0],{121:function(e,a,t){e.exports=t(202)},126:function(e,a,t){},202:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),i=(t(126),t(23)),s=t(9),m=t(205),o=r.a.memo((function(e){var a=e.thumbnail,t=e.name,n=e.age,c=e.weight,l=e.height,s=e.id;return r.a.createElement(i.b,{to:"/search/".concat(s)},r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{className:"image",src:a,alt:t})),r.a.createElement("section",{className:"details-container"},r.a.createElement("h4",{className:"citizen-name"},t),r.a.createElement("ul",null,r.a.createElement("li",{className:"details"},r.a.createElement("span",{className:"details-title"},"age:")," ",n),r.a.createElement("li",{className:"details"},r.a.createElement("span",{className:"details-title"},"weight:")," ",c),r.a.createElement("li",{className:"details"},r.a.createElement("span",{className:"details-title"},"height:")," ",l))))))})),u=t(51),d=t(84),E=t.n(d),h=t(107),f="https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";function p(){return(p=Object(h.a)(E.a.mark((function e(){var a,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f);case 2:return a=e.sent,e.next=5,a.json();case 5:return t=e.sent,e.abrupt("return",t.Brastlewark);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=Object(n.createContext)([]);function b(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){(function(){return p.apply(this,arguments)})().then((function(e){return r(e)}))}),[]),t}var N=function(){return Object(n.useContext)(g)};var v=function(){var e=N();return r.a.createElement("section",{className:"all-cards-container","data-testid":"home-page"},r.a.createElement(m.a,{"data-testid":"citizens",dataSource:e,renderItem:function(e){return r.a.createElement(m.a.Item,null,r.a.createElement(o,Object.assign({key:e.id},e,{"data-testid":e.id})))},grid:{xs:1,sm:2,md:3,lg:3,xl:4,xxl:6},pagination:{size:"small",defaultPageSize:10,pageSizeOptions:["10","20","30"],showSizeChanger:!0}}))},w=t(204),x=t(206).a.Search,j=function(e){var a=e.onChange,t=Object(n.useCallback)((function(e){return a&&a(e)}),[a]);return r.a.createElement("div",{className:"filter-container"},r.a.createElement(x,{placeholder:"search citizents by name",onSearch:t,size:"large",enterButton:!0,"data-testid":"searchbar"}))},O=function(){var e=function(){var e=N(),a=Object(n.useState)([]),t=Object(u.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){return c(e)}),[e]),[r,Object(n.useCallback)((function(a){var t=a.trim();c(""!==t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):e)}),[e])]}(),a=Object(u.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"search-page-container","data-testid":"search-page"},r.a.createElement(j,{onChange:c}),r.a.createElement("section",{className:"list-container"},r.a.createElement(m.a,{loading:0===t.length,itemLayout:"horizontal",dataSource:t.slice(0,100),renderItem:function(e){return r.a.createElement(m.a.Item,null,r.a.createElement(m.a.Item.Meta,{avatar:r.a.createElement(w.a,{src:e.thumbnail}),title:e.name}),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/search/".concat(e.id)},"View")))}})))},z=function(){var e=Object(s.g)().id,a=N(),t=Object(n.useMemo)((function(){return a.find((function(a){return e&&a.id===parseInt(e,10)}))}),[a,e]),c=Object(n.useMemo)((function(){return t&&t.friends?t.friends.map((function(e){return a.find((function(a){return a.name===e}))})):[]}),[t,a]);return r.a.createElement("div",{className:"deatail-page-container"},t&&r.a.createElement("section",{className:"detail-page-container"},r.a.createElement("div",null,r.a.createElement(w.a,{size:250,src:t.thumbnail,"data-testid":"avatar"}),r.a.createElement("div",{className:"detail-page-basic-info-container"},r.a.createElement("h3",{className:"citizen-name","data-testid":"name"},t.name),r.a.createElement("ul",null,r.a.createElement("li",{className:"detail-page-info"},r.a.createElement("span",{className:"details-title"},"age: "),t.age),r.a.createElement("li",{className:"detail-page-info"},r.a.createElement("span",{className:"details-title"},"weight: "),t.weight),r.a.createElement("li",{className:"detail-page-info"},r.a.createElement("span",{className:"details-title"},"height: "),t.height),r.a.createElement("li",{className:"detail-page-info"},r.a.createElement("span",{className:"details-title"},"hair color: "),t.hair_color)))),r.a.createElement("div",{className:"detail-page-extra-info-container"},r.a.createElement("div",{className:"detail-page-extra-info"},r.a.createElement("h3",{style:{margin:"16px 0",fontWeight:"600"}},"Professions"),t.professions.length?r.a.createElement(m.a,{size:"small",itemLayout:"horizontal",dataSource:t.professions,renderItem:function(e){return r.a.createElement(m.a.Item,null,e)}}):r.a.createElement("p",{style:{color:"red"}},"No professions to show.")),r.a.createElement("div",{className:"detail-page-extra-info"},r.a.createElement("h3",{style:{margin:"16px 0",fontWeight:"600"}},"Friends"),r.a.createElement("div",{className:"friends-info-container-container"},r.a.createElement("ul",{className:"friends-info-container"},t.friends.length?c.map((function(e){return r.a.createElement("li",{className:"friend-info",key:e.id},r.a.createElement(w.a,{size:70,src:e.thumbnail}),r.a.createElement(i.b,{to:"/search/".concat(e.id),style:{marginTop:"15px"}},e.name))})):r.a.createElement("p",{style:{color:"red"}},"No friends to show.")))))))},k=function(e){var a=e.children,t=b();return r.a.createElement(g.Provider,{value:t},a)},y=function(){return r.a.createElement(k,null,r.a.createElement(i.a,null,r.a.createElement("header",{className:"navigation","data-testid":"header"},r.a.createElement(i.b,{to:"/home","data-testid":"home-link"},r.a.createElement("h1",{className:"page-title"},"BRASTLEWARK")),r.a.createElement("ul",{className:"navigation-items"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/home",className:"navigation-elements"},"HOME")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/search",className:"navigation-elements","data-testid":"search-link"},"SEARCH")))),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/home",component:v,exact:!0}),r.a.createElement(s.b,{path:"/search",component:O,exact:!0}),r.a.createElement(s.b,{path:"/search/:id",component:z}),r.a.createElement(s.b,{path:"/",render:function(){return r.a.createElement(s.a,{to:"/home"})},exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[121,1,2]]]);
//# sourceMappingURL=main.944b0f10.chunk.js.map
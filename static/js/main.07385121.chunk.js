(this.webpackJsonpttstats=this.webpackJsonpttstats||[]).push([[0],{360:function(e){e.exports=JSON.parse('[["server.tycoon.community:30120","Server #1 (OneSync)"],["server.tycoon.community:30122","Server #2"],["server.tycoon.community:30123","Server #3"],["server.tycoon.community:30124","Server #4"],["server.tycoon.community:30125","Server #5 (Beta)"],["ca.tycoon.community:30120","Server #6"],["ca.tycoon.community:30122","Server #7"],["ca.tycoon.community:30123","Server #8"],["ca.tycoon.community:30124","Server #9"],["ca.tycoon.community:30125","Server #A"]]')},364:function(e,t,a){e.exports=a(401)},400:function(e,t,a){},401:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"initAllServers",(function(){return F})),a.d(n,"fetchServer",(function(){return v})),a.d(n,"fetchDetailedServer",(function(){return f}));a(90),a(100),a(101),a(102),a(103),a(104),a(105),a(106),a(107),a(108),a(109),a(110),a(111),a(112),a(113),a(153),a(155),a(156),a(157),a(158),a(159),a(160),a(162),a(163),a(117),a(167),a(168),a(69),a(172),a(173),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(190),a(191),a(192),a(193),a(194),a(195),a(125),a(196),a(198),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(127),a(215),a(216),a(217),a(218),a(220),a(221),a(222),a(223),a(224),a(226),a(228),a(230),a(231),a(233),a(234),a(235),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(128),a(254),a(255),a(256),a(257),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(130),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(86),a(284),a(285),a(287),a(288),a(289),a(290),a(291),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(300),a(301),a(302),a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(334),a(335),a(336),a(337),a(338),a(339),a(340),a(341),a(342),a(343),a(344),a(345),a(346),a(348),a(349),a(351),a(352),a(353),a(354),a(356),a(138),a(377),a(385);var r=a(0),l=a.n(r),c=a(359),u=a.n(c),s=a(29),o=a(48),i=a(37),m=a(15),E=a(360),d=function(e){return new Promise((function(t,a){setTimeout((function(){return a(new Error("timeout"))}),2e3),e.then(t,a)}))},F=function(){return function(e){e({type:"CLEARSERVERSLIST"}),E.forEach((function(t,a){e({type:"ADDSERVER",data:{error:null,isLoaded:!1,ip:t[0],name:t[1],playersData:null,serverData:null,lastUpdate:null,vehicleData:null},index:a}),v(t,a)(e)})),e({type:"SERVERSINITED"})}},v=function(e,t){return function(a){d(fetch("http://"+e[0]+"/status/widget/players.json").then((function(e){return e.json()}))).then((function(e){e.players.forEach((function(e){""===e[5]&&(e[5]="Unemployed")})),a({type:"UPDATESERVER",data:{isLoaded:!0,playersData:e.players,serverData:e.server,lastUpdate:Date.now()},index:t})}),(function(){a({type:"UPDATESERVER",data:{isLoaded:!0,error:!0,lastUpdate:Date.now()},index:t})})).catch((function(){a({type:"UPDATESERVER",data:{isLoaded:!0,error:!0,lastUpdate:Date.now()},index:t})}))}},f=function(e,t){return function(a){d(fetch("http://"+e.ip+"/status/map/positions.json").then((function(e){return e.json()}))).then((function(e){a({type:"UPDATESERVER",data:{vehicleData:e.players.map((function(e){return e[4]}))},index:t})})).catch((function(e){return console.log(e)}))}},p=function(e,t){switch(t.type){case"ADDSERVER":var a=e.servers.slice();return a.splice(t.index,0,t.data),e.servers=a,Object(m.a)({},e);case"SERVERSINITED":return Object(m.a)({},e,{inited:!0});case"UPDATESERVER":return e.servers=e.servers.map((function(e,a){return a!==t.index?e:Object(m.a)({},e,{},t.data)})),Object(m.a)({},e);case"CLEARSERVERSLIST":return e.servers=[],Object(m.a)({},e);default:return e}},h={servers:[],inited:!1},b=Object(r.createContext)(h),y=function(e){var t=e.children,a=Object(r.useReducer)(p,h),c=Object(i.a)(a,2),u=c[0],s=c[1];return Object(r.useEffect)((function(){F()(s)}),[]),l.a.createElement(b.Provider,{value:{state:u,dispatch:s,dispatchList:n}},t)};function D(){var e=Object(r.useContext)(b);return l.a.createElement("div",{id:"serversStatus"},l.a.createElement("h2",null,"Transport Tycoon Servers List"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Connect"),l.a.createElement("th",null,"Players"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Uptime"),l.a.createElement("th",null,"Details")),e.state.servers.map((function(e,t){return e.error?l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.ip,l.a.createElement("br",null),l.a.createElement("b",null,e.name)),l.a.createElement("td",null,"-/-"),l.a.createElement("td",{className:"offline"},"OFFLINE"),l.a.createElement("td",null),l.a.createElement("td",null)):!1===e.isLoaded?l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.ip,l.a.createElement("br",null),l.a.createElement("b",null,e.name)),l.a.createElement("td",null,"-/-"),l.a.createElement("td",{className:"loading"},"Loading"),l.a.createElement("td",null),l.a.createElement("td",null)):void 0===e.playersData?l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.ip,l.a.createElement("br",null),l.a.createElement("b",null,e.name)),l.a.createElement("td",null,"-/-"),l.a.createElement("td",{className:"offline"},"ERROR"),l.a.createElement("td",null),l.a.createElement("td",null)):l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("a",{href:"fivem://connect/"+e.ip,title:"Connect to the server"},e.ip),l.a.createElement("br",null),l.a.createElement("b",null,e.name)),l.a.createElement("td",null,e.playersData.length,"/",e.serverData.limit),l.a.createElement("td",{className:"online"},"ONLINE"),l.a.createElement("td",null,e.serverData?e.serverData.uptime:"-"),l.a.createElement("td",null,l.a.createElement(s.b,{to:"/?serverinfo="+(+t+1),className:"btn btn-primary"},"Players")))})))),l.a.createElement("h3",null,"Total Players Online: ",e.state.servers.reduce((function(e,t){return t.isLoaded&&t.playersData?e+t.playersData.length:e}),0)))}function S(e){var t=Object(r.useContext)(b),a=parseInt(e.url[1]);if(!a||isNaN(a))return l.a.createElement("h2",null,"URL ERROR");var n=t.state.servers[a-1];if(!1===t.state.inited)return l.a.createElement("h2",null,"Loading");if(void 0===n)return l.a.createElement("h2",null,"SERVER ERROR");var c=l.a.createElement("div",null,l.a.createElement("h2",null,"Name: ",n.name,l.a.createElement("br",null),"IP: ",l.a.createElement("a",{href:"fivem://connect/"+n.ip},n.ip),l.a.createElement("br",null),"Uptime: ",n.serverData?n.serverData.uptime:"?",l.a.createElement("br",null),"Players: ",n.playersData?n.playersData.length:0,"/",n.playersData?n.serverData.limit:0,l.a.createElement("br",null),l.a.createElement(s.b,{to:"/?status",className:"btn btn-primary"},"Back")));return n.playersData&&0!==n.playersData.length?l.a.createElement("div",{id:"serverInfo"},c,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Avatar"),l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Job")),n.playersData.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e[3]?l.a.createElement("a",{href:e[3],target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:e[3]||"#",height:"50px",alt:"img",className:"avatar"})):l.a.createElement("div",{className:"no-avatar"})),l.a.createElement("td",null,"#",t+1),l.a.createElement("td",null,l.a.createElement("b",null,e[0])),l.a.createElement("td",null,e[2]),l.a.createElement("td",null,e[5]||"-"))})))),l.a.createElement("h2",null,"Data received: ",new Date(n.lastUpdate).toTimeString())):l.a.createElement("div",{id:"serverInfo"},c,l.a.createElement("h2",null,"No Players"))}function O(e){var t,a=Object(r.useContext)(b);e.url.length>1&&e.url.forEach((function(e){var a=e.split(":");"job"===a[0]&&(t=decodeURI(a[1]))}));var n=Object(r.useState)({playerFinderMessages:[],playerFinderInputField:"",playerFinderFound:[],serverSelect:"All Servers",jobSelect:t||"All Jobs"}),c=Object(i.a)(n,2),u=c[0],s=c[1],o=Object(r.useState)([]),E=Object(i.a)(o,2),d=E[0],F=E[1],v=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=u.playerFinderInputField.toLowerCase(),n=[];a.state.servers.forEach((function(e){null!==e.playersData&&e.playersData.forEach((function(a){var r=a[0]+"#"+a[2];!r.toLowerCase().includes(t)||"All Servers"!==u.serverSelect&&u.serverSelect!==e.name||"All Jobs"!==u.jobSelect&&u.jobSelect!==a[5]||n.push([r,e.ip,e.name,a[3],a[5]])}))})),s((function(t){return n.length>0?Object(m.a)({},t,{playerFinderMessages:"Found "+n.length+" player"+(1===n.length?"":"s"),playerFinderFound:n}):Object(m.a)({},t,{playerFinderMessages:e?"Found nothing":"...",playerFinderFound:[]})}))};return Object(r.useEffect)((function(){var e=[];a.state.servers.forEach((function(t){t.playersData&&t.playersData.forEach((function(t){e.includes(t[5])||e.push(t[5])}))})),F(e),v(!1)}),[a.state.servers]),l.a.createElement("div",{id:"playerFinder"},l.a.createElement("h2",null,"Online Player Finder"),l.a.createElement("div",{id:"form"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"Player's name or in-game id",onChange:function(e){return function(e){var t=e.target.value;s((function(e){return Object(m.a)({},e,{playerFinderInputField:t})}))}(e)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v())}}),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"serverSelector"},"Filter Server"),l.a.createElement("select",{id:"serverSelector",onChange:function(e){var t=e.target.value;s((function(e){return Object(m.a)({},e,{serverSelect:t})}))},value:u.serverSelect},l.a.createElement("option",{value:"All Servers"},"All Servers"),a.state.servers.map((function(e,t){return e.isLoaded?l.a.createElement("option",{key:t,value:e.name},e.name):""})))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"jobSelector"},"Filter Job"),l.a.createElement("select",{id:"jobSelector",onChange:function(e){return function(e){var t=e.target.value;s((function(e){return Object(m.a)({},e,{jobSelect:t})}))}(e)},value:u.jobSelect},l.a.createElement("option",{value:"All Jobs"},"All Jobs"),d.map((function(e,t){return l.a.createElement("option",{key:t,value:e},e)})))),l.a.createElement("input",{type:"button",value:"search",onClick:function(){return v()}}))),l.a.createElement("h2",null,u.playerFinderMessages),u.playerFinderFound?l.a.createElement("table",null,l.a.createElement("tbody",null,u.playerFinderFound.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,(e[3],l.a.createElement("div",{className:"no-avatar"}))),l.a.createElement("td",null,"#",t+1),l.a.createElement("td",null,l.a.createElement("b",null,e[0])),l.a.createElement("td",null,e[4]||"-"),l.a.createElement("td",null,l.a.createElement("a",{href:"fivem://connect/"+e[1],title:"connect"},e[1]),l.a.createElement("br",null),l.a.createElement("b",null,e[2])))})))):"",l.a.createElement("h3",null,"Total Players Online: ",a.state.servers.reduce((function(e,t){return t.isLoaded&&t.playersData?e+t.playersData.length:e}),0)))}var j=a(363),A=a.n(j),C=["#FF0000","#00FF00","#800000","#00FFFF","#000000","#B8860B","#4B0082","#FFDEAD","#8B4513","#A52A2A","#B22222","#228B22","#008B8B","#BA55D3","#F0F8FF","#FF8C00","#FF69B4","#FFA07A","#C71585","#FFF8DC","#F0FFF0","#FFFFFF","#00FF7F","#0000FF","#FFF5EE","#2F4F4F","#006400","#9966CC","#FF6347","#ADD8E6","#FF0000","#00FF00","#800000","#00FFFF","#000000","#B8860B","#4B0082","#FFDEAD","#8B4513","#A52A2A","#B22222","#228B22","#008B8B","#BA55D3","#F0F8FF","#FF8C00","#FF69B4","#FFA07A","#C71585","#FFF8DC","#F0FFF0","#FFFFFF","#00FF7F","#0000FF","#FFF5EE","#2F4F4F","#006400","#9966CC","#FF6347","#ADD8E6","#FF69B4","#FFA07A","#C71585","#FFF8DC","#F0FFF0","#FFFFFF","#00FF7F","#0000FF","#FFF5EE","#2F4F4F","#006400","#9966CC","#FF6347","#ADD8E6","#FF0000","#00FF00","#800000","#00FFFF","#000000","#B8860B","#4B0082","#FFDEAD","#8B4513","#A52A2A","#B22222","#228B22","#008B8B","#BA55D3","#F0F8FF","#FF8C00","#FF69B4","#FFA07A","#C71585","#FFF8DC","#F0FFF0","#FFFFFF","#00FF7F","#0000FF","#FFF5EE","#2F4F4F","#006400","#9966CC","#FF6347","#ADD8E6"];function g(){var e=Object(r.useState)({entries:[],counter:0}),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({entries:[],counter:0}),u=Object(i.a)(c,2),o=u[0],E=u[1],d=Object(r.useContext)(b),F=Object(r.useRef)();return Object(r.useEffect)((function(){if(d.state.inited&&d.state.servers.reduce((function(e,t){return!0===t.isLoaded?e+1:e}),0)===d.state.servers.length){var e={},t={COCO:0,PIGS:0,RTS:0,BAT:0,FRLLC:0,IA:0};d.state.servers.forEach((function(a){!0===a.isLoaded&&null!==a.playersData&&a.playersData.forEach((function(a){void 0===e[a[5]]?e[a[5]]=1:e[a[5]]++,a[5].startsWith("P.I.G.S.")?t.PIGS++:a[5].startsWith("R.T.S.")?t.RTS++:a[5].startsWith("CollinsCo")?t.COCO++:a[5].startsWith("IA ")?t.IA++:a[5].startsWith("BAT")?t.BAT++:a[5].startsWith("FRLLC")&&t.FRLLC++}))}));var a=Object.entries(e).sort((function(e,t){return t[1]-e[1]})),r=Object.entries(t).sort((function(e,t){return t[1]-e[1]}));n((function(e){return Object(m.a)({},e,{entries:a,counter:a.reduce((function(e,t){return e+t[1]}),0)})})),E((function(e){return Object(m.a)({},e,{entries:r,counter:r.reduce((function(e,t){return e+t[1]}),0)})}))}}),[d.state.servers]),Object(r.useEffect)((function(){if(F&&F.current){var e=F.current.getContext("2d"),t=new A.a(e,{type:"pie",data:{labels:a.entries.map((function(e){return e[0]})),datasets:[{data:a.entries.map((function(e){return e[1]})),backgroundColor:C,borderWidth:0}]},options:{legend:{display:!1},responsive:!0,tooltips:{callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex],n=a.data.reduce((function(e,t){return e+t})),r=a.data[e.index],l=Math.floor(r/n*100+.5);return"".concat(t.labels[e.index]," - ").concat(r," players (").concat(l,"%)")}}}}});return function(){return t.destroy()}}}),[a]),l.a.createElement("div",{id:"jobsStats"},l.a.createElement("h2",null,"Top Jobs Now"),0===a.entries.length?l.a.createElement("div",null,"Loading..."):l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"%"),l.a.createElement("th",null,"Job Name"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Links")),a.entries.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,Number(e[1]/a.counter*100).toFixed(1),"%"),l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1]),l.a.createElement("td",null,l.a.createElement(s.b,{to:encodeURI("/?playerfinder=job:"+e[0])},"Players")))})))),l.a.createElement("div",{id:"split"}),l.a.createElement("h2",null,"Top Company Jobs Now"),0===o.entries.length?l.a.createElement("div",null,"Loading..."):l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"%"),l.a.createElement("th",null,"Job Name"),l.a.createElement("th",null,"Active")),o.entries.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,Number(e[1]/o.counter*100).toFixed(1),"%"),l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1]))})))),l.a.createElement("div",{id:"split"}),l.a.createElement("div",null,l.a.createElement("canvas",{id:"myChart",ref:F})),l.a.createElement("h3",null,"Total Players Online: ",d.state.servers.reduce((function(e,t){return t.isLoaded&&t.playersData?e+t.playersData.length:e}),0)))}function R(){var e=Object(r.useContext)(b);Object(r.useEffect)((function(){e.state.inited&&e.state.servers.forEach((function(t,a){!t.isLoaded||t.error||t.vehicleData||e.dispatchList.fetchDetailedServer(t,a)(e.dispatch)}))}),[e.state.inited,e.state.servers,e.dispatchList,e.dispatch]);var t={},a=0;return e.state.servers.forEach((function(e,n){e.vehicleData&&e.vehicleData.forEach((function(e){void 0===t[e.vehicle_model]?(t[e.vehicle_model]={counter:1,vehicle_name:e.vehicle_name},a++):(t[e.vehicle_model].counter++,a++)}))})),l.a.createElement("div",{id:"carsStats"},l.a.createElement("h2",null,"Top Vehicles Now"),l.a.createElement("table",null,l.a.createElement("tbody",null,0===t.length?l.a.createElement("tr",null,l.a.createElement("td",null,"N/A")):l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("th",null,"%"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Active")),Object.values(t).sort((function(e,t){return t.counter-e.counter})).map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,Number(e.counter/a*100).toFixed(2),"%"),l.a.createElement("td",null,"None"===e.vehicle_name?"None, On Foot":e.vehicle_name),l.a.createElement("td",null,e.counter))}))))),l.a.createElement("h3",null,"Total Players Online: ",e.state.servers.reduce((function(e,t){return t.isLoaded&&t.playersData?e+t.playersData.length:e}),0)))}function L(){var e=Object(r.useState)({total:0,online:0}),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useContext)(b);return Object(r.useEffect)((function(){n((function(e){return Object(m.a)({},e,{total:c.state.servers.length,online:c.state.servers.reduce((function(e,t){return!0===t.isLoaded&&t.serverData?e+1:e}),0)})}))}),[c.state.servers]),l.a.createElement("h3",null,"Server data is loaded from ",a.online," out of ",a.total," servers ",l.a.createElement("input",{type:"button",value:"refresh all servers",className:"btn2 refresh",onClick:function(){F()(c.dispatch)}}))}a(400);u.a.render(l.a.createElement((function(){return l.a.useEffect((function(){document.title="ttstats.aca.lt"}),[]),l.a.createElement(s.a,{basename:"/"},l.a.createElement(y,null,l.a.createElement("div",{id:"header"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Servers Status")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"?playerfinder"},"Player Finder")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"?vehicles"},"Vehicle Stats")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"?jobs"},"Job Stats")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://ttmap.online",className:"gold"},"ttmap.online")))),l.a.createElement("div",{id:"content"},l.a.createElement(o.a,{component:function(e){var t=e.location.search.split("=");switch(t[0]){case"?status":return l.a.createElement(D,null);case"?serverinfo":return l.a.createElement(S,{url:t});case"?jobs":return l.a.createElement(g,null);case"?vehicles":return l.a.createElement(R,null);case"?playerfinder":return l.a.createElement(O,{url:t});default:return l.a.createElement(D,null)}}})),l.a.createElement("div",{id:"footer"},l.a.createElement(L,null))))}),null),document.getElementById("root"))}},[[364,1,2]]]);
//# sourceMappingURL=main.07385121.chunk.js.map
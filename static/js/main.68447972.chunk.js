(this.webpackJsonpttstats=this.webpackJsonpttstats||[]).push([[0],{353:function(e){e.exports=JSON.parse('[["server.tycoon.community:30120","Server #1 (OneSync)","145.239.150.71:30120"],["server.tycoon.community:30122","Server #2","145.239.150.71:30122"],["server.tycoon.community:30123","Server #3","145.239.150.71:30123"],["server.tycoon.community:30124","Server #4","145.239.150.71:30124"],["server.tycoon.community:30125","Server #5 (Beta)","145.239.150.71:30125"],["na.tycoon.community:30120","Server #6","54.37.88.125:30120"],["na.tycoon.community:30122","Server #7","54.37.88.125:30122"],["na.tycoon.community:30123","Server #8","54.37.88.125:30123"],["na.tycoon.community:30124","Server #9","54.37.88.125:30124"],["na.tycoon.community:30125","Server #A","54.37.88.125:30125"]]')},356:function(e,t,a){e.exports=a(395)},394:function(e,t,a){},395:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"initAllServers",(function(){return F})),a.d(n,"fetchServer",(function(){return p})),a.d(n,"fetchDetailedServer",(function(){return h}));a(92),a(102),a(103),a(104),a(105),a(106),a(107),a(108),a(109),a(110),a(111),a(112),a(113),a(114),a(115),a(154),a(156),a(157),a(158),a(159),a(160),a(161),a(163),a(164),a(119),a(168),a(169),a(69),a(173),a(174),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(191),a(192),a(193),a(194),a(125),a(195),a(197),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(127),a(214),a(215),a(216),a(217),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(228),a(229),a(230),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(129),a(248),a(249),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(131),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(86),a(276),a(277),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287),a(288),a(289),a(290),a(291),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(300),a(301),a(302),a(303),a(306),a(307),a(308),a(309),a(310),a(311),a(312),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(334),a(335),a(336),a(337),a(338),a(339),a(341),a(342),a(344),a(345),a(346),a(347),a(349),a(139),a(371),a(379);var r=a(0),l=a.n(r),c=a(352),u=a.n(c),o=a(21),s=a(14),i=a(19),m=a(4),E=a(353),d=function(e){return new Promise((function(t,a){setTimeout((function(){return a(new Error("timeout"))}),4e3),e.then(t,a)}))},F=function(){return function(e){e({type:"CLEARSERVERSLIST"}),E.forEach((function(t,a){e({type:"ADDSERVER",data:{error:null,isLoaded:!1,ip:t[0],name:t[1],playersData:null,serverData:null,lastUpdate:null,vehicleData:null,directIp:t[2]},index:a}),p(t,a)(e)})),e({type:"SERVERSINITED"})}},p=function(e,t){return function(a){d(fetch("http://"+e[0]+"/status/widget/players.json").then((function(e){return e.json()}))).then((function(e){e.players.forEach((function(e){""===e[5]&&(e[5]="Unemployed")})),a({type:"UPDATESERVER",data:{isLoaded:!0,playersData:e.players,serverData:e.server,lastUpdate:Date.now()},index:t})}),(function(){a({type:"UPDATESERVER",data:{isLoaded:!0,error:!0,lastUpdate:Date.now()},index:t})})).catch((function(){a({type:"UPDATESERVER",data:{isLoaded:!0,error:!0,lastUpdate:Date.now()},index:t})}))}},h=function(e,t){return function(a){d(fetch("http://"+e.ip+"/status/map/positions.json").then((function(e){return e.json()}))).then((function(e){a({type:"UPDATESERVER",data:{vehicleData:e.players.map((function(e){return e[4]}))},index:t})})).catch((function(e){return console.log(e)}))}},f=function(e,t){switch(t.type){case"ADDSERVER":var a=e.servers.slice();return a.splice(t.index,0,t.data),e.servers=a,Object(m.a)({},e);case"SERVERSINITED":return Object(m.a)(Object(m.a)({},e),{},{inited:!0});case"UPDATESERVER":return e.servers=e.servers.map((function(e,a){return a!==t.index?e:Object(m.a)(Object(m.a)({},e),t.data)})),Object(m.a)({},e);case"CLEARSERVERSLIST":return e.servers=[],Object(m.a)({},e);default:return e}},v={servers:[],inited:!1},b=Object(r.createContext)(v),y=function(e){var t=e.children,a=Object(r.useReducer)(f,v),c=Object(i.a)(a,2),u=c[0],o=c[1];return Object(r.useEffect)((function(){F()(o)}),[]),l.a.createElement(b.Provider,{value:{state:u,dispatch:o,dispatch_list:n}},t)};function S(e){var t=e.dxp,a=e.timestamp,n=Object(r.useState)(parseInt((a+t[2]-Date.now())/1e3)),c=Object(i.a)(n,2),u=c[0],o=c[1];Object(r.useEffect)((function(){var e=setInterval((function(){o((function(t){return t<=1&&clearInterval(e),t-1}))}),1e3);return function(){return clearInterval(e)}}),[]);var s=Math.floor(u/3600),m=u%3600,E=Math.floor(m/60),d=Math.ceil(m%60);return l.a.createElement(l.a.Fragment,null,u<1?"-":l.a.createElement("span",{className:"dxpcursor",onClick:function(){return function(e,t){e&&t&&alert("Host: ".concat(e[1],"\nDXP Ends: ").concat(new Date(t+e[2]),"\nAdditional Time: ").concat(e[3]?Number(e[3]/1e3/60).toFixed(1)+" min":"-"))}(t,a)}},s?s+"h ":"",E?E+"m ":s?"0m ":"",d?d+"s":"0s"))}var j=function(){return alert("Servers usually restarts every 18 hours")};function O(e){var t=e.time,a={h:0,m:0};t.split(" ").forEach((function(e){e.endsWith("m")?a.m=parseInt(e.replace("m","")):e.endsWith("h")&&(a.h=parseInt(e.replace("h","")))}));var n=17===a.h&&a.m<45?"yellow":a.h>=17?"red":null;return l.a.createElement("span",{className:"dxpcursor",onClick:j,style:n?{color:n}:{}},t)}function g(){var e=Object(r.useContext)(b);return l.a.createElement("div",{id:"servers-status"},l.a.createElement("h2",null,"Transport Tycoon Servers List"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Connect"),l.a.createElement("th",null,"Players"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Uptime"),l.a.createElement("th",null,"DXP")),e.state.servers.map((function(e,t){if(e.error||void 0===e.playersData||!1===e.isLoaded)return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.ip,l.a.createElement("br",null),l.a.createElement("b",null,e.name)),l.a.createElement("td",null,"-/-"),!1===e.isLoaded?l.a.createElement("td",{className:"loading"},"Loading"):l.a.createElement("td",{className:"offline"},l.a.createElement(o.b,{to:"/?serverinfo="+(+t+1),className:"btn btn-primary",title:"Server Info"},"OFFLINE")),l.a.createElement("td",null,"-"),l.a.createElement("td",{className:"dxp"},"-"));var a=e.serverData.dxp,n=void 0!==a&&!0===a[0];return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement("a",{href:"fivem://connect/"+e.ip,title:"Connect to the server"},e.ip),l.a.createElement("br",null),l.a.createElement("b",null,e.name)),l.a.createElement("td",null,l.a.createElement(o.b,{to:"/?serverinfo="+(+t+1),className:"btn btn-primary",title:"Server Info"},e.playersData.length,"/",e.serverData.limit)),l.a.createElement("td",{className:"online"},"ONLINE"),l.a.createElement("td",null,e.serverData?l.a.createElement(O,{time:e.serverData.uptime}):"-"),l.a.createElement("td",{className:"dxp"},n?l.a.createElement(S,{dxp:a,timestamp:e.lastUpdate}):l.a.createElement(l.a.Fragment,null,"-")))})))))}function D(e){var t=Object(r.useContext)(b),a=parseInt(e.url[1]);if(!a||isNaN(a))return l.a.createElement("h2",null,"URL ERROR");var n=t.state.servers[a-1];return!1===t.state.inited?l.a.createElement("h2",null,"Loading"):void 0===n?l.a.createElement("h2",null,"SERVER ERROR"):l.a.createElement("div",null,l.a.createElement("h2",null,"Name: ",n.name,l.a.createElement("br",null),"IP: ",l.a.createElement("a",{href:"fivem://connect/"+n.ip},n.ip),l.a.createElement("br",null),n.serverData?l.a.createElement(l.a.Fragment,null,"Uptime: ",n.serverData.uptime,l.a.createElement("br",null),"Players: ",n.playersData?n.playersData.length:0,"/",n.playersData?n.serverData.limit:0):l.a.createElement(l.a.Fragment,null,"Server Is Offline"),l.a.createElement("br",null),l.a.createElement("img",{src:"https://www.game-state.com/"+n.directIp+"/stats.png",alt:"",className:"statsimg-1",referrerpolicy:"no-referrer"}),l.a.createElement("br",null),l.a.createElement("img",{src:"https://www.game-state.com/"+n.directIp+"/n-560x95_FFFFFF_FFFFFF_000000_000000.png",alt:"",className:"statsimg-2",referrerpolicy:"no-referrer"}),l.a.createElement("br",null),l.a.createElement(o.b,{to:"/",className:"refresh dxpcursor"},"Back")),n.playersData&&0!==n.playersData.length?l.a.createElement(l.a.Fragment,null,l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Avatar"),l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Job")),n.playersData.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e[3]?l.a.createElement("a",{href:e[3],target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:e[3]||"#",height:"50px",alt:"img",className:"avatar"})):l.a.createElement("div",{className:"no-avatar"})),l.a.createElement("td",null,"#",t+1),l.a.createElement("td",null,l.a.createElement("b",null,e[0])),l.a.createElement("td",null,e[2]),l.a.createElement("td",null,e[5]||"-"))}))))):l.a.createElement("h2",null,"No Players"),l.a.createElement("h2",null,"Last Updated: ",new Date(n.lastUpdate).toTimeString()))}function C(e){var t,a=Object(r.useContext)(b);e.url.length>1&&e.url.forEach((function(e){var a=e.split(":");"job"===a[0]&&(t=decodeURI(a[1]))}));var n=Object(r.useState)({playerFinderMessages:[],playerFinderInputField:"",playerFinderFound:[],serverSelect:"All Servers",jobSelect:t||"All Jobs"}),c=Object(i.a)(n,2),u=c[0],o=c[1],s=Object(r.useState)([]),E=Object(i.a)(s,2),d=E[0],F=E[1],p=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=u.playerFinderInputField.toLowerCase(),n=[];a.state.servers.forEach((function(e){null!==e.playersData&&e.playersData.forEach((function(a){var r=a[0]+"#"+a[2];!r.toLowerCase().includes(t)||"All Servers"!==u.serverSelect&&u.serverSelect!==e.name||"All Jobs"!==u.jobSelect&&u.jobSelect!==a[5]||n.push([r,e.ip,e.name,a[3],a[5]])}))})),o((function(t){return n.length>0?Object(m.a)(Object(m.a)({},t),{},{playerFinderMessages:"Found "+n.length+" player"+(1===n.length?"":"s"),playerFinderFound:n}):Object(m.a)(Object(m.a)({},t),{},{playerFinderMessages:e?"Found nothing":"...",playerFinderFound:[]})}))};return Object(r.useEffect)((function(){var e=[];a.state.servers.forEach((function(t){t.playersData&&t.playersData.forEach((function(t){e.includes(t[5])||e.push(t[5])}))})),F(e),p(!1)}),[a.state.servers]),l.a.createElement("div",{id:"player-finder"},l.a.createElement("h2",null,"Online Player Finder"),l.a.createElement("div",{id:"form"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"Player's name or in-game id",onChange:function(e){return function(e){var t=e.target.value;o((function(e){return Object(m.a)(Object(m.a)({},e),{},{playerFinderInputField:t})}))}(e)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),p())}}),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"serverSelector"},"Filter Server"),l.a.createElement("select",{id:"serverSelector",onChange:function(e){var t=e.target.value;o((function(e){return Object(m.a)(Object(m.a)({},e),{},{serverSelect:t})}))},value:u.serverSelect},l.a.createElement("option",{value:"All Servers"},"All Servers"),a.state.servers.map((function(e,t){return e.isLoaded?l.a.createElement("option",{key:t,value:e.name},e.name):""})))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"jobSelector"},"Filter Job"),l.a.createElement("select",{id:"jobSelector",onChange:function(e){return function(e){var t=e.target.value;o((function(e){return Object(m.a)(Object(m.a)({},e),{},{jobSelect:t})}))}(e)},value:u.jobSelect},l.a.createElement("option",{value:"All Jobs"},"All Jobs"),d.map((function(e,t){return l.a.createElement("option",{key:t,value:e},e)})))),l.a.createElement("input",{type:"button",value:"search",onClick:function(){return p()}}))),l.a.createElement("h2",null,u.playerFinderMessages),u.playerFinderFound?l.a.createElement("table",null,l.a.createElement("tbody",null,u.playerFinderFound.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,(e[3],l.a.createElement("div",{className:"no-avatar"}))),l.a.createElement("td",null,"#",t+1),l.a.createElement("td",null,l.a.createElement("b",null,e[0])),l.a.createElement("td",null,e[4]||"-"),l.a.createElement("td",null,l.a.createElement("a",{href:"fivem://connect/"+e[1],title:"connect"},e[1]),l.a.createElement("br",null),l.a.createElement("b",null,e[2])))})))):"")}var A=a(355),N=a.n(A),R=["#FF0000","#00FF00","#800000","#00FFFF","#000000","#B8860B","#4B0082","#FFDEAD","#8B4513","#A52A2A","#B22222","#228B22","#008B8B","#BA55D3","#F0F8FF","#FF8C00","#FF69B4","#FFA07A","#C71585","#FFF8DC","#F0FFF0","#FFFFFF","#00FF7F","#0000FF","#FFF5EE","#2F4F4F","#006400","#9966CC","#FF6347","#ADD8E6","#FF0000","#00FF00","#800000","#00FFFF","#000000","#B8860B","#4B0082","#FFDEAD","#8B4513","#A52A2A","#B22222","#228B22","#008B8B","#BA55D3","#F0F8FF","#FF8C00","#FF69B4","#FFA07A","#C71585","#FFF8DC","#F0FFF0","#FFFFFF","#00FF7F","#0000FF","#FFF5EE","#2F4F4F","#006400","#9966CC","#FF6347","#ADD8E6","#FF69B4","#FFA07A","#C71585","#FFF8DC","#F0FFF0","#FFFFFF","#00FF7F","#0000FF","#FFF5EE","#2F4F4F","#006400","#9966CC","#FF6347","#ADD8E6","#FF0000","#00FF00","#800000","#00FFFF","#000000","#B8860B","#4B0082","#FFDEAD","#8B4513","#A52A2A","#B22222","#228B22","#008B8B","#BA55D3","#F0F8FF","#FF8C00","#FF69B4","#FFA07A","#C71585","#FFF8DC","#F0FFF0","#FFFFFF","#00FF7F","#0000FF","#FFF5EE","#2F4F4F","#006400","#9966CC","#FF6347","#ADD8E6"];function I(){var e=Object(r.useState)({entries:[],counter:0}),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({entries:[],counter:0}),u=Object(i.a)(c,2),s=u[0],E=u[1],d=Object(r.useContext)(b),F=Object(r.useRef)();return Object(r.useEffect)((function(){if(d.state.inited&&d.state.servers.reduce((function(e,t){return!0===t.isLoaded?e+1:e}),0)===d.state.servers.length){var e={},t={COCO:0,PIGS:0,RTS:0,BAT:0,FRLLC:0,IA:0};d.state.servers.forEach((function(a){!0===a.isLoaded&&null!==a.playersData&&a.playersData.forEach((function(a){void 0===e[a[5]]?e[a[5]]=1:e[a[5]]++,a[5].startsWith("P.I.G.S.")?t.PIGS++:a[5].startsWith("R.T.S.")?t.RTS++:a[5].startsWith("CollinsCo")?t.COCO++:a[5].startsWith("IA ")?t.IA++:a[5].startsWith("BAT")?t.BAT++:a[5].startsWith("FRLLC")&&t.FRLLC++}))}));var a=Object.entries(e).sort((function(e,t){return t[1]-e[1]})),r=Object.entries(t).sort((function(e,t){return t[1]-e[1]}));n((function(e){return Object(m.a)(Object(m.a)({},e),{},{entries:a,counter:a.reduce((function(e,t){return e+t[1]}),0)})})),E((function(e){return Object(m.a)(Object(m.a)({},e),{},{entries:r,counter:r.reduce((function(e,t){return e+t[1]}),0)})}))}}),[d.state.servers]),Object(r.useEffect)((function(){if(F&&F.current){var e=F.current.getContext("2d"),t=new N.a(e,{type:"pie",data:{labels:a.entries.map((function(e){return e[0]})),datasets:[{data:a.entries.map((function(e){return e[1]})),backgroundColor:R,borderWidth:0}]},options:{legend:{display:!1},responsive:!0,tooltips:{callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex],n=a.data.reduce((function(e,t){return e+t})),r=a.data[e.index],l=Math.floor(r/n*100+.5);return"".concat(t.labels[e.index]," - ").concat(r," players (").concat(l,"%)")}}}}});return function(){return t.destroy()}}}),[a]),l.a.createElement("div",{class:"with-table"},l.a.createElement("h2",null,"Top Jobs Now"),0===a.entries.length?l.a.createElement("div",null,"Loading..."):l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"%"),l.a.createElement("th",null,"Job Name"),l.a.createElement("th",null,"Active"),l.a.createElement("th",null,"Links")),a.entries.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,Number(e[1]/a.counter*100).toFixed(1),"%"),l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1]),l.a.createElement("td",null,l.a.createElement(o.b,{to:encodeURI("/?playerfinder=job:"+e[0])},"Players")))})))),l.a.createElement("div",{id:"split"}),l.a.createElement("h2",null,"Top Company Jobs Now"),0===s.entries.length?l.a.createElement("div",null,"Loading..."):l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"%"),l.a.createElement("th",null,"Job Name"),l.a.createElement("th",null,"Active")),s.entries.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,Number(e[1]/s.counter*100).toFixed(1),"%"),l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1]))})))),l.a.createElement("div",{id:"split"}),l.a.createElement("div",null,l.a.createElement("canvas",{id:"myChart",ref:F})))}var L=["Compact Cars","Sedans","SUVs","Coupes","Muscle Cars","Sports Classics","Sports Cars","Super Cars","Motorcycles","Off-road Cars","Industrial Vehicles","Utility Vehicles","Vans","Cycles","Boats","Helicopters","Planes","Service Vehicles","Emergency Vehicles","Military Vehicles","Commercial Vehicles","Trains"];function x(){var e=Object(r.useState)({loading:!0,error:null,timestamp:0,total_vehicles:0,total_classes:0,sorted_vehicles:null,sorted_classes:null}),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){fetch("https://novaplus.herokuapp.com/vehicles").then((function(e){return e.json()})).then((function(e){e&&e.timestamp>0?n((function(t){return Object(m.a)(Object(m.a)(Object(m.a)({},t),e),{},{total_vehicles:e.sorted_vehicles.reduce((function(e,t){return e+t[1]}),0),total_classes:e.sorted_classes.reduce((function(e,t){return e+t[1]}),0),loading:!1})})):n((function(e){return Object(m.a)(Object(m.a)({},e),{},{error:"Error while loading the data",loading:!1})}))})).catch((function(e){console.log(e),n((function(e){return Object(m.a)(Object(m.a)({},e),{},{error:"Error while state.loading the data",loading:!1})}))}))}),[]),l.a.createElement("div",{class:"with-table"},l.a.createElement("h2",null,"Top Vehicles Now"),a.loading?l.a.createElement("h2",null,"Loading"):a.error?l.a.createElement("h2",null,"Error while trying to load the data, try again later."):l.a.createElement(l.a.Fragment,null,l.a.createElement("table",null,l.a.createElement("tbody",null,a.sorted_vehicles?l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("th",null,"%"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Active")),a.sorted_vehicles.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,Number(e[1]/a.total_vehicles*100).toFixed(2),"%"),l.a.createElement("td",null,e[0]),l.a.createElement("td",null,e[1]))}))):l.a.createElement("tr",null,l.a.createElement("td",null,"N/A")))),l.a.createElement("h2",null,"Top Vehicle Classes Now"),l.a.createElement("table",null,l.a.createElement("tbody",null,a.sorted_classes?l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("th",null,"%"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Active")),a.sorted_classes.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,Number(e[1]/a.total_vehicles*100).toFixed(2),"%"),l.a.createElement("td",null,-1===e[0]?"On Foot":L[parseInt(e[0])]||"?"),l.a.createElement("td",null,e[1]))}))):l.a.createElement("tr",null,l.a.createElement("td",null,"N/A")))),l.a.createElement("h3",null,"Vehicle stats updates every 5 minutes",l.a.createElement("br",null),"Last Updated: ",new Date(a.timestamp).toTimeString())))}var B={firefighter_streak_record:{name:"Firefighter Mission Streak"},omni_void_leaderboard:{name:"Omni Void",prepend:"$"},ems_streak_record:{name:"EMS Mission Streak"},houses_crafted:{name:"Most Houses Constructed"},toll_paid:{name:"Tolls Paid"},drops_collected:{name:"Drops Collected"}};function w(){var e=Object(r.useState)({loading:!0,error:null,data:null,timestamp:0}),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){fetch("https://novaplus.herokuapp.com/top10").then((function(e){return e.json()})).then((function(e){n((function(t){return Object(m.a)(Object(m.a)({},t),{},{loading:!1},e)}))})).catch((function(e){console.log(e),n((function(e){return Object(m.a)(Object(m.a)({},e),{},{error:"Failed to load the data"})}))}))}),[]),l.a.createElement("div",{class:"with-table"},l.a.createElement("h2",null,"Top 10 Leaderboards"),a.loading&&l.a.createElement("h2",null,"Loading"),a.error&&l.a.createElement("h2",null,"Error ",null===a.error?"":"- "+a.error," "),a.data&&l.a.createElement(l.a.Fragment,null," ",Object.entries(a.data).map((function(e){return l.a.createElement("div",{key:e[0]},l.a.createElement("div",{id:"split"}),l.a.createElement("h2",null,B[e[0]]?B[e[0]].name:e[0]),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Player"),l.a.createElement("th",null,"Score")),e[1]&&0!==e[1].length?e[1].map((function(t,a){return l.a.createElement("tr",{key:a,title:t.username+"#"+t.user_id},l.a.createElement("td",null,a+1),l.a.createElement("td",null,t.username),l.a.createElement("td",null,B[e[0]]&&B[e[0]].prepend?B[e[0]].prepend:"",Number(t.amount).toLocaleString()))})):l.a.createElement("tr",null,l.a.createElement("td",null,"-"),l.a.createElement("td",null,"N/A"),l.a.createElement("td",null,"-")))))})),l.a.createElement("h3",null,"Leaderboards updates every hour",l.a.createElement("br",null),"Last Updated: ",new Date(a.timestamp).toTimeString())))}function T(){var e=Object(r.useState)({total:0,online:0}),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useContext)(b);return Object(r.useEffect)((function(){n((function(e){var t=0,a=0;return(c.state.servers||[]).forEach((function(e){e.isLoaded&&e.serverData&&(t++,e.playersData&&(a+=e.playersData.length))})),Object(m.a)(Object(m.a)({},e),{},{total:c.state.servers.length,servers:t,players:a})}))}),[c.state.servers]),l.a.createElement("div",{id:"footer"},l.a.createElement("input",{type:"button",value:"Servers Loaded: ".concat(a.servers,"/").concat(a.total," | Players Online: ").concat(a.players," | click to refresh"),className:"refresh dxpcursor",onClick:function(){F()(c.dispatch)}}))}var k=a(90);function _(){var e=Object(r.useContext)(b),t=[];e.state.servers.forEach((function(e,a){var n;e.playersData&&(n=t).push.apply(n,Object(k.a)(e.playersData))}));var a=(t=t.sort((function(e,t){return t[2]-e[2]})).map((function(e,t){return{index:t+1,name:e[0],id:e[2]}}))).length>25?[].concat(Object(k.a)(t.splice(0,10)),[{index:"...",name:"...",id:"..."}],Object(k.a)(t.splice(t.length-10))):t;return!1===e.state.inited?l.a.createElement("h2",null,"Loading"):l.a.createElement("div",null,l.a.createElement("h3",null,"Highest and lowest player IDs currently online"),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"ID")),0===a.length?l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"No Players Found"),l.a.createElement("th",null)):a.map((function(e,t){return l.a.createElement("tr",{key:t,style:0===t?{fontSize:"2em"}:{}},l.a.createElement("td",null,"#",e.index),l.a.createElement("td",null,l.a.createElement("b",null,e.name?e.name:"?")),l.a.createElement("td",null,e.id))})))))}function P(){return l.a.useEffect((function(){document.title="TTSTATS | Transport Tycoon Server Browser"}),[]),l.a.createElement(o.a,{basename:"/"},l.a.createElement(y,null,l.a.createElement("div",{id:"header"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Servers Status")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"?playerfinder"},"Player Finder")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"?vehicles"},"Vehicle Stats")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"?jobs"},"Job Stats")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"?top10"},"Top 10")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"?highest_id"},"Highest Player ID")))),l.a.createElement("div",{id:"content"},l.a.createElement(s.b,{component:function(e){var t=e.location.search.split("=");switch(t[0]){case"":case"?status":return l.a.createElement(g,null);case"?serverinfo":return l.a.createElement(D,{url:t});case"?jobs":return l.a.createElement(I,null);case"?vehicles":return l.a.createElement(x,null);case"?top10":return l.a.createElement(w,null);case"?playerfinder":return l.a.createElement(C,{url:t});case"?highest_id":return l.a.createElement(_,null);default:return l.a.createElement(s.a,{to:"/"})}}})),l.a.createElement(T,null)))}a(394);u.a.render(l.a.createElement(P,null),document.getElementById("root"))}},[[356,1,2]]]);
//# sourceMappingURL=main.68447972.chunk.js.map
(this.webpackJsonpttstats=this.webpackJsonpttstats||[]).push([[0],{360:function(e){e.exports=JSON.parse('[["server.tycoon.community:30120","Server #1"],["server.tycoon.community:30122","Server #2"],["server.tycoon.community:30123","Server #3"],["server.tycoon.community:30124","Server #4"],["server.tycoon.community:30125","Server #5 (Beta)"],["ca.tycoon.community:30120","Server #6"],["ca.tycoon.community:30122","Server #7"],["ca.tycoon.community:30123","Server #8"],["ca.tycoon.community:30124","Server #9"],["ca.tycoon.community:30125","Server #A"]]')},363:function(e,t,a){e.exports=a(398)},397:function(e,t,a){},398:function(e,t,a){"use strict";a.r(t);a(90),a(100),a(101),a(102),a(103),a(104),a(105),a(106),a(107),a(108),a(109),a(110),a(111),a(112),a(113),a(153),a(155),a(156),a(157),a(158),a(159),a(160),a(162),a(163),a(117),a(167),a(168),a(68),a(172),a(173),a(175),a(176),a(177),a(178),a(179),a(180),a(181),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(190),a(191),a(192),a(193),a(194),a(195),a(125),a(196),a(198),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(127),a(215),a(216),a(217),a(218),a(220),a(221),a(222),a(223),a(224),a(226),a(228),a(230),a(231),a(233),a(234),a(235),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(128),a(254),a(255),a(256),a(257),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273),a(274),a(275),a(276),a(130),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(85),a(284),a(285),a(287),a(288),a(289),a(290),a(291),a(292),a(293),a(294),a(295),a(296),a(297),a(298),a(299),a(300),a(301),a(302),a(303),a(304),a(305),a(306),a(307),a(308),a(309),a(310),a(313),a(314),a(315),a(316),a(317),a(318),a(319),a(320),a(321),a(322),a(323),a(324),a(325),a(326),a(327),a(328),a(329),a(330),a(331),a(332),a(333),a(334),a(335),a(336),a(337),a(338),a(339),a(340),a(341),a(342),a(343),a(344),a(345),a(346),a(348),a(349),a(351),a(352),a(353),a(354),a(356),a(138),a(376),a(384);var n=a(0),r=a.n(n),l=a(359),c=a.n(l),o=a(39),u=a(47),s=a(88),i=a(18),m=a(360),E=function(e,t){return function(a){var n;(n=fetch("https://cors-anywhere.herokuapp.com/http://"+e[0]+"/status/widget/players.json").then((function(e){return e.json()})),new Promise((function(e,t){setTimeout((function(){return t(new Error("timeout"))}),2e3),n.then(e,t)}))).then((function(e){return a({type:"UPDATESERVER",data:{isLoaded:!0,playersData:e.players,serverData:e.server,lastUpdate:Date.now()},index:t})}),(function(){a({type:"UPDATESERVER",data:{isLoaded:!0,error:!0,lastUpdate:Date.now()},index:t})})).catch((function(){a({type:"UPDATESERVER",data:{isLoaded:!0,error:!0,lastUpdate:Date.now()},index:t})}))}},d=function(e,t){switch(t.type){case"SET":return Object(i.a)({},e,{},t.data);case"PUSH":return e.servers?e.servers.push(t.data):e.servers=[t.data],Object(i.a)({},e);case"UPDATESERVER":return e.servers=e.servers.map((function(e,a){return a!==t.index?e:Object(i.a)({},e,{},t.data)})),Object(i.a)({},e);case"SERVERSINITED":return Object(i.a)({},e,{inited:!0});case"ADDSERVER":var a=e.servers.slice();return a.splice(t.index,0,t.data),e.servers=a,Object(i.a)({},e);case"SETKEY":return e[t.data.name]=t.data.value,Object(i.a)({},e);default:return e}},p={servers:[],inited:!1},v=Object(n.createContext)(p),y=function(e){var t=e.children,a=Object(n.useReducer)(d,p),l=Object(s.a)(a,2),c=l[0],o=l[1];return Object(n.useEffect)((function(){!function(e){m.forEach((function(t,a){e({type:"ADDSERVER",data:{error:null,isLoaded:!1,ip:t[0],name:t[1],playersData:null,serverData:null,lastUpdate:null},index:a}),E(t,a)(e)})),e({type:"SERVERSINITED"})}(o)}),[]),r.a.createElement(v.Provider,{value:{state:c}},t)};function f(){var e=Object(n.useContext)(v);return r.a.createElement("div",null,r.a.createElement("h2",null,"Transport Tycoon Servers List"),r.a.createElement("table",{id:"serversList"},r.a.createElement("tbody",null,e.state.servers.map((function(e,t){return e.error?r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.ip),r.a.createElement("td",null,e.name),r.a.createElement("td",null,"-/-"),r.a.createElement("td",{style:{color:"red"}},"Offline"),r.a.createElement("td",null),r.a.createElement("td",null)):!1===e.isLoaded?r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.ip),r.a.createElement("td",null,e.name),r.a.createElement("td",null,"-/-"),r.a.createElement("td",{style:{color:"grey"}},"Loading"),r.a.createElement("td",null),r.a.createElement("td",null)):void 0===e.playersData?r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.ip),r.a.createElement("td",null,e.name),r.a.createElement("td",null,"-/-"),r.a.createElement("td",{style:{color:"red"}},"ERROR"),r.a.createElement("td",null),r.a.createElement("td",null)):r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.ip),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.playersData.length,"/",e.serverData.limit),r.a.createElement("td",{style:{color:"blue"}},"Online"),r.a.createElement("td",null,e.lastUpdate),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/?playerslist="+(+t+1),className:"btn btn-primary"},"Players")))})))))}function b(e){var t=Object(n.useContext)(v);if(!e.url||isNaN(e.url))return r.a.createElement("div",null,r.a.createElement("h2",null,"URL ERROR"));var a=t.state.servers[e.url-1];if(!1===t.state.inited)return r.a.createElement("div",null,r.a.createElement("h2",null,"Loading"));if(void 0===a)return r.a.createElement("div",null,r.a.createElement("h2",null,"SERVER ERROR"));var l=r.a.createElement("div",null,r.a.createElement("h2",null,"Players List On ",a.name,r.a.createElement("br",null),"IP: ",r.a.createElement("a",{href:"fivem://connect/"+a.ip},a.ip),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/?status",className:"btn btn-primary"},"Back")));return a.playersData&&0!==a.playersData.length?r.a.createElement("div",null,l,r.a.createElement("table",{id:"playersList"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Job"),r.a.createElement("th",null,"Avatar")),a.playersData.map((function(e,t){return r.a.createElement("tr",{key:e[2]},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e[0]),r.a.createElement("td",null,e[2]),r.a.createElement("td",null,e[5]||"-"),r.a.createElement("td",null,e[3]?r.a.createElement("a",{href:e[3],target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e[3]||"#",height:"50px",alt:"img"})):r.a.createElement("div",{className:"no-avatar"})))})))),r.a.createElement("h3",null,"Updated on ",new Date(a.lastUpdate).toTimeString())):r.a.createElement("div",null,l,r.a.createElement("h2",null,"No Players"))}function h(e){var t=Object(n.useContext)(v),a=Object(n.useState)({playerFinderMessages:[],playerFinderInputField:"",playerFinderFound:[],serverSelect:"All Servers",jobSelect:"All Jobs",jobsList:[]}),l=Object(s.a)(a,2),c=l[0],o=l[1],u=function(){var e=c.playerFinderInputField.toLocaleLowerCase(),a=[];t.state.servers.forEach((function(t){null!==t.playersData&&t.playersData.forEach((function(n){var r=n[0]+"#"+n[2];!r.toLowerCase().includes(e)||"All Servers"!==c.serverSelect&&c.serverSelect!==t.name||"All Jobs"!==c.jobSelect&&c.jobSelect!==n[5]||a.push([r,t.ip,t.name,n[3],n[5]])}))})),a.length>0?o(Object(i.a)({},c,{playerFinderMessages:"Found "+a.length+" player"+(1===a.length?"":"s"),playerFinderFound:a})):o(Object(i.a)({},c,{playerFinderMessages:"Found nothing",playerFinderFound:[]}))};return Object(n.useEffect)((function(){u(),function(){console.log("start",t.state.servers);var e=[];t.state.servers.forEach((function(t){!0===t.isLoaded&&t.playersData&&t.playersData.forEach((function(t){e.includes(t[5])||(e.push(t[5]),console.log(t[5]))}))})),o(Object(i.a)({},c,{jobsList:e}))}()}),[t.state.servers]),r.a.createElement("div",{id:"playerFinder"},r.a.createElement("h2",null,"Online Players Finder"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Player's name or in-game id",onChange:function(e){return function(e){o(Object(i.a)({},c,{playerFinderInputField:e.target.value}))}(e)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),u())}}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"serverSelector"},"Filter Server: "),r.a.createElement("select",{id:"serverSelector",onChange:function(e){o(Object(i.a)({},c,{serverSelect:e.target.value}))}},r.a.createElement("option",{value:"All Servers"},"All Servers"),t.state.servers.map((function(e,t){return e.isLoaded?r.a.createElement("option",{key:t,value:e.name},e.name):""}))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"jobSelector"},"Filter Job: "),r.a.createElement("select",{id:"jobSelector",onChange:function(e){o(Object(i.a)({},c,{jobSelect:e.target.value}))}},r.a.createElement("option",{value:"All Jobs"},"All Jobs"),c.jobsList.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"search",onClick:function(){return u()}})),r.a.createElement("div",null,r.a.createElement("p",null,c.playerFinderMessages),r.a.createElement("table",{id:"playersFound"},r.a.createElement("tbody",null,c.playerFinderFound?c.playerFinderFound.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e[0]),r.a.createElement("td",null,e[1]),r.a.createElement("td",null,e[2]),r.a.createElement("td",null,r.a.createElement("img",{src:e[3]||"#",className:"avatar",alt:"avatar"})),r.a.createElement("td",null,e[4]))})):""))))}a(397);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement(o.a,{basename:"ttstats"},r.a.createElement(y,null,r.a.createElement("header",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Servers Status")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"?playersfinder"},"Players Finder")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"?player"},"player")))),r.a.createElement("main",null,r.a.createElement(u.b,{component:function(e){var t=e.location.search.split("=");switch(t[0]){case"?status":return r.a.createElement(f,null);case"?playerslist":return r.a.createElement(b,{url:parseInt(t[1])});case"?player":return r.a.createElement("div",null,"player");case"?playersfinder":return r.a.createElement(h,null);default:return r.a.createElement(u.a,{to:"/?status"})}}})),r.a.createElement("footer",null,r.a.createElement("p",null,"Footer"))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[363,1,2]]]);
//# sourceMappingURL=main.05669b00.chunk.js.map
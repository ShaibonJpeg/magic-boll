(this.webpackJsonpVKMINI=this.webpackJsonpVKMINI||[]).push([[0],{104:function(e,t,a){e.exports=a(213)},213:function(e,t,a){"use strict";a.r(t);a(105),a(131),a(133),a(134),a(136),a(137),a(138),a(139),a(140),a(141),a(142),a(143),a(145),a(146),a(147),a(148),a(149),a(150),a(151),a(152),a(153),a(154),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(163),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172),a(173);var n,o=a(0),c=a.n(o),r=a(63),i=a.n(r),l=a(39),s=a.n(l),u=a(64),m=a.n(u),g=a(96),p=a(47),d=a(103),h=a.n(d),f=a(102),b=a.n(f),E=(a(182),a(97)),v=a.n(E),I=a(98),j=a.n(I),y=a(101),O=a.n(y),K=a(65),M=a.n(K),V=a(99),w=a.n(V),x=a(100),U=a.n(x),_=["I","go","home","go","go","go","go","go","go","go","go","go","go","go","go","go","go","go","go","go"];var k=function(e){var t=e.id,a=(e.go,e.fetchedUser);return c.a.createElement(v.a,{id:t},c.a.createElement(j.a,null,"Example"),a&&c.a.createElement(M.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(w.a,{before:a.photo_200?c.a.createElement(U.a,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),c.a.createElement(M.a,null,c.a.createElement(O.a,{mode:"commerce",onclick:"text = arr[Math.floor(Math.random() * arr.length)]"},"\u041a\u043d\u043e\u043f\u043a\u0430"),n,_[Math.floor(Math.random()*_.length)]))},A=function(){var e=Object(o.useState)("home"),t=Object(p.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(null),i=Object(p.a)(r,2),l=i[0],u=i[1],d=Object(o.useState)(c.a.createElement(b.a,{size:"large"})),f=Object(p.a)(d,2),E=f[0],v=f[1];Object(o.useEffect)((function(){function e(){return(e=Object(g.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,u(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var o=document.createAttribute("scheme");o.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(o)}})),function(){e.apply(this,arguments)}()}),[]);return c.a.createElement(h.a,{activePanel:a,popout:E},c.a.createElement(k,{id:"home",fetchedUser:l,go:function(e){n(e.currentTarget.dataset.to)}}))};s.a.send("VKWebAppInit"),i.a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.4f57826a.chunk.js.map
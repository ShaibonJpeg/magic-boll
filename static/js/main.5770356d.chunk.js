(this.webpackJsonpVKMINI=this.webpackJsonpVKMINI||[]).push([[0],{104:function(e,t,n){e.exports=n(213)},213:function(e,t,n){"use strict";n.r(t);n(105),n(131),n(133),n(134),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(156),n(157),n(158),n(159),n(160),n(161),n(162),n(163),n(164),n(165),n(166),n(167),n(168),n(169),n(170),n(171),n(172),n(173);var a=n(0),c=n.n(a),r=n(63),o=n.n(r),i=n(39),s=n.n(i),u=n(64),l=n.n(u),m=n(95),d=n(47),p=n(103),f=n.n(p),h=n(102),b=n.n(h),E=(n(182),n(96)),y=n.n(E),I=n(97),g=n.n(I),v=n(101),j=n.n(v),O=n(98),K=n.n(O),V=n(99),w=n.n(V),x=n(100),U=n.n(x),_=function(e){var t=e.id,n=(e.go,e.fetchedUser);return c.a.createElement(y.a,{id:t},c.a.createElement(g.a,null,"Example"),n&&c.a.createElement(K.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(w.a,{before:n.photo_200?c.a.createElement(U.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name)),c.a.createElement(j.a,{mode:"secondary",onclick:"document.getElementById('demo').textContent = arr[parseInt(0 + Math.random() * (19))]"},"Shuffle"),c.a.createElement("p",{id:"demo"})))},k=function(){var e=Object(a.useState)("home"),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),i=Object(d.a)(o,2),u=i[0],p=i[1],h=Object(a.useState)(c.a.createElement(b.a,{size:"large"})),E=Object(d.a)(h,2),y=E[0],I=E[1];Object(a.useEffect)((function(){function e(){return(e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,p(t),I(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);return c.a.createElement(f.a,{activePanel:n,popout:y},c.a.createElement(_,{id:"home",fetchedUser:u,go:function(e){r(e.currentTarget.dataset.to)}}))};s.a.send("VKWebAppInit"),o.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.5770356d.chunk.js.map
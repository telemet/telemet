(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{394:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("471142f4",content,!0,{sourceMap:!1})},401:function(t,e,r){"use strict";r(394)},402:function(t,e,r){var n=r(13)(!1);n.push([t.i,"",""]),t.exports=n},405:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(24),r(62),r(8),r(22),r(51),r(47),r(109)),c={components:{AnimatedNumber:r.n(o).a},props:{duration:{type:Number,default:1666}},data:function(){return{api:"https://sheets.googleapis.com/v4/spreadsheets/1gwIzncB37WScVHQgI8P2uEqj1QYGS0JrS4tM7PzQgxQ/values/vars!G1:G1?key=AIzaSyCzDCILqQpcc1wCKmAvTsiQ98UhQA9VX9g",dataReady:!1,total:0}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get(t.api);case 2:r=e.sent,t.dataReady=!0,t.total=r.values[0][0];case 5:case"end":return e.stop()}}),e)})))()},methods:{formatNumber:function(t){return"".concat(t.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,","))}}},d=(r(401),r(2)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"counter text-center cursor-pointer"},[r("animated-number",{staticClass:"text-red-700 hover:text-red-600 font-bold text-12xl md:text-14xl leading-none tracking-tight",attrs:{value:t.total,"format-value":t.formatNumber,delay:0,duration:t.duration,easing:"easeOutCirc"}})],1)}),[],!1,null,"7e65968a",null);e.default=component.exports}}]);
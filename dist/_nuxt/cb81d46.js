(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{441:function(t,e,r){var content=r(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("3b70f074",content,!0,{sourceMap:!1})},465:function(t,e,r){"use strict";r(441)},466:function(t,e,r){var n=r(13)(!1);n.push([t.i,"h2[data-v-509ae412]{font-size:1.125rem}@media (min-width:1280px){h2[data-v-509ae412]{font-size:1.25rem}}.nuxt-link-active[data-v-509ae412]{--bg-opacity:1;background-color:#222;background-color:rgba(34,34,34,var(--bg-opacity))}.counter[data-v-509ae412]{width:100%;display:flex;align-items:center;cursor:pointer;padding:.5rem .75rem;border-radius:.375rem}@media (min-width:1024px){.counter[data-v-509ae412]{font-size:1.25rem;border-radius:.5rem;padding-left:.875rem;padding-right:.875rem}}@media (min-width:1280px){.counter[data-v-509ae412]{font-size:1.5rem;padding-left:1rem;padding-right:1rem}}.number[data-v-509ae412]{--text-opacity:1;color:#ff2846;color:rgba(255,40,70,var(--text-opacity));font-weight:700;font-size:1.125rem;line-height:1;letter-spacing:-.025em;margin-top:.25rem;display:block;flex:1 1 0%;text-align:left}@media (min-width:768px){.number[data-v-509ae412]{font-size:1.25rem}}@media (min-width:1024px){.number[data-v-509ae412]{font-size:1.5rem}}",""]),t.exports=n},492:function(t,e,r){"use strict";r.r(e);var n=r(3),o=(r(24),r(61),r(8),r(22),r(51),r(47),r(104)),d={components:{AnimatedNumber:r.n(o).a},props:{duration:{type:Number,default:1666}},data:function(){return{api:"https://sheets.googleapis.com/v4/spreadsheets/1gwIzncB37WScVHQgI8P2uEqj1QYGS0JrS4tM7PzQgxQ/values/vars!G1:G1?key=AIzaSyCzDCILqQpcc1wCKmAvTsiQ98UhQA9VX9g",dataReady:!1,tMembers:0,tGroups:18,tCampaigns:2}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get(t.api);case 2:r=e.sent,t.dataReady=!0,t.tMembers=r.values[0][0];case 5:case"end":return e.stop()}}),e)})))()},methods:{formatNumber:function(t){return"".concat(t.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g,","))}}},m=(r(465),r(2)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"stats flex flex-col"},[r("div",{staticClass:"grid-item members group"},[r("NuxtLink",{staticClass:"counter bg-gray-800 group-hover:bg-gray-700 trans-100",attrs:{to:"/t"}},[r("h2",[t._v("פעילים")]),t._v(" "),r("animated-number",{staticClass:"number group-hover:text-red-700",attrs:{value:t.tMembers,"format-value":t.formatNumber,delay:100,duration:t.duration,easing:"easeOutCirc"}})],1)],1),t._v(" "),r("div",{staticClass:"grid-item groups group"},[r("NuxtLink",{staticClass:"counter bg-gray-800 group-hover:bg-gray-700 trans-100",attrs:{to:"/g"}},[r("h2",[t._v("קבוצות")]),t._v(" "),r("animated-number",{staticClass:"number group-hover:text-red-700",attrs:{value:t.tGroups,"format-value":t.formatNumber,delay:1e3,duration:t.duration,easing:"easeOutCirc"}})],1)],1),t._v(" "),r("div",{staticClass:"grid-item campaigns group"},[r("NuxtLink",{staticClass:"counter bg-gray-800 group-hover:bg-gray-700 trans-100",attrs:{to:"/c"}},[r("h2",[t._v("מערכות")]),t._v(" "),r("animated-number",{staticClass:"number group-hover:text-red-700",attrs:{value:t.tCampaigns,"format-value":t.formatNumber,delay:1500,duration:t.duration,easing:"easeOutCirc"}})],1)],1)])}),[],!1,null,"509ae412",null);e.default=component.exports}}]);
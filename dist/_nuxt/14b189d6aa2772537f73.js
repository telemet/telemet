(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{226:function(t,e,r){var content=r(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("24b4836e",content,!0,{sourceMap:!1})},227:function(t,e,r){"use strict";var n={props:{url:{type:String,default:""},title:{type:String,default:"Press"},buttonClass:{type:String,default:""}}},o=(r(228),r(2)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:this.buttonClass,attrs:{type:"submit"}},[e("span",[this._v(this._s(this.title))])])}),[],!1,null,null,null);e.a=component.exports},228:function(t,e,r){"use strict";var n=r(226);r.n(n).a},229:function(t,e,r){(e=r(13)(!1)).push([t.i,".btn{font-weight:700;padding:1rem 3rem;display:inline-block;border-radius:9999px;font-size:1.5rem;line-height:1}.btn span{display:block;margin-top:-.25rem}.btn-red{background-color:#ff0528;color:#fff}.btn-red:hover{background-color:#ff2846}button:disabled{cursor:not-allowed}",""]),t.exports=e},230:function(t,e,r){var content=r(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("1ac59b9f",content,!0,{sourceMap:!1})},236:function(t,e,r){"use strict";var n=r(230);r.n(n).a},237:function(t,e,r){(e=r(13)(!1)).push([t.i,"section{position:relative;min-height:100vh;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center}",""]),t.exports=e},250:function(t,e,r){"use strict";r.r(e);var n=r(227),o=r(89),l={name:"Home",components:{AppButton:n.a,AppPoster:o.a},data:function(){return{title:"אודות",description:"אודות טלאֱמֶת",poster:"https://telemet.org/images/telemet-meta-poster.jpg"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"og:url",property:"og:url",content:this.$nuxt.$route.path},{hid:"og:title",property:"og:title",content:"טלאֱמֶת | "+this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.poster},{hid:"twitter:url",property:"twitter:url",content:this.$nuxt.$route.path},{hid:"twitter:title",property:"twitter:title",content:"טלאֱמֶת | "+this.title},{hid:"twitter:description",property:"twitter:description",content:this.description},{hid:"twitter:image",property:"twitter:image",content:this.poster}]}}},c=(r(236),r(2)),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"min-h-screen mx-auto"},[e("AppPoster",{attrs:{poster:"telemet-balfur2"}}),this._v(" "),e("section",{attrs:{id:"main"}},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-2xl md:text-3xl lg:text-4xl"},[this._v("\n        גיוס של\n        "),e("NuxtLink",{attrs:{to:"/#people"}},[e("span",{staticClass:"text-red-700 border-b border-white border-dashed hover:text-white hover:border-red-700"},[this._v("אנשים")])]),this._v("\n        שהתעוררו לאמת הוא בראש מעינינו\n      ")],1),this._v(" "),e("p",{staticClass:"text-gray-300 text-lg md:text-xl lg:text-2xl"},[this._v("\n        אנו זקוקים לעזרתכם, הרשמו פה ועכשיו -\n      ")]),this._v(" "),e("div",{},[e("NuxtLink",{attrs:{to:"/#join"}},[e("app-button",{staticClass:"btn btn-red mx-auto mt-10",attrs:{title:"להרשמה"}})],1)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);
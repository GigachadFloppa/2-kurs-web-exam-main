(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{475:function(t,e,n){"use strict";n.r(e);var r=n(26),o=(n(95),{mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://demo-api.vsdev.space/api/farm/home_page");case 2:n=e.sent,data=n.data,t.text=data.text,t.img=data.image;case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{text:"",img:""}}}),c=n(78),m=n(90),l=n.n(m),v=n(418),d=n(162),f=n(419),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"8"},domProps:{innerHTML:t._s(t.text)}}),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-img",{attrs:{src:t.img}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:v.a,VImg:d.a,VRow:f.a})}}]);
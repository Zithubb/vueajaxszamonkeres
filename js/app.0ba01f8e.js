(function(t){function e(e){for(var r,a,c=e[0],i=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&p.push(u[a][0]),u[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==u[i]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},u={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/vueajaxszamonkeres/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Statues")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Statues")]),n("hr"),n("table",[t._m(0),n("tbody",t._l(t.statues,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.person))]),n("td",[t._v(t._s(e.height))]),n("td",[t._v(t._s(e.price))]),n("td",[n("button",{on:{click:function(n){return t.deleteStatue(e.id)}}},[t._v("Törlés")]),n("button",{on:{click:function(n){return t.editStatue(e.id)}}},[t._v("Szerkesztés")])])])})),0)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Személy")]),n("th",[t._v("Magasság")]),n("th",[t._v("Ár")]),n("th",[t._v("Műveletek")])])])}],i=n("1da1"),s=(n("96cf"),n("d3b7"),{name:"App",components:{},data:function(){return{statue:{id:null,person:"",height:"",price:!1},statues:[]}},methods:{loadData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://127.0.0.1:8000/api/statues");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,t.statues=r;case 7:case"end":return e.stop()}}),e)})))()},deleteStatue:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("http://127.0.0.1:8000/api/statues/".concat(t),{method:"DELETE"});case 2:return r=n.sent,console.log(r),n.next=6,e.loadData();case 6:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.loadData()}}),l=s,f=(n("e2ff"),n("2877")),p=Object(f["a"])(l,a,c,!1,null,null,null),d=p.exports,h={name:"App",components:{Statues:d},data:function(){return{route:"Statues"}},methods:{}},v=h,b=(n("034f"),Object(f["a"])(v,u,o,!1,null,null,null)),m=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(m)}}).$mount("#app")},6993:function(t,e,n){},"85ec":function(t,e,n){},e2ff:function(t,e,n){"use strict";n("6993")}});
//# sourceMappingURL=app.0ba01f8e.js.map
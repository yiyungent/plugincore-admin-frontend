(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-266a1ec9"],{1039:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"rem-plugin-details"},[n("el-page-header",{staticClass:"rem-page-header",attrs:{title:"返回",content:"插件详细"},on:{back:t.goBack}}),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"rem-item"},[n("span",{staticClass:"rem-label"},[t._v("PluginId:")]),n("span",[t._v(t._s(t.info.pluginId))])]),n("div",{staticClass:"rem-item"},[n("span",{staticClass:"rem-label"},[t._v("显示名:")]),n("span",[t._v(t._s(t.info.displayName))])]),n("div",{staticClass:"rem-item"},[n("span",{staticClass:"rem-label"},[t._v("描述:")]),n("span",[t._v(t._s(t.info.description))])]),n("div",{staticClass:"rem-item"},[n("span",{staticClass:"rem-label"},[t._v("作者:")]),n("span",[t._v(t._s(t.info.author))])]),n("div",{staticClass:"rem-item"},[n("span",{staticClass:"rem-label"},[t._v("版本:")]),n("span",[n("el-tag",[t._v(t._s(t.info.version))])],1)]),n("div",{staticClass:"rem-item"},[n("span",{staticClass:"rem-label"},[t._v("支持版本:")]),n("span",t._l(t.info.supportedVersions,(function(e,a){return n("el-tag",{key:a},[t._v(t._s(e))])})),1)]),n("div",{staticClass:"rem-item"},[n("span",{staticClass:"rem-label"},[t._v("状态:")]),n("span",[n("el-tag",[t._v(t._s(t._f("statusFilter")(t.info.status)))])],1)])])],1)])},s=[],i=n("1da1"),r=(n("96cf"),n("c65d")),u=n("b893"),c=[{key:"-1",display_name:"已安装"},{key:"0",display_name:"已启用"},{key:"1",display_name:"未启用"},{key:"2",display_name:"未安装"}],l=c.reduce((function(t,e){return t[e.key]=e.display_name,t}),{}),o={filters:{statusFilter:function(t){return l[t]}},data:function(){return{info:{pluginId:"",displayName:"",description:"",author:"",version:"",supportedVersions:[],status:0}}},created:function(){this.loadInfo()},methods:{loadInfo:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.pluginId,e.next=3,Object(r["b"])(n);case 3:a=e.sent,a.code<0?Object(u["a"])(a):t.info=a.data;case 5:case"end":return e.stop()}}),e)})))()},goBack:function(){this.$router.back()}}},d=o,p=(n("49e3"),n("2877")),m=Object(p["a"])(d,a,s,!1,null,"a3dee060",null);e["default"]=m.exports},"49e3":function(t,e,n){"use strict";n("9917")},9917:function(t,e,n){},b893:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("5c96");function s(t,e){t.code>0?Object(a["Message"])({message:t.message,type:"success",duration:5e3}):Object(a["Message"])({message:t.message,type:"error",duration:5e3}),e&&e()}},c65d:function(t,e,n){"use strict";n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"j",(function(){return r})),n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return o})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return p})),n.d(e,"i",(function(){return m}));var a=n("b775");function s(t){return Object(a["a"])({url:"/plugincore/admin/plugins/list",method:"get",params:{status:t}})}function i(t){return Object(a["a"])({url:"/plugincore/admin/plugins/install",method:"post",params:{pluginId:t}})}function r(t){return Object(a["a"])({url:"/plugincore/admin/plugins/uninstall",method:"post",params:{pluginId:t}})}function u(t){return Object(a["a"])({url:"/plugincore/admin/plugins/delete",method:"post",params:{pluginId:t}})}function c(t){return Object(a["a"])({url:"/plugincore/admin/plugins/enable",method:"post",params:{pluginId:t}})}function l(t){return Object(a["a"])({url:"/plugincore/admin/plugins/disable",method:"post",params:{pluginId:t}})}function o(t){return Object(a["a"])({url:"/plugincore/admin/plugins/details",method:"get",params:{pluginId:t}})}function d(t){return Object(a["a"])({url:"/plugincore/admin/plugins/readme",method:"get",params:{pluginId:t}})}function p(t){return Object(a["a"])({url:"/plugincore/admin/plugins/settings",method:"get",params:{pluginId:t}})}function m(t,e){return Object(a["a"])({url:"/plugincore/admin/plugins/settings",method:"post",data:{pluginId:t,data:e}})}}}]);
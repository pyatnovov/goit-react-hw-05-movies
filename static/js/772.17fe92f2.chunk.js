"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[772],{772:function(n,t,e){e.r(t);var r=e(861),c=e(439),u=e(757),a=e.n(u),i=e(791),o=e(87),s=e(347),f=e(609),l=e(184);t.default=function(){var n,t=(0,i.useState)([]),e=(0,c.Z)(t,2),u=e[0],h=e[1],p=(0,o.lr)(),v=(0,c.Z)(p,2),d=v[0],m=v[1],g=null!==(n=d.get("search"))&&void 0!==n?n:"";return(0,i.useEffect)((function(){if(g){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.ZF)(g).then((function(n){return n.results}));case 2:t=n.sent,h(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[g]),(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==g.trim()?m(""):alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443")},children:[(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"text",value:g,onChange:function(n){var t=n.target.value.toLowerCase();if(""===t)return m({});m({search:t})}})}),(0,l.jsx)("button",{type:"submit",style:{width:70,height:30},onClick:function(){function n(){return(n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.ZF)(g).then((function(n){return n.results}));case 2:t=n.sent,h(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},children:"Search"})]}),(0,l.jsx)(f.Z,{items:u})]})}},609:function(n,t,e){var r=e(689),c=e(87),u=e(184);t.Z=function(n){var t=n.items,e=(0,r.TH)();return(0,u.jsx)("ul",{children:t.map((function(n){return(0,u.jsx)("li",{children:(0,u.jsxs)(c.rU,{to:"/movies/".concat(n.id),state:{from:e},children:[n.title,n.name]})},n.id)}))})}},347:function(n,t,e){e.d(t,{Ku:function(){return p},YJ:function(){return l},ZF:function(){return h},_L:function(){return f},fI:function(){return v}});var r=e(861),c=e(757),u=e.n(c),a="https://api.themoviedb.org/3/",i="09994a796f4e1a9c14a0723469809976";function o(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(u().mark((function n(){var t,e,r,c=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return o("".concat(a,"trending/all/day?api_key=").concat(i))}function l(n){return o("".concat(a,"movie/").concat(n,"?api_key=").concat(i,"&language=en-US"))}function h(n){return o("".concat(a,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"))}function p(n){return o("".concat(a,"movie/").concat(n,"/credits?api_key=").concat(i,"&language=en-US"))}function v(n){return o("".concat(a,"movie/").concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}},861:function(n,t,e){function r(n,t,e,r,c,u,a){try{var i=n[u](a),o=i.value}catch(s){return void e(s)}i.done?t(o):Promise.resolve(o).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function i(n){r(a,c,u,i,o,"next",n)}function o(n){r(a,c,u,i,o,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=772.17fe92f2.chunk.js.map
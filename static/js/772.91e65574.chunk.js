"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[772],{772:function(n,t,e){e.r(t);var r=e(861),c=e(439),a=e(757),i=e.n(a),o=e(791),u=e(689),s=e(347),f=e(609),l=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1],h=(0,o.useState)(""),p=(0,c.Z)(h,2),v=p[0],d=p[1],m=(0,u.TH)();return(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==v.trim()?d(""):alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443")},children:[(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"text",value:v,onChange:function(n){d(n.target.value.toLowerCase())}})}),(0,l.jsx)("button",{type:"submit",style:{width:70,height:30},onClick:function(){function n(){return(n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.ZF)(v).then((function(n){return n.results}));case 2:t=n.sent,a(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},children:"Search"})]}),(0,l.jsx)(f.Z,{items:e,location:m})]})}},609:function(n,t,e){var r=e(87),c=e(184);t.Z=function(n){var t=n.items,e=n.location;return(0,c.jsx)("ul",{children:t.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsxs)(r.rU,{to:"/movies/".concat(n.id),state:{from:e},children:[n.title,n.name]})},n.id)}))})}},347:function(n,t,e){e.d(t,{Ku:function(){return p},YJ:function(){return l},ZF:function(){return h},_L:function(){return f},fI:function(){return v}});var r=e(861),c=e(757),a=e.n(c),i="https://api.themoviedb.org/3/",o="09994a796f4e1a9c14a0723469809976";function u(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(a().mark((function n(){var t,e,r,c=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e=c.length>1&&void 0!==c[1]?c[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return u("".concat(i,"trending/all/day?api_key=").concat(o))}function l(n){return u("".concat(i,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"))}function h(n){return u("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"))}function p(n){return u("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"))}function v(n){return u("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}},861:function(n,t,e){function r(n,t,e,r,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?t(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var i=n.apply(t,e);function o(n){r(i,c,a,o,u,"next",n)}function u(n){r(i,c,a,o,u,"throw",n)}o(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=772.91e65574.chunk.js.map
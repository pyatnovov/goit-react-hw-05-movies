"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[371],{371:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(439),a=n(791),u=n(689),o=n(184),c=function(e){var t=e.onSubmit,n=(0,a.useState)(""),u=(0,r.Z)(n,2),c=u[0],i=u[1];return(0,o.jsx)("header",{children:(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?t(c):alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443")},children:[(0,o.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:c,onChange:function(e){i(e.target.value.toLowerCase())}}),(0,o.jsx)("button",{type:"submit",onClick:t,children:"Search"})]})})},i=n(347),s=function(){var e,t=(0,a.useState)(""),n=(0,r.Z)(t,2)[1],s=(0,a.useState)([]),f=(0,r.Z)(s,2)[1],l=(0,u.TH)(),h=null!==(e=new URLSearchParams(l.search).get("query"))&&void 0!==e?e:"";(0,a.useEffect)((function(){h&&(0,i.ZF)(h).then((function(e){f(e.results)}))}),[h]);return(0,o.jsx)(c,{onSubmit:function(e){n(e)}})}},347:function(e,t,n){n.d(t,{ZF:function(){return h},_L:function(){return l}});var r=n(861),a=n(757),u=n.n(a),o=n(243),c="https://api.themoviedb.org/3/",i="09994a796f4e1a9c14a0723469809976";function s(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(u().mark((function e(){var t,n,r,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,(0,o.Z)(t,n);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not Found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function l(){return s("".concat(c,"trending/all/day?api_key=").concat(i))}function h(e){return s("".concat(c,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"))}}}]);
//# sourceMappingURL=371.36ad657b.chunk.js.map
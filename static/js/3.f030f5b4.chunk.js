(this["webpackJsonp@test-project/web"]=this["webpackJsonp@test-project/web"]||[]).push([[3],{46:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(t){return t.moviesStore.imageConfiguration}},47:function(t,r,e){t.exports=e(52)},48:function(t,r,e){"use strict";function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(r,"a",(function(){return o}))},49:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(t){return t.moviesStore.movies}},50:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var n=function(t){return t.moviesStore.loadingStatus}},51:function(t,r,e){"use strict";e.d(r,"a",(function(){return i})),e.d(r,"c",(function(){return a})),e.d(r,"d",(function(){return c})),e.d(r,"b",(function(){return u}));var n=e(27),o=function(t,r){var e=function(t){var r=t.baseUrl,e=t.params,n=new URL(r);return Object.keys(e).forEach((function(t){return n.searchParams.append(t,e[t])})),n.toString()}({baseUrl:"".concat("https://api.themoviedb.org/3/").concat(t),params:Object(n.a)({api_key:"718e897ea5f095778d7d40b5aeaded2e"},r)});return fetch(e).then((function(t){return t.json()}))},i=function(){return o("configuration")},a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1";return o("movie/popular",{page:t})},c=function(t){return o("search/movie",{query:t})},u=function(t){return o("movie/".concat(t))}},52:function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(N){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return G()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?v:l,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var h="suspendedStart",l="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,j=w&&w(w(P([])));j&&j!==e&&n.call(j,i)&&(b=j);var x=m.prototype=y.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function L(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}}function E(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:G}}function G(){return{value:r,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new L(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},56:function(t,r,e){"use strict";e.r(r);var n=e(1),o=e(0),i=e(25),a=e(47),c=e.n(a),u=e(48),s=e(51),f=e(24),h=e(46),l=e(50),p=function(t){return t.moviesStore.movieInformations},v=(e(49),e(10)),d=function(t){var r=t.infos,e=Object(i.c)(h.a).imageSecureBaseUrl,o=r.title,a=r.original_title,c=r.overview,u=r.vote_count,s=r.vote_average,f=r.poster_path;return Object(n.jsxs)(v.a,{title:"".concat(o," ").concat(o!==a?"(".concat(a,")"):""),imageSource:"".concat(e,"w185").concat(f),children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{children:[s,"/10 (",u,")"]})]})};r.default=function(t){var r=t.id,e=Object(i.b)(),a=Object(i.c)(l.a),h=Object(i.c)(p);return Object(o.useEffect)((function(){r&&e(function(t){return function(){var r=Object(u.a)(c.a.mark((function r(e){var n,o,i,a,u;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e(Object(f.c)("pending")),r.prev=1,r.next=4,Object(s.a)();case 4:return n=r.sent,o=n.images,i=o.base_url,a=o.secure_base_url,e(Object(f.b)({imageBaseUrl:i,imageSecureBaseUrl:a})),e(Object(f.d)()),r.next=11,Object(s.b)(t);case 11:u=r.sent,e(Object(f.d)(u)),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(1),console.error(r.t0);case 18:return r.prev=18,e(Object(f.c)("idle")),r.finish(18);case 21:case"end":return r.stop()}}),r,null,[[1,15,18,21]])})));return function(t){return r.apply(this,arguments)}}()}(r))}),[e,r]),Object(n.jsxs)(n.Fragment,{children:["pending"===a&&Object(n.jsx)("b",{children:"Loading..."}),"idle"===a&&h&&Object(n.jsx)(d,{infos:h})]})}}}]);
//# sourceMappingURL=3.f030f5b4.chunk.js.map
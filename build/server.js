module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=51)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("immutable")},function(e,t){e.exports=require("chalk")},function(e,t){e.exports=require("react-immutable-proptypes")},function(e,t){e.exports=require("react-redux")},function(e,t,n){e.exports=n(24)},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"e",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return l});var r="USERS_INVALID",o="USERS_REQUESTING",a="USERS_SUCCESS",i="USERS_FAILURE",u="https://jsonplaceholder.typicode.com/users",c=function(e){return function(t){return t({type:o}),e.get(u).then(function(e){t({type:a,data:e.data})}).catch(function(e){t({type:i,err:e})})}},s=function(e){var t=e.get("home");return t.get("readyState")!==a},l=function(){return function(e,t,n){return s(t())?e(c(n)):null}}},function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return s});var r="AN_USER_REQUESTING",o="AN_USER_SUCCESS",a="AN_USER_FAILURE",i="https://jsonplaceholder.typicode.com/users",u=function(e,t){return function(n){return n({type:r,userId:e}),t.get(i+"/"+e).then(function(t){n({type:o,userId:e,data:t.data})}).catch(function(t){n({type:a,userId:e,err:t})})}},c=function(e,t){var n=e.getIn(["userInfo",t]);return!n||n.get("readyState")!==o},s=function(e){return function(t,n,r){return c(n(),e)?t(u(e,r)):null}}},function(e,t,n){"use strict";function r(e){return n.i(o.combineReducers)(u({routing:s,home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.i(a.Map)({});return e},userInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.i(a.Map)({});return e}},e))}var o=n(47),a=(n.n(o),n(2)),i=(n.n(a),n(19));n.n(i);t.b=r,n.d(t,"a",function(){return l});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n.i(a.fromJS)({locationBeforeTransitions:null}),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];return t.type===i.LOCATION_CHANGE?e.merge({locationBeforeTransitions:t.payload}):e},l=function(e,t,n){e.asyncReducers[t]=n,e.replaceReducer(r(e.asyncReducers))}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-router-redux")},function(e,t,n){"use strict";var r=n(17),o=n.n(r),a=n(42),i=n.n(a),u=n(39),c=n.n(u),s=n(38),l=n.n(s),f=n(40),p=n.n(f),d=n(41),m=n.n(d),h=n(50),y=n.n(h),v=n(0),b=n.n(v),g=n(45),S=(n.n(g),n(5)),E=(n.n(S),n(18)),x=(n.n(E),n(19)),_=(n.n(x),n(3)),O=n.n(_),w=n(32),j=n(31),P=n(33),I=(n.n(P),n(34)),T=n(6),U=n.n(T),q=c()();q.use(p()()),q.use(m()()),q.use(l()()),q.use(i()("dev",{skip:function(e,t){return t.statusCode<400}})),q.use(y()(o.a.join(process.cwd(),"./build/public/favicon.ico"))),q.use(c.a.static(o.a.join(process.cwd(),"./build/public")));q.get("*",function(e,t){var r=n.i(j.a)();if(__DISABLE_SSR__)return void t.send(n.i(I.a)(r));var o=n.i(E.createMemoryHistory)(e.url),a=n.i(w.a)(r),i=n.i(x.syncHistoryWithStore)(o,r,{selectLocationState:n.i(P.createSelectLocationState)("routing")});n.i(E.match)({history:i,routes:a,location:e.url},function(e,o,a){if(e)t.status(500).send(e.message);else if(o)t.redirect(302,o.pathname+o.search);else if(a){var i=a.components.filter(function(e){return e.fetchData}).map(function(e){return e.fetchData(r.dispatch,a.params)});Promise.all(i).then(function(){var e=n.i(g.renderToString)(b.a.createElement(S.Provider,{store:r},b.a.createElement(E.RouterContext,a)));t.status(200).send(n.i(I.a)(r,e))})}else t.sendStatus(404)})}),U.a.port?q.listen(U.a.port,U.a.host,function(e){e&&console.error("==> 😭  OMG!!! "+e),console.info(O.a.green("==> 🌎  Listening at http://"+U.a.host+":"+U.a.port)),n(35).default(U.a.port)}):console.error(O.a.red("==> 😭  OMG!!! No PORT environment variable has been specified"))},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n.n(a),u=n(10),c=n.n(u),s=function(e){var t=e.info;return o.a.createElement("div",{className:c.a.UserCard},o.a.createElement("h4",null,"User Card"),o.a.createElement("ul",null,o.a.createElement("li",null,"Name: ",t.get("name")),o.a.createElement("li",null,"Phone: ",t.get("phone")),o.a.createElement("li",null,"Email: ",t.get("email")),o.a.createElement("li",null,"Website: ",t.get("website"))))};s.propTypes={info:i.a.map.isRequired},t.a=s},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),i=n.n(a),u=n(18),c=(n.n(u),n(11)),s=n.n(c),l=function(e){var t=e.list;return o.a.createElement("div",{className:s.a.UserList},o.a.createElement("h4",null,"User List"),o.a.createElement("ul",null,t.map(function(e){return o.a.createElement("li",{key:e.get("id")},o.a.createElement(u.Link,{to:"/UserInfo/"+e.get("id")},e.get("name")))})))};l.propTypes={list:i.a.list.isRequired},t.a=l},function(e,t,n){e.exports={host:{NODE_ENV:"production"}.HOST||"localhost",port:{NODE_ENV:"production"}.PORT,app:{htmlAttributes:{lang:"en"},title:"React Cool Starter",titleTemplate:"React Cool Starter - %s",meta:[{name:"description",content:"The best react universal starter boilerplate in the world."}]}}},function(e,t,n){var r=n(23),o={};e.exports=Object.assign({},r,o)},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),u=n(6),c=n.n(u),s=n(16),l=(n.n(s),n(12)),f=n.n(l),p=function(e){var t=e.children;return o.a.createElement("div",{className:f.a.App},o.a.createElement(i.a,c.a.app),o.a.createElement("div",{className:f.a.header},o.a.createElement("img",{src:n(!function(){var e=new Error('Cannot find module "./assets/logo.svg"');throw e.code="MODULE_NOT_FOUND",e}()),alt:"Logo",role:"presentation"}),o.a.createElement("h1",null,c.a.app.title)),o.a.createElement("hr",null),t)};p.propTypes={children:r.PropTypes.node},t.a=p},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(4),s=n.n(c),l=n(44),f=n.n(l),p=n(5),d=(n.n(p),n(1)),m=n.n(d),h=n(7),y=n(22),v=n(13),b=n.n(v),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),S=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.displayUserList=function(){var e=a.props.home;return e.get("readyState")&&e.get("readyState")!==h.a&&e.get("readyState")!==h.b?e.get("readyState")===h.c?u.a.createElement("p",null,"Oops, Failed to load list!"):u.a.createElement(y.a,{list:e.get("list")}):u.a.createElement("p",null,"Loading...")},i=n,o(a,i)}return a(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;t.fetchData(e)}},{key:"shouldComponentUpdate",value:function(e,t){return f()(this,e,t)}},{key:"render",value:function(){return u.a.createElement("div",{className:b.a.Home},u.a.createElement(m.a,{title:"Home"}),this.displayUserList())}}],[{key:"fetchData",value:function(e){return Promise.all([e(h.d())])}}]),t}(i.Component);S.propTypes={home:s.a.map,dispatch:i.PropTypes.func};var E=function(e){return{home:e.get("home")}};t.default=n.i(p.connect)(E)(S)},function(e,t,n){"use strict";var r=n(2),o=(n.n(r),n(7)),a=n.i(r.Map)({readyState:o.a,list:null});t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case o.b:return e.merge({readyState:o.b});case o.c:return e.merge({readyState:o.c,err:n.i(r.fromJS)(t.err)});case o.e:return e.merge({readyState:o.e,list:n.i(r.fromJS)(t.data)});default:return e}}},function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),u=n(14),c=n.n(u);t.default=function(){return o.a.createElement("div",{className:c.a.NotFound},o.a.createElement(i.a,{title:"Oops"}),o.a.createElement("p",null,"Oops, Page was not found!"))}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),u=n.n(i),c=n(4),s=n.n(c),l=n(44),f=n.n(l),p=n(5),d=(n.n(p),n(1)),m=n.n(d),h=n(8),y=n(21),v=n(15),b=n.n(v),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),S=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.displayUserCard=function(){var e=a.props,t=e.userInfo,n=e.params,r=t.get(n.id);return r&&r.get("readyState")!==h.a?r.get("readyState")===h.b?u.a.createElement("p",null,"Oops, Failed to load info!"):u.a.createElement(y.a,{info:r.get("info")}):u.a.createElement("p",null,"Loading...")},i=n,o(a,i)}return a(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.dispatch,r=e.params;t.fetchData(n,r)}},{key:"shouldComponentUpdate",value:function(e,t){return f()(this,e,t)}},{key:"render",value:function(){return u.a.createElement("div",{className:b.a.UserInfo},u.a.createElement(m.a,{title:"User Info"}),this.displayUserCard())}}],[{key:"fetchData",value:function(e,t){return Promise.all([e(h.c(t.id))])}}]),t}(i.Component);S.propTypes={dispatch:i.PropTypes.func,params:i.PropTypes.objectOf(i.PropTypes.string),userInfo:s.a.map};var E=function(e){return{userInfo:e.get("userInfo")}};t.default=n.i(p.connect)(E)(S)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=n(2),a=(n.n(o),n(8));t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.i(o.Map)({}),t=arguments[1];switch(t.type){case a.a:return e.merge(r({},t.userId,n.i(o.Map)({readyState:a.a})));case a.b:return e.merge(r({},t.userId,n.i(o.Map)({readyState:a.b,err:n.i(o.fromJS)(t.err)})));case a.d:return e.merge(r({},t.userId,n.i(o.Map)({readyState:a.d,info:n.i(o.fromJS)(t.data)})));default:return e}}},function(e,t,n){"use strict";var r=n(46),o=(n.n(r),n(48)),a=n.n(o),i=n(36),u=n.n(i),c=n(3),s=(n.n(c),n(9));"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.a=function(e){var t=[a.a.withExtraArgument(u.a)],o=[r.applyMiddleware.apply(void 0,t),function(e){return e}],i=n.i(r.createStore)(n.i(s.b)(),e,r.compose.apply(void 0,o));return i.asyncReducers={},i}},function(e,t,n){"use strict";function r(e){return{component:u.a,childRoutes:[{path:"/",getComponent:function(t,r){var o=Promise.all([Promise.resolve().then(n.bind(null,26)),Promise.resolve().then(n.bind(null,27))]),a=l(r);o.then(function(t){var r=c(t,2),o=r[0],u=r[1];n.i(i.a)(e,"home",u.default),a(o)}).catch(s)}},{path:"/UserInfo/:id",getComponent:function(t,r){var o=Promise.all([Promise.resolve().then(n.bind(null,29)),Promise.resolve().then(n.bind(null,30))]),a=l(r);o.then(function(t){var r=c(t,2),o=r[0],u=r[1];n.i(i.a)(e,"userInfo",u.default),a(o)}).catch(s)}},{path:"*",getComponent:function(e,t){Promise.resolve().then(n.bind(null,28)).then(l(t)).catch(s)}}]}}var o=n(3),a=n.n(o),i=n(9),u=n(25);t.a=r;var c=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(e){console.error(a.a.red("==> 😭  Dynamic page loading failed "+e))},l=function(e){return function(t){e(null,t.default)}}},function(e,t,n){"use strict";function r(e){return{default:function(){},subscribe:function(){},dispatch:function(){},getState:function(){return n.i(a.fromJS)(i({},e))}}}function o(e){var t=void 0,n=void 0;return function(r){var o=r.get(e);return o.equals(t)||(t=o,n=o.toJS()),n}}var a=n(2),i=(n.n(a),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e});e.exports={storeFake:r,createSelectLocationState:o}},function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(49),i=n.n(a);t.a=function(e,t){var r=o.a.rewind(),a=webpackIsomorphicTools.assets();return"\n    <!DOCTYPE html>\n    <html "+r.htmlAttributes.toString()+'>\n      <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta http-equiv="Content-Language" content="en" />\n        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />\n\n        '+r.base.toString()+"\n        "+r.title.toString()+"\n        "+r.meta.toString()+"\n        "+r.link.toString()+"\n\n        "+Object.keys(a.styles).map(function(e){return'<link href="'+a.styles[e]+'" media="screen, projection" rel="stylesheet" type="text/css" />'}).join("\n")+"\n\n        "+(0===Object.keys(a.styles).length?"<style>"+(n(16)._style+n(12)._style+n(13)._style+n(15)._style+n(14)._style+n(11)._style+n(10)._style)+"</style>":"")+'\n      </head>\n      <body>\n        <div id="react-view">'+(t||"")+'</div>\n\n        <script type="text/javascript">\n          '+(e&&"window.__INITIAL_STATE__="+i()(e.getState()))+'\n        </script>\n\n        <!--[if gte IE 9 ]>\n          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js"></script>\n          <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-sham.min.js"></script>\n        <![endif]-->\n\n        '+Object.keys(a.javascript).reverse().map(function(e){return'<script src="'+a.javascript[e]+'"></script>'}).join("\n")+"\n        "+r.script.toString()+"\n      </body>\n    </html>\n  "}},function(e,t,n){"use strict";(function(e){var r=n(17),o=n.n(r),a=n(37),i=(n.n(a),n(43)),u=n.n(i);t.default=function(t){if("darwin"===process.platform)try{return n.i(a.execSync)('ps cax | grep "Google Chrome"'),n.i(a.execSync)("osascript "+o.a.join(e,"./openChrome.applescript")+" http://localhost:"+t+"/"),!0}catch(e){}try{return u()("http://localhost:"+t+"/"),!0}catch(e){return!1}}}).call(t,"tools/openBrowser")},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("child_process")},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("hpp")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("opn")},function(e,t){e.exports=require("react-addons-shallow-compare")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("redux-immutable")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("serve-favicon")},function(e,t,n){e.exports=n(20)}]);
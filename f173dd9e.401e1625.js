(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(105)),o={title:"Clockify"},c={unversionedId:"integrations/clockify",id:"integrations/clockify",isDocsHomePage:!1,title:"Clockify",description:"Intro",source:"@site/docs/integrations/clockify.md",slug:"/integrations/clockify",permalink:"/docs/integrations/clockify",editUrl:"https://github.com/stethoscope-js/stethoscope.js.org/blob/master/docs/integrations/clockify.md",version:"current",sidebar:"someSidebar",previous:{title:"Twitter",permalink:"/docs/integrations/twitter"},next:{title:"Google Fit",permalink:"/docs/integrations/google-fit"}},l=[{value:"Intro",id:"intro",children:[]},{value:"Data points",id:"data-points",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"intro"},"Intro"),Object(i.b)("p",null,"The Clockify API is used to track your time sessions."),Object(i.b)("h2",{id:"data-points"},"Data points"),Object(i.b)("p",null,"The following data points are available for this integration:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Data point"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"entries")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Time tracking entries")))),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".stethoscoperc.yml"',title:'".stethoscoperc.yml"'}),'integrations:\n  clockify:\n    frequency: "daily"\n    entries: true\n')),Object(i.b)("p",null,"If you want to enable all data points, you can simply use ",Object(i.b)("inlineCode",{parentName:"p"},"all")," instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".stethoscoperc.yml"',title:'".stethoscoperc.yml"'}),'integrations:\n  clockify:\n    frequency: "daily"\n    all: true\n')),Object(i.b)("p",null,"Sensitive information such as project ID, workspace ID, item ID, user ID, and entry description are automatically removed."),Object(i.b)("h2",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"You can generate your Clockify API on the User page: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://clockify.me/user/settings"}),"https://clockify.me/user/settings"),'. Scroll to "API" and click on the "Generate" button. Then, copy your API key.'),Object(i.b)("p",null,'You also need your user ID and workspace ID. You can find your workspace ID by clicking on the "Settings" button in the navigation sidebar, and copying the ID from the address bar. For example, the URL ',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://clockify.me/workspaces/518ad43641f9dg74egfbbgaf/settings"}),"https://clockify.me/workspaces/518ad43641f9dg74egfbbgaf/settings")," includes the workspace ID ",Object(i.b)("inlineCode",{parentName:"p"},"518ad43641f9dg74egfbbgaf"),"."),Object(i.b)("p",null,"To find your user ID, you can either go to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://clockify.me/user/settings"}),"User settings")," page and inspect the outgoing HTTP requests, or run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"node -e 'require(\"./lib/api/clockify\").getUserId()'\n")),Object(i.b)("h2",{id:"environment-variables"},"Environment variables"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"CLOCKIFY_API_KEY")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"API key")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"CLOCKIFY_WORKSPACE_ID")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Workspace ID")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"CLOCKIFY_USER_ID")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"User ID")))),Object(i.b)("a",{href:"/docs/integrations/clockify"},Object(i.b)("img",{class:"logos",alt:"Clockify",src:"https://stethoscope.js.org/branding/integrations/clockify.png"})))}s.isMDXComponent=!0}}]);
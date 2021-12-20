(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,h=l["".concat(a,".").concat(d)]||l[d]||b[d]||i;return n?o.a.createElement(h,u(u({ref:t},c),{},{components:n})):o.a.createElement(h,u({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(105)),a={title:"Support"},u={unversionedId:"policies/support",id:"policies/support",isDocsHomePage:!1,title:"Support",description:"We're excited that you're using this repository and we'd love to help. To help us help you, please read through the following guidelines.",source:"@site/docs/policies/support.md",slug:"/policies/support",permalink:"/docs/policies/support",editUrl:"https://github.com/stethoscope-js/stethoscope.js.org/blob/master/docs/policies/support.md",version:"current",sidebar:"someSidebar",previous:{title:"Security Guidelines",permalink:"/docs/policies/security"}},s=[{value:"Questions",id:"questions",children:[{value:"Asking quality questions",id:"asking-quality-questions",children:[]}]},{value:"Contributions",id:"contributions",children:[]},{value:"Credits",id:"credits",children:[]}],c={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We're excited that you're using this repository and we'd love to help. To help us help you, please read through the following guidelines."),Object(i.b)("h2",{id:"questions"},"Questions"),Object(i.b)("p",null,"Please chat and ask questions by opening a GitHub issue. Jump in there and lurk, talk to us, and help others."),Object(i.b)("h3",{id:"asking-quality-questions"},"Asking quality questions"),Object(i.b)("p",null,"Help us help you!"),Object(i.b)("p",null,"Spending time framing a question and adding support links or resources makes it much easier for us to help. It's easy to fall into the trap of asking something too specific when you're close to a problem. Then, those trying to help you out have to spend a lot of time asking additional questions to understand what you are hoping to achieve."),Object(i.b)("p",null,"Spending the extra time up front can help save everyone time in the long run."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Try to define what you need help with:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Is there something in particular you want to do?"),Object(i.b)("li",{parentName:"ul"},"What problem are you encountering and what steps have you taken to try and fix it?"),Object(i.b)("li",{parentName:"ul"},"Is there a concept you're not understanding?"))),Object(i.b)("li",{parentName:"ul"},"Learn about the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://rubberduckdebugging.com"}),"rubber duck debugging method")),Object(i.b)("li",{parentName:"ul"},"Avoid falling for the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://meta.stackexchange.com/questions/66377/what-is-the-xy-problem/66378#66378"}),"XY problem")),Object(i.b)("li",{parentName:"ul"},"Search on GitHub and Spectrum to see if a similar question has been asked"),Object(i.b)("li",{parentName:"ul"},"If possible, provide sample code, a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io"}),"CodeSandbox"),", or a video"),Object(i.b)("li",{parentName:"ul"},"The more time you put into asking your question, the better we can help you")),Object(i.b)("h2",{id:"contributions"},"Contributions"),Object(i.b)("p",null,"See our Contributing Guideline, available at ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stethoscope-js/.github/"}),"https://github.com/stethoscope-js/.github/"),"."),Object(i.b)("h2",{id:"credits"},"Credits"),Object(i.b)("p",null,"These support guidelines are adapted from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/remarkjs/.github/blob/master/support.md"}),Object(i.b)("inlineCode",{parentName:"a"},"remarkjs/.github/support.md")),"."))}p.isMDXComponent=!0}}]);
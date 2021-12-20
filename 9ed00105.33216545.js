(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,y=p["".concat(i,".").concat(d)]||p[d]||f[d]||a;return n?o.a.createElement(y,c(c({ref:t},u),{},{components:n})):o.a.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(105)),i={title:"Configuration"},c={unversionedId:"configuration",id:"configuration",isDocsHomePage:!1,title:"Configuration",description:"The .stethoscoperc.yml file is used as the central configuration store. In that file, you can specify which services you want to connect to using Integrations.",source:"@site/docs/configuration.md",slug:"/configuration",permalink:"/docs/configuration",editUrl:"https://github.com/stethoscope-js/stethoscope.js.org/blob/master/docs/configuration.md",version:"current",sidebar:"someSidebar",previous:{title:"Repository",permalink:"/docs/"},next:{title:"Manual triggers",permalink:"/docs/manual-triggers"}},l=[{value:"Integrations",id:"integrations",children:[]},{value:"Frequency",id:"frequency",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},".stethoscoperc.yml")," file is used as the central configuration store. In that file, you can specify which services you want to connect to using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/integrations"}),"Integrations"),"."),Object(a.b)("h2",{id:"integrations"},"Integrations"),Object(a.b)("p",null,"Enter the name (slugified) of each services you intend to use. In the following example, we have enabled all tracking data points for four integrations, all fetching the data every day:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".stethoscoperc.yml"',title:'".stethoscoperc.yml"'}),'integrations:\n  rescuetime:\n    frequency: "daily"\n    all: true\n  last-fm:\n    frequency: "daily"\n    all: true\n')),Object(a.b)("h2",{id:"frequency"},"Frequency"),Object(a.b)("p",null,"Currently, all data is fetched every day. You can control that by setting the ",Object(a.b)("inlineCode",{parentName:"p"},"frequency")," of each integration."),Object(a.b)("p",null,"Only ",Object(a.b)("inlineCode",{parentName:"p"},"daily")," is supported at present."))}s.isMDXComponent=!0}}]);
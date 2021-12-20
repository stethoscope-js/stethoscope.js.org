(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,y=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return r?n.a.createElement(y,s(s({ref:t},u),{},{components:r})):n.a.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var o=r(2),n=r(6),i=(r(0),r(105)),a={title:"Security Guidelines"},s={unversionedId:"policies/security",id:"policies/security",isDocsHomePage:!1,title:"Security Guidelines",description:"How we manage security for this project",source:"@site/docs/policies/security.md",slug:"/policies/security",permalink:"/docs/policies/security",editUrl:"https://github.com/stethoscope-js/stethoscope.js.org/blob/master/docs/policies/security.md",version:"current",sidebar:"someSidebar",previous:{title:"Contributing Guidelines",permalink:"/docs/policies/contributing"},next:{title:"Support",permalink:"/docs/policies/support"}},c=[{value:"How we manage security for this project",id:"how-we-manage-security-for-this-project",children:[]},{value:"Responsibly disclosing security bugs",id:"responsibly-disclosing-security-bugs",children:[]},{value:"Contact",id:"contact",children:[]},{value:"Credits",id:"credits",children:[]}],u={rightToc:c};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"how-we-manage-security-for-this-project"},"How we manage security for this project"),Object(i.b)("p",null,"We take security seriously and want to ensure that we maintain a secure environment for everyone, and that we also provide secure solutions for the open-source community. To help us achieve these goals, please note the following before using this software:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Review the software license to understand our obligations in terms of warranties and suitability for purpose"),Object(i.b)("li",{parentName:"ul"},"For any questions or concerns about security, you can reach out directly to us at ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"mailto:opensource@anandchowdhary.com"}),"opensource@anandchowdhary.com")),Object(i.b)("li",{parentName:"ul"},"We request that you work with our security team and opt for responsible disclosure using the guidelines below"),Object(i.b)("li",{parentName:"ul"},"At this moment, there is no Bug Bounty Program for this open-source repository"),Object(i.b)("li",{parentName:"ul"},"We enforce SLAs on our security team and software engineers to remediate security bugs in a timely manner"),Object(i.b)("li",{parentName:"ul"},'All security related issues and pull requests you make should be tagged with "security" for easy identification'),Object(i.b)("li",{parentName:"ul"},"Please monitor this repository and update your environment in a timely manner as we release patches and updates")),Object(i.b)("h2",{id:"responsibly-disclosing-security-bugs"},"Responsibly disclosing security bugs"),Object(i.b)("p",null,"If you find a security bug in this repository, please work us following responsible disclosure principles and these guidelines:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Do not submit a normal issue or pull request in our public repository, instead report through our Bug Bounty or directly to ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"mailto:opensource@anandchowdhary.com"}),"opensource@anandchowdhary.com")," (If you would like to encrypt, please see the end of these guidelines)"),Object(i.b)("li",{parentName:"ul"},"We will review your submission and may follow up for additional details"),Object(i.b)("li",{parentName:"ul"},"If you have a patch, we will review it and approve it privately; once approved for release you can submit it as a pull request publicly in our repos (we give credit where credit is due)"),Object(i.b)("li",{parentName:"ul"},"We will keep you informed during our investigation, feel free to check in for a status update"),Object(i.b)("li",{parentName:"ul"},"We will release the fix and publicly disclose the issue as soon as possible, but want to ensure we due properly due diligence before releasing"),Object(i.b)("li",{parentName:"ul"},"Please do not publicly blog or post about the security issue until after we have updated the public repo so that other downstream users have an opportunity to patch")),Object(i.b)("h2",{id:"contact"},"Contact"),Object(i.b)("p",null,"If you have any questions, please reach out directly to us at ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"mailto:opensource@anandchowdhary.com"}),"opensource@anandchowdhary.com"),"."),Object(i.b)("h2",{id:"credits"},"Credits"),Object(i.b)("p",null,"This Security policy is adapted from ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jet/template/blob/master/SECURITY.md"}),Object(i.b)("inlineCode",{parentName:"a"},"jet/template/SECURITY.md")),"."))}l.isMDXComponent=!0}}]);
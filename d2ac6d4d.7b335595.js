(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,O=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return n?r.a.createElement(O,c(c({ref:t},b),{},{components:n})):r.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(105)),o={title:"Spotify"},c={unversionedId:"integrations/spotify",id:"integrations/spotify",isDocsHomePage:!1,title:"Spotify",description:"Intro",source:"@site/docs/integrations/spotify.md",slug:"/integrations/spotify",permalink:"/docs/integrations/spotify",editUrl:"https://github.com/stethoscope-js/stethoscope.js.org/blob/master/docs/integrations/spotify.md",version:"current",sidebar:"someSidebar",previous:{title:"Stethoscope Integrations",permalink:"/docs/integrations"},next:{title:"Last.fm",permalink:"/docs/integrations/last-fm"}},l=[{value:"Intro",id:"intro",children:[]},{value:"Data points",id:"data-points",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"intro"},"Intro"),Object(i.b)("p",null,"The Spotify API is used to track your music listening history and track library."),Object(i.b)("h2",{id:"data-points"},"Data points"),Object(i.b)("p",null,"The following data points are available for this integration:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Data point"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"history")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Listening history")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"library")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Library")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"top-tracks")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Top tracks")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"top-artists")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Top artists")))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".stethoscoperc.yml"',title:'".stethoscoperc.yml"'}),'integrations:\n  spotify:\n    frequency: "daily"\n    history: true\n    library: true\n    top-tracks: true\n    top-artists: true\n')),Object(i.b)("p",null,"If you want to enable all data points, you can simply use ",Object(i.b)("inlineCode",{parentName:"p"},"all")," instead:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".stethoscoperc.yml"',title:'".stethoscoperc.yml"'}),'integrations:\n  spotify:\n    frequency: "daily"\n    all: true\n')),Object(i.b)("h2",{id:"authentication"},"Authentication"),Object(i.b)("p",null,"You need to register an application on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.spotify.com"}),"Spotify for Developers")," and will receieve a client ID and client secret. Use these credentials to generate an access/refresh token pair, which is used to authenticate with the Spotify API."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.spotify.com/documentation/general/guides/scopes/"}),"scopes")," required when generating credentials are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"user-top-read")," (top artists and content)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"user-library-read"),' ("Your Music" library)')),Object(i.b)("p",null,'To generate tokens when you don\'t have a OAuth flow set up, add the default URL http://localhost:3000/callback under "Redirect URIs" in your Spotify app, and run the ',Object(i.b)("inlineCode",{parentName:"p"},"callbackUrl")," function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node -e 'require(\"./lib/api/spotify\").callbackUrl()'\n")),Object(i.b)("p",null,"Running the above will log the URL to visit in your web browser, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"https://accounts.spotify.com/authorize?client_id=557694afa2dc0589efcfe18e3e82bce6&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-top-read%20user-library-read&state=state\n")),Object(i.b)("p",null,"This URL will redirect you to a URL starting with http://localhost:3000/callback, which looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"http://localhost:3000/callback?code=NDQ_cib1isb_nvYaShKXapeq7Q4GZHxs3ntGizJ9_kN27CG900qYeooVbjwhm81VUi1qH9v5WZ2GDExPmgMwMKh7_qWCQEj4ANsI-pjVqAyGcEQ_al6A2wNz_Rj1WsqLG370cNrkS94G30R0ycqfagS7TeIkdwjXa2rofa3yanGFL0QghTPZ1FW1LI_1JSPTpKZf-4Rv3gPzEQsGd3UrAdrkQRJt&state=state\n")),Object(i.b)("p",null,"In this above URL, the query parameter after ",Object(i.b)("inlineCode",{parentName:"p"},"?code=")," and before ",Object(i.b)("inlineCode",{parentName:"p"},"&state=")," is your ",Object(i.b)("inlineCode",{parentName:"p"},"code"),". You can exchange this for the required tokens, like so:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'node -e \'require("./lib/api/spotify").authTokens("YOUR_CODE")\'\n')),Object(i.b)("p",null,"This will log your access token and refresh token to the console. Copy and paste these and set them as the environment variables described above."),Object(i.b)("h2",{id:"environment-variables"},"Environment variables"),Object(i.b)("p",null,"When the tokens are generated, you can set the following environment variables:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Environment variable"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"SPOTIFY_CLIENT_ID")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Client ID")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"SPOTIFY_CLIENT_SECRET")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Client secret")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"SPOTIFY_ACCESS_TOKEN")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Access token")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"SPOTIFY_REFRESH_TOKEN")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Refresh token")))),Object(i.b)("a",{href:"/docs/integrations/spotify"},Object(i.b)("img",{class:"logos",alt:"Spotify",src:"https://stethoscope.js.org/branding/integrations/spotify.png"})))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t);var A=a(0),n=a.n(A),r=a(157),i=a(156);t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(i.a,{title:"404: Not found"}),n.a.createElement("h1",null,"NOT FOUND"),n.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var A=a(0),n=a.n(A),r=a(4),i=a.n(r),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(155);var l=n.a.createContext({}),o=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,a){var A;e.exports=(A=a(161))&&A.default||A},156:function(e,t,a){"use strict";var A=a(163),n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(175),l=a.n(s);function o(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title,s=A.data.site,o=t||s.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=o},157:function(e,t,a){"use strict";var A=a(160),n=a(0),r=a.n(n),i=a(154),c=a.n(i),s=a(4),l=a.n(s),o=a(153),u=function(e){var t=e.siteTitle;return r.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var d=a(159),m=a.n(d),E=function(e){return e<10&&(e="0"+e),e},p=function(){var e=Object(n.useState)(new Date),t=e[0],a=e[1];Object(n.useEffect)(function(){var e=window.setTimeout(function(){a(new Date)},1e3);return function(){return window.clearTimeout(e)}},[t]);var A=t,i=A.getHours(),c=E(A.getMinutes()),s="AM";return i>12&&12!==(i=E(i-=12))&&(s="PM"),r.a.createElement("li",null,r.a.createElement("span",null,i+":"+c+" "+s))};p.propTypes={time:l.a.string},p.defaultProps={time:""};var f=p,g=a(169),h=function(){var e=Object(g.a)();return r.a.createElement("li",{className:c()("d-flex align-items-center",m.a.batteryContainer)},e&&e.level&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"mr-2",id:"battery-level-js"},window.parseInt(100*e.level)+"%"),r.a.createElement("div",{className:m.a.batteryOuter},r.a.createElement("div",{className:c()(m.a.batteryInner,e.charging?c()("icon-thunder",m.a.chargingIcon):""),style:{width:"calc("+100*e.level+"% - 2px)"}}))))};h.propTypes={time:l.a.string},h.defaultProps={time:""};var j=h,w=function(e){e.siteTitle;return r.a.createElement("header",{className:m.a.header},r.a.createElement("ul",{className:c()(m.a.list,m.a.leftList)},r.a.createElement("li",{className:m.a.logo},"HV"),r.a.createElement("li",{id:"full-screen-js"},"Full Screen"),r.a.createElement("li",{id:"theme-switcher-js"},"Dark Theme")),r.a.createElement("ul",{className:c()(m.a.list,m.a.rightList)},r.a.createElement(j,null),r.a.createElement(f,null)))};w.propTypes={siteTitle:l.a.string},w.defaultProps={siteTitle:""};var b=w,y=a(162),B=a(158),v=a.n(B),N=function(e){e.cb;return r.a.createElement(o.b,{query:"89112424",render:function(e){return r.a.createElement(v.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:y})},Q=(a(170),a(171),a(172),a(173),a(174),function(e){var t=e.children,a=Object(n.useState)(!1),i=a[0],c=a[1];return Object(n.useEffect)(function(){window.setTimeout(function(){c(!0)},100)}),r.a.createElement(o.b,{query:"2994927498",render:function(e){return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("div",{className:"light-theme"},r.a.createElement("div",{className:"bg-container"},r.a.createElement(N,null)),r.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",null,r.a.createElement("main",null,t))))},data:A})});Q.propTypes={children:l.a.node.isRequired};t.a=Q},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Harsha Venkatram"}}}}},161:function(e,t,a){"use strict";a.r(t);a(34);var A=a(0),n=a.n(A),r=a(4),i=a.n(r),c=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},162:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABuSQhE+Z4j//EABsQAAEEAwAAAAAAAAAAAAAAAAEAAgMRBBAh/9oACAEBAAEFAjIKOR0ysVnf/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/Aax//8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/Acqv/8QAGBAAAwEBAAAAAAAAAAAAAAAAECExAAL/2gAIAQEABj8CmfKFP//EABsQAAICAwEAAAAAAAAAAAAAAAEhABEQMVGB/9oACAEBAAE/IW1r5Ar4DCigYrbP/9oADAMBAAIAAwAAABBTH//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxCGiD//xAAXEQADAQAAAAAAAAAAAAAAAAAAAREx/9oACAECAQE/EIPSj//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExUXFBkcH/2gAIAQEAAT8QR4Nbhjt1LoLyufUctPqvstqocLFY7n//2Q==",aspectRatio:1.7777777777777777,src:"/static/9a67d4e50890426f70f59131717547b4/36e49/bg.jpg",srcSet:"/static/9a67d4e50890426f70f59131717547b4/a76d9/bg.jpg 480w,\n/static/9a67d4e50890426f70f59131717547b4/6d13b/bg.jpg 960w,\n/static/9a67d4e50890426f70f59131717547b4/36e49/bg.jpg 1920w,\n/static/9a67d4e50890426f70f59131717547b4/c8ae9/bg.jpg 2880w,\n/static/9a67d4e50890426f70f59131717547b4/2d8c1/bg.jpg 3840w,\n/static/9a67d4e50890426f70f59131717547b4/d97ac/bg.jpg 5120w",sizes:"(max-width: 1920px) 100vw, 1920px"}}}}}},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Harsha Venkatram",description:"This is the personal portfolio of Harsha Venkatram - UX Geek | Front End Guy | Photographer | Artist.",author:"Harsha Venkatram"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-5fc1201bba3d4247cec3.js.map
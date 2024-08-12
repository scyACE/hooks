(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{F4Gr:function(e,t,a){"use strict";a.r(t);var n=a("uLvW"),l=a.n(n),r=a("HVV+"),c=a("paVJ"),o=a("1Wyz"),u=a("bZex"),m=l.a.memo((e=>{var t=e.demos,a=t["usetoggle-demo1"].component,n=t["usetoggle-demo2"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"usetoggle"},l.a.createElement(r["AnchorLink"],{to:"#usetoggle","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"useToggle"),l.a.createElement("p",null,"\u7528\u4e8e\u5728\u4e24\u4e2a\u72b6\u6001\u503c\u95f4\u5207\u6362\u7684 Hook\u3002"),l.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.a.createElement(r["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),l.a.createElement("h3",{id:"\u57fa\u7840\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u57fa\u7840\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u7528\u6cd5")),l.a.createElement(c["default"],t["usetoggle-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u9ad8\u7ea7\u7528\u6cd5"},l.a.createElement(r["AnchorLink"],{to:"#\u9ad8\u7ea7\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u9ad8\u7ea7\u7528\u6cd5")),l.a.createElement(c["default"],t["usetoggle-demo2"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(o["a"],{code:"const [state, { toggle, set, setLeft, setRight }] = useToggle(defaultValue?: boolean);\n\nconst [state, { toggle, set, setLeft, setRight }] = useToggle<T>(defaultValue: T);\n\nconst [state, { toggle, set, setLeft, setRight }] = useToggle<T, U>(defaultValue: T, reverseValue: U);",lang:"typescript"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"defaultValue"),l.a.createElement("td",null,"\u53ef\u9009\u9879\uff0c\u4f20\u5165\u9ed8\u8ba4\u7684\u72b6\u6001\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"T")),l.a.createElement("td",null,l.a.createElement("code",null,"false"))),l.a.createElement("tr",null,l.a.createElement("td",null,"reverseValue"),l.a.createElement("td",null,"\u53ef\u9009\u9879\uff0c\u4f20\u5165\u53d6\u53cd\u7684\u72b6\u6001\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"U")),l.a.createElement("td",null,"-")))),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"state"),l.a.createElement("td",null,"\u72b6\u6001\u503c"),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"actions"),l.a.createElement("td",null,"\u64cd\u4f5c\u96c6\u5408"),l.a.createElement("td",null,l.a.createElement("code",null,"Actions"))))),l.a.createElement("h3",{id:"actions"},l.a.createElement(r["AnchorLink"],{to:"#actions","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Actions"),l.a.createElement(u["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"toggle"),l.a.createElement("td",null,"\u5207\u6362 state"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"set"),l.a.createElement("td",null,"\u4fee\u6539 state"),l.a.createElement("td",null,l.a.createElement("code",null,"(state: T | U) => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"setLeft"),l.a.createElement("td",null,"\u8bbe\u7f6e\u4e3a defaultValue"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))),l.a.createElement("tr",null,l.a.createElement("td",null,"setRight"),l.a.createElement("td",null,"\u5982\u679c\u4f20\u5165\u4e86 reverseValue, \u5219\u8bbe\u7f6e\u4e3a reverseValue\u3002 \u5426\u5219\u8bbe\u7f6e\u4e3a defaultValue \u7684\u53cd\u503c"),l.a.createElement("td",null,l.a.createElement("code",null,"() => void"))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(m,{demos:a})}},MZF8:function(e,t,a){"use strict";var n=a("ogwx");a.d(t,"a",(function(){return n["b"]}));a("VCU9")},bZex:function(e,t,a){"use strict";var n=a("uLvW"),l=a.n(n),r=a("bIC1"),c=a.n(r);a("xqJZ");function o(e,t){return s(e)||d(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(u){o=!0,l=u}finally{try{c||null==a["return"]||a["return"]()}finally{if(o)throw l}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),u=o(r,2),m=u[0],i=u[1],d=Object(n["useState"])(!1),s=o(d,2),E=s[0],h=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){i(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":m||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},xqJZ:function(e,t,a){}}]);
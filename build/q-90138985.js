import{m,u as E,_ as g,X as l,R as k,w as j,n as H,A as y}from"./q-2fd2ca49.js";const nt=y("qc-c"),st=y("qc-ic"),V=y("qc-h"),B=y("qc-l"),M=y("qc-n"),Q=m(E(()=>g(()=>import("./q-fedb1d4a.js"),["build/q-fedb1d4a.js","build/q-2fd2ca49.js","build/q-91da5389.css"]),"s_nd8yk3KO22c")),w=new WeakMap,ot=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const c=o[0].exec(n);if(c){const i=o[1],r=z(o[2],c),a=o[4],f=new Array(i.length),h=[],_=Y(e,n);let R;return i.forEach((p,U)=>{L(p,h,W=>f[U]=W,s)}),L(_,h,p=>R=p==null?void 0:p.default,s),h.length>0&&await Promise.all(h),[r,f,R,a]}}return null},L=(t,e,s,n)=>{if(typeof t=="function"){const o=w.get(t);if(o)s(o);else{const c=t();typeof c.then=="function"?e.push(c.then(i=>{n!==!1&&w.set(t,i),s(i)})):c&&s(c)}}},Y=(t,e)=>{if(t){const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},z=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++)s[t[n]]=e?e[n+1]:"";return s},ct=(t,e,s)=>{const n=N(),o={data:t?t.body:null,head:n,...e};for(let c=s.length-1;c>=0;c--){const i=s[c]&&s[c].head;i&&(typeof i=="function"?D(n,i(o)):typeof i=="object"&&D(n,i))}return o.head},D=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),I(t.meta,e.meta),I(t.links,e.links),I(t.styles,e.styles)},I=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},N=()=>({title:"",meta:[],links:[],styles:[]}),at=()=>k(V),it=()=>k(B),rt=()=>k(M),lt=()=>j(H("qwikcity")),C=t=>t.pathname+t.search+t.hash,u=(t,e)=>new URL(t,e.href),x=(t,e)=>t.origin===e.origin,S=(t,e)=>t.pathname+t.search===e.pathname+e.search,Z=(t,e)=>t.pathname===e.pathname,T=(t,e)=>x(t,e)&&!S(t,e),F=t=>t+(t.endsWith("/")?"":"/")+"q-data.json",ft=(t,e)=>{const s=t.href;if(typeof s=="string"&&s.trim()!==""&&typeof t.target!="string")try{const n=u(s,e),o=u("",e);if(x(n,o))return C(n)}catch(n){console.error(n)}return null},ht=(t,e,s)=>{if(t.prefetch&&e){const n=u(e,s);if(!Z(n,u("",s)))return n+""}return null},dt=(t,e)=>{const s=t.location,n=u(e.path,s);T(s,n)&&(A(t,s,n),t.history.pushState("","",C(n))),t[O]||(t[O]=1,t.addEventListener("popstate",()=>{const o=t.location,c=u(e.path,o);T(o,c)&&(A(t,c,o),e.path=C(o))}))},A=async(t,e,s)=>{const n=t.document,o=s.hash;if(S(e,s))e.hash!==o&&(await P(),o?b(n,o):t.scrollTo(0,0));else if(o)for(let c=0;c<24&&(await P(),!b(n,o));c++);else await P(),t.scrollTo(0,0)},P=()=>new Promise(t=>setTimeout(t,12)),b=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},q=t=>dispatchEvent(new CustomEvent("qprefetch",{detail:t})),O=Symbol(),J=async t=>{const{cacheModules:e}=await g(()=>import("./q-a9fa564d.js"),["build/q-a9fa564d.js","build/q-2fd2ca49.js","build/q-91da5389.css"]),s=new URL(t).pathname,n=F(s),o=Date.now(),c=e?6e5:15e3,i=d.findIndex(a=>a.u===n);let r=d[i];if(q({links:[s]}),!r||r.t+c<o){r={u:n,t:o,c:new Promise(a=>{fetch(n).then(f=>{const h=f.headers.get("content-type")||"";f.ok&&h.includes("json")?f.json().then(_=>{q({bundles:_.prefetch,links:[s]}),a(_)},()=>a(null)):a(null)},()=>a(null))})};for(let a=d.length-1;a>=0;a--)d[a].t+c<o&&d.splice(a,1);d.push(r)}return r.c.catch(a=>console.error(a)),r.c},d=[],K=m(E(()=>g(()=>import("./q-9742c000.js"),["build/q-9742c000.js","build/q-2fd2ca49.js","build/q-91da5389.css"]),"s_z1nvHyEppoI"));E(()=>g(()=>import("./q-457d2862.js"),["build/q-457d2862.js","build/q-2fd2ca49.js","build/q-91da5389.css"]),"s_mYsiJcA4IBc");const ut=(t,e)=>{var n;const s=(n=t==null?void 0:t.dataset)==null?void 0:n.prefetch;s&&(v||(v=window.innerWidth),(!e||e&&v<520)&&J(s))};let v=0;const X='((s,a,r,i)=>{r=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{i=()=>{a=e,r({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&i()}):e.active&&i()}).catch(e=>console.error(e))})([])',G=()=>l("script",{dangerouslySetInnerHTML:X}),$=m(E(()=>g(()=>import("./q-6cc9695b.js"),["build/q-6cc9695b.js","build/q-2fd2ca49.js","build/q-91da5389.css"]),"s_5RTFMQfWLCA")),tt=()=>l(K,{children:[l("head",{children:l($,{})}),l("body",{lang:"en",children:[l(G,{}),l(Q,{})]})]}),pt=Object.freeze(Object.defineProperty({__proto__:null,s_3sccYCDd1Z0:tt},Symbol.toStringTag,{value:"Module"}));export{st as C,V as D,B as R,nt as a,M as b,N as c,J as d,dt as e,rt as f,it as g,ft as h,ht as i,at as j,pt as k,ot as l,ut as p,ct as r,C as t,lt as u};

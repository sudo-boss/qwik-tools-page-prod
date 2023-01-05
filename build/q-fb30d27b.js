const lr=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),cr=function(e){return"/"+e},Ge={},gt=function(t,r,n){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=cr(s),s in Ge)return;Ge[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":lr,i||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),i)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},_=[],Ee={},ur=e=>{const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},A=e=>e&&typeof e=="object",x=e=>Array.isArray(e),z=e=>typeof e=="string",L=e=>typeof e=="function",G="q:slot",$=e=>e instanceof Promise,Ae=(e,t,r)=>{try{const n=e();return $(n)?n.then(t,r):t(n)}catch(n){return r(n)}},b=(e,t)=>$(e)?e.then(t):t(e),B=e=>e.some($)?Promise.all(e):e,ar=e=>e!=null,fr=e=>new Promise(t=>{setTimeout(t,e)});let F;const Se=()=>{if(!F){const e=typeof document<"u"&&document&&document.__q_context__;return e?x(e)?document.__q_context__=wt(e):e:void 0}return F},yt=()=>{const e=Se();if(!e)throw j(Un);return e},$e=()=>{const e=yt();if(e.t!=="qRender")throw j(In);return e.o,e.l,e.u,e.$,e},We=(e,t,...r)=>{const n=F;let s;try{F=e,s=t.apply(null,r)}finally{F=n}return s},hr=(e,t)=>{const r=e.l;if(r.length===0){const n=t();$(n)&&r.push(n)}else r.push(Promise.all(r).then(t))},wt=e=>{const t=e[0];return R(void 0,t,e[1],e[2])},R=(e,t,r,n)=>({p:0,o:e,v:t,t:r,m:n,g:void 0,q:void 0,u:void 0,$:void 0,l:void 0}),bt=e=>e.closest("[q\\:container]"),qt=e=>e&&typeof e.nodeType=="number",dr=e=>e&&e.nodeType===9,H=e=>e.nodeType===1,Z=e=>qt(e)&&(e.nodeType===1||e.nodeType===111),N=e=>e.nodeType===111,pr=e=>A(e)&&e[Symbol.toStringTag]==="Module";let mr=(()=>{const e=new Map;return{isServer:!1,importSymbol(t,r,n){const s=((c,u,f)=>{var m;const a=c.baseURI,h=new URL((m=u.getAttribute("q:base"))!=null?m:a,a);return new URL(f,h)})(t.ownerDocument,t,r).toString(),i=new URL(s);i.hash="",i.search="";const o=i.href,l=e.get(o);return l?l[n]:gt(()=>import(o),[]).then(c=>{return u=c,c=Object.values(u).find(pr)||u,e.set(o,c),c[n];var u})},raf:t=>new Promise(r=>{requestAnimationFrame(()=>{r(t())})}),nextTick:t=>new Promise(r=>{setTimeout(()=>{r(t())})}),chunkForSymbol(){}}})();const pe=()=>mr,O=(e,t,r)=>e.setAttribute(t,r),T=(e,t)=>e.getAttribute(t),vr=/^(on|window:|document:)/,Et=e=>e.endsWith("$")&&vr.test(e),me=(e,t,r)=>{let n=e[t];n||(e[t]=n=[]);for(const s of r){const i=s.S;let o=!1;for(let l=0;l<n.length;l++)if(n[l].S===i){n.splice(l,1,s),o=!0;break}o||n.push(s)}return!1},St=(e,t,r)=>{t.endsWith("$");const n=x(r)?r.map(Ze):[Ze(r)];return t=tr(t.slice(0,-1)),me(e,t,n),t},Ze=e=>Je(e)?e:Zn(e),gr=(e,t)=>{const r=e.v.attributes,n={};for(let s=0;s<r.length;s++){const{name:i,value:o}=r.item(s);if(i.startsWith("on:")||i.startsWith("on-window:")||i.startsWith("on-document:")){let l=n[i];l||(n[i]=l=[]);const c=o.split(`
`);for(const u of c){const f=be(u,t);f.j&&rr(f,e),l.push(f)}}}return n},M=()=>{const e=$e(),t=e.p,r=e.o,n=S(r),s=n.p?n.p:n.p=[];return e.p++,{get:s[t],set:i=>s[t]=i,i:t,ctx:e}},Ve=(e,t)=>yr(`on-${e}`,t),yr=(e,t)=>{const r=$e(),n=S(r.o);me(n.li,tr(e),[t])},Le=e=>document,kt=(e,t,r)=>{const n=r==null?null:String(r);return new xt(e,t,n)};class xt{constructor(t,r,n=null){this.type=t,this.props=r,this.key=n}}const wr=e=>e instanceof xt,ts=e=>e.children,jt=Symbol("skip render"),Re=e=>e.children,Ne=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),Me=(e,t,r,n)=>{e?e.O.push({M:et,P:[t,r,n]}):et(t,r,n)},et=(e,t,r)=>{if(r==null||r===!1)e.removeAttribute(t);else{const n=r===!0?"":String(r);O(e,t,n)}},P=(e,t,r,n)=>{e?e.O.push({M:tt,P:[t,r,n]}):tt(t,r,n)},tt=(e,t,r)=>{try{e[t]=r}catch(n){te(re(Yn),{node:e,key:t,value:r},n)}},Ye=(e,t,r)=>r?e.createElementNS(Lt,t):e.createElement(t),W=(e,t,r,n)=>(e.O.push({M:ve,P:[t,r,n||null]}),r),rt=(e,t,r)=>(e.O.push({M:ce,P:[t,r]}),r),br=(e,t)=>{e.C.A.add(t.styleId),e.R.push({M:qr,P:[e.C.L,t]})},nt=(e,t,r)=>{const n=e.classList;n.remove(...t),n.add(...r)},qr=(e,t)=>{const r=Le(),n=r.documentElement===e,s=r.head,i=r.createElement("style");O(i,"q:style",t.styleId),i.textContent=t.content,n&&s?ce(s,i):ve(e,i,e.firstChild)},Ct=(e,t)=>{e.O.push({M:Er,P:[t,e]})},Er=(e,t)=>{const r=e.parentElement;if(r){if(e.nodeType===1||e.nodeType===111){const n=t.C.T;He(e,t,n,!0)}Qr(r,e)}},_t=(e,t)=>{const r=Ye(e,"q:template",!1);return O(r,G,t),O(r,"hidden",""),O(r,"aria-hidden","true"),r},Sr=e=>{for(const t of e.O)t.M.apply(void 0,t.P);kr(e)},ke=e=>T(e,"q:key"),st=(e,t)=>{t!==null&&O(e,"q:key",t)},kr=e=>{const t=e.C.T;e.I.forEach(r=>{const n=ke(r),s=K(r,"root");if(s.length>0){const i=r.getAttribute("q:sref"),o=e.N.find(l=>l.F===i);if(o){const l=_t(e.H,n),c=o.v;for(const u of s)ce(l,u);ve(c,l,c.firstChild)}else He(r,e,t,!1)}}),e.D.forEach(([r,n])=>{const s=ke(r),i=Array.from(n.childNodes).find(o=>Nt(o)&&o.getAttribute(G)===s);i&&(K(i,"root").forEach(o=>{ce(r,o)}),i.remove())})};class Ot{constructor(t,r){this.open=t,this.close=r,this._qc_=null,this.nodeType=111,this.localName=":virtual",this.nodeName=":virtual";const n=this.ownerDocument=t.ownerDocument;this.template=Ye(n,"template",!1),this.attributes=(s=>{if(!s)return new Map;const i=s.split(" ");return new Map(i.map(o=>{const l=o.indexOf("=");return l>=0?[o.slice(0,l),(c=o.slice(l+1),c.replace(/\+/g," "))]:[o,""];var c}))})(t.data.slice(3)),t.data.startsWith("qv "),t.__virtual=this}insertBefore(t,r){const n=this.parentElement;if(n){const s=r||this.close;n.insertBefore(t,s)}else this.template.insertBefore(t,r);return t}remove(){const t=this.parentElement;if(t){const r=Array.from(this.childNodes);this.template.childElementCount,t.removeChild(this.open),this.template.append(...r),t.removeChild(this.close)}}appendChild(t){return this.insertBefore(t,null)}insertBeforeTo(t,r){const n=Array.from(this.childNodes);t.insertBefore(this.open,r);for(const s of n)t.insertBefore(s,r);t.insertBefore(this.close,r),this.template.childElementCount}appendTo(t){this.insertBeforeTo(t,null)}removeChild(t){this.parentElement?this.parentElement.removeChild(t):this.template.removeChild(t)}getAttribute(t){var r;return(r=this.attributes.get(t))!=null?r:null}hasAttribute(t){return this.attributes.has(t)}setAttribute(t,r){this.attributes.set(t,r)}removeAttribute(t){this.attributes.delete(t)}matches(t){return!1}compareDocumentPosition(t){return this.open.compareDocumentPosition(t)}closest(t){const r=this.parentElement;return r?r.closest(t):null}querySelectorAll(t){const r=[];return K(this,"elements").forEach(n=>{Z(n)&&(n.matches(t)&&r.push(n),r.concat(Array.from(n.querySelectorAll(t))))}),r}querySelector(t){for(const r of this.childNodes)if(H(r)){if(r.matches(t))return r;const n=r.querySelector(t);if(n!==null)return n}return null}get firstChild(){if(this.parentElement){const t=this.open.nextSibling;return t===this.close?null:t}return this.template.firstChild}get nextSibling(){return this.close.nextSibling}get previousSibling(){return this.open.previousSibling}get childNodes(){if(!this.parentElement)return this.template.childNodes;const t=[];let r=this.open;for(;(r=r.nextSibling)&&r!==this.close;)t.push(r);return t}get isConnected(){return this.open.isConnected}get parentElement(){return this.open.parentElement}}const De=e=>{if(e==null)return null;if(Ue(e)){const t=oe(e);if(t)return t}return e},oe=e=>{const t=e.__virtual;if(t)return t;if(e.data.startsWith("qv ")){const r=xr(e);return new Ot(e,r)}return null},xr=e=>{let t=e.nextSibling,r=1;for(;t;){if(Ue(t)){if(t.data.startsWith("qv "))r++;else if(t.data==="/qv"&&(r--,r===0))return t}t=t.nextSibling}throw new Error("close not found")},Ue=e=>e.nodeType===8,ie=e=>e==null?null:N(e)?e.open:e,jr=e=>Object.freeze({id:Ne(e)}),rs=(e,t)=>{const{get:r,set:n,ctx:s}=M();if(r!==void 0)return;const i=s.o,o=S(i);let l=o.W;l||(o.W=l=new Map),l.set(e.id,t),n(!0)},ns=(e,t)=>{const{get:r,set:n,ctx:s}=M();if(r!==void 0)return r;const i=Tt(e,s.o,s.u);if(i!==void 0)return n(i);if(t!==void 0)return n(t);throw j(Dn,e.id)},Tt=(e,t,r)=>{const n=e.id;if(r){const s=r.U;for(let i=s.length-1;i>=0;i--){const o=s[i];if(t=o.v,o.W){const l=o.W.get(n);if(l)return l}}}if(t.closest){const s=Cr(t,n);if(s!==void 0)return s}},Cr=(e,t)=>{var n;let r=e;for(;r;){let s,i=r;for(;i&&(s=_r(i));){const o=(n=ee(s))==null?void 0:n.W;if(o&&o.has(t))return o.get(t);i=s}r=r.parentElement}},_r=e=>{let t=e,r=1;for(;t=t.previousSibling;)if(Ue(t)){if(t.data==="/qv")r++;else if(t.data.startsWith("qv ")&&(r--,r===0))return oe(t)}return null},Or=jr("qk-error"),Pt=(e,t,r)=>{{const n=Tt(Or,t,r);if(n===void 0)throw e;n.error=e}},xe=(e,t)=>{t.K=!1,t.J=!0,t.B=[];const r=t.v,n=t.X,s=t.q,i=Fe(e,t),o=R(r,void 0,"qRender"),l=o.l=[];i.G=t,o.$=r,o.u=e,n.Z(e.Y.C.L);const c=n.getFn(o);return Ae(()=>c(s),u=>(t.tt=!1,l.length>0?Promise.all(l).then(()=>t.K?xe(e,t):{node:u,rctx:i}):t.K?xe(e,t):{node:u,rctx:i}),u=>(Pt(u,r,e),{node:jt,rctx:i}))},Tr=(e,t)=>({Y:{H:e,C:t,nt:new Set,O:[],R:[],N:[],D:[],I:[]},G:void 0,U:[]}),Fe=(e,t)=>({Y:e.Y,G:e.G,U:e.U.concat(t)}),At=e=>{if(z(e))return e;if(A(e)){if(x(e))return e.join(" ");{let t="",r=!1;for(const n of Object.keys(e))e[n]&&(r&&(t+=" "),t+=n,r=!0);return t}}return""},Pr=/\s/,je=e=>e?e.split(Pr):_,Ar=e=>{if(e==null)return"";if(typeof e=="object"){if(x(e))throw j(Mn,e,"style");{const t=[];for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const n=e[r];n&&t.push(Ne(r)+":"+n)}return t.join(";")}}return String(e)},$r=e=>Oe(e.Y.C.et++),$t=(e,t)=>{const r=$r(e);t.F=r},Wr=[G,"q:renderFn","children"],Ie=(e,t,r)=>{const n=!t.J,s=t.v,i=e.Y.C;return i.rt.delete(s),i.T.ot(s),b(xe(e,t),o=>{const l=e.Y,c=o.rctx,u=R(s);if(l.nt.add(s),u.$=s,u.u=c,n&&t.st)for(const a of t.st)br(l,a);const f=U(o.node,u);return b(f,a=>{const h=Lr(s,a),m=Wt(t);return b(Rr(c,m,h,r),()=>{t.it=h})})})},Wt=e=>(e.it||(e.it=X(e.v)),e.it);class C{constructor(t,r,n,s){this.ct=t,this.q=r,this.lt=n,this.ut=s,this.ft=null,this.dt=""}}const Lr=(e,t)=>{const r=t===void 0?_:x(t)?t:[t],n=new C(":virtual",{},r,null);return n.ft=e,n},U=(e,t)=>{if(e!=null&&typeof e!="boolean"){if(z(e)||typeof e=="number"){const r=new C("#text",Ee,_,null);return r.dt=String(e),r}if(wr(e))return((r,n)=>{const s=r.key!=null?String(r.key):null,i=r.type,o=r.props,l=o.children;let c="";if(z(i))c=i;else{if(i!==Re){if(L(i)){const f=We(n,i,o,r.key);return U(f,n)}throw j(zn,i)}c=":virtual"}let u=_;return l!=null?b(U(l,n),f=>(f!==void 0&&(u=x(f)?f:[f]),new C(c,o,u,s))):new C(c,o,u,s)})(e,t);if(x(e)){const r=B(e.flatMap(n=>U(n,t)));return b(r,n=>n.flat(100).filter(ar))}return $(e)?e.then(r=>U(r,t)):e===jt?new C(":skipRender",Ee,_,null):void Pe("A unsupported value was passed to the JSX, skipping render. Value:",e)}},Lt="http://www.w3.org/2000/svg",le=[],Rr=(e,t,r,n)=>ze(e,t,r,"root",n),ze=(e,t,r,n,s)=>{t.ft;const i=r.lt;if(i.length===1&&i[0].ct===":skipRender")return;const o=t.ft;t.lt===le&&o.nodeName==="HEAD"&&(n="head",s|=2);const l=Nr(t,n);return l.length>0&&i.length>0?Mr(e,o,l,i,s):i.length>0?Mt(e,o,null,i,0,i.length-1,s):l.length>0?Be(e.Y,l,0,l.length-1):void 0},Nr=(e,t)=>{const r=e.lt,n=e.ft;return r===le?e.lt=Rt(n,t):r},Mr=(e,t,r,n,s)=>{let i,o,l,c=0,u=0,f=r.length-1,a=r[0],h=r[f],m=n.length-1,d=n[0],v=n[m];const y=[],g=e.Y;for(;c<=f&&u<=m;)if(a==null)a=r[++c];else if(h==null)h=r[--f];else if(d==null)d=n[++u];else if(v==null)v=n[--m];else if(ne(a,d))y.push(D(e,a,d,s)),a=r[++c],d=n[++u];else if(ne(h,v))y.push(D(e,h,v,s)),h=r[--f],v=n[--m];else if(ne(a,v))a.ft,h.ft,y.push(D(e,a,v,s)),W(g,t,a.ft,h.ft.nextSibling),a=r[++c],v=n[--m];else if(ne(h,d))a.ft,h.ft,y.push(D(e,h,d,s)),W(g,t,h.ft,a.ft),h=r[--f],d=n[++u];else{if(i===void 0&&(i=Jr(r,c,f)),o=i[d.ut],o===void 0){const w=Q(e,d,s);y.push(b(w,q=>{W(g,t,q,a.ft)}))}else if(l=r[o],Gr(l,d.ct))y.push(D(e,l,d,s)),r[o]=void 0,l.ft,W(g,t,l.ft,a.ft);else{const w=Q(e,d,s);y.push(b(w,q=>{W(g,t,q,a.ft)}))}d=n[++u]}if(u<=m){const w=n[m+1]==null?null:n[m+1].ft;y.push(Mt(e,t,w,n,u,m,s))}let p=B(y);return c<=f&&(p=b(p,()=>{Be(g,r,c,f)})),p},qe=(e,t)=>{const r=N(e)?e.close:null,n=[];let s=e.firstChild;for(;(s=De(s))&&(t(s)&&n.push(s),s=s.nextSibling,s!==r););return n},K=(e,t)=>{switch(t){case"root":return qe(e,Ir);case"head":return qe(e,Fr);case"elements":return qe(e,Z)}},Rt=(e,t)=>K(e,t).map(Yr),Yr=e=>{var t,r;return H(e)&&(r=(t=ee(e))==null?void 0:t.it)!=null?r:X(e)},X=e=>{if(Z(e)){const t=N(e)?Ee:Dr(e),r=new C(e.localName,t,le,ke(e));return r.ft=e,r}if(e.nodeType===3){const t=new C(e.nodeName,{},le,null);return t.dt=e.data,t.ft=e,t}throw new Error("invalid node")},Dr=e=>{const t={},r=e.attributes,n=r.length;for(let s=0;s<n;s++){const i=r.item(s),o=i.name;o.includes(":")||(t[o]=o==="class"?Ur(i.value):i.value)}return t},Ur=e=>je(e).filter(t=>!t.startsWith("\u2B50\uFE0F")).join(" "),Fr=e=>{const t=e.nodeType;return t===1?e.hasAttribute("q:head"):t===111},Nt=e=>e.nodeName==="Q:TEMPLATE",Ir=e=>{const t=e.nodeType;if(t===3||t===111)return!0;if(t!==1)return!1;const r=e.nodeName;return r!=="Q:TEMPLATE"&&(r!=="HEAD"||e.hasAttribute("q:head"))},D=(e,t,r,n)=>{t.ct,r.ct;const s=t.ft,i=r.ct,o=e.Y,l=i===":virtual";if(r.ft=s,i==="#text")return void(t.dt!==r.dt&&P(o,s,"data",r.dt));let c=!!(1&n);c||i!=="svg"||(n|=1,c=!0);const u=r.q,f=l&&"q:renderFn"in u,a=S(s);if(!f){const m=Br(a,o,t.q,u,c),d=e.G;if(d&&!d.tt){d.tt=!0;for(const v of Object.keys(d.li))me(m,v,d.li[v]),It(o,s,v)}if(c&&r.ct==="foreignObject"&&(n&=-2,c=!1),l&&"q:s"in u){const v=e.G;return v.B,void v.B.push(r)}return u[I]!==void 0||l&&"qonce"in u?void 0:ze(e,t,r,"root",n)}let h=zt(a,e,u);return h||a.X||a.v.hasAttribute("q:id")||($t(e,a),a.X=u["q:renderFn"],a.X,h=!0),h?b(Ie(e,a,n),()=>ot(e,a,r,n)):ot(e,a,r,n)},ot=(e,t,r,n)=>{const s=r.lt,i=e.Y,o=(u=>{var a;const f={};for(const h of u){const m=Dt(h);((a=f[m])!=null?a:f[m]=new C(":virtual",{"q:s":""},[],m)).lt.push(h)}return f})(s),l=Fe(e,t),c=Ut(t);for(const u of Object.keys(c.slots))if(!o[u]){const f=c.slots[u],a=Rt(f,"root");if(a.length>0){const h=ee(f);h&&h.it&&(h.it.lt=[]),Be(i,a,0,a.length-1)}}for(const u of Object.keys(c.templates)){const f=c.templates[u];f&&(o[u]&&!c.slots[u]||(Ct(i,f),c.templates[u]=void 0))}return B(Object.keys(o).map(u=>{const f=o[u],a=Yt(i,c,t.v,u),h=S(a),m=Wt(h);return h.it=f,f.ft=a,ze(l,m,f,"root",n)}))},Mt=(e,t,r,n,s,i,o)=>{const l=[];let c=!1;for(;s<=i;++s){const u=n[s],f=Q(e,u,o);l.push(f),$(f)&&(c=!0)}if(c)return Promise.all(l).then(u=>it(e.Y,t,u,r));it(e.Y,t,l,r)},it=(e,t,r,n)=>{for(const s of r)W(e,t,s,n)},Be=(e,t,r,n)=>{for(;r<=n;++r){const s=t[r];s&&(s.ft,Ct(e,s.ft))}},Yt=(e,t,r,n)=>{const s=t.slots[n];if(s)return s;const i=t.templates[n];if(i)return i;const o=_t(e.H,n);return((l,c,u)=>{l.O.push({M:ve,P:[c,u,c.firstChild]})})(e,r,o),t.templates[n]=o,o},Dt=e=>{var t;return(t=e.q[G])!=null?t:""},Q=(e,t,r)=>{const n=t.ct,s=e.Y.H;if(n==="#text")return t.ft=((g,p)=>g.createTextNode(p))(s,t.dt);let i,o=!!(1&r);o||n!=="svg"||(r|=1,o=!0);const l=n===":virtual",c=t.q,u="q:renderFn"in c,f=e.Y;l?i=(g=>{const p=g.createComment("qv "),w=g.createComment("/qv");return new Ot(p,w)})(s):n==="head"?(i=s.head,r|=2):(i=Ye(s,n,o),r&=-3),t.ft=i,o&&n==="foreignObject"&&(o=!1,r&=-2);const a=S(i);if(u){st(i,t.ut);const g=c["q:renderFn"];return zt(a,e,c),$t(e,a),a.X=g,b(Ie(e,a,r),()=>{let p=t.lt;if(p.length===0)return i;p.length===1&&p[0].ct===":skipRender"&&(p=p[0].lt);const w=Fe(e,a),q=Ut(a),k=p.map(E=>Q(w,E,r));return b(B(k),()=>{for(const E of p)E.ft,rt(f,Yt(f,q,i,Dt(E)),E.ft);return i})})}const h=e.G,m=l&&"q:s"in c,d=Kr(f,a,c,o);if(h&&!l){const g=h.$t;if(g&&g.forEach(p=>{i.classList.add(p)}),!h.tt){h.tt=!0;for(const p of Object.keys(h.li))me(d,p,h.li[p])}}if(m&&(h.B,st(i,t.ut),O(i,"q:sref",h.F),h.B.push(t),f.D.push([i,h.v])),c[I]!==void 0)return i;let v=t.lt;if(v.length===0)return i;v.length===1&&v[0].ct===":skipRender"&&(v=v[0].lt);const y=v.map(g=>Q(e,g,r));return b(B(y),()=>{for(const g of v)g.ft,rt(e.Y,i,g.ft);return i})},Ut=e=>{var i,o;const t=(l=>l.B||(l.v.parentElement,l.B=zr(l)))(e),r={},n={},s=Array.from(e.v.childNodes).filter(Nt);for(const l of t)l.ft,r[(i=l.ut)!=null?i:""]=l.ft;for(const l of s)n[(o=T(l,G))!=null?o:""]=l;return{slots:r,templates:n}},zr=e=>((t,r,n)=>{const s=((l,c,u)=>l.ownerDocument.createTreeWalker(l,128,{acceptNode(f){const a=oe(f);return a&&T(a,"q:sref")===u?1:2}}))(t,0,n),i=[];let o=null;for(;o=s.nextNode();)i.push(oe(o));return i})(e.v.parentElement,0,e.F).map(X),lt=(e,t,r,n)=>(r in t&&t[r]!==n&&P(e,t,r,n),!0),I="dangerouslySetInnerHTML",Ft={style:(e,t,r,n)=>(P(e,t.style,"cssText",Ar(n)),!0),class:(e,t,r,n,s)=>{const i=je(s),o=je(n);return((l,c,u,f)=>{l?l.O.push({M:nt,P:[c,u,f]}):nt(c,u,f)})(e,t,i.filter(l=>l&&!o.includes(l)),o.filter(l=>l&&!i.includes(l))),!0},value:lt,checked:lt,[I]:(e,t,r,n)=>(I in t?P(e,t,I,n):"innerHTML"in t&&P(e,t,"innerHTML",n),!0),innerHTML:()=>!0},Br=(e,t,r,n,s)=>{const i=Hr(r,n),o=e.li={};if(i.length===0)return o;const l=e.v;for(let c of i){if(c==="children")continue;let u=n[c];c==="className"&&(n.class=u,c="class"),c==="class"&&(n.class=u=At(u));const f=r[c];if(f===u)continue;if(c==="ref"){u.current=l;continue}if(Et(c)){St(o,c,u);continue}const a=Ft[c];a&&a(t,l,c,u,f)||(s||!(c in l)?Me(t,l,c,u):P(t,l,c,u))}return o},Hr=(e,t)=>{const r=Object.keys(t);return r.push(...Object.keys(e).filter(n=>!r.includes(n))),r},It=(e,t,r)=>{r.includes(":")&&Me(e,t,r,"");try{window.qwikevents&&window.qwikevents.push(an(r))}catch{}},Kr=(e,t,r,n)=>{const s=t.v,i=Object.keys(r),o=t.li;if(i.length===0)return o;for(let l of i){if(l==="children")continue;let c=r[l];if(l==="className"&&(r.class=c,l="class"),l==="class"&&(r.class=c=At(c)),l==="ref"){c.current=s;continue}if(Et(l)){It(e,s,St(o,l,c));continue}const u=Ft[l];u&&u(e,s,l,c,void 0)||(n||!(l in s)?Me(e,s,l,c):P(e,s,l,c))}return o},zt=(e,t,r)=>{const n=Object.keys(r);if(n.length===0)return!1;const s=Rn(e,t.Y.C);for(const i of n)Wr.includes(i)||s.set(i,r[i]);return e.K},He=(e,t,r,n)=>{if(n&&e.hasAttribute("q:s"))return void t.I.push(e);Xr(e,r);const s=K(e,"elements");for(const i of s)He(i,t,r,n)},Xr=(e,t)=>{const r=ee(e);r&&$n(r,t)},ce=(e,t)=>{N(t)?t.appendTo(e):e.appendChild(t)},Qr=(e,t)=>{N(t)?t.remove():e.removeChild(t)},ve=(e,t,r)=>{N(t)?t.insertBeforeTo(e,ie(r)):e.insertBefore(t,ie(r))},Jr=(e,t,r)=>{const n={};for(let s=t;s<=r;++s){const i=e[s].ut;i!=null&&(n[i]=s)}return n},ne=(e,t)=>e.ct===t.ct&&e.ut===t.ut,Gr=(e,t)=>e.ct===t,Zr=()=>{const e=yt();let t=e.g;if(t)t.ht;else{const r=e.v,n=bt(r),s=S(r);t=be(decodeURIComponent(String(e.m)),n),er(n),rr(t,s)}return t.ht},Ke=(e,t)=>{e.vt&J||(e.vt|=J,t.wt!==void 0?(t.bt,t.yt.add(e)):(t.gt.add(e),Xe(t)))},Xe=e=>(e.bt===void 0&&(e.bt=pe().nextTick(()=>en(e))),e.bt),Vr=()=>{const[e]=Zr();Ke(e,Bt(bt(e.qt)))},en=async e=>{const t=e.wt=new Set(e.xt);e.xt.clear(),await rn(e),e.rt.forEach(o=>{t.add(o)}),e.rt.clear();const r=Le(e.L),n=Array.from(t);sn(n);const s=Tr(r,e),i=s.Y;for(const o of n)if(!i.nt.has(o)){const l=S(o);if(l.X){o.isConnected,i.N.push(l);try{await Ie(s,l,tn(o.parentElement))}catch(c){te(c)}}}return i.O.push(...i.R),i.O.length===0?void ct(e,i):pe().raf(()=>{(({Y:o})=>{Sr(o)})(s),ct(e,i)})},tn=e=>{let t=0;return e&&(e.namespaceURI===Lt&&(t|=1),e.tagName==="HEAD"&&(t|=2)),t},ct=async(e,t)=>{await nn(e,(r,n)=>(r.vt&Ht)!=0&&(!n||t.nt.has(r.qt))),e.rt.forEach(r=>{e.xt.add(r)}),e.rt.clear(),e.wt=void 0,e.bt=void 0,e.xt.size+e.gt.size>0&&Xe(e)},rn=async e=>{const t=[],r=e.L,n=[],s=o=>(o.vt&Kt)!=0,i=o=>(o.vt&fn)!=0;e.gt.forEach(o=>{s(o)&&(n.push(b(o.g.St(r),()=>o)),e.gt.delete(o)),i(o)&&(t.push(b(o.g.St(r),()=>o)),e.gt.delete(o))});do if(e.yt.forEach(o=>{s(o)?n.push(b(o.g.St(r),()=>o)):i(o)?t.push(b(o.g.St(r),()=>o)):e.gt.add(o)}),e.yt.clear(),n.length>0){const o=await Promise.all(n);Ce(o),await Promise.all(o.map(l=>ae(l,e))),n.length=0}while(e.yt.size>0);if(t.length>0){const o=await Promise.all(t);Ce(o),o.forEach(l=>ae(l,e))}},nn=async(e,t)=>{const r=[],n=e.L;e.gt.forEach(s=>{t(s,!1)&&(r.push(b(s.g.St(n),()=>s)),e.gt.delete(s))});do if(e.yt.forEach(s=>{t(s,!0)?r.push(b(s.g.St(n),()=>s)):e.gt.add(s)}),e.yt.clear(),r.length>0){const s=await Promise.all(r);Ce(s),await Promise.all(s.map(i=>ae(i,e))),r.length=0}while(e.yt.size>0)},sn=e=>{e.sort((t,r)=>2&t.compareDocumentPosition(ie(r))?1:-1)},Ce=e=>{e.sort((t,r)=>t.qt===r.qt?t.jt<r.jt?-1:1:(2&t.qt.compareDocumentPosition(ie(r.qt)))!=0?1:-1)},ut=Symbol("ContainerState"),Bt=e=>{let t=e[ut];return t||(e[ut]=t=on(e)),t},on=e=>{const t={L:e,kt:new WeakMap,T:null,gt:new Set,yt:new Set,xt:new Set,rt:new Set,bt:void 0,wt:void 0,Ot:{},et:0,A:new Set,Mt:!1};return t.T=ln(t),t},ln=e=>{const t=new Map,r=new Map,n=o=>(V(o),t.get(o)),s=(o,l)=>{let c=r.get(o);c||r.set(o,c=new Set),c.add(l)};return{Pt:n,Et:(o,l)=>{let c=n(o);if(!c){const u=l||new Map;u.forEach((f,a)=>{s(a,u)}),t.set(o,c={At:u,Ct(f,a){if(a==null)u.set(f,null);else{let h=u.get(f);h===void 0&&u.set(f,h=new Set),h&&h.add(a)}s(f,u)},Rt(f){u.forEach((a,h)=>{a!==null&&f&&!a.has(f)||((m,d)=>{Z(m)?((v,y)=>{er(y.L);const g=S(v);g.X,g.K||(g.K=!0,y.wt!==void 0?(y.bt,y.rt.add(v)):(y.xt.add(v),Xe(y)))})(m,d):Ke(m,d)})(h,e)})}})}return c},ot:o=>{const l=r.get(o);l&&(l.forEach(c=>{c.delete(o)}),r.delete(o),l.clear())}}},_e=(e,t,r)=>{if(!r.fill(e)&&e&&typeof e=="object"){if(x(e))for(let n=0;n<e.length;n++){const s=e[n];typeof s=="string"?e[n]=t(s):_e(s,t,r)}else if(ur(e))for(const n of Object.keys(e)){const s=e[n];typeof s=="string"?e[n]=t(s):_e(s,t,r)}}},cn={"!":(e,t)=>{var r;return(r=t.kt.get(e))!=null?r:Qt(e,t)},"%":e=>Zt(e),"~":e=>Promise.resolve(e),_:e=>Promise.reject(e)},at=e=>H(e)&&e.hasAttribute("q:container"),un=e=>{const t=De(e);return!!Z(t)&&t.hasAttribute("q:id")},Oe=e=>e.toString(36),ue=e=>parseInt(e,36),an=e=>{const t=e.indexOf(":");return e.slice(t+1).replace(/-./g,r=>r[1].toUpperCase())},Ht=1,Kt=2,J=4,ft=8,fn=16,ss=(e,t)=>{const{get:r,set:n,ctx:s,i}=M();if(r)return;const o=s.o,l=s.u.Y.C,c=new he(J|Kt,i,o,e,void 0),u=S(o);n(!0),e.St(l.L),u.k||(u.k=[]),u.k.push(c),hr(s,()=>ae(c,l,s.u))},os=(e,t)=>{var a;const{get:r,set:n,i:s,ctx:i}=M();if(r)return;const o=i.o,l=new he(Ht,s,o,e,void 0),c=(a=t==null?void 0:t.eagerness)!=null?a:"visible",u=S(o),f=i.u.Y.C;n(!0),u.k||(u.k=[]),u.k.push(l),mn(l,c),e.St(f.L),Ke(l,f)},Xt=e=>!!e.Ht,ae=(e,t,r)=>(e.vt,Xt(e)?hn(e,t):dn(e,t,r)),hn=(e,t,r)=>{e.vt&=~J,fe(e);const n=e.qt,s=R(n,void 0,"WatchEvent"),{T:i}=t,o=e.g.getFn(s,()=>{i.ot(e)}),l=[],c=e.Ht,u=ye(c),f={track:(g,p)=>{const w=V(g);return w?i.Et(w).Ct(e,p):Qe(re(nr),g),p?g[p]:g},cleanup(g){l.push(g)},previous:u.resolved};let a,h,m=!1;const d=(g,p)=>!m&&(m=!0,g?(m=!0,c.state="resolved",c.resolved=p,c.error=void 0,a(p)):(m=!0,c.state="rejected",c.resolved=void 0,c.error=p,h(p)),!0);We(s,()=>{c.state="pending",c.resolved=void 0,c.promise=new Promise((g,p)=>{a=g,h=p})}),e.Dt=Gt(()=>{l.forEach(g=>g())});const v=Ae(()=>b(r,()=>o(f)),g=>{d(!0,g)},g=>{d(!1,g)}),y=u.timeout;return y?Promise.race([v,fr(y).then(()=>{d(!1,"timeout")&&fe(e)})]):v},dn=(e,t,r)=>{e.vt&=~J,fe(e);const n=e.qt,s=R(n,void 0,"WatchEvent"),{T:i}=t,o=e.g.getFn(s,()=>{i.ot(e)}),l=[];e.Dt=Gt(()=>{l.forEach(u=>u())});const c={track:(u,f)=>{const a=V(u);return a?i.Et(a).Ct(e,f):Qe(re(nr),u),f?u[f]:u},cleanup(u){l.push(u)}};return Ae(()=>o(c),u=>{L(u)&&l.push(u)},u=>{Pt(u,n,r)})},fe=e=>{const t=e.Dt;if(t){e.Dt=void 0;try{t()}catch(r){te(r)}}},pn=e=>{e.vt&ft?(e.vt&=~ft,(0,e.g)()):fe(e)},mn=(e,t)=>{t==="load"?Ve("qinit",ht(e)):t==="visible"&&Ve("qvisible",ht(e))},ht=e=>{const t=e.g;return we(t.Qt,"_hW",Vr,null,null,[e],t._t)};class he{constructor(t,r,n,s,i){this.vt=t,this.jt=r,this.qt=n,this.g=s,this.Ht=i}}const vn=e=>({__brand:"resource",promise:void 0,resolved:void 0,error:void 0,state:"pending",timeout:e==null?void 0:e.timeout}),gn=e=>A(e)&&e.__brand==="resource",yn="",wn={prefix:"",test:e=>Je(e),serialize:(e,t,r)=>sr(e,{Wt:t}),prepare:(e,t)=>be(e,t.L),fill:(e,t)=>{e.j&&e.j.length>0&&(e.ht=e.j.map(t),e.j=null)}},bn={prefix:"",test:e=>{return A(t=e)&&t instanceof he;var t},serialize:(e,t)=>((r,n)=>{let s=`${Oe(r.vt)} ${Oe(r.jt)} ${n(r.g)} ${n(r.qt)}`;return Xt(r)&&(s+=` ${n(r.Ht)}`),s})(e,t),prepare:e=>(t=>{const[r,n,s,i,o]=t.split(" ");return new he(ue(r),ue(n),i,s,o)})(e),fill:(e,t)=>{e.qt=t(e.qt),e.g=t(e.g),e.Ht&&(e.Ht=t(e.Ht))}},qn={prefix:"",test:e=>gn(e),serialize:(e,t)=>((r,n)=>{const s=r.state;return s==="resolved"?`0 ${n(r.resolved)}`:s==="pending"?"1":`2 ${n(r.error)}`})(e,t),prepare:e=>(t=>{const[r,n]=t.split(" "),s=vn(void 0);return s.promise=Promise.resolve(),r==="0"?(s.state="resolved",s.resolved=n):r==="1"?(s.state="pending",s.promise=new Promise(()=>{})):r==="2"&&(s.state="rejected",s.error=n),s})(e),fill:(e,t)=>{if(e.state==="resolved")e.resolved=t(e.resolved),e.promise=Promise.resolve(e.resolved);else if(e.state==="rejected"){const r=Promise.reject(e.error);r.catch(()=>null),e.error=t(e.error),e.promise=r}}},En={prefix:"",test:e=>e instanceof URL,serialize:e=>e.href,prepare:e=>new URL(e),fill:void 0},Sn={prefix:"",test:e=>e instanceof Date,serialize:e=>e.toISOString(),prepare:e=>new Date(e),fill:void 0},kn={prefix:"\x07",test:e=>e instanceof RegExp,serialize:e=>`${e.flags} ${e.source}`,prepare:e=>{const t=e.indexOf(" "),r=e.slice(t+1),n=e.slice(0,t);return new RegExp(r,n)},fill:void 0},xn={prefix:"",test:e=>e instanceof Error,serialize:e=>e.message,prepare:e=>{const t=new Error(e);return t.stack=void 0,t},fill:void 0},jn={prefix:"",test:e=>dr(e),serialize:void 0,prepare:(e,t,r)=>r,fill:void 0},de=Symbol("serializable-data"),Cn={prefix:"",test:e=>Vn(e),serialize:(e,t,r)=>{const[n]=e[de];return sr(n,{Wt:t})},prepare:(e,t)=>{const r=e.indexOf("{"),n=r==-1?e:e.slice(0,r),s=be(n,t.L);return or(s)},fill:(e,t)=>{const[r]=e[de];r.j&&r.j.length>0&&(r.ht=r.j.map(t),r.j=null)}},_n=[wn,bn,qn,En,Sn,kn,xn,jn,Cn,{prefix:"",test:e=>typeof e=="function"&&e.__qwik_serializable__!==void 0,serialize:e=>e.toString(),prepare:e=>{const t=new Function("return "+e)();return t.__qwik_serializable__=!0,t},fill:void 0}],Qt=(e,t,r=0)=>t.kt.get(e)||ge(e,t,r,void 0),ge=(e,t,r,n)=>{ye(e),t.kt.has(e);const s=t.T.Et(e,n),i=new Proxy(e,new Tn(t,s,r));return t.kt.set(e,i),i},Te=Symbol(),On=Symbol(),dt=Symbol();class Tn{constructor(t,r,n){this.C=t,this.Ut=r,this.vt=n}get(t,r){if(typeof r=="symbol")return r===Te?t:r===dt?this.vt:r===On?this.Ut.At:t[r];let n;const s=Se(),i=(1&this.vt)!=0,o=(2&this.vt)!=0;s&&(n=s.$);let l=t[r];if(se(l)?l=l.mut:o&&(n=null),n){const c=x(t);this.Ut.Ct(n,c?void 0:r)}return i?Pn(l,this.C):l}set(t,r,n){if(typeof r=="symbol")return t[r]=n,!0;if((2&this.vt)!=0)throw j(Fn);const s=(1&this.vt)!=0?ye(n):n;return x(t)?(t[r]=s,this.Ut.Rt(),!0):(t[r]!==s&&(t[r]=s,this.Ut.Rt(r)),!0)}has(t,r){return r===Te||r===dt||Object.prototype.hasOwnProperty.call(t,r)}ownKeys(t){let r=null;const n=Se();return n&&(r=n.$),r&&this.Ut.Ct(r),Object.getOwnPropertyNames(t)}}const Pn=(e,t)=>{if(Je(e))return e;if(A(e)){if(Object.isFrozen(e))return e;const r=ye(e);return r!==e||qt(r)?e:An(r)?t.kt.get(e)||Qt(e,t,1):e}return e},Jt=new WeakSet,An=e=>!A(e)&&!L(e)||!Jt.has(e),Gt=e=>(e!=null&&Jt.add(e),e),Zt=e=>new Vt(e);class Vt{constructor(t){this.mut=t}}const se=e=>e instanceof Vt,ye=e=>{var t;return A(e)&&(t=V(e))!=null?t:e},V=e=>e[Te],er=e=>{T(e,"q:container")==="paused"&&(t=>{if(!at(t))return void Pe();const r=Le(),n=(a=>{let h=a.lastElementChild;for(;h;){if(h.tagName==="SCRIPT"&&T(h,"type")==="qwik/json")return h;h=h.previousElementSibling}})(t===r.documentElement?r.body:t);if(!n)return void Pe();n.remove();const s=Bt(t);((a,h)=>{const m=a.ownerDocument.head;a.querySelectorAll("style[q\\:style]").forEach(d=>{h.A.add(T(d,"q:style")),m.appendChild(d)})})(t,s);const i=JSON.parse((n.textContent||"{}").replace(/\\x3C(\/?script)/g,"<$1")),o=new Map,l=a=>((h,m,d,v)=>{if(typeof h=="string"&&h.length,h.startsWith("#"))return m.has(h),m.get(h);const y=ue(h);d.length;let g=d[y];for(let p=h.length-1;p>=0;p--){const w=h[p],q=cn[w];if(!q)break;g=q(g,v)}return g})(a,o,i.objs,s);let c=0;((a,h)=>{h(a);const m=a.ownerDocument.createTreeWalker(a,129,{acceptNode:y=>at(y)?2:h(y)?1:3}),d=[];let v=null;for(;v=m.nextNode();)d.push(De(v));return d})(t,un).forEach(a=>{const h=T(a,"q:id"),m=S(a);m.F=h,H(a)&&(m.it=X(a)),o.set("#"+h,a),c=Math.max(c,ue(h))}),s.et=++c;const u=((a,h,m)=>{const d=new Map;return{prepare(v){for(const y of _n){const g=y.prefix;if(v.startsWith(g)){const p=y.prepare(v.slice(g.length),h,m);return y.fill&&d.set(p,y),p}}return v},fill(v){const y=d.get(v);return!!y&&(y.fill(v,a,h),!0)}}})(l,s,r);((a,h,m,d,v)=>{for(let y=0;y<a.length;y++){const g=a[y];z(g)&&(a[y]=g===yn?void 0:v.prepare(g))}for(let y=0;y<h.length;y++){const g=a[y],p=h[y];if(p){const w=new Map;let q=0;for(const k of Object.keys(p)){const E=p[k];if(k==="$"){q=E;continue}const Y=m(k);if(!Y)continue;const ir=E===null?null:new Set(E);w.set(Y,ir)}ge(g,d,q,w)}}})(i.objs,i.subs,l,s,u);for(const a of i.objs)_e(a,l,u);for(const a of Object.keys(i.ctx)){a.startsWith("#");const h=i.ctx[a],m=o.get(a),d=S(m),v=h.r,y=h.s,g=h.h,p=h.c,w=h.w;if(v&&(H(m),d.Nt=v.split(" ").map(l),d.li=gr(d,t)),y&&(d.p=y.split(" ").map(l)),w&&(d.k=w.split(" ").map(l)),p){d.W=new Map;for(const q of p.split(" ")){const[k,E]=q.split("=");d.W.set(k,l(E))}}if(g){const[q,k]=g.split(" "),E=m.getAttribute("q:sstyle");d.$t=E?E.split(" "):null,d.J=!0,d.q=l(q),d.X=l(k)}}var f;O(t,"q:container","resumed"),(f=t)&&typeof CustomEvent=="function"&&f.dispatchEvent(new CustomEvent("qresume",{detail:void 0,bubbles:!0,composed:!0}))})(e)},ee=e=>e._qc_,S=e=>{let t=ee(e);return t||(e._qc_=t={K:!1,J:!1,tt:!1,F:"",v:e,Nt:[],li:{},k:null,p:null,B:null,$t:null,st:null,q:null,it:null,X:null,W:null}),t},$n=(e,t)=>{var n;const r=e.v;(n=e.k)==null||n.forEach(s=>{t.ot(s),pn(s)}),e.X&&t.ot(r),e.X=null,e.p=null,e.k=null,e.K=!1,r._qc_=void 0},pt=["on","window:on","document:on"],Wn=["on","on-window","on-document"],tr=e=>{let t="on";for(let r=0;r<pt.length;r++){const n=pt[r];if(e.startsWith(n)){t=Wn[r],e=e.slice(n.length);break}}return t+":"+(e.startsWith("-")?Ne(e.slice(1)):e.toLowerCase())},Ln=(e,t)=>ge(e,t,2),Rn=(e,t)=>{let r=e.q;r||(e.q=r=Ln({},t));const n=V(r),s=t.T.Et(n);return{set(i,o){let l=n[i];se(l)&&(l=l.mut),t.Mt?se(o)?(o=o.mut,n[i]=o):n[i]=Zt(o):(n[i]=o,se(o)&&(o=o.mut)),l!==o&&s.Rt(i)}}},rr=(e,t)=>(e.j,e.ht=e.j.map(r=>{const n=parseInt(r,10),s=t.Nt[n];return t.Nt.length,s})),te=(e,...t)=>{const r=e instanceof Error?e:new Error(e);return typeof globalThis._handleError=="function"&&e instanceof Error?globalThis._handleError(e,t):console.error("%cQWIK ERROR","",r.message,...Nn(t),r.stack),r},Qe=(e,...t)=>te(e,...t),Pe=(e,...t)=>{},Nn=e=>e,Mn=0,Yn=6,Dn=13,Un=14,Fn=17,In=20,zn=25,nr=26,j=(e,...t)=>{const r=re(e);return Qe(r,...t)},re=e=>`Code(${e})`,Je=e=>typeof e=="function"&&typeof e.getSymbol=="function",we=(e,t,r,n,s,i,o)=>{let l;const c=p=>{l||(l=p)},u=async p=>{if(p&&c(p),r)return r;if(n)return r=n().then(w=>r=w[t]);{if(!l)throw new Error(`QRL '${e}#${t||"default"}' does not have an attached container`);const w=pe().importSymbol(l,e,t);return r=b(w,q=>r=q)}},f=p=>r||u(p),a=(p,w)=>(...q)=>{const k=f();return b(k,E=>{if(L(E)){if(w&&w()===!1)return;const Y={...h(p),g:y};return Hn(t,Y.v),We(Y,E,...q)}throw j(10)})},h=p=>p==null?R():x(p)?wt(p):p,m=async function(...p){return await a()(...p)},d=o!=null?o:t,v=Bn(d),y=m;return Object.assign(m,{getSymbol:()=>d,getHash:()=>v,resolve:u,St:f,Z:c,Qt:e,_t:t,Kt:o,S:v,getFn:a,j:s,ht:i})},Bn=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},Hn=(e,t)=>{typeof document=="object"&&document.dispatchEvent(new CustomEvent("qsymbol",{bubbles:!1,detail:{symbol:e,element:t,timestamp:performance.now()}}))};let Kn=0;const Xn=/\(\s*(['"])([^\1]+)\1\s*\)/,Qn=/Promise\s*\.\s*resolve/,Jn=/[\\/(]([\w\d.\-_]+\.(js|ts)x?):/,mt=new Map,Gn=(e,t,r=_)=>{let n="",s=null;if(z(e))n=e;else{if(!L(e))throw j(12,e);{s=e;const i=mt.get(t);if(i)n=i;else{let o;const l=String(e);if((o=l.match(Xn))&&o[2])n=o[2];else{if(!(o=l.match(Qn)))throw j(11,l);{const c="QWIK-SELF",u=new Error(c).stack.split(`
`),f=u.findIndex(a=>a.includes(c));o=u[f+2].match(Jn),n=o?o[1]:"main"}}mt.set(t,n)}}}return we(n,t,null,s,null,r,null)},sr=(e,t={})=>{var u;let r=e._t,n=e.Qt;const s=(u=e.Kt)!=null?u:r,i=pe();if(i){const f=i.chunkForSymbol(s);f&&(n=f[1],e.Kt||(r=f[0]))}n.startsWith("./")&&(n=n.slice(2));const o=[n];r&&r!=="default"&&o.push("#",r);const l=e.j,c=e.ht;if(c&&c.length){if(t.Wt){const f=c.map(t.Wt);o.push(`[${f.join(" ")}]`)}else if(t.Jt){const f=c.map(t.Jt);o.push(`[${f.join(" ")}]`)}}else l&&l.length>0&&o.push(`[${l.join(" ")}]`);return o.join("")},be=(e,t)=>{const r=e.length,n=vt(e,0,"#"),s=vt(e,n,"["),i=Math.min(n,s),o=e.substring(0,i),l=n==r?n:n+1,c=s,u=l==c?"default":e.substring(l,c),f=s,a=r,h=f===a?_:e.substring(f+1,a-1).split(" ");o==="/runtimeQRL"&&te(re(2),e);const m=we(o,u,null,null,h,null,null);return t&&m.Z(t),m},vt=(e,t,r)=>{const n=e.length,s=e.indexOf(r,t==n?0:t);return s==-1?n:s},Zn=e=>((t,r=_)=>we("/runtimeQRL","s"+Kn++,t,null,null,r,null))(e),or=e=>{function t(r,n){const s=e.S;return kt(Re,{"q:renderFn":e,...r},s+":"+(n||""))}return t[de]=[e],t},Vn=e=>typeof e=="function"&&e[de]!==void 0,is=e=>{var r;const t=(r=e.name)!=null?r:"";return kt(Re,{"q:s":""},t)},ls=(e,t)=>{const{get:r,set:n,ctx:s}=M();if(r!=null)return r;const i=L(e)?e():e;if((t==null?void 0:t.reactive)===!1)return n(i),i;{const o=s.u.Y.C,l=ge(i,o,t!=null&&t.recursive?1:0,void 0);return n(l),l}};function cs(e,t){var r;return(r=$e().u.Y.C.Ot[e])!=null?r:t}const us=e=>{es(e,t=>t,!1)},es=(e,t,r)=>{const{get:n,set:s,ctx:i,i:o}=M();if(n)return n;const l=i.u,c=(a=o,`${((d,v=0)=>{if(d.length===0)return v;for(let y=0;y<d.length;y++)v=(v<<5)-v+d.charCodeAt(y),v|=0;return Number(Math.abs(v)).toString(36)})(e.S)}-${a}`),u=l.Y.C,f=S(i.o);var a;if(s(c),f.st||(f.st=[]),f.$t||(f.$t=[]),r&&f.$t.push((d=>"\u2B50\uFE0F"+d)(c)),((d,v)=>d.A.has(v))(u,c))return c;u.A.add(c);const h=e.St(u.L),m=d=>{f.st,f.st.push({styleId:c,content:t(d,c)})};return $(h)?i.l.push(h.then(m)):m(h),c};const as=or(Gn(()=>gt(()=>import("./q-e36ce219.js").then(e=>e.k),[]),"s_3sccYCDd1Z0"));export{jr as A,rs as C,Vr as K,os as O,ns as R,us as W,kt as X,ls as Y,gt as _,Zr as a,ts as b,ss as j,or as m,cs as n,as as r,jt as t,Gn as u,Gt as w,is as x};

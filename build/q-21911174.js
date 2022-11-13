const $r=function(){const t=document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Lr=function(e){return"/"+e},ht={},Wt=function(t,r,n){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=Lr(s),s in ht)return;ht[s]=!0;const o=s.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${i}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":$r,o||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),o)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},T=[],Pe={},Wr=e=>{const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},N=e=>e&&typeof e=="object",j=e=>Array.isArray(e),Z=e=>typeof e=="string",I=e=>typeof e=="function",oe="q:slot",Y=e=>e instanceof Promise,He=(e,t,r)=>{try{const n=e();return Y(n)?n.then(t,r):t(n)}catch(n){return r(n)}},q=(e,t)=>Y(e)?e.then(t):t(e),V=e=>e.some(Y)?Promise.all(e):e,Rr=e=>e!=null,Mr=e=>new Promise(t=>{setTimeout(t,e)});let J;const $e=()=>{if(!J){const e=typeof document<"u"&&document&&document.__q_context__;return e?j(e)?document.__q_context__=Mt(e):e:void 0}return J},Rt=()=>{const e=$e();if(!e)throw O(ds);return e},Be=()=>{const e=Rt();if(e.t!=="qRender")throw O(ms);return e.o,e.l,e.u,e.$,e},Ke=(e,t,...r)=>{const n=J;let s;try{J=e,s=t.apply(null,r)}finally{J=n}return s},Nr=(e,t)=>{const r=e.l;if(r.length===0){const n=t();Y(n)&&r.push(n)}else r.push(Promise.all(r).then(t))},Mt=e=>{const t=e[0];return z(void 0,t,e[1],e[2])},z=(e,t,r,n)=>({p:0,o:e,v:t,t:r,m:n,g:void 0,q:void 0,u:void 0,$:void 0,l:void 0}),Nt=e=>e.closest("[q\\:container]"),Yt=e=>e&&typeof e.nodeType=="number",Yr=e=>e&&e.nodeType===9,ee=e=>e.nodeType===1,ie=e=>Yt(e)&&(e.nodeType===1||e.nodeType===111),H=e=>e.nodeType===111,Dr=e=>N(e)&&e[Symbol.toStringTag]==="Module";let Fr=(()=>{const e=new Map;return{isServer:!1,importSymbol(t,r,n){const s=((c,u,f)=>{var d;const a=c.baseURI,h=new URL((d=u.getAttribute("q:base"))!=null?d:a,a);return new URL(f,h)})(t.ownerDocument,t,r).toString(),o=new URL(s);o.hash="",o.search="";const i=o.href,l=e.get(i);return l?l[n]:Wt(()=>import(i),[]).then(c=>{return u=c,c=Object.values(u).find(Dr)||u,e.set(i,c),c[n];var u})},raf:t=>new Promise(r=>{requestAnimationFrame(()=>{r(t())})}),nextTick:t=>new Promise(r=>{setTimeout(()=>{r(t())})}),chunkForSymbol(){}}})();const ke=()=>Fr,P=(e,t,r)=>e.setAttribute(t,r),W=(e,t)=>e.getAttribute(t),Ur=/^(on|window:|document:)/,Dt=e=>e.endsWith("$")&&Ur.test(e),xe=(e,t,r)=>{let n=e[t];n||(e[t]=n=[]);for(const s of r){const o=s.S;let i=!1;for(let l=0;l<n.length;l++)if(n[l].S===o){n.splice(l,1,s),i=!0;break}i||n.push(s)}return!1},Ft=(e,t,r)=>{t.endsWith("$");const n=j(r)?r.map(dt):[dt(r)];return t=wr(t.slice(0,-1)),xe(e,t,n),t},dt=e=>ut(e)?e:ks(e),Ir=(e,t)=>{const r=e.v.attributes,n={};for(let s=0;s<r.length;s++){const{name:o,value:i}=r.item(s);if(o.startsWith("on:")||o.startsWith("on-window:")||o.startsWith("on-document:")){let l=n[o];l||(n[o]=l=[]);const c=i.split(`
`);for(const u of c){const f=Ae(u,t);f.j&&br(f,e),l.push(f)}}}return n},B=()=>{const e=Be(),t=e.p,r=e.o,n=x(r),s=n.p?n.p:n.p=[];return e.p++,{get:s[t],set:o=>s[t]=o,i:t,ctx:e}},pt=(e,t)=>zr(`on-${e}`,t),zr=(e,t)=>{const r=Be(),n=x(r.o);xe(n.li,wr(e),[t])},Xe=e=>document,Ut=(e,t,r)=>{const n=r==null?null:String(r);return new It(e,t,n)};class It{constructor(t,r,n=null){this.type=t,this.props=r,this.key=n}}const Hr=e=>e instanceof It,Us=e=>e.children,zt=Symbol("skip render"),Qe=e=>e.children,Je=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),Ge=(e,t,r,n)=>{e?e.O.push({M:mt,P:[t,r,n]}):mt(t,r,n)},mt=(e,t,r)=>{if(r==null||r===!1)e.removeAttribute(t);else{const n=r===!0?"":String(r);P(e,t,n)}},M=(e,t,r,n)=>{e?e.O.push({M:vt,P:[t,r,n]}):vt(t,r,n)},vt=(e,t,r)=>{try{e[t]=r}catch(n){ue(ae(fs),{node:e,key:t,value:r},n)}},Ze=(e,t,r)=>r?e.createElementNS(Vt,t):e.createElement(t),D=(e,t,r,n)=>(e.O.push({M:Ce,P:[t,r,n||null]}),r),gt=(e,t,r)=>(e.O.push({M:ge,P:[t,r]}),r),Br=(e,t)=>{e.C.A.add(t.styleId),e.R.push({M:Kr,P:[e.C.L,t]})},yt=(e,t,r)=>{const n=e.classList;n.remove(...t),n.add(...r)},Kr=(e,t)=>{const r=Xe(),n=r.documentElement===e,s=r.head,o=r.createElement("style");P(o,"q:style",t.styleId),o.textContent=t.content,n&&s?ge(s,o):Ce(e,o,e.firstChild)},Ht=(e,t)=>{e.O.push({M:Xr,P:[t,e]})},Xr=(e,t)=>{const r=e.parentElement;if(r){if(e.nodeType===1||e.nodeType===111){const n=t.C.T;ot(e,t,n,!0)}En(r,e)}},Bt=(e,t)=>{const r=Ze(e,"q:template",!1);return P(r,oe,t),P(r,"hidden",""),P(r,"aria-hidden","true"),r},Qr=e=>{for(const t of e.O)t.M.apply(void 0,t.P);Jr(e)},Le=e=>W(e,"q:key"),wt=(e,t)=>{t!==null&&P(e,"q:key",t)},Jr=e=>{const t=e.C.T;e.I.forEach(r=>{const n=Le(r),s=te(r,"root");if(s.length>0){const o=r.getAttribute("q:sref"),i=e.N.find(l=>l.F===o);if(i){const l=Bt(e.H,n),c=i.v;for(const u of s)ge(l,u);Ce(c,l,c.firstChild)}else ot(r,e,t,!1)}}),e.D.forEach(([r,n])=>{const s=Le(r),o=Array.from(n.childNodes).find(i=>tr(i)&&i.getAttribute(oe)===s);o&&(te(o,"root").forEach(i=>{ge(r,i)}),o.remove())})};class Kt{constructor(t,r){this.open=t,this.close=r,this._qc_=null,this.nodeType=111,this.localName=":virtual",this.nodeName=":virtual";const n=this.ownerDocument=t.ownerDocument;this.template=Ze(n,"template",!1),this.attributes=(s=>{if(!s)return new Map;const o=s.split(" ");return new Map(o.map(i=>{const l=i.indexOf("=");return l>=0?[i.slice(0,l),(c=i.slice(l+1),c.replace(/\+/g," "))]:[i,""];var c}))})(t.data.slice(3)),t.data.startsWith("qv "),t.__virtual=this}insertBefore(t,r){const n=this.parentElement;if(n){const s=r||this.close;n.insertBefore(t,s)}else this.template.insertBefore(t,r);return t}remove(){const t=this.parentElement;if(t){const r=Array.from(this.childNodes);this.template.childElementCount,t.removeChild(this.open),this.template.append(...r),t.removeChild(this.close)}}appendChild(t){return this.insertBefore(t,null)}insertBeforeTo(t,r){const n=Array.from(this.childNodes);t.insertBefore(this.open,r);for(const s of n)t.insertBefore(s,r);t.insertBefore(this.close,r),this.template.childElementCount}appendTo(t){this.insertBeforeTo(t,null)}removeChild(t){this.parentElement?this.parentElement.removeChild(t):this.template.removeChild(t)}getAttribute(t){var r;return(r=this.attributes.get(t))!=null?r:null}hasAttribute(t){return this.attributes.has(t)}setAttribute(t,r){this.attributes.set(t,r)}removeAttribute(t){this.attributes.delete(t)}matches(t){return!1}compareDocumentPosition(t){return this.open.compareDocumentPosition(t)}closest(t){const r=this.parentElement;return r?r.closest(t):null}querySelectorAll(t){const r=[];return te(this,"elements").forEach(n=>{ie(n)&&(n.matches(t)&&r.push(n),r.concat(Array.from(n.querySelectorAll(t))))}),r}querySelector(t){for(const r of this.childNodes)if(ee(r)){if(r.matches(t))return r;const n=r.querySelector(t);if(n!==null)return n}return null}get firstChild(){if(this.parentElement){const t=this.open.nextSibling;return t===this.close?null:t}return this.template.firstChild}get nextSibling(){return this.close.nextSibling}get previousSibling(){return this.open.previousSibling}get childNodes(){if(!this.parentElement)return this.template.childNodes;const t=[];let r=this.open;for(;(r=r.nextSibling)&&r!==this.close;)t.push(r);return t}get isConnected(){return this.open.isConnected}get parentElement(){return this.open.parentElement}}const Ve=e=>{if(e==null)return null;if(et(e)){const t=pe(e);if(t)return t}return e},pe=e=>{const t=e.__virtual;if(t)return t;if(e.data.startsWith("qv ")){const r=Gr(e);return new Kt(e,r)}return null},Gr=e=>{let t=e.nextSibling,r=1;for(;t;){if(et(t)){if(t.data.startsWith("qv "))r++;else if(t.data==="/qv"&&(r--,r===0))return t}t=t.nextSibling}throw new Error("close not found")},et=e=>e.nodeType===8,me=e=>e==null?null:H(e)?e.open:e,Zr=e=>Object.freeze({id:Je(e)}),Is=(e,t)=>{const{get:r,set:n,ctx:s}=B();if(r!==void 0)return;const o=s.o,i=x(o);let l=i.W;l||(i.W=l=new Map),l.set(e.id,t),n(!0)},zs=(e,t)=>{const{get:r,set:n,ctx:s}=B();if(r!==void 0)return r;const o=Xt(e,s.o,s.u);if(o!==void 0)return n(o);if(t!==void 0)return n(t);throw O(hs,e.id)},Xt=(e,t,r)=>{const n=e.id;if(r){const s=r.U;for(let o=s.length-1;o>=0;o--){const i=s[o];if(t=i.v,i.W){const l=i.W.get(n);if(l)return l}}}if(t.closest){const s=Vr(t,n);if(s!==void 0)return s}},Vr=(e,t)=>{var n;let r=e;for(;r;){let s,o=r;for(;o&&(s=en(o));){const i=(n=ce(s))==null?void 0:n.W;if(i&&i.has(t))return i.get(t);o=s}r=r.parentElement}},en=e=>{let t=e,r=1;for(;t=t.previousSibling;)if(et(t)){if(t.data==="/qv")r++;else if(t.data.startsWith("qv ")&&(r--,r===0))return pe(t)}return null},tn=Zr("qk-error"),Qt=(e,t,r)=>{{const n=Xt(tn,t,r);if(n===void 0)throw e;n.error=e}},We=(e,t)=>{t.K=!1,t.J=!0,t.B=[];const r=t.v,n=t.X,s=t.q,o=tt(e,t),i=z(r,void 0,"qRender"),l=i.l=[];o.G=t,i.$=r,i.u=e,n.Z(e.Y.C.L);const c=n.getFn(i);return He(()=>c(s),u=>(t.tt=!1,l.length>0?Promise.all(l).then(()=>t.K?We(e,t):{node:u,rctx:o}):t.K?We(e,t):{node:u,rctx:o}),u=>(Qt(u,r,e),{node:zt,rctx:o}))},rn=(e,t)=>({Y:{H:e,C:t,nt:new Set,O:[],R:[],N:[],D:[],I:[]},G:void 0,U:[]}),tt=(e,t)=>({Y:e.Y,G:e.G,U:e.U.concat(t)}),Jt=e=>{if(Z(e))return e;if(N(e)){if(j(e))return e.join(" ");{let t="",r=!1;for(const n of Object.keys(e))e[n]&&(r&&(t+=" "),t+=n,r=!0);return t}}return""},nn=/\s/,Re=e=>e?e.split(nn):T,sn=e=>{if(e==null)return"";if(typeof e=="object"){if(j(e))throw O(as,e,"style");{const t=[];for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const n=e[r];n&&t.push(Je(r)+":"+n)}return t.join(";")}}return String(e)},on=e=>Ye(e.Y.C.et++),Gt=(e,t)=>{const r=on(e);t.F=r},ln=[oe,"q:renderFn","children"],rt=(e,t,r)=>{const n=!t.J,s=t.v,o=e.Y.C;return o.rt.delete(s),o.T.ot(s),q(We(e,t),i=>{const l=e.Y,c=i.rctx,u=z(s);if(l.nt.add(s),u.$=s,u.u=c,n&&t.st)for(const a of t.st)Br(l,a);const f=Q(i.node,u);return q(f,a=>{const h=cn(s,a),d=Zt(t);return q(un(c,d,h,r),()=>{t.it=h})})})},Zt=e=>(e.it||(e.it=re(e.v)),e.it);class A{constructor(t,r,n,s){this.ct=t,this.q=r,this.lt=n,this.ut=s,this.ft=null,this.dt=""}}const cn=(e,t)=>{const r=t===void 0?T:j(t)?t:[t],n=new A(":virtual",{},r,null);return n.ft=e,n},Q=(e,t)=>{if(e!=null&&typeof e!="boolean"){if(Z(e)||typeof e=="number"){const r=new A("#text",Pe,T,null);return r.dt=String(e),r}if(Hr(e))return((r,n)=>{const s=r.key!=null?String(r.key):null,o=r.type,i=r.props,l=i.children;let c="";if(Z(o))c=o;else{if(o!==Qe){if(I(o)){const f=Ke(n,o,i,r.key);return Q(f,n)}throw O(vs,o)}c=":virtual"}let u=T;return l!=null?q(Q(l,n),f=>(f!==void 0&&(u=j(f)?f:[f]),new A(c,i,u,s))):new A(c,i,u,s)})(e,t);if(j(e)){const r=V(e.flatMap(n=>Q(n,t)));return q(r,n=>n.flat(100).filter(Rr))}return Y(e)?e.then(r=>Q(r,t)):e===zt?new A(":skipRender",Pe,T,null):void Fe("A unsupported value was passed to the JSX, skipping render. Value:",e)}},Vt="http://www.w3.org/2000/svg",ve=[],un=(e,t,r,n)=>nt(e,t,r,"root",n),nt=(e,t,r,n,s)=>{t.ft;const o=r.lt;if(o.length===1&&o[0].ct===":skipRender")return;const i=t.ft;t.lt===ve&&i.nodeName==="HEAD"&&(n="head",s|=2);const l=an(t,n);return l.length>0&&o.length>0?fn(e,i,l,o,s):o.length>0?rr(e,i,null,o,0,o.length-1,s):l.length>0?st(e.Y,l,0,l.length-1):void 0},an=(e,t)=>{const r=e.lt,n=e.ft;return r===ve?e.lt=er(n,t):r},fn=(e,t,r,n,s)=>{let o,i,l,c=0,u=0,f=r.length-1,a=r[0],h=r[f],d=n.length-1,p=n[0],m=n[d];const y=[],g=e.Y;for(;c<=f&&u<=d;)if(a==null)a=r[++c];else if(h==null)h=r[--f];else if(p==null)p=n[++u];else if(m==null)m=n[--d];else if(fe(a,p))y.push(X(e,a,p,s)),a=r[++c],p=n[++u];else if(fe(h,m))y.push(X(e,h,m,s)),h=r[--f],m=n[--d];else if(fe(a,m))a.ft,h.ft,y.push(X(e,a,m,s)),D(g,t,a.ft,h.ft.nextSibling),a=r[++c],m=n[--d];else if(fe(h,p))a.ft,h.ft,y.push(X(e,h,p,s)),D(g,t,h.ft,a.ft),h=r[--f],p=n[++u];else{if(o===void 0&&(o=Sn(r,c,f)),i=o[p.ut],i===void 0){const b=ne(e,p,s);y.push(q(b,E=>{D(g,t,E,a.ft)}))}else if(l=r[i],kn(l,p.ct))y.push(X(e,l,p,s)),r[i]=void 0,l.ft,D(g,t,l.ft,a.ft);else{const b=ne(e,p,s);y.push(q(b,E=>{D(g,t,E,a.ft)}))}p=n[++u]}if(u<=d){const b=n[d+1]==null?null:n[d+1].ft;y.push(rr(e,t,b,n,u,d,s))}let v=V(y);return c<=f&&(v=q(v,()=>{st(g,r,c,f)})),v},Te=(e,t)=>{const r=H(e)?e.close:null,n=[];let s=e.firstChild;for(;(s=Ve(s))&&(t(s)&&n.push(s),s=s.nextSibling,s!==r););return n},te=(e,t)=>{switch(t){case"root":return Te(e,vn);case"head":return Te(e,mn);case"elements":return Te(e,ie)}},er=(e,t)=>te(e,t).map(hn),hn=e=>{var t,r;return ee(e)&&(r=(t=ce(e))==null?void 0:t.it)!=null?r:re(e)},re=e=>{if(ie(e)){const t=H(e)?Pe:dn(e),r=new A(e.localName,t,ve,Le(e));return r.ft=e,r}if(e.nodeType===3){const t=new A(e.nodeName,{},ve,null);return t.dt=e.data,t.ft=e,t}throw new Error("invalid node")},dn=e=>{const t={},r=e.attributes,n=r.length;for(let s=0;s<n;s++){const o=r.item(s),i=o.name;i.includes(":")||(t[i]=i==="class"?pn(o.value):o.value)}return t},pn=e=>Re(e).filter(t=>!t.startsWith("\u2B50\uFE0F")).join(" "),mn=e=>{const t=e.nodeType;return t===1?e.hasAttribute("q:head"):t===111},tr=e=>e.nodeName==="Q:TEMPLATE",vn=e=>{const t=e.nodeType;if(t===3||t===111)return!0;if(t!==1)return!1;const r=e.nodeName;return r!=="Q:TEMPLATE"&&(r!=="HEAD"||e.hasAttribute("q:head"))},X=(e,t,r,n)=>{t.ct,r.ct;const s=t.ft,o=r.ct,i=e.Y,l=o===":virtual";if(r.ft=s,o==="#text")return void(t.dt!==r.dt&&M(i,s,"data",r.dt));let c=!!(1&n);c||o!=="svg"||(n|=1,c=!0);const u=r.q,f=l&&"q:renderFn"in u,a=x(s);if(!f){const d=yn(a,i,t.q,u,c),p=e.G;if(p&&!p.tt){p.tt=!0;for(const m of Object.keys(p.li))xe(d,m,p.li[m]),lr(i,s,m)}if(c&&r.ct==="foreignObject"&&(n&=-2,c=!1),l&&"q:s"in u){const m=e.G;return m.B,void m.B.push(r)}return u[G]!==void 0||l&&"qonce"in u?void 0:nt(e,t,r,"root",n)}let h=cr(a,e,u);return h||a.X||a.v.hasAttribute("q:id")||(Gt(e,a),a.X=u["q:renderFn"],a.X,h=!0),h?q(rt(e,a,n),()=>bt(e,a,r,n)):bt(e,a,r,n)},bt=(e,t,r,n)=>{const s=r.lt,o=e.Y,i=(u=>{var a;const f={};for(const h of u){const d=sr(h);((a=f[d])!=null?a:f[d]=new A(":virtual",{"q:s":""},[],d)).lt.push(h)}return f})(s),l=tt(e,t),c=or(t);for(const u of Object.keys(c.slots))if(!i[u]){const f=c.slots[u],a=er(f,"root");if(a.length>0){const h=ce(f);h&&h.it&&(h.it.lt=[]),st(o,a,0,a.length-1)}}for(const u of Object.keys(c.templates)){const f=c.templates[u];f&&(i[u]&&!c.slots[u]||(Ht(o,f),c.templates[u]=void 0))}return V(Object.keys(i).map(u=>{const f=i[u],a=nr(o,c,t.v,u),h=x(a),d=Zt(h);return h.it=f,f.ft=a,nt(l,d,f,"root",n)}))},rr=(e,t,r,n,s,o,i)=>{const l=[];let c=!1;for(;s<=o;++s){const u=n[s],f=ne(e,u,i);l.push(f),Y(f)&&(c=!0)}if(c)return Promise.all(l).then(u=>qt(e.Y,t,u,r));qt(e.Y,t,l,r)},qt=(e,t,r,n)=>{for(const s of r)D(e,t,s,n)},st=(e,t,r,n)=>{for(;r<=n;++r){const s=t[r];s&&(s.ft,Ht(e,s.ft))}},nr=(e,t,r,n)=>{const s=t.slots[n];if(s)return s;const o=t.templates[n];if(o)return o;const i=Bt(e.H,n);return((l,c,u)=>{l.O.push({M:Ce,P:[c,u,c.firstChild]})})(e,r,i),t.templates[n]=i,i},sr=e=>{var t;return(t=e.q[oe])!=null?t:""},ne=(e,t,r)=>{const n=t.ct,s=e.Y.H;if(n==="#text")return t.ft=((g,v)=>g.createTextNode(v))(s,t.dt);let o,i=!!(1&r);i||n!=="svg"||(r|=1,i=!0);const l=n===":virtual",c=t.q,u="q:renderFn"in c,f=e.Y;l?o=(g=>{const v=g.createComment("qv "),b=g.createComment("/qv");return new Kt(v,b)})(s):n==="head"?(o=s.head,r|=2):(o=Ze(s,n,i),r&=-3),t.ft=o,i&&n==="foreignObject"&&(i=!1,r&=-2);const a=x(o);if(u){wt(o,t.ut);const g=c["q:renderFn"];return cr(a,e,c),Gt(e,a),a.X=g,q(rt(e,a,r),()=>{let v=t.lt;if(v.length===0)return o;v.length===1&&v[0].ct===":skipRender"&&(v=v[0].lt);const b=tt(e,a),E=or(a),C=v.map(S=>ne(b,S,r));return q(V(C),()=>{for(const S of v)S.ft,gt(f,nr(f,E,o,sr(S)),S.ft);return o})})}const h=e.G,d=l&&"q:s"in c,p=bn(f,a,c,i);if(h&&!l){const g=h.$t;if(g&&g.forEach(v=>{o.classList.add(v)}),!h.tt){h.tt=!0;for(const v of Object.keys(h.li))xe(p,v,h.li[v])}}if(d&&(h.B,wt(o,t.ut),P(o,"q:sref",h.F),h.B.push(t),f.D.push([o,h.v])),c[G]!==void 0)return o;let m=t.lt;if(m.length===0)return o;m.length===1&&m[0].ct===":skipRender"&&(m=m[0].lt);const y=m.map(g=>ne(e,g,r));return q(V(y),()=>{for(const g of m)g.ft,gt(e.Y,o,g.ft);return o})},or=e=>{var o,i;const t=(l=>l.B||(l.v.parentElement,l.B=gn(l)))(e),r={},n={},s=Array.from(e.v.childNodes).filter(tr);for(const l of t)l.ft,r[(o=l.ut)!=null?o:""]=l.ft;for(const l of s)n[(i=W(l,oe))!=null?i:""]=l;return{slots:r,templates:n}},gn=e=>((t,r,n)=>{const s=((l,c,u)=>l.ownerDocument.createTreeWalker(l,128,{acceptNode(f){const a=pe(f);return a&&W(a,"q:sref")===u?1:2}}))(t,0,n),o=[];let i=null;for(;i=s.nextNode();)o.push(pe(i));return o})(e.v.parentElement,0,e.F).map(re),Et=(e,t,r,n)=>(r in t&&t[r]!==n&&M(e,t,r,n),!0),G="dangerouslySetInnerHTML",ir={style:(e,t,r,n)=>(M(e,t.style,"cssText",sn(n)),!0),class:(e,t,r,n,s)=>{const o=Re(s),i=Re(n);return((l,c,u,f)=>{l?l.O.push({M:yt,P:[c,u,f]}):yt(c,u,f)})(e,t,o.filter(l=>l&&!i.includes(l)),i.filter(l=>l&&!o.includes(l))),!0},value:Et,checked:Et,[G]:(e,t,r,n)=>(G in t?M(e,t,G,n):"innerHTML"in t&&M(e,t,"innerHTML",n),!0),innerHTML:()=>!0},yn=(e,t,r,n,s)=>{const o=wn(r,n),i=e.li={};if(o.length===0)return i;const l=e.v;for(let c of o){if(c==="children")continue;let u=n[c];c==="className"&&(n.class=u,c="class"),c==="class"&&(n.class=u=Jt(u));const f=r[c];if(f===u)continue;if(c==="ref"){u.current=l;continue}if(Dt(c)){Ft(i,c,u);continue}const a=ir[c];a&&a(t,l,c,u,f)||(s||!(c in l)?Ge(t,l,c,u):M(t,l,c,u))}return i},wn=(e,t)=>{const r=Object.keys(t);return r.push(...Object.keys(e).filter(n=>!r.includes(n))),r},lr=(e,t,r)=>{r.includes(":")&&Ge(e,t,r,"");try{window.qwikevents&&window.qwikevents.push(Rn(r))}catch{}},bn=(e,t,r,n)=>{const s=t.v,o=Object.keys(r),i=t.li;if(o.length===0)return i;for(let l of o){if(l==="children")continue;let c=r[l];if(l==="className"&&(r.class=c,l="class"),l==="class"&&(r.class=c=Jt(c)),l==="ref"){c.current=s;continue}if(Dt(l)){lr(e,s,Ft(i,l,c));continue}const u=ir[l];u&&u(e,s,l,c,void 0)||(n||!(l in s)?Ge(e,s,l,c):M(e,s,l,c))}return i},cr=(e,t,r)=>{const n=Object.keys(r);if(n.length===0)return!1;const s=cs(e,t.Y.C);for(const o of n)ln.includes(o)||s.set(o,r[o]);return e.K},ot=(e,t,r,n)=>{if(n&&e.hasAttribute("q:s"))return void t.I.push(e);qn(e,r);const s=te(e,"elements");for(const o of s)ot(o,t,r,n)},qn=(e,t)=>{const r=ce(e);r&&os(r,t)},ge=(e,t)=>{H(t)?t.appendTo(e):e.appendChild(t)},En=(e,t)=>{H(t)?t.remove():e.removeChild(t)},Ce=(e,t,r)=>{H(t)?t.insertBeforeTo(e,me(r)):e.insertBefore(t,me(r))},Sn=(e,t,r)=>{const n={};for(let s=t;s<=r;++s){const o=e[s].ut;o!=null&&(n[o]=s)}return n},fe=(e,t)=>e.ct===t.ct&&e.ut===t.ut,kn=(e,t)=>e.ct===t,xn=()=>{const e=Rt();let t=e.g;if(t)t.ht;else{const r=e.v,n=Nt(r),s=x(r);t=Ae(decodeURIComponent(String(e.m)),n),yr(n),br(t,s)}return t.ht},it=(e,t)=>{e.vt&se||(e.vt|=se,t.wt!==void 0?(t.bt,t.yt.add(e)):(t.gt.add(e),lt(t)))},lt=e=>(e.bt===void 0&&(e.bt=ke().nextTick(()=>jn(e))),e.bt),Cn=()=>{const[e]=xn();it(e,ur(Nt(e.qt)))},jn=async e=>{const t=e.wt=new Set(e.xt);e.xt.clear(),await On(e),e.rt.forEach(i=>{t.add(i)}),e.rt.clear();const r=Xe(e.L),n=Array.from(t);Tn(n);const s=rn(r,e),o=s.Y;for(const i of n)if(!o.nt.has(i)){const l=x(i);if(l.X){i.isConnected,o.N.push(l);try{await rt(s,l,_n(i.parentElement))}catch(c){ue(c)}}}return o.O.push(...o.R),o.O.length===0?void St(e,o):ke().raf(()=>{(({Y:i})=>{Qr(i)})(s),St(e,o)})},_n=e=>{let t=0;return e&&(e.namespaceURI===Vt&&(t|=1),e.tagName==="HEAD"&&(t|=2)),t},St=async(e,t)=>{await An(e,(r,n)=>(r.vt&ar)!=0&&(!n||t.nt.has(r.qt))),e.rt.forEach(r=>{e.xt.add(r)}),e.rt.clear(),e.wt=void 0,e.bt=void 0,e.xt.size+e.gt.size>0&&lt(e)},On=async e=>{const t=[],r=e.L,n=[],s=i=>(i.vt&fr)!=0,o=i=>(i.vt&Mn)!=0;e.gt.forEach(i=>{s(i)&&(n.push(q(i.g.St(r),()=>i)),e.gt.delete(i)),o(i)&&(t.push(q(i.g.St(r),()=>i)),e.gt.delete(i))});do if(e.yt.forEach(i=>{s(i)?n.push(q(i.g.St(r),()=>i)):o(i)?t.push(q(i.g.St(r),()=>i)):e.gt.add(i)}),e.yt.clear(),n.length>0){const i=await Promise.all(n);Me(i),await Promise.all(i.map(l=>we(l,e))),n.length=0}while(e.yt.size>0);if(t.length>0){const i=await Promise.all(t);Me(i),i.forEach(l=>we(l,e))}},An=async(e,t)=>{const r=[],n=e.L;e.gt.forEach(s=>{t(s,!1)&&(r.push(q(s.g.St(n),()=>s)),e.gt.delete(s))});do if(e.yt.forEach(s=>{t(s,!0)?r.push(q(s.g.St(n),()=>s)):e.gt.add(s)}),e.yt.clear(),r.length>0){const s=await Promise.all(r);Me(s),await Promise.all(s.map(o=>we(o,e))),r.length=0}while(e.yt.size>0)},Tn=e=>{e.sort((t,r)=>2&t.compareDocumentPosition(me(r))?1:-1)},Me=e=>{e.sort((t,r)=>t.qt===r.qt?t.jt<r.jt?-1:1:(2&t.qt.compareDocumentPosition(me(r.qt)))!=0?1:-1)},kt=Symbol("ContainerState"),ur=e=>{let t=e[kt];return t||(e[kt]=t=Pn(e)),t},Pn=e=>{const t={L:e,kt:new WeakMap,T:null,gt:new Set,yt:new Set,xt:new Set,rt:new Set,bt:void 0,wt:void 0,Ot:{},et:0,A:new Set,Mt:!1};return t.T=$n(t),t},$n=e=>{const t=new Map,r=new Map,n=i=>(le(i),t.get(i)),s=(i,l)=>{let c=r.get(i);c||r.set(i,c=new Set),c.add(l)};return{Pt:n,Et:(i,l)=>{let c=n(i);if(!c){const u=l||new Map;u.forEach((f,a)=>{s(a,u)}),t.set(i,c={At:u,Ct(f,a){if(a==null)u.set(f,null);else{let h=u.get(f);h===void 0&&u.set(f,h=new Set),h&&h.add(a)}s(f,u)},Rt(f){u.forEach((a,h)=>{a!==null&&f&&!a.has(f)||((d,p)=>{ie(d)?((m,y)=>{yr(y.L);const g=x(m);g.X,g.K||(g.K=!0,y.wt!==void 0?(y.bt,y.rt.add(m)):(y.xt.add(m),lt(y)))})(d,p):it(d,p)})(h,e)})}})}return c},ot:i=>{const l=r.get(i);l&&(l.forEach(c=>{c.delete(i)}),r.delete(i),l.clear())}}},Ne=(e,t,r)=>{if(!r.fill(e)&&e&&typeof e=="object"){if(j(e))for(let n=0;n<e.length;n++){const s=e[n];typeof s=="string"?e[n]=t(s):Ne(s,t,r)}else if(Wr(e))for(const n of Object.keys(e)){const s=e[n];typeof s=="string"?e[n]=t(s):Ne(s,t,r)}}},Ln={"!":(e,t)=>{var r;return(r=t.kt.get(e))!=null?r:dr(e,t)},"%":e=>vr(e),"~":e=>Promise.resolve(e),_:e=>Promise.reject(e)},xt=e=>ee(e)&&e.hasAttribute("q:container"),Wn=e=>{const t=Ve(e);return!!ie(t)&&t.hasAttribute("q:id")},Ye=e=>e.toString(36),ye=e=>parseInt(e,36),Rn=e=>{const t=e.indexOf(":");return e.slice(t+1).replace(/-./g,r=>r[1].toUpperCase())},ar=1,fr=2,se=4,Ct=8,Mn=16,Hs=(e,t)=>{const{get:r,set:n,ctx:s,i:o}=B();if(r)return;const i=s.o,l=s.u.Y.C,c=new qe(se|fr,o,i,e,void 0),u=x(i);n(!0),e.St(l.L),u.k||(u.k=[]),u.k.push(c),Nr(s,()=>we(c,l,s.u))},Bs=(e,t)=>{var a;const{get:r,set:n,i:s,ctx:o}=B();if(r)return;const i=o.o,l=new qe(ar,s,i,e,void 0),c=(a=t==null?void 0:t.eagerness)!=null?a:"visible",u=x(i),f=o.u.Y.C;n(!0),u.k||(u.k=[]),u.k.push(l),Fn(l,c),e.St(f.L),it(l,f)},hr=e=>!!e.Ht,we=(e,t,r)=>(e.vt,hr(e)?Nn(e,t):Yn(e,t,r)),Nn=(e,t,r)=>{e.vt&=~se,be(e);const n=e.qt,s=z(n,void 0,"WatchEvent"),{T:o}=t,i=e.g.getFn(s,()=>{o.ot(e)}),l=[],c=e.Ht,u=_e(c),f={track:(g,v)=>{const b=le(g);return b?o.Et(b).Ct(e,v):ct(ae(qr),g),v?g[v]:g},cleanup(g){l.push(g)},previous:u.resolved};let a,h,d=!1;const p=(g,v)=>!d&&(d=!0,g?(d=!0,c.state="resolved",c.resolved=v,c.error=void 0,a(v)):(d=!0,c.state="rejected",c.resolved=void 0,c.error=v,h(v)),!0);Ke(s,()=>{c.state="pending",c.resolved=void 0,c.promise=new Promise((g,v)=>{a=g,h=v})}),e.Dt=mr(()=>{l.forEach(g=>g())});const m=He(()=>q(r,()=>i(f)),g=>{p(!0,g)},g=>{p(!1,g)}),y=u.timeout;return y?Promise.race([m,Mr(y).then(()=>{p(!1,"timeout")&&be(e)})]):m},Yn=(e,t,r)=>{e.vt&=~se,be(e);const n=e.qt,s=z(n,void 0,"WatchEvent"),{T:o}=t,i=e.g.getFn(s,()=>{o.ot(e)}),l=[];e.Dt=mr(()=>{l.forEach(u=>u())});const c={track:(u,f)=>{const a=le(u);return a?o.Et(a).Ct(e,f):ct(ae(qr),u),f?u[f]:u},cleanup(u){l.push(u)}};return He(()=>i(c),u=>{I(u)&&l.push(u)},u=>{Qt(u,n,r)})},be=e=>{const t=e.Dt;if(t){e.Dt=void 0;try{t()}catch(r){ue(r)}}},Dn=e=>{e.vt&Ct?(e.vt&=~Ct,(0,e.g)()):be(e)},Fn=(e,t)=>{t==="load"?pt("qinit",jt(e)):t==="visible"&&pt("qvisible",jt(e))},jt=e=>{const t=e.g;return Oe(t.Qt,"_hW",Cn,null,null,[e],t._t)};class qe{constructor(t,r,n,s,o){this.vt=t,this.jt=r,this.qt=n,this.g=s,this.Ht=o}}const Un=e=>({__brand:"resource",promise:void 0,resolved:void 0,error:void 0,state:"pending",timeout:e==null?void 0:e.timeout}),In=e=>N(e)&&e.__brand==="resource",zn="",Hn={prefix:"",test:e=>ut(e),serialize:(e,t,r)=>Er(e,{Wt:t}),prepare:(e,t)=>Ae(e,t.L),fill:(e,t)=>{e.j&&e.j.length>0&&(e.ht=e.j.map(t),e.j=null)}},Bn={prefix:"",test:e=>{return N(t=e)&&t instanceof qe;var t},serialize:(e,t)=>((r,n)=>{let s=`${Ye(r.vt)} ${Ye(r.jt)} ${n(r.g)} ${n(r.qt)}`;return hr(r)&&(s+=` ${n(r.Ht)}`),s})(e,t),prepare:e=>(t=>{const[r,n,s,o,i]=t.split(" ");return new qe(ye(r),ye(n),o,s,i)})(e),fill:(e,t)=>{e.qt=t(e.qt),e.g=t(e.g),e.Ht&&(e.Ht=t(e.Ht))}},Kn={prefix:"",test:e=>In(e),serialize:(e,t)=>((r,n)=>{const s=r.state;return s==="resolved"?`0 ${n(r.resolved)}`:s==="pending"?"1":`2 ${n(r.error)}`})(e,t),prepare:e=>(t=>{const[r,n]=t.split(" "),s=Un(void 0);return s.promise=Promise.resolve(),r==="0"?(s.state="resolved",s.resolved=n):r==="1"?(s.state="pending",s.promise=new Promise(()=>{})):r==="2"&&(s.state="rejected",s.error=n),s})(e),fill:(e,t)=>{if(e.state==="resolved")e.resolved=t(e.resolved),e.promise=Promise.resolve(e.resolved);else if(e.state==="rejected"){const r=Promise.reject(e.error);r.catch(()=>null),e.error=t(e.error),e.promise=r}}},Xn={prefix:"",test:e=>e instanceof URL,serialize:e=>e.href,prepare:e=>new URL(e),fill:void 0},Qn={prefix:"",test:e=>e instanceof Date,serialize:e=>e.toISOString(),prepare:e=>new Date(e),fill:void 0},Jn={prefix:"\x07",test:e=>e instanceof RegExp,serialize:e=>`${e.flags} ${e.source}`,prepare:e=>{const t=e.indexOf(" "),r=e.slice(t+1),n=e.slice(0,t);return new RegExp(r,n)},fill:void 0},Gn={prefix:"",test:e=>e instanceof Error,serialize:e=>e.message,prepare:e=>{const t=new Error(e);return t.stack=void 0,t},fill:void 0},Zn={prefix:"",test:e=>Yr(e),serialize:void 0,prepare:(e,t,r)=>r,fill:void 0},Ee=Symbol("serializable-data"),Vn={prefix:"",test:e=>xs(e),serialize:(e,t,r)=>{const[n]=e[Ee];return Er(n,{Wt:t})},prepare:(e,t)=>{const r=e.indexOf("{"),n=r==-1?e:e.slice(0,r),s=Ae(n,t.L);return Sr(s)},fill:(e,t)=>{const[r]=e[Ee];r.j&&r.j.length>0&&(r.ht=r.j.map(t),r.j=null)}},es=[Hn,Bn,Kn,Xn,Qn,Jn,Gn,Zn,Vn,{prefix:"",test:e=>typeof e=="function"&&e.__qwik_serializable__!==void 0,serialize:e=>e.toString(),prepare:e=>{const t=new Function("return "+e)();return t.__qwik_serializable__=!0,t},fill:void 0}],dr=(e,t,r=0)=>t.kt.get(e)||je(e,t,r,void 0),je=(e,t,r,n)=>{_e(e),t.kt.has(e);const s=t.T.Et(e,n),o=new Proxy(e,new rs(t,s,r));return t.kt.set(e,o),o},De=Symbol(),ts=Symbol(),_t=Symbol();class rs{constructor(t,r,n){this.C=t,this.Ut=r,this.vt=n}get(t,r){if(typeof r=="symbol")return r===De?t:r===_t?this.vt:r===ts?this.Ut.At:t[r];let n;const s=$e(),o=(1&this.vt)!=0,i=(2&this.vt)!=0;s&&(n=s.$);let l=t[r];if(he(l)?l=l.mut:i&&(n=null),n){const c=j(t);this.Ut.Ct(n,c?void 0:r)}return o?ns(l,this.C):l}set(t,r,n){if(typeof r=="symbol")return t[r]=n,!0;if((2&this.vt)!=0)throw O(ps);const s=(1&this.vt)!=0?_e(n):n;return j(t)?(t[r]=s,this.Ut.Rt(),!0):(t[r]!==s&&(t[r]=s,this.Ut.Rt(r)),!0)}has(t,r){return r===De||r===_t||Object.prototype.hasOwnProperty.call(t,r)}ownKeys(t){let r=null;const n=$e();return n&&(r=n.$),r&&this.Ut.Ct(r),Object.getOwnPropertyNames(t)}}const ns=(e,t)=>{if(ut(e))return e;if(N(e)){if(Object.isFrozen(e))return e;const r=_e(e);return r!==e||Yt(r)?e:ss(r)?t.kt.get(e)||dr(e,t,1):e}return e},pr=new WeakSet,ss=e=>!N(e)&&!I(e)||!pr.has(e),mr=e=>(e!=null&&pr.add(e),e),vr=e=>new gr(e);class gr{constructor(t){this.mut=t}}const he=e=>e instanceof gr,_e=e=>{var t;return N(e)&&(t=le(e))!=null?t:e},le=e=>e[De],yr=e=>{W(e,"q:container")==="paused"&&(t=>{if(!xt(t))return void Fe();const r=Xe(),n=(a=>{let h=a.lastElementChild;for(;h;){if(h.tagName==="SCRIPT"&&W(h,"type")==="qwik/json")return h;h=h.previousElementSibling}})(t===r.documentElement?r.body:t);if(!n)return void Fe();n.remove();const s=ur(t);((a,h)=>{const d=a.ownerDocument.head;a.querySelectorAll("style[q\\:style]").forEach(p=>{h.A.add(W(p,"q:style")),d.appendChild(p)})})(t,s);const o=JSON.parse((n.textContent||"{}").replace(/\\x3C(\/?script)/g,"<$1")),i=new Map,l=a=>((h,d,p,m)=>{if(typeof h=="string"&&h.length,h.startsWith("#"))return d.has(h),d.get(h);const y=ye(h);p.length;let g=p[y];for(let v=h.length-1;v>=0;v--){const b=h[v],E=Ln[b];if(!E)break;g=E(g,m)}return g})(a,i,o.objs,s);let c=0;((a,h)=>{h(a);const d=a.ownerDocument.createTreeWalker(a,129,{acceptNode:y=>xt(y)?2:h(y)?1:3}),p=[];let m=null;for(;m=d.nextNode();)p.push(Ve(m));return p})(t,Wn).forEach(a=>{const h=W(a,"q:id"),d=x(a);d.F=h,ee(a)&&(d.it=re(a)),i.set("#"+h,a),c=Math.max(c,ye(h))}),s.et=++c;const u=((a,h,d)=>{const p=new Map;return{prepare(m){for(const y of es){const g=y.prefix;if(m.startsWith(g)){const v=y.prepare(m.slice(g.length),h,d);return y.fill&&p.set(v,y),v}}return m},fill(m){const y=p.get(m);return!!y&&(y.fill(m,a,h),!0)}}})(l,s,r);((a,h,d,p,m)=>{for(let y=0;y<a.length;y++){const g=a[y];Z(g)&&(a[y]=g===zn?void 0:m.prepare(g))}for(let y=0;y<h.length;y++){const g=a[y],v=h[y];if(v){const b=new Map;let E=0;for(const C of Object.keys(v)){const S=v[C];if(C==="$"){E=S;continue}const K=d(C);if(!K)continue;const Pr=S===null?null:new Set(S);b.set(K,Pr)}je(g,p,E,b)}}})(o.objs,o.subs,l,s,u);for(const a of o.objs)Ne(a,l,u);for(const a of Object.keys(o.ctx)){a.startsWith("#");const h=o.ctx[a],d=i.get(a),p=x(d),m=h.r,y=h.s,g=h.h,v=h.c,b=h.w;if(m&&(ee(d),p.Nt=m.split(" ").map(l),p.li=Ir(p,t)),y&&(p.p=y.split(" ").map(l)),b&&(p.k=b.split(" ").map(l)),v){p.W=new Map;for(const E of v.split(" ")){const[C,S]=E.split("=");p.W.set(C,l(S))}}if(g){const[E,C]=g.split(" "),S=d.getAttribute("q:sstyle");p.$t=S?S.split(" "):null,p.J=!0,p.q=l(E),p.X=l(C)}}var f;P(t,"q:container","resumed"),(f=t)&&typeof CustomEvent=="function"&&f.dispatchEvent(new CustomEvent("qresume",{detail:void 0,bubbles:!0,composed:!0}))})(e)},ce=e=>e._qc_,x=e=>{let t=ce(e);return t||(e._qc_=t={K:!1,J:!1,tt:!1,F:"",v:e,Nt:[],li:{},k:null,p:null,B:null,$t:null,st:null,q:null,it:null,X:null,W:null}),t},os=(e,t)=>{var n;const r=e.v;(n=e.k)==null||n.forEach(s=>{t.ot(s),Dn(s)}),e.X&&t.ot(r),e.X=null,e.p=null,e.k=null,e.K=!1,r._qc_=void 0},Ot=["on","window:on","document:on"],is=["on","on-window","on-document"],wr=e=>{let t="on";for(let r=0;r<Ot.length;r++){const n=Ot[r];if(e.startsWith(n)){t=is[r],e=e.slice(n.length);break}}return t+":"+(e.startsWith("-")?Je(e.slice(1)):e.toLowerCase())},ls=(e,t)=>je(e,t,2),cs=(e,t)=>{let r=e.q;r||(e.q=r=ls({},t));const n=le(r),s=t.T.Et(n);return{set(o,i){let l=n[o];he(l)&&(l=l.mut),t.Mt?he(i)?(i=i.mut,n[o]=i):n[o]=vr(i):(n[o]=i,he(i)&&(i=i.mut)),l!==i&&s.Rt(o)}}},br=(e,t)=>(e.j,e.ht=e.j.map(r=>{const n=parseInt(r,10),s=t.Nt[n];return t.Nt.length,s})),ue=(e,...t)=>{const r=e instanceof Error?e:new Error(e);return typeof globalThis._handleError=="function"&&e instanceof Error?globalThis._handleError(e,t):console.error("%cQWIK ERROR","",r.message,...us(t),r.stack),r},ct=(e,...t)=>ue(e,...t),Fe=(e,...t)=>{},us=e=>e,as=0,fs=6,hs=13,ds=14,ps=17,ms=20,vs=25,qr=26,O=(e,...t)=>{const r=ae(e);return ct(r,...t)},ae=e=>`Code(${e})`,ut=e=>typeof e=="function"&&typeof e.getSymbol=="function",Oe=(e,t,r,n,s,o,i)=>{let l;const c=v=>{l||(l=v)},u=async v=>{if(v&&c(v),r)return r;if(n)return r=n().then(b=>r=b[t]);{if(!l)throw new Error(`QRL '${e}#${t||"default"}' does not have an attached container`);const b=ke().importSymbol(l,e,t);return r=q(b,E=>r=E)}},f=v=>r||u(v),a=(v,b)=>(...E)=>{const C=f();return q(C,S=>{if(I(S)){if(b&&b()===!1)return;const K={...h(v),g:y};return ys(t,K.v),Ke(K,S,...E)}throw O(10)})},h=v=>v==null?z():j(v)?Mt(v):v,d=async function(...v){return await a()(...v)},p=i!=null?i:t,m=gs(p),y=d;return Object.assign(d,{getSymbol:()=>p,getHash:()=>m,resolve:u,St:f,Z:c,Qt:e,_t:t,Kt:i,S:m,getFn:a,j:s,ht:o})},gs=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e},ys=(e,t)=>{typeof document=="object"&&document.dispatchEvent(new CustomEvent("qsymbol",{bubbles:!1,detail:{symbol:e,element:t,timestamp:performance.now()}}))};let ws=0;const bs=/\(\s*(['"])([^\1]+)\1\s*\)/,qs=/Promise\s*\.\s*resolve/,Es=/[\\/(]([\w\d.\-_]+\.(js|ts)x?):/,At=new Map,Ss=(e,t,r=T)=>{let n="",s=null;if(Z(e))n=e;else{if(!I(e))throw O(12,e);{s=e;const o=At.get(t);if(o)n=o;else{let i;const l=String(e);if((i=l.match(bs))&&i[2])n=i[2];else{if(!(i=l.match(qs)))throw O(11,l);{const c="QWIK-SELF",u=new Error(c).stack.split(`
`),f=u.findIndex(a=>a.includes(c));i=u[f+2].match(Es),n=i?i[1]:"main"}}At.set(t,n)}}}return Oe(n,t,null,s,null,r,null)},Er=(e,t={})=>{var u;let r=e._t,n=e.Qt;const s=(u=e.Kt)!=null?u:r,o=ke();if(o){const f=o.chunkForSymbol(s);f&&(n=f[1],e.Kt||(r=f[0]))}n.startsWith("./")&&(n=n.slice(2));const i=[n];r&&r!=="default"&&i.push("#",r);const l=e.j,c=e.ht;if(c&&c.length){if(t.Wt){const f=c.map(t.Wt);i.push(`[${f.join(" ")}]`)}else if(t.Jt){const f=c.map(t.Jt);i.push(`[${f.join(" ")}]`)}}else l&&l.length>0&&i.push(`[${l.join(" ")}]`);return i.join("")},Ae=(e,t)=>{const r=e.length,n=Tt(e,0,"#"),s=Tt(e,n,"["),o=Math.min(n,s),i=e.substring(0,o),l=n==r?n:n+1,c=s,u=l==c?"default":e.substring(l,c),f=s,a=r,h=f===a?T:e.substring(f+1,a-1).split(" ");i==="/runtimeQRL"&&ue(ae(2),e);const d=Oe(i,u,null,null,h,null,null);return t&&d.Z(t),d},Tt=(e,t,r)=>{const n=e.length,s=e.indexOf(r,t==n?0:t);return s==-1?n:s},ks=e=>((t,r=T)=>Oe("/runtimeQRL","s"+ws++,t,null,null,r,null))(e),Sr=e=>{function t(r,n){const s=e.S;return Ut(Qe,{"q:renderFn":e,...r},s+":"+(n||""))}return t[Ee]=[e],t},xs=e=>typeof e=="function"&&e[Ee]!==void 0,Ks=e=>{var r;const t=(r=e.name)!=null?r:"";return Ut(Qe,{"q:s":""},t)},Xs=(e,t)=>{const{get:r,set:n,ctx:s}=B();if(r!=null)return r;const o=I(e)?e():e;if((t==null?void 0:t.reactive)===!1)return n(o),o;{const i=s.u.Y.C,l=je(o,i,t!=null&&t.recursive?1:0,void 0);return n(l),l}};function Qs(e,t){var r;return(r=Be().u.Y.C.Ot[e])!=null?r:t}const Pt=new Map,Cs=(e,t)=>{let r=Pt.get(t);return r||Pt.set(t,r=js(e,t)),r},js=(e,t)=>{const r=e.length,n=[],s=[];let o=0,i=o,l=U,c=0;for(;o<r;){let d=e.charCodeAt(o++);d===Rs&&(o++,d=Or);const p=Fs[l];for(let m=0;m<p.length;m++){const y=p[m],[g,v,b]=y;if((g===c||g===w||g===Se&&de(c)||g===Ue&&Lt(c))&&(v===d||v===w||v===Se&&de(d)||v===_&&!de(d)&&d!==ft||v===Ue&&Lt(d))&&(y.length==3||a(y))){if(y.length>3&&(d=e.charCodeAt(o-1)),b===k||b==L){b===L&&(l!==kr||h()?$t(d)||f(o-(v==_?1:v==Ie?2:0)):($t(d)?u(o-2):f(o-2),i++)),v===_&&(o--,d=c);do l=s.pop()||U,l===R&&(u(o-1),i++);while(_s(l))}else s.push(l),l===R&&b===U?(u(o-8),i=o):b===xr&&f(o-2),l=b;break}}c=d}return u(o),n.join("");function u(d){n.push(e.substring(i,d)),i=d}function f(d){l===R||h()||(u(d),n.push(".","\u2B50\uFE0F",t))}function a(d){let p=0;if(e.charCodeAt(o)===ze){for(let m=1;m<10;m++)if(e.charCodeAt(o+m)===ze){p=m+1;break}}e:for(let m=3;m<d.length;m++){const y=d[m];for(let g=0;g<y.length;g++)if((e.charCodeAt(o+g+p)|Ns)!==y.charCodeAt(g))continue e;return o+=y.length+p,!0}return!1}function h(){return s.indexOf(R)!==-1||s.indexOf(at)!==-1}},de=e=>e>=$s&&e<=Ls||e>=Or&&e<=Ws||e>=Ys&&e<=Ds||e>=128||e===Ms||e===ze,$t=e=>e===F||e===ft||e===Ar||e===_r||de(e),_s=e=>e===Cr||e===at||e===jr||e===R,Lt=e=>e===Ps||e===Os||e===As||e===Ts,U=0,kr=2,R=5,xr=6,at=10,Cr=11,jr=12,k=17,L=18,w=0,Se=1,_=2,Ue=3,Os=9,As=10,Ts=13,Ps=32,_r=35,Ie=41,ze=45,ft=46,$s=48,Ls=57,F=58,Or=65,Ws=90,Ar=91,Rs=92,Ms=95,Ns=32,Ys=97,Ds=122,$=[[w,39,14],[w,34,15],[w,47,16,"*"]],Fs=[[[w,42,kr],[w,Ar,7],[w,F,xr,":"],[w,F,R,"global"],[w,F,3,"has","host-context","not","where","is","matches","any"],[w,F,4],[w,Se,1],[w,ft,1],[w,_r,1],[w,64,at,"keyframe"],[w,64,Cr,"media","supports"],[w,64,jr],[w,123,13],[47,42,16],[w,59,k],[w,125,k],[w,Ie,k],...$],[[w,_,L]],[[w,_,L]],[[w,40,U],[w,_,L]],[[w,40,8],[w,_,L]],[[w,40,U],[w,_,k]],[[w,_,k]],[[w,93,L],[w,39,14],[w,34,15]],[[w,Ie,k],...$],[[w,125,k],...$],[[w,125,k],[Ue,Se,1],[w,F,R,"global"],[w,123,13],...$],[[w,123,U],[w,59,k],...$],[[w,59,k],[w,123,9],...$],[[w,125,k],[w,123,13],[w,40,8],...$],[[w,39,k]],[[w,34,k]],[[42,47,k]]],Js=e=>{Tr(e,t=>t,!1)},Gs=e=>{Tr(e,Cs,!0)},Tr=(e,t,r)=>{const{get:n,set:s,ctx:o,i}=B();if(n)return n;const l=o.u,c=(a=i,`${((p,m=0)=>{if(p.length===0)return m;for(let y=0;y<p.length;y++)m=(m<<5)-m+p.charCodeAt(y),m|=0;return Number(Math.abs(m)).toString(36)})(e.S)}-${a}`),u=l.Y.C,f=x(o.o);var a;if(s(c),f.st||(f.st=[]),f.$t||(f.$t=[]),r&&f.$t.push((p=>"\u2B50\uFE0F"+p)(c)),((p,m)=>p.A.has(m))(u,c))return c;u.A.add(c);const h=e.St(u.L),d=p=>{f.st,f.st.push({styleId:c,content:t(p,c)})};return Y(h)?o.l.push(h.then(d)):d(h),c};const Zs=Sr(Ss(()=>Wt(()=>import("./q-16528bf7.js").then(e=>e.k),[]),"s_3sccYCDd1Z0"));export{Zr as A,Is as C,Cn as K,Bs as O,zs as R,Js as W,Ut as X,Xs as Y,Wt as _,xn as a,Us as b,Gs as c,Hs as j,Sr as m,Qs as n,Zs as r,zt as t,Ss as u,mr as w,Ks as x};

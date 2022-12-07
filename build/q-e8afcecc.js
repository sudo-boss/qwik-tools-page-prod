import{m as i,u as d,_ as m}from"./q-ad35e21e.js";function p(t){let a="";const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<t;s++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}function g(t,a){let e="";for(let s=0;s<t;s++)e+=a.charAt(Math.floor(Math.random()*a.length));return e}function S(t){return t[Math.floor(Math.random()*t.length)]}function v(){const t=new Date().getDate();return p(4)+t}const u={randomString:p,uniqueString:v,randomWord:S,randomStringCustom:g},f=t=>{const e=`col-${u.uniqueString()}`,s=$(t),{xs:l,sm:o,md:n,lg:r,xl:c,xxl:h}=s,x=`
    .${e} {
      margin-top: var(--vSpace);
      margin-bottom: var(--vSpace);
      margin-left: var(--hSpace);
      margin-right: var(--hSpace);
      display: inline-block;
      vertical-align: inherit;
    }
    /* xxl: Pantallas grandes (desktops de menos de 1200px) */
    @media (min-width: 1600px) {
      .${e} {
        width: calc(${h}% - var(--hSpace) * 2);
      }
    }

    /* xl: Pantallas grandes (desktops de menos de 1200px) */
    @media (max-width: 1599px) {
      .${e} {
        width: calc(${c}% - var(--hSpace) * 2);
      }
    }

    /* lg: Pantallas grandes (desktops de menos de 1200px) */
    @media (max-width: 1200px) {
      .${e} {
        width: calc(${r}% - var(--hSpace) * 2);
      }
    }

    /* md: Pantallas medianas (tablets de menos de 992px) */
    @media (max-width: 992px) {
      .${e} {
        width: calc(${n}% - var(--hSpace) * 2);
      }
    }

    /* sm: Pantallas peque\xF1as (m\xF3viles en landscape de menos de 768px) */
    @media (max-width: 768px) {
      .${e} {
        width: calc(${o}% - var(--hSpace) * 2);
      }
    }

    /* xs: Pantallas muy peque\xF1as (m\xF3viles en portrait de menos de 576px) */
    @media (max-width: 576px) {
      .${e} {
        width: calc(${l}% - var(--hSpace) * 2);
      }
    }
  `;return{parentClassName:e,styles:x}};function $(t){const{span:a,xs:e,sm:s,md:l,lg:o,xl:n,xxl:r}=t;return{span:a||n||100,xs:e||a||n||100,sm:s||a||n||100,md:l||a||n||100,lg:o||a||n||100,xl:n||a||n||100,xxl:r||a||n||100}}const b=i(d(()=>m(()=>import("./q-eb901dae.js"),["build/q-eb901dae.js","build/q-ad35e21e.js","build/q-f4d10ee2.css"]),"s_upRbwvDy6xk")),_=t=>{const{hSpace:a,vSpace:e,debug:s}=t,o=`row-${u.uniqueString()}`,n=`
  .${o} {
      --vSpace: ${e}px;
      --hSpace: ${a}px;
    }
  `,r=`
  .${o}{
    background: #212121;
  }
  .${o} .forge-col-element:nth-child(1n){
    background: #0040e3;
  }
  .${o} .forge-col-element:nth-child(4n){
      background: #18b6f6;
    }
  .${o} .forge-col-element:nth-child(3n){
      background: #7b0fab;
    }
  `,c=s?n+r:n;return{parentClassName:o,styles:c}},q=i(d(()=>m(()=>import("./q-6010084f.js"),["build/q-6010084f.js","build/q-ad35e21e.js","build/q-f4d10ee2.css"]),"s_p1awvntAOS4"));export{b as C,q as R,f as a,_ as b};

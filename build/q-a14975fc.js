import{Y as _,u as a,_ as h,O as d,X as n,a as l,K as m}from"./q-3a012cbc.js";import{K as E}from"./q-3a012cbc.js";import{a as s}from"./q-866ad5e7.js";function c(e){let t="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<e;o++)t+=r.charAt(Math.floor(Math.random()*r.length));return t}function f(e,t){let r="";for(let o=0;o<e;o++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}function p(e){return e[Math.floor(Math.random()*e.length)]}function P(){const e=new Date().getDate();return c(4)+e}const u={randomString:c,uniqueString:P,randomWord:p,randomStringCustom:f},g=()=>{const e=_({phrase:u.randomWord(s.english)}),t=a(()=>h(()=>Promise.resolve().then(()=>i),void 0),"s_tPYOQP6hQfY",[e]);d(a(()=>h(()=>Promise.resolve().then(()=>i),void 0),"s_KAzp7L0AZ0w",[t]));const r=a(()=>h(()=>Promise.resolve().then(()=>i),void 0),"s_zH6ydh1p5Zo",[e]);return n("a",{href:"/donations",children:n("blockquote",{class:"DonationPhrases",children:[e.phrase," ",n("b",{children:"-"})," ",n("cite",{children:r()})]})})},v=()=>{const[e]=l();return e.phrase===s.english[4]?"Malcolm in the Middle":e.phrase===s.english[5]?"Gollum":"Forge Team"},A=()=>{const[e]=l();e.phrase=u.randomWord(s.english)},D=()=>{const[e]=l(),t=setInterval(()=>e(),9e3);return()=>clearInterval(t)},i=Object.freeze(Object.defineProperty({__proto__:null,s_AsTuy0HDDG4:g,s_zH6ydh1p5Zo:v,s_tPYOQP6hQfY:A,s_KAzp7L0AZ0w:D,_hW:m},Symbol.toStringTag,{value:"Module"}));export{E as _hW,g as s_AsTuy0HDDG4,D as s_KAzp7L0AZ0w,A as s_tPYOQP6hQfY,v as s_zH6ydh1p5Zo};

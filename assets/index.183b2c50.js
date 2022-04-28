const u=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function m(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=m(e);fetch(e.href,t)}};u();const d=window.matchMedia("(prefers-color-scheme: dark)"),s=document.getElementById("dark-selector"),r=document.getElementById("theme-btn"),o=document.querySelector("#menu"),a=document.querySelector("[role='menubar']"),g=document.querySelector("#open-btn"),h=document.querySelector("#close-btn");localStorage.getItem("colorTheme")==="dark"||!localStorage.getItem("colorTheme")&&d.matches?(s.classList.add("dark"),r.childNodes[1].classList.remove("hidden")):(localStorage.getItem("colorTheme")==="light"||!localStorage.getItem("colorTheme")&&!d)&&(s.classList.remove("dark"),r.childNodes[3].classList.remove("hidden"));r.addEventListener("click",()=>{r.childNodes[1].classList.toggle("hidden"),r.childNodes[3].classList.toggle("hidden"),localStorage.getItem("colorTheme")==="light"?(s.classList.add("dark"),localStorage.setItem("colorTheme","dark")):(s.classList.remove("dark"),localStorage.setItem("colorTheme","light"))});o.addEventListener("click",()=>{const l=JSON.parse(o.getAttribute("aria-expanded"));l?o.setAttribute("aria-label","Open Menu"):o.setAttribute("aria-label","Close Menu"),o.setAttribute("aria-expanded",!l),a.classList.toggle("hidden"),a.classList.toggle("flex"),g.classList.toggle("hidden"),h.classList.toggle("hidden")});
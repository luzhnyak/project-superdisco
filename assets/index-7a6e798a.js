(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",function(){var n=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),r=document.querySelectorAll(".js-modal-close");n.forEach(function(c){c.addEventListener("click",function(e){e.preventDefault();var o=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+o+'"]');l.classList.add("active"),t.classList.add("active"),bodyScrollLock.disableBodyScroll(document.body)})}),r.forEach(function(c){c.addEventListener("click",function(e){var o=this.closest(".modal");o.classList.remove("active"),t.classList.remove("active")})}),document.body.addEventListener("keyup",function(c){var e=c.keyCode;e==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),bodyScrollLock.enableBodyScroll(document.body))},!1),t.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),bodyScrollLock.enableBodyScroll(document.body)})});const s="active",d=document.querySelector(".modal-thank-you"),u=document.querySelector(".thank-form"),a=document.querySelector(".overlay");document.querySelector(".contacts-button");const m=document.querySelectorAll(".close-btn"),y=document.querySelector(".feedback-email"),f=()=>{d.classList.add(s),a.classList.add(s),console.log("first"),bodyScrollLock.disableBodyScroll(document.body)},i=()=>{d.classList.remove(s),a.classList.remove(s),y.value="",bodyScrollLock.enableBodyScroll(document.body)};m.forEach(n=>{n.addEventListener("click",t=>{t.stopPropagation(),i()})});u.addEventListener("submit",n=>{n.preventDefault(),setTimeout(f,300),setTimeout(i,1e4)});(()=>{const n=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),c=document.querySelectorAll(".js-link"),e=()=>{console.log("first");const o=t.getAttribute("aria-expanded")==="true"||!1;t.setAttribute("aria-expanded",!o),n.classList.toggle("is-open");const l=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)};t.addEventListener("click",e),r.addEventListener("click",e),c.forEach(function(o){o.addEventListener("click",e)}),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(n.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();

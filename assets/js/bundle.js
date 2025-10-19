(()=>{var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var i=([e,o,a])=>{let r=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(o).forEach(t=>{r.setAttribute(t,String(o[t]))}),a?.length&&a.forEach(t=>{let f=i(t);r.appendChild(f)}),r},n=(e,o={})=>{let r={...s,...o};return i(["svg",r,e])};var h=e=>Array.from(e.attributes).reduce((o,a)=>(o[a.name]=a.value,o),{}),S=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",g=e=>e.flatMap(S).map(a=>a.trim()).filter(Boolean).filter((a,r,t)=>t.indexOf(a)===r).join(" "),w=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(o,a,r)=>a.toUpperCase()+r.toLowerCase()),u=(e,{nameAttr:o,icons:a,attrs:r})=>{let t=e.getAttribute(o);if(t==null)return;let f=w(t),l=a[f];if(!l)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);let p=h(e),m={...s,"data-lucide":t,...r,...p},x=g(["lucide",`lucide-${t}`,p,r]);x&&Object.assign(m,{class:x});let C=n(l,m);return e.parentNode?.replaceChild(C,e)};var d=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];var c=({icons:e={},nameAttr:o="data-lucide",attrs:a={},root:r=document}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof r>"u")throw new Error("`createIcons()` only works in a browser environment.");let t=r.querySelectorAll(`[${o}]`);if(Array.from(t).forEach(f=>u(f,{nameAttr:o,icons:e,attrs:a})),o==="data-lucide"){let f=r.querySelectorAll("[icon-name]");f.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(f).forEach(l=>u(l,{nameAttr:"icon-name",icons:e,attrs:a})))}};document.addEventListener("DOMContentLoaded",()=>{c({icons:{Mail:d}})});})();
/*! Bundled license information:

lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/icons/mail.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.546.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

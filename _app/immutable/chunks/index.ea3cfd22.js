function v(){}function R(t,e){for(const n in e)t[n]=e[n];return t}function O(t){return t()}function T(){return Object.create(null)}function g(t){t.forEach(O)}function P(t){return typeof t=="function"}function ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function at(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(I(e,n))}function _t(t,e,n,r){if(t){const i=q(t,e,n,r);return t[0](i)}}function q(t,e,n,r){return t[1]&&r?R(n.ctx.slice(),t[1](r(e))):n.ctx}function dt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],c=Math.max(e.dirty.length,i.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function ht(t,e,n,r,i,s){if(i){const c=q(e,n,r,s);t.p(c,i)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const u=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&u.push(f)}e=u}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let u=0;u<e.length;u++){const l=e[u].claim_order,f=(i>0&&e[n[i]].claim_order<=l?i+1:Q(1,i,x=>e[n[x]].claim_order,l))-1;r[u]=n[f]+1;const a=f+1;n[a]=u,i=Math.max(a,i)}const s=[],c=[];let o=e.length-1;for(let u=n[i]+1;u!=0;u=r[u-1]){for(s.push(e[u-1]);o>=u;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((u,l)=>u.claim_order-l.claim_order);for(let u=0,l=0;u<c.length;u++){for(;l<s.length&&c[u].claim_order>=s[l].claim_order;)l++;const f=l<s.length?s[l]:null;t.insertBefore(c[u],f)}}function U(t,e){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){E&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function gt(){return S(" ")}function xt(){return S("")}function bt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,r,i=!1){tt(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,i||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const u=n(o);return u===void 0?t.splice(c,1):t[c]=u,i?u===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function H(t,e,n,r){return B(t,i=>i.nodeName===e,i=>{const s=[];for(let c=0;c<i.attributes.length;c++){const o=i.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>i.removeAttribute(c))},()=>r(e))}function vt(t,e,n){return H(t,e,n,X)}function Et(t,e,n){return H(t,e,n,Y)}function et(t,e){return B(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>S(e),!0)}function wt(t){return et(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e){t.value=e??""}function St(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function nt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function Ct(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const s=i.textContent.trim();s===`HEAD_${t}_END`?(r-=1,n.push(i)):s===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function jt(t,e){return new t(e)}let y;function p(t){y=t}function C(){if(!y)throw new Error("Function called outside component initialization");return y}function kt(t){C().$$.on_mount.push(t)}function Tt(t){C().$$.after_update.push(t)}function Dt(){const t=C();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=nt(e,n,{cancelable:r});return i.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const h=[],D=[];let m=[];const M=[],L=Promise.resolve();let N=!1;function z(){N||(N=!0,L.then(F))}function Mt(){return z(),L}function A(t){m.push(t)}const w=new Set;let d=0;function F(){if(d!==0)return;const t=y;do{try{for(;d<h.length;){const e=h[d];d++,p(e),rt(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;D.length;)D.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];w.has(n)||(w.add(n),n())}m.length=0}while(h.length);for(;M.length;)M.pop()();N=!1,w.clear(),p(t)}function rt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function it(t){const e=[],n=[];m.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),m=e}const $=new Set;let _;function Ot(){_={r:0,c:[],p:_}}function Pt(){_.r||g(_.c),_=_.p}function ct(t,e){t&&t.i&&($.delete(t),t.i(e))}function qt(t,e,n,r){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Bt(t){t&&t.c()}function Ht(t,e){t&&t.l(e)}function ut(t,e,n,r){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),r||A(()=>{const c=t.$$.on_mount.map(O).filter(P);t.$$.on_destroy?t.$$.on_destroy.push(...c):g(c),t.$$.on_mount=[]}),s.forEach(A)}function lt(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function st(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Lt(t,e,n,r,i,s,c,o=[-1]){const u=y;p(t);const l=t.$$={fragment:null,ctx:[],props:s,update:v,not_equal:i,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:T(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,x,...j)=>{const k=j.length?j[0]:x;return l.ctx&&i(l.ctx[a],l.ctx[a]=k)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](k),f&&st(t,a)),x}):[],l.update(),f=!0,g(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){J();const a=Z(e.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();e.intro&&ct(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),K(),F()}p(u)}class zt{$destroy(){lt(this,1),this.$destroy=v}$on(e,n){if(!P(n))return v;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,lt as B,U as C,v as D,_t as E,ht as F,mt as G,dt as H,ft as I,Ct as J,Y as K,Et as L,bt as M,at as N,g as O,Dt as P,P as Q,yt as R,zt as S,At as T,gt as a,pt as b,wt as c,qt as d,xt as e,Pt as f,ct as g,V as h,Lt as i,Tt as j,X as k,vt as l,Z as m,$t as n,kt as o,St as p,S as q,et as r,ot as s,Mt as t,Nt as u,Ot as v,D as w,jt as x,Bt as y,Ht as z};
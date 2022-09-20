(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function E(){}function ue(t,e){for(const n in e)t[n]=e[n];return t}function $(t){return t()}function V(){return Object.create(null)}function C(t){t.forEach($)}function fe(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let I;function W(t,e){return I||(I=document.createElement("a")),I.href=e,t===I.href}function de(t){return Object.keys(t).length===0}function ee(t,e,n,s){if(t){const i=te(t,e,n,s);return t[0](i)}}function te(t,e,n,s){return t[1]&&s?ue(n.ctx.slice(),t[1](s(e))):n.ctx}function ne(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function se(t,e,n,s,i,l){if(i){const a=te(e,n,s,l);t.p(a,i)}}function ie(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function le(t){return t==null?"":t}function g(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function U(t){return document.createTextNode(t)}function x(){return U(" ")}function O(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function he(t){return Array.from(t.childNodes)}function _e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function me(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}let J;function L(t){J=t}function H(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const A=[],Q=[],M=[],X=[],ye=Promise.resolve();let Y=!1;function ge(){Y||(Y=!0,ye.then(re))}function G(t){M.push(t)}const N=new Set;let K=0;function re(){const t=J;do{for(;K<A.length;){const e=A[K];K++,L(e),pe(e.$$)}for(L(null),A.length=0,K=0;Q.length;)Q.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];N.has(n)||(N.add(n),n())}M.length=0}while(A.length);for(;X.length;)X.pop()();Y=!1,N.clear(),L(t)}function pe(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(G)}}const P=new Set;let ve;function w(t,e){t&&t.i&&(P.delete(t),t.i(e))}function S(t,e,n,s){if(t&&t.o){if(P.has(t))return;P.add(t),ve.c.push(()=>{P.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function R(t){t&&t.c()}function T(t,e,n,s){const{fragment:i,on_mount:l,on_destroy:a,after_update:o}=t.$$;i&&i.m(e,n),s||G(()=>{const r=l.map($).filter(fe);a?a.push(...r):C(r),t.$$.on_mount=[]}),o.forEach(G)}function B(t,e){const n=t.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function be(t,e){t.$$.dirty[0]===-1&&(A.push(t),ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(t,e,n,s,i,l,a,o=[-1]){const r=J;L(t);const c=t.$$={fragment:null,ctx:null,props:l,update:E,not_equal:i,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:V(),dirty:o,skip_bound:!1,root:e.target||r.$$.root};a&&a(c.root);let _=!1;if(c.ctx=n?n(t,e.props||{},(d,m,...u)=>{const k=u.length?u[0]:m;return c.ctx&&i(c.ctx[d],c.ctx[d]=k)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](k),_&&be(t,d)),m}):[],c.update(),_=!0,C(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const d=he(e.target);c.fragment&&c.fragment.l(d),d.forEach(p)}else c.fragment&&c.fragment.c();e.intro&&w(t.$$.fragment),T(t,e.target,e.anchor,e.customElement),re()}L(r)}class D{$destroy(){B(this,1),this.$destroy=E}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function we(t){let e,n,s,i,l;return{c(){e=y("button"),n=U("count is "),s=U(t[0])},m(a,o){v(a,e,o),g(e,n),g(e,s),i||(l=O(e,"click",t[1]),i=!0)},p(a,[o]){o&1&&_e(s,a[0])},i:E,o:E,d(a){a&&p(e),i=!1,l()}}}function ke(t,e,n){let s=0;return[s,()=>{n(0,s+=1)}]}class xe extends D{constructor(e){super(),j(this,e,ke,we,q,{})}}function Z(t){let e,n;return{c(){e=y("img"),W(e.src,n=t[1])||h(e,"src",n),h(e,"class","avatar-image svelte-11b9buf"),h(e,"alt","")},m(s,i){v(s,e,i)},p(s,i){i&2&&!W(e.src,n=s[1])&&h(e,"src",n)},d(s){s&&p(e)}}}function Ee(t){let e,n,s,i,l=t[1]&&Z(t);const a=t[9].default,o=ee(a,t,t[8],null);return{c(){e=y("span"),l&&l.c(),n=x(),o&&o.c(),h(e,"class",le(t[2])+" svelte-11b9buf"),h(e,"data-text",s=t[0]||null)},m(r,c){v(r,e,c),l&&l.m(e,null),g(e,n),o&&o.m(e,null),i=!0},p(r,[c]){r[1]?l?l.p(r,c):(l=Z(r),l.c(),l.m(e,n)):l&&(l.d(1),l=null),o&&o.p&&(!i||c&256)&&se(o,a,r,r[8],i?ne(a,r[8],c,null):ie(r[8]),null),(!i||c&1&&s!==(s=r[0]||null))&&h(e,"data-text",s)},i(r){i||(w(o,r),i=!0)},o(r){S(o,r),i=!1},d(r){r&&p(e),l&&l.d(),o&&o.d(r)}}}function Se(t,e,n){let{$$slots:s={},$$scope:i}=e,{isRounded:l=!1}=e,{isTransparent:a=!1}=e,{isSquare:o=!1}=e,{type:r=""}=e,{size:c=""}=e,{text:_=""}=e,{imgUrl:d=""}=e;const m=["avatar",l?"avatar-rounded":"",a?"avatar-transparent":"",o?"avatar-square":"",r?`avatar-${r}`:"",c?`avatar-${c}`:""].filter(u=>u).join(" ");return t.$$set=u=>{"isRounded"in u&&n(3,l=u.isRounded),"isTransparent"in u&&n(4,a=u.isTransparent),"isSquare"in u&&n(5,o=u.isSquare),"type"in u&&n(6,r=u.type),"size"in u&&n(7,c=u.size),"text"in u&&n(0,_=u.text),"imgUrl"in u&&n(1,d=u.imgUrl),"$$scope"in u&&n(8,i=u.$$scope)},[_,d,m,l,a,o,r,c,i,s]}class Ae extends D{constructor(e){super(),j(this,e,Se,Ee,q,{isRounded:3,isTransparent:4,isSquare:5,type:6,size:7,text:0,imgUrl:1})}}function Le(t){let e,n,s,i;const l=t[10].default,a=ee(l,t,t[9],null);return{c(){e=y("div"),a&&a.c(),h(e,"class",le(t[0])+" svelte-10sz0ec")},m(o,r){v(o,e,r),a&&a.m(e,null),n=!0,s||(i=[O(e,"click",t[11]),O(e,"focus",t[12]),O(e,"blur",t[13])],s=!0)},p(o,[r]){a&&a.p&&(!n||r&512)&&se(a,l,o,o[9],n?ne(l,o[9],r,null):ie(o[9]),null)},i(o){n||(w(a,o),n=!0)},o(o){S(a,o),n=!1},d(o){o&&p(e),a&&a.d(o),s=!1,C(i)}}}function Fe(t,e,n){let{$$slots:s={},$$scope:i}=e,{isAnimated:l=!1}=e,{isSkinned:a=!0}=e,{isStacked:o=!1}=e,{isShadow:r=!1}=e,{isBorder:c=!1}=e,{isRounded:_=!1}=e,{type:d=""}=e,{css:m=""}=e,u=[a?"card":"card-base",l?"card-animated":"",o?"card-stacked":"",r?"card-shadow":"",_?"card-rounded":"",c?"card-border":"",d?`card-${d}`:"",m?`${m}`:""].filter(f=>f.length).join(" ");function k(f){H.call(this,t,f)}function ae(f){H.call(this,t,f)}function ce(f){H.call(this,t,f)}return t.$$set=f=>{"isAnimated"in f&&n(1,l=f.isAnimated),"isSkinned"in f&&n(2,a=f.isSkinned),"isStacked"in f&&n(3,o=f.isStacked),"isShadow"in f&&n(4,r=f.isShadow),"isBorder"in f&&n(5,c=f.isBorder),"isRounded"in f&&n(6,_=f.isRounded),"type"in f&&n(7,d=f.type),"css"in f&&n(8,m=f.css),"$$scope"in f&&n(9,i=f.$$scope)},[u,l,a,o,r,c,_,d,m,i,s,k,ae,ce]}class Te extends D{constructor(e){super(),j(this,e,Fe,Le,q,{isAnimated:1,isSkinned:2,isStacked:3,isShadow:4,isBorder:5,isRounded:6,type:7,css:8})}}var Be=['a[href]:not([tabindex^="-"])','area[href]:not([tabindex^="-"])','input:not([type="hidden"]):not([type="radio"]):not([disabled]):not([tabindex^="-"])','input[type="radio"]:not([disabled]):not([tabindex^="-"])','select:not([disabled]):not([tabindex^="-"])','textarea:not([disabled]):not([tabindex^="-"])','button:not([disabled]):not([tabindex^="-"])','iframe:not([tabindex^="-"])','audio[controls]:not([tabindex^="-"])','video[controls]:not([tabindex^="-"])','[contenteditable]:not([tabindex^="-"])','[tabindex]:not([tabindex^="-"])'],Ce="Tab",qe="Escape";function b(t){this._show=this.show.bind(this),this._hide=this.hide.bind(this),this._maintainFocus=this._maintainFocus.bind(this),this._bindKeypress=this._bindKeypress.bind(this),this.$el=t,this.shown=!1,this._id=this.$el.getAttribute("data-a11y-dialog")||this.$el.id,this._previouslyFocused=null,this._listeners={},this.create()}b.prototype.create=function(){this.$el.setAttribute("aria-hidden",!0),this.$el.setAttribute("aria-modal",!0),this.$el.setAttribute("tabindex",-1),this.$el.hasAttribute("role")||this.$el.setAttribute("role","dialog"),this._openers=F('[data-a11y-dialog-show="'+this._id+'"]'),this._openers.forEach(function(e){e.addEventListener("click",this._show)}.bind(this));const t=this.$el;return this._closers=F("[data-a11y-dialog-hide]",this.$el).filter(function(e){return e.closest('[aria-modal="true"], [data-a11y-dialog]')===t}).concat(F('[data-a11y-dialog-hide="'+this._id+'"]')),this._closers.forEach(function(e){e.addEventListener("click",this._hide)}.bind(this)),this._fire("create"),this};b.prototype.show=function(t){return this.shown?this:(this._previouslyFocused=document.activeElement,this.$el.removeAttribute("aria-hidden"),this.shown=!0,oe(this.$el),document.body.addEventListener("focus",this._maintainFocus,!0),document.addEventListener("keydown",this._bindKeypress),this._fire("show",t),this)};b.prototype.hide=function(t){return this.shown?(this.shown=!1,this.$el.setAttribute("aria-hidden","true"),this._previouslyFocused&&this._previouslyFocused.focus&&this._previouslyFocused.focus(),document.body.removeEventListener("focus",this._maintainFocus,!0),document.removeEventListener("keydown",this._bindKeypress),this._fire("hide",t),this):this};b.prototype.destroy=function(){return this.hide(),this._openers.forEach(function(t){t.removeEventListener("click",this._show)}.bind(this)),this._closers.forEach(function(t){t.removeEventListener("click",this._hide)}.bind(this)),this._fire("destroy"),this._listeners={},this};b.prototype.on=function(t,e){return typeof this._listeners[t]>"u"&&(this._listeners[t]=[]),this._listeners[t].push(e),this};b.prototype.off=function(t,e){var n=(this._listeners[t]||[]).indexOf(e);return n>-1&&this._listeners[t].splice(n,1),this};b.prototype._fire=function(t,e){var n=this._listeners[t]||[],s=new CustomEvent(t,{detail:e});this.$el.dispatchEvent(s),n.forEach(function(i){i(this.$el,e)}.bind(this))};b.prototype._bindKeypress=function(t){const e=document.activeElement;e&&e.closest('[aria-modal="true"]')!==this.$el||(this.shown&&t.key===qe&&this.$el.getAttribute("role")!=="alertdialog"&&(t.preventDefault(),this.hide(t)),this.shown&&t.key===Ce&&Ie(this.$el,t))};b.prototype._maintainFocus=function(t){this.shown&&!t.target.closest('[aria-modal="true"]')&&!t.target.closest("[data-a11y-dialog-ignore-focus-trap]")&&oe(this.$el)};function je(t){return Array.prototype.slice.call(t)}function F(t,e){return je((e||document).querySelectorAll(t))}function oe(t){var e=t.querySelector("[autofocus]")||t;e.focus()}function De(t){return F(Be.join(","),t).filter(function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)})}function Ie(t,e){var n=De(t),s=n.indexOf(document.activeElement);e.shiftKey&&s===0?(n[n.length-1].focus(),e.preventDefault()):!e.shiftKey&&s===n.length-1&&(n[0].focus(),e.preventDefault())}function z(){F("[data-a11y-dialog]").forEach(function(t){new b(t)})}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",z):window.requestAnimationFrame?window.requestAnimationFrame(z):window.setTimeout(z,16));function Ke(t){let e,n,s,i,l,a,o;return n=new Ae({props:{imgUrl:"https://media.gettyimages.com/photos/christopher-lee-british-actor-with-bloodshot-eyes-and-wearing-pale-picture-id119203148?s=612x612",size:"xlarge"}}),{c(){e=y("div"),R(n.$$.fragment),s=x(),i=y("div"),i.textContent="under that it will wrap and thus stack).under that it will wrap and thus stack).under that it will wrap and thus stack).under that it will wrap and thus stack).under that it will wrap and thus stack).",l=x(),a=y("div"),a.textContent="Count Dracula",h(e,"class","p16 cmp-image__image"),h(i,"class","p16 flex-grow-1 flex-shrink-1 cmp-byline__name svelte-p1c3k8"),me(i,"flex-basis","50ch"),h(a,"class","p16 flex-grow-1 flex-shrink-1 cmp-byline__occupations svelte-p1c3k8")},m(r,c){v(r,e,c),T(n,e,null),v(r,s,c),v(r,i,c),v(r,l,c),v(r,a,c),o=!0},p:E,i(r){o||(w(n.$$.fragment,r),o=!0)},o(r){S(n.$$.fragment,r),o=!1},d(r){r&&p(e),B(n),r&&p(s),r&&p(i),r&&p(l),r&&p(a)}}}function Oe(t){let e,n;return e=new Te({props:{isBorder:!0,$$slots:{default:[Ke]},$$scope:{ctx:t}}}),{c(){R(e.$$.fragment)},m(s,i){T(e,s,i),n=!0},p(s,[i]){const l={};i&1&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){n||(w(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}class Me extends D{constructor(e){super(),j(this,e,null,Oe,q,{})}}function Pe(t){let e,n,s,i,l,a,o,r,c,_,d,m;return r=new Me({}),d=new xe({}),{c(){e=y("main"),n=y("div"),s=y("header"),s.innerHTML='<h1 class="myTitle svelte-5wtedw">This will be our haunted game</h1>',i=x(),l=y("div"),l.innerHTML=`<p class="svelte-5wtedw">Hexagon asymmetrical cloud bread art party truffaut. Ugh cliche tilde thundercats butcher meditation prism bicycle
      rights succulents pok pok hammock man braid. Williamsburg cloud bread blue bottle sriracha artisan, dreamcatcher
      shoreditch woke. Vape Brooklyn YOLO banh mi truffaut.</p> 

      <p class="svelte-5wtedw">Glossier fit master cleanse kogi. Jean shorts cloud bread aesthetic tousled tote bag chambray small batch
      church-key. Retro tote bag kale chips street art waistcoat woke. Farm-to-table blog before they sold out fanny
      pack. Truffaut +1 neutra meh, artisan heirloom jean shorts humblebrag listicle hella.</p> 

      <p class="svelte-5wtedw">Kitsch wolf kinfolk hoodie sustainable, single-origin coffee palo santo raclette DIY jean shorts adaptogen
      leggings. Squid sartorial pork belly asymmetrical four dollar toast aesthetic, knausgaard thundercats food truck
      tbh lo-fi. Fam forage artisan, four loko kale chips live-edge hashtag try-hard craft beer offal chartreuse lyft
      keytar prism. Bruh iPhone tbh selfies, letterpress banjo meditation cold-pressed stumptown poutine humblebrag
      mukbang messenger bag semiotics.</p> 

      <p class="svelte-5wtedw">Shoreditch sriracha whatever, meh hammock retro fit slow-carb kombucha craft beer blog tumeric twee pug. Deep v
        pug gatekeep put a bird on it organic Brooklyn. Meh hella coloring book tumeric cloud bread. Single-origin coffee
        shoreditch sriracha pickled, succulents copper mug venmo taxidermy before they sold out vape street art bespoke
        iPhone selfies. Hoodie pok pok whatever banh mi roof party, poke plaid quinoa single-origin coffee stumptown
        edison bulb offal fingerstache lumbersexual.</p> 

      <p class="svelte-5wtedw">Kinfolk enamel pin green juice, lyft hell of gochujang kogi kombucha mustache offal butcher fixie chia shaman sus.
      Forage cred cronut stumptown. Unicorn banh mi Brooklyn hexagon fanny pack try-hard. Fashion axe meditation ascot
      next level vinyl biodiesel. Meggings cronut Brooklyn schlitz locavore. Freegan knausgaard same, woke VHS sriracha
      hexagon marfa kombucha swag godard kale chips. Jean shorts chia 3 wolf moon readymade hot chicken raclette twee,
      sriracha cornhole vape four loko cred tonx fashion axe marfa.</p>`,a=x(),o=y("footer"),R(r.$$.fragment),c=x(),_=y("div"),R(d.$$.fragment),h(s,"class","svelte-5wtedw"),h(l,"class","mainStuff svelte-5wtedw"),h(o,"class","svelte-5wtedw"),h(n,"class","container svelte-5wtedw"),h(_,"class","card")},m(u,k){v(u,e,k),g(e,n),g(n,s),g(n,i),g(n,l),g(n,a),g(n,o),T(r,o,null),g(e,c),g(e,_),T(d,_,null),m=!0},p:E,i(u){m||(w(r.$$.fragment,u),w(d.$$.fragment,u),m=!0)},o(u){S(r.$$.fragment,u),S(d.$$.fragment,u),m=!1},d(u){u&&p(e),B(r),B(d)}}}class Re extends D{constructor(e){super(),j(this,e,null,Pe,q,{})}}new Re({target:document.getElementById("app")});

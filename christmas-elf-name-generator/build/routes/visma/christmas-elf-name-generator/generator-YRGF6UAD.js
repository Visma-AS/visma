import{a as D}from"/visma/christmas-elf-name-generator/build/_shared/chunk-QISFOXB7.js";import{a as b,b as M,c as N,e as h,h as A}from"/visma/christmas-elf-name-generator/build/_shared/chunk-DNZTTZUM.js";var z=b((Ze,V)=>{h();function ge(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ee(t){return ge(t.split(" ").slice(0,1).concat("Elf").join(" "))}V.exports=Ee});var W=b(($e,B)=>{"use strict";h();var Oe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";B.exports=Oe});var J=b((et,U)=>{"use strict";h();var Re=W();function G(){}function Y(){}Y.resetWarningCache=G;U.exports=function(){function t(s,n,o,l,u,c){if(c!==Re){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function i(){return t}var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:i,element:t,elementType:t,instanceOf:i,node:t,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:Y,resetWarningCache:G};return e.PropTypes=e,e}});var q=b((it,K)=>{h();K.exports=J()();var tt,nt});var I=b(a=>{"use strict";h();function te(t){try{return T.insertRule(t,T.cssRules.length)}catch{console.warn("react-reveal - animation failed")}}function Te(t,i,e,s,n){var o=Math.log(s),l=Math.log(n),u=(l-o)/(e-i);return Math.exp(o+u*(t-i))}function _e(t){if(!T)return"";var i="@keyframes "+(F+j)+"{"+t+"}",e=ee[t];return e?""+F+e:(T.insertRule(i,T.cssRules.length),ee[t]=j,""+F+j++)}function E(){Z||(a.globalHide=Z=!0,window.removeEventListener("scroll",E,!0),te("."+ne+" { opacity: 0; }"),window.removeEventListener("orientationchange",E,!0),window.document.removeEventListener("visibilitychange",E))}function ke(t){var i=t.ssrFadeout;a.fadeOutEnabled=ie=i}Object.defineProperty(a,"__esModule",{value:!0}),a.insertRule=te,a.cascade=Te,a.animation=_e,a.hideAll=E,a.default=ke;var ne=a.namespace="react-reveal",st=a.defaults={duration:1e3,delay:0,count:1},k=a.ssr=!0,Q=a.observerMode=!1,X=a.raf=function(t){return window.setTimeout(t,66)},Se=a.disableSsr=function(){return a.ssr=k=!1},ie=a.fadeOutEnabled=!1,ot=a.ssrFadeout=function(){var t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return a.fadeOutEnabled=ie=t},Z=a.globalHide=!1,Pe=a.ie10=!1,$=a.collapseend=void 0,j=1,ee={},T=!1,F=ne+"-"+Math.floor(1e15*Math.random())+"-";typeof window<"u"&&window.name!=="nodejs"&&window.document&&typeof navigator<"u"&&(a.observerMode=Q="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),a.raf=X=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X,a.ssr=k=window.document.querySelectorAll("div[data-reactroot]").length>0,navigator.appVersion.indexOf("MSIE 10")!==-1&&(a.ie10=Pe=!0),k&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(a.ssr=k=!1),k&&window.setTimeout(Se,1500),Q||(a.collapseend=$=document.createEvent("Event"),$.initEvent("collapseend",!0,!0)),R=document.createElement("style"),document.head.appendChild(R),R.sheet&&R.sheet.cssRules&&R.sheet.insertRule&&(T=R.sheet,window.addEventListener("scroll",E,!0),window.addEventListener("orientationchange",E,!0),window.document.addEventListener("visibilitychange",E)));var R});var ae=b((C,re)=>{"use strict";h();function xe(t){return t&&t.__esModule?t:{default:t}}function Ce(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function He(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function Le(t,i){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||typeof i!="object"&&typeof i!="function"?t:i}function Me(t,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof i);t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(t,i):t.__proto__=i)}Object.defineProperty(C,"__esModule",{value:!0});var se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ne=function(){function t(i,e){var s=[],n=!0,o=!1,l=void 0;try{for(var u,c=i[Symbol.iterator]();!(n=(u=c.next()).done)&&(s.push(u.value),!e||s.length!==e);n=!0);}catch(d){o=!0,l=d}finally{try{!n&&c.return&&c.return()}finally{if(o)throw l}}return s}return function(i,e){if(Array.isArray(i))return i;if(Symbol.iterator in Object(i))return t(i,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),O=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},qe=function(){function t(i,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}return function(i,e,s){return e&&t(i.prototype,e),s&&t(i,s),i}}(),je=N(),y=xe(je),r=q(),p=I(),oe=(0,r.shape)({make:r.func,duration:r.number.isRequired,delay:r.number.isRequired,forever:r.bool,count:r.number.isRequired,style:r.object.isRequired,reverse:r.bool}),Fe={collapse:r.bool,collapseEl:r.element,cascade:r.bool,wait:r.number,force:r.bool,disabled:r.bool,appear:r.bool,enter:r.bool,exit:r.bool,fraction:r.number,refProp:r.string,innerRef:r.func,onReveal:r.func,unmountOnExit:r.bool,mountOnEnter:r.bool,inEffect:oe.isRequired,outEffect:(0,r.oneOfType)([oe,(0,r.oneOf)([!1])]).isRequired,ssrReveal:r.bool,collapseOnly:r.bool,ssrFadeout:r.bool},Ie={fraction:.2,refProp:"ref"},Ae={transitionGroup:r.object},S=function(t){function i(e,s){He(this,i);var n=Le(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,e,s));return n.isOn=e.when===void 0||!!e.when,n.state={collapse:e.collapse?i.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,p.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return Me(i,t),qe(i,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?O({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!p.observerMode&&this.props.collapse&&window.document.dispatchEvent(p.collapseend)))}},{key:"animationEnd",value:function(e,s,n){var o=this,l=n.forever,u=n.count,c=n.delay,d=n.duration;if(!l){var v=function(){o&&o.el&&(o.animationEndTimeout=void 0,e.call(o))};this.animationEndTimeout=window.setTimeout(v,c+(d+(s?d:0)*u))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,s,n){var o=n.duration+(s.cascade?n.duration:0),l=this.isOn?this.getDimensionValue():0,u=void 0,c=void 0;if(s.collapseOnly)u=n.duration/3,c=n.delay;else{var d=o>>2,v=d>>1;u=d,c=n.delay+(this.isOn?0:o-d-v),e.style.animationDuration=o-d+(this.isOn?v:-v)+"ms",e.style.animationDelay=n.delay+(this.isOn?d-v:0)+"ms"}return e.collapse={height:l,transition:"height "+u+"ms ease "+c+"ms",overflow:s.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var s=!this.isOn&&e.outEffect,n=e[s?"outEffect":"inEffect"],o="style"in n&&n.style.animationName||void 0,l=void 0;e.collapseOnly?l={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(o=n.make),l={hasAppeared:!0,hasExited:!1,collapse:void 0,style:O({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:o}),className:n.className}),this.setState(e.collapse?this.collapse(l,e,n):l),s?(this.savedChild=y.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),p.ssr&&(0,p.disableSsr)()}},{key:"handleObserve",value:function(e,s){Ne(e,1)[0].intersectionRatio>0&&(s.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var s=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(this.el&&p.observerMode){if(this.observer){if(!s)return;this.observer.disconnect()}else if(s)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var s=this,n=arguments.length>1&&arguments[1]!==void 0&&arguments[1];p.globalHide||(0,p.hideAll)(),this&&this.el&&(e||(e=this.props),p.ssr&&(0,p.disableSsr)(),this.isOn&&this.isShown&&e.spy!==void 0?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return s.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):p.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),this.props.when!==void 0&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var s=this.context.transitionGroup,n=s&&!s.isMounting?!("enter"in this.props&&this.props.enter===!1):this.props.appear;return this.isOn&&((this.props.when!==void 0||this.props.spy!==void 0)&&!n||p.ssr&&!p.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&i.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):p.ssr&&(p.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&i.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var s=this,n=void 0;n=typeof e=="string"?e.split("").map(function(m,_){return y.default.createElement("span",{key:_,style:{display:"inline-block",whiteSpace:"pre"}},m)}):y.default.Children.toArray(e);var o=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],l=o.duration,u=o.reverse,c=n.length,d=2*l;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),l=d/2);var v=u?c:0;return n=n.map(function(m){return(m===void 0?"undefined":se(m))==="object"&&m?y.default.cloneElement(m,{style:O({},m.props.style,s.state.style,{animationDuration:Math.round((0,p.cascade)(u?v--:v++,0,c,l,d))+"ms"})}):m})}},{key:"componentWillReceiveProps",value:function(e){if(e.when!==void 0&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&e.exit===!1)return void e.onExited();e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:i.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if(se(this.props.children)==="object"){var e=y.default.Children.only(this.props.children);return"type"in e&&typeof e.type=="string"||this.props.refProp!=="ref"?e:y.default.createElement("div",null,e)}return y.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e=void 0;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var s=this.getChild();typeof s.ref=="function"&&(this.childRef=s.ref);var n=!1,o=s.props,l=o.style,u=o.className,c=o.children,d=this.props.disabled?u:(this.props.outEffect?p.namespace:"")+(this.state.className?" "+this.state.className:"")+(u?" "+u:"")||void 0,v=void 0;typeof this.state.style.animationName=="function"&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&c&&this.state.style.animationName?(n=this.cascade(c),v=O({},l,{opacity:1})):v=this.props.disabled?l:O({},l,this.state.style);var m=O({},this.props.props,Ce({className:d,style:v},this.props.refProp,this.saveRef)),_=y.default.cloneElement(s,m,e?n||c:void 0);return this.props.collapse!==void 0?this.props.collapseEl?y.default.cloneElement(this.props.collapseEl,{style:O({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:_}):y.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:_}):_}},{key:"makeHandler",value:function(e){var s=this,n=function(){e.call(s,s.props),s.ticking=!1};return function(){s.ticking||((0,p.raf)(n),s.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var s=this.el.offsetHeight,n=window.pageYOffset-i.getTop(this.el),o=Math.min(s,window.innerHeight)*(p.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<s-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){p.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!p.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;e.offsetTop===void 0;)e=e.parentNode;for(var s=e.offsetTop;e.offsetParent;s+=e.offsetTop)e=e.offsetParent;return s}}]),i}(y.default.Component);S.propTypes=Fe,S.defaultProps=Ie,S.contextTypes=Ae,S.displayName="RevealBase",C.default=S,re.exports=C.default});var ce=b((H,pe)=>{"use strict";h();function de(t){return t&&t.__esModule?t:{default:t}}function De(t,i,e,s){return"in"in t&&(t.when=t.in),g.default.Children.count(s)<2?g.default.createElement(ue.default,le({},t,{inEffect:i,outEffect:e,children:s})):(s=g.default.Children.map(s,function(n){return g.default.createElement(ue.default,le({},t,{inEffect:i,outEffect:e,children:n}))}),"Fragment"in g.default?g.default.createElement(g.default.Fragment,null,s):g.default.createElement("span",null,s))}Object.defineProperty(H,"__esModule",{value:!0});var le=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t};H.default=De;var Ve=N(),g=de(Ve),ze=ae(),ue=de(ze);pe.exports=H.default});var me=b((L,ve)=>{"use strict";h();function Be(t){return t&&t.__esModule?t:{default:t}}function We(t,i){var e={};for(var s in t)i.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}function Ge(){return fe||(fe=(0,x.animation)(Ke))}function he(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x.defaults,i=t.children,e=(t.out,t.timeout),s=t.duration,n=s===void 0?x.defaults.duration:s,o=t.delay,l=o===void 0?x.defaults.delay:o,u=t.count,c=u===void 0?x.defaults.count:u,d=t.forever,v=We(t,["children","out","timeout","duration","delay","count","forever"]),m={make:Ge,duration:e===void 0?n:e,delay:l,forever:d,count:c,style:{animationFillMode:"both"}};return(0,Ue.default)(v,m,!1,i,!0)}Object.defineProperty(L,"__esModule",{value:!0});var P=q(),Ye=ce(),Ue=Be(Ye),x=I(),Je={duration:P.number,timeout:P.number,delay:P.number,count:P.number,forever:P.bool},Ke=`
 from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
}
`,fe=!1;he.propTypes=Je,L.default=he,ve.exports=L.default});h();h();var ye=M(z()),f=M(N()),be=M(me());function we(){let[t,i]=(0,f.useState)();return t?f.default.createElement(Xe,{elfName:t}):f.default.createElement(Qe,{onSubmit:e=>i((0,ye.default)(e))})}function Qe({onSubmit:t}){let i=(0,f.useRef)(null);function e(s){var n;s.preventDefault(),t((n=i.current)==null?void 0:n.value)}return f.default.createElement("form",{onSubmit:e},f.default.createElement("h3",null,"Find out your Christmas Elf Name here!"),f.default.createElement("label",null,f.default.createElement("div",null,"Enter your name:"),f.default.createElement("input",{ref:i,name:"answer",type:"text",required:!0})),f.default.createElement("div",null,f.default.createElement("button",null,"Go!")))}function Xe({elfName:t}){return f.default.createElement("p",null,"Ta-da! Your christmas elf name is...",f.default.createElement(be.default,null,f.default.createElement("div",{className:"elf-name"},t)),f.default.createElement("sub",null,"...sure... ",f.default.createElement(A,{to:"./.."},"back to frontpage?")))}export{we as default,D as meta};

(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[18],{1616:function(t,e,s){"use strict";s.r(e),s.d(e,"resources",(function(){return r}));const r={"userscript.js":async function({addon:t,global:e,console:s,msg:r}){await t.tab.traps.getPaper();const i=t=>Math.round(+t).toString(16).toUpperCase().padStart(2,"0"),n=t=>{if(null===t)return null;if("string"==typeof t){if(t.startsWith("#"))return t.substring(0,9).toUpperCase();const e=t.match(/^rgb\((\d+)\s*,(\d+)\s*,(\d+)\)$/);if(e){const[t,s,r,n]=e;return"#".concat(i(s)).concat(i(r)).concat(i(n))}const s=t.match(/^rgba\((\d+)\s*,(\d+)\s*,(\d+),([\d.]+)\)$/);if(s){const[t,e,r,n,a]=s;return"#".concat(i(e)).concat(i(r)).concat(i(n)).concat(i(255*a))}}return s.log("Could not normalize color",t),null},a=t=>t===o?o:n(t),o="scratch-paint/style-path/mixed",c=n("#9966FF"),p=n("#000000"),l=Object.assign(Object.create(null),{BRUSH:{resetsFill:!0},ERASER:{},LINE:{resetsStroke:!0,requiresNonZeroStrokeWidth:!0,supportsGradient:!0},FILL:{resetsFill:!0,supportsGradient:!0},SELECT:{supportsGradient:!0},RESHAPE:{supportsGradient:!0},OVAL:{resetsFill:!0,resetsStroke:!0,supportsGradient:!0},RECT:{resetsFill:!0,resetsStroke:!0,supportsGradient:!0},TEXT:{resetsFill:!0,resetsStroke:!0},BIT_BRUSH:{resetsFill:!0},BIT_LINE:{resetsFill:!0,requiresNonZeroStrokeWidth:!0},BIT_OVAL:{resetsFill:!0,resetsStroke:!0,supportsGradient:!0},BIT_RECT:{resetsFill:!0,resetsStroke:!0,supportsGradient:!0},BIT_TEXT:{resetsFill:!0,resetsStroke:!0},BIT_FILL:{resetsFill:!0,supportsGradient:!0},BIT_ERASER:{},BIT_SELECT:{supportsGradient:!0}}),d=()=>l[t.tab.redux.state.scratchPaint.mode];class u{constructor(t,e,s,r){this.reduxPropertyName=t,this.primaryAction=e,this.secondaryAction=s,this.gradientTypeAction=r}get(e=t.tab.redux.state){return e.scratchPaint.color[this.reduxPropertyName]}set(e){const s=this.get(),r=a(e.primary);s.primary!==r&&t.tab.redux.dispatch({type:this.primaryAction,color:r});const i=d();if(i&&i.supportsGradient){const r=a(e.secondary);s.secondary!==r&&t.tab.redux.dispatch({type:this.secondaryAction,color:r}),s.gradientType!==e.gradientType&&t.tab.redux.dispatch({type:this.gradientTypeAction,gradientType:e.gradientType})}}}const g=new u("fillColor","scratch-paint/fill-style/CHANGE_FILL_COLOR","scratch-paint/fill-style/CHANGE_FILL_COLOR_2","scratch-paint/fill-style/CHANGE_FILL_GRADIENT_TYPE"),h=new u("strokeColor","scratch-paint/stroke-style/CHANGE_STROKE_COLOR","scratch-paint/stroke-style/CHANGE_STROKE_COLOR_2","scratch-paint/stroke-style/CHANGE_STROKE_GRADIENT_TYPE"),y=t=>({primary:t,secondary:null,gradientType:"SOLID"});let E,T,_;const S=()=>{E=y(n(t.settings.get("fill"))),T=y(n(t.settings.get("stroke"))),_=t.settings.get("strokeSize")};S();const k=()=>{g.set(E)},f=()=>{h.set(T)},m=e=>{let s=_;0===s&&e&&(s=1),t.tab.redux.state.scratchPaint.color.strokeWidth!==s&&t.tab.redux.dispatch({type:"scratch-paint/stroke-width/CHANGE_STROKE_WIDTH",strokeWidth:s})};t.self.disabled||(k(),f(),m(!1)),t.settings.addEventListener("change",()=>{t.settings.get("persistence")||S()});const G=t=>null!==t.primary&&t.primary!==o;let L=!1;t.tab.redux.initialize(),t.tab.redux.addEventListener("statechanged",({detail:e})=>{if(t.self.disabled)return;const r=e.action;if(!L&&t.settings.get("persistence")){const t=g.get();g.get(e.prev)!==t&&G(t)&&(E=t);const s=h.get();h.get(e.prev)!==s&&G(s)&&(T=s);const r=e.next.scratchPaint.color.strokeWidth;"number"==typeof r&&(_=r)}"scratch-paint/modes/CHANGE_MODE"===r.type&&(L=!0,queueMicrotask(()=>{if(L=!1,t.settings.get("persistence")){const e=d();if(!e)return void s.warn("unknown tool",t.tab.redux.state.scratchPaint.mode);e.resetsFill&&k(),e.resetsStroke&&(m(!!e.requiresNonZeroStrokeWidth),f())}else{const t=g.get(e.prev);if(null===t.primary||t.primary===o){g.get().primary===c&&k()}const s=h.get(e.prev);if(null===s.primary||s.primary===o){h.get().primary===p&&(m(!0),f())}}}))})}}}}]);
(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[29],{1567:function(e,t,n){(e.exports=n(9)(!1)).push([e.i,'[dir="ltr"] .sa-gamepad-container {\n  margin-right: 0.2rem;\n}\n[dir="rtl"] .sa-gamepad-container {\n  margin-left: 0.2rem;\n}\n\n.sa-gamepad-popup-outer {\n  /* above fullscreen */\n  z-index: 99999;\n}\n.sa-gamepad-popup {\n  box-sizing: border-box;\n  width: 700px;\n  max-height: min(800px, 85vh);\n  height: 100%;\n  max-width: 85%;\n  margin: 50px auto;\n  display: flex;\n  flex-direction: column;\n}\n.sa-gamepad-popup-content {\n  padding: 1.5rem 2.25rem;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.sa-gamepad-popup [class*="modal_header-item-title"] {\n  margin: 0 -20rem 0 0;\n}\n\n.sa-gamepad-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  user-select: none;\n  pointer-events: none;\n  will-change: transform;\n  image-rendering: optimizeSpeed;\n  image-rendering: crisp-edges;\n  image-rendering: pixelated;\n}\n.sa-gamepad-cursor-down {\n  filter: invert(100%);\n}\n\n.sa-gamepad-small .sa-gamepad-container[data-editor-mode="editor"] {\n  display: none !important;\n}\n\n.sa-gamepad-hide-cursor [class^="stage_stage_"] {\n  cursor: none;\n}\n\n.sa-gamepad-browser-support-warning {\n  font-weight: bold;\n  margin-bottom: 10px;\n}\n\n.sa-gamepad-extra-options {\n  display: none;\n}\n.sa-gamepad-has-controller .sa-gamepad-extra-options {\n  display: block;\n}\n\n.sa-gamepad-store-settings {\n  display: block;\n}\n.sa-gamepad-store-settings > input {\n  margin-right: 4px;\n}\n\n.sa-gamepad-reset-button {\n  margin: 8px 8px 8px 0;\n}\n',""])},1568:function(e,t,n){var a=n(204);(e.exports=n(9)(!1)).push([e.i,'.gamepadlib-selector {\n  width: 100%;\n  margin-bottom: 3px;\n}\n\n.gamepadlib-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.gamepadlib-content-buttons {\n  padding-right: 10px;\n}\n\n.gamepadlib-mapping {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3px;\n}\n.gamepadlib-mapping-label {\n  width: 100px;\n  text-align: center;\n}\n.gamepadlib-keyinput {\n  text-align: center;\n  width: 75px;\n  height: 25px;\n  border-radius: 0;\n  border: 1px solid black;\n  background: white;\n  color: black;\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n[theme="dark"] .gamepadlib-keyinput {\n  background-color: var(--ui-tertiary);\n  border-color: var(--ui-black-transparent);\n  color: var(--text-primary);\n}\n.gamepadlib-mapping[data-value="1"] .gamepadlib-keyinput {\n  background: yellow;\n}\n[theme="dark"] .gamepadlib-mapping[data-value="1"] .gamepadlib-keyinput {\n  background: hsl(60, 100%, 20%)\n}\n.gamepadlib-keyinput[data-accepting-input="true"] {\n  background: #d6fff9;\n}\n[theme="dark"] .gamepadlib-keyinput[data-accepting-input="true"] {\n  background: hsl(171, 100%, 20%);\n}\n.gamepadlib-keyinput[data-empty="true"]:not([data-accepting-input="true"]) {\n  color: #aaa;\n  font-style: italic;\n}\n\n.gamepadlib-axis {\n  margin-bottom: 8px;\n  text-align: center;\n}\n.gamepadlib-axis-circle {\n  position: relative;\n  width: 150px;\n  height: 150px;\n  border: 1px solid black;\n  overflow: hidden;\n}\n[theme="dark"] .gamepadlib-axis-circle {\n  border-color: var(--ui-black-transparent);\n}\n.gamepadlib-axis-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-image: url('+a(n(1569))+");\n  width: 8px;\n  height: 8px;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n}\n.gamepadlib-axis-mapping {\n  width: 100%;\n}\n\n.gamepadlib-axis-circle-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper {\n  position: absolute;\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(1) {\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(2) {\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(3) {\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.gamepadlib-axis-circle-overlay > .gamepadlib-axis-mapper:nth-of-type(4) {\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n}\n",""])},1569:function(e,t,n){e.exports=n.p+"static/assets/88a77444f0bb453209bf1c62becbd37c.svg"},1594:function(e,t,n){"use strict";n.r(t),n.d(t,"resources",(function(){return I}));var a=n(448);let s=window.console;const i=[{type:"key",high:"ArrowRight",low:"ArrowLeft",deadZone:.5},{type:"key",high:"ArrowDown",low:"ArrowUp",deadZone:.5}],o=[{type:"key",high:"d",low:"a",deadZone:.5},{type:"key",high:"s",low:"w",deadZone:.5}],r=[{type:"virtual_cursor",high:"+x",low:"-x",sensitivity:.6,deadZone:.2},{type:"virtual_cursor",high:"-y",low:"+y",sensitivity:.6,deadZone:.2}],d=e=>{if("object"!=typeof e||!e)return s.warn("invalid mapping",e),{type:"key",high:null,low:null};const t=Object.assign({},e);if("key"===t.type)void 0===t.deadZone&&(t.deadZone=.5),void 0===t.high&&(t.high=""),void 0===t.low&&(t.low="");else if("mousedown"===t.type)void 0===t.deadZone&&(t.deadZone=.5),void 0===t.button&&(t.button=0);else{if("virtual_cursor"!==t.type)return s.warn("unknown mapping type",t.type),{type:"key",high:null,low:null};void 0===t.high&&(t.high=""),void 0===t.low&&(t.low=""),void 0===t.sensitivity&&(t.sensitivity=10),void 0===t.deadZone&&(t.deadZone=.5)}return t},l=e=>Object.assign({},e),c=l,p=e=>{const t=l(e);return delete t.deadZone,delete t.low,t},h=(e,t)=>{for(;e.length<t;)e.push({type:"key",high:null,low:null});return e.length=t,e},u=e=>h([],e),g=e=>({usesArrows:e.has("ArrowUp")||e.has("ArrowDown")||e.has("ArrowRight")||e.has("ArrowLeft"),usesWASD:e.has("w")&&e.has("s")||e.has("a")&&e.has("d")}),m=e=>"".concat(e.id," (").concat(e.index,")");class y{constructor(e,t){this.gamepad=e,this.gamepadLib=t,this.resetMappings()}resetMappings(){this.buttonMappings=this.getDefaultButtonMappings().map(d),this.axesMappings=this.getDefaultAxisMappings().map(d)}clearMappings(){this.buttonMappings=u(this.gamepad.buttons.length),this.axesMappings=u(this.gamepad.axes.length)}getDefaultButtonMappings(){let e;if(this.gamepadLib.hints.importedSettings)e=this.gamepadLib.hints.importedSettings.buttons;else{const t=this.gamepadLib.hints.usedKeys,n=new Set,{usesArrows:a,usesWASD:s}=g(t);s&&(n.add("w"),n.add("a"),n.add("s"),n.add("d"));const i=["p","q","r"],o=[" ","Enter","e","f","z","x","c",...Array.from(t).filter(e=>1===e.length&&!i.includes(e))],r=e=>{for(const a of e)if(t.has(a)&&!n.has(a))return n.add(a),a;return null},d=()=>r(o),l=()=>r(i),c=()=>a||!s?"ArrowUp":"w",p=()=>a||!s?"ArrowDown":"s",h=()=>a||!s?"ArrowRight":"d",u=()=>a||!s?"ArrowLeft":"a",m=(()=>a&&t.has("ArrowUp")?"ArrowUp":s&&t.has("w")?"w":r(o))();let y=d(),b=d(),w=d();!m||y||b||w||(y=m,b=m,w=m),m&&y&&!b&&!w&&(b=m,w=y),e=[],e[0]={type:"key",high:m},e[1]={type:"key",high:y},e[2]={type:"key",high:b},e[3]={type:"key",high:w},e[4]={type:"mousedown"},e[5]={type:"mousedown"},e[6]={type:"mousedown"},e[7]={type:"mousedown"},e[9]={type:"key",high:l()},e[8]={type:"key",high:l()},e[10]={type:"key",high:null,low:null},e[11]={type:"key",high:null,low:null},e[12]={type:"key",high:c()},e[13]={type:"key",high:p()},e[14]={type:"key",high:u()},e[15]={type:"key",high:h()}}return h(e,this.gamepad.buttons.length)}getDefaultAxisMappings(){let e=[];if(this.gamepadLib.hints.importedSettings)e=this.gamepadLib.hints.importedSettings.axes;else if(4===this.gamepad.axes.length){const t=this.gamepadLib.hints.usedKeys,{usesArrows:n,usesWASD:a}=g(t);a?(e.push(o[0]),e.push(o[1])):n?(e.push(i[0]),e.push(i[1])):(e.push(r[0]),e.push(r[1])),e.push(r[0]),e.push(r[1])}return h(e,this.gamepad.axes.length)}}const b=()=>({usedKeys:new Set,importedSettings:null,generated:!1});class w extends a.a{constructor(){super(),this.gamepads=new Map,this.handleConnect=this.handleConnect.bind(this),this.handleDisconnect=this.handleDisconnect.bind(this),this.update=this.update.bind(this),this.animationFrame=null,this.currentTime=null,this.deltaTime=0,this.virtualCursor={x:0,y:0,maxX:1/0,minX:-1/0,maxY:1/0,minY:-1/0,modified:!1},this._editor=null,this.connectCallbacks=[],this.hints=b(),this.keysPressedThisFrame=new Set,this.oldKeysPressed=new Set,this.mouseButtonsPressedThisFrame=new Set,this.oldMouseDown=new Set,this.addEventHandlers()}addEventHandlers(){window.addEventListener("gamepadconnected",this.handleConnect),window.addEventListener("gamepaddisconnected",this.handleDisconnect)}removeEventHandlers(){window.removeEventListener("gamepadconnected",this.handleConnect),window.removeEventListener("gamepaddisconnected",this.handleDisconnect)}gamepadConnected(){return this.gamepads.size>0?Promise.resolve():new Promise(e=>{this.connectCallbacks.push(e)})}ensureHintsGenerated(){this.hints.generated||(this.getHintsLazily&&Object.assign(this.hints,this.getHintsLazily()),this.hints.generated=!0)}resetControls(){this.hints=b(),this.ensureHintsGenerated();for(const e of this.gamepads.values())e.resetMappings()}clearControls(){for(const e of this.gamepads.values())e.clearMappings()}handleConnect(e){this.ensureHintsGenerated();for(const e of this.connectCallbacks)e();this.connectCallbacks=[];const t=e.gamepad,n=m(t);s.log("connected",t);const a=new y(t,this);this.gamepads.set(n,a),null===this.animationFrame&&(this.animationFrame=requestAnimationFrame(this.update)),this.dispatchEvent(new CustomEvent("gamepadconnected",{detail:a}))}handleDisconnect(e){const t=e.gamepad,n=m(t);s.log("disconnected",t);const a=this.gamepads.get(n);this.gamepads.delete(n),this.dispatchEvent(new CustomEvent("gamepaddisconnected",{detail:a})),0===this.gamepads.size&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null,this.currentTime=null)}dispatchKey(e,t){t?this.dispatchEvent(new CustomEvent("keydown",{detail:e})):this.dispatchEvent(new CustomEvent("keyup",{detail:e}))}dispatchMouse(e,t){t?this.dispatchEvent(new CustomEvent("mousedown",{detail:e})):this.dispatchEvent(new CustomEvent("mouseup",{detail:e}))}dispatchMouseMove(e,t){this.dispatchEvent(new CustomEvent("mousemove",{detail:{x:e,y:t}}))}updateButton(e,t){if("key"===t.type)e>=t.deadZone?t.high&&this.keysPressedThisFrame.add(t.high):e<=-t.deadZone&&t.low&&this.keysPressedThisFrame.add(t.low);else if("mousedown"===t.type){Math.abs(e)>=t.deadZone&&this.mouseButtonsPressedThisFrame.add(t.button)}else if("virtual_cursor"===t.type){const n=t.deadZone;let a;if(e>=n&&(a=t.high),e<=-n&&(a=t.low),a){const s=(Math.abs(e)-n)/(1-n),i=s*s*t.sensitivity*this.deltaTime;"+x"===a?this.virtualCursor.x+=i:"-x"===a?this.virtualCursor.x-=i:"+y"===a?this.virtualCursor.y+=i:"-y"===a&&(this.virtualCursor.y-=i),this.virtualCursor.modified=!0}}}update(e){this.oldKeysPressed=this.keysPressedThisFrame,this.oldMouseButtonsPressed=this.mouseButtonsPressedThisFrame,this.keysPressedThisFrame=new Set,this.mouseButtonsPressedThisFrame=new Set,null===this.currentTime?this.deltaTime=0:this.deltaTime=e-this.currentTime,this.deltaTime=Math.max(Math.min(this.deltaTime,1e3),0),this.currentTime=e,this.animationFrame=requestAnimationFrame(this.update);const t=navigator.getGamepads();for(const e of t){if(null===e)continue;const t=m(e),n=this.gamepads.get(t);for(let t=0;t<e.buttons.length;t++){const a=e.buttons[t].value,s=n.buttonMappings[t];this.updateButton(a,s)}for(let t=0;t<e.axes.length;t++){const a=e.axes[t],s=n.axesMappings[t];this.updateButton(a,s)}}this._editor&&this._editor.update(t);for(const e of this.keysPressedThisFrame)this.oldKeysPressed.has(e)||this.dispatchKey(e,!0);for(const e of this.oldKeysPressed)this.keysPressedThisFrame.has(e)||this.dispatchKey(e,!1);for(const e of this.mouseButtonsPressedThisFrame)this.oldMouseButtonsPressed.has(e)||this.dispatchMouse(e,!0);for(const e of this.oldMouseButtonsPressed)this.mouseButtonsPressedThisFrame.has(e)||this.dispatchMouse(e,!1);this.virtualCursor.modified&&(this.virtualCursor.modified=!1,this.virtualCursor.x>this.virtualCursor.maxX&&(this.virtualCursor.x=this.virtualCursor.maxX),this.virtualCursor.x<this.virtualCursor.minX&&(this.virtualCursor.x=this.virtualCursor.minX),this.virtualCursor.y>this.virtualCursor.maxY&&(this.virtualCursor.y=this.virtualCursor.maxY),this.virtualCursor.y<this.virtualCursor.minY&&(this.virtualCursor.y=this.virtualCursor.minY),this.dispatchMouseMove(this.virtualCursor.x,this.virtualCursor.y))}editor(){return this._editor||(this._editor=new f(this)),this._editor}}w.browserHasBrokenGamepadAPI=()=>!navigator.getGamepads||(!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Linux"))||!(!navigator.userAgent.includes("Firefox")||!navigator.userAgent.includes("Mac OS"))),w.setConsole=e=>s=e;const v=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},A=e=>"gamepadlib-axis-".concat(e);class f extends a.a{constructor(e){super(),this.gamepadLib=e,this.root=Object.assign(document.createElement("div"),{className:"gamepadlib-root"}),this.selector=Object.assign(document.createElement("select"),{className:"gamepadlib-selector"}),this.content=Object.assign(document.createElement("div"),{className:"gamepadlib-content"}),this.root.appendChild(this.selector),this.root.appendChild(this.content),this.onSelectorChange=this.onSelectorChange.bind(this),this.onGamepadsChange=this.onGamepadsChange.bind(this),this.selector.addEventListener("change",this.onSelectorChange),this.gamepadLib.addEventListener("gamepadconnected",this.onGamepadsChange),this.gamepadLib.addEventListener("gamepaddisconnected",this.onGamepadsChange),this.buttonIdToElement=new Map,this.axisIdToElement=new Map,this.hidden=!1,this.msg=(e,t)=>e}onSelectorChange(){this.updateContent(),this.dispatchEvent(new CustomEvent("gamepad-changed"))}onGamepadsChange(){this.updateAllContent(),this.dispatchEvent(new CustomEvent("gamepad-changed"))}updateAllContent(){this.updateDropdown(),this.updateContent(),this.focus()}updateDropdown(){v(this.selector);const e=Array.from(this.gamepadLib.gamepads.entries());if(0!==e.length){this.selector.hidden=!1;for(const[t,n]of e){const e=document.createElement("option");e.textContent=t,e.value=t,this.selector.appendChild(e)}}else this.selector.hidden=!0}keyToString(e){return" "===e?this.msg("key-space"):"ArrowUp"===e?this.msg("key-up"):"ArrowDown"===e?this.msg("key-down"):"ArrowLeft"===e?this.msg("key-left"):"ArrowRight"===e?this.msg("key-right"):"Enter"===e?this.msg("key-enter"):1===e.length?e.toUpperCase():e.replace(/[a-z]([A-Z])/,e=>"".concat(e[0]," ").concat(e[1]))}createButtonMapping(e,t,{property:n="high",allowClick:a=!0}={}){const s=document.createElement("input");s.readOnly=!0,s.className="gamepadlib-keyinput",s.title=this.msg("keyinput-title"),s.dataset.index=t;const i=()=>{const a=e[t];if(s.dataset.empty=!1,"key"===a.type)null===a[n]?(s.value=this.msg("key-none"),s.dataset.empty=!0):s.value=this.keyToString(a[n]);else if("mousedown"===a.type){let e=this.msg("key-click");0!==a.button&&(e+=" (".concat(a.button,")")),s.value=e}else s.value="??? ".concat(a.type)},o=()=>{e[t]=d(e[t]),r=!1,s.blur(),i(),s.dispatchEvent(new CustomEvent("mapping-changed")),this.changed()};let r=!1;const l=a=>{if(r){a.preventDefault();const s=a.key;if(["Alt"].includes(s))return;const i=e[t],r=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Shift","CapsLock","ScrollLock","Control","Insert","Home","End","PageUp","PageDown"];1===s.length||r.includes(s)?(i.type="key",i[n]=s):"Escape"!==s&&(i.type="key",i[n]=null),o()}else"Enter"===a.key&&(a.preventDefault(),a.target.click())},c=["Shift","Control"],p=()=>{s.dataset.acceptingInput=!1,r&&(r=!1,i())};return s.addEventListener("contextmenu",e=>{e.preventDefault()}),s.addEventListener("mouseup",n=>{if(n.preventDefault(),r)if(a){const a=e[t];a.type="mousedown",a.button=n.button,o()}else p();else s.value="...",s.dataset.acceptingInput=!0,r=!0}),s.addEventListener("keydown",e=>{c.includes(e.key)||l(e)}),s.addEventListener("keyup",e=>{c.includes(e.key)&&l(e)}),s.addEventListener("blur",p),i(),s}createAxisMapping(e,t){const n=document.createElement("select");n.className="gamepadlib-axis-mapping",n.id=A(t),n.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-none"),value:"none"})),n.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-cursor"),value:"cursor"})),n.appendChild(Object.assign(document.createElement("option"),{textContent:"WASD",value:"wasd"})),n.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-arrows"),value:"arrows"})),n.appendChild(Object.assign(document.createElement("option"),{textContent:this.msg("axis-custom"),value:"custom"}));const a=()=>{"key"===e[t].type||"mousedown"===e[t].type?null===e[t].high&&null===e[t].low&&null===e[t+1].high&&null===e[t+1].low?n.value="none":e[t].high===o[0].high&&e[t].low===o[0].low&&e[t+1].high===o[1].high&&e[t+1].low===o[1].low?n.value="wasd":e[t].high===i[0].high&&e[t].low===i[0].low&&e[t+1].high===i[1].high&&e[t+1].low===i[1].low?n.value="arrows":n.value="custom":"virtual_cursor"===e[t].type?n.value="cursor":n.value="none"};a();const s=document.createElement("div");s.className="gamepadlib-axis-circle-overlay";const l=()=>{if(v(s),"key"===e[t].type){const n=[this.createButtonMapping(e,t+1,{property:"low",allowClick:!1}),this.createButtonMapping(e,t,{property:"low",allowClick:!1}),this.createButtonMapping(e,t,{property:"high",allowClick:!1}),this.createButtonMapping(e,t+1,{property:"high",allowClick:!1})];for(const e of n)e.classList.add("gamepadlib-axis-mapper"),e.addEventListener("mapping-changed",a),s.appendChild(e)}};return l(),n.addEventListener("change",()=>{"custom"===n.value?"key"!==e[t].type&&(e[t]=d(i[0]),e[t+1]=d(i[1])):"arrows"===n.value?(e[t]=d(i[0]),e[t+1]=d(i[1])):"wasd"===n.value?(e[t]=d(o[0]),e[t+1]=d(o[1])):"cursor"===n.value?(e[t]=d(r[0]),e[t+1]=d(r[1])):(e[t]=d({type:"key",high:null,low:null}),e[t+1]=d({type:"key",high:null,low:null})),l(),this.changed()}),{circleOverlay:s,selector:n}}hasControllerSelected(){return!!this.selector.value}updateContent(){if(v(this.content),this.hidden)return;const e=this.selector.value;if(!e){const e=document.createElement("div");return e.textContent=this.msg("no-controllers"),void this.content.appendChild(e)}const t=this.gamepadLib.gamepads.get(e);if(!t){const t=document.createElement("div");return t.textContent="Cannot find controller: ".concat(e),void this.content.appendChild(t)}this.buttonIdToElement.clear(),this.axisIdToElement.clear();const n=document.createElement("div");n.className="gamepadlib-content-buttons";const a=t.buttonMappings;for(let e=0;e<a.length;e++){const t=document.createElement("div");t.className="gamepadlib-mapping",t.dataset.id=e;const s=document.createElement("label");s.className="gamepadlib-mapping-label",s.textContent=this.msg("button-n",{n:e});const i="gamepadlib-button-".concat(e);s.htmlFor=i;const o=document.createElement("div");o.className="gamepadlib-mapping-options";const r=this.createButtonMapping(a,e);r.id=i,o.appendChild(r),t.appendChild(s),t.appendChild(o),n.appendChild(t),this.buttonIdToElement.set(e,t)}const s=document.createElement("div");s.className="gamepadlib-content-axes";const i=t.axesMappings;for(let e=0;e<i.length;e+=2){const t=document.createElement("div");t.className="gamepadlib-axis";const n=document.createElement("label");n.textContent=this.msg("axes-a-b",{a:e,b:e+1}),n.htmlFor=A(e);const a=document.createElement("div");a.className="gamepadlib-axis-circle";const{circleOverlay:o,selector:r}=this.createAxisMapping(i,e);a.appendChild(o);const d=document.createElement("div");d.className="gamepadlib-axis-dot",a.appendChild(d),t.appendChild(n),t.appendChild(a),t.appendChild(r),s.appendChild(t),this.axisIdToElement.set(e,d)}this.content.appendChild(n),this.content.appendChild(s)}update(e){if(this.hidden)return;if(!this.selector.value)return;const t=Array.from(e).find(e=>e&&m(e)===this.selector.value);if(t){for(let e=0;e<t.buttons.length;e++){const n=this.buttonIdToElement.get(e);if(n){const a=t.buttons[e].value.toString();a!==n.dataset.value&&(n.dataset.value=a)}}for(let e=0;e<t.axes.length;e+=2){const n=this.axisIdToElement.get(e);if(n){const a=t.axes[e],s=t.axes[e+1]||0,i=75;n.style.transform="translate(-50%, -50%) translate(".concat(a*i,"px, ").concat(s*i,"px)")}}}}export(){const e=this.selector.value;if(!e)return null;const t=this.gamepadLib.gamepads.get(e);return t?{axes:t.axesMappings.map(c),buttons:t.buttonMappings.map(p)}:null}changed(){this.dispatchEvent(new CustomEvent("mapping-changed"))}hide(){this.hidden=!0,this.updateContent()}focus(){this.selector.value&&this.selector.focus()}generateEditor(){return this.hidden=!1,this.updateAllContent(),this.root}}var x=w;function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const M=e=>{if("/active.png"===e)return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAABlBMVEX///8AAABVwtN+AAAADklEQVQI12MAAQMgBAIAAkwAYUis6mUAAAAASUVORK5CYII=";if("/close.svg"===e)return"data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuNDggNy40OCI+PHBhdGggZD0iTTMuNzQgNi40OFYxTTEgMy43NGg1LjQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4Ii8+PC9zdmc+";if("/cursor.png"===e)return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGAQMAAADaAn0LAAAABlBMVEUAAAD///+l2Z/dAAAADklEQVQI12MAAQMgBAIAAkwAYUis6mUAAAAASUVORK5CYII=";if("/dot.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHZpZXdCb3g9IjAgMCAyLjExNyAyLjExNyI+PGNpcmNsZSBjeD0iMS4wNTgiIGN5PSIxLjA1OCIgcj0iMS4wNTgiIGZpbGw9InJlZCIvPjwvc3ZnPg==";if("/gamepad.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzU3NWU3NSIgZD0iTTM2OCAxNjhoLTk2di02NGgxNzZhMjQuMDI3IDI0LjAyNyAwIDAgMCAyNC0yNFYxNmgtMzJ2NTZIMjY0YTI0LjAyNyAyNC4wMjcgMCAwIDAtMjQgMjR2NzJoLTk2QTEyOC4xNDUgMTI4LjE0NSAwIDAgMCAxNiAyOTZ2MTAwLjk1M0E5MS4xNSA5MS4xNSAwIDAgMCAxMDcuMDQ3IDQ4OGgxLjhhOTAuODA3IDkwLjgwNyAwIDAgMCA2OS45NTMtMzIuNzZMMjMxLjUgMzkyaDQ4LjYyOGw1Mi42NjYgNjguNDY1QTkxLjA0NiA5MS4wNDYgMCAwIDAgNDk2IDQwNC45NTNWMjk2YTEyOC4xNDUgMTI4LjE0NSAwIDAgMC0xMjgtMTI4em05NiAyMzYuOTUzYTU5LjA0NyA1OS4wNDcgMCAwIDEtMTA1Ljg0OSAzNkwyOTUuODc4IDM2MGgtNzkuMzcybC02Mi4yOTQgNzQuNzU0QTU4Ljg5MyA1OC44OTMgMCAwIDEgMTA4Ljg1IDQ1NmgtMS44QTU5LjExMyA1OS4xMTMgMCAwIDEgNDggMzk2Ljk1M1YyOTZhOTYuMTA4IDk2LjEwOCAwIDAgMSA5Ni05NmgyMjRhOTYuMTA4IDk2LjEwOCAwIDAgMSA5NiA5NnoiLz48cGF0aCBmaWxsPSIjNTc1ZTc1IiBkPSJNMzYwIDI0OGgzMnYzMmgtMzJ6bTAgODBoMzJ2MzJoLTMyem0tNDAtNDBoMzJ2MzJoLTMyem04MCAwaDMydjMyaC0zMnptLTI0OC00MGgtMzJ2NDBIODB2MzJoNDB2NDBoMzJ2LTQwaDQwdi0zMmgtNDB2LTQweiIvPjwvc3ZnPg==";throw new Error("Unknown asset: ".concat(e))};var L=n(1567),D=n.n(L),N=n(1568),T=n.n(N);const I={"userscript.js":async function({addon:e,global:t,console:n,msg:a}){const s=e.tab.traps.vm;await new Promise(e=>{if(s.editingTarget)return e();s.runtime.once("PROJECT_LOADED",e)});const i=()=>null!==s.runtime._steppingInterval,o=e=>{switch(e){case"right arrow":return"ArrowRight";case"up arrow":return"ArrowUp";case"left arrow":return"ArrowLeft";case"down arrow":return"ArrowDown";case"enter":return"Enter";case"space":return" "}return e.toLowerCase().charAt(0)},r=()=>{const e=[s.runtime.getTargetForStage(),...s.runtime.targets].filter(e=>e.isOriginal).map(e=>e.blocks),t=new Set;for(const n of e)for(const e of Object.values(n._blocks))if("event_whenkeypressed"===e.opcode||"sensing_keyoptions"===e.opcode){if("sensing_keyoptions"===e.opcode&&!e.parent)continue;const n=e.fields.KEY_OPTION.value;t.add(o(n))}return t},d=()=>{const e=s.runtime.getTargetForStage().comments;for(const t of Object.values(e))if(t.text.includes(" // _gamepad_"))return t;return null};x.setConsole(n);const l=new x;l.getHintsLazily=()=>{const e=(()=>{const e=d();if(!e)return null;const t=e.text.split("\n").find(e=>e.endsWith(" // _gamepad_"));if(!t)return n.warn("Gamepad comment does not contain valid line"),null;const a=t.substr(0,t.length-" // _gamepad_".length);let s;try{if(s=JSON.parse(a),!s||"object"!=typeof s||!Array.isArray(s.buttons)||!Array.isArray(s.axes))throw new Error("Invalid data")}catch(e){return n.warn("Gamepad comment has invalid JSON",e),null}return s})();return e?{importedSettings:e}:{usedKeys:r()}},s.runtime.on("PROJECT_LOADED",()=>{l.resetControls()}),e.settings.get("hide")&&await new Promise(t=>{const n=()=>{e.settings.removeEventListener("change",a),t()},a=()=>{e.settings.get("hide")||n()};l.gamepadConnected().then(n),e.settings.addEventListener("change",a)});const c=s.runtime.renderer,p=c._xRight-c._xLeft,h=c._yTop-c._yBottom,u=c.canvas,g=document.createElement("div");g.className="sa-gamepad-container",e.tab.displayNoneWhileDisabled(g,{display:"flex"});const m=document.createElement("span");m.className=e.tab.scratchClass("button_outlined-button","stage-header_stage-button");const y=document.createElement("div");y.className=e.tab.scratchClass("button_content");const b=document.createElement("img");let w;b.className=e.tab.scratchClass("stage-header_stage-button-icon"),b.draggable=!1,b.src=M("/gamepad.svg"),y.appendChild(b),m.appendChild(y),g.appendChild(m);let v=!1;const A=()=>{s.runtime.emitProjectChanged(),s.editingTarget===s.runtime.getTargetForStage()&&s.emitWorkspaceUpdate()},f=()=>{const e=w.export();if(!e)return void n.warn("Could not export gamepad settings");const t="".concat(a("config-header"),"\n").concat(JSON.stringify(e)).concat(" // _gamepad_"),i=d();if(i)i.text=t;else{s.runtime.getTargetForStage().createComment(Math.random()+"",null,t,50,50,350,150,!1)}A()},C=()=>{v&&f()},k=e=>{v=!!e.target.checked,v?f():(()=>{const e=d();if(e){delete s.runtime.getTargetForStage().comments[e.id],A()}})()},L=()=>{document.body.classList.toggle("sa-gamepad-has-controller",w.hasControllerSelected()),C()};m.addEventListener("click",()=>{w||(w=l.editor(),w.msg=a,w.addEventListener("mapping-changed",C),w.addEventListener("gamepad-changed",L));const t=w.generateEditor();L();const{backdrop:n,container:s,content:i,closeButton:o,remove:r}=e.tab.createModal(a("settings"),{isOpen:!0,useEditorClasses:!0});if(n.addEventListener("click",r),window.addEventListener("keydown",e=>{"Escape"!==e.key||e.target.closest("[data-accepting-input]")||r()}),e.self.addEventListener("disabled",r),n.classList.add("sa-gamepad-popup-outer"),s.classList.add("sa-gamepad-popup"),o.tabIndex="0",o.setAttribute("role","button"),o.addEventListener("click",r),o.addEventListener("keydown",e=>{"Enter"!==e.key&&" "!==e.key||r()}),i.classList.add("sa-gamepad-popup-content"),x.browserHasBrokenGamepadAPI()){const e=document.createElement("div");e.textContent=a("browser-support"),e.className="sa-gamepad-browser-support-warning",i.appendChild(e)}i.appendChild(t);const d=document.createElement("div");d.className="sa-gamepad-extra-options",i.appendChild(d);const c=()=>{w.updateAllContent(),g.checked=!1,v=!1},p=document.createElement("button");p.className="sa-gamepad-reset-button",p.textContent=a("reset"),p.addEventListener("click",()=>{l.resetControls(),c()}),d.appendChild(p);const h=document.createElement("button");h.className="sa-gamepad-reset-button",h.textContent=a("clear"),h.addEventListener("click",()=>{l.clearControls(),c()}),d.appendChild(h);const u=document.createElement("label");u.className="sa-gamepad-store-settings",u.textContent=a("store-in-project");const g=document.createElement("input");g.type="checkbox",g.checked=v,g.addEventListener("change",k),u.prepend(g),d.appendChild(u),w.focus()}),e.tab.redux.state&&"small"===e.tab.redux.state.scratchGui.stageSize.stageSize&&document.body.classList.add("sa-gamepad-small"),document.addEventListener("click",e=>{e.target.closest("[class*='stage-header_stage-button-first']:not(.sa-hide-stage-button)")?document.body.classList.add("sa-gamepad-small"):(e.target.closest("[class*='stage-header_stage-button-last']")||e.target.closest(".sa-hide-stage-button"))&&document.body.classList.remove("sa-gamepad-small")},{capture:!0});const D=document.createElement("img");let N;D.hidden=!0,D.className="sa-gamepad-cursor",D.src=M("/cursor.png"),e.self.addEventListener("disabled",()=>{D.hidden=!0});const T=e=>{D.hidden=!e,clearTimeout(N),e&&(document.body.classList.add("sa-gamepad-hide-cursor"),N=setTimeout(I,8e3))},I=()=>{T(!1)},O=e=>{T(!0),D.classList.toggle("sa-gamepad-cursor-down",e)};let S;if(document.addEventListener("mousemove",()=>{T(!1),document.body.classList.remove("sa-gamepad-hide-cursor")}),window.ResizeObserver){let e=p,t=h;new ResizeObserver(n=>{for(const a of n)e=a.contentRect.width,t=a.contentRect.height}).observe(u),S=()=>[e,t]}else S=()=>{const e=u.getBoundingClientRect();return[e.width,e.height]};let j=0,P=0;const z=t=>{if(e.self.disabled||!i())return;const[n,a]=S();s.postIOData("mouse",E(E({},t),{},{canvasWidth:n,canvasHeight:a,x:(j+p/2)*(n/p),y:a/h*(h/2-P)}))},Z=(t,n)=>{!e.self.disabled&&i()&&s.postIOData("keyboard",{key:t,isDown:n})};for(l.virtualCursor.maxX=c._xRight,l.virtualCursor.minX=c._xLeft,l.virtualCursor.maxY=c._yTop,l.virtualCursor.minY=c._yBottom,l.addEventListener("keydown",e=>Z(e.detail,!0)),l.addEventListener("keyup",e=>Z(e.detail,!1)),l.addEventListener("mousedown",e=>{O(!0),z({isDown:!0,button:e.detail})}),l.addEventListener("mouseup",e=>{O(!1),z({isDown:!1,button:e.detail})}),l.addEventListener("mousemove",e=>{j=e.detail.x,P=e.detail.y,((e,t)=>{T(!0);const n=p/2+e-3,a=h/2-t-3;D.style.transform="translate(".concat(n,"px, ").concat(a,"px)")})(j,P),z({})});;){const t=await e.tab.waitForElement('[class^="stage-header_embed-buttons_"], [class^="stage-header_stage-size-row"], [class^="stage-header_stage-menu-wrapper"] > [class^="button_outlined-button"]',{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","scratch-gui/mode/SET_FULL_SCREEN","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]});g.dataset.editorMode=e.tab.editorMode,t.className.includes("stage-size-row")?e.tab.appendToSharedSpace({space:"stageHeader",element:g,order:1}):e.tab.appendToSharedSpace({space:"fullscreenStageHeader",element:g,order:0});document.querySelector("[class^='monitor-list_monitor-list-scaler']").appendChild(D)}},"style.css":D.a,"gamepadlib.css":T.a}}}]);
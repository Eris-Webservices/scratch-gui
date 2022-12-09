(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[31],{1540:function(e,t,o){(e.exports=o(9)(!1)).push([e.i,'[class*="gui_tabs_"] {\n  /* overridden by other addons */\n  --sa-category-width: 60px;\n  --sa-flyout-width: 250px;\n}\n\n/* The default left-side border does not work properly when a block is being dragged, */\n/* which lets a 1 pixel column of the flyout be visible. */\n/* To fix this we use two elements that are only visible when a block is being dragged. */\n/* The first element is opaque to cover up the contents with the background color. */\n/* The other element is the transparent border color. */\n.sa-flyout-border-1,\n.sa-flyout-border-2 {\n  position: absolute;\n  /* Above flyout but below add extension button */\n  z-index: 40;\n  top: 0;\n  bottom: 8px;\n  left: -1px;\n}\n[dir="rtl"] .sa-flyout-border-1,\n[dir="rtl"] .sa-flyout-border-2 {\n  left: auto;\n  right: -1px;\n}\n.sa-flyout-border-1 {\n  border-left: 1px solid var(--ui-primary, hsla(215, 100%, 95%, 1));\n}\n.sa-flyout-border-2 {\n  border-left: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\n}\n\n.blocklyFlyout,\n.blocklyFlyoutScrollbar {\n  transition-property: margin;\n}\n\n[dir="ltr"] .blocklyFlyout.sa-flyoutClose,\n[dir="ltr"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(0px - var(--sa-flyout-width) - 10px);\n}\n\n[dir="rtl"] .blocklyFlyout.sa-flyoutClose,\n[dir="rtl"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(var(--sa-flyout-width) + 10px);\n}\n\n.sa-flyout-placeHolder {\n  display: var(--hideFlyout-placeholderDisplay) !important;\n  position: absolute;\n  height: 100%;\n  width: calc(var(--sa-flyout-width) + 1px);\n  top: 0;\n}\n\n[dir="ltr"] .sa-flyout-placeHolder {\n  left: calc(var(--sa-category-width) + 1px);\n}\n\n[dir="rtl"] .sa-flyout-placeHolder {\n  right: calc(var(--sa-category-width) + 1px);\n}\n\n.sa-lock-object {\n  display: var(--hideFlyout-lockDisplay) !important;\n  transform: translate(calc(var(--sa-flyout-width) - 15px - 32px), 3px);\n  width: 32px;\n  height: 32px;\n}\n[dir="rtl"] .sa-lock-object {\n  transform: translate(15px, 3px);\n}\n\n.sa-lock-button {\n  display: flex;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--ui-primary, white);\n  border: 1px solid var(--ui-black-transparent, rgba(0, 0, 0, 0.15));\n  border-radius: 4px;\n}\n\n.sa-lock-object.locked .sa-lock-button {\n  background-color: #ff4c4c;\n  border-color: #cc4c4c;\n}\n\n.sa-lock-button img {\n  width: 20px;\n}\n\n[theme="dark"] .sa-lock-button img {\n  filter: brightness(200%);\n}\n\n/* Setting these styles on gui_stage-and-target-wrapper breaks full screen */\n[class*="gui_body-wrapper_" ] [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen"]),\n[class*="gui_target-wrapper_"] {\n  position: relative;\n  padding-inline: 0.5rem;\n  background-color: var(--ui-primary, hsl(215, 100%, 95%));\n}\n/* Both must be above hidden flyout when dragging block with editor-stage-left enabled */\n/* Both must be above category list when columns is enabled so dragged sprites appear aren\'t obscured */\n/* Stage wrapper must be above target pane so dragged sprites aren\'t obscured */\n[class*="gui_body-wrapper_" ] [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen"]) {\n  z-index: 50;\n}\n[class*="gui_target-wrapper_"] {\n  z-index: 49;\n}\n\n[class*="gui_stage-and-target-wrapper_"] {\n  padding: 0;\n}\n\n/* https://github.com/ScratchAddons/ScratchAddons/issues/4896 */\n.Popover {\n  /* Above stage wrapper and target pane */\n  /* See editor-stage-left */\n  z-index: 51;\n}\n',""])},1597:function(e,t,o){"use strict";o.r(t),o.d(t,"resources",(function(){return s}));function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var a=o(1540);const s={"userscript.js":async function({addon:e,global:t,console:o,msg:n}){let r=null,a=null,s=null,c=null,i=null,d=null,u=!1,g=!1,p=!1,y=!0;const b=await e.tab.traps.getBlockly(),M=()=>{const e=m();document.documentElement.style.setProperty("--hideFlyout-lockDisplay",{hover:"flex",cathover:"flex",category:"none"}[e]);document.documentElement.style.setProperty("--hideFlyout-placeholderDisplay",{hover:"block",cathover:"none",category:"none"}[e])};function h(){return{none:"0",short:"0.25",default:"0.5",long:"1"}[e.settings.get("speed")]}function m(){return e.settings.get("toggle")}function f(e){for(let t of[i,d])t.style.transitionDuration="".concat(e,"s")}function v(){for(let e of[i,d])e.style.removeProperty("transition-duration")}function A(){a.classList.toggle("locked",g),s.title=n(g?"unlock":"lock"),c.src=(e=>{if("/lock.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDIgMHYtM2ExIDEgMCAwIDAtMS0xem01LTRWN0E1IDUgMCAwIDAgNyA3djJhMyAzIDAgMCAwLTMgM3Y3YTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtN2EzIDMgMCAwIDAtMy0zek05IDdhMyAzIDAgMCAxIDYgMHYySDl6bTkgMTJhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF2LTdhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==";if("/unlock.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExLjQ5IDEuNDkgMCAwIDAtMSAyLjYxVjE3YTEgMSAwIDAgMCAyIDB2LTEuMzlBMS40OSAxLjQ5IDAgMCAwIDEyIDEzem01LTRIOVY3YTMgMyAwIDAgMSA1LjEyLTIuMTMgMy4wOCAzLjA4IDAgMCAxIC43OCAxLjM4IDEgMSAwIDEgMCAxLjk0LS41IDUuMDkgNS4wOSAwIDAgMC0xLjMxLTIuMjlBNSA1IDAgMCAwIDcgN3YyYTMgMyAwIDAgMC0zIDN2N2EzIDMgMCAwIDAgMyAzaDEwYTMgMyAwIDAgMCAzLTN2LTdhMyAzIDAgMCAwLTMtM3ptMSAxMGExIDEgMCAwIDEtMSAxSDdhMSAxIDAgMCAxLTEtMXYtN2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF6IiBmaWxsPSIjNTc1ZTc1Ii8+PC9zdmc+";throw new Error("Unknown asset: ".concat(e))})("/".concat(g?"":"un","lock.svg"))}function w(e,t={}){e&&0!==e.buttons&&!document.querySelector(".blocklyToolboxDiv").className.includes("blocklyToolboxDelete")||(f(t="object"==typeof t?h():t),i.classList.remove("sa-flyoutClose"),d.classList.remove("sa-flyoutClose"),setTimeout(()=>{b.getMainWorkspace().recordCachedAreas(),v()},1e3*t)),p=!1}function I(e,t=h()){g||(e&&e.buttons?p=!0:(f(t),i.classList.add("sa-flyoutClose"),d.classList.add("sa-flyoutClose"),setTimeout(()=>{b.getMainWorkspace().recordCachedAreas(),v()},1e3*t)))}e.settings.addEventListener("change",M),M();let x=!1;function D(){if(x)return;x=!0,e.tab.redux.initialize(),e.tab.redux.addEventListener("statechanged",t=>{switch(t.detail.action.type){case"scratch-gui/navigation/ACTIVATE_TAB":const o=m();0!==t.detail.action.activeTabIndex||e.self.disabled||"hover"!==o&&"cathover"!==o||(I(null,0),u=!1)}}),document.body.addEventListener("mouseup",()=>{p&&(I(),p=!1)}),e.self.enabledLate&&"category"===m()&&b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!1),e.self.addEventListener("disabled",()=>{b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!0),b.svgResize(b.getMainWorkspace())}),e.self.addEventListener("reenabled",()=>{"category"===m()&&(b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!1),I(null,0),u=!1),b.svgResize(b.getMainWorkspace())}),e.settings.addEventListener("change",()=>{e.self.disabled||("category"===m()?g?(u=!0,g=!1,A()):(b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!1),I(null,0),u=!1):(I(),b.getMainWorkspace().getToolbox().selectedItem_.setSelected(!0)),b.svgResize(b.getMainWorkspace()))});const t=b.Toolbox.prototype.setSelectedItem;b.Toolbox.prototype.setSelectedItem=function(o,n=!0){const l=this.selectedItem_;t.call(this,o,n),e.self.disabled||"category"!==m()||(n?o===l?(u=!u,u?w():(I(),o.setSelected(!1))):u||(y=!1,u=!0,w()):o.setSelected(!1))};const o=b.Toolbox.prototype.selectCategoryById;b.Toolbox.prototype.selectCategoryById=function(...t){if(e.self.disabled||"category"!==m()||u)return o.call(this,...t)};const n=b.Flyout.prototype.stepScrollAnimation;b.Flyout.prototype.stepScrollAnimation=function(...e){return y?n.apply(this,e):(this.scrollbar_.set(this.scrollTarget),this.scrollTarget=null,void(y=!0))};const r=b.WorkspaceSvg.getTopLevelWorkspaceMetrics_;b.WorkspaceSvg.getTopLevelWorkspaceMetrics_=function(){var t,o;const n=r.call(this);return e.self.disabled||"hover"===m()||this.RTL||310===(null===(t=this.getToolbox())||void 0===t||null===(o=t.flyout_)||void 0===o?void 0:o.getWidth())?n:l(l({},n),{},{absoluteLeft:n.absoluteLeft-250,viewWidth:n.viewWidth+250})},b.getMainWorkspace()&&(b.getMainWorkspace().getMetrics=b.WorkspaceSvg.getTopLevelWorkspaceMetrics_)}for(;;){i=await e.tab.waitForElement(".blocklyFlyout",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","scratch-gui/locales/SELECT_LOCALE","fontsLoaded/SET_FONTS_LOADED"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly}),d=document.querySelector(".blocklyFlyoutScrollbar");const t=document.querySelector('[class*="gui_blocks-wrapper_"]'),o=document.querySelector(".injectionDiv"),n=document.createElement("div");n.className="sa-flyout-border-1",e.tab.displayNoneWhileDisabled(n),o.appendChild(n);const l=document.createElement("div");l.className="sa-flyout-border-2",e.tab.displayNoneWhileDisabled(l),o.appendChild(l),r&&r.remove(),r=document.createElement("div"),t.appendChild(r),r.className="sa-flyout-placeHolder",r.style.display="none",a&&a.remove(),a=document.createElementNS("http://www.w3.org/2000/svg","foreignObject"),a.setAttribute("class","sa-lock-object"),a.style.display="none",s=document.createElement("button"),s.className="sa-lock-button",c=document.createElement("img"),c.alt="",A(),s.onclick=()=>{g=!g,A()},s.appendChild(c),a.appendChild(s),i.appendChild(a),I(null,0),u=!1;const p=document.querySelector(".blocklyToolboxDiv"),y=document.querySelector("[class^=gui_extension-button-container_]");for(let t of[p,y,i,d])t.onmouseenter=t=>{const o=m();e.self.disabled||"hover"!==o&&"cathover"!==o||w(t)},t.onmouseleave=t=>{const o=m();e.self.disabled||"hover"!==o&&"cathover"!==o||I(t)};r.onmouseenter=t=>{e.self.disabled||"hover"!==m()||w(t)},r.onmouseleave=t=>{e.self.disabled||"hover"!==m()||I(t)},D(),"hover"!==m()&&b.svgResize(b.getMainWorkspace())}},"style.css":o.n(a).a}}}]);
(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[33],{1588:function(e,s,a){(e.exports=a(9)(!1)).push([e.i,'.sa-stage-button-middle > [class*="stage-header_stage-button_"] {\n  border-radius: 0;\n}\n\n[dir="ltr"] .sa-stage-button-middle > [class*="stage-header_stage-button_"] {\n  border-left: none;\n}\n\n[dir="rtl"] .sa-stage-button-middle > [class*="stage-header_stage-button_"] {\n  border-right: none;\n}\n\n.sa-stage-hidden [class*="blocks_blocks_"] .injectionDiv,\n.sa-stage-hidden [class*="asset-panel_wrapper_"],\n.sa-stage-hidden [class*="backpack_backpack-header_"] {\n  border-radius: 0;\n}\n\n.sa-stage-hidden [class*="gui_stage-and-target-wrapper_"],\n.sa-stage-hidden [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen_"]),\n.sa-stage-hidden [class*="gui_target-wrapper_"] {\n  padding: 0;\n}\n\n.sa-stage-hidden\n  [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen_"])\n  [class*="controls_controls-container_"],\n.sa-stage-hidden [class*="gui_target-wrapper_"] {\n  display: none;\n}\n.sa-stage-hidden\n  [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen_"])\n  [class*="stage-wrapper_stage-canvas-wrapper_"] {\n  /* can\'t use display: none because that causes the canvas\'s clientWidth/Height to become 0 which causes crashes */\n  visibility: hidden;\n  position: absolute;\n  z-index: -9999;\n  /* move the stage to avoid a horizontal scroll bar */\n  right: 0;\n  /* and move it up so that the mouse can\'t hover over the stage while its hidden */\n  bottom: 100%;\n}\n[dir="rtl"]\n  .sa-stage-hidden\n  [class*="stage-wrapper_stage-wrapper_"]:not([class*="stage-wrapper_full-screen_"])\n  [class*="stage-wrapper_stage-canvas-wrapper_"] {\n  right: initial;\n  left: 0;\n}\n\n.sa-stage-hidden [class*="stage-header_stage-size-row"] {\n  position: absolute;\n  top: 0;\n  right: 0.5rem;\n  height: 2.75rem;\n  align-items: center;\n}\n\n[dir="rtl"] .sa-stage-hidden [class*="stage-header_stage-size-row"] {\n  right: auto;\n  left: 0.5rem;\n}\n\n.sa-stage-hidden\n  /* specificity --\x3e */ [class*="stage-header_stage-size-row_"] /* <-- specificity */\n  [class*="stage-header_stage-button_"]:not(.sa-hide-stage-button)\n  [class*="stage-header_stage-button-icon_"] {\n  /* makes small and large stage buttons appear unselected */\n  filter: var(--editorDarkMode-accent-desaturateFilter, saturate(0));\n}\n/* from stage-header.css */\n[theme="dark"]\n  .sa-stage-hidden\n  /* specificity --\x3e */ [class*="stage-header_stage-size-row_"] /* <-- specificity */\n  [class*="stage-header_stage-button_"]:not(.sa-hide-stage-button)\n  [class*="stage-header_stage-button-icon_"] {\n  filter: brightness(0) invert(1);\n}\n\n.sa-stage-hidden-outer .scratchEyedropper {\n  display: none;\n}\n',""])},1606:function(e,s,a){"use strict";a.r(s),a.d(s,"resources",(function(){return r}));const t=e=>{if("/icon.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmY0YzRjIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTQgNGExIDEgMCAwIDAtMSAxdjEwYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY1LjVoLTRWNFoiLz48cGF0aCBkPSJNMTMgNGgzYTEgMSAwIDAgMSAxIDF2LjVoLTR6IiBmaWxsPSIjZmY0YzRjIi8+PC9nPjwvc3ZnPg==";throw new Error("Unknown asset: ".concat(e))};var n=a(1588);const r={"userscript.js":async function({addon:e,console:s,msg:a}){let n,r,i,d,o=!1;function c(){o=!0,n&&(document.body.classList.add("sa-stage-hidden-outer"),n.classList.add("sa-stage-hidden"),d.classList.remove(e.tab.scratchClass("stage-header_stage-button-toggled-off")),window.dispatchEvent(new Event("resize")))}function g(s){o=!1,n&&(document.body.classList.remove("sa-stage-hidden-outer"),n.classList.remove("sa-stage-hidden"),d.classList.add(e.tab.scratchClass("stage-header_stage-button-toggled-off")),window.dispatchEvent(new Event("resize")))}for(e.self.addEventListener("disabled",()=>g());;){const s=await e.tab.waitForElement("[class*='stage-header_stage-size-toggle-group_']",{markAsSeen:!0,reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly});n=document.querySelector("[class*='gui_body-wrapper_']"),r=s.firstChild,r.classList.add("sa-stage-button-middle"),i=s.lastChild,d=Object.assign(document.createElement("div"),{role:"button",className:e.tab.scratchClass("button_outlined-button","stage-header_stage-button","stage-header_stage-button-first",{others:"sa-hide-stage-button"})}),e.tab.displayNoneWhileDisabled(d),s.insertBefore(d,r),d.appendChild(Object.assign(document.createElement("img"),{className:e.tab.scratchClass("stage-header_stage-button-icon"),src:t("/icon.svg"),alt:a("hide-stage"),draggable:!1})),o?c():g(),d.addEventListener("click",c),r.addEventListener("click",g),i.addEventListener("click",g)}},"style.css":a.n(n).a}}}]);
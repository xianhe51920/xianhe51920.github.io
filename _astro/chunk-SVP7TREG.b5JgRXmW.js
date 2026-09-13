import{n as c}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as x}from"./src.BS26C84q.js";import{D as P,a as L,b as W,c as I,x as X,z as H}from"./chunk-DU6HZSFF.DMHfaPc4.js";import{f as q}from"./mermaid.core.DpmxmDz7.js";var N="",$="",z="",b=[],R=new Map,S=c(e=>H(e,X()),"sanitizeText"),v=c(e=>{switch(e.type){case"terminal":return{...e,value:S(e.value)};case"nonterminal":return{...e,name:S(e.name)};case"sequence":return{...e,elements:e.elements.map(v)};case"choice":return{...e,alternatives:e.alternatives.map(v)};case"optional":return{...e,element:v(e.element)};case"repetition":return{...e,element:v(e.element),separator:e.separator?v(e.separator):void 0};case"special":return{...e,text:S(e.text)}}},"sanitizeAstNode"),U=c(()=>{N="",$="",z="",b.length=0,R.clear(),L(),x.debug("[Railroad] Database cleared")},"clear"),O=c(e=>{N=S(e),x.debug("[Railroad] Title set:",e)},"setTitle"),D=c(()=>N,"getTitle"),G={clear:U,setTitle:O,getTitle:D,addRule:c(e=>{const n={...e,name:S(e.name),definition:v(e.definition),comment:e.comment?S(e.comment):void 0};x.debug("[Railroad] Adding rule:",n.name),R.has(n.name)&&x.warn(`[Railroad] Rule '${n.name}' is already defined. Overwriting.`),b.push(n),R.set(n.name,n)},"addRule"),getRules:c(()=>b,"getRules"),getRule:c(e=>R.get(e),"getRule"),setAccTitle:c(e=>{$=S(e).replace(/^\s+/g,""),x.debug("[Railroad] Accessibility title set:",e)},"setAccTitle"),getAccTitle:c(()=>$,"getAccTitle"),setAccDescription:c(e=>{z=S(e).replace(/\n\s+/g,`
`),x.debug("[Railroad] Accessibility description set:",e)},"setAccDescription"),getAccDescription:c(()=>z,"getAccDescription"),setDiagramTitle:O,getDiagramTitle:D},f={compactMode:!1,padding:10,verticalSeparation:8,horizontalSeparation:10,arcRadius:10,fontSize:14,fontFamily:"monospace",terminalFill:"#FFFFC0",terminalStroke:"#000000",terminalTextColor:"#000000",nonTerminalFill:"#FFFFFF",nonTerminalStroke:"#000000",nonTerminalTextColor:"#000000",lineColor:"#000000",strokeWidth:2,markerFill:"#000000",commentFill:"#E8E8E8",commentStroke:"#888888",commentTextColor:"#666666",specialFill:"#F0E0FF",specialStroke:"#8800CC",ruleNameColor:"#000066",showMarkers:!0,markerRadius:5},j=/^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$|^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch)\([\d\s%+,./-]+\)$|^[a-z]+$/i,K=/^[\w "',.-]+$/,J=new Set(["compactMode","padding","verticalSeparation","horizontalSeparation","arcRadius","fontSize","fontFamily","terminalFill","terminalStroke","terminalTextColor","nonTerminalFill","nonTerminalStroke","nonTerminalTextColor","lineColor","strokeWidth","markerFill","commentFill","commentStroke","commentTextColor","specialFill","specialStroke","ruleNameColor","showMarkers","markerRadius"]),_=c(e=>e?Object.keys(e).every(n=>n==="railroad"||J.has(n)):!1,"isRailroadStyleOptions"),Q=c(e=>e?"railroad"in e&&e.railroad?e.railroad:_(e)?e:{}:{},"extractRailroadOverrides"),Z=c(e=>{if(!e||_(e))return{};const{railroad:n,svgId:r,theme:t,look:i,...a}=e;return a},"extractThemeOverrides"),d=c((e,n)=>{if(typeof e!="string")return n;const r=e.trim();return j.test(r)?r:n},"sanitizeColorValue"),B=c((e,n)=>{if(typeof e!="string")return n;const r=e.trim();return K.test(r)?r:n},"sanitizeFontFamilyValue"),F=c((e,n)=>{const r=typeof e=="number"?e:typeof e=="string"?Number.parseFloat(e):NaN;return Number.isFinite(r)&&r>=0?r:n},"sanitizeNumberValue"),V=c(e=>{const n=typeof e=="number"?e:typeof e=="string"?Number.parseFloat(e):NaN;return Number.isFinite(n)&&n>0?n:void 0},"parseThemeFontSize"),ee=c(e=>{const n=B(e.fontFamily,f.fontFamily),r=V(e.fontSize)??f.fontSize;return{...f,fontFamily:n,fontSize:r,terminalFill:d(e.secondBkg??e.secondaryColor,f.terminalFill),terminalStroke:d(e.secondaryBorderColor??e.lineColor,f.terminalStroke),terminalTextColor:d(e.secondaryTextColor??e.textColor,f.terminalTextColor),nonTerminalFill:d(e.mainBkg??e.background,f.nonTerminalFill),nonTerminalStroke:d(e.primaryBorderColor??e.lineColor,f.nonTerminalStroke),nonTerminalTextColor:d(e.primaryTextColor??e.textColor,f.nonTerminalTextColor),lineColor:d(e.lineColor,f.lineColor),markerFill:d(e.lineColor,f.markerFill),commentFill:d(e.labelBackground??e.tertiaryColor,f.commentFill),commentStroke:d(e.tertiaryBorderColor??e.lineColor,f.commentStroke),commentTextColor:d(e.tertiaryTextColor??e.textColor,f.commentTextColor),specialFill:d(e.tertiaryColor??e.secondaryColor,f.specialFill),specialStroke:d(e.tertiaryBorderColor??e.secondaryBorderColor,f.specialStroke),ruleNameColor:d(e.titleColor??e.textColor,f.ruleNameColor)}},"buildThemeDefaults"),A=c(e=>{const n=W(),r=ee({...P(),...n.themeVariables??{},...Z(e)}),t={...n.railroad??{},...Q(e)};return{compactMode:t.compactMode??r.compactMode,padding:F(t.padding,r.padding),verticalSeparation:F(t.verticalSeparation,r.verticalSeparation),horizontalSeparation:F(t.horizontalSeparation,r.horizontalSeparation),arcRadius:F(t.arcRadius,r.arcRadius),fontSize:F(t.fontSize,r.fontSize),fontFamily:B(t.fontFamily,r.fontFamily),terminalFill:d(t.terminalFill,r.terminalFill),terminalStroke:d(t.terminalStroke,r.terminalStroke),terminalTextColor:d(t.terminalTextColor,r.terminalTextColor),nonTerminalFill:d(t.nonTerminalFill,r.nonTerminalFill),nonTerminalStroke:d(t.nonTerminalStroke,r.nonTerminalStroke),nonTerminalTextColor:d(t.nonTerminalTextColor,r.nonTerminalTextColor),lineColor:d(t.lineColor,r.lineColor),strokeWidth:F(t.strokeWidth,r.strokeWidth),markerFill:d(t.markerFill,r.markerFill),commentFill:d(t.commentFill,r.commentFill),commentStroke:d(t.commentStroke,r.commentStroke),commentTextColor:d(t.commentTextColor,r.commentTextColor),specialFill:d(t.specialFill,r.specialFill),specialStroke:d(t.specialStroke,r.specialStroke),ruleNameColor:d(t.ruleNameColor,r.ruleNameColor),showMarkers:t.showMarkers??r.showMarkers,markerRadius:F(t.markerRadius,r.markerRadius)}},"buildRailroadStyleOptions"),oe=c(e=>{const{fontFamily:n,fontSize:r,terminalFill:t,terminalStroke:i,terminalTextColor:a,nonTerminalFill:p,nonTerminalStroke:s,nonTerminalTextColor:l,lineColor:u,strokeWidth:o,markerFill:g,commentFill:m,commentStroke:h,commentTextColor:C,specialFill:k,specialStroke:w,ruleNameColor:y}=A(e);return`
  .railroad-diagram {
    font-family: ${n};
    font-size: ${r}px;
  }

  .railroad-terminal rect {
    fill: ${t};
    stroke: ${i};
    stroke-width: ${o}px;
  }

  .railroad-terminal text {
    fill: ${a};
    font-family: ${n};
    font-size: ${r}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-nonterminal rect {
    fill: ${p};
    stroke: ${s};
    stroke-width: ${o}px;
  }

  .railroad-nonterminal text {
    fill: ${l};
    font-family: ${n};
    font-size: ${r}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-line {
    stroke: ${u};
    stroke-width: ${o}px;
    fill: none;
  }

  .railroad-start circle,
  .railroad-end circle {
    fill: ${g};
  }

  .railroad-comment ellipse {
    fill: ${m};
    stroke: ${h};
    stroke-width: ${o}px;
  }

  .railroad-comment text {
    fill: ${C};
    font-style: italic;
    font-family: ${n};
    font-size: ${r}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-special rect {
    fill: ${k};
    stroke: ${w};
    stroke-width: ${o}px;
    stroke-dasharray: 5,3;
  }

  .railroad-special text {
    fill: ${l};
    font-family: ${n};
    font-size: ${r}px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  .railroad-rule-name {
    font-weight: bold;
    fill: ${y};
    font-family: ${n};
    font-size: ${r}px;
  }

  .railroad-group {
    /* Grouping container, no specific styles */
  }
`},"getStyles"),T=class{constructor(){this.d=""}static{c(this,"PathBuilder")}moveTo(e,n){return this.d+=`M ${e} ${n} `,this}lineTo(e,n){return this.d+=`L ${e} ${n} `,this}horizontalTo(e){return this.d+=`H ${e} `,this}verticalTo(e){return this.d+=`V ${e} `,this}arcTo(e,n,r,t,i,a,p){return this.d+=`A ${e} ${n} ${r} ${t?1:0} ${i?1:0} ${a} ${p} `,this}build(){return this.d.trim()}},te=class{constructor(e,n=A()){this.textCache=new Map,this.svg=e,this.config=n}static{c(this,"RailroadRenderer")}measureText(e){if(this.textCache.has(e))return this.textCache.get(e);const n=this.svg.append("text").attr("font-family",this.config.fontFamily).attr("font-size",this.config.fontSize).text(e),r=n.node().getBBox(),t={width:r.width,height:r.height};return n.remove(),this.textCache.set(e,t),t}renderTerminal(e,n){const r=this.measureText(n),t=r.width+this.config.padding*2,i=r.height+this.config.padding*2,a=e.append("g").attr("class","railroad-terminal");return a.append("rect").attr("x",0).attr("y",0).attr("width",t).attr("height",i).attr("rx",10).attr("ry",10),a.append("text").attr("x",t/2).attr("y",i/2).text(n),{element:a.node(),dimensions:{width:t,height:i,up:i/2,down:i/2}}}renderNonTerminal(e,n){const r=this.measureText(n),t=r.width+this.config.padding*2,i=r.height+this.config.padding*2,a=e.append("g").attr("class","railroad-nonterminal");return a.append("rect").attr("x",0).attr("y",0).attr("width",t).attr("height",i),a.append("text").attr("x",t/2).attr("y",i/2).text(n),{element:a.node(),dimensions:{width:t,height:i,up:i/2,down:i/2}}}renderSequence(e,n){const r=n.map(l=>this.renderExpression(e,l));let t=0,i=0,a=0;for(const l of r)t+=l.dimensions.width,i=Math.max(i,l.dimensions.up),a=Math.max(a,l.dimensions.down);t+=(r.length-1)*this.config.horizontalSeparation;const p=e.append("g").attr("class","railroad-sequence");let s=0;for(let l=0;l<r.length;l++){const u=r[l],o=i-u.dimensions.up;if(p.node().appendChild(u.element).setAttribute("transform",`translate(${s}, ${o})`),l<r.length-1){const g=s+u.dimensions.width,m=g+this.config.horizontalSeparation,h=i;p.append("path").attr("class","railroad-line").attr("d",new T().moveTo(g,h).lineTo(m,h).build())}s+=u.dimensions.width+this.config.horizontalSeparation}return{element:p.node(),dimensions:{width:t,height:i+a,up:i,down:a}}}renderChoice(e,n){const r=n.map(g=>this.renderExpression(e,g));let t=0,i=0;for(const g of r)t=Math.max(t,g.dimensions.width),i+=g.dimensions.height;i+=(r.length-1)*this.config.verticalSeparation;const a=this.config.arcRadius,p=a*4,s=t+p,l=e.append("g").attr("class","railroad-choice");let u=0;const o=i/2;for(const g of r){const m=u,h=m+g.dimensions.up,C=a*2+(t-g.dimensions.width)/2;l.node().appendChild(g.element).setAttribute("transform",`translate(${C}, ${m})`);const k=new T,w=h>o;h===o?k.moveTo(0,o).lineTo(C,h):k.moveTo(0,o).arcTo(a,a,0,!1,w,a,o+(w?a:-a)).lineTo(a,h-(w?a:-a)).arcTo(a,a,0,!1,!w,a*2,h).lineTo(C,h),l.append("path").attr("class","railroad-line").attr("d",k.build());const y=new T,M=C+g.dimensions.width,Y=s-a*2;h===o?y.moveTo(M,h).lineTo(s,o):y.moveTo(M,h).lineTo(Y,h).arcTo(a,a,0,!1,!w,s-a,h+(w?-a:a)).lineTo(s-a,o+(w?a:-a)).arcTo(a,a,0,!1,w,s,o),l.append("path").attr("class","railroad-line").attr("d",y.build()),u+=g.dimensions.height+this.config.verticalSeparation}return{element:l.node(),dimensions:{width:s,height:i,up:o,down:i-o}}}renderOptional(e,n){const r=this.renderExpression(e,n),t=this.config.arcRadius,i=t*2,a=r.dimensions.width+t*4,p=r.dimensions.height+i,s=e.append("g").attr("class","railroad-optional"),l=t*2,u=i;s.node().appendChild(r.element).setAttribute("transform",`translate(${l}, ${u})`);const o=u+r.dimensions.up,g=new T().moveTo(0,o).lineTo(t*2,o);s.append("path").attr("class","railroad-line").attr("d",g.build());const m=new T().moveTo(l+r.dimensions.width,o).lineTo(a,o);s.append("path").attr("class","railroad-line").attr("d",m.build());const h=new T().moveTo(0,o).arcTo(t,t,0,!1,!1,t,o-t).lineTo(t,t).arcTo(t,t,0,!1,!0,t*2,0).lineTo(a-t*2,0).arcTo(t,t,0,!1,!0,a-t,t).lineTo(a-t,o-t).arcTo(t,t,0,!1,!1,a,o);return s.append("path").attr("class","railroad-line").attr("d",h.build()),{element:s.node(),dimensions:{width:a,height:p,up:o,down:p-o}}}renderRepetition(e,n,r){const t=this.renderExpression(e,n),i=this.config.arcRadius,a=i*2,p=t.dimensions.width+i*4,s=r===0,l=t.dimensions.height+a+(s?a:0),u=e.append("g").attr("class","railroad-repetition"),o=i*2,g=s?a:0;u.node().appendChild(t.element).setAttribute("transform",`translate(${o}, ${g})`);const m=g+t.dimensions.up;u.append("path").attr("class","railroad-line").attr("d",new T().moveTo(0,m).lineTo(i*2,m).build()),u.append("path").attr("class","railroad-line").attr("d",new T().moveTo(o+t.dimensions.width,m).lineTo(p,m).build());const h=g+t.dimensions.height+i,C=new T().moveTo(o+t.dimensions.width,m).arcTo(i,i,0,!1,!0,o+t.dimensions.width+i,m+i).lineTo(o+t.dimensions.width+i,h).arcTo(i,i,0,!1,!0,o+t.dimensions.width,h+i).lineTo(i*2,h+i).arcTo(i,i,0,!1,!0,i,h).lineTo(i,m+i).arcTo(i,i,0,!1,!0,i*2,m);if(u.append("path").attr("class","railroad-line").attr("d",C.build()),s){const k=new T().moveTo(0,m).arcTo(i,i,0,!1,!1,i,m-i).lineTo(i,i).arcTo(i,i,0,!1,!0,i*2,0).lineTo(p-i*2,0).arcTo(i,i,0,!1,!0,p-i,i).lineTo(p-i,m-i).arcTo(i,i,0,!1,!1,p,m);u.append("path").attr("class","railroad-line").attr("d",k.build())}return{element:u.node(),dimensions:{width:p,height:l,up:m,down:l-m}}}renderSpecial(e,n){const r=this.measureText("? "+n+" ?"),t=r.width+this.config.padding*2,i=r.height+this.config.padding*2,a=e.append("g").attr("class","railroad-special");return a.append("rect").attr("x",0).attr("y",0).attr("width",t).attr("height",i),a.append("text").attr("x",t/2).attr("y",i/2).text("? "+n+" ?"),{element:a.node(),dimensions:{width:t,height:i,up:i/2,down:i/2}}}renderExpression(e,n){switch(n.type){case"terminal":return this.renderTerminal(e,n.value);case"nonterminal":return this.renderNonTerminal(e,n.name);case"sequence":return this.renderSequence(e,n.elements);case"choice":return this.renderChoice(e,n.alternatives);case"optional":return this.renderOptional(e,n.element);case"repetition":return this.renderRepetition(e,n.element,n.min);case"special":return this.renderSpecial(e,n.text);default:throw new Error(`Unknown node type: ${n.type}`)}}renderRule(e,n){const r=this.svg.append("g").attr("class","railroad-rule").attr("transform",`translate(0, ${n})`),t=e.name+" =",i=this.measureText(t).width+20,a=i+20,p=r.append("g"),s=this.renderExpression(p,e.definition),l=Math.max(20,s.dimensions.up),u=l-s.dimensions.up;return p.attr("transform",`translate(${a}, ${u})`),r.append("g").attr("class","railroad-rule-name-group").append("text").attr("class","railroad-rule-name").attr("x",0).attr("y",l).text(t),r.append("g").attr("class","railroad-start").append("circle").attr("cx",i).attr("cy",l).attr("r",this.config.markerRadius),r.append("g").attr("class","railroad-end").append("circle").attr("cx",a+s.dimensions.width+10).attr("cy",l).attr("r",this.config.markerRadius),r.append("path").attr("class","railroad-line").attr("d",new T().moveTo(i+this.config.markerRadius,l).lineTo(a,l).build()),r.append("path").attr("class","railroad-line").attr("d",new T().moveTo(a+s.dimensions.width,l).lineTo(a+s.dimensions.width+10-this.config.markerRadius,l).build()),{height:Math.max(40,u+s.dimensions.height+this.config.padding*2),width:a+s.dimensions.width+10+this.config.markerRadius}}renderDiagram(e){let n=this.config.padding,r=0;for(const t of e){const i=this.renderRule(t,n);n+=i.height+this.config.verticalSeparation,r=Math.max(r,i.width)}return{width:r+this.config.padding*2,height:n+this.config.padding}}},E=c((e,n,r)=>{I(e,n.height,n.width,r),e.attr("viewBox",`0 0 ${n.width} ${n.height}`)},"configureRailroadSvgSize"),le={draw:c((e,n,r)=>{x.debug(`[Railroad] Rendering diagram
`+e);try{const t=q(n);t.attr("class","railroad-diagram");const i=W().railroad?.useMaxWidth??!0,a=G.getRules();if(x.debug(`[Railroad] Rendering ${a.length} rules`),a.length===0){x.warn("[Railroad] No rules to render"),E(t,{height:100,width:200},i);return}E(t,new te(t,A()).renderDiagram(a),i),x.debug("[Railroad] Render complete")}catch(t){throw x.error("[Railroad] Render error:",t),t}},"draw")};export{oe as n,le as r,G as t};

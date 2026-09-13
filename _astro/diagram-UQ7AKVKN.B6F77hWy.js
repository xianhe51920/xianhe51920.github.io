import{n as O}from"./mermaid-parser.core.HIvt3kyg.js";import{n as c}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as C}from"./src.BS26C84q.js";import{D as R,H as I,K as _,U as D,a as E,b,c as F,f as P,v as z,w as G,y as B}from"./chunk-DU6HZSFF.DMHfaPc4.js";import{i as y}from"./chunk-75Z2AOVW.CXF2pzwk.js";import{t as W}from"./chunk-JWPE2WC7.B73i2ts8.js";import{f as H}from"./mermaid.core.DpmxmDz7.js";var x={showLegend:!0,ticks:5,max:null,min:0,graticule:"circle"},f=32,A={axes:[],curves:[],options:x},p=structuredClone(A),U=P.radar,V=c(()=>y({...U,...b().radar}),"getConfig"),M=c(()=>p.axes,"getAxes"),j=c(()=>p.curves,"getCurves"),K=c(()=>p.options,"getOptions"),X=c(a=>{p.axes=a.map(t=>({name:t.name,label:t.label??t.name}))},"setAxes"),N=c(a=>{p.curves=a.map(t=>({name:t.name,label:t.label??t.name,entries:Y(t.entries)}))},"setCurves"),Y=c(a=>{if(a[0].axis==null)return a.map(e=>e.value);const t=M();if(t.length===0)throw new Error("Axes must be populated before curves for reference entries");return t.map(e=>{const r=a.find(s=>s.axis?.$refText===e.name);if(r===void 0)throw new Error("Missing entry for axis "+e.label);return r.value})},"computeCurveEntries"),h={getAxes:M,getCurves:j,getOptions:K,setAxes:X,setCurves:N,setOptions:c(a=>{const t=a.reduce((e,r)=>(e[r.name]=r,e),{});p.options={showLegend:t.showLegend?.value??x.showLegend,ticks:t.ticks?.value??x.ticks,max:t.max?.value??x.max,min:t.min?.value??x.min,graticule:t.graticule?.value??x.graticule},p.options.ticks>f&&(C.warn(`Radar diagram ticks (${p.options.ticks}) exceeds maximum allowed (${f}). Using ${f} instead.`),p.options.ticks=f)},"setOptions"),getConfig:V,clear:c(()=>{E(),p=structuredClone(A)},"clear"),setAccTitle:D,getAccTitle:B,setDiagramTitle:_,getDiagramTitle:G,getAccDescription:z,setAccDescription:I},Z=c(a=>{W(a,h);const{axes:t,curves:e,options:r}=a;h.setAxes(t),h.setCurves(e),h.setOptions(r)},"populate"),q={parse:c(async a=>{const t=await O("radar",a);C.debug(t),Z(t)},"parse")},J=c((a,t,e,r)=>{const s=r.db,i=s.getAxes(),l=s.getCurves(),n=s.getOptions(),o=s.getConfig(),d=s.getDiagramTitle(),u=Q(H(t),o),m=n.max??Math.max(...l.map($=>Math.max(...$.entries))),g=n.min,v=Math.min(o.width,o.height)/2;tt(u,i,v,n.ticks,n.graticule),et(u,i,v,o),L(u,i,l,g,m,n.graticule,o),k(u,l,n.showLegend,o),u.append("text").attr("class","radarTitle").text(d).attr("x",0).attr("y",-o.height/2-o.marginTop)},"draw"),Q=c((a,t)=>{const e=t.width+t.marginLeft+t.marginRight,r=t.height+t.marginTop+t.marginBottom,s={x:t.marginLeft+t.width/2,y:t.marginTop+t.height/2};return F(a,r,e,t.useMaxWidth??!0),a.attr("viewBox",`0 0 ${e} ${r}`).attr("overflow","visible"),a.append("g").attr("transform",`translate(${s.x}, ${s.y})`)},"drawFrame"),tt=c((a,t,e,r,s)=>{if(s==="circle")for(let i=0;i<r;i++){const l=e*(i+1)/r;a.append("circle").attr("r",l).attr("class","radarGraticule")}else if(s==="polygon"){const i=t.length;for(let l=0;l<r;l++){const n=e*(l+1)/r,o=t.map((d,u)=>{const m=2*u*Math.PI/i-Math.PI/2;return`${n*Math.cos(m)},${n*Math.sin(m)}`}).join(" ");a.append("polygon").attr("points",o).attr("class","radarGraticule")}}},"drawGraticule"),et=c((a,t,e,r)=>{const s=t.length;for(let i=0;i<s;i++){const l=t[i].label,n=2*i*Math.PI/s-Math.PI/2,o=Math.cos(n),d=Math.sin(n);a.append("line").attr("x1",0).attr("y1",0).attr("x2",e*r.axisScaleFactor*o).attr("y2",e*r.axisScaleFactor*d).attr("class","radarAxisLine");const u=o>.01?"start":o<-.01?"end":"middle",m=d>.01?"hanging":d<-.01?"auto":"central",g=4;a.append("text").text(l).attr("x",e*r.axisLabelFactor*o+g*o).attr("y",e*r.axisLabelFactor*d+g*d).attr("text-anchor",u).attr("dominant-baseline",m).attr("class","radarAxisLabel")}},"drawAxes");function L(a,t,e,r,s,i,l){const n=t.length,o=Math.min(l.width,l.height)/2;e.forEach((d,u)=>{if(d.entries.length!==n)return;const m=d.entries.map((g,v)=>{const $=2*Math.PI*v/n-Math.PI/2,w=T(g,r,s,o);return{x:w*Math.cos($),y:w*Math.sin($)}});i==="circle"?a.append("path").attr("d",S(m,l.curveTension)).attr("class",`radarCurve-${u}`):i==="polygon"&&a.append("polygon").attr("points",m.map(g=>`${g.x},${g.y}`).join(" ")).attr("class",`radarCurve-${u}`)})}c(L,"drawCurves");function T(a,t,e,r){return r*(Math.min(Math.max(a,t),e)-t)/(e-t)}c(T,"relativeRadius");function S(a,t){const e=a.length;let r=`M${a[0].x},${a[0].y}`;for(let s=0;s<e;s++){const i=a[(s-1+e)%e],l=a[s],n=a[(s+1)%e],o=a[(s+2)%e],d={x:l.x+(n.x-i.x)*t,y:l.y+(n.y-i.y)*t},u={x:n.x-(o.x-l.x)*t,y:n.y-(o.y-l.y)*t};r+=` C${d.x},${d.y} ${u.x},${u.y} ${n.x},${n.y}`}return`${r} Z`}c(S,"closedRoundCurve");function k(a,t,e,r){if(!e)return;const s=(r.width/2+r.marginRight)*3/4,i=-(r.height/2+r.marginTop)*3/4,l=20;t.forEach((n,o)=>{const d=a.append("g").attr("transform",`translate(${s}, ${i+o*l})`);d.append("rect").attr("width",12).attr("height",12).attr("class",`radarLegendBox-${o}`),d.append("text").attr("x",16).attr("y",0).attr("class","radarLegendText").text(n.label)})}c(k,"drawLegend");var at={draw:J},rt=c((a,t)=>{let e="";for(let r=0;r<a.THEME_COLOR_LIMIT;r++){const s=a[`cScale${r}`];e+=`
		.radarCurve-${r} {
			color: ${s};
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
			stroke-width: ${t.curveStrokeWidth};
		}
		.radarLegendBox-${r} {
			fill: ${s};
			fill-opacity: ${t.curveOpacity};
			stroke: ${s};
		}
		`}return e},"genIndexStyles"),st=c(a=>{const t=R(),e=b(),r=y(t,e.themeVariables);return{themeVariables:r,radarOptions:y(r.radar,a)}},"buildRadarStyleOptions"),pt={parser:q,db:h,renderer:at,styles:c(({radar:a}={})=>{const{themeVariables:t,radarOptions:e}=st(a);return`
	.radarTitle {
		font-size: ${t.fontSize};
		color: ${t.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${e.axisColor};
		stroke-width: ${e.axisStrokeWidth};
	}
	.radarAxisLabel {
		font-size: ${e.axisLabelFontSize}px;
		color: ${e.axisColor};
	}
	.radarGraticule {
		fill: ${e.graticuleColor};
		fill-opacity: ${e.graticuleOpacity};
		stroke: ${e.graticuleColor};
		stroke-width: ${e.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${e.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${rt(t,e)}
	`},"styles")};export{pt as diagram};

import{n as rt}from"./mermaid-parser.core.HIvt3kyg.js";import{n as u}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as B}from"./src.BS26C84q.js";import{H as nt,K as it,U as ot,a as st,c as lt,f as ct,v as ut,w as dt,x as ft,y as gt}from"./chunk-DU6HZSFF.DMHfaPc4.js";import{t as pt}from"./ordinal.BwfCyWcf.js";import{n as C}from"./path.B-366Oci.js";import{m as G}from"./dist.C9HjF2Tm.js";import{t as Z}from"./arc.CjbfFfcm.js";import{t as ht}from"./array.DbBWA3E_.js";import{i as mt,p as vt}from"./chunk-75Z2AOVW.CXF2pzwk.js";import{t as xt}from"./chunk-JWPE2WC7.B73i2ts8.js";import{f as yt}from"./mermaid.core.DpmxmDz7.js";function St(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function wt(t){return t}function At(){var t=wt,r=St,h=null,l=C(0),c=C(G),$=C(0);function n(e){var o,m=(e=ht(e)).length,v,D,w=0,f=new Array(m),i=new Array(m),A=+l.apply(this,arguments),k=Math.min(G,Math.max(-G,c.apply(this,arguments)-A)),T,M=Math.min(Math.abs(k)/m,$.apply(this,arguments)),g=M*(k<0?-1:1),x;for(o=0;o<m;++o)(x=i[f[o]=o]=+t(e[o],o,e))>0&&(w+=x);for(r!=null?f.sort(function(_,p){return r(i[_],i[p])}):h!=null&&f.sort(function(_,p){return h(e[_],e[p])}),o=0,D=w?(k-m*g)/w:0;o<m;++o,A=T)v=f[o],x=i[v],T=A+(x>0?x*D:0)+g,i[v]={data:e[v],index:o,value:x,startAngle:A,endAngle:T,padAngle:M};return i}return n.value=function(e){return arguments.length?(t=typeof e=="function"?e:C(+e),n):t},n.sortValues=function(e){return arguments.length?(r=e,h=null,n):r},n.sort=function(e){return arguments.length?(h=e,r=null,n):h},n.startAngle=function(e){return arguments.length?(l=typeof e=="function"?e:C(+e),n):l},n.endAngle=function(e){return arguments.length?(c=typeof e=="function"?e:C(+e),n):c},n.padAngle=function(e){return arguments.length?($=typeof e=="function"?e:C(+e),n):$},n}var q=ct.pie,U={sections:new Map,showData:!1,config:q},L=U.sections,I=U.showData,Ct=structuredClone(q),J={getConfig:u(()=>structuredClone(Ct),"getConfig"),clear:u(()=>{L=new Map,I=U.showData,st()},"clear"),setDiagramTitle:it,getDiagramTitle:dt,setAccTitle:ot,getAccTitle:gt,setAccDescription:nt,getAccDescription:ut,addSection:u(({label:t,value:r})=>{if(r<0)throw new Error(`"${t}" has invalid value: ${r}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);L.has(t)||(L.set(t,r),B.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),getSections:u(()=>L,"getSections"),setShowData:u(t=>{I=t},"setShowData"),getShowData:u(()=>I,"getShowData")},$t=u((t,r)=>{xt(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),Dt={parse:u(async t=>{const r=await rt("pie",t);B.debug(r),$t(r,J)},"parse")},Tt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),bt=u(t=>{const r=[...t.values()].reduce((l,c)=>l+c,0),h=[...t.entries()].map(([l,c])=>({label:l,value:c})).filter(l=>l.value/r*100>=1);return At().value(l=>l.value).sort(null)(h)},"createPieArcs"),Rt={parser:Dt,db:J,renderer:{draw:u((t,r,h,l)=>{B.debug(`rendering pie chart
`+t);const c=l.db,$=ft(),n=mt(c.getConfig(),$.pie),e=40,o=18,m=4,v=450,D=v,w=yt(r),f=w.append("g");f.attr("transform","translate(225,225)");const{themeVariables:i}=$;let[A]=vt(i.pieOuterStrokeWidth);A??=2;const k=n.legendPosition,T=n.textPosition,M=n.donutHole>0&&n.donutHole<=.9?n.donutHole:0,g=Math.min(D,v)/2-e,x=Z().innerRadius(M*g).outerRadius(g),_=Z().innerRadius(g*T).outerRadius(g*T),p=f.append("g");p.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const z=c.getSections(),Q=bt(z),Y=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let W=0;z.forEach(a=>{W+=a});const V=Q.filter(a=>(a.data.value/W*100).toFixed(0)!=="0"),F=pt(Y).domain([...z.keys()]);p.selectAll("mySlices").data(V).enter().append("path").attr("d",x).attr("fill",a=>F(a.data.label)).attr("class",a=>{let s="pieCircle";return n.highlightSlice==="hover"?s+=" highlightedOnHover":n.highlightSlice===a.data.label&&(s+=" highlighted"),s}),p.selectAll("mySlices").data(V).enter().append("text").text(a=>(a.data.value/W*100).toFixed(0)+"%").attr("transform",a=>"translate("+_.centroid(a)+")").style("text-anchor","middle").attr("class","slice");const tt=f.append("text").text(c.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText"),E=[...z.entries()].map(([a,s])=>({label:a,value:s})),y=f.selectAll(".legend").data(E).enter().append("g").attr("class","legend");y.append("rect").attr("width",o).attr("height",o).style("fill",a=>F(a.label)).style("stroke",a=>F(a.label)),y.append("text").attr("x",22).attr("y",14).text(a=>c.getShowData()?`${a.label} [${a.value}]`:a.label);const b=Math.max(...y.selectAll("text").nodes().map(a=>a?.getBoundingClientRect().width??0));let H=v,N=490;const d=22,O=E.length*d;switch(k){case"center":y.attr("transform",(a,s)=>{const S=d*E.length/2,P=-b/2-22,R=s*d-S;return"translate("+P+","+R+")"});break;case"top":H+=O,y.attr("transform",(a,s)=>{const S=g;return`translate(${-b/2-22}, ${s*d-S})`}),p.attr("transform",()=>`translate(0, ${O+d})`);break;case"bottom":H+=O,y.attr("transform",(a,s)=>{const P=-b/2-22,R=s*d- -207;return"translate("+P+","+R+")"});break;case"left":N+=22+b,y.attr("transform",(a,s)=>{const S=d*E.length/2;return"translate(-207,"+(s*d-S)+")"}),p.attr("transform",()=>`translate(${b+o+m}, 0)`);break;default:N+=22+b,y.attr("transform",(a,s)=>{const S=d*E.length/2;return"translate(216,"+(s*d-S)+")"})}const j=tt.node()?.getBoundingClientRect().width??0,et=D/2-j/2,at=D/2+j/2,K=Math.min(0,et),X=Math.max(N,at)-K;w.attr("viewBox",`${K} 0 ${X} ${H}`),lt(w,H,X,n.useMaxWidth)},"draw")},styles:Tt};export{Rt as diagram};

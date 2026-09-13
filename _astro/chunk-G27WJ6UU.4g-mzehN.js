import{n as u}from"./chunk-Y2CYZVJY.CrVYBJys.js";import{m as _,p as Dt}from"./src.BS26C84q.js";import{$ as ee,H as se,K as ie,U as re,a as ae,s as U,v as ne,w as oe,x as $,y as le}from"./chunk-DU6HZSFF.DMHfaPc4.js";import{g as ce,s as he}from"./chunk-75Z2AOVW.CXF2pzwk.js";import{t as ue}from"./chunk-F27PBJKO.CdXonX0p.js";import{t as de}from"./chunk-XXDRQBXY.CV8_LiZP.js";import{t as fe}from"./chunk-POPQ4Y6H.CYJh8SSG.js";import{d as pe}from"./mermaid.core.DpmxmDz7.js";var Ct=(function(){var t=u(function(a,f,l,p){for(l=l||{},p=a.length;p--;l[a[p]]=f);return l},"o"),e=[1,2],r=[1,3],s=[1,4],h=[2,4],c=[1,9],y=[1,11],T=[1,16],n=[1,17],g=[1,18],v=[1,19],C=[1,33],A=[1,20],R=[1,21],d=[1,22],b=[1,23],w=[1,24],I=[1,26],B=[1,27],k=[1,28],P=[1,29],et=[1,30],st=[1,31],it=[1,32],rt=[1,35],at=[1,36],nt=[1,37],ot=[1,38],j=[1,34],S=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],lt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],Lt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],gt={trace:u(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:u(function(f,l,p,m,E,i,G){var o=i.length-1;switch(E){case 3:return m.setRootDoc(i[o]),i[o];case 4:this.$=[];break;case 5:i[o]!="nl"&&(i[o-1].push(i[o]),this.$=i[o-1]);break;case 6:case 7:this.$=i[o];break;case 8:this.$="nl";break;case 12:this.$=i[o];break;case 13:const ht=i[o-1];ht.description=m.trimColon(i[o]),this.$=ht;break;case 14:this.$={stmt:"relation",state1:i[o-2],state2:i[o]};break;case 15:const ut=m.trimColon(i[o]);this.$={stmt:"relation",state1:i[o-3],state2:i[o-1],description:ut};break;case 19:this.$={stmt:"state",id:i[o-3],type:"default",description:"",doc:i[o-1]};break;case 20:var V=i[o],H=i[o-2].trim();if(i[o].match(":")){var J=i[o].split(":");V=J[0],H=[H,J[1]]}this.$={stmt:"state",id:V,type:"default",description:H};break;case 21:this.$={stmt:"state",id:i[o-3],type:"default",description:i[o-5],doc:i[o-1]};break;case 22:this.$={stmt:"state",id:i[o],type:"fork"};break;case 23:this.$={stmt:"state",id:i[o],type:"join"};break;case 24:this.$={stmt:"state",id:i[o],type:"choice"};break;case 25:this.$={stmt:"state",id:m.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[o-1].trim(),note:{position:i[o-2].trim(),text:i[o].trim()}};break;case 29:this.$=i[o].trim(),m.setAccTitle(this.$);break;case 30:case 31:this.$=i[o].trim(),m.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:i[o-3],url:i[o-2],tooltip:i[o-1]};break;case 33:this.$={stmt:"click",id:i[o-3],url:i[o-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:i[o-1].trim(),classes:i[o].trim()};break;case 36:this.$={stmt:"style",id:i[o-1].trim(),styleClass:i[o].trim()};break;case 37:this.$={stmt:"applyClass",id:i[o-1].trim(),styleClass:i[o].trim()};break;case 38:m.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:m.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:m.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:m.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:i[o].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:i[o-2].trim(),classes:[i[o].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:i[o-2].trim(),classes:[i[o].trim()],type:"default",description:""}}},"anonymous"),table:[{3:1,4:e,5:r,6:s},{1:[3]},{3:5,4:e,5:r,6:s},{3:6,4:e,5:r,6:s},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],h,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:c,5:y,8:8,9:10,10:12,11:13,12:14,13:15,16:T,17:n,19:g,22:v,24:C,25:A,26:R,27:d,28:b,29:w,32:25,33:I,35:B,37:k,38:P,41:et,45:st,48:it,51:rt,52:at,53:nt,54:ot,57:j},t(S,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:T,17:n,19:g,22:v,24:C,25:A,26:R,27:d,28:b,29:w,32:25,33:I,35:B,37:k,38:P,41:et,45:st,48:it,51:rt,52:at,53:nt,54:ot,57:j},t(S,[2,7]),t(S,[2,8]),t(S,[2,9]),t(S,[2,10]),t(S,[2,11]),t(S,[2,12],{14:[1,40],15:[1,41]}),t(S,[2,16]),{18:[1,42]},t(S,[2,18],{20:[1,43]}),{23:[1,44]},t(S,[2,22]),t(S,[2,23]),t(S,[2,24]),t(S,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(S,[2,28]),{34:[1,49]},{36:[1,50]},t(S,[2,31]),{13:51,24:C,57:j},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(lt,[2,44],{58:[1,56]}),t(lt,[2,45],{58:[1,57]}),t(S,[2,38]),t(S,[2,39]),t(S,[2,40]),t(S,[2,41]),t(S,[2,6]),t(S,[2,13]),{13:58,24:C,57:j},t(S,[2,17]),t(Lt,h,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(S,[2,29]),t(S,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(S,[2,14],{14:[1,71]}),{4:c,5:y,8:8,9:10,10:12,11:13,12:14,13:15,16:T,17:n,19:g,21:[1,72],22:v,24:C,25:A,26:R,27:d,28:b,29:w,32:25,33:I,35:B,37:k,38:P,41:et,45:st,48:it,51:rt,52:at,53:nt,54:ot,57:j},t(S,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(S,[2,34]),t(S,[2,35]),t(S,[2,36]),t(S,[2,37]),t(lt,[2,46]),t(lt,[2,47]),t(S,[2,15]),t(S,[2,19]),t(Lt,h,{7:78}),t(S,[2,26]),t(S,[2,27]),{5:[1,79]},{5:[1,80]},{4:c,5:y,8:8,9:10,10:12,11:13,12:14,13:15,16:T,17:n,19:g,21:[1,81],22:v,24:C,25:A,26:R,27:d,28:b,29:w,32:25,33:I,35:B,37:k,38:P,41:et,45:st,48:it,51:rt,52:at,53:nt,54:ot,57:j},t(S,[2,32]),t(S,[2,33]),t(S,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:u(function(f,l){if(l.recoverable)this.trace(f);else{var p=new Error(f);throw p.hash=l,p}},"parseError"),parse:u(function(f){var l=this,p=[0],m=[],E=[null],i=[],G=this.table,o="",V=0,H=0,J=0,ht=2,ut=1,Qt=i.slice.call(arguments,1),D=Object.create(this.lexer),M={yy:{}};for(var Tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Tt)&&(M.yy[Tt]=this.yy[Tt]);D.setInput(f,M.yy),M.yy.lexer=D,M.yy.parser=this,typeof D.yylloc>"u"&&(D.yylloc={});var mt=D.yylloc;i.push(mt);var Zt=D.options&&D.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function te(O){p.length=p.length-2*O,E.length=E.length-O,i.length=i.length-O}u(te,"popStack");function It(){var O=m.pop()||D.lex()||ut;return typeof O!="number"&&(O instanceof Array&&(m=O,O=m.pop()),O=l.symbols_[O]||O),O}u(It,"lex");for(var x,Et,W,N,_t,z={},dt,Y,wt,ft;;){if(W=p[p.length-1],this.defaultActions[W]?N=this.defaultActions[W]:((x===null||typeof x>"u")&&(x=It()),N=G[W]&&G[W][x]),typeof N>"u"||!N.length||!N[0]){var bt="";ft=[];for(dt in G[W])this.terminals_[dt]&&dt>ht&&ft.push("'"+this.terminals_[dt]+"'");D.showPosition?bt="Parse error on line "+(V+1)+`:
`+D.showPosition()+`
Expecting `+ft.join(", ")+", got '"+(this.terminals_[x]||x)+"'":bt="Parse error on line "+(V+1)+": Unexpected "+(x==ut?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(bt,{text:D.match,token:this.terminals_[x]||x,line:D.yylineno,loc:mt,expected:ft})}if(N[0]instanceof Array&&N.length>1)throw new Error("Parse Error: multiple actions possible at state: "+W+", token: "+x);switch(N[0]){case 1:p.push(x),E.push(D.yytext),i.push(D.yylloc),p.push(N[1]),x=null,Et?(x=Et,Et=null):(H=D.yyleng,o=D.yytext,V=D.yylineno,mt=D.yylloc,J>0&&J--);break;case 2:if(Y=this.productions_[N[1]][1],z.$=E[E.length-Y],z._$={first_line:i[i.length-(Y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(Y||1)].first_column,last_column:i[i.length-1].last_column},Zt&&(z._$.range=[i[i.length-(Y||1)].range[0],i[i.length-1].range[1]]),_t=this.performAction.apply(z,[o,H,V,M.yy,N[1],E,i].concat(Qt)),typeof _t<"u")return _t;Y&&(p=p.slice(0,-1*Y*2),E=E.slice(0,-1*Y),i=i.slice(0,-1*Y)),p.push(this.productions_[N[1]][0]),E.push(z.$),i.push(z._$),wt=G[p[p.length-2]][p[p.length-1]],p.push(wt);break;case 3:return!0}}return!0},"parse")};gt.lexer=(function(){return{EOF:1,parseError:u(function(f,l){if(this.yy.parser)this.yy.parser.parseError(f,l);else throw new Error(f)},"parseError"),setInput:u(function(a,f){return this.yy=f||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:u(function(){var a=this._input[0];return this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a,a.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},"input"),unput:u(function(a){var f=a.length,l=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-f),this.offset-=f;var p=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),l.length-1&&(this.yylineno-=l.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:l?(l.length===p.length?this.yylloc.first_column:0)+p[p.length-l.length].length-l[0].length:this.yylloc.first_column-f},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-f]),this.yyleng=this.yytext.length,this},"unput"),more:u(function(){return this._more=!0,this},"more"),reject:u(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:u(function(a){this.unput(this.match.slice(a))},"less"),pastInput:u(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:u(function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:u(function(){var a=this.pastInput(),f=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+f+"^"},"showPosition"),test_match:u(function(a,f){var l,p,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),p=a[0].match(/(?:\r\n?|\n).*/g),p&&(this.yylineno+=p.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:p?p[p.length-1].length-p[p.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],l=this.performAction.call(this,this.yy,this,f,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l)return l;if(this._backtrack){for(var E in m)this[E]=m[E];return!1}return!1},"test_match"),next:u(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,f,l,p;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),E=0;E<m.length;E++)if(l=this._input.match(this.rules[m[E]]),l&&(!f||l[0].length>f[0].length)){if(f=l,p=E,this.options.backtrack_lexer){if(a=this.test_match(l,m[E]),a!==!1)return a;if(this._backtrack){f=!1;continue}else return!1}else if(!this.options.flex)break}return f?(a=this.test_match(f,m[p]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:u(function(){var f=this.next();return f||this.lex()},"lex"),begin:u(function(f){this.conditionStack.push(f)},"begin"),popState:u(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:u(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:u(function(f){return f=this.conditionStack.length-1-Math.abs(f||0),f>=0?this.conditionStack[f]:"INITIAL"},"topState"),pushState:u(function(f){this.begin(f)},"pushState"),stateStackSize:u(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:u(function(f,l,p,m){function E(){const i=l.yytext.indexOf("%%");if(i===0)return!1;if(i>0){const G=l.yytext.slice(0,i),o=l.yytext.slice(i);o&&f.lexer.unput(o),l.yytext=G}return!0}switch(u(E,"processId"),p){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:break;case 13:return this.pushState("SCALE"),17;case 14:return 18;case 15:this.popState();break;case 16:return this.begin("acc_title"),33;case 17:return this.popState(),"acc_title_value";case 18:return this.begin("acc_descr"),35;case 19:return this.popState(),"acc_descr_value";case 20:this.begin("acc_descr_multiline");break;case 21:this.popState();break;case 22:return"acc_descr_multiline_value";case 23:return this.pushState("CLASSDEF"),41;case 24:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 25:return this.popState(),this.pushState("CLASSDEFID"),42;case 26:return this.popState(),43;case 27:return this.pushState("CLASS"),48;case 28:return this.popState(),this.pushState("CLASS_STYLE"),49;case 29:return this.popState(),50;case 30:return this.pushState("STYLE"),45;case 31:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 32:return this.popState(),47;case 33:return this.pushState("SCALE"),17;case 34:return 18;case 35:this.popState();break;case 36:this.pushState("STATE");break;case 37:return this.popState(),l.yytext=l.yytext.slice(0,-8).trim(),25;case 38:return this.popState(),l.yytext=l.yytext.slice(0,-8).trim(),26;case 39:return this.popState(),l.yytext=l.yytext.slice(0,-10).trim(),27;case 40:return this.popState(),l.yytext=l.yytext.slice(0,-8).trim(),25;case 41:return this.popState(),l.yytext=l.yytext.slice(0,-8).trim(),26;case 42:return this.popState(),l.yytext=l.yytext.slice(0,-10).trim(),27;case 43:return 51;case 44:return 52;case 45:return 53;case 46:return 54;case 47:this.pushState("STATE_STRING");break;case 48:return this.pushState("STATE_ID"),"AS";case 49:return E()?(this.popState(),"ID"):void 0;case 50:this.popState();break;case 51:return"STATE_DESCR";case 52:throw new Error('Error: State name must be a single word. Found: "'+l.yytext.trim()+'"');case 53:return 19;case 54:this.popState();break;case 55:return this.popState(),this.pushState("struct"),20;case 56:return this.popState(),21;case 57:break;case 58:return this.begin("NOTE"),29;case 59:return this.popState(),this.pushState("NOTE_ID"),59;case 60:return this.popState(),this.pushState("NOTE_ID"),60;case 61:this.popState(),this.pushState("FLOATING_NOTE");break;case 62:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 63:break;case 64:return"NOTE_TEXT";case 65:return E()?(this.popState(),"ID"):void 0;case 66:return E()?(this.popState(),this.pushState("NOTE_TEXT"),24):void 0;case 67:return this.popState(),l.yytext=l.yytext.substr(2).trim(),31;case 68:return this.popState(),l.yytext=l.yytext.slice(0,-8).trim(),31;case 69:return 6;case 70:return 6;case 71:return 16;case 72:return 57;case 73:return E()?24:void 0;case 74:return l.yytext=l.yytext.trim(),14;case 75:return 15;case 76:return 28;case 77:return 58;case 78:return 5;case 79:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\w+\s+\w+.*?\{)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?\n\s*end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:(?:[^:\n;]|:[^:\n;])+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[10,11,12],inclusive:!1},struct:{rules:[10,11,12,23,27,30,36,43,44,45,46,56,57,58,72,73,74,75,76,77],inclusive:!1},FLOATING_NOTE_ID:{rules:[65],inclusive:!1},FLOATING_NOTE:{rules:[62,63,64],inclusive:!1},NOTE_TEXT:{rules:[67,68],inclusive:!1},NOTE_ID:{rules:[66],inclusive:!1},NOTE:{rules:[59,60,61],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[32],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[31],inclusive:!1},CLASS_STYLE:{rules:[29],inclusive:!1},CLASS:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[26],inclusive:!1},CLASSDEF:{rules:[24,25],inclusive:!1},acc_descr_multiline:{rules:[21,22],inclusive:!1},acc_descr:{rules:[19],inclusive:!1},acc_title:{rules:[17],inclusive:!1},SCALE:{rules:[14,15,34,35],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[49],inclusive:!1},STATE_STRING:{rules:[50,51],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[10,11,12,37,38,39,40,41,42,47,48,52,53,54,55],inclusive:!1},ID:{rules:[10,11,12],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,11,12,13,16,18,20,23,27,30,33,36,55,58,69,70,71,72,73,74,75,77,78,79],inclusive:!0}}}})();function ct(){this.yy={}}return u(ct,"Parser"),ct.prototype=gt,gt.Parser=ct,new ct})();Ct.parser=Ct;var Ve=Ct,Se="TB",Ft="TB",Nt="dir",X="state",K="root",At="relation",ye="classDef",ge="style",Te="applyClass",Z="default",Gt="divider",Vt="fill:none",Mt="fill: #333",Wt="c",Ut="markdown",jt="normal",kt="rect",vt="rectWithTitle",me="stateStart",Ee="stateEnd",Ot="divider",Rt="roundedWithTitle",_e="note",be="noteGroup",tt="statediagram",De=`${tt}-state`,Ht="transition",ke="note",ve=`${Ht} note-edge`,Ce=`${tt}-${ke}`,Ae=`${tt}-cluster`,xe=`${tt}-cluster-alt`,zt="parent",Kt="note",Le="state",xt="----",Ie=`${xt}${Kt}`,$t=`${xt}${zt}`,Xt=u((t,e=Ft)=>{if(!t.doc)return e;let r=e;for(const s of t.doc)s.stmt==="dir"&&(r=s.value);return r},"getDir"),Me={getClasses:u(function(t,e){return e.db.getClasses()},"getClasses"),draw:u(async function(t,e,r,s){_.info("REF0:"),_.info("Drawing state diagram (v2)",e);const{securityLevel:h,state:c,layout:y}=$();s.db.extract(s.db.getRootDocV2());const T=s.db.getData(),n=de(e,h);T.type=s.type,T.layoutAlgorithm=y,T.nodeSpacing=c?.nodeSpacing||50,T.rankSpacing=c?.rankSpacing||50,$().look==="neo"?T.markers=["barbNeo"]:T.markers=["barb"],T.diagramId=e,await pe(T,n);const g=8;try{(typeof s.db.getLinks=="function"?s.db.getLinks():new Map).forEach((v,C)=>{const A=typeof C=="string"?C:typeof C?.id=="string"?C.id:"",R=T.nodes.find(k=>k.id===A);if(!A){_.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(C));return}const d=n.node()?.querySelectorAll("g.node, g.rough-node");let b;if(d?.forEach(k=>{const P=k.textContent?.trim();(k.id===R?.domId||P===A)&&(b=k)}),!b){_.warn("⚠️ Could not find node matching text:",A);return}const w=b.parentNode;if(!w){_.warn("⚠️ Node has no parent, cannot wrap:",A);return}const I=document.createElementNS("http://www.w3.org/2000/svg","a"),B=v.url.replace(/^"+|"+$/g,"");if(I.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",B),I.setAttribute("target","_blank"),v.tooltip){const k=v.tooltip.replace(/^"+|"+$/g,"");I.setAttribute("title",k),b.setAttribute("title",k)}w.replaceChild(I,b),I.appendChild(b),_.info("🔗 Wrapped node in <a> tag for:",A,v.url)})}catch(v){_.error("❌ Error injecting clickable links:",v)}ce.insertTitle(n,"statediagramTitleText",c?.titleTopMargin??25,s.db.getDiagramTitle()),fe(n,g,tt,c?.useMaxWidth??!0)},"draw"),getDir:Xt},St=new Map,F=0;function yt(t="",e=0,r="",s=xt){return`${Le}-${t}${r!==null&&r.length>0?`${s}${r}`:""}-${e}`}u(yt,"stateDomId");var we=u((t,e,r,s,h,c,y,T)=>{_.trace("items",e),e.forEach(n=>{switch(n.stmt){case X:Q(t,n,r,s,h,c,y,T);break;case Z:Q(t,n,r,s,h,c,y,T);break;case At:{Q(t,n.state1,r,s,h,c,y,T),Q(t,n.state2,r,s,h,c,y,T);const g=y==="neo",v={id:"edge"+F,start:n.state1.id,end:n.state2.id,arrowhead:"normal",arrowTypeEnd:g?"arrow_barb_neo":"arrow_barb",style:Vt,labelStyle:"",label:U.sanitizeText(n.description??"",$()),arrowheadStyle:Mt,labelpos:Wt,labelType:Ut,thickness:jt,classes:Ht,look:y};h.push(v),F++}}})},"setupDoc"),Pt=u((t,e=Ft)=>{let r=e;if(t.doc)for(const s of t.doc)s.stmt==="dir"&&(r=s.value);return r},"getDir");function q(t,e,r){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(h=>{const c=r.get(h);c&&(e.cssCompiledStyles=[...e.cssCompiledStyles??[],...c.styles])}));const s=t.find(h=>h.id===e.id);s?Object.assign(s,e):t.push(e)}u(q,"insertOrUpdateNode");function Jt(t){return t?.classes?.join(" ")??""}u(Jt,"getClassesFromDbInfo");function qt(t){return t?.styles??[]}u(qt,"getStylesFromDbInfo");var Q=u((t,e,r,s,h,c,y,T)=>{const n=e.id,g=r.get(n),v=Jt(g),C=qt(g),A=$();if(_.info("dataFetcher parsedItem",e,g,C),n!=="root"){let R=kt;e.start===!0?R=me:e.start===!1&&(R=Ee),e.type!==Z&&(R=e.type),St.get(n)||St.set(n,{id:n,shape:R,description:U.sanitizeText(n,A),cssClasses:`${v} ${De}`,cssStyles:C});const d=St.get(n);e.description&&(Array.isArray(d.description)?(d.shape=vt,d.description.push(e.description)):d.description?.length&&d.description.length>0?(d.shape=vt,d.description===n?d.description=[e.description]:d.description=[d.description,e.description]):(d.shape=kt,d.description=e.description),d.description=U.sanitizeTextOrArray(d.description,A)),d.description?.length===1&&d.shape===vt&&(d.type==="group"?d.shape=Rt:d.shape=kt),!d.type&&e.doc&&(_.info("Setting cluster for XCX",n,Pt(e)),d.type="group",d.isGroup=!0,d.dir=Pt(e),d.shape=e.type===Gt?Ot:Rt,d.cssClasses=`${d.cssClasses} ${Ae} ${c?xe:""}`);const b={labelStyle:"",shape:d.shape,label:d.description,cssClasses:d.cssClasses,cssCompiledStyles:[],cssStyles:d.cssStyles,id:n,dir:d.dir,domId:yt(n,F),type:d.type,isGroup:d.type==="group",padding:8,rx:10,ry:10,look:y,labelType:"markdown"};if(b.shape===Ot&&(b.label=""),t&&t.id!=="root"&&(_.trace("Setting node ",n," to be child of its parent ",t.id),b.parentId=t.id),b.centerLabel=!0,e.note){const w={labelStyle:"",shape:_e,label:e.note.text,labelType:"markdown",cssClasses:Ce,cssStyles:[],cssCompiledStyles:[],id:n+Ie+"-"+F,domId:yt(n,F,Kt),type:d.type,isGroup:d.type==="group",padding:A.flowchart?.padding,look:y,position:e.note.position},I=n+$t,B={labelStyle:"",shape:be,label:e.note.text,cssClasses:d.cssClasses,cssStyles:[],id:n+$t,domId:yt(n,F,zt),type:"group",isGroup:!0,padding:16,look:y,position:e.note.position};F++,B.id=I,w.parentId=I,q(s,B,T),q(s,w,T),q(s,b,T);let k=n,P=w.id;e.note.position==="left of"&&(k=w.id,P=n),h.push({id:k+"-"+P,start:k,end:P,arrowhead:"none",arrowTypeEnd:"",style:Vt,labelStyle:"",classes:ve,arrowheadStyle:Mt,labelpos:Wt,labelType:Ut,thickness:jt,look:y})}else q(s,b,T)}e.doc&&(_.trace("Adding nodes children "),we(e,e.doc,r,s,h,!c,y,T))},"dataFetcher"),Ne=u(()=>{St.clear(),F=0},"reset"),L={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Bt=u(()=>new Map,"newClassesList"),Yt=u(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),pt=u(t=>JSON.parse(JSON.stringify(t)),"clone"),We=class{constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Bt(),this.documents={root:Yt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.funs=[],this.getAccTitle=le,this.setAccTitle=re,this.getAccDescription=ne,this.setAccDescription=se,this.setDiagramTitle=ie,this.getDiagramTitle=oe,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this),this.bindFunctions=this.bindFunctions.bind(this)}static{u(this,"StateDB")}static{this.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3}}extract(t){this.clear(!0);for(const s of Array.isArray(t)?t:t.doc)switch(s.stmt){case X:this.addState(s.id.trim(),s.type,s.doc,s.description,s.note);break;case At:this.addRelation(s.state1,s.state2,s.description);break;case ye:this.addStyleClass(s.id.trim(),s.classes);break;case ge:this.handleStyleDef(s);break;case Te:this.setCssClass(s.id.trim(),s.styleClass);break;case"click":this.addLink(s.id,s.url,s.tooltip)}const e=this.getStates(),r=$();Ne(),Q(void 0,this.getRootDocV2(),e,this.nodes,this.edges,!0,r.look,this.classes);for(const s of this.nodes)if(Array.isArray(s.label)){if(s.description=s.label.slice(1),s.isGroup&&s.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${s.id}]`);s.label=s.label[0]}}handleStyleDef(t){const e=t.id.trim().split(","),r=t.styleClass.split(",");for(const s of e){let h=this.getState(s);if(!h){const c=s.trim();this.addState(c),h=this.getState(c)}h&&(h.styles=r.map(c=>c.replace(/;/g,"")?.trim()))}}setRootDoc(t){_.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,e,r){if(e.stmt===At){this.docTranslator(t,e.state1,!0),this.docTranslator(t,e.state2,!1);return}if(e.stmt===X&&(e.id===L.START_NODE?(e.id=t.id+(r?"_start":"_end"),e.start=r):e.id=e.id.trim()),e.stmt!==K&&e.stmt!==X||!e.doc)return;const s=[];let h=[];for(const c of e.doc)if(c.type===Gt){const y=pt(c);y.doc=pt(h),s.push(y),h=[]}else h.push(c);if(s.length>0&&h.length>0){const c={stmt:X,id:he(),type:"divider",doc:pt(h)};s.push(pt(c)),e.doc=s}e.doc.forEach(c=>this.docTranslator(e,c,!0))}getRootDocV2(){return this.docTranslator({id:K,stmt:K},{id:K,stmt:K,doc:this.rootDoc},!0),{id:K,doc:this.rootDoc}}addState(t,e=Z,r=void 0,s=void 0,h=void 0,c=void 0,y=void 0,T=void 0){const n=t?.trim();if(!this.currentDocument.states.has(n))_.info("Adding state ",n,s),this.currentDocument.states.set(n,{stmt:X,id:n,descriptions:[],type:e,doc:r,note:h,classes:[],styles:[],textStyles:[]});else{const g=this.currentDocument.states.get(n);if(!g)throw new Error(`State not found: ${n}`);g.doc||(g.doc=r),g.type||(g.type=e)}if(s&&(_.info("Setting state description",n,s),(Array.isArray(s)?s:[s]).forEach(g=>this.addDescription(n,g.trim()))),h){const g=this.currentDocument.states.get(n);if(!g)throw new Error(`State not found: ${n}`);g.note=h,g.note.text=U.sanitizeText(g.note.text,$())}c&&(_.info("Setting state classes",n,c),(Array.isArray(c)?c:[c]).forEach(g=>this.setCssClass(n,g.trim()))),y&&(_.info("Setting state styles",n,y),(Array.isArray(y)?y:[y]).forEach(g=>this.setStyle(n,g.trim()))),T&&(_.info("Setting state styles",n,y),(Array.isArray(T)?T:[T]).forEach(g=>this.setTextStyle(n,g.trim())))}clear(t){this.nodes=[],this.edges=[],this.funs=[this.setupToolTips.bind(this)],this.documents={root:Yt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Bt(),t||(this.links=new Map,ae())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){_.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,e,r){this.links.set(t,{url:e,tooltip:r}),_.warn("Adding link",t,e,r)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===L.START_NODE?(this.startEndCount++,`${L.START_TYPE}${this.startEndCount}`):t}startTypeIfNeeded(t="",e=Z){return t===L.START_NODE?L.START_TYPE:e}endIdIfNeeded(t=""){return t===L.END_NODE?(this.startEndCount++,`${L.END_TYPE}${this.startEndCount}`):t}endTypeIfNeeded(t="",e=Z){return t===L.END_NODE?L.END_TYPE:e}addRelationObjs(t,e,r=""){const s=this.startIdIfNeeded(t.id.trim()),h=this.startTypeIfNeeded(t.id.trim(),t.type),c=this.startIdIfNeeded(e.id.trim()),y=this.startTypeIfNeeded(e.id.trim(),e.type);this.addState(s,h,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(c,y,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.currentDocument.relations.push({id1:s,id2:c,relationTitle:U.sanitizeText(r,$())})}addRelation(t,e,r){if(typeof t=="object"&&typeof e=="object")this.addRelationObjs(t,e,r);else if(typeof t=="string"&&typeof e=="string"){const s=this.startIdIfNeeded(t.trim()),h=this.startTypeIfNeeded(t),c=this.endIdIfNeeded(e.trim()),y=this.endTypeIfNeeded(e);this.addState(s,h),this.addState(c,y),this.currentDocument.relations.push({id1:s,id2:c,relationTitle:r?U.sanitizeText(r,$()):void 0})}}addDescription(t,e){const r=this.currentDocument.states.get(t),s=e.startsWith(":")?e.replace(":","").trim():e;r?.descriptions?.push(U.sanitizeText(s,$()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,e=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});const r=this.classes.get(t);e&&r&&e.split(L.STYLECLASS_SEP).forEach(s=>{const h=s.replace(/([^;]*);/,"$1").trim();if(RegExp(L.COLOR_KEYWORD).exec(s)){const c=h.replace(L.FILL_KEYWORD,L.BG_FILL).replace(L.COLOR_KEYWORD,L.FILL_KEYWORD);r.textStyles.push(c)}r.styles.push(h)})}getClasses(){return this.classes}setupToolTips(t){const e=ue();Dt(t).select("svg").selectAll("g.node, g.rough-node").on("mouseover",r=>{const s=Dt(r.currentTarget),h=s.attr("title");if(h===null)return;const c=r.currentTarget?.getBoundingClientRect();e.transition().duration(200).style("opacity",".9"),e.style("left",window.scrollX+c.left+(c.right-c.left)/2+"px").style("top",window.scrollY+c.bottom+"px"),e.html(ee.sanitize(h)),s.classed("hover",!0)}).on("mouseout",r=>{e.transition().duration(500).style("opacity",0),Dt(r.currentTarget).classed("hover",!1)})}setCssClass(t,e){t.split(",").forEach(r=>{let s=this.getState(r);if(!s){const h=r.trim();this.addState(h),s=this.getState(h)}s?.classes?.push(e)})}setStyle(t,e){this.getState(t)?.styles?.push(e)}setTextStyle(t,e){this.getState(t)?.textStyles?.push(e)}bindFunctions(t){this.funs.forEach(e=>{e(t)})}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt===Nt)}getDirection(){return this.getDirectionStatement()?.value??Se}setDirection(t){const e=this.getDirectionStatement();e?e.value=t:this.rootDoc.unshift({stmt:Nt,value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){const t=$();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Xt(this.getRootDocV2())}}getConfig(){return $().state}},Ue=u(t=>`
defs [id$="-barbEnd"] {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: ${t.strokeWidth||1};
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: ${t.strokeWidth||1};
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth||1}px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: ${t.strokeWidth||1}px;
}
[id$="-barbEnd"] {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth||1}px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

[id$="-dependencyStart"], [id$="-dependencyEnd"] {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: ${t.strokeWidth||1};
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}

[data-look="neo"].statediagram-cluster rect {
  fill: ${t.mainBkg};
  stroke: ${t.useGradient?"url("+t.svgId+"-gradient)":t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth??1};
}
[data-look="neo"].statediagram-cluster rect.outer {
  rx: ${t.radius}px;
  ry: ${t.radius}px;
  filter: ${t.dropShadow?t.dropShadow.replace("url(#drop-shadow)",`url(${t.svgId}-drop-shadow)`):"none"}
}
`,"getStyles");export{Ue as i,Ve as n,Me as r,We as t};

var mxIsElectron=null!=navigator.userAgent&&navigator.userAgent.toLowerCase().indexOf(" electron/")>-1,GOOGLE_APPS_MAX_AREA=25e6,GOOGLE_SHEET_MAX_AREA=1048576;function render(e){var t=!1;"auto"==e.scale&&(t=!0,e.scale=1),document.body.innerHTML="";var a=document.createElement("div");a.id="graph",a.style.width="100%",a.style.height="100%",document.body.appendChild(a);var n=new Graph(a);e.border=parseInt(e.border)||0,e.w=parseFloat(e.w)||0,e.h=parseFloat(e.h)||0,e.scale=parseFloat(e.scale)||1;var l=null;try{l=JSON.parse(e.extras)}catch(t){try{l=JSON.parse(decodeURIComponent(e.extras))}catch(e){}}var r=null;null!=l&&null!=l.grid&&(n.gridSize=l.grid.size,n.view.gridSteps=l.grid.steps,r=l.grid.color),null!=l&&null!=l.diagramLanguage&&(Graph.diagramLanguage=l.diagramLanguage,Graph.translateDiagram=!0),("iVBOR"==e.xml.substring(0,5)||null!=l&&l.isPng)&&(e.xml=Editor.extractGraphModelFromPng("data:image/png;base64,"+e.xml)),"<#document>"==e.xml.substring(0,11)&&(e.xml=e.xml.substring(11,e.xml.length-12));var i=mxUtils.parseXml(e.xml),o=Editor.extractGraphModel(i.documentElement,!0);if(null==o){try{const{ipcRenderer:e}=require("electron");e.send("render-finished",null)}catch(e){console.log(e)}return n}var d=o.ownerDocument,s=null,g=0;if(!mxIsElectron||"xml"!=e.format){"mxfile"==d.documentElement.nodeName&&(s=d.documentElement.getElementsByTagName("diagram")),null!=l&&null!=l.globalVars&&(n.globalVars=l.globalVars);var h=n.getLinkForCell;n.getLinkForCell=function(e){var t=h.apply(this,arguments);return null!=t&&this.isCustomLink(t)&&(t=null),t};var u=n.cellRenderer.redrawLabelShape;n.cellRenderer.redrawLabelShape=function(e){if(u.apply(this,arguments),null!=e.node)for(var t=e.node.getElementsByTagName("a"),a=0;a<t.length;a++){var l=t[a].getAttribute("href");null!=l&&n.isCustomLink(l)&&t[a].setAttribute("href","#")}};var c,m,p,f=null,w=1,b=new Object,v=!1,x=Editor.doMathJaxRender;Editor.doMathJaxRender=function(e){x.apply(this,arguments),window.setTimeout((function(){window.MathJax.Hub.Queue((function(){R()}))}),0)};var y,E=Graph.addFont;if(Graph.addFont=function(e,t){return w++,E.call(this,e,t,R)},null!=s&&s.length>0){var A=s.length-1;if(!e.allPages)if(null!=e.pageId){for(var M=0;M<s.length;M++)if(e.pageId==s[M].getAttribute("id")){g=M,A=M;break}}else g=Math.max(0,Math.min(parseInt(e.from)||g,s.length-1)),A=parseInt(e.to),A=isNaN(A)?g:Math.max(g,Math.min(A,s.length-1));var S=n.getGlobalVariable;for(n.getGlobalVariable=function(e){return"page"==e?null==s?"Page-1":s[g].getAttribute("name")||"Page-"+(g+1):"pagenumber"==e?g+1:S.apply(this,arguments)},M=g;M<=A;M++)null!=s[M]&&(null==m&&(m=s[M].getAttribute("id")),null!=(d=Editor.parseDiagramNode(s[M]))&&(d=d.ownerDocument),n.getModel().clear(),g=M,F())}else F();return fallbackFont&&document.querySelectorAll("foreignObject div").forEach((e=>e.style.fontFamily=(e.style.fontFamily||"")+", "+fallbackFont)),function(){if(null!=r){var e=n.view,t=btoa(unescape(encodeURIComponent(e.createSvgGrid(r))));t="url(data:image/svg+xml;base64,"+t+")";var a=n.gridSize*e.gridSteps*e.scale,l=0,i=0;if(null!=e.backgroundPageShape){var o=e.getBackgroundPageBounds();l=1+o.x,i=1+o.y}var d=-Math.round(a-mxUtils.mod(e.translate.x*e.scale-l,a))+"px "+-Math.round(a-mxUtils.mod(e.translate.y*e.scale-i,a))+"px",s=document.querySelectorAll("[id^=mxPage]"),g="margin: 0;padding: 0;background-image: "+t+";background-position: "+d;document.body.style.cssText=g;for(var h=0;h<s.length;h++)s[h].style.cssText=g}}(),C("image","xlink:href"),C("img","src"),y=document.body,v&&null!=Editor.MathJaxRender&&(w++,Editor.MathJaxRender(y)),R(),n}{const{ipcRenderer:t}=require("electron");try{var P=mxUtils.getXml(d);EditorUi.prototype.createUi=function(){},EditorUi.prototype.addTrees=function(){},EditorUi.prototype.updateActionStates=function(){};var G=new EditorUi,O=new LocalFile(G,P);G.setCurrentFile(O),G.setFileData(P),t.send("xml-data",mxUtils.getXml(G.getXmlFileData(null,null,e.uncompressed)))}catch(e){t.send("xml-data-error")}}function R(){--w<1&&document.fonts.ready.then((function(){var e=document.createElement("div"),t=null!=s?s.length:1;if(e.id="LoadingComplete",e.style.display="none",e.setAttribute("bounds",JSON.stringify(c)),e.setAttribute("page-id",m),e.setAttribute("scale",p),e.setAttribute("pageCount",t),document.body.appendChild(e),mxIsElectron)try{const{ipcRenderer:e}=require("electron");e.on("get-svg-data",((t,a)=>{n.mathEnabled=v;var l=n.background;l==mxConstants.NONE&&(l=null);var r=n.getSvg(l,1,0,!1,null,!0,null,null,null);n.shadowVisible&&n.addSvgShadow(r),v&&Editor.prototype.addMathCss(r),e.send("svg-data",'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'+mxUtils.getXml(r))})),e.send("render-finished",{bounds:JSON.stringify(c),pageCount:t})}catch(e){console.log(e)}}))}function C(e,t){var a=document.body.getElementsByTagName(e);w+=a.length;for(var n=0;n<a.length;n++){var l=a[n].getAttribute(t);null!=l&&l.length>0&&null==b[l]?(b[l]=new Image,b[l].onload=R,b[l].onerror=R,b[l].src=l):R()}}function F(){v|="1"==d.documentElement.getAttribute("math");var a=d.documentElement.getAttribute("extFonts");a&&function(e){try{e=e.split("|").map((function(e){var t=e.split("^");return{name:t[0],url:t[1]}}))}catch(e){return}w+=e.length;for(var t=0;t<e.length;t++)if(0==e[t].url.indexOf(Editor.GOOGLE_FONTS)){var a=document.createElement("link");a.setAttribute("rel","stylesheet"),a.setAttribute("charset","UTF-8"),a.setAttribute("type","text/css"),a.onload=R,a.onerror=R,a.setAttribute("href",e[t].url),document.getElementsByTagName("head")[0].appendChild(a)}else{if(0==e[t].url.indexOf(PROXY_URL)&&-1==PROXY_URL.indexOf("http")){var n=window.location.href;n=n.substring(0,n.lastIndexOf("/")+1),e[t].url=n+e[t].url}new FontFace(e[t].name,"url("+e[t].url+")").load().then((function(e){document.fonts.add(e),R()})).catch(R)}}(a),n.foldingEnabled=!1,n.setEnabled(!1),null!=(N=d.documentElement.getAttribute("backgroundImage"))&&(N=JSON.parse(N),n.setBackgroundImage(new mxImage(N.src,N.width,N.height,N.x,N.y)));var r,i=new mxCodec(d),o=n.getModel();if(i.decode(d.documentElement,o),"pdf"==e.format?"none"==e.bg?r=null:"none"!=(r=d.documentElement.getAttribute("background"))&&r||(r="#ffffff"):("none"!=(r=null!=e.bg&&e.bg.length>0?e.bg:d.documentElement.getAttribute("background"))&&""!=r||(r=null),null==r&&"gif"!=e.format&&"png"!=e.format&&(r="#ffffff")),null!=r&&(document.body.style.backgroundColor=r),null!=l&&(null!=l.layers&&l.layers.length>0||null!=l.layerIds&&l.layerIds.length>0)){for(var s=o.getChildCount(o.root),g=0;g<s;g++)o.setVisible(o.getChildAt(o.root,g),!1);if(null!=l.layerIds)for(g=0;g<l.layerIds.length;g++)o.setVisible(o.getCell(l.layerIds[g]),!0);else for(g=0;g<l.layers.length;g++){var h=o.getChildAt(o.root,l.layers[g]);null!=h&&o.setVisible(h,!0)}}if(n.pdfPageVisible=!1,e.print||"pdf"==e.format&&"1"==d.documentElement.getAttribute("page")&&0==e.w&&0==e.h&&1==e.scale){var u=1;if(e.print){document.title=e.fileTitle;var m=n.getGraphBounds();if(u=e.pageScale,isNaN(u)&&(u=1),e.fit){var b=parseInt(e.sheetsAcross),x=parseInt(e.sheetsDown);e.scale=Math.min(e.pageHeight*x/(m.height/n.view.scale),e.pageWidth*b/(m.width/n.view.scale))}else e.scale=e.scale/n.pageScale,isNaN(e.scale)&&(u=1/n.pageScale)}var y=e.pageWidth||d.documentElement.getAttribute("pageWidth"),E=e.pageHeight||d.documentElement.getAttribute("pageHeight");n.pdfPageVisible=!0,null!=y&&null!=E&&(n.pageFormat=new mxRectangle(0,0,parseFloat(y),parseFloat(E)));var A=e.pageScale||d.documentElement.getAttribute("pageScale");null!=A&&(n.pageScale=A),n.getPageSize=function(){return new mxRectangle(0,0,this.pageFormat.width*this.pageScale,this.pageFormat.height*this.pageScale)},n.getPageLayout=function(){var e=this.getPageSize(),t=this.getGraphBounds();if(0==t.width||0==t.height)return new mxRectangle(0,0,1,1);var a=Math.ceil(t.x/this.view.scale-this.view.translate.x),n=Math.ceil(t.y/this.view.scale-this.view.translate.y),l=Math.floor(t.width/this.view.scale),r=Math.floor(t.height/this.view.scale),i=Math.floor(a/e.width),o=Math.floor(n/e.height),d=Math.ceil((a+l)/e.width)-i,s=Math.ceil((n+r)/e.height)-o;return new mxRectangle(i,o,d,s)},n.view.getBackgroundPageBounds=function(){var e=this.graph.getPageLayout(),t=this.graph.getPageSize();return new mxRectangle(this.scale*(this.translate.x+e.x*t.width),this.scale*(this.translate.y+e.y*t.height),this.scale*e.width*t.width,this.scale*e.height*t.height)}}if(n.pdfPageVisible){e.border=0;var M=n.getPageLayout(),S=n.getPageSize(),P=M.x*S.width,G=M.y*S.height;0==P&&0==G||n.view.setTranslate(Math.floor(-P),Math.floor(-G))}else{var O=n.getGraphBounds();if(e.w>0||e.h>0){var C=1;C=e.w>0&&e.h>0?Math.min(e.w/O.width,e.h/O.height):e.w>0?e.w/O.width:e.h/O.height,n.view.scaleAndTranslate(C,Math.floor(e.border/C-Math.floor(O.x)),Math.floor(e.border/C-Math.floor(O.y)))}else{if(C=e.scale,t){var F=null!=l&&null!=l.pageWidth?l.pageWidth:800;O.width<F&O.height<1.5*F?C=4:O.width<2*F&O.height<3*F?C=3:O.width<4*F&&O.height<6*F&&(C=2),null!=l&&null!=l.isGoogleSheet&&(GOOGLE_APPS_MAX_AREA=GOOGLE_SHEET_MAX_AREA),O.width*C*O.height*C>GOOGLE_APPS_MAX_AREA&&(C=Math.sqrt(GOOGLE_APPS_MAX_AREA/(O.width*O.height))-.01)}n.view.scaleAndTranslate(C,Math.floor(e.border-Math.floor(O.x)),Math.floor(e.border-Math.floor(O.y)))}}if((c=n.pdfPageVisible?n.view.getBackgroundPageBounds():n.getGraphBounds()).width=Math.ceil(c.width+e.border)+1,c.height=Math.ceil(c.height+e.border)+1,p=n.view.scale||1,n.pdfPageVisible){var I=n.pageFormat||mxConstants.PAGE_FORMAT_A4_PORTRAIT,L=e.print?e.scale:1/n.pageScale,k=!(!e.print||null==e.fit)&&e.fit,_=(m=n.getGraphBounds(),0),T=0;(I=mxRectangle.fromRectangle(I)).width=Math.ceil(I.width*u)+1,I.height=Math.ceil(I.height*u)+1,L*=u,k||(_-=(M=n.getPageLayout()).x*I.width,T-=M.y*I.height),null==f?((f=new mxPrintPreview(n,L,I,0,_,T)).printBackgroundImage=!0,f.autoOrigin=k,f.backgroundColor=r,f.open(null,window),n.container.parentNode.removeChild(n.container)):(f.backgroundColor=r,f.autoOrigin=k,f.appendGraph(n,L,_,T)),c=new mxRectangle(0,0,I.width,I.height)}else{var N;if(null!=(N=n.backgroundImage)){var V=n.view.translate;C=n.view.scale,c.add(new mxRectangle((V.x+N.x)*C,(V.y+N.y)*C,N.width*C,N.height*C))}"pdf"!=e.format&&mxClient.IS_SVG&&"1"==d.documentElement.getAttribute("shadow")&&(n.addSvgShadow(n.view.canvas.ownerSVGElement,null,!0),n.setShadowVisible(!0),c.width+=7,c.height+=7),document.body.style.width=Math.ceil(c.x+c.width)+"px",document.body.style.height=Math.ceil(c.y+c.height)+"px"}}}if(Editor.initMath((remoteMath?"https://app.diagrams.net/":"")+"math/MathJax.js"),mxIsElectron)try{const{ipcRenderer:e}=require("electron");e.on("render",((e,t)=>{render(t)}))}catch(e){console.log(e)}
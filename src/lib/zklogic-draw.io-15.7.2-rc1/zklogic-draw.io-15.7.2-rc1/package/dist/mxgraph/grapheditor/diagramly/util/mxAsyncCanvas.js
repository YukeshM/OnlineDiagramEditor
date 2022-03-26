function mxAsyncCanvas(t){mxAbstractCanvas2D.call(this),this.htmlCanvas=t,t.images=t.images||[],t.subCanvas=t.subCanvas||[]}mxUtils.extend(mxAsyncCanvas,mxAbstractCanvas2D),mxAsyncCanvas.prototype.htmlCanvas=null,mxAsyncCanvas.prototype.canvasIndex=0,mxAsyncCanvas.prototype.waitCounter=0,mxAsyncCanvas.prototype.onComplete=null,mxAsyncCanvas.prototype.incWaitCounter=function(){this.waitCounter++},mxAsyncCanvas.prototype.decWaitCounter=function(){this.waitCounter--,0==this.waitCounter&&null!=this.onComplete&&(this.onComplete(),this.onComplete=null)},mxAsyncCanvas.prototype.updateFont=function(){var t="";(this.state.fontStyle&mxConstants.FONT_BOLD)==mxConstants.FONT_BOLD&&(t+="bold "),(this.state.fontStyle&mxConstants.FONT_ITALIC)==mxConstants.FONT_ITALIC&&(t+="italic "),this.ctx.font=t+this.state.fontSize+"px "+this.state.fontFamily},mxAsyncCanvas.prototype.rotate=function(t,n,s,o,a){},mxAsyncCanvas.prototype.setAlpha=function(t){this.state.alpha=t},mxAsyncCanvas.prototype.setFontColor=function(t){this.state.fontColor=t},mxAsyncCanvas.prototype.setFontBackgroundColor=function(t){t==mxConstants.NONE&&(t=null),this.state.fontBackgroundColor=t},mxAsyncCanvas.prototype.setFontBorderColor=function(t){t==mxConstants.NONE&&(t=null),this.state.fontBorderColor=t},mxAsyncCanvas.prototype.setFontSize=function(t){this.state.fontSize=t},mxAsyncCanvas.prototype.setFontFamily=function(t){this.state.fontFamily=t},mxAsyncCanvas.prototype.setFontStyle=function(t){this.state.fontStyle=t},mxAsyncCanvas.prototype.rect=function(t,n,s,o){},mxAsyncCanvas.prototype.roundrect=function(t,n,s,o,a,e){},mxAsyncCanvas.prototype.ellipse=function(t,n,s,o){},mxAsyncCanvas.prototype.rewriteImageSource=function(t){return"http://"!=t.substring(0,7)&&"https://"!=t.substring(0,8)||(t="/proxy?url="+encodeURIComponent(t)),t},mxAsyncCanvas.prototype.image=function(t,n,s,o,a,e,i,c){var r;a=this.rewriteImageSource(a),null==(r=this.htmlCanvas.images[a])&&((r=new Image).onload=mxUtils.bind(this,(function(){this.decWaitCounter()})),r.onerror=mxUtils.bind(this,(function(){this.decWaitCounter()})),this.incWaitCounter(),this.htmlCanvas.images[a]=r,r.src=a)},mxAsyncCanvas.prototype.fill=function(){},mxAsyncCanvas.prototype.stroke=function(){},mxAsyncCanvas.prototype.fillAndStroke=function(){},mxAsyncCanvas.prototype.text=function(t,n,s,o,a,e,i,c,r,C,p,l){if(null!=a&&0!=a.length){var m=this.state.scale;if("html"==r&&"function"==typeof html2canvas){this.incWaitCounter();var y=this.canvasIndex++;html2canvas(a,{onrendered:mxUtils.bind(this,(function(t){this.htmlCanvas.subCanvas[y]=t,this.decWaitCounter()})),scale:m,logging:!0})}}},mxAsyncCanvas.prototype.finish=function(t){0==this.waitCounter?t():this.onComplete=t};
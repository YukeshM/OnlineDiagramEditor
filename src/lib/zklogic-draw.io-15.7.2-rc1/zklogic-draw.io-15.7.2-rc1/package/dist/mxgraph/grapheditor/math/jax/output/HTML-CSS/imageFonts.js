!function(i,t,e){i.Register.LoadHook(t.fontDir+"/fontdata.js",(function(){t.Augment({allowWebFonts:!1,imgDir:t.webfontDir+"/png",imgPacked:MathJax.isPacked?"":"/unpacked",imgSize:["050","060","071","085",100,120,141,168,200,238,283,336,400,476],imgBaseIndex:4,imgSizeForEm:{},imgSizeForScale:{},imgZoom:1,handleImg:function(i,t,m,o,r){r.length&&this.addText(i,r);var a=m[5].orig;a||(a=m[5].orig=[m[0],m[1],m[2],m[3],m[4]]);var n=this.imgZoom;i.scale||(i.scale=1);var s=this.imgIndex(i.scale*n);s==this.imgEmWidth.length-1&&this.em*i.scale*n/this.imgEmWidth[s]>1.1&&(n=this.imgEmWidth[s]/(this.em*i.scale));var h=this.imgEmWidth[s]/(this.em*(i.scale||1)*n);m[0]=a[0]*h,m[1]=a[1]*h,m[2]=a[2]*h,m[3]=a[3]*h,m[4]=a[4]*h;for(var g=this.imgDir+"/"+t.directory+"/"+this.imgSize[s],d=o.toString(16).toUpperCase();d.length<4;)d="0"+d;var l=g+"/"+d+".png",c=m[5].img[s],u={width:Math.floor(c[0]/n+.5)+"px",height:Math.floor(c[1]/n+.5)+"px"};return c[2]&&(u.verticalAlign=Math.floor(-c[2]/n+.5)+"px"),m[3]<0&&(u.marginLeft=this.Em(m[3]/1e3)),m[4]!=m[2]&&(u.marginRight=this.Em((m[2]-m[4])/1e3)),this.msieIE6&&(u.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+e.urlRev(l)+"', sizingMethod='scale')",l=this.directory+"/blank.gif"),this.addElement(i,"img",{src:e.urlRev(l),style:u,isMathJax:!0}),""},defineImageData:function(i){for(var e in i)if(i.hasOwnProperty(e)){var m=t.FONTDATA.FONTS[e];if(m)for(var o in e=i[e])e.hasOwnProperty(o)&&m[o]&&(m[o][5]={img:e[o]})}},initImg:function(i){this.imgSizeForEm[this.em]&&(this.imgBaseIndex=this.imgSizeForEm[this.em]);for(var t=0,e=this.imgEmWidth.length-1;t<e&&!(this.em<=this.imgEmWidth[t]);t++);t&&this.imgEmWidth[t]-this.em>this.em-this.imgEmWidth[t-1]&&t--,this.imgSizeForEm[this.em]=this.imgBaseIndex=t,this.imgZoom=this.imgBrowserZoom()},imgIndex:function(i){if(!i)return this.imgBaseIndex;if(this.imgSizeForScale[this.em]||(this.imgSizeForScale[this.em]={}),this.imgSizeForScale[this.em][i])return this.imgSizeForScale[this.em][i];for(var t=this.em*i,e=0,m=this.imgEmWidth.length-1;e<m&&!(t<=this.imgEmWidth[e]);e++);return e&&this.imgEmWidth[e]-t>t-this.imgEmWidth[e-1]&&e--,this.imgSizeForScale[this.em][i]=e,e},imgBrowserZoom:function(){return 1}}),i.Browser.Select({Firefox:function(i){var e=t.addElement(document.body,"div",{style:{display:"none",visibility:"hidden",overflow:"scroll",position:"absolute",top:0,left:0,width:"200px",height:"200px",padding:0,border:0,margin:0}}),m=t.addElement(e,"div",{style:{position:"absolute",left:0,top:0,right:0,bottom:0,padding:0,border:0,margin:0}});t.Augment({imgSpaceBug:!0,imgSpace:" ",imgZoomLevel:i.isMac?{50:.3,30:.5,22:.67,19:.8,16:.9,15:1,13:1.1,12:1.2,11:1.33,10:1.5,9:1.7,7:2,6:2.4,5:3,0:15}:{56:.3,34:.5,25:.67,21:.8,19:.9,17:1,15:1.1,14:1.2,13:1.33,11:1.5,10:1.7,8:2,7:2.4,6:3,0:17},imgZoomDiv:e,imgBrowserZoom:function(){var i=this.imgZoomLevel;e.style.display="";var t=e.offsetWidth-m.offsetWidth;return t=i[t]?i[t]:i[0]/t,e.style.display="none",t}})},Safari:function(i){t.Augment({imgBrowserZoom:function(){return 3}})},Chrome:function(i){t.Augment({imgHeightBug:!0,imgBrowserZoom:function(){return 3}})},Opera:function(i){t.Augment({imgSpaceBug:!0,imgSpace:"  ",imgDoc:"BackCompat"==document.compatMode?document.body:document.documentElement,imgBrowserZoom:function(){if(i.isMac)return 3;var t=this.imgDoc.clientHeight,e=Math.floor(15*t/window.innerHeight);return this.imgDoc.clientWidth<this.imgDoc.scrollWidth-e&&(t+=e),parseFloat((window.innerHeight/t).toFixed(1))}})}});var m=t.imgDir+t.imgPacked;MathJax.Callback.Queue(["Require",e,m+"/imagedata.js"],(function(){var i=t.FONTDATA.FONTS.MathJax_Main[8212][5].img;t.imgEmWidth=[];for(var e=0,m=i.length;e<m;e++)t.imgEmWidth[e]=i[e][0]}),["loadComplete",e,t.directory+"/imageFonts.js"])}))}(MathJax.Hub,MathJax.OutputJax["HTML-CSS"],MathJax.Ajax);
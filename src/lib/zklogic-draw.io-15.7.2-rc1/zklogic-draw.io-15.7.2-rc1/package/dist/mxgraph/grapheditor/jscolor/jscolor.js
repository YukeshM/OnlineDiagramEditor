/*! For license information please see jscolor.js.LICENSE.txt */
var mxJSColor={bindClass:"color",binding:!0,preloading:!0,install:function(){},init:function(){mxJSColor.preloading&&mxJSColor.preload()},getDir:function(){return IMAGE_PATH+"/"},detectDir:function(){for(var e=location.href,t=document.getElementsByTagName("base"),o=0;o<t.length;o+=1)t[o].href&&(e=t[o].href);for(t=document.getElementsByTagName("script"),o=0;o<t.length;o+=1)if(t[o].src&&/(^|\/)jscolor\.js([?#].*)?$/i.test(t[o].src)){var r=new mxJSColor.URI(t[o].src).toAbsolute(e);return r.path=r.path.replace(/[^\/]+$/,""),r.query=null,r.fragment=null,r.toString()}return!1},preload:function(){for(var e in mxJSColor.imgRequire)mxJSColor.imgRequire.hasOwnProperty(e)&&mxJSColor.loadImage(e)},images:{pad:[181,101],sld:[16,101],cross:[15,15],arrow:[7,11]},imgRequire:{},imgLoaded:{},requireImage:function(e){mxJSColor.imgRequire[e]=!0},loadImage:function(e){mxJSColor.imgLoaded[e]||(mxJSColor.imgLoaded[e]=new Image,mxJSColor.imgLoaded[e].src=mxJSColor.getDir()+e)},fetchElement:function(e){return"string"==typeof e?document.getElementById(e):e},addEvent:function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent&&e.attachEvent("on"+t,o)},fireEvent:function(e,t){if(e)if(document.createEvent)(o=document.createEvent("HTMLEvents")).initEvent(t,!0,!0),e.dispatchEvent(o);else if(document.createEventObject){var o=document.createEventObject();e.fireEvent("on"+t,o)}else e["on"+t]&&e["on"+t]()},getElementPos:function(e){var t=e,o=e,r=0,l=0;if(t.offsetParent)do{r+=t.offsetLeft,l+=t.offsetTop}while(t=t.offsetParent);for(;(o=o.parentNode)&&"BODY"!==o.nodeName.toUpperCase();)r-=o.scrollLeft,l-=o.scrollTop;return[r,l]},getElementSize:function(e){return[e.offsetWidth,e.offsetHeight]},getRelMousePos:function(e){var t=0,o=0;return e||(e=window.event),"number"==typeof e.offsetX?(t=e.offsetX,o=e.offsetY):"number"==typeof e.layerX&&(t=e.layerX,o=e.layerY),{x:t,y:o}},getViewPos:function(){return"number"==typeof window.pageYOffset?[window.pageXOffset,window.pageYOffset]:document.body&&(document.body.scrollLeft||document.body.scrollTop)?[document.body.scrollLeft,document.body.scrollTop]:document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[0,0]},getViewSize:function(){return"number"==typeof window.innerWidth?[window.innerWidth,window.innerHeight]:document.body&&(document.body.clientWidth||document.body.clientHeight)?[document.body.clientWidth,document.body.clientHeight]:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?[document.documentElement.clientWidth,document.documentElement.clientHeight]:[0,0]},URI:function(e){function t(e){for(var t="";e;)if("../"===e.substr(0,3)||"./"===e.substr(0,2))e=e.replace(/^\.+/,"").substr(1);else if("/./"===e.substr(0,3)||"/."===e)e="/"+e.substr(3);else if("/../"===e.substr(0,4)||"/.."===e)e="/"+e.substr(4),t=t.replace(/\/?[^\/]*$/,"");else if("."===e||".."===e)e="";else{var o=e.match(/^\/?[^\/]*/)[0];e=e.substr(o.length),t+=o}return t}this.scheme=null,this.authority=null,this.path="",this.query=null,this.fragment=null,this.parse=function(e){var t=e.match(/^(([A-Za-z][0-9A-Za-z+.-]*)(:))?((\/\/)([^\/?#]*))?([^?#]*)((\?)([^#]*))?((#)(.*))?/);return this.scheme=t[3]?t[2]:null,this.authority=t[5]?t[6]:null,this.path=t[7],this.query=t[9]?t[10]:null,this.fragment=t[12]?t[13]:null,this},this.toString=function(){var e="";return null!==this.scheme&&(e=e+this.scheme+":"),null!==this.authority&&(e=e+"//"+this.authority),null!==this.path&&(e+=this.path),null!==this.query&&(e=e+"?"+this.query),null!==this.fragment&&(e=e+"#"+this.fragment),e},this.toAbsolute=function(e){e=new mxJSColor.URI(e);var o=this,r=new mxJSColor.URI;return null!==e.scheme&&(null!==o.scheme&&o.scheme.toLowerCase()===e.scheme.toLowerCase()&&(o.scheme=null),null!==o.scheme?(r.scheme=o.scheme,r.authority=o.authority,r.path=t(o.path),r.query=o.query):(null!==o.authority?(r.authority=o.authority,r.path=t(o.path),r.query=o.query):(""===o.path?(r.path=e.path,null!==o.query?r.query=o.query:r.query=e.query):("/"===o.path.substr(0,1)?r.path=t(o.path):(null!==e.authority&&""===e.path?r.path="/"+o.path:r.path=e.path.replace(/[^\/]+$/,"")+o.path,r.path=t(r.path)),r.query=o.query),r.authority=e.authority),r.scheme=e.scheme),r.fragment=o.fragment,r)},e&&this.parse(e)},color:function(target,prop){for(var p in this.required=!0,this.adjust=!0,this.hash=!1,this.caps=!0,this.slider=!0,this.valueElement=target,this.styleElement=target,this.onImmediateChange=null,this.hsv=[0,0,1],this.rgb=[1,1,1],this.pickerOnfocus=!0,this.pickerMode="HSV",this.pickerPosition="bottom",this.pickerSmartPosition=!0,this.pickerButtonHeight=20,this.pickerClosable=!1,this.pickerCloseText="Close",this.pickerButtonColor="ButtonText",this.pickerFace=0,this.pickerFaceColor="ThreeDFace",this.pickerBorder=1,this.pickerBorderColor="ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight",this.pickerInset=1,this.pickerInsetColor="ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow",this.pickerZIndex=1e4,prop)prop.hasOwnProperty(p)&&(this[p]=prop[p]);function RGB_HSV(e,t,o){var r=Math.min(Math.min(e,t),o),l=Math.max(Math.max(e,t),o),s=l-r;if(0===s)return[null,0,l];var n=e===r?3+(o-t)/s:t===r?5+(e-o)/s:1+(t-e)/s;return[6===n?0:n,s/l,l]}function HSV_RGB(e,t,o){if(null===e)return[o,o,o];var r=Math.floor(e),l=o*(1-t),s=o*(1-t*(r%2?e-r:1-(e-r)));switch(r){case 6:case 0:return[o,s,l];case 1:return[s,o,l];case 2:return[l,o,s];case 3:return[l,s,o];case 4:return[s,l,o];case 5:return[o,l,s]}}function removePicker(){delete mxJSColor.picker.owner,document.getElementsByTagName("body")[0].removeChild(mxJSColor.picker.boxB)}function drawPicker(e,t){if(!mxJSColor.picker){mxJSColor.picker={box:document.createElement("div"),boxB:document.createElement("div"),pad:document.createElement("div"),padB:document.createElement("div"),padM:document.createElement("div"),sld:document.createElement("div"),sldB:document.createElement("div"),sldM:document.createElement("div"),btn:document.createElement("div"),btnS:document.createElement("span"),btnT:document.createTextNode(THIS.pickerCloseText)};for(var o=0;o<mxJSColor.images.sld[1];o+=4){var r=document.createElement("div");r.style.height="4px",r.style.fontSize="1px",r.style.lineHeight="0",mxJSColor.picker.sld.appendChild(r)}mxJSColor.picker.sldB.appendChild(mxJSColor.picker.sld),mxJSColor.picker.box.appendChild(mxJSColor.picker.sldB),mxJSColor.picker.box.appendChild(mxJSColor.picker.sldM),mxJSColor.picker.padB.appendChild(mxJSColor.picker.pad),mxJSColor.picker.box.appendChild(mxJSColor.picker.padB),mxJSColor.picker.box.appendChild(mxJSColor.picker.padM),mxJSColor.picker.btnS.appendChild(mxJSColor.picker.btnT),mxJSColor.picker.btn.appendChild(mxJSColor.picker.btnS),mxJSColor.picker.box.appendChild(mxJSColor.picker.btn),mxJSColor.picker.boxB.appendChild(mxJSColor.picker.box)}var l=mxJSColor.picker;l.box.onmouseup=l.box.onmouseout=function(){mxClient.IS_TOUCH||target.focus()},l.box.onmousedown=function(){abortBlur=!0},l.box.onmousemove=function(e){(holdPad||holdSld)&&(holdPad&&setPad(e),holdSld&&setSld(e),document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges(),dispatchImmediateChange())},l.padM.onmouseup=l.padM.onmouseout=function(){holdPad&&(holdPad=!1,mxJSColor.fireEvent(valueElement,"change"))},l.padM.onmousedown=function(e){switch(modeID){case 0:0===THIS.hsv[2]&&THIS.fromHSV(null,null,1);break;case 1:0===THIS.hsv[1]&&THIS.fromHSV(null,1,null)}holdPad=!0,setPad(e),dispatchImmediateChange()},l.sldM.onmouseup=l.sldM.onmouseout=function(){holdSld&&(holdSld=!1,mxJSColor.fireEvent(valueElement,"change"))},l.sldM.onmousedown=function(e){holdSld=!0,setSld(e),dispatchImmediateChange()};var s,n,i=getPickerDims(THIS);l.box.style.width=i[0]+"px",l.box.style.height=i[1]+"px",l.boxB.style.position="absolute",l.boxB.style.clear="both",l.boxB.style.left=e+"px",l.boxB.style.top=t+"px",l.boxB.style.zIndex=THIS.pickerZIndex,l.boxB.style.border=THIS.pickerBorder+"px solid",l.boxB.style.borderColor=THIS.pickerBorderColor,l.boxB.style.background=THIS.pickerFaceColor,l.pad.style.width=mxJSColor.images.pad[0]+"px",l.pad.style.height=mxJSColor.images.pad[1]+"px",l.padB.style.position="absolute",l.padB.style.left=THIS.pickerFace+"px",l.padB.style.top=THIS.pickerFace+"px",l.padB.style.border=THIS.pickerInset+"px solid",l.padB.style.borderColor=THIS.pickerInsetColor,l.padM.style.position="absolute",l.padM.style.left="0",l.padM.style.top="0",l.padM.style.width=THIS.pickerFace+2*THIS.pickerInset+mxJSColor.images.pad[0]+mxJSColor.images.arrow[0]+"px",l.padM.style.height=l.box.style.height,l.padM.style.cursor="crosshair",l.sld.style.overflow="hidden",l.sld.style.width=mxJSColor.images.sld[0]+"px",l.sld.style.height=mxJSColor.images.sld[1]+"px",l.sldB.style.display=THIS.slider?"block":"none",l.sldB.style.position="absolute",l.sldB.style.right=THIS.pickerFace+"px",l.sldB.style.top=THIS.pickerFace+"px",l.sldB.style.border=THIS.pickerInset+"px solid",l.sldB.style.borderColor=THIS.pickerInsetColor,l.sldM.style.display=THIS.slider?"block":"none",l.sldM.style.position="absolute",l.sldM.style.right="0",l.sldM.style.top="0",l.sldM.style.width=mxJSColor.images.sld[0]+mxJSColor.images.arrow[0]+THIS.pickerFace+2*THIS.pickerInset+"px",l.sldM.style.height=l.box.style.height;try{l.sldM.style.cursor="pointer"}catch(e){l.sldM.style.cursor="hand"}l.btn.style.display=THIS.pickerClosable?"block":"none",l.btn.style.position="absolute",l.btn.style.left=THIS.pickerFace+"px",l.btn.style.bottom=THIS.pickerFace+"px",l.btn.style.padding="0 15px",l.btn.style.height="18px",l.btn.style.border=THIS.pickerInset+"px solid",n=(s=THIS.pickerInsetColor.split(/\s+/)).length<2?s[0]:s[1]+" "+s[0]+" "+s[0]+" "+s[1],l.btn.style.borderColor=n,l.btn.style.color=THIS.pickerButtonColor,l.btn.style.font="12px sans-serif",l.btn.style.textAlign="center";try{l.btn.style.cursor="pointer"}catch(e){l.btn.style.cursor="hand"}switch(l.btn.onmousedown=function(){THIS.hidePicker()},l.btnS.style.lineHeight=l.btn.style.height,modeID){case 0:var a="hs.png";break;case 1:a="hv.png"}l.padM.style.backgroundImage="url(data:image/gif;base64,R0lGODlhDwAPAKEBAAAAAP///////////yH5BAEKAAIALAAAAAAPAA8AAAIklB8Qx53b4otSUWcvyiz4/4AeQJbmKY4p1HHapBlwPL/uVRsFADs=)",l.padM.style.backgroundRepeat="no-repeat",l.sldM.style.backgroundImage="url(data:image/gif;base64,R0lGODlhBwALAKECAAAAAP///6g8eKg8eCH5BAEKAAIALAAAAAAHAAsAAAITTIQYcLnsgGxvijrxqdQq6DRJAQA7)",l.sldM.style.backgroundRepeat="no-repeat",l.pad.style.backgroundImage="url('"+mxJSColor.getDir()+a+"')",l.pad.style.backgroundRepeat="no-repeat",l.pad.style.backgroundPosition="0 0",redrawPad(),redrawSld(),mxJSColor.picker.owner=THIS,document.getElementsByTagName("body")[0].appendChild(l.boxB)}function getPickerDims(e){return[2*e.pickerInset+2*e.pickerFace+mxJSColor.images.pad[0]+(e.slider?2*e.pickerInset+2*mxJSColor.images.arrow[0]+mxJSColor.images.sld[0]:0),e.pickerClosable?4*e.pickerInset+3*e.pickerFace+mxJSColor.images.pad[1]+e.pickerButtonHeight:2*e.pickerInset+2*e.pickerFace+mxJSColor.images.pad[1]]}function redrawPad(){switch(modeID){case 0:var e=1;break;case 1:e=2}var t=Math.round(THIS.hsv[0]/6*(mxJSColor.images.pad[0]-1)),o=Math.round((1-THIS.hsv[e])*(mxJSColor.images.pad[1]-1));mxJSColor.picker.padM.style.backgroundPosition=THIS.pickerFace+THIS.pickerInset+t-Math.floor(mxJSColor.images.cross[0]/2)+"px "+(THIS.pickerFace+THIS.pickerInset+o-Math.floor(mxJSColor.images.cross[1]/2))+"px";var r=mxJSColor.picker.sld.childNodes;switch(modeID){case 0:for(var l=HSV_RGB(THIS.hsv[0],THIS.hsv[1],1),s=0;s<r.length;s+=1)r[s].style.backgroundColor="rgb("+l[0]*(1-s/r.length)*100+"%,"+l[1]*(1-s/r.length)*100+"%,"+l[2]*(1-s/r.length)*100+"%)";break;case 1:var n,i=[THIS.hsv[2],0,0],a=(s=Math.floor(THIS.hsv[0]))%2?THIS.hsv[0]-s:1-(THIS.hsv[0]-s);switch(s){case 6:case 0:l=[0,1,2];break;case 1:l=[1,0,2];break;case 2:l=[2,0,1];break;case 3:l=[2,1,0];break;case 4:l=[1,2,0];break;case 5:l=[0,2,1]}for(s=0;s<r.length;s+=1)n=1-1/(r.length-1)*s,i[1]=i[0]*(1-n*a),i[2]=i[0]*(1-n),r[s].style.backgroundColor="rgb("+100*i[l[0]]+"%,"+100*i[l[1]]+"%,"+100*i[l[2]]+"%)"}}function redrawSld(){switch(modeID){case 0:var e=2;break;case 1:e=1}var t=Math.round((1-THIS.hsv[e])*(mxJSColor.images.sld[1]-1));mxJSColor.picker.sldM.style.backgroundPosition="0 "+(THIS.pickerFace+THIS.pickerInset+t-Math.floor(mxJSColor.images.arrow[1]/2))+"px"}function isPickerOwner(){return mxJSColor.picker&&mxJSColor.picker.owner===THIS}function blurTarget(){valueElement===target&&THIS.importColor(),THIS.pickerOnfocus&&THIS.hidePicker()}function blurValue(){valueElement!==target&&THIS.importColor()}function setPad(e){var t=mxJSColor.getRelMousePos(e),o=t.x-THIS.pickerFace-THIS.pickerInset,r=t.y-THIS.pickerFace-THIS.pickerInset;switch(modeID){case 0:THIS.fromHSV(o*(6/(mxJSColor.images.pad[0]-1)),1-r/(mxJSColor.images.pad[1]-1),null,leaveSld);break;case 1:THIS.fromHSV(o*(6/(mxJSColor.images.pad[0]-1)),null,1-r/(mxJSColor.images.pad[1]-1),leaveSld)}}function setSld(e){var t=mxJSColor.getRelMousePos(e).y-THIS.pickerFace-THIS.pickerInset;switch(modeID){case 0:THIS.fromHSV(null,null,1-t/(mxJSColor.images.sld[1]-1),leavePad);break;case 1:THIS.fromHSV(null,1-t/(mxJSColor.images.sld[1]-1),null,leavePad)}}function dispatchImmediateChange(){THIS.onImmediateChange&&("string"==typeof THIS.onImmediateChange?eval(THIS.onImmediateChange):THIS.onImmediateChange(THIS))}this.hidePicker=function(){isPickerOwner()&&removePicker()},this.showPicker=function(){if(!isPickerOwner()){var e,t,o,r=mxJSColor.getElementPos(target),l=mxJSColor.getElementSize(target),s=mxJSColor.getViewPos(),n=mxJSColor.getViewSize(),i=getPickerDims(this);switch(this.pickerPosition.toLowerCase()){case"left":e=1,t=0,o=-1;break;case"right":e=1,t=0,o=1;break;case"top":e=0,t=1,o=-1;break;default:e=0,t=1,o=1}var a=(l[t]+i[t])/2;this.pickerSmartPosition?(-s[e]+r[e]+i[e]>n[e]&&-s[e]+r[e]+l[e]/2>n[e]/2&&r[e]+l[e]-i[e]>=0?(r[e],l[e],i[e]):r[e],-s[t]+r[t]+l[t]+i[t]-a+a*o>n[t]?(-s[t]+r[t]+l[t]/2>n[t]/2&&(r[t],l[t]),r[t],l[t]):(r[t],l[t],r[t],l[t])):(r[e],r[t],l[t]),drawPicker(0,0)}},this.importColor=function(){valueElement?this.adjust?!this.required&&/^\s*$/.test(valueElement.value)?(valueElement.value="",styleElement.style.backgroundImage=styleElement.jscStyle.backgroundImage,styleElement.style.backgroundColor=styleElement.jscStyle.backgroundColor,styleElement.style.color=styleElement.jscStyle.color,this.exportColor(leaveValue|leaveStyle)):this.fromString(valueElement.value)||this.exportColor():this.fromString(valueElement.value,leaveValue)||(styleElement.style.backgroundImage=styleElement.jscStyle.backgroundImage,styleElement.style.backgroundColor=styleElement.jscStyle.backgroundColor,styleElement.style.color=styleElement.jscStyle.color,this.exportColor(leaveValue|leaveStyle)):this.exportColor()},this.exportColor=function(e){if(!(e&leaveValue)&&valueElement){var t=this.toString();this.caps&&(t=t.toUpperCase()),this.hash&&(t="#"+t),valueElement.value=t}e&leaveStyle||!styleElement||(styleElement.style.backgroundImage="none",styleElement.style.backgroundColor="#"+this.toString(),styleElement.style.color=.213*this.rgb[0]+.715*this.rgb[1]+.072*this.rgb[2]<.5?"#FFF":"#000"),e&leavePad||!isPickerOwner()||redrawPad(),e&leaveSld||!isPickerOwner()||redrawSld()},this.fromHSV=function(e,t,o,r){e<0&&(e=0)||e>6&&(e=6),t<0&&(t=0)||t>1&&(t=1),o<0&&(o=0)||o>1&&(o=1),this.rgb=HSV_RGB(null===e?this.hsv[0]:this.hsv[0]=e,null===t?this.hsv[1]:this.hsv[1]=t,null===o?this.hsv[2]:this.hsv[2]=o),this.exportColor(r)},this.fromRGB=function(e,t,o,r){e<0&&(e=0)||e>1&&(e=1),t<0&&(t=0)||t>1&&(t=1),o<0&&(o=0)||o>1&&(o=1);var l=RGB_HSV(null===e?this.rgb[0]:this.rgb[0]=e,null===t?this.rgb[1]:this.rgb[1]=t,null===o?this.rgb[2]:this.rgb[2]=o);null!==l[0]&&(this.hsv[0]=l[0]),0!==l[2]&&(this.hsv[1]=l[1]),this.hsv[2]=l[2],this.exportColor(r)},this.fromString=function(e,t){var o=e.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);return!!o&&(6===o[1].length?this.fromRGB(parseInt(o[1].substr(0,2),16)/255,parseInt(o[1].substr(2,2),16)/255,parseInt(o[1].substr(4,2),16)/255,t):this.fromRGB(parseInt(o[1].charAt(0)+o[1].charAt(0),16)/255,parseInt(o[1].charAt(1)+o[1].charAt(1),16)/255,parseInt(o[1].charAt(2)+o[1].charAt(2),16)/255,t),!0)},this.toString=function(){return(256|Math.round(255*this.rgb[0])).toString(16).substr(1)+(256|Math.round(255*this.rgb[1])).toString(16).substr(1)+(256|Math.round(255*this.rgb[2])).toString(16).substr(1)};var THIS=this,modeID="hvs"===this.pickerMode.toLowerCase()?1:0,abortBlur=!1,valueElement=mxJSColor.fetchElement(this.valueElement),styleElement=mxJSColor.fetchElement(this.styleElement),holdPad=!1,holdSld=!1,leaveValue=1,leaveStyle=2,leavePad=4,leaveSld=8;if(valueElement){var updateField=function(){THIS.fromString(valueElement.value,leaveValue),dispatchImmediateChange()};mxJSColor.addEvent(valueElement,"keyup",updateField),mxJSColor.addEvent(valueElement,"input",updateField),mxJSColor.addEvent(valueElement,"blur",blurValue),valueElement.setAttribute("autocomplete","off")}switch(styleElement&&(styleElement.jscStyle={backgroundImage:styleElement.style.backgroundImage,backgroundColor:styleElement.style.backgroundColor,color:styleElement.style.color}),modeID){case 0:mxJSColor.requireImage("hs.png");break;case 1:mxJSColor.requireImage("hv.png")}this.importColor()}};mxJSColor.install();
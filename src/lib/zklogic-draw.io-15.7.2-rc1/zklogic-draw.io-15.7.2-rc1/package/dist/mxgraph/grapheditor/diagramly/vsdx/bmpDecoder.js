function BmpDecoder(t,s){if(this.pos=0,this.buffer=t,this.is_with_alpha=!!s,66!=this.buffer[0]&&77!=this.buffer[1])throw new Error("Invalid BMP File");this.pos+=2,this.parseHeader(),this.parseBGR()}BmpDecoder.prototype.parseHeader=function(){var t=this.buffer;if(this.fileSize=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.reserved=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.offset=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.headerSize=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.width=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.height=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.planes=t[this.pos+1]<<8|t[this.pos],this.pos+=2,this.bitPP=t[this.pos+1]<<8|t[this.pos],this.pos+=2,this.compress=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.rawSize=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.hr=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.vr=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.colors=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,this.importantColors=t[this.pos+3]<<24|t[this.pos+2]<<16|t[this.pos+1]<<8|t[this.pos],this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var s=0===this.colors?1<<this.bitPP:this.colors;this.palette=new Array(s);for(var i=0;i<s;i++){var h=this.buffer[this.pos++],o=this.buffer[this.pos++],a=this.buffer[this.pos++],e=this.buffer[this.pos++];this.palette[i]={red:a,green:o,blue:h,quad:e}}}},BmpDecoder.prototype.parseBGR=function(){this.pos=this.offset;try{var t="bit"+this.bitPP,s=document.createElement("canvas").getContext("2d").createImageData(this.width,this.height);this.imageData=s,this.data=s.data,this[t]()}catch(t){console.log("bit decode error:"+t)}},BmpDecoder.prototype.bit1=function(){for(var t=Math.ceil(this.width/8),s=t%4,i=this.height-1;i>=0;i--){for(var h=0;h<t;h++)for(var o=this.buffer[this.pos++],a=i*this.width*4+8*h*4,e=0;e<8&&8*h+e<this.width;e++){var p=this.palette[o>>7-e&1];this.data[a+4*e]=p.red,this.data[a+4*e+1]=p.green,this.data[a+4*e+2]=p.blue,this.data[a+4*e+3]=255}0!=s&&(this.pos+=4-s)}},BmpDecoder.prototype.bit4=function(){for(var t=Math.ceil(this.width/2),s=t%4,i=this.height-1;i>=0;i--){for(var h=0;h<t;h++){var o=this.buffer[this.pos++],a=i*this.width*4+2*h*4,e=o>>4,p=15&o,r=this.palette[e];if(this.data[a]=r.red,this.data[a+1]=r.green,this.data[a+2]=r.blue,this.data[a+3]=255,2*h+1>=this.width)break;r=this.palette[p],this.data[a+4]=r.red,this.data[a+4+1]=r.green,this.data[a+4+2]=r.blue,this.data[a+4+3]=255}0!=s&&(this.pos+=4-s)}},BmpDecoder.prototype.bit8=function(){for(var t=this.width%4,s=this.height-1;s>=0;s--){for(var i=0;i<this.width;i++){var h=this.buffer[this.pos++],o=s*this.width*4+4*i;if(h<this.palette.length){var a=this.palette[h];this.data[o]=a.red,this.data[o+1]=a.green,this.data[o+2]=a.blue,this.data[o+3]=255}else this.data[o]=255,this.data[o+1]=255,this.data[o+2]=255,this.data[o+3]=255}0!=t&&(this.pos+=4-t)}},BmpDecoder.prototype.bit15=function(){var t=2*this.width%4;0!=t&&(t=4-t);for(var s=parseInt("11111",2),i=this.height-1;i>=0;i--){for(var h=0;h<this.width;h++){var o=this.buffer[this.pos+1]<<8|this.buffer[this.pos];this.pos+=2;var a=(o&s)/s*255|0,e=(o>>5&s)/s*255|0,p=(o>>10&s)/s*255|0,r=o>>15?255:0,d=i*this.width*4+4*h;this.data[d]=p,this.data[d+1]=e,this.data[d+2]=a,this.data[d+3]=r}this.pos+=t}},BmpDecoder.prototype.bit16=function(){var t=2*this.width%4;0!=t&&(t=4-t);for(var s=parseInt("11111",2),i=(parseInt("111111",2),this.height-1);i>=0;i--){for(var h=0;h<this.width;h++){var o=this.buffer[this.pos+1]<<8|this.buffer[this.pos];this.pos+=2;var a=(o&s)/s*255|0,e=(o>>5&s)/s*255|0,p=(o>>10&s)/s*255|0,r=i*this.width*4+4*h;this.data[r]=p,this.data[r+1]=e,this.data[r+2]=a,this.data[r+3]=255}this.pos+=t}},BmpDecoder.prototype.bit24=function(){var t=3*this.width%4;0!=t&&(t=4-t);for(var s=this.height-1;s>=0;s--){for(var i=0;i<this.width;i++){var h=this.buffer[this.pos++],o=this.buffer[this.pos++],a=this.buffer[this.pos++],e=s*this.width*4+4*i;this.data[e]=a,this.data[e+1]=o,this.data[e+2]=h,this.data[e+3]=255}this.pos+=t}},BmpDecoder.prototype.bit32=function(){for(var t=this.height-1;t>=0;t--)for(var s=0;s<this.width;s++){var i=this.buffer[this.pos++],h=this.buffer[this.pos++],o=this.buffer[this.pos++],a=this.buffer[this.pos++],e=t*this.width*4+4*s;this.data[e]=o,this.data[e+1]=h,this.data[e+2]=i,this.data[e+3]=a}},BmpDecoder.prototype.getData=function(){return this.data};
MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",(function(){var t=MathJax.ElementJax.mml,a=MathJax.OutputJax["HTML-CSS"];t.mmultiscripts.Augment({toHTML:function(t,s,e){t=this.HTMLcreateSpan(t);var b,i=this.HTMLgetScale(),o=a.createStack(t),h=a.createBox(o);if(this.data[this.base]){var r=this.data[this.base].toHTML(h);null!=e?this.data[this.base].HTMLstretchV(h,s,e):null!=s&&this.data[this.base].HTMLstretchH(h,s),a.Measured(r,h)}else h.bbox=this.HTMLzeroBBox();for(var x=a.TeX.x_height*i,p=a.TeX.scriptspace*i*.75,l=this.HTMLgetScripts(o,p),c=l[0],m=l[1],M=l[2],u=l[3],n=i,d=1;d<this.data.length;d++)if(this.data[d]&&this.data[d].spanID){n=this.data[d].HTMLgetScale();break}var T,H=a.TeX.sup_drop*n,L=a.TeX.sub_drop*n,w=h.bbox.h-H,B=h.bbox.d+L,f=0;h.bbox.ic&&(f=h.bbox.ic),!this.data[this.base]||"mi"!==this.data[this.base].type&&"mo"!==this.data[this.base].type||a.isChar(this.data[this.base].data.join(""))&&1===h.bbox.scale&&!this.data[this.base].Get("largeop")&&(w=B=0);var g=this.getValues("subscriptshift","superscriptshift"),y=this.HTMLgetMu(t);g.subscriptshift=""===g.subscriptshift?0:a.length2em(g.subscriptshift,y),g.superscriptshift=""===g.superscriptshift?0:a.length2em(g.superscriptshift,y);var v=0;if(M?v=M.bbox.w+f:u&&(v=u.bbox.w-f),v<0&&(v=0),a.placeBox(h,v,0),m||u)if(c||M){B=Math.max(B,a.TeX.sub2*i);var S=a.TeX.rule_thickness*i,C=(c||M).bbox.h,J=(m||u).bbox.d;M&&(C=Math.max(C,M.bbox.h)),u&&(J=Math.max(J,u.bbox.d)),w-J-(C-B)<3*S&&(B=3*S-w+J+C,(H=.8*x-(w-J))>0&&(w+=H,B-=H)),w=Math.max(w,g.superscriptshift),B=Math.max(B,g.subscriptshift),m&&a.placeBox(m,v+h.bbox.w+p,w),u&&a.placeBox(u,v+f-u.bbox.w,w),c&&a.placeBox(c,v+h.bbox.w+p-f,-B),M&&a.placeBox(M,v-M.bbox.w,-B)}else b=this.getValues("displaystyle","texprimestyle"),T=a.TeX[b.displaystyle?"sup1":b.texprimestyle?"sup3":"sup2"],w=Math.max(w,T*i,g.superscriptshift),m&&(w=Math.max(w,m.bbox.d+1/4*x)),u&&(w=Math.max(w,u.bbox.d+1/4*x)),m&&a.placeBox(m,v+h.bbox.w+p,w),u&&a.placeBox(u,0,w);else B=Math.max(B,a.TeX.sub1*i,g.subscriptshift),c&&(B=Math.max(B,c.bbox.h-.8*x)),M&&(B=Math.max(B,M.bbox.h-.8*x)),c&&a.placeBox(c,v+h.bbox.w+p-f,-B),M&&a.placeBox(M,0,-B);this.HTMLhandleSpace(t),this.HTMLhandleColor(t);var X=t.bbox;return X.dx=v,X.s=p,X.u=w,X.v=B,X.delta=f,X.px=v+h.bbox.w,t},HTMLgetScripts:function(t,s){for(var e,b,i=[],o=1,h=this.data.length,r=0,x=0;x<4;x+=2){for(;o<h&&"mprescripts"!==(this.data[o]||{}).type;){for(var p=[null,null,null,null],l=x;l<x+2;l++)this.data[o]&&"none"!==this.data[o].type&&"mprescripts"!==this.data[o].type?(i[l]||(i[l]=a.createBox(t),i[l].bbox=this.HTMLemptyBBox({}),r&&(a.createBlank(i[l],r),i[l].bbox.w=i[l].bbox.rw=r)),p[l]=this.data[o].toHTML(i[l])):p[l]=MathJax.HTML.Element("span",{bbox:this.HTMLemptyBBox({})}),"mprescripts"!==(this.data[o]||{}).type&&o++;var c=2===x;if(b=i[x],e=i[x+1],b&&e){var m=p[x+1].bbox.w-p[x].bbox.w;m>0?c?(this.HTMLmoveColor(p[x],m,1),i[x].w+=m):a.createBlank(b,m):m<0&&(c?(this.HTMLmoveColor(p[x+1],-m,-1),i[x+1].w+=-m):a.createBlank(e,-m)),this.HTMLcombineBBoxes(p[x],b.bbox),this.HTMLcombineBBoxes(p[x+1],e.bbox),m>0?(b.bbox.w=e.bbox.w,b.bbox.rw=Math.max(b.bbox.w,b.bbox.rw)):m<0&&(e.bbox.w=b.bbox.w,e.bbox.rw=Math.max(e.bbox.w,e.bbox.rw))}else b&&this.HTMLcombineBBoxes(p[x],b.bbox),e&&this.HTMLcombineBBoxes(p[x+1],e.bbox);b?r=b.bbox.w:e&&(r=e.bbox.w)}o++,r=0}for(l=0;l<4;l++)i[l]&&(i[l].bbox.w+=s,i[l].bbox.rw=Math.max(i[l].bbox.w,i[l].bbox.rw),i[l].bbox.name=["sub","sup","presub","presup"][l],this.HTMLcleanBBox(i[l].bbox));return i},HTMLmoveColor:function(t,s,e){var b=s/(t.scale||1);t.style.paddingLeft=a.Em(b);var i=t.previousSibling;i&&(i.id||"").match(/^MathJax-Color-/)&&(i.style.marginLeft=a.Em(b+parseFloat(i.style.marginLeft)),i.style.marginRight=a.Em(e*(b-parseFloat(i.style.marginRight))))},HTMLstretchH:t.mbase.HTMLstretchH,HTMLstretchV:t.mbase.HTMLstretchV}),MathJax.Hub.Startup.signal.Post("HTML-CSS mmultiscripts Ready"),MathJax.Ajax.loadComplete(a.autoloadDir+"/mmultiscripts.js")}));
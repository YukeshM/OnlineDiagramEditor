function mxShapeMockupBarChart(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}function mxShapeMockupColumnChart(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}function mxShapeMockupLineChart(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}function mxShapeMockupPieChart(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}function mxShapeMockupIconGrid(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}function mxShapeMockupBubbleChart(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}function mxShapeMockupGauge(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1,this.gaugePos=25}function mxShapeMockupPlotChart(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}function mxShapeMockupGanttChart(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}function mxShapeMockupSimpleIcon(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}function mxShapeMockupGraphicsAnchor(e,o,t,l){mxShape.call(this),this.bounds=e}function mxShapeMockupGraphicsRRect(e,o,t,l){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=t,this.strokewidth=null!=l?l:1}mxUtils.extend(mxShapeMockupBarChart,mxShape),mxShapeMockupBarChart.prototype.cst={STROKE_COLOR2:"strokeColor2",STROKE_COLOR3:"strokeColor3",FILL_COLOR2:"fillColor2",FILL_COLOR3:"fillColor3",SHAPE_BAR_CHART:"mxgraph.mockup.graphics.barChart"},mxShapeMockupBarChart.prototype.customProperties=[{name:"strokeColor2",dispName:"Stroke2 Color",type:"color"},{name:"strokeColor3",dispName:"Stroke3 Color",type:"color"},{name:"fillColor2",dispName:"Fill2 Color",type:"color"},{name:"fillColor3",dispName:"Fill3 Color",type:"color"}],mxShapeMockupBarChart.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t),this.background(e,o,t,l,r),"none"!==mxUtils.getValue(this.style,mxConstants.STYLE_FILLCOLOR,"none")&&e.setShadow(!1),this.bars(e,o,t,l,r)},mxShapeMockupBarChart.prototype.background=function(e,o,t,l,r,a,p){e.rect(0,0,l,r),e.fillAndStroke()},mxShapeMockupBarChart.prototype.bars=function(e,o,t,l,r){var a=mxUtils.getValue(this.style,mxShapeMockupBarChart.prototype.cst.STROKE_COLOR2,"none"),p=mxUtils.getValue(this.style,mxShapeMockupBarChart.prototype.cst.STROKE_COLOR3,"#666666"),i=mxUtils.getValue(this.style,mxShapeMockupBarChart.prototype.cst.FILL_COLOR2,"#008cff"),s=mxUtils.getValue(this.style,mxShapeMockupBarChart.prototype.cst.FILL_COLOR3,"#dddddd"),n=mxUtils.getValue(this.style,mxConstants.STYLE_STROKEWIDTH,"1");e.setStrokeColor(a),e.setFillColor(i),e.rect(0,.2*r,.75*l,.05*r),e.fillAndStroke(),e.rect(0,.45*r,.6*l,.05*r),e.fillAndStroke(),e.rect(0,.7*r,.95*l,.05*r),e.fillAndStroke(),e.setFillColor(s),e.rect(0,.25*r,.85*l,.05*r),e.fillAndStroke(),e.rect(0,.5*r,.65*l,.05*r),e.fillAndStroke(),e.rect(0,.75*r,.8*l,.05*r),e.fillAndStroke(),e.setStrokeWidth(2*n),e.setStrokeColor(p),e.setShadow(!1),e.begin(),e.moveTo(0,0),e.lineTo(0,r),e.lineTo(l,r),e.stroke()},mxCellRenderer.registerShape(mxShapeMockupBarChart.prototype.cst.SHAPE_BAR_CHART,mxShapeMockupBarChart),mxUtils.extend(mxShapeMockupColumnChart,mxShape),mxShapeMockupColumnChart.prototype.cst={STROKE_COLOR2:"strokeColor2",STROKE_COLOR3:"strokeColor3",FILL_COLOR2:"fillColor2",FILL_COLOR3:"fillColor3",SHAPE_COLUMN_CHART:"mxgraph.mockup.graphics.columnChart"},mxShapeMockupColumnChart.prototype.customProperties=[{name:"strokeColor2",dispName:"Bar Stroke Color",type:"color"},{name:"strokeColor3",dispName:"Coord System Color",type:"color"},{name:"fillColor2",dispName:"Bar1 Color",type:"color"},{name:"fillColor3",dispName:"Bar2 Color",type:"color"}],mxShapeMockupColumnChart.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t),this.background(e,o,t,l,r),"none"!==mxUtils.getValue(this.style,mxConstants.STYLE_FILLCOLOR,"none")&&e.setShadow(!1),this.bars(e,o,t,l,r)},mxShapeMockupColumnChart.prototype.background=function(e,o,t,l,r,a,p){e.rect(0,0,l,r),e.fillAndStroke()},mxShapeMockupColumnChart.prototype.bars=function(e,o,t,l,r){var a=mxUtils.getValue(this.style,mxShapeMockupColumnChart.prototype.cst.STROKE_COLOR2,"none"),p=mxUtils.getValue(this.style,mxShapeMockupColumnChart.prototype.cst.STROKE_COLOR3,"#666666"),i=mxUtils.getValue(this.style,mxShapeMockupColumnChart.prototype.cst.FILL_COLOR2,"#008cff"),s=mxUtils.getValue(this.style,mxShapeMockupColumnChart.prototype.cst.FILL_COLOR3,"#dddddd"),n=mxUtils.getValue(this.style,mxConstants.STYLE_STROKEWIDTH,"1");e.setStrokeColor(a),e.setFillColor(i),e.rect(.2*l,.25*r,.05*l,.75*r),e.fillAndStroke(),e.rect(.45*l,.4*r,.05*l,.6*r),e.fillAndStroke(),e.rect(.7*l,.05*r,.05*l,.95*r),e.fillAndStroke(),e.setFillColor(s),e.rect(.25*l,.15*r,.05*l,.85*r),e.fillAndStroke(),e.rect(.5*l,.35*r,.05*l,.65*r),e.fillAndStroke(),e.rect(.75*l,.2*r,.05*l,.8*r),e.fillAndStroke(),e.setStrokeWidth(2*n),e.setStrokeColor(p),e.setShadow(!1),e.begin(),e.moveTo(0,0),e.lineTo(0,r),e.lineTo(l,r),e.stroke()},mxCellRenderer.registerShape(mxShapeMockupColumnChart.prototype.cst.SHAPE_COLUMN_CHART,mxShapeMockupColumnChart),mxUtils.extend(mxShapeMockupLineChart,mxShape),mxShapeMockupLineChart.prototype.cst={STROKE_COLOR2:"strokeColor2",STROKE_COLOR3:"strokeColor3",STROKE_COLOR4:"strokeColor4",SHAPE_LINE_CHART:"mxgraph.mockup.graphics.lineChart"},mxShapeMockupLineChart.prototype.customProperties=[{name:"strokeColor2",dispName:"Coord. System Color",type:"color"},{name:"strokeColor3",dispName:"Line1 Color",type:"color"},{name:"strokeColor4",dispName:"Line2 Color",type:"color"}],mxShapeMockupLineChart.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t),this.background(e,o,t,l,r),"none"!==mxUtils.getValue(this.style,mxConstants.STYLE_FILLCOLOR,"none")&&e.setShadow(!1),this.bars(e,o,t,l,r)},mxShapeMockupLineChart.prototype.background=function(e,o,t,l,r,a,p){e.rect(0,0,l,r),e.fillAndStroke()},mxShapeMockupLineChart.prototype.bars=function(e,o,t,l,r){var a=mxUtils.getValue(this.style,mxShapeMockupLineChart.prototype.cst.STROKE_COLOR2,"#666666"),p=mxUtils.getValue(this.style,mxShapeMockupLineChart.prototype.cst.STROKE_COLOR3,"#008cff"),i=mxUtils.getValue(this.style,mxShapeMockupLineChart.prototype.cst.STROKE_COLOR4,"#dddddd"),s=mxUtils.getValue(this.style,mxConstants.STYLE_STROKEWIDTH,"1");e.setStrokeWidth(2*s),e.setStrokeColor(i),e.begin(),e.moveTo(0,r),e.lineTo(.3*l,.5*r),e.lineTo(.6*l,.74*r),e.lineTo(.9*l,.24*r),e.stroke(),e.setStrokeColor(p),e.begin(),e.moveTo(0,r),e.lineTo(.3*l,.65*r),e.lineTo(.6*l,.6*r),e.lineTo(.9*l,.35*r),e.stroke(),e.setStrokeColor(a),e.setShadow(!1),e.begin(),e.moveTo(0,0),e.lineTo(0,r),e.lineTo(l,r),e.stroke()},mxCellRenderer.registerShape(mxShapeMockupLineChart.prototype.cst.SHAPE_LINE_CHART,mxShapeMockupLineChart),mxUtils.extend(mxShapeMockupPieChart,mxShape),mxShapeMockupPieChart.prototype.cst={PARTS:"parts",PART_COLORS:"partColors",SHAPE_PIE_CHART:"mxgraph.mockup.graphics.pieChart"},mxShapeMockupPieChart.prototype.customProperties=[{name:"partsCount",dispName:"partsCount",type:"int",defVal:4,dependentProps:["partColors","parts"]},{name:"partColors",dispName:"Part Colors",type:"staticArr",subType:"color",sizeProperty:"partsCount",subDefVal:"#FFFFFF"},{name:"parts",dispName:"Part Sizes",type:"staticArr",subType:"int",sizeProperty:"partsCount",subDefVal:"10"}],mxShapeMockupPieChart.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t),this.background(e,o,t,l,r),e.setShadow(!1),this.foreground(e,o,t,l,r)},mxShapeMockupPieChart.prototype.background=function(e,o,t,l,r,a,p){e.ellipse(0,0,l,r),e.fillAndStroke()},mxShapeMockupPieChart.prototype.foreground=function(e,o,t,l,r){for(var a=mxUtils.getValue(this.style,mxShapeMockupPieChart.prototype.cst.PARTS,"10,20,30").toString().split(","),p=a.length,i=mxUtils.getValue(this.style,mxShapeMockupPieChart.prototype.cst.PART_COLORS,"#333333,#666666,#999999").toString().split(","),s=0,n=0;n<p;n++)s+=parseInt(a[n],10);for(n=0;n<p;n++){i.length>n?e.setFillColor(i[n]):e.setFillColor("#ff0000");var h,c=0,m=parseInt(a[n],10)/s;.5===m&&(m=.501);for(var S=0;S<n;S++)c+=parseInt(a[S],10)/s;h=m+c;var u=2*Math.PI*c,C=2*Math.PI*h,x=.5*l-l*Math.sin(u)*.5,k=.5*r-r*Math.cos(u)*.5,T=.5*l-l*Math.sin(C)*.5,d=.5*r-r*Math.cos(C)*.5,g=1;h-c<.5&&(g=0),e.begin(),e.moveTo(.5*l,.5*r),e.lineTo(T,d),e.arcTo(.5*l,.5*r,0,g,1,x,k),e.close(),e.fillAndStroke()}},mxCellRenderer.registerShape(mxShapeMockupPieChart.prototype.cst.SHAPE_PIE_CHART,mxShapeMockupPieChart),mxUtils.extend(mxShapeMockupIconGrid,mxShape),mxShapeMockupIconGrid.prototype.cst={GRID_SIZE:"gridSize",SHAPE_ICON_GRID:"mxgraph.mockup.graphics.iconGrid"},mxShapeMockupIconGrid.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t);var a=mxUtils.getValue(this.style,mxShapeMockupIconGrid.prototype.cst.GRID_SIZE,"3,3").toString().split(",");this.background(e,l,r,a),e.setShadow(!1),this.foreground(e,l,r,a)},mxShapeMockupIconGrid.prototype.background=function(e,o,t,l){for(var r=o/(parseInt(l[0],10)+.5*(l[0]-1)),a=t/(parseInt(l[1],10)+.5*(l[1]-1)),p=0;p<l[0];p++)for(var i=0;i<l[1];i++)e.rect(1.5*r*p,1.5*a*i,r,a),e.fillAndStroke()},mxShapeMockupIconGrid.prototype.foreground=function(e,o,t,l){for(var r=o/(parseInt(l[0],10)+.5*(l[0]-1)),a=t/(parseInt(l[1],10)+.5*(l[1]-1)),p=0;p<l[0];p++)for(var i=0;i<l[1];i++)e.begin(),e.moveTo(1.5*r*p,1.5*a*i),e.lineTo(1.5*r*p+r,1.5*a*i+a),e.moveTo(1.5*r*p+r,1.5*a*i),e.lineTo(1.5*r*p,1.5*a*i+a),e.stroke()},mxCellRenderer.registerShape(mxShapeMockupIconGrid.prototype.cst.SHAPE_ICON_GRID,mxShapeMockupIconGrid),mxUtils.extend(mxShapeMockupBubbleChart,mxShape),mxShapeMockupBubbleChart.prototype.cst={STROKE_COLOR2:"strokeColor2",STROKE_COLOR3:"strokeColor3",FILL_COLOR2:"fillColor2",FILL_COLOR3:"fillColor3",SHAPE_BUBBLE_CHART:"mxgraph.mockup.graphics.bubbleChart"},mxShapeMockupBubbleChart.prototype.customProperties=[{name:"strokeColor2",dispName:"Bubble Stroke Color",type:"color"},{name:"strokeColor3",dispName:"Coord. System Color",type:"color"},{name:"fillColor2",dispName:"Bubble1 Color",type:"color"},{name:"fillColor3",dispName:"Bubble2 Color",type:"color"}],mxShapeMockupBubbleChart.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t),this.background(e,o,t,l,r),"none"!==mxUtils.getValue(this.style,mxConstants.STYLE_FILLCOLOR,"none")&&e.setShadow(!1),this.bars(e,o,t,l,r)},mxShapeMockupBubbleChart.prototype.background=function(e,o,t,l,r,a,p){e.rect(0,0,l,r),e.fillAndStroke()},mxShapeMockupBubbleChart.prototype.bars=function(e,o,t,l,r){var a=mxUtils.getValue(this.style,mxShapeMockupBubbleChart.prototype.cst.STROKE_COLOR2,"none"),p=mxUtils.getValue(this.style,mxShapeMockupBubbleChart.prototype.cst.STROKE_COLOR3,"#666666"),i=mxUtils.getValue(this.style,mxShapeMockupBubbleChart.prototype.cst.FILL_COLOR2,"#008cff"),s=mxUtils.getValue(this.style,mxShapeMockupBubbleChart.prototype.cst.FILL_COLOR3,"#dddddd"),n=mxUtils.getValue(this.style,mxConstants.STYLE_STROKEWIDTH,"1");e.setStrokeColor(a),e.setFillColor(i);var h=.4*l,c=.45*r,m=.14*Math.min(r,l);e.ellipse(h-m,c-m,2*m,2*m),e.fillAndStroke(),h=.1*l,c=.8*r,m=.1*Math.min(r,l),e.ellipse(h-m,c-m,2*m,2*m),e.fillAndStroke(),h=.7*l,c=.7*r,m=.22*Math.min(r,l),e.ellipse(h-m,c-m,2*m,2*m),e.fillAndStroke(),e.setFillColor(s),h=.15*l,c=.25*r,m=.19*Math.min(r,l),e.ellipse(h-m,c-m,2*m,2*m),e.fillAndStroke(),h=.48*l,c=.7*r,m=.12*Math.min(r,l),e.ellipse(h-m,c-m,2*m,2*m),e.fillAndStroke(),h=.74*l,c=.17*r,m=.1*Math.min(r,l),e.ellipse(h-m,c-m,2*m,2*m),e.fillAndStroke(),e.setStrokeWidth(2*n),e.setStrokeColor(p),e.setShadow(!1),e.begin(),e.moveTo(0,0),e.lineTo(0,r),e.lineTo(l,r),e.stroke()},mxCellRenderer.registerShape(mxShapeMockupBubbleChart.prototype.cst.SHAPE_BUBBLE_CHART,mxShapeMockupBubbleChart),mxUtils.extend(mxShapeMockupGauge,mxShape),mxShapeMockupGauge.prototype.cst={SCALE_COLORS:"scaleColors",GAUGE_LABELS:"gaugeLabels",NEEDLE_COLOR:"needleColor",TEXT_COLOR:"textColor",TEXT_SIZE:"textSize",GAUGE_POS:"gaugePos",SHAPE_GAUGE:"mxgraph.mockup.graphics.gauge"},mxShapeMockupGauge.prototype.customProperties=[{name:"scaleColors",dispName:"Scale Colors",type:"String"},{name:"needleColor",dispName:"Needle Color",type:"color"},{name:"gaugePos",dispName:"Needle Position",type:"float",min:0,max:100,defVal:25}],mxShapeMockupGauge.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t),this.background(e,l,r),e.setShadow(!1),this.foreground(e,l,r)},mxShapeMockupGauge.prototype.background=function(e,o,t){e.ellipse(0,0,o,t),e.fillAndStroke()},mxShapeMockupGauge.prototype.foreground=function(e,o,t){var l=mxUtils.getValue(this.style,mxShapeMockupGauge.prototype.cst.GAUGE_POS,"0"),r=mxUtils.getValue(this.style,mxShapeMockupGauge.prototype.cst.SCALE_COLORS,"#888888,#aaaaaa,#444444").toString().split(","),a=mxUtils.getValue(this.style,mxShapeMockupGauge.prototype.cst.GAUGE_LABELS,"CPU[%],0,100").toString().split(","),p=mxUtils.getValue(this.style,mxShapeMockupGauge.prototype.cst.NEEDLE_COLOR,"#008cff"),i=mxUtils.getValue(this.style,mxConstants.STYLE_FILLCOLOR,"#ffffff"),s=mxUtils.getValue(this.style,mxShapeMockupGauge.prototype.cst.TEXT_COLOR,"#666666"),n=mxUtils.getValue(this.style,mxShapeMockupGauge.prototype.cst.TEXT_SIZE,"12");l=Math.max(0,l),l=Math.min(100,l),e.setFillColor(r[1]),e.begin(),e.moveTo(.05*o,.5*t),e.arcTo(.4*o,.4*t,0,0,1,.95*o,.5*t),e.lineTo(o,.5*t),e.arcTo(.5*o,.5*t,0,0,0,0,.5*t),e.close(),e.fill(),e.setFillColor(r[0]),e.begin(),e.moveTo(.05*o,.5*t),e.arcTo(.45*o,.45*t,0,0,0,.182*o,.818*t),e.lineTo(.146*o,.854*t),e.arcTo(.5*o,.5*t,0,0,1,0,.5*t),e.close(),e.fill(),e.setFillColor(r[2]),e.begin(),e.moveTo(o,.5*t),e.arcTo(.5*o,.5*t,0,0,1,.854*o,.854*t),e.lineTo(.818*o,.818*t),e.arcTo(.45*o,.45*t,0,0,0,.95*o,.5*t),e.close(),e.fill(),e.setFontSize(n),e.setFontColor(s),e.text(.5*o,.3*t,0,0,a[0],mxConstants.ALIGN_CENTER,mxConstants.ALIGN_MIDDLE,0,null,0,0,0),e.text(.2*o,.85*t,0,0,a[1],mxConstants.ALIGN_LEFT,mxConstants.ALIGN_MIDDLE,0,null,0,0,0),e.text(.8*o,.85*t,0,0,a[2],mxConstants.ALIGN_RIGHT,mxConstants.ALIGN_MIDDLE,0,null,0,0,0);var h=2*Math.PI*parseFloat(l)/100*.75+1.25*Math.PI,c=.5*o+.38*o*Math.sin(h),m=.5*t-.38*t*Math.cos(h),S=0,u=0;e.setFillColor(p),e.begin(),e.moveTo(c,m),c=.5*o+.05*o*Math.cos(h),m=.5*t+.05*t*Math.sin(h),e.lineTo(c,m),S=.5*o+-.05*o*Math.sin(h),u=.5*t- -.05*t*Math.cos(h),e.arcTo(.05*o,.05*t,0,0,1,S,u),c=S,m=u,S=.5*o-.05*o*Math.cos(h),u=.5*t-.05*t*Math.sin(h),e.arcTo(.05*o,.05*t,0,0,1,S,u),e.close(),e.fill(),e.setFillColor(i),e.begin(),e.moveTo(.49*o,.49*t),e.lineTo(.51*o,.49*t),e.lineTo(.51*o,.51*t),e.lineTo(.49*o,.51*t),e.close(),e.fill(),e.begin(),e.ellipse(0,0,o,t),e.stroke(),e.begin(),e.moveTo(.146*o,.854*t),e.lineTo(.219*o,.781*t),e.moveTo(.854*o,.854*t),e.lineTo(.781*o,.781*t),e.stroke()},mxCellRenderer.registerShape(mxShapeMockupGauge.prototype.cst.SHAPE_GAUGE,mxShapeMockupGauge),Graph.handleFactory[mxShapeMockupGauge.prototype.cst.SHAPE_GAUGE]=function(e){return[Graph.createHandle(e,["gaugePos"],(function(e){var o=Math.max(0,Math.min(100,parseFloat(mxUtils.getValue(this.state.style,"gaugePos",this.gaugePos))));return new mxPoint(e.x+.2*e.width+.6*o*e.width/100,e.y+.8*e.height)}),(function(e,o){this.state.style.gaugePos=Math.round(1e3*Math.max(0,Math.min(100,100*(o.x-e.x)/e.width)))/1e3}))]},mxUtils.extend(mxShapeMockupPlotChart,mxShape),mxShapeMockupPlotChart.prototype.cst={STROKE_COLOR2:"strokeColor2",STROKE_COLOR3:"strokeColor3",SHAPES_COLORS:"fillColor2",SHAPE_PLOT_CHART:"mxgraph.mockup.graphics.plotChart"},mxShapeMockupPlotChart.prototype.customProperties=[{name:"strokeColor2",dispName:"Bubble Stroke Color",type:"color"},{name:"strokeColor3",dispName:"Coord. System Color",type:"color"},{name:"fillColor2",dispName:"Shapes Color",type:"string"}],mxShapeMockupPlotChart.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t),this.background(e,o,t,l,r),"none"!==mxUtils.getValue(this.style,mxConstants.STYLE_FILLCOLOR,"none")&&e.setShadow(!1),this.foreground(e,o,t,l,r)},mxShapeMockupPlotChart.prototype.background=function(e,o,t,l,r,a,p){e.rect(0,0,l,r),e.fillAndStroke()},mxShapeMockupPlotChart.prototype.foreground=function(e,o,t,l,r){var a=mxUtils.getValue(this.style,mxShapeMockupPlotChart.prototype.cst.STROKE_COLOR2,"#dddddd"),p=mxUtils.getValue(this.style,mxShapeMockupPlotChart.prototype.cst.STROKE_COLOR3,"#666666"),i=mxUtils.getValue(this.style,mxShapeMockupPlotChart.prototype.cst.SHAPES_COLORS,"#00aaff,#0044ff,#008cff").toString().split(","),s=mxUtils.getValue(this.style,mxConstants.STYLE_STROKEWIDTH,"1"),n=.03*Math.min(l,r);e.setStrokeColor(a),e.setFillColor(i[0]);var h=.2*l,c=.8*r;e.begin(),e.moveTo(h-.5*n,c-.5*n),e.lineTo(h+.5*n,c-.5*n),e.lineTo(h+.5*n,c+.5*n),e.lineTo(h-.5*n,c+.5*n),e.close(),e.fillAndStroke(),h=.3*l,c=.65*r,e.begin(),e.moveTo(h-.5*n,c-.5*n),e.lineTo(h+.5*n,c-.5*n),e.lineTo(h+.5*n,c+.5*n),e.lineTo(h-.5*n,c+.5*n),e.close(),e.fillAndStroke(),h=.6*l,c=.44*r,e.begin(),e.moveTo(h-.5*n,c-.5*n),e.lineTo(h+.5*n,c-.5*n),e.lineTo(h+.5*n,c+.5*n),e.lineTo(h-.5*n,c+.5*n),e.close(),e.fillAndStroke(),h=.85*l,c=.9*r,e.begin(),e.moveTo(h-.5*n,c-.5*n),e.lineTo(h+.5*n,c-.5*n),e.lineTo(h+.5*n,c+.5*n),e.lineTo(h-.5*n,c+.5*n),e.close(),e.fillAndStroke(),e.setFillColor(i[1]),h=.08*l,c=.65*r,e.begin(),e.moveTo(h,c-.5*n),e.lineTo(h+.5*n,c+.5*n),e.lineTo(h-.5*n,c+.5*n),e.close(),e.fillAndStroke(),h=.58*l,c=.85*r,e.begin(),e.moveTo(h,c-.5*n),e.lineTo(h+.5*n,c+.5*n),e.lineTo(h-.5*n,c+.5*n),e.close(),e.fillAndStroke(),h=.72*l,c=.92*r,e.begin(),e.moveTo(h,c-.5*n),e.lineTo(h+.5*n,c+.5*n),e.lineTo(h-.5*n,c+.5*n),e.close(),e.fillAndStroke(),e.setFillColor(i[2]),h=.32*l,c=.28*r,e.begin(),e.moveTo(h,c-.75*n),e.lineTo(h+.75*n,c),e.lineTo(h,c+.75*n),e.lineTo(h-.75*n,c),e.close(),e.fillAndStroke(),h=.92*l,c=.45*r,e.begin(),e.moveTo(h,c-.75*n),e.lineTo(h+.75*n,c),e.lineTo(h,c+.75*n),e.lineTo(h-.75*n,c),e.close(),e.fillAndStroke(),h=.81*l,c=.37*r,e.begin(),e.moveTo(h,c-.75*n),e.lineTo(h+.75*n,c),e.lineTo(h,c+.75*n),e.lineTo(h-.75*n,c),e.close(),e.fillAndStroke(),h=.51*l,c=.7*r,e.begin(),e.moveTo(h,c-.75*n),e.lineTo(h+.75*n,c),e.lineTo(h,c+.75*n),e.lineTo(h-.75*n,c),e.close(),e.fillAndStroke(),e.setStrokeWidth(2*s),e.setStrokeColor(p),e.setShadow(!1),e.begin(),e.moveTo(0,0),e.lineTo(0,r),e.lineTo(l,r),e.stroke()},mxCellRenderer.registerShape(mxShapeMockupPlotChart.prototype.cst.SHAPE_PLOT_CHART,mxShapeMockupPlotChart),mxUtils.extend(mxShapeMockupGanttChart,mxShape),mxShapeMockupGanttChart.prototype.cst={STROKE_COLOR2:"strokeColor2",STROKE_COLOR3:"strokeColor3",SHAPES_COLORS:"fillColor2",TEXT_COLOR:"textColor",TEXT_SIZE:"textSize",SHAPE_GANTT_CHART:"mxgraph.mockup.graphics.ganttChart"},mxShapeMockupGanttChart.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t),this.background(e,o,t,l,r),e.setShadow(!1),this.foreground(e,o,t,l,r)},mxShapeMockupGanttChart.prototype.background=function(e,o,t,l,r,a,p){e.rect(0,0,l,r),e.fillAndStroke()},mxShapeMockupGanttChart.prototype.foreground=function(e,o,t,l,r){var a=mxUtils.getValue(this.style,mxShapeMockupGanttChart.prototype.cst.SHAPES_COLORS,"#888888,#bbbbbb").toString().split(",");mxUtils.getValue(this.style,mxShapeMockupGanttChart.prototype.cst.TEXT_COLOR,"#666666"),mxUtils.getValue(this.style,mxShapeMockupGanttChart.prototype.cst.TEXT_SIZE,"#12"),e.begin(),e.moveTo(0,.13*r),e.lineTo(l,.13*r),e.moveTo(.4*l,0),e.lineTo(.4*l,r),e.moveTo(.4*l,.065*r),e.lineTo(l,.065*r),e.moveTo(.03*l,0),e.lineTo(.03*l,.13*r),e.moveTo(.1*l,0),e.lineTo(.1*l,.13*r),e.moveTo(.315*l,0),e.lineTo(.315*l,.13*r),e.moveTo(.45*l,.065*r),e.lineTo(.45*l,.13*r),e.moveTo(.5*l,.065*r),e.lineTo(.5*l,r),e.moveTo(.55*l,.065*r),e.lineTo(.55*l,.13*r),e.moveTo(.6*l,.065*r),e.lineTo(.6*l,r),e.moveTo(.65*l,.065*r),e.lineTo(.65*l,.13*r),e.moveTo(.7*l,.065*r),e.lineTo(.7*l,r),e.moveTo(.75*l,0),e.lineTo(.75*l,.13*r),e.moveTo(.8*l,.065*r),e.lineTo(.8*l,r),e.moveTo(.85*l,.065*r),e.lineTo(.85*l,.13*r),e.moveTo(.9*l,.065*r),e.lineTo(.9*l,r),e.moveTo(.95*l,.065*r),e.lineTo(.95*l,.13*r),e.stroke(),e.setFillColor(a[0]),e.begin(),e.moveTo(.41*l,.15*r),e.lineTo(.64*l,.15*r),e.lineTo(.64*l,.18*r),e.lineTo(.625*l,.21*r),e.lineTo(.61*l,.18*r),e.lineTo(.44*l,.18*r),e.lineTo(.425*l,.21*r),e.lineTo(.41*l,.18*r),e.close(),e.moveTo(.41*l,.24*r),e.lineTo(.49*l,.24*r),e.lineTo(.49*l,.275*r),e.lineTo(.41*l,.275*r),e.close(),e.moveTo(.46*l,.31*r),e.lineTo(.64*l,.31*r),e.lineTo(.64*l,.345*r),e.lineTo(.46*l,.345*r),e.close(),e.moveTo(.56*l,.39*r),e.lineTo(.69*l,.39*r),e.lineTo(.69*l,.425*r),e.lineTo(.56*l,.425*r),e.close(),e.fill(),e.setFillColor(a[1]),e.begin(),e.moveTo(.46*l,.32*r),e.lineTo(.58*l,.32*r),e.lineTo(.58*l,.335*r),e.lineTo(.46*l,.335*r),e.close(),e.fill()},mxCellRenderer.registerShape(mxShapeMockupGanttChart.prototype.cst.SHAPE_GANTT_CHART,mxShapeMockupGanttChart),mxUtils.extend(mxShapeMockupSimpleIcon,mxShape),mxShapeMockupSimpleIcon.prototype.cst={SIMPLE_ICON:"mxgraph.mockup.graphics.simpleIcon"},mxShapeMockupSimpleIcon.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t),e.rect(0,0,l,r),e.fillAndStroke(),e.begin(),e.moveTo(0,0),e.lineTo(l,r),e.moveTo(0,r),e.lineTo(l,0),e.stroke()},mxCellRenderer.registerShape(mxShapeMockupSimpleIcon.prototype.cst.SIMPLE_ICON,mxShapeMockupSimpleIcon),mxUtils.extend(mxShapeMockupGraphicsAnchor,mxShape),mxShapeMockupGraphicsAnchor.prototype.cst={ANCHOR:"mxgraph.mockup.graphics.anchor"},mxShapeMockupGraphicsAnchor.prototype.paintVertexShape=function(e,o,t,l,r){},mxCellRenderer.registerShape(mxShapeMockupGraphicsAnchor.prototype.cst.ANCHOR,mxShapeMockupGraphicsAnchor),mxUtils.extend(mxShapeMockupGraphicsRRect,mxShape),mxShapeMockupGraphicsRRect.prototype.cst={RRECT:"mxgraph.mockup.graphics.rrect",R_SIZE:"rSize"},mxShapeMockupGraphicsRRect.prototype.customProperties=[{name:"rSize",dispName:"Arc Size",type:"float",min:0,defVal:10}],mxShapeMockupGraphicsRRect.prototype.paintVertexShape=function(e,o,t,l,r){e.translate(o,t);var a=parseInt(mxUtils.getValue(this.style,mxShapeMockupGraphicsRRect.prototype.cst.R_SIZE,"10"));e.roundrect(0,0,l,r,a),e.fillAndStroke()},mxCellRenderer.registerShape(mxShapeMockupGraphicsRRect.prototype.cst.RRECT,mxShapeMockupGraphicsRRect);
function mxShapeFlowchartDocument2(t,n,e,o){mxShape.call(this),this.bounds=t,this.fill=n,this.stroke=e,this.strokewidth=null!=o?o:1,this.size=.5}mxUtils.extend(mxShapeFlowchartDocument2,mxActor),mxShapeFlowchartDocument2.prototype.cst={DOCUMENT2:"mxgraph.flowchart.document2"},mxShapeFlowchartDocument2.prototype.customProperties=[{name:"size",dispName:"Wave Size",type:"float",min:0,max:1,defVal:.25}],mxShapeFlowchartDocument2.prototype.paintVertexShape=function(t,n,e,o,i){t.translate(n,e);var a=i*Math.max(0,Math.min(1,parseFloat(mxUtils.getValue(this.style,"size",this.size))));t.begin(),t.moveTo(o-5,0),t.arcTo(5,5,0,0,1,o,5),t.lineTo(o,i-a/2),t.quadTo(3*o/4,i-1.4*a,o/2,i-a/2),t.quadTo(o/4,i-a*(1-1.4),0,i-a/2),t.lineTo(0,a/2),t.lineTo(0,5),t.arcTo(5,5,0,0,1,5,0),t.close(),t.fillAndStroke()},mxCellRenderer.registerShape(mxShapeFlowchartDocument2.prototype.cst.DOCUMENT2,mxShapeFlowchartDocument2),mxShapeFlowchartDocument2.prototype.constraints=[new mxConnectionConstraint(new mxPoint(.25,0),!1),new mxConnectionConstraint(new mxPoint(.5,0),!1),new mxConnectionConstraint(new mxPoint(.75,0),!1),new mxConnectionConstraint(new mxPoint(0,.25),!1),new mxConnectionConstraint(new mxPoint(0,.5),!1),new mxConnectionConstraint(new mxPoint(0,.75),!1),new mxConnectionConstraint(new mxPoint(1,.25),!1),new mxConnectionConstraint(new mxPoint(1,.5),!1),new mxConnectionConstraint(new mxPoint(1,.75),!1)],Graph.handleFactory[mxShapeFlowchartDocument2.prototype.cst.DOCUMENT2]=function(t){return[Graph.createHandle(t,["size"],(function(t){var n=Math.max(0,Math.min(1,parseFloat(mxUtils.getValue(this.state.style,"size",this.size))));return new mxPoint(t.x+3*t.width/4,t.y+(1-n)*t.height)}),(function(t,n){this.state.style.size=Math.max(0,Math.min(1,(t.y+t.height-n.y)/t.height))}))]};
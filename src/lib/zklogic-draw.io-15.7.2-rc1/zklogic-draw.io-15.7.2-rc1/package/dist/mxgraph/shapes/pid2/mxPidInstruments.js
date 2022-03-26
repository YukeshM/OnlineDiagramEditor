function mxShapePidDiscInst(e,o,n,t){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=n,this.strokewidth=null!=t?t:1}function mxShapePidSharedCont(e,o,n,t){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=n,this.strokewidth=null!=t?t:1}function mxShapePidCompFunc(e,o,n,t){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=n,this.strokewidth=null!=t?t:1}function mxShapePidProgLogCont(e,o,n,t){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=n,this.strokewidth=null!=t?t:1}function mxShapePidIndicator(e,o,n,t){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=n,this.strokewidth=null!=t?t:1}function mxShapePidLogic(e,o,n,t){mxShape.call(this),this.bounds=e,this.fill=o,this.stroke=n,this.strokewidth=null!=t?t:1}mxUtils.extend(mxShapePidDiscInst,mxShape),mxShapePidDiscInst.prototype.cst={SHAPE_DISC_INST:"mxgraph.pid2inst.discInst",MOUNTING:"mounting",FIELD:"field",ROOM:"room",INACCESSIBLE:"inaccessible",LOCAL:"local"},mxShapePidDiscInst.prototype.customProperties=[{name:"mounting",dispName:"Mounting",type:"enum",defVal:"field",enumList:[{val:"field",dispName:"Field"},{val:"room",dispName:"Room"},{val:"inaccessible",dispName:"Inaccessible"},{val:"local",dispName:"Local"}]}],mxShapePidDiscInst.prototype.paintVertexShape=function(e,o,n,t,i){e.translate(o,n),this.background(e,o,n,t,i),e.setShadow(!1),this.foreground(e,o,n,t,i)},mxShapePidDiscInst.prototype.background=function(e,o,n,t,i){e.ellipse(0,0,t,i),e.fillAndStroke()},mxShapePidDiscInst.prototype.foreground=function(e,o,n,t,i){var s=mxUtils.getValue(this.style,mxShapePidDiscInst.prototype.cst.MOUNTING,"field");s===mxShapePidDiscInst.prototype.cst.ROOM?(e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidDiscInst.prototype.cst.INACCESSIBLE?(e.setDashed(!0),e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidDiscInst.prototype.cst.LOCAL&&(e.begin(),e.moveTo(.005*t,.48*i),e.lineTo(.995*t,.48*i),e.moveTo(.005*t,.52*i),e.lineTo(.995*t,.52*i),e.stroke())},mxCellRenderer.registerShape(mxShapePidDiscInst.prototype.cst.SHAPE_DISC_INST,mxShapePidDiscInst),mxShapePidDiscInst.prototype.constraints=[new mxConnectionConstraint(new mxPoint(.5,0),!0),new mxConnectionConstraint(new mxPoint(.5,1),!0),new mxConnectionConstraint(new mxPoint(0,.5),!0),new mxConnectionConstraint(new mxPoint(1,.5),!0),new mxConnectionConstraint(new mxPoint(.145,.145),!1),new mxConnectionConstraint(new mxPoint(.145,.855),!1),new mxConnectionConstraint(new mxPoint(.855,.145),!1),new mxConnectionConstraint(new mxPoint(.855,.855),!1)],mxUtils.extend(mxShapePidSharedCont,mxShape),mxShapePidSharedCont.prototype.cst={SHAPE_SHARED_CONT:"mxgraph.pid2inst.sharedCont",MOUNTING:"mounting",FIELD:"field",ROOM:"room",INACCESSIBLE:"inaccessible",LOCAL:"local"},mxShapePidSharedCont.prototype.customProperties=[{name:"mounting",dispName:"Mounting",type:"enum",defVal:"field",enumList:[{val:"field",dispName:"Field"},{val:"room",dispName:"Room"},{val:"inaccessible",dispName:"Inaccessible"},{val:"local",dispName:"Local"}]}],mxShapePidSharedCont.prototype.paintVertexShape=function(e,o,n,t,i){e.translate(o,n),this.background(e,o,n,t,i),e.setShadow(!1),this.foreground(e,o,n,t,i)},mxShapePidSharedCont.prototype.background=function(e,o,n,t,i){e.rect(0,0,t,i),e.fillAndStroke()},mxShapePidSharedCont.prototype.foreground=function(e,o,n,t,i){var s=mxUtils.getValue(this.style,mxShapePidSharedCont.prototype.cst.MOUNTING,"field");e.ellipse(0,0,t,i),e.fillAndStroke(),s===mxShapePidSharedCont.prototype.cst.ROOM?(e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidSharedCont.prototype.cst.INACCESSIBLE?(e.setDashed(!0),e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidDiscInst.prototype.cst.LOCAL&&(e.begin(),e.moveTo(.005*t,.48*i),e.lineTo(.995*t,.48*i),e.moveTo(.005*t,.52*i),e.lineTo(.995*t,.52*i),e.stroke())},mxCellRenderer.registerShape(mxShapePidSharedCont.prototype.cst.SHAPE_SHARED_CONT,mxShapePidSharedCont),mxShapePidSharedCont.prototype.constraints=[new mxConnectionConstraint(new mxPoint(.5,0),!0),new mxConnectionConstraint(new mxPoint(.5,1),!0),new mxConnectionConstraint(new mxPoint(0,.5),!0),new mxConnectionConstraint(new mxPoint(1,.5),!0),new mxConnectionConstraint(new mxPoint(0,0),!1),new mxConnectionConstraint(new mxPoint(0,1),!1),new mxConnectionConstraint(new mxPoint(1,0),!1),new mxConnectionConstraint(new mxPoint(1,1),!1)],mxUtils.extend(mxShapePidCompFunc,mxShape),mxShapePidCompFunc.prototype.cst={SHAPE_COMP_FUNC:"mxgraph.pid2inst.compFunc",MOUNTING:"mounting",FIELD:"field",ROOM:"room",INACCESSIBLE:"inaccessible",LOCAL:"local"},mxShapePidCompFunc.prototype.customProperties=[{name:"mounting",dispName:"Mounting",type:"enum",defVal:"field",enumList:[{val:"field",dispName:"Field"},{val:"room",dispName:"Room"},{val:"inaccessible",dispName:"Inaccessible"},{val:"local",dispName:"Local"}]}],mxShapePidCompFunc.prototype.paintVertexShape=function(e,o,n,t,i){e.translate(o,n),this.background(e,o,n,t,i),e.setShadow(!1),this.foreground(e,o,n,t,i)},mxShapePidCompFunc.prototype.background=function(e,o,n,t,i){e.begin(),e.moveTo(0,.5*i),e.lineTo(.25*t,0),e.lineTo(.75*t,0),e.lineTo(t,.5*i),e.lineTo(.75*t,i),e.lineTo(.25*t,i),e.close(),e.fillAndStroke()},mxShapePidCompFunc.prototype.foreground=function(e,o,n,t,i){var s=mxUtils.getValue(this.style,mxShapePidCompFunc.prototype.cst.MOUNTING,"field");s===mxShapePidCompFunc.prototype.cst.ROOM?(e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidCompFunc.prototype.cst.INACCESSIBLE?(e.setDashed(!0),e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidDiscInst.prototype.cst.LOCAL&&(e.begin(),e.moveTo(.01*t,.48*i),e.lineTo(.99*t,.48*i),e.moveTo(.01*t,.52*i),e.lineTo(.99*t,.52*i),e.stroke())},mxCellRenderer.registerShape(mxShapePidCompFunc.prototype.cst.SHAPE_COMP_FUNC,mxShapePidCompFunc),mxShapePidCompFunc.prototype.constraints=[new mxConnectionConstraint(new mxPoint(.5,0),!0),new mxConnectionConstraint(new mxPoint(.5,1),!0),new mxConnectionConstraint(new mxPoint(0,.5),!0),new mxConnectionConstraint(new mxPoint(1,.5),!0),new mxConnectionConstraint(new mxPoint(.25,0),!1),new mxConnectionConstraint(new mxPoint(.75,0),!1),new mxConnectionConstraint(new mxPoint(.25,1),!1),new mxConnectionConstraint(new mxPoint(.75,1),!1)],mxUtils.extend(mxShapePidProgLogCont,mxShape),mxShapePidProgLogCont.prototype.cst={SHAPE_PROG_LOG_CONT:"mxgraph.pid2inst.progLogCont",MOUNTING:"mounting",FIELD:"field",ROOM:"room",INACCESSIBLE:"inaccessible",LOCAL:"local"},mxShapePidProgLogCont.prototype.customProperties=[{name:"mounting",dispName:"Mounting",type:"enum",defVal:"field",enumList:[{val:"field",dispName:"Field"},{val:"room",dispName:"Room"},{val:"inaccessible",dispName:"Inaccessible"},{val:"local",dispName:"Local"}]}],mxShapePidProgLogCont.prototype.paintVertexShape=function(e,o,n,t,i){e.translate(o,n),this.background(e,o,n,t,i),e.setShadow(!1),this.foreground(e,o,n,t,i)},mxShapePidProgLogCont.prototype.background=function(e,o,n,t,i){e.rect(0,0,t,i),e.fillAndStroke()},mxShapePidProgLogCont.prototype.foreground=function(e,o,n,t,i){var s=mxUtils.getValue(this.style,mxShapePidProgLogCont.prototype.cst.MOUNTING,"field");e.begin(),e.moveTo(0,.5*i),e.lineTo(.5*t,0),e.lineTo(t,.5*i),e.lineTo(.5*t,i),e.close(),e.stroke(),s===mxShapePidProgLogCont.prototype.cst.ROOM?(e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidProgLogCont.prototype.cst.INACCESSIBLE?(e.setDashed(!0),e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidDiscInst.prototype.cst.LOCAL&&(e.begin(),e.moveTo(.02*t,.48*i),e.lineTo(.98*t,.48*i),e.moveTo(.02*t,.52*i),e.lineTo(.98*t,.52*i),e.stroke())},mxCellRenderer.registerShape(mxShapePidProgLogCont.prototype.cst.SHAPE_PROG_LOG_CONT,mxShapePidProgLogCont),mxShapePidProgLogCont.prototype.constraints=[new mxConnectionConstraint(new mxPoint(.5,0),!0),new mxConnectionConstraint(new mxPoint(.5,1),!0),new mxConnectionConstraint(new mxPoint(0,.5),!0),new mxConnectionConstraint(new mxPoint(1,.5),!0),new mxConnectionConstraint(new mxPoint(0,0),!1),new mxConnectionConstraint(new mxPoint(0,1),!1),new mxConnectionConstraint(new mxPoint(1,0),!1),new mxConnectionConstraint(new mxPoint(1,1),!1)],mxUtils.extend(mxShapePidIndicator,mxShape),mxShapePidIndicator.prototype.cst={SHAPE_INDICATOR:"mxgraph.pid2inst.indicator",MOUNTING:"mounting",FIELD:"field",ROOM:"room",INACCESSIBLE:"inaccessible",LOCAL:"local",IND_TYPE:"indType",INSTRUMENT:"inst",CONTROL:"ctrl",FUNCTION:"func",PLC:"plc"},mxShapePidIndicator.prototype.customProperties=[{name:"mounting",dispName:"Mounting",type:"enum",defVal:"field",enumList:[{val:"field",dispName:"Field"},{val:"room",dispName:"Room"},{val:"inaccessible",dispName:"Inaccessible"},{val:"local",dispName:"Local"}]},{name:"indType",dispName:"Type",type:"enum",defVal:"inst",enumList:[{val:"inst",dispName:"Instrument"},{val:"ctrl",dispName:"Control"},{val:"func",dispName:"Function"},{val:"plc",dispName:"PLC"}]}],mxShapePidIndicator.prototype.paintVertexShape=function(e,o,n,t,i){e.translate(o,n),this.background(e,o,n,t,i),e.setShadow(!1),this.foreground(e,o,n,t,i)},mxShapePidIndicator.prototype.background=function(e,o,n,t,i){var s=mxUtils.getValue(this.style,mxShapePidIndicator.prototype.cst.IND_TYPE,"inst");e.begin(),e.moveTo(.5*t,t),e.lineTo(.5*t,i),e.stroke(),s===mxShapePidIndicator.prototype.cst.INSTRUMENT?(e.ellipse(0,0,t,t),e.fillAndStroke()):s===mxShapePidIndicator.prototype.cst.CONTROL?(e.rect(0,0,t,t),e.fillAndStroke()):s===mxShapePidIndicator.prototype.cst.FUNCTION?(e.begin(),e.moveTo(0,.5*t),e.lineTo(.25*t,0),e.lineTo(.75*t,0),e.lineTo(t,.5*t),e.lineTo(.75*t,t),e.lineTo(.25*t,t),e.close(),e.fillAndStroke()):s===mxShapePidIndicator.prototype.cst.PLC&&(e.rect(0,0,t,t),e.fillAndStroke())},mxShapePidIndicator.prototype.foreground=function(e,o,n,t,i){var s=mxUtils.getValue(this.style,mxShapePidIndicator.prototype.cst.MOUNTING,"field"),a=mxUtils.getValue(this.style,mxShapePidIndicator.prototype.cst.IND_TYPE,"inst");a===mxShapePidIndicator.prototype.cst.CONTROL?(e.ellipse(0,0,t,t),e.stroke()):a===mxShapePidIndicator.prototype.cst.PLC&&(e.begin(),e.moveTo(0,.5*t),e.lineTo(.5*t,0),e.lineTo(t,.5*t),e.lineTo(.5*t,t),e.close(),e.stroke()),s===mxShapePidIndicator.prototype.cst.ROOM?(e.begin(),e.moveTo(0,.5*t),e.lineTo(t,.5*t),e.stroke()):s===mxShapePidIndicator.prototype.cst.INACCESSIBLE?(e.setDashed(!0),e.begin(),e.moveTo(0,.5*t),e.lineTo(t,.5*t),e.stroke()):s===mxShapePidIndicator.prototype.cst.LOCAL&&(e.begin(),e.moveTo(.005*t,.48*t),e.lineTo(.995*t,.48*t),e.moveTo(.005*t,.52*t),e.lineTo(.995*t,.52*t),e.stroke())},mxCellRenderer.registerShape(mxShapePidIndicator.prototype.cst.SHAPE_INDICATOR,mxShapePidIndicator),mxShapePidIndicator.prototype.constraints=[new mxConnectionConstraint(new mxPoint(.5,1),!0)],mxUtils.extend(mxShapePidLogic,mxShape),mxShapePidLogic.prototype.cst={SHAPE_LOGIC:"mxgraph.pid2inst.logic",MOUNTING:"mounting",FIELD:"field",ROOM:"room",INACCESSIBLE:"inaccessible",LOCAL:"local"},mxShapePidLogic.prototype.customProperties=[{name:"mounting",dispName:"Mounting",type:"enum",defVal:"field",enumList:[{val:"field",dispName:"Field"},{val:"room",dispName:"Room"},{val:"inaccessible",dispName:"Inaccessible"},{val:"local",dispName:"Local"}]}],mxShapePidLogic.prototype.paintVertexShape=function(e,o,n,t,i){e.translate(o,n),this.background(e,o,n,t,i),e.setShadow(!1),this.foreground(e,o,n,t,i)},mxShapePidLogic.prototype.background=function(e,o,n,t,i){e.begin(),e.moveTo(0,.5*i),e.lineTo(.5*t,0),e.lineTo(t,.5*i),e.lineTo(.5*t,i),e.close(),e.fillAndStroke()},mxShapePidLogic.prototype.foreground=function(e,o,n,t,i){var s=mxUtils.getValue(this.style,mxShapePidLogic.prototype.cst.MOUNTING,"field");s===mxShapePidLogic.prototype.cst.ROOM?(e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidLogic.prototype.cst.INACCESSIBLE?(e.setDashed(!0),e.begin(),e.moveTo(0,.5*i),e.lineTo(t,.5*i),e.stroke()):s===mxShapePidLogic.prototype.cst.LOCAL&&(e.begin(),e.moveTo(.02*t,.48*i),e.lineTo(.98*t,.48*i),e.moveTo(.02*t,.52*i),e.lineTo(.98*t,.52*i),e.stroke())},mxCellRenderer.registerShape(mxShapePidLogic.prototype.cst.SHAPE_LOGIC,mxShapePidLogic),mxShapePidLogic.prototype.constraints=[new mxConnectionConstraint(new mxPoint(.5,0),!0),new mxConnectionConstraint(new mxPoint(.5,1),!0),new mxConnectionConstraint(new mxPoint(0,.5),!0),new mxConnectionConstraint(new mxPoint(1,.5),!0),new mxConnectionConstraint(new mxPoint(.25,.25),!1),new mxConnectionConstraint(new mxPoint(.25,.75),!1),new mxConnectionConstraint(new mxPoint(.75,.25),!1),new mxConnectionConstraint(new mxPoint(.75,.75),!1)];
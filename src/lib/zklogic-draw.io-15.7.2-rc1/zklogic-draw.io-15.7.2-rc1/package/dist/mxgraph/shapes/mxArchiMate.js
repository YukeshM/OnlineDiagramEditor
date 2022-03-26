function mxArchiMateLocation(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxArchiMateBusiness(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxArchiMateBusinessObject(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxArchiMateRepresentation(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxArchiMateProduct(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxArchiMateApplication(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxArchiMateTech(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxArchiMateMotivational(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxArchiMateGap(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}mxUtils.extend(mxArchiMateLocation,mxShape),mxArchiMateLocation.prototype.cst={LOCATION:"mxgraph.archimate.location"},mxArchiMateLocation.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),this.background(n,0,0,o,i),n.setShadow(!1),n.translate(o-20,5),this.foreground(n,o-20,5,15,15)},mxArchiMateLocation.prototype.background=function(n,t,e,o,i){n.rect(0,0,o,i),n.fillAndStroke()},mxArchiMateLocation.prototype.foreground=function(n,t,e,o,i){n.setDashed(!1),n.translate(3,0),o-=6,n.begin(),n.moveTo(.5*o,i),n.arcTo(.1775*o,.3*i,0,0,0,.345*o,.7*i),n.arcTo(.538*o,.364*i,0,0,1,.5*o,0),n.arcTo(.538*o,.364*i,0,0,1,.655*o,.7*i),n.arcTo(.1775*o,.3*i,0,0,0,.5*o,i),n.stroke()},mxCellRenderer.registerShape(mxArchiMateLocation.prototype.cst.LOCATION,mxArchiMateLocation),mxArchiMateLocation.prototype.getConstraints=function(n,t,e){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.25),!1)),o},mxUtils.extend(mxArchiMateBusiness,mxShape),mxArchiMateBusiness.prototype.cst={BUSINESS:"mxgraph.archimate.business",TYPE:"busType",PROCESS:"process",FUNCTION:"function",INTERACTION:"interaction",EVENT:"event",SERVICE:"service"},mxArchiMateBusiness.prototype.customProperties=[{name:"busType",dispName:"Business Type",type:"enum",enumList:[{val:"process",dispName:"Process"},{val:"function",dispName:"Function"},{val:"interaction",dispName:"Interaction"},{val:"event",dispName:"Event"},{val:"service",dispName:"Service"}]}],mxArchiMateBusiness.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),this.background(n,0,0,o,i),n.setShadow(!1),n.translate(o-20,5),this.foreground(n,o-20,5,15,15)},mxArchiMateBusiness.prototype.background=function(n,t,e,o,i){n.roundrect(0,0,o,i,10,10),n.fillAndStroke()},mxArchiMateBusiness.prototype.foreground=function(n,t,e,o,i){var s=mxUtils.getValue(this.style,mxArchiMateBusiness.prototype.cst.TYPE,mxArchiMateBusiness.prototype.cst.PROCESS);n.setDashed(!1),s===mxArchiMateBusiness.prototype.cst.PROCESS?(n.translate(0,2),i-=4,n.begin(),n.moveTo(0,.15*i),n.lineTo(.65*o,.15*i),n.lineTo(.65*o,0),n.lineTo(o,.5*i),n.lineTo(.65*o,i),n.lineTo(.65*o,.85*i),n.lineTo(0,.85*i),n.close(),n.stroke()):s===mxArchiMateBusiness.prototype.cst.FUNCTION?(n.translate(2,0),o-=4,n.begin(),n.moveTo(0,.15*i),n.lineTo(.5*o,0),n.lineTo(o,.15*i),n.lineTo(o,i),n.lineTo(.5*o,.85*i),n.lineTo(0,i),n.close(),n.stroke()):s===mxArchiMateBusiness.prototype.cst.INTERACTION?(n.begin(),n.moveTo(.55*o,0),n.arcTo(.45*o,.5*i,0,0,1,.55*o,i),n.close(),n.moveTo(.45*o,0),n.arcTo(.45*o,.5*i,0,0,0,.45*o,i),n.close(),n.stroke()):s===mxArchiMateBusiness.prototype.cst.EVENT?(n.translate(0,3),i-=6,n.begin(),n.moveTo(o-.5*i,0),n.arcTo(.5*i,.5*i,0,0,1,o-.5*i,i),n.lineTo(0,i),n.arcTo(.5*i,.5*i,0,0,0,0,0),n.close(),n.stroke()):s===mxArchiMateBusiness.prototype.cst.SERVICE&&(n.translate(0,3),i-=6,n.begin(),n.moveTo(o-.5*i,0),n.arcTo(.5*i,.5*i,0,0,1,o-.5*i,i),n.lineTo(0,i),n.arcTo(.5*i,.5*i,0,0,1,0,0),n.close(),n.stroke())},mxCellRenderer.registerShape(mxArchiMateBusiness.prototype.cst.BUSINESS,mxArchiMateBusiness),mxArchiMateBusiness.prototype.getConstraints=function(n,t,e){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,2.9,2.9)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1,null,-2.9,2.9)),o.push(new mxConnectionConstraint(new mxPoint(1,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,1),!1,null,-2.9,-2.9)),o.push(new mxConnectionConstraint(new mxPoint(.75,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1,null,2.9,-2.9)),o.push(new mxConnectionConstraint(new mxPoint(0,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.25),!1)),o},mxUtils.extend(mxArchiMateBusinessObject,mxShape),mxArchiMateBusinessObject.prototype.cst={BUSINESS_OBJECT:"mxgraph.archimate.businessObject"},mxArchiMateBusinessObject.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),this.background(n,0,0,o,i),n.setShadow(!1),this.foreground(n,0,0,o,i)},mxArchiMateBusinessObject.prototype.background=function(n,t,e,o,i){n.rect(0,0,o,i),n.fillAndStroke()},mxArchiMateBusinessObject.prototype.foreground=function(n,t,e,o,i){i>=15&&(n.begin(),n.moveTo(0,15),n.lineTo(o,15),n.stroke())},mxCellRenderer.registerShape(mxArchiMateBusinessObject.prototype.cst.BUSINESS_OBJECT,mxArchiMateBusinessObject),mxArchiMateBusinessObject.prototype.getConstraints=function(n,t,e){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,2.9,2.9)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1,null,-2.9,2.9)),o.push(new mxConnectionConstraint(new mxPoint(1,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,1),!1,null,-2.9,-2.9)),o.push(new mxConnectionConstraint(new mxPoint(.75,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1,null,2.9,-2.9)),o.push(new mxConnectionConstraint(new mxPoint(0,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.25),!1)),o},mxUtils.extend(mxArchiMateRepresentation,mxShape),mxArchiMateRepresentation.prototype.cst={REPRESENTATION:"mxgraph.archimate.representation"},mxArchiMateRepresentation.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),this.background(n,0,0,o,i)},mxArchiMateRepresentation.prototype.background=function(n,t,e,o,i){n.begin(),n.moveTo(0,0),n.lineTo(o,0),n.lineTo(o,.85*i),n.arcTo(.35*o,.35*i,0,0,0,.5*o,.85*i),n.arcTo(.35*o,.35*i,0,0,1,0,.85*i),n.close(),n.fillAndStroke()},mxCellRenderer.registerShape(mxArchiMateRepresentation.prototype.cst.REPRESENTATION,mxArchiMateRepresentation),mxArchiMateRepresentation.prototype.getConstraints=function(n,t,e){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.85),!1,null)),o.push(new mxConnectionConstraint(new mxPoint(.75,.745),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,.85),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,.955),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.85),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.25),!1)),o},mxUtils.extend(mxArchiMateProduct,mxShape),mxArchiMateProduct.prototype.cst={PRODUCT:"mxgraph.archimate.product"},mxArchiMateProduct.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),this.background(n,0,0,o,i),n.setShadow(!1),this.foreground(n,0,0,o,i)},mxArchiMateProduct.prototype.background=function(n,t,e,o,i){n.rect(0,0,o,i),n.fillAndStroke()},mxArchiMateProduct.prototype.foreground=function(n,t,e,o,i){i>=15&&(n.begin(),n.moveTo(0,15),n.lineTo(.6*o,15),n.lineTo(.6*o,0),n.stroke())},mxCellRenderer.registerShape(mxArchiMateProduct.prototype.cst.PRODUCT,mxArchiMateProduct),mxUtils.extend(mxArchiMateApplication,mxShape),mxArchiMateApplication.prototype.cst={APPLICATION:"mxgraph.archimate.application",TYPE:"appType",COMPONENT:"comp",INTERFACE:"interface",INTERFACE2:"interface2",FUNCTION:"function",INTERACTION:"interaction",SERVICE:"service",NODE:"node",NETWORK:"network",COMM_PATH:"commPath",SYS_SW:"sysSw",ARTIFACT:"artifact",ACTOR:"actor",ROLE:"role",COLLABORATION:"collab"},mxArchiMateApplication.prototype.customProperties=[{name:"appType",dispName:"App Type",type:"enum",enumList:[{val:"comp",dispName:"Component"},{val:"interface",dispName:"Interface"},{val:"interface2",dispName:"Interface2"},{val:"function",dispName:"Function"},{val:"interaction",dispName:"Interaction"},{val:"service",dispName:"Service"},{val:"node",dispName:"Node"},{val:"network",dispName:"Network"},{val:"commPath",dispName:"Comm Path"},{val:"artifact",dispName:"Artifact"},{val:"sysSw",dispName:"System Sw"},{val:"path",dispName:"Path"},{val:"actor",dispName:"Actor"},{val:"role",dispName:"Role"},{val:"collab",dispName:"Collaboration"}]}],mxArchiMateApplication.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),this.background(n,0,0,o,i),n.setShadow(!1),n.translate(o-20,5),this.foreground(n,o-20,5,15,15)},mxArchiMateApplication.prototype.background=function(n,t,e,o,i){n.rect(0,0,o,i),n.fillAndStroke()},mxArchiMateApplication.prototype.foreground=function(n,t,e,o,i){var s=mxUtils.getValue(this.style,mxArchiMateApplication.prototype.cst.TYPE,mxArchiMateApplication.prototype.cst.COMPONENT);if(n.setDashed(!1),s===mxArchiMateApplication.prototype.cst.COMPONENT)n.translate(1,0),o-=2,n.rect(.25*o,0,.75*o,i),n.stroke(),n.rect(0,.25*i,.5*o,.15*i),n.fillAndStroke(),n.rect(0,.6*i,.5*o,.15*i),n.fillAndStroke();else if(s===mxArchiMateApplication.prototype.cst.COLLABORATION)n.translate(0,3),i-=6,n.ellipse(0,0,.6*o,i),n.stroke(),n.ellipse(.4*o,0,.6*o,i),n.fillAndStroke();else if(s===mxArchiMateApplication.prototype.cst.INTERFACE)n.translate(0,4),i-=8,n.ellipse(.5*o,0,.5*o,i),n.stroke(),n.begin(),n.moveTo(0,.5*i),n.lineTo(.5*o,.5*i),n.stroke();else if(s===mxArchiMateApplication.prototype.cst.INTERFACE2)n.translate(0,1),i-=2,n.begin(),n.moveTo(0,.5*i),n.lineTo(.6*o,.5*i),n.moveTo(o,0),n.arcTo(.4*o,.5*i,0,0,0,o,i),n.stroke();else if(s===mxArchiMateApplication.prototype.cst.FUNCTION)n.begin(),n.moveTo(.5*o,0),n.lineTo(o,.2*i),n.lineTo(o,i),n.lineTo(.5*o,.8*i),n.lineTo(0,i),n.lineTo(0,.2*i),n.close(),n.stroke();else if(s===mxArchiMateApplication.prototype.cst.INTERACTION)n.begin(),n.moveTo(.55*o,0),n.arcTo(.45*o,.5*i,0,0,1,.55*o,i),n.close(),n.moveTo(.45*o,0),n.arcTo(.45*o,.5*i,0,0,0,.45*o,i),n.close(),n.stroke();else if(s===mxArchiMateApplication.prototype.cst.SERVICE)n.translate(0,3),i-=6,n.begin(),n.moveTo(o-.5*i,0),n.arcTo(.5*i,.5*i,0,0,1,o-.5*i,i),n.lineTo(0,i),n.arcTo(.5*i,.5*i,0,0,1,0,0),n.close(),n.stroke();else if(s===mxArchiMateApplication.prototype.cst.NODE)n.begin(),n.moveTo(0,.25*i),n.lineTo(.25*o,0),n.lineTo(o,0),n.lineTo(o,.75*i),n.lineTo(.75*o,i),n.lineTo(0,i),n.close(),n.moveTo(0,.25*i),n.lineTo(.75*o,.25*i),n.lineTo(.75*o,i),n.moveTo(o,0),n.lineTo(.75*o,.25*i),n.stroke();else if(s===mxArchiMateApplication.prototype.cst.NETWORK){n.translate(0,2),i-=4,n.begin(),n.moveTo(.4*o,.2*i),n.lineTo(.85*o,.2*i),n.lineTo(.6*o,.8*i),n.lineTo(.15*o,.8*i),n.close(),n.stroke();var r=mxUtils.getValue(this.style,mxConstants.STYLE_STROKECOLOR,"#000000");n.setFillColor(r),n.ellipse(.25*o,0,.3*o,.4*i),n.fill(),n.ellipse(.7*o,0,.3*o,.4*i),n.fill(),n.ellipse(0,.6*i,.3*o,.4*i),n.fill(),n.ellipse(.45*o,.6*i,.3*o,.4*i),n.fill()}else s===mxArchiMateApplication.prototype.cst.COMM_PATH?(n.translate(0,5),i-=10,n.begin(),n.moveTo(.1*o,0),n.lineTo(0,.5*i),n.lineTo(.1*o,i),n.moveTo(.9*o,0),n.lineTo(o,.5*i),n.lineTo(.9*o,i),n.stroke(),n.setDashed(!0),n.begin(),n.moveTo(0,.5*i),n.lineTo(o,.5*i),n.stroke()):s===mxArchiMateApplication.prototype.cst.SYS_SW?(n.ellipse(.3*o,0,.7*o,.7*i),n.stroke(),n.ellipse(0,.02*i,.98*o,.98*i),n.fillAndStroke()):s===mxArchiMateApplication.prototype.cst.ARTIFACT?(n.translate(2,0),o-=4,n.begin(),n.moveTo(0,0),n.lineTo(.7*o,0),n.lineTo(o,.22*i),n.lineTo(o,i),n.lineTo(0,i),n.close(),n.moveTo(.7*o,0),n.lineTo(.7*o,.22*i),n.lineTo(o,.22*i),n.stroke()):s===mxArchiMateApplication.prototype.cst.ACTOR&&(n.translate(3,0),o-=6,n.ellipse(.2*o,0,.6*o,.3*i),n.stroke(),n.begin(),n.moveTo(.5*o,.3*i),n.lineTo(.5*o,.75*i),n.moveTo(0,.45*i),n.lineTo(o,.45*i),n.moveTo(0,i),n.lineTo(.5*o,.75*i),n.lineTo(o,i),n.stroke());s===mxArchiMateApplication.prototype.cst.ROLE&&(n.translate(0,4),i-=8,n.begin(),n.moveTo(.8*o,0),n.lineTo(.2*o,0),n.arcTo(.2*o,.5*i,0,0,0,.2*o,i),n.lineTo(.8*o,i),n.stroke(),n.ellipse(.6*o,0,.4*o,i),n.stroke())},mxCellRenderer.registerShape(mxArchiMateApplication.prototype.cst.APPLICATION,mxArchiMateApplication),mxArchiMateApplication.prototype.getConstraints=function(n,t,e){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.25),!1)),o},mxUtils.extend(mxArchiMateTech,mxShape),mxArchiMateTech.prototype.cst={TECH:"mxgraph.archimate.tech",TYPE:"techType",DEVICE:"device",PLATEAU:"plateau"},mxArchiMateTech.prototype.customProperties=[{name:"techType",dispName:"Tech Type",type:"enum",enumList:[{val:"device",dispName:"Device"},{val:"plateau",dispName:"Plateau"}]}],mxArchiMateTech.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),this.background(n,0,0,o,i),n.setShadow(!1),n.translate(o-30,15),this.foreground(n,o-30,15,15,15)},mxArchiMateTech.prototype.background=function(n,t,e,o,i){n.begin(),n.moveTo(0,10),n.lineTo(10,0),n.lineTo(o,0),n.lineTo(o,i-10),n.lineTo(o-10,i),n.lineTo(0,i),n.close(),n.moveTo(0,10),n.lineTo(o-10,10),n.lineTo(o-10,i),n.moveTo(o,0),n.lineTo(o-10,10),n.fillAndStroke()},mxArchiMateTech.prototype.foreground=function(n,t,e,o,i){var s=mxUtils.getValue(this.style,mxArchiMateTech.prototype.cst.TYPE,mxArchiMateTech.prototype.cst.DEVICE);if(n.setDashed(!1),s===mxArchiMateTech.prototype.cst.DEVICE)n.roundrect(0,0,o,.88*i,.05*o,.05*i),n.stroke(),n.begin(),n.moveTo(.1*o,.88*i),n.lineTo(0,i),n.lineTo(o,i),n.lineTo(.9*o,.88*i),n.stroke();else if(s===mxArchiMateTech.prototype.cst.PLATEAU){var r=mxUtils.getValue(this.style,mxConstants.STYLE_STROKECOLOR,"#000000");n.setFillColor(r),n.rect(.4*o,0,.6*o,.2*i),n.fill(),n.rect(.2*o,.4*i,.6*o,.2*i),n.fill(),n.rect(0,.8*i,.6*o,.2*i),n.fill()}},mxCellRenderer.registerShape(mxArchiMateTech.prototype.cst.TECH,mxArchiMateTech),mxArchiMateTech.prototype.getConstraints=function(n,t,e){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,0,10)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,10,0)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,1),!1,null,0,-10)),o.push(new mxConnectionConstraint(new mxPoint(1,1),!1,null,-10,0)),o.push(new mxConnectionConstraint(new mxPoint(.75,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.25),!1)),o},mxUtils.extend(mxArchiMateMotivational,mxShape),mxArchiMateMotivational.prototype.cst={MOTIV:"mxgraph.archimate.motiv",TYPE:"motivType",STAKE:"stake",DRIVER:"driver",ASSESSMENT:"assess",GOAL:"goal",REQUIREMENT:"req",CONSTRAINT:"const",PRINCIPLE:"princ"},mxArchiMateMotivational.prototype.customProperties=[{name:"motivType",dispName:"Motivational Type",type:"enum",enumList:[{val:"stake",dispName:"Stake"},{val:"driver",dispName:"Driver"},{val:"assess",dispName:"Assessment"},{val:"goal",dispName:"Goal"},{val:"req",dispName:"Requirement"},{val:"const",dispName:"Constraint"},{val:"princ",dispName:"Principle"}]}],mxArchiMateMotivational.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),this.background(n,0,0,o,i),n.setShadow(!1),n.translate(o-20,5),this.foreground(n,o-20,5,15,15)},mxArchiMateMotivational.prototype.background=function(n,t,e,o,i){n.begin(),n.moveTo(10,0),n.lineTo(o-10,0),n.lineTo(o,10),n.lineTo(o,i-10),n.lineTo(o-10,i),n.lineTo(10,i),n.lineTo(0,i-10),n.lineTo(0,10),n.close(),n.fillAndStroke()},mxArchiMateMotivational.prototype.foreground=function(n,t,e,o,i){var s=mxUtils.getValue(this.style,mxArchiMateMotivational.prototype.cst.TYPE,mxArchiMateMotivational.prototype.cst.STAKE);if(n.setDashed(!1),s===mxArchiMateMotivational.prototype.cst.STAKE)n.translate(0,4),i-=8,n.begin(),n.moveTo(.8*o,0),n.lineTo(.2*o,0),n.arcTo(.2*o,.5*i,0,0,0,.2*o,i),n.lineTo(.8*o,i),n.stroke(),n.ellipse(.6*o,0,.4*o,i),n.stroke();else if(s===mxArchiMateMotivational.prototype.cst.DRIVER){n.ellipse(.1*o,.1*i,.8*o,.8*i),n.stroke(),n.begin(),n.moveTo(0,.5*i),n.lineTo(o,.5*i),n.moveTo(.5*o,0),n.lineTo(.5*o,i),n.moveTo(.145*o,.145*i),n.lineTo(.855*o,.855*i),n.moveTo(.145*o,.855*i),n.lineTo(.855*o,.145*i),n.stroke();var r=mxUtils.getValue(this.style,mxConstants.STYLE_STROKECOLOR,"#000000");n.setFillColor(r),n.ellipse(.35*o,.35*i,.3*o,.3*i),n.fillAndStroke()}else s===mxArchiMateMotivational.prototype.cst.ASSESSMENT?(n.ellipse(.2*o,0,.8*o,.8*i),n.stroke(),n.begin(),n.moveTo(0,i),n.lineTo(.32*o,.68*i),n.stroke()):s===mxArchiMateMotivational.prototype.cst.GOAL?(n.ellipse(0,0,o,i),n.stroke(),n.ellipse(.15*o,.15*i,.7*o,.7*i),n.stroke(),r=mxUtils.getValue(this.style,mxConstants.STYLE_STROKECOLOR,"#000000"),n.setFillColor(r),n.ellipse(.3*o,.3*i,.4*o,.4*i),n.fillAndStroke()):s===mxArchiMateMotivational.prototype.cst.REQUIREMENT?(n.translate(0,4),i-=8,n.begin(),n.moveTo(.25*o,0),n.lineTo(o,0),n.lineTo(.75*o,i),n.lineTo(0,i),n.close(),n.stroke()):s===mxArchiMateMotivational.prototype.cst.CONSTRAINT?(n.translate(0,4),i-=8,n.begin(),n.moveTo(.25*o,0),n.lineTo(o,0),n.lineTo(.75*o,i),n.lineTo(0,i),n.close(),n.moveTo(.45*o,0),n.lineTo(.2*o,i),n.stroke()):s===mxArchiMateMotivational.prototype.cst.PRINCIPLE&&(n.begin(),n.moveTo(.05*o,.05*i),n.arcTo(2.3*o,2.3*i,0,0,1,.95*o,.05*i),n.arcTo(2.3*o,2.3*i,0,0,1,.95*o,.95*i),n.arcTo(2.3*o,2.3*i,0,0,1,.05*o,.95*i),n.arcTo(2.3*o,2.3*i,0,0,1,.05*o,.05*i),n.close(),n.stroke(),r=mxUtils.getValue(this.style,mxConstants.STYLE_STROKECOLOR,"#000000"),n.setFillColor(r),n.begin(),n.moveTo(.45*o,.7*i),n.lineTo(.42*o,.15*i),n.lineTo(.58*o,.15*i),n.lineTo(.55*o,.7*i),n.close(),n.fill(),n.rect(.45*o,.75*i,.1*o,.1*i),n.fill())},mxCellRenderer.registerShape(mxArchiMateMotivational.prototype.cst.MOTIV,mxArchiMateMotivational),mxArchiMateMotivational.prototype.getConstraints=function(n,t,e){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,5,5)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1,null,-5,5)),o.push(new mxConnectionConstraint(new mxPoint(1,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,1),!1,null,-5,-5)),o.push(new mxConnectionConstraint(new mxPoint(.75,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1,null,5,-5)),o.push(new mxConnectionConstraint(new mxPoint(0,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.25),!1)),o},mxUtils.extend(mxArchiMateGap,mxShape),mxArchiMateGap.prototype.cst={GAP:"mxgraph.archimate.gap"},mxArchiMateGap.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),this.background(n,0,0,o,i),n.setShadow(!1),n.translate(o-20,5),this.foreground(n,o-20,5,15,15)},mxArchiMateGap.prototype.background=function(n,t,e,o,i){n.begin(),n.moveTo(0,0),n.lineTo(o,0),n.lineTo(o,.85*i),n.arcTo(.35*o,.35*i,0,0,0,.5*o,.85*i),n.arcTo(.35*o,.35*i,0,0,1,0,.85*i),n.close(),n.fillAndStroke()},mxArchiMateGap.prototype.foreground=function(n,t,e,o,i){n.setDashed(!1),n.translate(0,2),i-=4,n.ellipse(.15*o,0,.7*o,i),n.stroke(),n.begin(),n.moveTo(0,.35*i),n.lineTo(o,.35*i),n.moveTo(0,.65*i),n.lineTo(o,.65*i),n.stroke()},mxCellRenderer.registerShape(mxArchiMateGap.prototype.cst.GAP,mxArchiMateGap),mxArchiMateGap.prototype.getConstraints=function(n,t,e){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.85),!1,null)),o.push(new mxConnectionConstraint(new mxPoint(.75,.745),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,.85),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,.955),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.85),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.25),!1)),o};
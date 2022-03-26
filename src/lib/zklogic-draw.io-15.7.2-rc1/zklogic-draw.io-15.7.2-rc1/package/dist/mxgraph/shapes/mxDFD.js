function mxShapeDFDStart(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxShapeDFDArchive(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxShapeDFDCheck2(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxShapeDFDDataStoreID(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxShapeDFDExternalEntity(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}function mxShapeDFDLoop(n,t,e,o){mxShape.call(this),this.bounds=n,this.fill=t,this.stroke=e,this.strokewidth=null!=o?o:1}mxUtils.extend(mxShapeDFDStart,mxShape),mxShapeDFDStart.prototype.cst={START:"mxgraph.dfd.start"},mxShapeDFDStart.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e);var s=Math.min(.5*i,.5*o);n.begin(),n.moveTo(o-s,.5*i-s),n.arcTo(s,s,0,0,1,o,.5*i),n.arcTo(s,s,0,0,1,o-s,.5*i+s),n.lineTo(s,.5*i+s),n.arcTo(s,s,0,0,1,0,.5*i),n.arcTo(s,s,0,0,1,s,.5*i-s),n.close(),n.fillAndStroke()},mxCellRenderer.registerShape(mxShapeDFDStart.prototype.cst.START,mxShapeDFDStart),mxShapeDFDStart.prototype.getConstraints=function(n,t,e){var o=[],i=Math.min(.5*e,.5*t);return o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,.5),!1,null,0,-i)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,.5),!1,null,0,i)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.293*i,.5*e-.707*i)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t-.293*i,.5*e-.707*i)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t-.293*i,.5*e+.707*i)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.293*i,.5*e+.707*i)),t>=4*e&&(o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,1),!1))),o},mxUtils.extend(mxShapeDFDArchive,mxShape),mxShapeDFDArchive.prototype.cst={ARCHIVE:"mxgraph.dfd.archive"},mxShapeDFDArchive.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),n.begin(),n.moveTo(0,0),n.lineTo(o,0),n.lineTo(.5*o,i),n.close(),n.fillAndStroke(),n.setShadow(!1),n.begin(),n.moveTo(.1*o,.2*i),n.lineTo(.9*o,.2*i),n.stroke()},mxCellRenderer.registerShape(mxShapeDFDArchive.prototype.cst.ARCHIVE,mxShapeDFDArchive),mxShapeDFDArchive.prototype.getConstraints=function(n,t,e){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.875,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(.625,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.375,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(.125,.25),!1)),o},mxUtils.extend(mxShapeDFDCheck2,mxShape),mxShapeDFDCheck2.prototype.cst={CHECK2:"mxgraph.dfd.check2"},mxShapeDFDCheck2.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e);var s=Math.min(.5*i,.5*o);n.begin(),n.moveTo(0,.5*i),n.lineTo(s,0),n.lineTo(o-s,0),n.lineTo(o,.5*i),n.lineTo(o-s,i),n.lineTo(s,i),n.lineTo(0,.5*i),n.close(),n.fillAndStroke(),n.setShadow(!1),n.begin(),n.moveTo(o-s,0),n.lineTo(o-2*s,.5*i),n.lineTo(o-s,i),n.stroke()},mxCellRenderer.registerShape(mxShapeDFDCheck2.prototype.cst.CHECK2,mxShapeDFDCheck2),mxShapeDFDCheck2.prototype.getConstraints=function(n,t,e){var o=[],i=Math.min(.5*e,.5*t);return o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*i,.25*e)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t-.5*i,.25*e)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*i,.75*e)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t-.5*i,.75*e)),t>e&&(o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,i,0)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t-i,0)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,i,e)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t-i,e))),4*i<=t&&(o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,1),!1))),o},mxUtils.extend(mxShapeDFDDataStoreID,mxShape),mxShapeDFDDataStoreID.prototype.cst={DATA_STORE_ID:"mxgraph.dfd.dataStoreID"},mxShapeDFDDataStoreID.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e),Math.min(.5*i,.5*o),n.begin(),n.moveTo(o,i),n.lineTo(0,i),n.lineTo(0,0),n.lineTo(o,0),n.fillAndStroke(),n.setShadow(!1);var s=Math.min(30,o);n.begin(),n.moveTo(s,0),n.lineTo(s,i),n.stroke()},mxCellRenderer.registerShape(mxShapeDFDDataStoreID.prototype.cst.DATA_STORE_ID,mxShapeDFDDataStoreID),mxShapeDFDDataStoreID.prototype.constraints=null,mxUtils.extend(mxShapeDFDExternalEntity,mxShape),mxShapeDFDExternalEntity.prototype.cst={EXTERNAL_ENTITY:"mxgraph.dfd.externalEntity"},mxShapeDFDExternalEntity.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e);var s=10;n.begin(),n.moveTo(0,0),n.lineTo(o-s,0),n.lineTo(o,s),n.lineTo(o,i),n.lineTo(s,i),n.lineTo(0,i-s),n.close(),n.fillAndStroke(),n.setShadow(!1),n.setFillColor("#000000"),n.setAlpha(.5),n.begin(),n.moveTo(0,0),n.lineTo(o-s,0),n.lineTo(o,s),n.lineTo(s,s),n.lineTo(s,i),n.lineTo(0,i-s),n.close(),n.fill();var a=parseFloat(mxUtils.getValue(this.style,"opacity","100"));n.setAlpha(a/100),n.begin(),n.moveTo(0,0),n.lineTo(o-s,0),n.lineTo(o,s),n.lineTo(o,i),n.lineTo(s,i),n.lineTo(0,i-s),n.close(),n.moveTo(s,i),n.lineTo(s,s),n.lineTo(o,s),n.moveTo(0,0),n.lineTo(s,s),n.stroke()},mxCellRenderer.registerShape(mxShapeDFDExternalEntity.prototype.cst.EXTERNAL_ENTITY,mxShapeDFDExternalEntity),mxShapeDFDExternalEntity.prototype.getConstraints=function(n,t,e){var o=[],i=10;return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.25*(t-i),0)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*(t-i),0)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.75*(t-i),0)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t-i,0)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,i,e)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.25*(t-i)+i,e)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.5*(t-i)+i,e)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.75*(t-i)+i,e)),o.push(new mxConnectionConstraint(new mxPoint(1,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t,i)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t,i+.25*(e-i))),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t,i+.5*(e-i))),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t,i+.75*(e-i))),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,0,.25*(e-i))),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,0,.5*(e-i))),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,0,.75*(e-i))),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,0,e-i)),o},mxUtils.extend(mxShapeDFDLoop,mxShape),mxShapeDFDLoop.prototype.cst={LOOP:"mxgraph.dfd.loop"},mxShapeDFDLoop.prototype.paintVertexShape=function(n,t,e,o,i){n.translate(t,e);var s=Math.min(.8*i,.8*o);n.begin(),n.moveTo(o-.25*s,0),n.arcTo(s,s,0,0,1,o-.25*s,i),n.lineTo(.25*s,i),n.arcTo(s,s,0,0,1,.25*s,0),n.close(),n.fillAndStroke()},mxCellRenderer.registerShape(mxShapeDFDLoop.prototype.cst.LOOP,mxShapeDFDLoop),mxShapeDFDLoop.prototype.getConstraints=function(n,t,e){var o=[],i=Math.min(.8*e,.8*t);return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t-.25*i,0)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,t-.25*i,e)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.25*i,0)),o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,.25*i,e)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o};
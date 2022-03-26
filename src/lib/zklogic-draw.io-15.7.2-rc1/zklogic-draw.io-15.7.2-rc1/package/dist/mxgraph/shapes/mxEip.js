function mxShapeEipMessageExpiration(e,n,t,o){mxShape.call(this),this.bounds=e,this.fill=n,this.stroke=t,this.strokewidth=null!=o?o:1}function mxShapeEipReturnAddress(e,n,t,o){mxShape.call(this),this.bounds=e,this.fill=n,this.stroke=t,this.strokewidth=null!=o?o:1}function mxShapeEipAnchor(e,n,t,o){mxShape.call(this),this.bounds=e,this.fill=n,this.stroke=t,this.strokewidth=null!=o?o:1}function mxShapeEipMessageChannel(e,n,t,o){mxShape.call(this),this.bounds=e,this.fill=n,this.stroke=t,this.strokewidth=null!=o?o:1}function mxShapeEipDatatypeChannel(e,n,t,o){mxShape.call(this),this.bounds=e,this.fill=n,this.stroke=t,this.strokewidth=null!=o?o:1}function mxShapeEipDeadLetterChannel(e,n,t,o){mxShape.call(this),this.bounds=e,this.fill=n,this.stroke=t,this.strokewidth=null!=o?o:1}function mxShapeEipInvalidMessageChannel(e,n,t,o){mxShape.call(this),this.bounds=e,this.fill=n,this.stroke=t,this.strokewidth=null!=o?o:1}mxUtils.extend(mxShapeEipMessageExpiration,mxShape),mxShapeEipMessageExpiration.prototype.cst={SHAPE_MESS_EXP:"mxgraph.eip.messExp"},mxShapeEipMessageExpiration.prototype.paintVertexShape=function(e,n,t,o,i){e.translate(n,t),this.background(e,n,t,o,i)},mxShapeEipMessageExpiration.prototype.background=function(e,n,t,o,i){e.ellipse(0,0,o,i),e.stroke(),e.setStrokeColor("#808080"),e.begin(),e.moveTo(.5*o,.1*i),e.lineTo(.5*o,.5*i),e.lineTo(.6*o,.8*i),e.stroke()},mxCellRenderer.registerShape(mxShapeEipMessageExpiration.prototype.cst.SHAPE_MESS_EXP,mxShapeEipMessageExpiration),mxShapeEipMessageExpiration.prototype.getConstraints=function(e,n,t){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(.145,.145),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.855,.145),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(.855,.855),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.145,.855),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o},mxUtils.extend(mxShapeEipReturnAddress,mxShape),mxShapeEipReturnAddress.prototype.cst={SHAPE_RET_ADDR:"mxgraph.eip.retAddr"},mxShapeEipReturnAddress.prototype.paintVertexShape=function(e,n,t,o,i){e.translate(n,t),this.background(e,n,t,o,i),e.setShadow(!1),this.foreground(e,n,t,o,i)},mxShapeEipReturnAddress.prototype.background=function(e,n,t,o,i){e.rect(0,0,o,i),e.fillAndStroke()},mxShapeEipReturnAddress.prototype.foreground=function(e,n,t,o,i){e.begin(),e.moveTo(.05*o,.11*i),e.lineTo(.25*o,.11*i),e.moveTo(.05*o,.18*i),e.lineTo(.25*o,.18*i),e.moveTo(.05*o,.25*i),e.lineTo(.25*o,.25*i),e.setStrokeWidth(2),e.moveTo(.3*o,.63*i),e.lineTo(.8*o,.63*i),e.moveTo(.3*o,.72*i),e.lineTo(.8*o,.72*i),e.moveTo(.3*o,.8*i),e.lineTo(.8*o,.8*i),e.stroke(),e.setFillColor("#EDEDED"),e.rect(.8*o,.1*i,.12*o,.19*i),e.fillAndStroke()},mxCellRenderer.registerShape(mxShapeEipReturnAddress.prototype.cst.SHAPE_RET_ADDR,mxShapeEipReturnAddress),mxShapeEipReturnAddress.prototype.getConstraints=function(e,n,t){var o=[];return o.push(new mxConnectionConstraint(new mxPoint(0,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,0),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.25),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(1,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.75,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.5,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(.25,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.75),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1)),o.push(new mxConnectionConstraint(new mxPoint(0,.25),!1)),o},mxUtils.extend(mxShapeEipAnchor,mxShape),mxShapeEipAnchor.prototype.cst={SHAPE_ANCHOR:"mxgraph.eip.anchor"},mxShapeEipAnchor.prototype.paintVertexShape=function(e,n,t,o,i){},mxCellRenderer.registerShape(mxShapeEipAnchor.prototype.cst.SHAPE_ANCHOR,mxShapeEipAnchor),mxUtils.extend(mxShapeEipMessageChannel,mxShape),mxShapeEipMessageChannel.prototype.cst={SHAPE_MESSAGE_CHANNEL:"mxgraph.eip.messageChannel"},mxShapeEipMessageChannel.prototype.paintVertexShape=function(e,n,t,o,i){e.translate(n,t),this.background(e,n,t,o,i),e.setShadow(!1),this.foreground(e,n,t,o,i)},mxShapeEipMessageChannel.prototype.background=function(e,n,t,o,i){e.setGradient("#e6e6e6","#808080",0,0,o,i,mxConstants.DIRECTION_SOUTH,1,1),e.begin(),e.moveTo(8,.5*i+10),e.arcTo(12,12,0,0,1,8,.5*i-10),e.lineTo(o-8,.5*i-10),e.arcTo(12,12,0,0,1,o-8,.5*i+10),e.close(),e.fillAndStroke()},mxShapeEipMessageChannel.prototype.foreground=function(e,n,t,o,i){e.setFillColor("#e6e6e6"),e.begin(),e.moveTo(o-8,.5*i-10),e.arcTo(12,12,0,0,1,o-8,.5*i+10),e.arcTo(12,12,0,0,1,o-8,.5*i-10),e.fillAndStroke()},mxCellRenderer.registerShape(mxShapeEipMessageChannel.prototype.cst.SHAPE_MESSAGE_CHANNEL,mxShapeEipMessageChannel),mxShapeEipMessageChannel.prototype.getConstraints=function(e,n,t){var o=[];o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1,null,2.7,0)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1,null,-2.7,0));for(var i=10;i<n;)o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,i,0)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1,null,i,0)),i+=10;return o},mxUtils.extend(mxShapeEipDatatypeChannel,mxShape),mxShapeEipDatatypeChannel.prototype.cst={SHAPE_DATATYPE_CHANNEL:"mxgraph.eip.dataChannel"},mxShapeEipDatatypeChannel.prototype.paintVertexShape=function(e,n,t,o,i){e.translate(n,t),this.background(e,n,t,o,i),e.setShadow(!1),this.foreground(e,n,t,o,i)},mxShapeEipDatatypeChannel.prototype.background=function(e,n,t,o,i){e.setGradient("#e6e6e6","#808080",0,0,o,i,mxConstants.DIRECTION_SOUTH,1,1),e.begin(),e.moveTo(8,.5*i+10),e.arcTo(12,12,0,0,1,8,.5*i-10),e.lineTo(o-8,.5*i-10),e.arcTo(12,12,0,0,1,o-8,.5*i+10),e.close(),e.fillAndStroke()},mxShapeEipDatatypeChannel.prototype.foreground=function(e,n,t,o,i){e.setFillColor("#e6e6e6"),e.begin(),e.moveTo(o-8,.5*i-10),e.arcTo(12,12,0,0,1,o-8,.5*i+10),e.arcTo(12,12,0,0,1,o-8,.5*i-10),e.fillAndStroke(),e.setFillColor("#fffbc0"),e.setStrokeWidth("1");for(var a=1;20*a+10<o-14;a++)e.rect(20*a,.5*i-5,10,10),e.fillAndStroke()},mxCellRenderer.registerShape(mxShapeEipDatatypeChannel.prototype.cst.SHAPE_DATATYPE_CHANNEL,mxShapeEipDatatypeChannel),mxShapeEipDatatypeChannel.prototype.getConstraints=function(e,n,t){var o=[];o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1,null,2.7,0)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1,null,-2.7,0));for(var i=10;i<n;)o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,i,0)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1,null,i,0)),i+=10;return o},mxUtils.extend(mxShapeEipDeadLetterChannel,mxShape),mxShapeEipDeadLetterChannel.prototype.cst={SHAPE_DEAD_LETTER_CHANNEL:"mxgraph.eip.deadLetterChannel"},mxShapeEipDeadLetterChannel.prototype.paintVertexShape=function(e,n,t,o,i){e.translate(n,t),this.background(e,n,t,o,i),e.setShadow(!1),this.foreground(e,n,t,o,i)},mxShapeEipDeadLetterChannel.prototype.background=function(e,n,t,o,i){e.setGradient("#e6e6e6","#808080",0,0,o,i,mxConstants.DIRECTION_SOUTH,1,1),e.begin(),e.moveTo(8,.5*i+10),e.arcTo(12,12,0,0,1,8,.5*i-10),e.lineTo(o-8,.5*i-10),e.arcTo(12,12,0,0,1,o-8,.5*i+10),e.close(),e.fillAndStroke()},mxShapeEipDeadLetterChannel.prototype.foreground=function(e,n,t,o,i){e.setFillColor("#e6e6e6"),e.begin(),e.moveTo(o-8,.5*i-10),e.arcTo(12,12,0,0,1,o-8,.5*i+10),e.arcTo(12,12,0,0,1,o-8,.5*i-10),e.fillAndStroke(),e.setFillColor("#ff0000"),e.setStrokeWidth("1"),e.begin(),e.moveTo(.5*o-6,.5*i-3),e.lineTo(.5*o-3,.5*i-6),e.lineTo(.5*o+3,.5*i-6),e.lineTo(.5*o+6,.5*i-3),e.lineTo(.5*o+6,.5*i+3),e.lineTo(.5*o+3,.5*i+6),e.lineTo(.5*o-3,.5*i+6),e.lineTo(.5*o-6,.5*i+3),e.close(),e.fillAndStroke(),e.setStrokeWidth("2"),e.setStrokeColor("#ffffff"),e.begin(),e.moveTo(.5*o-4,.5*i),e.lineTo(.5*o+4,.5*i),e.stroke()},mxCellRenderer.registerShape(mxShapeEipDeadLetterChannel.prototype.cst.SHAPE_DEAD_LETTER_CHANNEL,mxShapeEipDeadLetterChannel),mxShapeEipDeadLetterChannel.prototype.getConstraints=function(e,n,t){var o=[];o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1,null,2.7,0)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1,null,-2.7,0));for(var i=10;i<n;)o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,i,0)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1,null,i,0)),i+=10;return o},mxUtils.extend(mxShapeEipInvalidMessageChannel,mxShape),mxShapeEipInvalidMessageChannel.prototype.cst={SHAPE_INVALID_MESSAGE_CHANNEL:"mxgraph.eip.invalidMessageChannel"},mxShapeEipInvalidMessageChannel.prototype.paintVertexShape=function(e,n,t,o,i){e.translate(n,t),this.background(e,n,t,o,i),e.setShadow(!1),this.foreground(e,n,t,o,i)},mxShapeEipInvalidMessageChannel.prototype.background=function(e,n,t,o,i){e.setGradient("#e6e6e6","#808080",0,0,o,i,mxConstants.DIRECTION_SOUTH,1,1),e.begin(),e.moveTo(8,.5*i+10),e.arcTo(12,12,0,0,1,8,.5*i-10),e.lineTo(o-8,.5*i-10),e.arcTo(12,12,0,0,1,o-8,.5*i+10),e.close(),e.fillAndStroke()},mxShapeEipInvalidMessageChannel.prototype.foreground=function(e,n,t,o,i){e.setFillColor("#e6e6e6"),e.begin(),e.moveTo(o-8,.5*i-10),e.arcTo(12,12,0,0,1,o-8,.5*i+10),e.arcTo(12,12,0,0,1,o-8,.5*i-10),e.fillAndStroke(),e.setFillColor("#ffe040"),e.setStrokeWidth("1"),e.begin(),e.moveTo(.5*o-6,.5*i+5),e.lineTo(.5*o,.5*i-5),e.lineTo(.5*o+6,.5*i+5),e.close(),e.fillAndStroke(),e.setStrokeWidth("1"),e.begin(),e.moveTo(.5*o,.5*i-2),e.lineTo(.5*o,.5*i+2),e.moveTo(.5*o,.5*i+3),e.lineTo(.5*o,.5*i+4),e.stroke()},mxCellRenderer.registerShape(mxShapeEipInvalidMessageChannel.prototype.cst.SHAPE_INVALID_MESSAGE_CHANNEL,mxShapeEipInvalidMessageChannel),mxShapeEipInvalidMessageChannel.prototype.getConstraints=function(e,n,t){var o=[];o.push(new mxConnectionConstraint(new mxPoint(0,.5),!1,null,2.7,0)),o.push(new mxConnectionConstraint(new mxPoint(1,.5),!1,null,-2.7,0));for(var i=10;i<n;)o.push(new mxConnectionConstraint(new mxPoint(0,0),!1,null,i,0)),o.push(new mxConnectionConstraint(new mxPoint(0,1),!1,null,i,0)),i+=10;return o};
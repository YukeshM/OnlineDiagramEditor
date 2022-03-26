!function(){EditorUi.prototype.altShiftActions[68]="selectDescendants";var e=Graph.prototype.foldCells;Graph.prototype.foldCells=function(t,n,l,r,i){n=null!=n&&n,null==l&&(l=this.getFoldableCells(this.getSelectionCells(),t)),this.stopEditing(),this.model.beginUpdate();try{for(var o=l.slice(),a=0;a<l.length;a++)"1"==mxUtils.getValue(this.getCurrentCellStyle(l[a]),"treeFolding","0")&&this.foldTreeCell(t,l[a]);l=o,l=e.apply(this,arguments)}finally{this.model.endUpdate()}return l},Graph.prototype.foldTreeCell=function(e,t){this.model.beginUpdate();try{var n=[];this.traverse(t,!0,mxUtils.bind(this,(function(e,l){var r=null!=l&&this.isTreeEdge(l);return r&&n.push(l),e==t||null!=l&&!r||n.push(e),(null==l||r)&&(e==t||!this.model.isCollapsed(e))}))),this.model.setCollapsed(t,e);for(var l=0;l<n.length;l++)this.model.setVisible(n[l],!e)}finally{this.model.endUpdate()}},Graph.prototype.isTreeEdge=function(e){return!this.isEdgeIgnored(e)},Graph.prototype.getTreeEdges=function(e,t,n,l,r,i){return this.model.filterCells(this.getEdges(e,t,n,l,r,i),mxUtils.bind(this,(function(e){return this.isTreeEdge(e)})))},Graph.prototype.getIncomingTreeEdges=function(e,t){return this.getTreeEdges(e,t,!0,!1,!1)},Graph.prototype.getOutgoingTreeEdges=function(e,t){return this.getTreeEdges(e,t,!1,!0,!1)};var t=EditorUi.prototype.init;if(EditorUi.prototype.init=function(){t.apply(this,arguments),this.editor.isChromelessView()&&!this.editor.editable||this.addTrees()},EditorUi.prototype.addTrees=function(){var e=this,t=e.editor.graph,n=t.getModel(),l=10,r=40;function i(e){return n.isVertex(e)&&a(e)}function o(e){var n=!1;return null!=e&&(n="1"==t.getCurrentCellStyle(e).treeMoving),n}function a(e){var l=!1;if(null!=e){var r=n.getParent(e),i=t.view.getState(r);l="tree"==(null!=i?i.style:t.getCellStyle(r)).containerType}return l}function s(e){var l=!1;if(null!=e){var r=n.getParent(e),i=t.view.getState(r);t.view.getState(r),l=null!=(null!=i?i.style:t.getCellStyle(r)).childLayout}return l}var g=e.menus.createPopupMenu;e.menus.createPopupMenu=function(e,n,l){if(g.apply(this,arguments),1==t.getSelectionCount()){n=t.getSelectionCell();var r=t.getOutgoingTreeEdges(n);e.addSeparator(),r.length>0&&(i(t.getSelectionCell())&&this.addMenuItems(e,["selectChildren"],null,l),this.addMenuItems(e,["selectDescendants"],null,l)),i(t.getSelectionCell())?(e.addSeparator(),t.getIncomingTreeEdges(n).length>0&&this.addMenuItems(e,["selectSiblings","selectParent"],null,l)):t.model.getEdgeCount(n)>0&&this.addMenuItems(e,["selectConnections"],null,l)}},e.actions.addAction("selectChildren",(function(){if(t.isEnabled()&&1==t.getSelectionCount()){var e=t.getSelectionCell(),n=t.getOutgoingTreeEdges(e);if(null!=n){for(var l=[],r=0;r<n.length;r++)l.push(t.model.getTerminal(n[r],!1));t.setSelectionCells(l)}}}),null,null,"Alt+Shift+X"),e.actions.addAction("selectSiblings",(function(){if(t.isEnabled()&&1==t.getSelectionCount()){var e=t.getSelectionCell(),n=t.getIncomingTreeEdges(e);if(null!=n&&n.length>0){var l=t.getOutgoingTreeEdges(t.model.getTerminal(n[0],!0));if(null!=l){for(var r=[],i=0;i<l.length;i++)r.push(t.model.getTerminal(l[i],!1));t.setSelectionCells(r)}}}}),null,null,"Alt+Shift+S"),e.actions.addAction("selectParent",(function(){if(t.isEnabled()&&1==t.getSelectionCount()){var e=t.getSelectionCell(),n=t.getIncomingTreeEdges(e);null!=n&&n.length>0&&t.setSelectionCell(t.model.getTerminal(n[0],!0))}}),null,null,"Alt+Shift+P"),e.actions.addAction("selectDescendants",(function(e,n){var l=t.getSelectionCell();if(t.isEnabled()&&t.model.isVertex(l)){if(null!=n&&mxEvent.isAltDown(n))t.setSelectionCells(t.model.getTreeEdges(l,null==n||!mxEvent.isShiftDown(n),null==n||!mxEvent.isControlDown(n)));else{var r=[];t.traverse(l,!0,(function(e,l){var i=null!=l&&t.isTreeEdge(l);return i&&r.push(l),null!=l&&!i||null!=n&&mxEvent.isShiftDown(n)||r.push(e),null==l||i}))}t.setSelectionCells(r)}}),null,null,"Alt+Shift+D");var m=t.removeCells;t.removeCells=function(e,l){l=null==l||l,null==e&&(e=this.getDeletableCells(this.getSelectionCells())),l&&(e=this.getDeletableCells(this.addAllEdges(e)));for(var r=[],o=0;o<e.length;o++){var s=e[o];if(n.isEdge(s)&&a(s)&&(r.push(s),s=n.getTerminal(s,!1)),i(s)){var g=[];if(t.traverse(s,!0,(function(e,n){var l=null!=n&&t.isTreeEdge(n);return l&&g.push(n),(null==n||l)&&g.push(e),null==n||l})),g.length>0){r=r.concat(g);var d=t.getIncomingTreeEdges(e[o]);e=e.concat(d)}}else null!=s&&r.push(e[o])}return e=r,m.apply(this,arguments)},e.hoverIcons.getStateAt=function(e,t,n){return i(e.cell)?null:this.graph.view.getState(this.graph.getCellAt(t,n))};var d=t.duplicateCells;t.duplicateCells=function(e,n){for(var l=(e=null!=e?e:this.getSelectionCells()).slice(0),r=0;r<l.length;r++){var o=l[r],a=t.view.getState(o);if(null!=a&&i(a.cell))for(var s=t.getIncomingTreeEdges(a.cell),g=0;g<s.length;g++)mxUtils.remove(s[g],e)}this.model.beginUpdate();try{var m=d.call(this,e,n);if(m.length==e.length)for(r=0;r<e.length;r++)if(i(e[r])){var h=t.getIncomingTreeEdges(m[r]);if(s=t.getIncomingTreeEdges(e[r]),0==h.length&&s.length>0){var u=this.cloneCell(s[0]);this.addEdge(u,t.getDefaultParent(),this.model.getTerminal(s[0],!0),m[r])}}}finally{this.model.endUpdate()}return m};var h=t.moveCells;if(t.moveCells=function(e,n,l,r,o,a,s){var g=null;this.model.beginUpdate();try{var m=o,d=this.getCurrentCellStyle(o);if(null!=e&&i(o)&&"1"==mxUtils.getValue(d,"treeFolding","0")){for(var u=0;u<e.length;u++)if(i(e[u])||t.model.isEdge(e[u])&&null==t.model.getTerminal(e[u],!0)){o=t.model.getParent(e[u]);break}if(null!=m&&o!=m&&null!=this.view.getState(e[0])&&(y=t.getIncomingTreeEdges(e[0])).length>0){var c=t.view.getState(t.model.getTerminal(y[0],!0));if(null!=c){var v=t.view.getState(m);null!=v&&(n=(v.getCenterX()-c.getCenterX())/t.view.scale,l=(v.getCenterY()-c.getCenterY())/t.view.scale)}}}if(null!=(g=h.apply(this,arguments))&&null!=e&&g.length==e.length)for(u=0;u<g.length;u++)if(this.model.isEdge(g[u]))i(m)&&mxUtils.indexOf(g,this.model.getTerminal(g[u],!0))<0&&this.model.setTerminal(g[u],m,!0);else if(i(e[u])){var y;if((y=t.getIncomingTreeEdges(e[u])).length>0)if(r){var C=t.getIncomingTreeEdges(g[u]);if(0==C.length){var x=m;null!=x&&x!=t.model.getParent(e[u])||(x=t.model.getTerminal(y[0],!0)),r=this.cloneCell(y[0]),this.addEdge(r,t.getDefaultParent(),x,g[u])}}else i(m)&&mxUtils.indexOf(e,this.model.getTerminal(y[0],!0))<0&&this.model.setTerminal(y[0],m,!0)}}finally{this.model.endUpdate()}return g},null!=e.sidebar){var u=e.sidebar.dropAndConnect;e.sidebar.dropAndConnect=function(e,n,l,r){var o=t.model,a=null;o.beginUpdate();try{if(a=u.apply(this,arguments),i(e))for(var s=0;s<a.length;s++)if(o.isEdge(a[s])&&null==o.getTerminal(a[s],!0)){o.setTerminal(a[s],e,!0);var g=t.getCellGeometry(a[s]);g.points=null,null!=g.getTerminalPoint(!0)&&g.setTerminalPoint(null,!0)}}finally{o.endUpdate()}return a}}function c(e){var n=t.view.getState(e);if(null!=n){var l=t.getIncomingTreeEdges(n.cell);if(l.length>0){var r=t.view.getState(l[0]);if(null!=r){var i=r.absolutePoints;if(null!=i&&i.length>0){var o=i[i.length-1];if(null!=o){if(o.y==n.y&&Math.abs(o.x-n.getCenterX())<n.width/2)return mxConstants.DIRECTION_SOUTH;if(o.y==n.y+n.height&&Math.abs(o.x-n.getCenterX())<n.width/2)return mxConstants.DIRECTION_NORTH;if(o.x>n.getCenterX())return mxConstants.DIRECTION_WEST}}}}}return mxConstants.DIRECTION_EAST}function v(e,n){n=null==n||n,t.model.beginUpdate();try{var r=t.model.getParent(e),i=t.getIncomingTreeEdges(e),o=t.cloneCells([i[0],e]);t.model.setTerminal(o[0],t.model.getTerminal(i[0],!0),!0);var a=c(e),s=r.geometry;a==mxConstants.DIRECTION_SOUTH||a==mxConstants.DIRECTION_NORTH?o[1].geometry.x+=n?e.geometry.width+l:-o[1].geometry.width-l:o[1].geometry.y+=n?e.geometry.height+l:-o[1].geometry.height-l,t.view.currentRoot!=r&&(o[1].geometry.x-=s.x,o[1].geometry.y-=s.y);var g=t.view.getState(e),m=t.view.scale;if(null!=g){var d=mxRectangle.fromRectangle(g);a==mxConstants.DIRECTION_SOUTH||a==mxConstants.DIRECTION_NORTH?d.x+=(n?e.geometry.width+l:-o[1].geometry.width-l)*m:d.y+=(n?e.geometry.height+l:-o[1].geometry.height-l)*m;var h=t.getOutgoingTreeEdges(t.model.getTerminal(i[0],!0));if(null!=h){for(var u=a==mxConstants.DIRECTION_SOUTH||a==mxConstants.DIRECTION_NORTH,v=0,y=0,C=0;C<h.length;C++)if(a==c(p=t.model.getTerminal(h[C],!1))){var x=t.view.getState(p);p!=e&&null!=x&&(u&&n!=x.getCenterX()<g.getCenterX()||!u&&n!=x.getCenterY()<g.getCenterY())&&mxUtils.intersects(d,x)&&(v=l+Math.max(v,(Math.min(d.x+d.width,x.x+x.width)-Math.max(d.x,x.x))/m),y=l+Math.max(y,(Math.min(d.y+d.height,x.y+x.height)-Math.max(d.y,x.y))/m))}for(u?y=0:v=0,C=0;C<h.length;C++){var p;if(a==c(p=t.model.getTerminal(h[C],!1))&&(x=t.view.getState(p),p!=e&&null!=x&&(u&&n!=x.getCenterX()<g.getCenterX()||!u&&n!=x.getCenterY()<g.getCenterY()))){var w=[];t.traverse(x.cell,!0,(function(e,n){var l=null!=n&&t.isTreeEdge(n);return l&&w.push(n),(null==n||l)&&w.push(e),null==n||l})),t.moveCells(w,(n?1:-1)*v,(n?1:-1)*y)}}}}return t.addCells(o,r)}finally{t.model.endUpdate()}}function y(e){t.model.beginUpdate();try{var n=c(e),l=t.getIncomingTreeEdges(e),i=t.cloneCells([l[0],e]);t.model.setTerminal(l[0],i[1],!1),t.model.setTerminal(i[0],i[1],!0),t.model.setTerminal(i[0],e,!1);var o=t.model.getParent(e),a=o.geometry,s=[];t.view.currentRoot!=o&&(i[1].geometry.x-=a.x,i[1].geometry.y-=a.y),t.traverse(e,!0,(function(e,n){var l=null!=n&&t.isTreeEdge(n);return l&&s.push(n),(null==n||l)&&s.push(e),null==n||l}));var g=e.geometry.width+r,m=e.geometry.height+r;return n==mxConstants.DIRECTION_SOUTH?g=0:n==mxConstants.DIRECTION_NORTH?(g=0,m=-m):n==mxConstants.DIRECTION_WEST?(g=-g,m=0):n==mxConstants.DIRECTION_EAST&&(m=0),t.moveCells(s,g,m),t.addCells(i,o)}finally{t.model.endUpdate()}}function C(e,n){t.model.beginUpdate();try{var i=t.model.getParent(e),o=t.getIncomingTreeEdges(e),a=c(e);0==o.length&&(o=[t.createEdge(i,null,"",null,null,t.createCurrentEdgeStyle())],a=n);var s=t.cloneCells([o[0],e]);if(t.model.setTerminal(s[0],e,!0),null==t.model.getTerminal(s[0],!1)){t.model.setTerminal(s[0],s[1],!1);var g=t.getCellStyle(s[1]).newEdgeStyle;if(null!=g)try{var m=JSON.parse(g);for(var d in m)t.setCellStyles(d,m[d],[s[0]]),"edgeStyle"==d&&"elbowEdgeStyle"==m[d]&&t.setCellStyles("elbow",a==mxConstants.DIRECTION_SOUTH||a==mxConstants.DIRECTION_NOTH?"vertical":"horizontal",[s[0]])}catch(e){}}o=t.getOutgoingTreeEdges(e);var h=i.geometry,u=[];t.view.currentRoot==i&&(h=new mxRectangle);for(var v=0;v<o.length;v++){var y=t.model.getTerminal(o[v],!1);null!=y&&u.push(y)}var C=t.view.getBounds(u),x=t.view.translate,p=t.view.scale;return a==mxConstants.DIRECTION_SOUTH?(s[1].geometry.x=null==C?e.geometry.x+(e.geometry.width-s[1].geometry.width)/2:(C.x+C.width)/p-x.x-h.x+l,s[1].geometry.y+=s[1].geometry.height-h.y+r):a==mxConstants.DIRECTION_NORTH?(s[1].geometry.x=null==C?e.geometry.x+(e.geometry.width-s[1].geometry.width)/2:(C.x+C.width)/p-x.x-h.x+l,s[1].geometry.y-=s[1].geometry.height+h.y+r):a==mxConstants.DIRECTION_WEST?(s[1].geometry.x-=s[1].geometry.width+h.x+r,s[1].geometry.y=null==C?e.geometry.y+(e.geometry.height-s[1].geometry.height)/2:(C.y+C.height)/p-x.y-h.y+l):(s[1].geometry.x+=s[1].geometry.width-h.x+r,s[1].geometry.y=null==C?e.geometry.y+(e.geometry.height-s[1].geometry.height)/2:(C.y+C.height)/p-x.y-h.y+l),t.addCells(s,i)}finally{t.model.endUpdate()}}function x(n,l){var r=c(n),i=r==mxConstants.DIRECTION_EAST||r==mxConstants.DIRECTION_WEST,o=l==mxConstants.DIRECTION_EAST||l==mxConstants.DIRECTION_WEST;if(i==o&&r!=l)e.actions.get("selectParent").funct();else if(r==l){var a=t.getOutgoingTreeEdges(n);null!=a&&a.length>0&&t.setSelectionCell(t.model.getTerminal(a[0],!1))}else{var s=t.getIncomingTreeEdges(n);if(null!=s&&s.length>0){var g=function(e,n,l){var r=t.getOutgoingTreeEdges(e),i=t.view.getState(l),o=[];if(null!=i&&null!=r){for(var a=0;a<r.length;a++){var s=t.view.getState(t.model.getTerminal(r[a],!1));null!=s&&(!n&&Math.min(s.x+s.width,i.x+i.width)>=Math.max(s.x,i.x)||n&&Math.min(s.y+s.height,i.y+i.height)>=Math.max(s.y,i.y))&&o.push(s)}o.sort((function(e,t){return n?e.x+e.width-t.x-t.width:e.y+e.height-t.y-t.height}))}return o}(t.model.getTerminal(s[0],!0),o,n),m=t.view.getState(n);if(null!=m){var d=mxUtils.indexOf(g,m);d>=0&&(d+=l==mxConstants.DIRECTION_NORTH||l==mxConstants.DIRECTION_WEST?-1:1)>=0&&d<=g.length-1&&t.setSelectionCell(g[d].cell)}}}}var p={88:e.actions.get("selectChildren"),84:e.actions.get("selectSubtree"),80:e.actions.get("selectParent"),83:e.actions.get("selectSiblings")},w=e.onKeyDown;e.onKeyDown=function(n){try{if(t.isEnabled()&&!t.isEditing()&&i(t.getSelectionCell())&&1==t.getSelectionCount()){var l=null;if(t.getIncomingTreeEdges(t.getSelectionCell()).length>0&&(9==n.which?l=mxEvent.isShiftDown(n)?y(t.getSelectionCell()):C(t.getSelectionCell()):13==n.which&&(l=v(t.getSelectionCell(),!mxEvent.isShiftDown(n)))),null!=l&&l.length>0)1==l.length&&t.model.isEdge(l[0])?t.setSelectionCell(t.model.getTerminal(l[0],!1)):t.setSelectionCell(l[l.length-1]),null!=e.hoverIcons&&e.hoverIcons.update(t.view.getState(t.getSelectionCell())),t.startEditingAtCell(t.getSelectionCell()),mxEvent.consume(n);else if(mxEvent.isAltDown(n)&&mxEvent.isShiftDown(n)){var r=p[n.keyCode];null!=r&&(r.funct(n),mxEvent.consume(n))}else 37==n.keyCode?(x(t.getSelectionCell(),mxConstants.DIRECTION_WEST),mxEvent.consume(n)):38==n.keyCode?(x(t.getSelectionCell(),mxConstants.DIRECTION_NORTH),mxEvent.consume(n)):39==n.keyCode?(x(t.getSelectionCell(),mxConstants.DIRECTION_EAST),mxEvent.consume(n)):40==n.keyCode&&(x(t.getSelectionCell(),mxConstants.DIRECTION_SOUTH),mxEvent.consume(n))}}catch(t){e.handleError(t)}mxEvent.isConsumed(n)||w.apply(this,arguments)};var E=t.connectVertex;t.connectVertex=function(e,n,l,r,o,a,s){var g=t.getIncomingTreeEdges(e);if(i(e)){var m=c(e),d=m==mxConstants.DIRECTION_EAST||m==mxConstants.DIRECTION_WEST,h=n==mxConstants.DIRECTION_EAST||n==mxConstants.DIRECTION_WEST;return m==n||0==g.length?C(e,n):d==h?y(e):v(e,n!=mxConstants.DIRECTION_NORTH&&n!=mxConstants.DIRECTION_WEST)}return E.apply(this,arguments)},t.getSubtree=function(e){var n=[e];return!o(e)&&!i(e)||s(e)||t.traverse(e,!0,(function(e,l){var r=null!=l&&t.isTreeEdge(l);return r&&mxUtils.indexOf(n,l)<0&&n.push(l),(null==l||r)&&mxUtils.indexOf(n,e)<0&&n.push(e),null==l||r})),n};var S=mxVertexHandler.prototype.init;mxVertexHandler.prototype.init=function(){S.apply(this,arguments),(o(this.state.cell)||i(this.state.cell))&&!s(this.state.cell)&&this.graph.getOutgoingTreeEdges(this.state.cell).length>0&&(this.moveHandle=mxUtils.createImage(Editor.moveImage),this.moveHandle.setAttribute("title","Move Subtree"),this.moveHandle.style.position="absolute",this.moveHandle.style.cursor="pointer",this.moveHandle.style.width="24px",this.moveHandle.style.height="24px",this.graph.container.appendChild(this.moveHandle),mxEvent.addGestureListeners(this.moveHandle,mxUtils.bind(this,(function(t){this.graph.graphHandler.start(this.state.cell,mxEvent.getClientX(t),mxEvent.getClientY(t),this.graph.getSubtree(this.state.cell)),this.graph.graphHandler.cellWasClicked=!0,this.graph.isMouseTrigger=mxEvent.isMouseEvent(t),this.graph.isMouseDown=!0,e.hoverIcons.reset(),mxEvent.consume(t)}))))};var T=mxVertexHandler.prototype.redrawHandles;mxVertexHandler.prototype.redrawHandles=function(){T.apply(this,arguments),null!=this.moveHandle&&(this.moveHandle.style.left=this.state.x+this.state.width+(this.state.width<40?10:0)+2+"px",this.moveHandle.style.top=this.state.y+this.state.height+(this.state.height<40?10:0)+2+"px")};var f=mxVertexHandler.prototype.setHandlesVisible;mxVertexHandler.prototype.setHandlesVisible=function(e){f.apply(this,arguments),null!=this.moveHandle&&(this.moveHandle.style.display=e?"":"none")};var I=mxVertexHandler.prototype.destroy;mxVertexHandler.prototype.destroy=function(e,t){I.apply(this,arguments),null!=this.moveHandle&&(this.moveHandle.parentNode.removeChild(this.moveHandle),this.moveHandle=null)}},"undefined"!=typeof Sidebar){var n=Sidebar.prototype.createAdvancedShapes;Sidebar.prototype.createAdvancedShapes=function(){var e=n.apply(this,arguments),t=this.graph,l='newEdgeStyle={"edgeStyle":"entityRelationEdgeStyle","startArrow":"none","endArrow":"none","segment":10,"curved":1};',r='newEdgeStyle={"edgeStyle":"elbowEdgeStyle","startArrow":"none","endArrow":"none"};';return e.concat([this.addEntry("tree container",(function(){var e=new mxCell("Tree Container",new mxGeometry(0,0,400,320),"swimlane;startSize=20;horizontal=1;containerType=tree;");e.vertex=!0;var t=new mxCell("Parent",new mxGeometry(140,60,120,40),"whiteSpace=wrap;html=1;treeFolding=1;treeMoving=1;"+r);t.vertex=!0;var n=new mxCell("Child",new mxGeometry(140,140,120,40),"whiteSpace=wrap;html=1;treeFolding=1;treeMoving=1;"+r);n.vertex=!0;var l=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");return l.geometry.relative=!0,l.edge=!0,t.insertEdge(l,!0),n.insertEdge(l,!1),e.insert(l),e.insert(t),e.insert(n),sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,e.value)})),this.addEntry("tree mindmap mindmaps central idea branch topic",(function(){var e=new mxCell("Mindmap",new mxGeometry(0,0,420,126),"swimlane;startSize=20;horizontal=1;containerType=tree;");e.vertex=!0;var t=new mxCell("Central Idea",new mxGeometry(160,60,100,40),"ellipse;whiteSpace=wrap;html=1;align=center;treeFolding=1;treeMoving=1;"+l);t.vertex=!0;var n=new mxCell("Topic",new mxGeometry(320,40,80,20),"whiteSpace=wrap;html=1;rounded=1;arcSize=50;align=center;verticalAlign=middle;strokeWidth=1;autosize=1;spacing=4;treeFolding=1;treeMoving=1;"+l);n.vertex=!0;var r=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");r.geometry.relative=!0,r.edge=!0,t.insertEdge(r,!0),n.insertEdge(r,!1);var i=new mxCell("Branch",new mxGeometry(320,80,72,26),"whiteSpace=wrap;html=1;shape=partialRectangle;top=0;left=0;bottom=1;right=0;points=[[0,1],[1,1]];fillColor=none;align=center;verticalAlign=bottom;routingCenterY=0.5;snapToPoint=1;autosize=1;treeFolding=1;treeMoving=1;"+l);i.vertex=!0;var o=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");o.geometry.relative=!0,o.edge=!0,t.insertEdge(o,!0),i.insertEdge(o,!1);var a=new mxCell("Topic",new mxGeometry(20,40,80,20),"whiteSpace=wrap;html=1;rounded=1;arcSize=50;align=center;verticalAlign=middle;strokeWidth=1;autosize=1;spacing=4;treeFolding=1;treeMoving=1;"+l);a.vertex=!0;var s=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");s.geometry.relative=!0,s.edge=!0,t.insertEdge(s,!0),a.insertEdge(s,!1);var g=new mxCell("Branch",new mxGeometry(20,80,72,26),"whiteSpace=wrap;html=1;shape=partialRectangle;top=0;left=0;bottom=1;right=0;points=[[0,1],[1,1]];fillColor=none;align=center;verticalAlign=bottom;routingCenterY=0.5;snapToPoint=1;autosize=1;treeFolding=1;treeMoving=1;"+l);g.vertex=!0;var m=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");return m.geometry.relative=!0,m.edge=!0,t.insertEdge(m,!0),g.insertEdge(m,!1),e.insert(r),e.insert(o),e.insert(s),e.insert(m),e.insert(t),e.insert(n),e.insert(i),e.insert(a),e.insert(g),sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,e.value)})),this.addEntry("tree mindmap mindmaps central idea",(function(){var e=new mxCell("Central Idea",new mxGeometry(0,0,100,40),"ellipse;whiteSpace=wrap;html=1;align=center;"+l+"treeFolding=1;treeMoving=1;");return e.vertex=!0,sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,e.value)})),this.addEntry("tree mindmap mindmaps branch",(function(){var e=new mxCell("Branch",new mxGeometry(0,0,80,20),"whiteSpace=wrap;html=1;shape=partialRectangle;top=0;left=0;bottom=1;right=0;points=[[0,1],[1,1]];fillColor=none;align=center;verticalAlign=bottom;routingCenterY=0.5;snapToPoint=1;recursiveResize=0;autosize=1;treeFolding=1;treeMoving=1;"+l);e.vertex=!0;var t=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");return t.geometry.setTerminalPoint(new mxPoint(-40,40),!0),t.geometry.relative=!0,t.edge=!0,e.insertEdge(t,!1),sb.createVertexTemplateFromCells([e,t],e.geometry.width,e.geometry.height,e.value)})),this.addEntry("tree mindmap mindmaps sub topic",(function(){var e=new mxCell("Sub Topic",new mxGeometry(0,0,72,26),"whiteSpace=wrap;html=1;rounded=1;arcSize=50;align=center;verticalAlign=middle;strokeWidth=1;autosize=1;spacing=4;treeFolding=1;treeMoving=1;"+l);e.vertex=!0;var t=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=entityRelationEdgeStyle;startArrow=none;endArrow=none;segment=10;curved=1;");return t.geometry.setTerminalPoint(new mxPoint(-40,40),!0),t.geometry.relative=!0,t.edge=!0,e.insertEdge(t,!1),sb.createVertexTemplateFromCells([e,t],e.geometry.width,e.geometry.height,e.value)})),this.addEntry("tree orgchart organization division",(function(){var e=new mxCell("Orgchart",new mxGeometry(0,0,280,220),"swimlane;startSize=20;horizontal=1;containerType=tree;"+r);e.vertex=!0;var n=new mxCell("Organization",new mxGeometry(80,40,120,60),"whiteSpace=wrap;html=1;align=center;treeFolding=1;treeMoving=1;"+r);t.setAttributeForCell(n,"treeRoot","1"),n.vertex=!0;var l=new mxCell("Division",new mxGeometry(20,140,100,60),"whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;"+r);l.vertex=!0;var i=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");i.geometry.relative=!0,i.edge=!0,n.insertEdge(i,!0),l.insertEdge(i,!1);var o=new mxCell("Division",new mxGeometry(160,140,100,60),"whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;"+r);o.vertex=!0;var a=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");return a.geometry.relative=!0,a.edge=!0,n.insertEdge(a,!0),o.insertEdge(a,!1),e.insert(i),e.insert(a),e.insert(n),e.insert(l),e.insert(o),sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,e.value)})),this.addEntry("tree root",(function(){var e=new mxCell("Organization",new mxGeometry(0,0,120,60),"whiteSpace=wrap;html=1;align=center;treeFolding=1;treeMoving=1;"+r);return t.setAttributeForCell(e,"treeRoot","1"),e.vertex=!0,sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,e.value)})),this.addEntry("tree division",(function(){var e=new mxCell("Division",new mxGeometry(20,40,100,60),"whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;"+r);e.vertex=!0;var t=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=elbowEdgeStyle;elbow=vertical;startArrow=none;endArrow=none;rounded=0;");return t.geometry.setTerminalPoint(new mxPoint(0,0),!0),t.geometry.relative=!0,t.edge=!0,e.insertEdge(t,!1),sb.createVertexTemplateFromCells([e,t],e.geometry.width,e.geometry.height,e.value)})),this.addEntry("tree sub sections",(function(){var e=new mxCell("Sub Section",new mxGeometry(0,0,100,60),"whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;");e.vertex=!0;var t=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;rounded=0;targetPortConstraint=eastwest;sourcePortConstraint=northsouth;");t.geometry.setTerminalPoint(new mxPoint(110,-40),!0),t.geometry.relative=!0,t.edge=!0,e.insertEdge(t,!1);var n=new mxCell("Sub Section",new mxGeometry(120,0,100,60),"whiteSpace=wrap;html=1;align=center;verticalAlign=middle;treeFolding=1;treeMoving=1;");n.vertex=!0;var l=new mxCell("",new mxGeometry(0,0,0,0),"edgeStyle=orthogonalEdgeStyle;startArrow=none;endArrow=none;rounded=0;targetPortConstraint=eastwest;sourcePortConstraint=northsouth;");return l.geometry.setTerminalPoint(new mxPoint(110,-40),!0),l.geometry.relative=!0,l.edge=!0,n.insertEdge(l,!1),sb.createVertexTemplateFromCells([t,l,e,n],220,60,"Sub Sections")}))])}}}();
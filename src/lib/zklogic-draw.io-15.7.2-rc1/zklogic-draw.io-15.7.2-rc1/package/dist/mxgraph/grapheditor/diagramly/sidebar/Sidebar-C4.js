Sidebar.prototype.addC4Palette=function(){var e="points=[[0.25,0,0],[0.5,0,0],[0.75,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];";this.setCurrentSearchEntryLibrary("c4"),this.addPaletteFunctions("c4","C4",!1,[this.addEntry("c4 person",(function(){var e=new mxCell("",new mxGeometry(0,0,200,180),"html=1;fontSize=11;dashed=0;whitespace=wrap;fillColor=#083F75;strokeColor=#06315C;fontColor=#ffffff;shape=mxgraph.c4.person2;align=center;metaEdit=1;points=[[0.5,0,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0]];resizable=0;");return e.vertex=!0,e.setValue(mxUtils.createXmlDocument().createElement("object")),e.setAttribute("placeholders","1"),e.setAttribute("c4Name","Person name"),e.setAttribute("c4Type","Person"),e.setAttribute("c4Description","Description of person."),e.setAttribute("label",'<font style="font-size: 16px"><b>%c4Name%</b></font><div>[%c4Type%]</div><br><div><font style="font-size: 11px"><font color="#cccccc">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,"Person")})),this.addEntry("c4 external person",(function(){var e=new mxCell("",new mxGeometry(0,0,200,180),"html=1;fontSize=11;dashed=0;whitespace=wrap;fillColor=#6C6477;strokeColor=#4D4D4D;fontColor=#ffffff;shape=mxgraph.c4.person2;align=center;metaEdit=1;points=[[0.5,0,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0]];resizable=0;");return e.vertex=!0,e.setValue(mxUtils.createXmlDocument().createElement("object")),e.setAttribute("placeholders","1"),e.setAttribute("c4Name","External person name"),e.setAttribute("c4Type","Person"),e.setAttribute("c4Description","Description of external person."),e.setAttribute("label",'<font style="font-size: 16px"><b>%c4Name%</b></font><div>[%c4Type%]</div><br><div><font style="font-size: 11px"><font color="#cccccc">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,"External Person")})),this.addEntry("c4 software system",(function(){var t=new mxCell("",new mxGeometry(0,0,240,120),"rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#1061B0;fontColor=#ffffff;align=center;arcSize=10;strokeColor=#0D5091;metaEdit=1;resizable=0;"+e);return t.vertex=!0,t.setValue(mxUtils.createXmlDocument().createElement("object")),t.setAttribute("placeholders","1"),t.setAttribute("c4Name","System name"),t.setAttribute("c4Type","Software System"),t.setAttribute("c4Description","Description of software system."),t.setAttribute("label",'<font style="font-size: 16px"><b>%c4Name%</b></font><div>[%c4Type%]</div><br><div><font style="font-size: 11px"><font color="#cccccc">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([t],t.geometry.width,t.geometry.height,"Software System")})),this.addEntry("c4 external software system",(function(){var t=new mxCell("",new mxGeometry(0,0,240,120),"rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#8C8496;fontColor=#ffffff;align=center;arcSize=10;strokeColor=#736782;metaEdit=1;resizable=0;"+e);return t.vertex=!0,t.setValue(mxUtils.createXmlDocument().createElement("object")),t.setAttribute("placeholders","1"),t.setAttribute("c4Name","External system name"),t.setAttribute("c4Type","Software System"),t.setAttribute("c4Description","Description of external software system."),t.setAttribute("label",'<font style="font-size: 16px"><b>%c4Name%</b></font><div>[%c4Type%]</div><br><div><font style="font-size: 11px"><font color="#cccccc">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([t],t.geometry.width,t.geometry.height,"External Software System")})),this.addEntry("c4 container",(function(){var t=new mxCell("",new mxGeometry(0,0,240,120),"rounded=1;whiteSpace=wrap;html=1;fontSize=11;labelBackgroundColor=none;fillColor=#23A2D9;fontColor=#ffffff;align=center;arcSize=10;strokeColor=#0E7DAD;metaEdit=1;resizable=0;"+e);return t.vertex=!0,t.setValue(mxUtils.createXmlDocument().createElement("object")),t.setAttribute("placeholders","1"),t.setAttribute("c4Name","Container name"),t.setAttribute("c4Type","Container"),t.setAttribute("c4Technology","e.g. SpringBoot, ElasticSearch, etc."),t.setAttribute("c4Description","Description of container role/responsibility."),t.setAttribute("label",'<font style="font-size: 16px"><b>%c4Name%</b></font><div>[%c4Type%: %c4Technology%]</div><br><div><font style="font-size: 11px"><font color="#E6E6E6">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([t],t.geometry.width,t.geometry.height,"Container")})),this.addEntry("c4 data container",(function(){var e=new mxCell("",new mxGeometry(0,0,240,120),"shape=cylinder3;size=15;whiteSpace=wrap;html=1;boundedLbl=1;rounded=0;labelBackgroundColor=none;fillColor=#23A2D9;fontSize=12;fontColor=#ffffff;align=center;strokeColor=#0E7DAD;metaEdit=1;points=[[0.5,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.5,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];resizable=0;");return e.vertex=!0,e.setValue(mxUtils.createXmlDocument().createElement("object")),e.setAttribute("placeholders","1"),e.setAttribute("c4Type","Container name"),e.setAttribute("c4Container","Container "),e.setAttribute("c4Technology","e.g. Oracle Database 12"),e.setAttribute("c4Description","Description of storage type container role/responsibility."),e.setAttribute("label",'<font style="font-size: 16px"><b>%c4Type%</font><div>[%c4Container%:&nbsp;%c4Technology%]</div><br><div><font style="font-size: 11px"><font color="#E6E6E6">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,"Data Container")})),this.addEntry("c4 microservice container",(function(){var e=new mxCell("",new mxGeometry(0,0,200,170),"shape=hexagon;size=50;perimeter=hexagonPerimeter2;whiteSpace=wrap;html=1;fixedSize=1;rounded=1;labelBackgroundColor=none;fillColor=#23A2D9;fontSize=12;fontColor=#ffffff;align=center;strokeColor=#0E7DAD;metaEdit=1;points=[[0.5,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.5,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];resizable=0;");return e.vertex=!0,e.setValue(mxUtils.createXmlDocument().createElement("object")),e.setAttribute("placeholders","1"),e.setAttribute("c4Type","Container name"),e.setAttribute("c4Container","Container "),e.setAttribute("c4Technology","e.g. Micronaut, etc."),e.setAttribute("c4Description","Description of microservice type container role/responsibility."),e.setAttribute("label",'<font style="font-size: 16px"><b>%c4Type%</font><div>[%c4Container%:&nbsp;%c4Technology%]</div><br><div><font style="font-size: 11px"><font color="#E6E6E6">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,"Microservice Container")})),this.addEntry("c4 message bus container",(function(){var e=new mxCell("",new mxGeometry(0,0,240,120),"shape=cylinder3;size=15;direction=south;whiteSpace=wrap;html=1;boundedLbl=1;rounded=0;labelBackgroundColor=none;fillColor=#23A2D9;fontSize=12;fontColor=#ffffff;align=center;strokeColor=#0E7DAD;metaEdit=1;points=[[0.5,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.5,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];resizable=0;");return e.vertex=!0,e.setValue(mxUtils.createXmlDocument().createElement("object")),e.setAttribute("placeholders","1"),e.setAttribute("c4Type","Container name"),e.setAttribute("c4Container","Container "),e.setAttribute("c4Technology","e.g. Apache Kafka, etc."),e.setAttribute("c4Description","Description of message bus type container role/responsibility."),e.setAttribute("label",'<font style="font-size: 16px"><b>%c4Type%</font><div>[%c4Container%:&nbsp;%c4Technology%]</div><br><div><font style="font-size: 11px"><font color="#E6E6E6">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,"Message Bus Container")})),this.addEntry("c4 web browser container",(function(){var e=new mxCell("",new mxGeometry(0,0,240,160),"shape=mxgraph.c4.webBrowserContainer;whiteSpace=wrap;html=1;boundedLbl=1;rounded=0;labelBackgroundColor=none;fillColor=#118ACD;fontSize=12;fontColor=#ffffff;align=center;strokeColor=#0E7DAD;metaEdit=1;points=[[0.5,0,0],[1,0.25,0],[1,0.5,0],[1,0.75,0],[0.5,1,0],[0,0.75,0],[0,0.5,0],[0,0.25,0]];resizable=0;");return e.vertex=!0,e.setValue(mxUtils.createXmlDocument().createElement("object")),e.setAttribute("placeholders","1"),e.setAttribute("c4Type","Container name"),e.setAttribute("c4Container","Container "),e.setAttribute("c4Technology","e.g. JavaScript, Angular etc."),e.setAttribute("c4Description","Description of web browser container role/responsibility."),e.setAttribute("label",'<font style="font-size: 16px"><b>%c4Type%</font><div>[%c4Container%:&nbsp;%c4Technology%]</div><br><div><font style="font-size: 11px"><font color="#E6E6E6">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([e],e.geometry.width,e.geometry.height,"Web Browser Container")})),this.addEntry("c4 component",(function(){var t=new mxCell("",new mxGeometry(0,0,240,120),"rounded=1;whiteSpace=wrap;html=1;labelBackgroundColor=none;fillColor=#63BEF2;fontColor=#ffffff;align=center;arcSize=6;strokeColor=#2086C9;metaEdit=1;resizable=0;"+e);return t.vertex=!0,t.setValue(mxUtils.createXmlDocument().createElement("object")),t.setAttribute("placeholders","1"),t.setAttribute("c4Name","Component name"),t.setAttribute("c4Type","Component"),t.setAttribute("c4Technology","e.g. Spring Service"),t.setAttribute("c4Description","Description of component role/responsibility."),t.setAttribute("label",'<font style="font-size: 16px"><b>%c4Name%</b></font><div>[%c4Type%: %c4Technology%]</div><br><div><font style="font-size: 11px">%c4Description%</font></div>'),sb.createVertexTemplateFromCells([t],t.geometry.width,t.geometry.height,"Component")})),this.addEntry("c4 relationship description technology",(function(){var e=new mxCell("",new mxGeometry(0,0,240,0),"endArrow=blockThin;html=1;fontSize=10;fontColor=#404040;strokeWidth=1;endFill=1;strokeColor=#828282;elbow=vertical;metaEdit=1;endSize=14;startSize=14;jumpStyle=arc;jumpSize=16;rounded=0;edgeStyle=orthogonalEdgeStyle;");return e.geometry.setTerminalPoint(new mxPoint(0,0),!0),e.geometry.setTerminalPoint(new mxPoint(240,0),!1),e.geometry.relative=!0,e.edge=!0,e.setValue(mxUtils.createXmlDocument().createElement("object")),e.setAttribute("placeholders","1"),e.setAttribute("c4Type","Relationship"),e.setAttribute("c4Technology","e.g. JSON/HTTP"),e.setAttribute("c4Description","e.g. Makes API calls"),e.setAttribute("label",'<div style="text-align: left"><div style="text-align: center"><b>%c4Description%</b></div><div style="text-align: center">[%c4Technology%]</div></div>'),sb.createEdgeTemplateFromCells([e],e.geometry.width,e.geometry.height,"Relationship with description and technology")})),this.addEntry("c4 relationship description",(function(){var e=new mxCell("",new mxGeometry(0,0,240,0),"endArrow=blockThin;html=1;fontSize=10;fontColor=#404040;strokeWidth=1;endFill=1;strokeColor=#828282;elbow=vertical;metaEdit=1;endSize=14;startSize=14;jumpStyle=arc;jumpSize=16;rounded=0;edgeStyle=orthogonalEdgeStyle;");return e.geometry.setTerminalPoint(new mxPoint(0,0),!0),e.geometry.setTerminalPoint(new mxPoint(240,0),!1),e.geometry.relative=!0,e.edge=!0,e.setValue(mxUtils.createXmlDocument().createElement("object")),e.setAttribute("placeholders","1"),e.setAttribute("c4Type","Relationship"),e.setAttribute("c4Description","e.g. Visits pages"),e.setAttribute("label",'<div style="text-align: left"><div style="text-align: center"><b>%c4Description%</b></div>'),sb.createEdgeTemplateFromCells([e],e.geometry.width,e.geometry.height,"Relationship with description")})),this.addEntry("c4 relationship",(function(){var e=new mxCell("",new mxGeometry(0,0,240,0),"endArrow=blockThin;html=1;fontSize=10;fontColor=#404040;strokeWidth=1;endFill=1;strokeColor=#828282;elbow=vertical;metaEdit=1;endSize=14;startSize=14;jumpStyle=arc;jumpSize=16;rounded=0;edgeStyle=orthogonalEdgeStyle;");return e.geometry.setTerminalPoint(new mxPoint(0,0),!0),e.geometry.setTerminalPoint(new mxPoint(240,0),!1),e.geometry.relative=!0,e.edge=!0,e.setValue(mxUtils.createXmlDocument().createElement("object")),e.setAttribute("placeholders","1"),e.setAttribute("c4Type","Relationship"),sb.createEdgeTemplateFromCells([e],e.geometry.width,e.geometry.height,"Relationship")})),this.addEntry("c4 system scope boundary",(function(){var t=new mxCell("",new mxGeometry(0,0,240,210),"rounded=1;fontSize=11;whiteSpace=wrap;html=1;dashed=1;arcSize=20;fillColor=none;strokeColor=#666666;fontColor=#333333;labelBackgroundColor=none;align=left;verticalAlign=bottom;labelBorderColor=none;spacingTop=0;spacing=10;dashPattern=8 4;metaEdit=1;rotatable=0;perimeter=rectanglePerimeter;noLabel=0;labelPadding=0;allowArrows=0;connectable=0;expand=0;recursiveResize=0;editable=1;pointerEvents=0;absoluteArcSize=1;"+e);return t.vertex=!0,t.setValue(mxUtils.createXmlDocument().createElement("object")),t.setAttribute("placeholders","1"),t.setAttribute("c4Name","System name"),t.setAttribute("c4Type","SystemScopeBoundary"),t.setAttribute("c4Application","Software System"),t.setAttribute("label",'<font style="font-size: 16px"><b><div style="text-align: left">%c4Name%</div></b></font><div style="text-align: left">[%c4Application%]</div>'),sb.createVertexTemplateFromCells([t],t.geometry.width,t.geometry.height,"System scope boundary")})),this.addEntry("c4 container scope boundary",(function(){var t=new mxCell("",new mxGeometry(0,0,240,210),"rounded=1;fontSize=11;whiteSpace=wrap;html=1;dashed=1;arcSize=20;fillColor=none;strokeColor=#666666;fontColor=#333333;labelBackgroundColor=none;align=left;verticalAlign=bottom;labelBorderColor=none;spacingTop=0;spacing=10;dashPattern=8 4;metaEdit=1;rotatable=0;perimeter=rectanglePerimeter;noLabel=0;labelPadding=0;allowArrows=0;connectable=0;expand=0;recursiveResize=0;editable=1;pointerEvents=0;absoluteArcSize=1;"+e);return t.vertex=!0,t.setValue(mxUtils.createXmlDocument().createElement("object")),t.setAttribute("placeholders","1"),t.setAttribute("c4Name","Container name"),t.setAttribute("c4Type","ContainerScopeBoundary"),t.setAttribute("c4Application","Container"),t.setAttribute("label",'<font style="font-size: 16px"><b><div style="text-align: left">%c4Name%</div></b></font><div style="text-align: left">[%c4Application%]</div>'),sb.createVertexTemplateFromCells([t],t.geometry.width,t.geometry.height,"Container scope boundary")})),this.addEntry("c4 system context diagram title",(function(){var t=new mxCell("",new mxGeometry(0,0,260,40),"text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;whiteSpace=wrap;rounded=0;metaEdit=1;allowArrows=0;resizable=1;rotatable=0;connectable=0;recursiveResize=0;expand=0;pointerEvents=0;"+e);return t.vertex=!0,t.setValue(mxUtils.createXmlDocument().createElement("object")),t.setAttribute("placeholders","1"),t.setAttribute("c4Name","[System Context] Diagram title"),t.setAttribute("c4Type","ContainerScopeBoundary"),t.setAttribute("c4Description","Diagram short description"),t.setAttribute("label",'<font style="font-size: 16px"><b><div style="text-align: left">%c4Name%</div></b></font><div style="text-align: left">%c4Description%</div>'),sb.createVertexTemplateFromCells([t],t.geometry.width,t.geometry.height,"System Context diagram title")})),this.addEntry("c4 container diagram title",(function(){var t=new mxCell("",new mxGeometry(0,0,260,40),"text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;whiteSpace=wrap;rounded=0;metaEdit=1;allowArrows=0;resizable=1;rotatable=0;connectable=0;recursiveResize=0;expand=0;pointerEvents=0;"+e);return t.vertex=!0,t.setValue(mxUtils.createXmlDocument().createElement("object")),t.setAttribute("placeholders","1"),t.setAttribute("c4Name","[Containers] Diagram title"),t.setAttribute("c4Type","ContainerDiagramTitle"),t.setAttribute("c4Description","Diagram short description"),t.setAttribute("label",'<font style="font-size: 16px"><b><div style="text-align: left">%c4Name%</div></b></font><div style="text-align: left">%c4Description%</div>'),sb.createVertexTemplateFromCells([t],t.geometry.width,t.geometry.height,"Containers diagram title")})),this.addEntry("c4 component diagram title",(function(){var t=new mxCell("",new mxGeometry(0,0,260,40),"text;html=1;strokeColor=none;fillColor=none;align=left;verticalAlign=top;whiteSpace=wrap;rounded=0;metaEdit=1;allowArrows=0;resizable=1;rotatable=0;connectable=0;recursiveResize=0;expand=0;pointerEvents=0;"+e);return t.vertex=!0,t.setValue(mxUtils.createXmlDocument().createElement("object")),t.setAttribute("placeholders","1"),t.setAttribute("c4Name","[Components] Diagram title"),t.setAttribute("c4Type","ContainerDiagramTitle"),t.setAttribute("c4Description","Diagram short description"),t.setAttribute("label",'<font style="font-size: 16px"><b><div style="text-align: left">%c4Name%</div></b></font><div style="text-align: left">%c4Description%</div>'),sb.createVertexTemplateFromCells([t],t.geometry.width,t.geometry.height,"Components diagram title")})),this.addEntry("c4 legend",(function(){var t=new mxCell("Legend",new mxGeometry(0,0,180,30),"align=left;fontSize=16;fontStyle=1;strokeColor=none;fillColor=none;fontColor=#4D4D4D;spacingTop=-8;resizable=0;");t.vertex=!0;var r=new mxCell("",new mxGeometry(0,30,180,180),"shape=table;html=1;whiteSpace=wrap;startSize=0;container=1;collapsible=0;childLayout=tableLayout;fillColor=none;align=left;spacingLeft=10;strokeColor=none;rounded=1;arcSize=11;fontColor=#FFFFFF;resizable=0;"+e);r.vertex=!0;var o=new mxCell("Person",new mxGeometry(0,0,160,30),"shape=partialRectangle;html=1;whiteSpace=wrap;connectable=0;fillColor=#1E4074;top=0;left=0;bottom=0;right=0;overflow=hidden;pointerEvents=1;align=left;spacingLeft=10;strokeColor=none;fontColor=#FFFFFF;");o.vertex=!0,r.insert(o);var n=new mxCell("Software System",new mxGeometry(0,30,160,30),"shape=partialRectangle;html=1;whiteSpace=wrap;connectable=0;fillColor=#3162AF;top=0;left=0;bottom=0;right=0;overflow=hidden;pointerEvents=1;align=left;spacingLeft=10;fontColor=#FFFFFF;");n.vertex=!0,r.insert(n);var i=new mxCell("Container",new mxGeometry(0,30,160,30),"shape=partialRectangle;html=1;whiteSpace=wrap;connectable=0;fillColor=#52A2D8;top=0;left=0;bottom=0;right=0;overflow=hidden;pointerEvents=1;align=left;spacingLeft=10;fontColor=#FFFFFF;");i.vertex=!0,r.insert(i);var l=new mxCell("Component",new mxGeometry(0,30,160,30),"shape=partialRectangle;html=1;whiteSpace=wrap;connectable=0;fillColor=#7CBEF1;top=0;left=0;bottom=0;right=0;overflow=hidden;pointerEvents=1;align=left;spacingLeft=10;fontColor=#FFFFFF;");l.vertex=!0,r.insert(l);var a=new mxCell("External Person",new mxGeometry(0,30,160,30),"shape=partialRectangle;html=1;whiteSpace=wrap;connectable=0;fillColor=#6B6477;top=0;left=0;bottom=0;right=0;overflow=hidden;pointerEvents=1;align=left;spacingLeft=10;fontColor=#FFFFFF;");a.vertex=!0,r.insert(a);var s=new mxCell("External Software System",new mxGeometry(0,30,160,30),"shape=partialRectangle;html=1;whiteSpace=wrap;connectable=0;fillColor=#8B8496;top=0;left=0;bottom=0;right=0;overflow=hidden;pointerEvents=1;align=left;spacingLeft=10;fontColor=#FFFFFF;");return s.vertex=!0,r.insert(s),sb.createVertexTemplateFromCells([t,r],r.geometry.width,t.geometry.height+r.geometry.height,"Legend")}))]),this.setCurrentSearchEntryLibrary()};
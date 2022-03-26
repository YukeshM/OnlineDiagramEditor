!function(){var t=null;window.NotionClient=function(t){DrawioClient.call(this,t,"notionAuthInfo")},mxUtils.extend(NotionClient,DrawioClient),NotionClient.prototype.extension=".drawio",NotionClient.prototype.xmlField="draw.io XML",NotionClient.prototype.baseUrl=window.NOTION_API_URL||"https://app.diagrams.net/notion-api",NotionClient.prototype.getTitle=function(t){var e,i;for(var n in t)if("title"==t[n].type){i=n,e=t[n];break}return{title:this.getTitleVal(e),key:i}},NotionClient.prototype.getTitleVal=function(t){if("string"==typeof t.title)return t.title;for(var e=[],i=0;i<t.title.length;i++)e.push(t.title[i].text.content);return e.join(" ")},NotionClient.prototype.authenticate=function(e,i,n){var o=!0,s=mxUtils.bind(this,(function(){o&&(o=!1,i({message:mxResources.get("accessDenied"),retry:mxUtils.bind(this,(function(){this.ui.hideDialog(),l()}))}))})),l=mxUtils.bind(this,(function(){o=!0,this.ui.showAuthDialog(this,!0,mxUtils.bind(this,(function(i,l){var r=new FilenameDialog(this.ui,"",mxResources.get("ok"),mxUtils.bind(this,(function(r){t=r,this.executeRequest("/v1/databases",null,"GET",mxUtils.bind(this,(function(){this.executeRequest("/setToken",null,"GET",mxUtils.bind(this,(function(){o=!1,i&&(t=null),null!=l&&l(),e()})),s,n)})),s,n)})),mxResources.get("notionToken"),(function(t){return null!=t&&t.length>0}),null,"https://developers.notion.com/docs/getting-started#step-1-create-an-integration");this.ui.showDialog(r.container,300,80,!0,!0),r.init()})),s)}));l()},NotionClient.prototype.executeRequest=function(e,i,n,o,s,l){var r=mxUtils.bind(this,(function(){var u=!0,a=window.setTimeout(mxUtils.bind(this,(function(){u=!1,s({code:App.ERROR_TIMEOUT,retry:r})})),this.ui.timeout),c=new mxXmlRequest(this.baseUrl+e,i,n);c.withCredentials=!0,c.setRequestHeaders=mxUtils.bind(this,(function(e,i){null!=t&&e.setRequestHeader("Authorization","Bearer "+t),e.setRequestHeader("Notion-Version","2021-05-13"),e.setRequestHeader("Content-Type","application/json")})),c.send(mxUtils.bind(this,(function(t){window.clearTimeout(a),u&&(t.getStatus()>=200&&t.getStatus()<=299?(null==this.user&&this.setUser(new DrawioUser("notion",null,"Notion")),o(JSON.parse(t.getText()))):l||401!==t.getStatus()&&400!==t.getStatus()?s(this.parseRequestText(t)):(this.setUser(null),l=!0,this.authenticate((function(){r()}),s,l)))})),mxUtils.bind(this,(function(t){window.clearTimeout(a),u&&s(t)})))}));r()},NotionClient.prototype.getLibrary=function(t,e,i){this.getFile(t,e,i,!1,!0)},NotionClient.prototype.getFile=function(t,e,i,n,o){o=null!=o&&o,this.executeRequest("/v1/pages/"+encodeURIComponent(t),null,"GET",mxUtils.bind(this,(function(n){try{for(var s=n.properties[this.xmlField].rich_text,l="",r=this.getTitle(n.properties),u=0;u<s.length;u++)l+=s[u].text.content;var a={id:t,name:r.title,nameField:r.key};e(o?new NotionLibrary(this.ui,l,a):new NotionFile(this.ui,l,a))}catch(t){if(null==i)throw t;i(t)}})),i)},NotionClient.prototype.insertLibrary=function(t,e,i,n,o){this.insertFile(t,e,i,n,!0,o)},NotionClient.prototype.insertFile=function(t,e,i,n,o,s){var l,r;o=null!=o&&o;var u=mxUtils.bind(this,(function(){this.checkExists(l,t,r,!0,mxUtils.bind(this,(function(s,u){s?this.writeFile(u?"/v1/pages/"+encodeURIComponent(u):"/v1/pages",u?null:l,t,r,e,u?"PATCH":"POST",mxUtils.bind(this,(function(t){var n=this.getTitle(t.properties),s={id:t.id,name:n.title,nameField:n.key};i(o?new NotionLibrary(this.ui,e,s):new NotionFile(this.ui,e,s))})),n):n()})))}));"object"==typeof s?(r=this.getTitle(s.schema.properties).key,l=s.id,s.drawioReady?u():(s.schema.properties[this.xmlField]={name:this.xmlField,type:"rich_text",rich_text:{}},this.executeRequest("/v1/databases/"+encodeURIComponent(s.id),JSON.stringify({title:s.schema.title,properties:s.schema.properties}),"PATCH",u,n))):n()},NotionClient.prototype.checkExists=function(t,e,i,n,o){this.executeRequest("/v1/databases/"+encodeURIComponent(t)+"/query",JSON.stringify({filter:{property:i,text:{equals:e}}}),"POST",mxUtils.bind(this,(function(t){0==t.results.length?o(!0):n?(this.ui.spinner.stop(),this.ui.confirm(mxResources.get("replaceIt",[e]),(function(){o(!0,t.results[0].id)}),(function(){o(!1)}))):(this.ui.spinner.stop(),this.ui.showError(mxResources.get("error"),mxResources.get("fileExists"),mxResources.get("ok"),(function(){o(!1)})))})),(function(t){o(!1)}))},NotionClient.prototype.saveFile=function(t,e,i){try{var n=t.getData();this.writeFile("/v1/pages/"+t.getId(),null,t.getTitle(),t.getNameField(),n,"PATCH",mxUtils.bind(this,(function(t){e(t,n)})),i)}catch(t){i(t)}},NotionClient.prototype.writeFile=function(t,e,i,n,o,s,l,r){try{if(null!=t&&null!=o){if(o.length>2e5)return void r({message:mxResources.get("drawingTooLarge")+" ("+this.ui.formatFileSize(o.length)+" / 200 KB)"});for(var u=[],a=Math.ceil(o.length/2e3),c=0;c<a;c++)u.push({text:{content:o.substr(2e3*c,2e3)}});var d={properties:{}};d.properties[n]={title:[{text:{content:i}}]},d.properties[this.xmlField]={rich_text:u},e&&(d.parent={database_id:e}),this.executeRequest(t,JSON.stringify(d),s,l,r)}else r({message:mxResources.get("unknownError")})}catch(t){r(t)}},NotionClient.prototype.parseRequestText=function(t){var e={message:mxResources.get("unknownError")};try{e=JSON.parse(t.getText())}catch(t){}return e},NotionClient.prototype.pickLibrary=function(t){this.pickFile(t)},NotionClient.prototype.pickFolder=function(t){this.showNotionDialog(!1,t)},NotionClient.prototype.pickFile=function(t){t=null!=t?t:mxUtils.bind(this,(function(t){this.ui.loadFile("N"+encodeURIComponent(t))})),this.showNotionDialog(!0,t)},NotionClient.prototype.showNotionDialog=function(t,e){var i,n,o=document.createElement("div");o.style.whiteSpace="nowrap",o.style.overflow="hidden",o.style.height="304px";var s=document.createElement("h3");mxUtils.write(s,mxResources.get(t?"officeSelDiag":"selectDB")),s.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:12px",o.appendChild(s);var l=document.createElement("div");l.style.whiteSpace="nowrap",l.style.border="1px solid lightgray",l.style.boxSizing="border-box",l.style.padding="4px",l.style.overflow="auto",l.style.lineHeight="1.2em",l.style.height="274px",o.appendChild(l);var r=document.createElement("div");r.style.textOverflow="ellipsis",r.style.boxSizing="border-box",r.style.overflow="hidden",r.style.padding="4px",r.style.width="100%";var u=new CustomDialog(this.ui,o,mxUtils.bind(this,(function(){e(i)})));this.ui.showDialog(u.container,420,380,!0,!0),t&&u.okButton.parentNode.removeChild(u.okButton);var a=mxUtils.bind(this,(function(t,e,i,n){var o=document.createElement("a");if(o.setAttribute("title",t),o.style.cursor="pointer",mxUtils.write(o,t),mxEvent.addListener(o,"click",e),n&&(o.style.textDecoration="underline"),null!=i){var s=r.cloneNode();s.style.padding=i,s.appendChild(o),o=s}return o})),c=mxUtils.bind(this,(function(){var t=document.createElement("div");t.style.marginBottom="8px",t.appendChild(a(n,mxUtils.bind(this,(function(){i=null,x()})),null,!0)),l.appendChild(t)})),d=mxUtils.bind(this,(function(t){this.ui.handleError(t,null,mxUtils.bind(this,(function(){this.ui.spinner.stop(),null!=this.getUser()?(i=null,x()):this.ui.hideDialog()})),null,{})})),h=null,p=null,m=mxUtils.bind(this,(function(t){null==t&&(l.innerHTML=""),this.ui.spinner.spin(l,mxResources.get("loading")),u.okButton.removeAttribute("disabled"),null!=p&&(mxEvent.removeListener(l,"scroll",p),p=null),null!=h&&null!=h.parentNode&&h.parentNode.removeChild(h),(h=document.createElement("a")).style.display="block",h.style.cursor="pointer",mxUtils.write(h,mxResources.get("more")+"...");var n=mxUtils.bind(this,(function(){m(t)}));mxEvent.addListener(h,"click",n);var o={page_size:100};null!=t&&(o.start_cursor=t),this.executeRequest("/v1/databases/"+encodeURIComponent(i)+"/query",JSON.stringify(o),"POST",mxUtils.bind(this,(function(o){this.ui.spinner.stop(),null==t&&(c(),l.appendChild(a("../ [Up]",mxUtils.bind(this,(function(){i=null,x()})),"4px")));var s=o.results;if(null==s||0==s.length)mxUtils.write(l,mxResources.get("noFiles"));else{for(var u=!0,d=0;d<s.length;d++)mxUtils.bind(this,(function(t,i){var n=r.cloneNode();n.style.backgroundColor=u?Editor.isDarkMode()?"#000000":"#eeeeee":"",u=!u;var o=document.createElement("img");o.src=IMAGE_PATH+"/file.png",o.setAttribute("align","absmiddle"),o.style.marginRight="4px",o.style.marginTop="-4px",o.width=20,n.appendChild(o),n.appendChild(a(this.getTitle(t.properties).title,mxUtils.bind(this,(function(){this.ui.hideDialog(),e(t.id)})))),l.appendChild(n)}))(s[d],d);o.has_more&&(t=o.next_cursor,l.appendChild(h),p=function(){l.scrollTop>=l.scrollHeight-l.offsetHeight&&n()},mxEvent.addListener(l,"scroll",p))}})),d,!0)})),x=mxUtils.bind(this,(function(o){null==o&&(l.innerHTML=""),u.okButton.setAttribute("disabled","disabled"),this.ui.spinner.spin(l,mxResources.get("loading")),null!=p&&mxEvent.removeListener(l,"scroll",p),null!=h&&null!=h.parentNode&&h.parentNode.removeChild(h),(h=document.createElement("a")).style.display="block",h.style.cursor="pointer",mxUtils.write(h,mxResources.get("more")+"...");var s=mxUtils.bind(this,(function(){x(o)}));mxEvent.addListener(h,"click",s),this.executeRequest("/v1/databases?page_size=100"+(null!=o?"&start_cursor="+o:""),null,"GET",mxUtils.bind(this,(function(u){this.ui.spinner.stop();var c=u.results,d=0;if(null==c||0==c.length)mxUtils.write(l,mxResources.get("noDBs"));else for(var x=0;x<c.length;x++){var g=c[x].properties[this.xmlField]&&"rich_text"==c[x].properties[this.xmlField].type;t&&!g||(mxUtils.bind(this,(function(o,s,u){var c=r.cloneNode();c.style.backgroundColor=s%2==0?Editor.isDarkMode()?"#000000":"#eeeeee":"",c.appendChild(a(this.getTitleVal(o),mxUtils.bind(this,(function(){i=o.id,n=this.getTitleVal(o),t?m():(this.ui.hideDialog(),e({id:i,drawioReady:u,schema:o}))})))),l.appendChild(c)}))(c[x],x,g),d++)}if(u.has_more){if(o=u.next_cursor,0==d)return void s();l.appendChild(h),p=function(){l.scrollTop>=l.scrollHeight-l.offsetHeight&&s()},mxEvent.addListener(l,"scroll",p)}else 0==d&&""==l.innerHTML&&mxUtils.write(l,mxResources.get("noDBs"))})),d)}));x()},NotionClient.prototype.logout=function(){this.executeRequest("/removeToken",null,"GET",(function(){}),(function(){})),this.setUser(null),t=null}}();
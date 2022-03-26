TrelloClient=function(t){DrawioClient.call(this,t,"tauth"),Trello.setKey(this.key)},mxUtils.extend(TrelloClient,DrawioClient),TrelloClient.prototype.key=(window.location.hostname,"e89d109082298ce91f6576f82f458551"),TrelloClient.prototype.baseUrl="https://api.trello.com/1/",TrelloClient.prototype.SEPARATOR="|$|",TrelloClient.prototype.maxFileSize=1e7,TrelloClient.prototype.extension=".xml",TrelloClient.prototype.authenticate=function(t,i,e){e&&this.logout();var n=mxUtils.bind(this,(function(e,n){Trello.authorize({type:"popup",name:"draw.io",scope:{read:"true",write:"true"},expiration:e?"never":"1hour",success:function(){null!=n&&n(),t()},error:function(){null!=n&&n(),null!=i&&i(mxResources.get("loggedOut"))}})}));this.isAuthorized()?n(!0):this.ui.showAuthDialog(this,!0,n)},TrelloClient.prototype.getLibrary=function(t,i,e){this.getFile(t,i,e,!1,!0)},TrelloClient.prototype.getFile=function(t,i,e,n,l){l=null!=l&&l;var o=mxUtils.bind(this,(function(){var n=t.split(this.SEPARATOR),s=!0,r=window.setTimeout(mxUtils.bind(this,(function(){s=!1,e({code:App.ERROR_TIMEOUT,retry:o})})),this.ui.timeout);Trello.cards.get(n[0]+"/attachments/"+n[1],mxUtils.bind(this,(function(n){if(window.clearTimeout(r),s){var u=/\.png$/i.test(n.name),a={Authorization:'OAuth oauth_consumer_key="'+Trello.key()+'", oauth_token="'+Trello.token()+'"'};/\.v(dx|sdx?)$/i.test(n.name)||/\.gliffy$/i.test(n.name)||!this.ui.useCanvasForExport&&u?this.ui.convertFile(PROXY_URL+"?url="+encodeURIComponent(n.url),n.name,n.mimeType,this.extension,i,e,null,a):(s=!0,r=window.setTimeout(mxUtils.bind(this,(function(){s=!1,e({code:App.ERROR_TIMEOUT})})),this.ui.timeout),this.ui.editor.loadUrl(PROXY_URL+"?url="+encodeURIComponent(n.url),mxUtils.bind(this,(function(e){if(window.clearTimeout(r),s){if(n.compoundId=t,(u?e.lastIndexOf(","):-1)>0){var o=this.ui.extractGraphModelFromPng(e);null!=o&&o.length>0&&(e=o)}i(l?new TrelloLibrary(this.ui,e,n):new TrelloFile(this.ui,e,n))}})),mxUtils.bind(this,(function(t,i){window.clearTimeout(r),s&&(401==i.status?this.authenticate(o,e,!0):e())})),u||null!=n.mimeType&&"image/"==n.mimeType.substring(0,6),null,null,null,a))}})),mxUtils.bind(this,(function(t){window.clearTimeout(r),s&&(null!=t&&401==t.status?this.authenticate(o,e,!0):e())})))}));this.authenticate(o,e)},TrelloClient.prototype.insertLibrary=function(t,i,e,n,l){this.insertFile(t,i,e,n,!0,l)},TrelloClient.prototype.insertFile=function(t,i,e,n,l,o){l=null!=l&&l;var s=mxUtils.bind(this,(function(){var s=mxUtils.bind(this,(function(s){this.writeFile(t,s,o,mxUtils.bind(this,(function(t){e(l?new TrelloLibrary(this.ui,i,t):new TrelloFile(this.ui,i,t))})),n)}));this.ui.useCanvasForExport&&/(\.png)$/i.test(t)?this.ui.getEmbeddedPng(mxUtils.bind(this,(function(t){s(this.ui.base64ToBlob(t,"image/png"))})),n,i):s(i)}));this.authenticate(s,n)},TrelloClient.prototype.saveFile=function(t,i,e){var n=t.meta.compoundId.split(this.SEPARATOR),l=mxUtils.bind(this,(function(l){this.writeFile(t.meta.name,l,n[0],(function(t){Trello.del("cards/"+n[0]+"/attachments/"+n[1],mxUtils.bind(this,(function(){i(t)})),mxUtils.bind(this,(function(t){null!=t&&401==t.status?this.authenticate(o,e,!0):e()})))}),e)})),o=mxUtils.bind(this,(function(){this.ui.useCanvasForExport&&/(\.png)$/i.test(t.meta.name)?this.ui.getEmbeddedPng(mxUtils.bind(this,(function(t){l(this.ui.base64ToBlob(t,"image/png"))})),e,this.ui.getCurrentFile()!=t?t.getData():null):l(t.getData())}));this.authenticate(o,e)},TrelloClient.prototype.writeFile=function(t,i,e,n,l){if(null!=t&&null!=i){if(i.length>=this.maxFileSize)return void l({message:mxResources.get("drawingTooLarge")+" ("+this.ui.formatFileSize(i.length)+" / 10 MB)"});var o=mxUtils.bind(this,(function(){var s=!0,r=window.setTimeout(mxUtils.bind(this,(function(){s=!1,l({code:App.ERROR_TIMEOUT,retry:o})})),this.ui.timeout),u=new FormData;u.append("key",Trello.key()),u.append("token",Trello.token()),u.append("file","string"==typeof i?new Blob([i]):i,t),u.append("name",t);var a=new XMLHttpRequest;a.responseType="json",a.onreadystatechange=mxUtils.bind(this,(function(){if(4===a.readyState&&(window.clearTimeout(r),s))if(200==a.status){var t=a.response;t.compoundId=e+this.SEPARATOR+t.id,n(t)}else 401==a.status?this.authenticate(o,l,!0):l()})),a.open("POST",this.baseUrl+"cards/"+e+"/attachments"),a.send(u)}));this.authenticate(o,l)}else l({message:mxResources.get("unknownError")})},TrelloClient.prototype.pickLibrary=function(t){this.pickFile(t)},TrelloClient.prototype.pickFolder=function(t){this.authenticate(mxUtils.bind(this,(function(){this.showTrelloDialog(!1,t)})),mxUtils.bind(this,(function(t){this.ui.showError(mxResources.get("error"),t)})))},TrelloClient.prototype.pickFile=function(t,i){t=null!=t?t:mxUtils.bind(this,(function(t){this.ui.loadFile("T"+encodeURIComponent(t))})),this.authenticate(mxUtils.bind(this,(function(){this.showTrelloDialog(!0,t)})),mxUtils.bind(this,(function(t){this.ui.showError(mxResources.get("error"),t,mxResources.get("ok"))})))},TrelloClient.prototype.showTrelloDialog=function(t,i){var e=null,n="@me",l=0,o=document.createElement("div");o.style.whiteSpace="nowrap",o.style.overflow="hidden",o.style.height="224px";var s=document.createElement("h3");mxUtils.write(s,t?mxResources.get("selectFile"):mxResources.get("selectCard")),s.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:12px",o.appendChild(s);var r=document.createElement("div");r.style.whiteSpace="nowrap",r.style.overflow="auto",r.style.height="194px",o.appendChild(r);var u=new CustomDialog(this.ui,o);this.ui.showDialog(u.container,340,290,!0,!0),u.okButton.parentNode.removeChild(u.okButton);var a=mxUtils.bind(this,(function(t,i,e){l++;var n=document.createElement("div");n.style="width:100%;text-overflow:ellipsis;overflow:hidden;vertical-align:middle;padding:2px 0 2px 0;background:"+(l%2==0?Editor.isDarkMode()?"#000":"#eee":Editor.isDarkMode()?"":"#fff");var o=document.createElement("a");if(o.style.cursor="pointer",null!=e){var s=document.createElement("img");s.src=e.url,s.width=e.width,s.height=e.height,s.style="border: 1px solid black;margin:5px;vertical-align:middle",o.appendChild(s)}return mxUtils.write(o,t),mxEvent.addListener(o,"click",i),n.appendChild(o),n})),h=mxUtils.bind(this,(function(t){this.ui.handleError(t,null,mxUtils.bind(this,(function(){this.ui.spinner.stop(),this.ui.hideDialog()})))})),d=mxUtils.bind(this,(function(){l=0,r.innerHTML="",this.ui.spinner.spin(r,mxResources.get("loading"));var t=mxUtils.bind(this,(function(){Trello.cards.get(e+"/attachments",{fields:"id,name,previews"},mxUtils.bind(this,(function(t){this.ui.spinner.stop();var n=t;r.appendChild(a("../ [Up]",mxUtils.bind(this,(function(){p()})))),mxUtils.br(r),null==n||0==n.length?mxUtils.write(r,mxResources.get("noFiles")):mxUtils.bind(this,(function(){for(var t=0;t<n.length;t++)mxUtils.bind(this,(function(t){r.appendChild(a(t.name,mxUtils.bind(this,(function(){this.ui.hideDialog(),i(e+this.SEPARATOR+t.id)})),null!=t.previews?t.previews[0]:null))}))(n[t])}))()})),mxUtils.bind(this,(function(i){401==i.status?this.authenticate(t,h,!0):null!=h&&h(i)})))}));t()})),c=null,m=null,p=mxUtils.bind(this,(function(o){null==o&&(l=0,r.innerHTML="",o=1),this.ui.spinner.spin(r,mxResources.get("loading")),null!=c&&null!=c.parentNode&&c.parentNode.removeChild(c),(c=document.createElement("a")).style.display="block",c.style.cursor="pointer",mxUtils.write(c,mxResources.get("more")+"...");var s=mxUtils.bind(this,(function(){mxEvent.removeListener(r,"scroll",m),p(o+1)}));mxEvent.addListener(c,"click",s);var u=mxUtils.bind(this,(function(){Trello.get("search",{query:""==mxUtils.trim(n)?"is:open":n,cards_limit:100,cards_page:o-1},mxUtils.bind(this,(function(l){this.ui.spinner.stop();var u=null!=l?l.cards:null;if(null==u||0==u.length)mxUtils.write(r,mxResources.get("noFiles"));else{1==o&&(r.appendChild(a(mxResources.get("filterCards")+"...",mxUtils.bind(this,(function(){var t=new FilenameDialog(this.ui,n,mxResources.get("ok"),mxUtils.bind(this,(function(t){null!=t&&(n=t,p())})),mxResources.get("filterCards"),null,null,"http://help.trello.com/article/808-searching-for-cards-all-boards");this.ui.showDialog(t.container,300,80,!0,!1),t.init()})))),mxUtils.br(r));for(var h=0;h<u.length;h++)mxUtils.bind(this,(function(n){r.appendChild(a(n.name,mxUtils.bind(this,(function(){t?(e=n.id,d()):(this.ui.hideDialog(),i(n.id))}))))}))(u[h]);100==u.length&&(r.appendChild(c),m=function(){r.scrollTop>=r.scrollHeight-r.offsetHeight&&s()},mxEvent.addListener(r,"scroll",m))}})),mxUtils.bind(this,(function(t){401==t.status?this.authenticate(u,h,!0):null!=h&&h({message:t.responseText})})))}));u()}));p()},TrelloClient.prototype.isAuthorized=function(){try{return null!=localStorage.trello_token}catch(t){}return!1},TrelloClient.prototype.logout=function(){localStorage.removeItem("trello_token"),Trello.deauthorize()};
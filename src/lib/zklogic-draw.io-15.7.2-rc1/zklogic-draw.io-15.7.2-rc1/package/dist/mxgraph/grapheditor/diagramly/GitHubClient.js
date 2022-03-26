!function(){var e=null;window.GitHubClient=function(e,t){DrawioClient.call(this,e,t||"ghauth")},mxUtils.extend(GitHubClient,DrawioClient),GitHubClient.prototype.clientId="test.draw.io"==window.location.hostname?"Iv1.1218f5567fbc258a":window.DRAWIO_GITHUB_ID,GitHubClient.prototype.extension=".drawio",GitHubClient.prototype.baseUrl=DRAWIO_GITHUB_API_URL,GitHubClient.prototype.baseHostUrl=DRAWIO_GITHUB_URL,GitHubClient.prototype.redirectUri=window.location.protocol+"//"+window.location.host+"/github2",GitHubClient.prototype.maxFileSize=1e6,GitHubClient.prototype.authToken="token",GitHubClient.prototype.setToken=function(t){e=t},GitHubClient.prototype.updateUser=function(t,i,n){var s=!0,l=window.setTimeout(mxUtils.bind(this,(function(){s=!1,i({code:App.ERROR_TIMEOUT,message:mxResources.get("timeout")})})),this.ui.timeout),o=new mxXmlRequest(this.baseUrl+"/user",null,"GET"),r=this.authToken+" "+e;o.setRequestHeaders=function(e,t){e.setRequestHeader("Authorization",r)},o.send(mxUtils.bind(this,(function(){window.clearTimeout(l),s&&(401===o.getStatus()?n?i({message:mxResources.get("accessDenied")}):(this.logout(),this.authenticate(mxUtils.bind(this,(function(){this.updateUser(t,i,!0)})),i)):o.getStatus()<200||o.getStatus()>=300?i({message:mxResources.get("accessDenied")}):(this.setUser(this.createUser(JSON.parse(o.getText()))),t()))})),i)},GitHubClient.prototype.createUser=function(e){return new DrawioUser(e.id,e.email,e.name)},GitHubClient.prototype.authenticate=function(e,t){new mxXmlRequest(this.redirectUri+"?getState=1",null,"GET").send(mxUtils.bind(this,(function(i){i.getStatus()>=200&&i.getStatus()<=299?this.authenticateStep2(i.getText(),e,t):null!=t&&t(i)})),t)},GitHubClient.prototype.authenticateStep2=function(t,i,n){if(null==window.onGitHubCallback){var s=mxUtils.bind(this,(function(){var l=!0;null!=this.getPersistentToken(!0)?new mxXmlRequest(this.redirectUri+"?state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname+"&token="+t),null,"GET").send(mxUtils.bind(this,(function(t){t.getStatus()>=200&&t.getStatus()<=299?(e=JSON.parse(t.getText()).access_token,this.setUser(null),i()):(this.clearPersistentToken(),this.setUser(null),e=null,401==t.getStatus()?s():n({message:mxResources.get("accessDenied"),retry:s}))})),n):this.ui.showAuthDialog(this,!0,mxUtils.bind(this,(function(o,r){null!=window.open(this.baseHostUrl+"/login/oauth/authorize?client_id="+this.clientId+"&state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname+"&token="+t),"ghauth")?window.onGitHubCallback=mxUtils.bind(this,(function(t,u){l?(window.onGitHubCallback=null,l=!1,null==t?n({message:mxResources.get("accessDenied"),retry:s}):(null!=r&&r(),e=t.access_token,this.setUser(null),o&&this.setPersistentToken("remembered"),i(),null!=u&&u.close())):null!=u&&u.close()})):n({message:mxResources.get("serviceUnavailableOrBlocked"),retry:s})})),mxUtils.bind(this,(function(){l&&(window.onGitHubCallback=null,l=!1,n({message:mxResources.get("accessDenied"),retry:s}))})))}));s()}else n({code:App.ERROR_BUSY})},GitHubClient.prototype.getErrorMessage=function(e,t){try{var i=JSON.parse(e.getText());null!=i&&null!=i.message&&(t=i.message)}catch(e){}return t},GitHubClient.prototype.showAuthorizeDialog=function(e,t){this.ui.showError(mxResources.get("accessDenied"),mxResources.get("authorizationRequired"),mxResources.get("help"),mxUtils.bind(this,(function(){this.ui.openLink("https://www.diagrams.net/blog/single-repository-diagrams")})),e,mxResources.get("authorize"),mxUtils.bind(this,(function(){this.ui.openLink("test.draw.io"==window.location.hostname?"https://github.com/apps/diagrams-net-app-test":"https://github.com/apps/draw-io-app")})),mxResources.get("cancel"),t,480,null,!1)},GitHubClient.prototype.executeRequest=function(t,i,n,s,l){var o=mxUtils.bind(this,(function(u){var a=!0,c=window.setTimeout(mxUtils.bind(this,(function(){a=!1,n({code:App.ERROR_TIMEOUT,retry:r})})),this.ui.timeout),h=this.authToken+" "+e;t.setRequestHeaders=function(e,t){e.setRequestHeader("Authorization",h)},t.send(mxUtils.bind(this,(function(){window.clearTimeout(c);var e=mxUtils.bind(this,(function(){var e=this.ui.spinner.pause();this.showAuthorizeDialog(mxUtils.bind(this,(function(){e(),r()})),mxUtils.bind(this,(function(){this.ui.hideDialog(),n({name:"AbortError"})})))}));if(a)if(t.getStatus()>=200&&t.getStatus()<=299||s&&404==t.getStatus())i(t);else if(401===t.getStatus())u?n({code:t.getStatus(),message:mxResources.get("accessDenied"),retry:mxUtils.bind(this,(function(){this.authenticate((function(){r(!0)}),n)}))}):this.authenticate((function(){o(!0)}),n);else if(403===t.getStatus()){var h=!1;try{var d=JSON.parse(t.getText());null!=d&&"Resource not accessible by integration"==d.message?e():(null!=d&&null!=d.errors&&d.errors.length>0&&(h="too_large"==d.errors[0].code),n({message:mxResources.get(h?"drawingTooLarge":"forbidden")}))}catch(e){n({message:mxResources.get(h?"drawingTooLarge":"forbidden")})}}else 404===t.getStatus()?l?n({code:t.getStatus(),message:this.getErrorMessage(t,mxResources.get("fileNotFound"))}):e():409===t.getStatus()?n({code:t.getStatus(),status:409}):n({code:t.getStatus(),message:this.getErrorMessage(t,mxResources.get("error")+" "+t.getStatus())})})),mxUtils.bind(this,(function(e){window.clearTimeout(c),a&&n(e)})))})),r=mxUtils.bind(this,(function(e){null==this.user?this.updateUser((function(){r(!0)}),n,e):o(e)}));null==e?this.authenticate((function(){r(!0)}),n):r(!1)},GitHubClient.prototype.getLibrary=function(e,t,i){this.getFile(e,t,i,!0)},GitHubClient.prototype.getSha=function(e,t,i,n,s,l,o){var r="&t="+(new Date).getTime(),u=new mxXmlRequest(this.baseUrl+"/repos/"+e+"/"+t+"/contents/"+i+"?ref="+n+r,null,"HEAD");this.executeRequest(u,mxUtils.bind(this,(function(e){try{s(e.request.getResponseHeader("Etag").match(/"([^"]+)"/)[1])}catch(e){l(e)}})),l,null,o)},GitHubClient.prototype.getFile=function(t,i,n,s,l){s=null!=s&&s;var o=t.split("/"),r=o[0],u=o[1],a=o[2];t=o.slice(3,o.length).join("/");var c=/\.png$/i.test(t);if(!l&&(/\.v(dx|sdx?)$/i.test(t)||/\.gliffy$/i.test(t)||/\.pdf$/i.test(t)||!this.ui.useCanvasForExport&&c))if(null!=e){var h=this.baseUrl+"/repos/"+r+"/"+u+"/contents/"+t+"?ref="+a,d={Authorization:"token "+e},m=(o=t.split("/")).length>0?o[o.length-1]:t;this.ui.convertFile(h,m,null,this.extension,i,n,null,d)}else n({message:mxResources.get("accessDenied")});else{var p="&t="+(new Date).getTime(),g=new mxXmlRequest(this.baseUrl+"/repos/"+r+"/"+u+"/contents/"+t+"?ref="+a+p,null,"GET");this.executeRequest(g,mxUtils.bind(this,(function(e){try{i(this.createGitHubFile(r,u,a,JSON.parse(e.getText()),s))}catch(e){n(e)}})),n)}},GitHubClient.prototype.createGitHubFile=function(e,t,i,n,s){var l={org:e,repo:t,ref:i,name:n.name,path:n.path,sha:n.sha,html_url:n.html_url,download_url:n.download_url},o=n.content;if("base64"===n.encoding)if(/\.jpe?g$/i.test(n.name))o="data:image/jpeg;base64,"+o;else if(/\.gif$/i.test(n.name))o="data:image/gif;base64,"+o;else if(/\.png$/i.test(n.name)){var r=this.ui.extractGraphModelFromPng(o);o=null!=r&&r.length>0?r:"data:image/png;base64,"+o}else o=Base64.decode(o);return s?new GitHubLibrary(this.ui,o,l):new GitHubFile(this.ui,o,l)},GitHubClient.prototype.insertLibrary=function(e,t,i,n,s){this.insertFile(e,t,i,n,!0,s,!1)},GitHubClient.prototype.insertFile=function(e,t,i,n,s,l,o){s=null!=s&&s;var r=l.split("/"),u=r[0],a=r[1],c=r[2],h=r.slice(3,r.length).join("/");h.length>0&&(h+="/"),h+=e,this.checkExists(u+"/"+a+"/"+c+"/"+h,!0,mxUtils.bind(this,(function(l,r){l?s?(o||(t=Base64.encode(t)),this.showCommitDialog(e,!0,mxUtils.bind(this,(function(e){this.writeFile(u,a,c,h,e,t,r,mxUtils.bind(this,(function(e){try{var t=JSON.parse(e.getText());i(this.createGitHubFile(u,a,c,t.content,s))}catch(e){n(e)}})),n)})),n)):i(new GitHubFile(this.ui,t,{org:u,repo:a,ref:c,name:e,path:h,sha:r,isNew:!0})):n()})))},GitHubClient.prototype.showCommitDialog=function(e,t,i,n){var s=this.ui.spinner.pause(),l=new FilenameDialog(this.ui,mxResources.get(t?"addedFile":"updateFile",[e]),mxResources.get("ok"),mxUtils.bind(this,(function(e){s(),i(e)})),mxResources.get("commitMessage"),null,null,null,null,mxUtils.bind(this,(function(){n()})),null,280);this.ui.showDialog(l.container,400,80,!0,!1),l.init()},GitHubClient.prototype.writeFile=function(e,t,i,n,s,l,o,r,u){if(l.length>=this.maxFileSize)u({message:mxResources.get("drawingTooLarge")+" ("+this.ui.formatFileSize(l.length)+" / 1 MB)"});else{var a={path:n,branch:decodeURIComponent(i),message:s,content:l};null!=o&&(a.sha=o);var c=new mxXmlRequest(this.baseUrl+"/repos/"+e+"/"+t+"/contents/"+n,JSON.stringify(a),"PUT");this.executeRequest(c,mxUtils.bind(this,(function(e){r(e)})),mxUtils.bind(this,(function(e){404==e.code&&(e.helpLink=this.baseHostUrl+"/settings/connections/applications/"+this.clientId,e.code=null),u(e)})))}},GitHubClient.prototype.checkExists=function(e,t,i){var n=e.split("/"),s=n[0],l=n[1],o=n[2];e=n.slice(3,n.length).join("/"),this.getSha(s,l,e,o,mxUtils.bind(this,(function(n){if(t){var s=this.ui.spinner.pause();this.ui.confirm(mxResources.get("replaceIt",[e]),(function(){s(),i(!0,n)}),(function(){s(),i(!1)}))}else this.ui.spinner.stop(),this.ui.showError(mxResources.get("error"),mxResources.get("fileExists"),mxResources.get("ok"),(function(){i(!1)}))})),mxUtils.bind(this,(function(e){i(!0)})),!0)},GitHubClient.prototype.saveFile=function(e,t,i,n,s){var l=e.meta.org,o=e.meta.repo,r=e.meta.ref,u=e.meta.path,a=mxUtils.bind(this,(function(n,a){this.writeFile(l,o,r,u,s,a,n,mxUtils.bind(this,(function(i){delete e.meta.isNew,t(JSON.parse(i.getText()).content.sha)})),mxUtils.bind(this,(function(e){i(e)})))})),c=mxUtils.bind(this,(function(){if(this.ui.useCanvasForExport&&/(\.png)$/i.test(u)){var t=this.ui.getPngFileProperties(this.ui.fileNode);this.ui.getEmbeddedPng(mxUtils.bind(this,(function(t){a(e.meta.sha,t)})),i,this.ui.getCurrentFile()!=e?e.getData():null,t.scale,t.border)}else a(e.meta.sha,Base64.encode(e.getData()))}));n?this.getSha(l,o,u,r,mxUtils.bind(this,(function(t){e.meta.sha=t,c()})),i):c()},GitHubClient.prototype.pickLibrary=function(e){this.pickFile(e)},GitHubClient.prototype.pickFolder=function(e){this.showGitHubDialog(!1,e)},GitHubClient.prototype.pickFile=function(e){e=null!=e?e:mxUtils.bind(this,(function(e){this.ui.loadFile("H"+encodeURIComponent(e))})),this.showGitHubDialog(!0,e)},GitHubClient.prototype.showGitHubDialog=function(e,t){var i=null,n=null,s=null,l=null,o=document.createElement("div");o.style.whiteSpace="nowrap",o.style.overflow="hidden",o.style.height="304px";var r=document.createElement("h3");mxUtils.write(r,mxResources.get(e?"selectFile":"selectFolder")),r.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:12px",o.appendChild(r);var u=document.createElement("div");u.style.whiteSpace="nowrap",u.style.border="1px solid lightgray",u.style.boxSizing="border-box",u.style.padding="4px",u.style.overflow="auto",u.style.lineHeight="1.2em",u.style.height="274px",o.appendChild(u);var a=document.createElement("div");a.style.textOverflow="ellipsis",a.style.boxSizing="border-box",a.style.overflow="hidden",a.style.padding="4px",a.style.width="100%";var c=new CustomDialog(this.ui,o,mxUtils.bind(this,(function(){t(i+"/"+n+"/"+encodeURIComponent(s)+"/"+l)})),null,null,"https://www.diagrams.net/blog/single-repository-diagrams",null,null,null,null,[[mxResources.get("refresh"),mxUtils.bind(this,(function(){f()}))],[mxResources.get("authorize"),mxUtils.bind(this,(function(){this.ui.openLink("test.draw.io"==window.location.hostname?"https://github.com/apps/diagrams-net-app-test":"https://github.com/apps/draw-io-app")}))]]);this.ui.showDialog(c.container,420,370,!0,!0),e&&c.okButton.parentNode.removeChild(c.okButton);var h=mxUtils.bind(this,(function(e,t,i,n){var s=document.createElement("a");if(s.setAttribute("title",e),s.style.cursor="pointer",mxUtils.write(s,e),mxEvent.addListener(s,"click",t),n&&(s.style.textDecoration="underline"),null!=i){var l=a.cloneNode();l.style.padding=i,l.appendChild(s),s=l}return s})),d=mxUtils.bind(this,(function(e){var t=document.createElement("div");if(t.style.marginBottom="8px",t.appendChild(h(i+"/"+n,mxUtils.bind(this,(function(){l=null,f()})),null,!0)),e||(mxUtils.write(t," / "),t.appendChild(h(decodeURIComponent(s),mxUtils.bind(this,(function(){l=null,b()})),null,!0))),null!=l&&l.length>0)for(var o=l.split("/"),r=0;r<o.length;r++)!function(e){mxUtils.write(t," / "),t.appendChild(h(o[e],mxUtils.bind(this,(function(){l=o.slice(0,e+1).join("/"),x()})),null,!0))}(r);u.appendChild(t)})),m=mxUtils.bind(this,(function(e){this.ui.handleError(e,null,mxUtils.bind(this,(function(){this.ui.spinner.stop(),null!=this.getUser()?(i=null,n=null,s=null,l=null,f()):this.ui.hideDialog()})),null,{})})),p=null,g=null,x=mxUtils.bind(this,(function(o){null==o&&(u.innerHTML="",o=1);var r=new mxXmlRequest(this.baseUrl+"/repos/"+i+"/"+n+"/contents/"+l+"?ref="+encodeURIComponent(s)+"&per_page=100&page="+o,null,"GET");this.ui.spinner.spin(u,mxResources.get("loading")),c.okButton.removeAttribute("disabled"),null!=g&&(mxEvent.removeListener(u,"scroll",g),g=null),null!=p&&null!=p.parentNode&&p.parentNode.removeChild(p),(p=document.createElement("a")).style.display="block",p.style.cursor="pointer",mxUtils.write(p,mxResources.get("more")+"...");var b=mxUtils.bind(this,(function(){x(o+1)}));mxEvent.addListener(p,"click",b),this.executeRequest(r,mxUtils.bind(this,(function(r){this.ui.spinner.stop(),1==o&&(d(),u.appendChild(h("../ [Up]",mxUtils.bind(this,(function(){if(""==l)l=null,f();else{var e=l.split("/");l=e.slice(0,e.length-1).join("/"),x()}})),"4px")));var c=JSON.parse(r.getText());if(null==c||0==c.length)mxUtils.write(u,mxResources.get("noFiles"));else{var m=!0,p=mxUtils.bind(this,(function(o){for(var r=0;r<c.length;r++)mxUtils.bind(this,(function(r,c){if(o==("dir"==r.type)){var d=a.cloneNode();d.style.backgroundColor=m?Editor.isDarkMode()?"#000000":"#eeeeee":"",m=!m;var p=document.createElement("img");p.src=IMAGE_PATH+"/"+("dir"==r.type?"folder.png":"file.png"),p.setAttribute("align","absmiddle"),p.style.marginRight="4px",p.style.marginTop="-4px",p.width=20,d.appendChild(p),d.appendChild(h(r.name+("dir"==r.type?"/":""),mxUtils.bind(this,(function(){"dir"==r.type?(l=r.path,x()):e&&"file"==r.type&&(this.ui.hideDialog(),t(i+"/"+n+"/"+encodeURIComponent(s)+"/"+r.path))})))),u.appendChild(d)}}))(c[r],r)}));p(!0),e&&p(!1)}})),m,!0)})),b=mxUtils.bind(this,(function(e,t){null==e&&(u.innerHTML="",e=1);var o=new mxXmlRequest(this.baseUrl+"/repos/"+i+"/"+n+"/branches?per_page=100&page="+e,null,"GET");c.okButton.setAttribute("disabled","disabled"),this.ui.spinner.spin(u,mxResources.get("loading")),null!=g&&(mxEvent.removeListener(u,"scroll",g),g=null),null!=p&&null!=p.parentNode&&p.parentNode.removeChild(p),(p=document.createElement("a")).style.display="block",p.style.cursor="pointer",mxUtils.write(p,mxResources.get("more")+"...");var r=mxUtils.bind(this,(function(){b(e+1)}));mxEvent.addListener(p,"click",r),this.executeRequest(o,mxUtils.bind(this,(function(i){this.ui.spinner.stop(),1==e&&(d(!0),u.appendChild(h("../ [Up]",mxUtils.bind(this,(function(){l=null,f()})),"4px")));var n=JSON.parse(i.getText());if(null==n||0==n.length)mxUtils.write(u,mxResources.get("noFiles"));else if(1==n.length&&t)s=n[0].name,l="",x();else{for(var o=0;o<n.length;o++)mxUtils.bind(this,(function(e,t){var i=a.cloneNode();i.style.backgroundColor=t%2==0?Editor.isDarkMode()?"#000000":"#eeeeee":"",i.appendChild(h(e.name,mxUtils.bind(this,(function(){s=e.name,l="",x()})))),u.appendChild(i)}))(n[o],o);100==n.length&&(u.appendChild(p),g=function(){u.scrollTop>=u.scrollHeight-u.offsetHeight&&r()},mxEvent.addListener(u,"scroll",g))}})),m)})),f=mxUtils.bind(this,(function(e){null==e&&(u.innerHTML="",e=1);var t=new mxXmlRequest(this.baseUrl+"/user/repos?per_page=100&page="+e,null,"GET");c.okButton.setAttribute("disabled","disabled"),this.ui.spinner.spin(u,mxResources.get("loading")),null!=g&&mxEvent.removeListener(u,"scroll",g),null!=p&&null!=p.parentNode&&p.parentNode.removeChild(p),(p=document.createElement("a")).style.display="block",p.style.cursor="pointer",mxUtils.write(p,mxResources.get("more")+"...");var o=mxUtils.bind(this,(function(){f(e+1)}));mxEvent.addListener(p,"click",o),this.executeRequest(t,mxUtils.bind(this,(function(t){this.ui.spinner.stop();var r=JSON.parse(t.getText());if(null==r||0==r.length)mxUtils.write(u,mxResources.get("noFiles"));else{1==e&&(u.appendChild(h(mxResources.get("enterValue")+"...",mxUtils.bind(this,(function(){var e=new FilenameDialog(this.ui,"org/repo/ref",mxResources.get("ok"),mxUtils.bind(this,(function(e){if(null!=e){var t=e.split("/");if(t.length>1){var o=t[0],r=t[1];if(t.length<3)i=o,n=r,s=null,l=null,b();else if(this.ui.spinner.spin(u,mxResources.get("loading"))){var a=encodeURIComponent(t.slice(2,t.length).join("/"));this.getFile(o+"/"+r+"/"+a,mxUtils.bind(this,(function(e){this.ui.spinner.stop(),i=e.meta.org,n=e.meta.repo,s=decodeURIComponent(e.meta.ref),l="",x()})),mxUtils.bind(this,(function(e){this.ui.spinner.stop(),this.ui.handleError({message:mxResources.get("fileNotFound")})})))}}else this.ui.spinner.stop(),this.ui.handleError({message:mxResources.get("invalidName")})}})),mxResources.get("enterValue"));this.ui.showDialog(e.container,300,80,!0,!1),e.init()})))),mxUtils.br(u),mxUtils.br(u));for(var c=0;c<r.length;c++)mxUtils.bind(this,(function(e,t){var s=a.cloneNode();s.style.backgroundColor=t%2==0?Editor.isDarkMode()?"#000000":"#eeeeee":"",s.appendChild(h(e.full_name,mxUtils.bind(this,(function(){i=e.owner.login,n=e.name,l="",b(null,!0)})))),u.appendChild(s)}))(r[c],c)}100==r.length&&(u.appendChild(p),g=function(){u.scrollTop>=u.scrollHeight-u.offsetHeight&&o()},mxEvent.addListener(u,"scroll",g))})),m)}));f()},GitHubClient.prototype.logout=function(){this.clearPersistentToken(),this.setUser(null),e=null}}();
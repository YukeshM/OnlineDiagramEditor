!function(){var e=null;window.GitLabClient=function(e){GitHubClient.call(this,e,"gitlabauth")},mxUtils.extend(GitLabClient,GitHubClient),GitLabClient.prototype.clientId=DRAWIO_GITLAB_ID,GitLabClient.prototype.scope="api%20read_repository%20write_repository",GitLabClient.prototype.baseUrl=DRAWIO_GITLAB_URL+"/api/v4",GitLabClient.prototype.maxFileSize=1e7,GitLabClient.prototype.authToken="Bearer",GitLabClient.prototype.redirectUri=window.location.protocol+"//"+window.location.host+"/gitlab",GitLabClient.prototype.authenticate=function(e,t){new mxXmlRequest(this.redirectUri+"?getState=1",null,"GET").send(mxUtils.bind(this,(function(i){i.getStatus()>=200&&i.getStatus()<=299?this.authenticateStep2(i.getText(),e,t):null!=t&&t(i)})),t)},GitLabClient.prototype.authenticateStep2=function(t,i,n){if(null==window.onGitLabCallback){var s=mxUtils.bind(this,(function(){var l=!0;null!=this.getPersistentToken(!0)?new mxXmlRequest(this.redirectUri+"?state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname+"&token="+t),null,"GET").send(mxUtils.bind(this,(function(t){t.getStatus()>=200&&t.getStatus()<=299?(e=JSON.parse(t.getText()).access_token,this.setToken(e),this.setUser(null),i()):(this.clearPersistentToken(),this.setUser(null),e=null,this.setToken(null),401==t.getStatus()?s():n({message:mxResources.get("accessDenied"),retry:s}))})),n):this.ui.showAuthDialog(this,!0,mxUtils.bind(this,(function(o,r){null!=window.open(DRAWIO_GITLAB_URL+"/oauth/authorize?client_id="+this.clientId+"&scope="+this.scope+"&redirect_uri="+encodeURIComponent(this.redirectUri)+"&response_type=code&state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname+"&token="+t),"gitlabauth")?window.onGitLabCallback=mxUtils.bind(this,(function(t,a){l?(window.onGitLabCallback=null,l=!1,null==t?n({message:mxResources.get("accessDenied"),retry:s}):(null!=r&&r(),e=t.access_token,this.setToken(e),this.setUser(null),o&&this.setPersistentToken("remembered"),i(),null!=a&&a.close())):null!=a&&a.close()})):n({message:mxResources.get("serviceUnavailableOrBlocked"),retry:s})})),mxUtils.bind(this,(function(){l&&(window.onGitLabCallback=null,l=!1,n({message:mxResources.get("accessDenied"),retry:s}))})))}));s()}else n({code:App.ERROR_BUSY})},GitLabClient.prototype.executeRequest=function(t,i,n,s){var l=mxUtils.bind(this,(function(r){var a=!0,u=window.setTimeout(mxUtils.bind(this,(function(){a=!1,n({code:App.ERROR_TIMEOUT,message:mxResources.get("timeout")})})),this.ui.timeout),c=this.authToken+" "+e;t.setRequestHeaders=function(e,t){e.setRequestHeader("Authorization",c),e.setRequestHeader("PRIVATE_TOKEN",c),e.setRequestHeader("Content-Type","application/json")},t.send(mxUtils.bind(this,(function(){if(window.clearTimeout(u),a)if(t.getStatus()>=200&&t.getStatus()<=299||s&&404==t.getStatus())i(t);else if(401===t.getStatus())r?n({message:mxResources.get("accessDenied"),retry:mxUtils.bind(this,(function(){this.authenticate((function(){o(!0)}),n)}))}):this.authenticate((function(){l(!0)}),n);else if(403===t.getStatus()){var e=!1;try{var c=JSON.parse(t.getText());null!=c&&null!=c.errors&&c.errors.length>0&&(e="too_large"==c.errors[0].code)}catch(e){}n({message:mxResources.get(e?"drawingTooLarge":"forbidden")})}else 404===t.getStatus()?n({message:this.getErrorMessage(t,mxResources.get("fileNotFound"))}):400===t.getStatus()?n({status:400}):n({status:t.getStatus(),message:this.getErrorMessage(t,mxResources.get("error")+" "+t.getStatus())})})),mxUtils.bind(this,(function(e){window.clearTimeout(u),a&&n(e)})))})),o=mxUtils.bind(this,(function(e){null==this.user?this.updateUser((function(){o(!0)}),n,e):l(e)}));null==e?this.authenticate((function(){o(!0)}),n):o(!1)},GitLabClient.prototype.getRefIndex=function(e,t,i,n,s,l){if(null!=s)i(e,s);else{var o=e.length-2,r=mxUtils.bind(this,(function(){if(o<2)n({message:mxResources.get("fileNotFound")});else{var s=Math.max(o-1,0),a=e.slice(0,s).join("/"),u=e[s],c=e[o],d=e.slice(o+1,e.length).join("/"),h=this.baseUrl+"/projects/"+encodeURIComponent(a+"/"+u)+"/repository/"+(t?l?"branches?per_page=1&page=1&ref="+c:"tree?path="+d+"&ref="+c:"files/"+encodeURIComponent(d)+"?ref="+c),m=new mxXmlRequest(h,null,"HEAD");this.executeRequest(m,mxUtils.bind(this,(function(){200==m.getStatus()?i(e,o):n({message:mxResources.get("fileNotFound")})})),mxUtils.bind(this,(function(){404==m.getStatus()?(o--,r()):n({message:mxResources.get("fileNotFound")})})))}}));r()}},GitLabClient.prototype.getFile=function(t,i,n,s,l,o){s=null!=s&&s,this.getRefIndex(t.split("/"),!1,mxUtils.bind(this,(function(o,r){var a=Math.max(r-1,0),u=o.slice(0,a).join("/"),c=o[a],d=o[r];t=o.slice(r+1,o.length).join("/");var h=/\.png$/i.test(t);if(!l&&(/\.v(dx|sdx?)$/i.test(t)||/\.gliffy$/i.test(t)||/\.pdf$/i.test(t)||!this.ui.useCanvasForExport&&h))if(null!=e){var m="&t="+(new Date).getTime(),p=this.baseUrl+"/projects/"+encodeURIComponent(u+"/"+c)+"/repository/files/"+encodeURIComponent(t)+"?ref="+d,g=(o=t.split("/")).length>0?o[o.length-1]:t;this.ui.convertFile(p+m,g,null,this.extension,i,n,mxUtils.bind(this,(function(e,t,i){var n=new mxXmlRequest(e,null,"GET");this.executeRequest(n,mxUtils.bind(this,(function(e){try{t(this.getFileContent(JSON.parse(e.getText())))}catch(e){i(e)}})),i)})))}else n({message:mxResources.get("accessDenied")});else{m="&t="+(new Date).getTime(),p=this.baseUrl+"/projects/"+encodeURIComponent(u+"/"+c)+"/repository/files/"+encodeURIComponent(t)+"?ref="+d;var x=new mxXmlRequest(p+m,null,"GET");this.executeRequest(x,mxUtils.bind(this,(function(e){try{i(this.createGitLabFile(u,c,d,JSON.parse(e.getText()),s,r))}catch(e){n(e)}})),n)}})),n,o)},GitLabClient.prototype.getFileContent=function(e){var t=e.file_name,i=e.content;if("base64"===e.encoding)if(/\.jpe?g$/i.test(t))i="data:image/jpeg;base64,"+i;else if(/\.gif$/i.test(t))i="data:image/gif;base64,"+i;else if(/\.pdf$/i.test(t))i="data:application/pdf;base64,"+i;else if(/\.png$/i.test(t)){var n=this.ui.extractGraphModelFromPng(i);i=null!=n&&n.length>0?n:"data:image/png;base64,"+i}else i=Base64.decode(i);return i},GitLabClient.prototype.createGitLabFile=function(e,t,i,n,s,l){var o=DRAWIO_GITLAB_URL+"/",r=o+e+"/"+t+"/blob/"+i+"/"+n.file_path,a=o+e+"/"+t+"/raw/"+i+"/"+n.file_path+"?inline=false",u={org:e,repo:t,ref:i,name:n.file_name,path:n.file_path,html_url:r,download_url:a,last_commit_id:n.last_commit_id,refPos:l},c=this.getFileContent(n);return s?new GitLabLibrary(this.ui,c,u):new GitLabFile(this.ui,c,u)},GitLabClient.prototype.insertFile=function(e,t,i,n,s,l,o){s=null!=s&&s;var r=l.split("/");this.getRefIndex(r,!0,mxUtils.bind(this,(function(l,r){var a=Math.max(r-1,0),u=l.slice(0,a).join("/"),c=l[a],d=l[r];path=l.slice(r+1,l.length).join("/"),path.length>0&&(path+="/"),path+=e,this.checkExists(u+"/"+c+"/"+d+"/"+path,!0,mxUtils.bind(this,(function(l,a){if(l)if(s)o||(t=Base64.encode(t)),this.showCommitDialog(e,!0,mxUtils.bind(this,(function(e){this.writeFile(u,c,d,path,e,t,a,mxUtils.bind(this,(function(e){try{var t=JSON.parse(e.getText());i(this.createGitLabFile(u,c,d,null!=t.content?t.content:t,s,r))}catch(e){n(e)}})),n)})),n);else{var h=DRAWIO_GITLAB_URL+"/",m=h+u+"/"+c+"/blob/"+d+"/"+path,p=h+u+"/"+c+"/raw/"+d+"/"+path+"?inline=false";i(new GitLabFile(this.ui,t,{org:u,repo:c,ref:d,name:e,path,html_url:m,download_url:p,refPos:r,last_commit_id:a,isNew:!0}))}else n()})))})),n,null,r.length<=4)},GitLabClient.prototype.checkExists=function(e,t,i){this.getFile(e,mxUtils.bind(this,(function(n){if(t){var s=this.ui.spinner.pause();this.ui.confirm(mxResources.get("replaceIt",[e]),(function(){s(),i(!0,n.getCurrentEtag())}),(function(){s(),i(!1)}))}else this.ui.spinner.stop(),this.ui.showError(mxResources.get("error"),mxResources.get("fileExists"),mxResources.get("ok"),(function(){i(!1)}))})),mxUtils.bind(this,(function(e){i(!0)})),null,!0)},GitLabClient.prototype.writeFile=function(e,t,i,n,s,l,o,r,a){if(l.length>=this.maxFileSize)a({message:mxResources.get("drawingTooLarge")+" ("+this.ui.formatFileSize(l.length)+" / 10 MB)"});else{var u="POST",c={path:encodeURIComponent(n),branch:decodeURIComponent(i),commit_message:s,content:l,encoding:"base64"};null!=o&&(c.last_commit_id=o,u="PUT");var d=this.baseUrl+"/projects/"+encodeURIComponent(e+"/"+t)+"/repository/files/"+encodeURIComponent(n),h=new mxXmlRequest(d,JSON.stringify(c),u);this.executeRequest(h,mxUtils.bind(this,(function(e){r(e)})),a)}},GitLabClient.prototype.saveFile=function(e,t,i,n,s){var l=e.meta.org,o=e.meta.repo,r=e.meta.ref,a=e.meta.path,u=mxUtils.bind(this,(function(n,u){this.writeFile(l,o,r,a,s,u,n,mxUtils.bind(this,(function(n){delete e.meta.isNew,this.getFile(l+"/"+o+"/"+r+"/"+a,mxUtils.bind(this,(function(i){i.getData()==e.getData()?t(i.getCurrentEtag()):t({content:e.getCurrentEtag()})})),i,null,null,e.meta.refPos)})),i)})),c=mxUtils.bind(this,(function(){if(this.ui.useCanvasForExport&&/(\.png)$/i.test(a)){var t=this.ui.getPngFileProperties(this.ui.fileNode);this.ui.getEmbeddedPng(mxUtils.bind(this,(function(t){u(e.meta.last_commit_id,t)})),i,this.ui.getCurrentFile()!=e?e.getData():null,t.scale,t.border)}else u(e.meta.last_commit_id,Base64.encode(e.getData()))}));n?this.getFile(l+"/"+o+"/"+r+"/"+a,mxUtils.bind(this,(function(t){e.meta.last_commit_id=t.meta.last_commit_id,c()})),i):c()},GitLabClient.prototype.pickFolder=function(e){this.showGitLabDialog(!1,e)},GitLabClient.prototype.pickFile=function(e){e=null!=e?e:mxUtils.bind(this,(function(e){this.ui.loadFile("A"+encodeURIComponent(e))})),this.showGitLabDialog(!0,e)},GitLabClient.prototype.showGitLabDialog=function(t,i){var n=null,s=null,l=null,o=null,r=document.createElement("div");r.style.whiteSpace="nowrap",r.style.overflow="hidden",r.style.height="304px";var a=document.createElement("h3");mxUtils.write(a,mxResources.get(t?"selectFile":"selectFolder")),a.style.cssText="width:100%;text-align:center;margin-top:0px;margin-bottom:12px",r.appendChild(a);var u=document.createElement("div");u.style.whiteSpace="nowrap",u.style.border="1px solid lightgray",u.style.boxSizing="border-box",u.style.padding="4px",u.style.overflow="auto",u.style.lineHeight="1.2em",u.style.height="274px",r.appendChild(u);var c=document.createElement("div");c.style.textOverflow="ellipsis",c.style.boxSizing="border-box",c.style.overflow="hidden",c.style.padding="4px",c.style.width="100%";var d=new CustomDialog(this.ui,r,mxUtils.bind(this,(function(){i(n+"/"+s+"/"+encodeURIComponent(l)+"/"+o)})));this.ui.showDialog(d.container,420,370,!0,!0),t&&d.okButton.parentNode.removeChild(d.okButton);var h=mxUtils.bind(this,(function(e,t,i,n){var s=document.createElement("a");if(s.setAttribute("title",e),s.style.cursor="pointer",mxUtils.write(s,e),mxEvent.addListener(s,"click",t),n&&(s.style.textDecoration="underline"),null!=i){var l=c.cloneNode();l.style.padding=i,l.appendChild(s),s=l}return s})),m=mxUtils.bind(this,(function(e){var t=document.createElement("div");if(t.style.marginBottom="8px",t.appendChild(h(n+"/"+s,mxUtils.bind(this,(function(){o=null,U()})),null,!0)),e||(mxUtils.write(t," / "),t.appendChild(h(decodeURIComponent(l),mxUtils.bind(this,(function(){o=null,b()})),null,!0))),null!=o&&o.length>0)for(var i=o.split("/"),r=0;r<i.length;r++)!function(e){mxUtils.write(t," / "),t.appendChild(h(i[e],mxUtils.bind(this,(function(){o=i.slice(0,e+1).join("/"),f()})),null,!0))}(r);u.appendChild(t)})),p=mxUtils.bind(this,(function(e){this.ui.handleError(e,null,mxUtils.bind(this,(function(){this.ui.spinner.stop(),null!=this.getUser()?(n=null,s=null,l=null,o=null,U()):this.ui.hideDialog()})))})),g=null,x=null,f=mxUtils.bind(this,(function(e){null==e&&(u.innerHTML="",e=1);var r=new mxXmlRequest(this.baseUrl+"/projects/"+encodeURIComponent(n+"/"+s)+"/repository/tree?path="+o+"&ref="+l+"&per_page=100&page="+e,null,"GET");this.ui.spinner.spin(u,mxResources.get("loading")),d.okButton.removeAttribute("disabled"),null!=x&&(mxEvent.removeListener(u,"scroll",x),x=null),null!=g&&null!=g.parentNode&&g.parentNode.removeChild(g),(g=document.createElement("a")).style.display="block",g.style.cursor="pointer",mxUtils.write(g,mxResources.get("more")+"...");var a=mxUtils.bind(this,(function(){f(e+1)}));mxEvent.addListener(g,"click",a),this.executeRequest(r,mxUtils.bind(this,(function(r){this.ui.spinner.stop(),1==e&&(m(!l),u.appendChild(h("../ [Up]",mxUtils.bind(this,(function(){if(""==o)o=null,U();else{var e=o.split("/");o=e.slice(0,e.length-1).join("/"),f()}})),"4px")));var d=JSON.parse(r.getText());if(null==d||0==d.length)mxUtils.write(u,mxResources.get("noFiles"));else{var p=!0,b=0,R=mxUtils.bind(this,(function(e){for(var r=0;r<d.length;r++)mxUtils.bind(this,(function(r){if(e==("tree"==r.type)){var a=c.cloneNode();a.style.backgroundColor=p?Editor.isDarkMode()?"#000000":"#eeeeee":"",p=!p;var d=document.createElement("img");d.src=IMAGE_PATH+"/"+("tree"==r.type?"folder.png":"file.png"),d.setAttribute("align","absmiddle"),d.style.marginRight="4px",d.style.marginTop="-4px",d.width=20,a.appendChild(d),a.appendChild(h(r.name+("tree"==r.type?"/":""),mxUtils.bind(this,(function(){"tree"==r.type?(o=r.path,f()):t&&"blob"==r.type&&(this.ui.hideDialog(),i(n+"/"+s+"/"+l+"/"+r.path))})))),u.appendChild(a),b++}}))(d[r])}));R(!0),t&&R(!1),100==b&&(u.appendChild(g),x=function(){u.scrollTop>=u.scrollHeight-u.offsetHeight&&a()},mxEvent.addListener(u,"scroll",x))}})),p,!0)})),b=mxUtils.bind(this,(function(e,t){null==e&&(u.innerHTML="",e=1);var i=new mxXmlRequest(this.baseUrl+"/projects/"+encodeURIComponent(n+"/"+s)+"/repository/branches?per_page=100&page="+e,null,"GET");d.okButton.setAttribute("disabled","disabled"),this.ui.spinner.spin(u,mxResources.get("loading")),null!=x&&(mxEvent.removeListener(u,"scroll",x),x=null),null!=g&&null!=g.parentNode&&g.parentNode.removeChild(g),(g=document.createElement("a")).style.display="block",g.style.cursor="pointer",mxUtils.write(g,mxResources.get("more")+"...");var r=mxUtils.bind(this,(function(){b(e+1)}));mxEvent.addListener(g,"click",r),this.executeRequest(i,mxUtils.bind(this,(function(i){this.ui.spinner.stop(),1==e&&(m(!0),u.appendChild(h("../ [Up]",mxUtils.bind(this,(function(){o=null,U()})),"4px")));var n=JSON.parse(i.getText());if(null==n||0==n.length)mxUtils.write(u,mxResources.get("noFiles"));else if(1==n.length&&t)l=n[0].name,o="",f();else{for(var s=0;s<n.length;s++)mxUtils.bind(this,(function(e,t){var i=c.cloneNode();i.style.backgroundColor=t%2==0?Editor.isDarkMode()?"#000000":"#eeeeee":"",i.appendChild(h(e.name,mxUtils.bind(this,(function(){l=encodeURIComponent(e.name),o="",f()})))),u.appendChild(i)}))(n[s],s);100==n.length&&(u.appendChild(g),x=function(){u.scrollTop>=u.scrollHeight-u.offsetHeight&&r()},mxEvent.addListener(u,"scroll",x))}})),p)}));d.okButton.setAttribute("disabled","disabled"),this.ui.spinner.spin(u,mxResources.get("loading"));var U=mxUtils.bind(this,(function(e){var t=this.ui.spinner,i=0;this.ui.spinner.stop();var r=function(){t.spin(u,mxResources.get("loading")),i+=1},a=function(){0==(i-=1)&&t.stop()};null==e&&(u.innerHTML="",e=1),null!=x&&(mxEvent.removeListener(u,"scroll",x),x=null),null!=g&&null!=g.parentNode&&g.parentNode.removeChild(g),(g=document.createElement("a")).style.display="block",g.style.cursor="pointer",mxUtils.write(g,mxResources.get("more")+"...");var d=mxUtils.bind(this,(function(){0===i&&U(e+1)}));mxEvent.addListener(g,"click",d);var m=mxUtils.bind(this,(function(e){r();var t=new mxXmlRequest(this.baseUrl+"/groups?per_page=100",null,"GET");this.executeRequest(t,mxUtils.bind(this,(function(t){e(JSON.parse(t.getText())),a()})),p)})),R=mxUtils.bind(this,(function(e,t){r();var i=new mxXmlRequest(this.baseUrl+"/groups/"+e.id+"/projects?per_page=100",null,"GET");this.executeRequest(i,mxUtils.bind(this,(function(i){t(e,JSON.parse(i.getText())),a()})),p)}));m(mxUtils.bind(this,(function(t){if(null==this.user)mxUtils.write(u,mxResources.get("loggedOut"));else{r();var m=new mxXmlRequest(this.baseUrl+"/users/"+this.user.id+"/projects?per_page=100&page="+e,null,"GET");this.executeRequest(m,mxUtils.bind(this,(function(m){var p=JSON.parse(m.getText());if(null!=p&&0!=p.length||null!=t&&0!=t.length){1==e&&(u.appendChild(h(mxResources.get("enterValue")+"...",mxUtils.bind(this,(function(){if(0===i){var e=new FilenameDialog(this.ui,"org/repo/ref",mxResources.get("ok"),mxUtils.bind(this,(function(e){if(null!=e){var t=e.split("/");t.length>1?(n=t[0],s=t[1],o=null,l=null,t.length>2?(l=encodeURIComponent(t.slice(2,t.length).join("/")),f()):b(null,!0)):(this.ui.spinner.stop(),this.ui.handleError({message:mxResources.get("invalidName")}))}})),mxResources.get("enterValue"));this.ui.showDialog(e.container,300,80,!0,!1),e.init()}})))),mxUtils.br(u),mxUtils.br(u));for(var U=!0,v=0;v<p.length;v++)mxUtils.bind(this,(function(e){var t=c.cloneNode();t.style.backgroundColor=U?Editor.isDarkMode()?"#000000":"#eeeeee":"",U=!U,t.appendChild(h(e.name_with_namespace,mxUtils.bind(this,(function(){0===i&&(n=e.owner.username,s=e.path,o="",b(null,!0))})))),u.appendChild(t)}))(p[v]);for(v=0;v<t.length;v++)r(),R(t[v],mxUtils.bind(this,(function(e,t){a();for(var l=0;l<t.length;l++){var r=c.cloneNode();r.style.backgroundColor=U?"dark"==uiTheme?"#000000":"#eeeeee":"",U=!U,mxUtils.bind(this,(function(t){r.appendChild(h(t.name_with_namespace,mxUtils.bind(this,(function(){0===i&&(n=e.full_path,s=t.path,o="",b(null,!0))})))),u.appendChild(r)}))(t[l])}})));a()}else a(),mxUtils.write(u,mxResources.get("noFiles"));100==p.length&&(u.appendChild(g),x=function(){u.scrollTop>=u.scrollHeight-u.offsetHeight&&d()},mxEvent.addListener(u,"scroll",x))})),p)}})))}));e?this.user?U():this.updateUser((function(){U()}),p,!0):this.authenticate(mxUtils.bind(this,(function(){this.updateUser((function(){U()}),p,!0)})),p)},GitLabClient.prototype.logout=function(){this.ui.editor.loadUrl(this.redirectUri+"?doLogout=1&state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname)),this.clearPersistentToken(),this.setUser(null),e=null,this.setToken(null)}}();
!function(){var e=null,i={};window.DriveClient=function(e,i){null==i&&null!=window.urlParams&&"1"==window.urlParams.extAuth&&(i=!0),mxEventSource.call(this),DrawioClient.call(this,e,"gDriveAuthInfo"),this.isExtAuth=i,this.ui=e,this.xmlMimeType="application/vnd.jgraph.mxfile",this.mimeType="application/vnd.jgraph.mxfile.realtime",this.ui.editor.chromeless&&!this.ui.editor.editable&&"1"!=urlParams.rt&&"1"!=urlParams.extAuth?(this.cookieName="gDriveViewerAuthInfo",this.token=this.getPersistentToken(),this.appId=window.DRAWIO_GOOGLE_VIEWER_APP_ID||"850530949725",this.clientId=window.DRAWIO_GOOGLE_VIEWER_CLIENT_ID||"850530949725.apps.googleusercontent.com",this.scopes=["https://www.googleapis.com/auth/drive.readonly","https://www.googleapis.com/auth/userinfo.profile"]):(this.appId=window.DRAWIO_GOOGLE_APP_ID||"671128082532",this.clientId=window.DRAWIO_GOOGLE_CLIENT_ID||"671128082532-jhphbq6d0e1gnsus9mn7vf8a6fjn10mp.apps.googleusercontent.com"),this.mimeTypes=this.xmlMimeType+",application/mxe,application/mxr,application/vnd.jgraph.mxfile.realtime,application/vnd.jgraph.mxfile.rtlegacy";var t=JSON.parse(this.token);null!=t&&null!=t.current&&(this.userId=t.current.userId,this.authCalled=!1)},mxUtils.extend(DriveClient,mxEventSource),mxUtils.extend(DriveClient,DrawioClient),DriveClient.prototype.redirectUri=window.location.protocol+"//"+window.location.host+"/google",DriveClient.prototype.GDriveBaseUrl="https://www.googleapis.com/drive/v2",DriveClient.prototype.scopes=["https://www.googleapis.com/auth/drive.file","https://www.googleapis.com/auth/drive.install","https://www.googleapis.com/auth/userinfo.profile"],DriveClient.prototype.allFields="kind,id,parents,headRevisionId,etag,title,mimeType,modifiedDate,editable,copyable,canComment,labels,properties,downloadUrl,webContentLink,userPermission,fileSize",DriveClient.prototype.catchupFields="etag,headRevisionId,modifiedDate,properties(key,value)",DriveClient.prototype.enableThumbnails=!0,DriveClient.prototype.thumbnailWidth=1e3,DriveClient.prototype.maxThumbnailSize=2e6,DriveClient.prototype.placeholderThumbnail="iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAACN1BMVEXwhwXvhgX4iwXzhwXgbQzvhgXhbAzocgzqcwzldAoAAADhbgvjcQnmdgrlbgDwhgXsfwXufgjwhgXwgQfziAXxgADibgz4iwX4jAX3iwTpcwr1igXoewjsfgj3igX4iwXqcQv4jAX3iwXtfQnndQrvhAbibArwhwXgbQz//////v39jwX6jQX+/v7fagHfawzdVQDwhADgbhPgbhXwhwPocQ3uvKvwiA/faQDscgzxiAT97+XgciTgcSP6jAXgbQ3gcCHwiRfpcQzwhwfeXQD77ef74NLvhgTvegD66uPgbAf66+TvfADwjCzgcCfwiSD67ObhcjjwiBHhczvwiyrgbxj///777ujgcSHgcB/xiRzgbhveWgDeVwDhdEDgbRDqfgffYgDfXwD97+bvfQDxiz7//vvwiRr118rrcgztggbfZgDfZAD++PT98+3gbBPsgAb99vD33tPgcB7icAvuhAX//Pn66N/00sTyy7vuuqbjekLwhwzkcgr88er449n++vfutp/kh1vgcBvhbwvmdwnwgwDwgADeWQD87eLxxrTssJjqpIf0roHmjWTkhFP759n63czvvanomnjnlHDhczD22cr4y6/wwa/3xKX2wJ3rqpH0tY7qp4vpnoDymlbjf0vxjjntcwzldAroegj/kgX12s7518PzqnnnkWfynmLieUjpewjrdAD40Lj1uZTzpm3idTbiciLydQzzfwnyiQTsfgD3xqnzp3TxlkzgbCrdTwDdSwBLKUlNAAAAJ3RSTlP8/b2X/YH8wb+FAIuIggJbQin5opAM9+a/ubaubyD78NjSyr2WgRp4sjN4AAAI70lEQVR42u2cZ38SQRDGT8WGvfde4E4BxVMRRaKiUURRlJhQRDCCSgQVO/bee++9994+nMt5ywoezFJd/fm8uITi3p9n5mbYkcCpO6rVnVu2YEXd+3dRIySuo7pLv4GjGNKg7j3UHTl1l14PajmG9OFBnx7Ird4PumpYEtf1QXc112l0M7OGKXEfeg3guo3iNIyJG92Jaz61mYYxcaNacs1H/8f6j6X5j1WI/mMVIsawRFEzI49SjwOqAJa43emclk8Rp2c7AFZ+LDGyvXE2kmO2Q1Lq17RSd6ND48QIwFVuLNHTOPbEpTOz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".replace(/\+/g,"-").replace(/\//g,"_"),DriveClient.prototype.placeholderMimeType="image/png",DriveClient.prototype.libraryMimeType="application/vnd.jgraph.mxlibrary",DriveClient.prototype.newAppHostname="www.draw.io",DriveClient.prototype.extension=".drawio",DriveClient.prototype.tokenRefreshInterval=0,DriveClient.prototype.lastTokenRefresh=0,DriveClient.prototype.maxRetries=5,DriveClient.prototype.staleEtagMaxRetries=3,DriveClient.prototype.coolOff=1e3,DriveClient.prototype.mimeTypeCheckCoolOff=6e4,DriveClient.prototype.user=null,DriveClient.prototype.sameWinAuthMode=!1,DriveClient.prototype.sameWinRedirectUrl=null,DriveClient.prototype.setUser=function(e){this.user=e,null==this.user?(this.userId=null,null!=this.tokenRefreshThread&&(window.clearTimeout(this.tokenRefreshThread),this.tokenRefreshThread=null)):this.userId=e.id,this.fireEvent(new mxEventObject("userChanged"))},DriveClient.prototype.setUserId=function(e){this.userId=e,null!=this.user&&this.user.id!=this.userId&&(this.user=null)},DriveClient.prototype.getUser=function(){return this.user},DriveClient.prototype.getUsersList=function(){var e=[],i=JSON.parse(this.getPersistentToken(!0)),t=null;if(null!=i)for(var r in null!=i.current&&(t=i.current.userId,e.push(i[t].user),e[0].isCurrent=!0),i)"current"!=r&&r!=t&&e.push(i[r].user);return e},DriveClient.prototype.logout=function(){this.ui.editor.loadUrl(this.redirectUri+"?doLogout=1&userId="+this.userId+"&state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname)),this.clearPersistentToken(),this.setUser(null),e=null},DriveClient.prototype.execute=function(e){var i=mxUtils.bind(this,(function(i){this.ui.showAuthDialog(this,!0,mxUtils.bind(this,(function(i,t){this.authorize(!1,mxUtils.bind(this,(function(){null!=t&&t(),e()})),mxUtils.bind(this,(function(e){var i=null!=e.message?e.message:mxResources.get("cannotLogin");null!=e&&null!=e.error&&403==e.error.code&&null!=e.error.data&&e.error.data.length>0&&"domainPolicy"==e.error.data[0].reason&&(i=e.error.message),this.logout(),this.ui.showError(mxResources.get("error"),i,mxResources.get("help"),mxUtils.bind(this,(function(){this.ui.openLink("https://www.diagrams.net/doc/faq/gsuite-authorisation-troubleshoot")})),null,mxResources.get("ok"))})),i)})))}));this.authorize(!0,e,i)},DriveClient.prototype.executeRequest=function(i,t,r){try{var s=!0,n=null,l=0;null!=this.requestThread&&window.clearTimeout(this.requestThread);var o=mxUtils.bind(this,(function(){try{this.requestThread=null,this.currentRequest=i,null!=n&&window.clearTimeout(n),n=window.setTimeout(mxUtils.bind(this,(function(){s=!1,null!=r&&r({code:App.ERROR_TIMEOUT,message:mxResources.get("timeout"),retry:o})})),this.ui.timeout);var a=null,u=!1;"string"==typeof i.params?a=i.params:null!=i.params&&(a=JSON.stringify(i.params),u=!0);var c=i.fullUrl||this.GDriveBaseUrl+i.url;u&&(c+=(c.indexOf("?")>0?"&":"?")+"alt=json");var d=new mxXmlRequest(c,a,i.method||"GET");d.setRequestHeaders=mxUtils.bind(this,(function(t,r){if(null!=i.headers)for(var s in i.headers)t.setRequestHeader(s,i.headers[s]);else null!=i.contentType?t.setRequestHeader("Content-Type",i.contentType):u&&t.setRequestHeader("Content-Type","application/json");t.setRequestHeader("Authorization","Bearer "+e)})),d.send(mxUtils.bind(this,(function(e){try{if(window.clearTimeout(n),s){var a;try{a=JSON.parse(e.getText())}catch(e){a=null}if(e.getStatus()>=200&&e.getStatus()<=299)null!=t&&t(a);else{var u=null!=a&&null!=a.error?null!=a.error.data?a.error.data:a.error.errors:null,c=null!=u&&u.length>0?u[0].reason:null;if(null==r||null==a||null==a.error||-1!=a.error.code&&(403!=a.error.code||"domainPolicy"!=c&&"The requested mime type change is forbidden."!=a.error.message))if(null!=a&&null!=a.error&&(401==a.error.code||403==a.error.code&&"rateLimitExceeded"!=c))403==a.error.code&&this.retryAuth||401==a.error.code&&this.retryAuth&&"authError"==c?(null!=r&&r(a),this.retryAuth=!1):(this.retryAuth=!0,this.execute(o));else if(null!=a&&null!=a.error&&412!=a.error.code&&404!=a.error.code&&400!=a.error.code&&this.currentRequest==i&&l<this.maxRetries){l++;var d=1+.1*(Math.random()-.5);this.requestThread=window.setTimeout(o,Math.round(Math.pow(2,l)*d*this.coolOff))}else null!=r&&r(a);else r(a)}}}catch(e){if(null==r)throw e;r(e)}})))}catch(e){if(null==r)throw e;r(e)}}));null!=e&&this.authCalled?o():this.execute(o)}catch(e){if(null==r)throw e;r(e)}},DriveClient.prototype.createAuthWin=function(e){var i=window.screenX,t=window.screenY,r=window.outerWidth,s=window.outerHeight,n=i+Math.max(r-525,0)/2,l=["width=525","height=525","top="+(t+Math.max(s-525,0)/2),"left="+n,"status=no","resizable=yes","toolbar=no","menubar=no","scrollbars=yes"];return window.open(e||"about:blank","gdauth",l.join(","))},DriveClient.prototype.authorize=function(e,i,t,r,s){!this.isExtAuth||e?new mxXmlRequest(this.redirectUri+"?getState=1",null,"GET").send(mxUtils.bind(this,(function(n){n.getStatus()>=200&&n.getStatus()<=299?this.authorizeStep2(n.getText(),e,i,t,r,s):null!=t&&t(n)})),t):window.parent.driveAuth(mxUtils.bind(this,(function(e){this.updateAuthInfo(e,!0,!0,i,t)})),t)},DriveClient.prototype.updateAuthInfo=function(i,t,r,s,n){if(e=i.access_token,delete i.access_token,i.expires=Date.now()+1e3*parseInt(i.expires_in),i.remember=t,this.resetTokenRefresh(i),this.authCalled=!0,r||null==this.user){var l=JSON.stringify(i);this.updateUser(mxUtils.bind(this,(function(){var e=JSON.parse(l);this.setPersistentToken(e,!t),null!=s&&s()})),n)}else null!=s&&(this.setPersistentToken(i,!t),s())},DriveClient.prototype.authorizeStep2=function(e,i,t,r,s,n){try{if(null!=this.ui.stateArg&&null!=this.ui.stateArg.userId&&(this.userId=this.ui.stateArg.userId,null!=this.user&&this.user.id!=this.userId&&(this.user=null)),null==this.userId){var l=JSON.parse(this.getPersistentToken(!0));l&&null!=l.current&&(this.userId=l.current.userId)}if(i&&null==this.userId)null!=r&&r();else if(i)new mxXmlRequest(this.redirectUri+"?state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname+"&token="+e)+"&userId="+this.userId,null,"GET").send(mxUtils.bind(this,(function(e){if(e.getStatus()>=200&&e.getStatus()<=299){var i=JSON.parse(e.getText());this.updateAuthInfo(i,!0,!1,t,r)}else 0!=e.getStatus()&&this.logout(),null!=r&&r(e)})),r);else{var o="https://accounts.google.com/o/oauth2/v2/auth?client_id="+this.clientId+"&redirect_uri="+encodeURIComponent(this.redirectUri)+"&response_type=code&include_granted_scopes=true"+(s?"&access_type=offline&prompt=consent%20select_account":"")+"&scope="+encodeURIComponent(this.scopes.join(" "))+"&state="+encodeURIComponent("cId="+this.clientId+"&domain="+window.location.hostname+"&token="+e+(this.sameWinRedirectUrl?"&redirect="+this.sameWinRedirectUrl:""));this.sameWinAuthMode?(window.location.assign(o),n=null):null==n?n=this.createAuthWin(o):n.location=o,null!=n?(window.onGoogleDriveCallback=mxUtils.bind(this,(function(e,i){window.onGoogleDriveCallback=null;try{null==e?null!=r&&r({message:mxResources.get("accessDenied")}):this.updateAuthInfo(e,s,!0,t,r)}catch(e){null!=r&&r(e)}finally{null!=i&&i.close()}})),n.focus()):null!=r&&r({message:mxResources.get("allowPopups")})}}catch(e){if(null==r)throw e;r(e)}},DriveClient.prototype.resetTokenRefresh=function(e){null!=this.tokenRefreshThread&&(window.clearTimeout(this.tokenRefreshThread),this.tokenRefreshThread=null),null!=e&&null==e.error&&e.expires_in>0&&(this.tokenRefreshInterval=1e3*parseInt(e.expires_in),this.lastTokenRefresh=(new Date).getTime(),this.tokenRefreshThread=window.setTimeout(mxUtils.bind(this,(function(){this.authorize(!0,mxUtils.bind(this,(function(){})),mxUtils.bind(this,(function(){})))})),900*e.expires_in))},DriveClient.prototype.checkToken=function(e){var i=this.lastTokenRefresh>0;(new Date).getTime()-this.lastTokenRefresh>this.tokenRefreshInterval||null==this.tokenRefreshThread?this.execute(mxUtils.bind(this,(function(){e(),i&&this.fireEvent(new mxEventObject("disconnected"))}))):e()},DriveClient.prototype.updateUser=function(i,t){try{var r={Authorization:"Bearer "+e};this.ui.editor.loadUrl("https://www.googleapis.com/oauth2/v2/userinfo?alt=json",mxUtils.bind(this,(function(e){var r=JSON.parse(e);this.executeRequest({url:"/about"},mxUtils.bind(this,(function(e){var t=mxResources.get("notAvailable"),s=t,n=null;null!=e&&null!=e.user&&(t=e.user.emailAddress,s=e.user.displayName,n=null!=e.user.picture?e.user.picture.url:null),this.setUser(new DrawioUser(r.id,t,s,n,r.locale)),this.userId=r.id,null!=i&&i()})),t)})),t,null,null,null,null,r)}catch(e){if(null==t)throw e;t(e)}},DriveClient.prototype.copyFile=function(e,i,t,r){null!=e&&null!=i&&this.executeRequest({url:"/files/"+e+"/copy?fields="+encodeURIComponent(this.allFields)+"&supportsAllDrives=true&enforceSingleParent=true",method:"POST",params:{title:i,properties:[{key:"channel",value:Editor.guid()}]}},t,r)},DriveClient.prototype.renameFile=function(e,i,t,r){null!=e&&null!=i&&this.executeRequest(this.createDriveRequest(e,{title:i}),t,r)},DriveClient.prototype.moveFile=function(e,i,t,r){null!=e&&null!=i&&this.executeRequest(this.createDriveRequest(e,{parents:[{kind:"drive#fileLink",id:i}]}),t,r)},DriveClient.prototype.createDriveRequest=function(e,i){return{url:"/files/"+e+"?uploadType=multipart&supportsAllDrives=true",method:"PUT",contentType:"application/json; charset=UTF-8",params:i}},DriveClient.prototype.getLibrary=function(e,i,t){return this.getFile(e,i,t,!0,!0)},DriveClient.prototype.loadDescriptor=function(e,i,t,r){this.executeRequest({url:"/files/"+e+"?supportsAllDrives=true&fields="+(null!=r?r:this.allFields)},i,t)},DriveClient.prototype.listFiles=function(e,i,t,r,s){this.executeRequest({url:"/files?supportsAllDrives=true&includeItemsFromAllDrives=true&q="+encodeURIComponent("(mimeType contains '"+this.xmlMimeType+"') "+(e?" and (title contains '"+e+"')":"")+(i?" and (modifiedDate > '"+i.toISOString()+"')":"")+(t?" and ('me' in owners)":""))+"&orderBy=modifiedDate desc,title"},r,s)},DriveClient.prototype.getCustomProperty=function(e,i){var t=e.properties,r=null;if(null!=t)for(var s=0;s<t.length;s++)if(t[s].key==i){r=t[s].value;break}return r},DriveClient.prototype.getFile=function(i,t,r,s,n){s=null!=s&&s,n=null!=n&&n,null!=urlParams.rev?this.executeRequest({url:"/files/"+i+"/revisions/"+urlParams.rev+"?supportsAllDrives=true"},mxUtils.bind(this,(function(e){e.title=e.originalFilename,e.headRevisionId=e.id,e.id=i,this.getXmlFile(e,t,r)})),r):this.loadDescriptor(i,mxUtils.bind(this,(function(i){try{if(null!=this.user){var l=/\.png$/i.test(i.title);if(/\.v(dx|sdx?)$/i.test(i.title)||/\.gliffy$/i.test(i.title)||!this.ui.useCanvasForExport&&l){var o=i.downloadUrl,a={Authorization:"Bearer "+e};this.ui.convertFile(o,i.title,i.mimeType,this.extension,t,r,null,a)}else s||n||i.mimeType==this.libraryMimeType||i.mimeType==this.xmlMimeType?this.getXmlFile(i,t,r,!0,n):this.getXmlFile(i,t,r)}else r({message:mxResources.get("loggedOut")})}catch(e){if(null==r)throw e;r(e)}})),r)},DriveClient.prototype.isGoogleRealtimeMimeType=function(e){return null!=e&&"application/vnd.jgraph.mxfile."==e.substring(0,30)},DriveClient.prototype.getXmlFile=function(i,t,r,s,n){try{var l={Authorization:"Bearer "+e},o=i.downloadUrl;if(null==o)null!=r&&r({message:mxResources.get("exportOptionsDisabledDetails")});else{var a=0,u=mxUtils.bind(this,(function(){this.ui.editor.loadUrl(o,mxUtils.bind(this,(function(e){try{if(null==e)r({message:mxResources.get("invalidOrMissingFile")});else if(i.mimeType==this.libraryMimeType||n)i.mimeType!=this.libraryMimeType||n?t(new DriveLibrary(this.ui,e,i)):r({message:mxResources.get("notADiagramFile")});else{var s=!1;if(/\.png$/i.test(i.title)){var l=e.lastIndexOf(",");if(l>0)if(null!=(a=this.ui.extractGraphModelFromPng(e))&&a.length>0)e=a;else try{var a=e.substring(l+1),u=!window.atob||mxClient.IS_IE||mxClient.IS_IE11?Base64.decode(a):atob(a),c=this.ui.editor.extractGraphModel(mxUtils.parseXml(u).documentElement,!0);null==c||c.getElementsByTagName("parsererror").length>0?s=!0:e=u}catch(e){s=!0}}else/\.pdf$/i.test(i.title)?null!=(a=Editor.extractGraphModelFromPdf(e))&&a.length>0&&(s=!0,e=a):"data:image/png;base64,PG14ZmlsZS"==e.substring(0,32)&&(u=e.substring(22),e=window.atob&&!mxClient.IS_SF?atob(u):Base64.decode(u));Graph.fileSupport&&(new XMLHttpRequest).upload&&this.ui.isRemoteFileFormat(e,o)?this.ui.parseFile(new Blob([e],{type:"application/octet-stream"}),mxUtils.bind(this,(function(e){try{4==e.readyState&&(e.status>=200&&e.status<=299?t(new LocalFile(this.ui,e.responseText,i.title+this.extension,!0)):null!=r&&r({message:mxResources.get("errorLoadingFile")}))}catch(e){if(null==r)throw e;r(e)}})),i.title):t(s?new LocalFile(this.ui,e,i.title,!0):new DriveFile(this.ui,e,i))}}catch(e){if(null==r)throw e;r(e)}})),mxUtils.bind(this,(function(e,i){if(a<this.maxRetries&&null!=i&&403==i.getStatus()){a++;var t=1+.1*(Math.random()-.5),s=2*a*this.coolOff*t;window.setTimeout(u,s)}else{if(null==r)throw e;r(e)}})),null!=i.mimeType&&"image/"==i.mimeType.substring(0,6)&&"image/svg"!=i.mimeType.substring(0,9)||/\.png$/i.test(i.title)||/\.jpe?g$/i.test(i.title)||/\.pdf$/i.test(i.title),null,null,null,l)}));u()}}catch(e){if(null==r)throw e;r(e)}},DriveClient.prototype.saveFile=function(e,i,t,r,s,n,l,o,a){try{var u=0;e.saveLevel=1;var c=mxUtils.bind(this,(function(i){if(null==r)throw i;r(i);try{if(!e.isConflict(i)){var t="sl_"+e.saveLevel+"-error_"+(e.getErrorMessage(i)||"unknown");null!=i&&null!=i.error&&null!=i.error.code&&(t+="-code_"+i.error.code),EditorUi.logEvent({category:"ERROR-SAVE-FILE-"+e.getHash()+"-rev_"+e.desc.headRevisionId+"-mod_"+e.desc.modifiedDate+"-size_"+e.getSize()+"-mime_"+e.desc.mimeType+(this.ui.editor.autosave?"":"-nosave")+(e.isAutosave()?"":"-noauto")+(e.changeListenerEnabled?"":"-nolisten")+(e.inConflictState?"-conflict":"")+(e.invalidChecksum?"-invalid":""),action:t,label:(null!=this.user?"user_"+this.user.id:"nouser")+(null!=e.sync?"-client_"+e.sync.clientId:"-nosync")})}}catch(e){}})),d=mxUtils.bind(this,(function(e){c(e);try{EditorUi.logError(e.message,null,null,e)}catch(e){}}));if(e.isEditable()&&null!=e.desc){var h=(new Date).getTime(),p=e.desc.etag,m=e.desc.modifiedDate,g=e.desc.headRevisionId,v=this.ui.useCanvasForExport&&/(\.png)$/i.test(e.getTitle());s=null!=s?s:"1"==urlParams.ignoremime,n=null!=n&&n;var f=null,w=!1,y={mimeType:e.desc.mimeType,title:e.getTitle()};this.isGoogleRealtimeMimeType(y.mimeType)?(y.mimeType=this.xmlMimeType,f=e.desc,i=!0,w=!0):("application/octet-stream"==y.mimeType||"1"==urlParams["override-mime"]&&y.mimeType!=this.xmlMimeType)&&(y.mimeType=this.xmlMimeType);var b=mxUtils.bind(this,(function(r,s,b){try{e.saveLevel=3,e.constructor==DriveFile&&(null==o&&(o=[]),null==e.getChannelId()&&o.push({key:"channel",value:Editor.guid(32)}),null==e.getChannelKey()&&o.push({key:"key",value:Editor.guid(32)}),o.push({key:"secret",value:null!=a?a:Editor.guid(32)})),b||(null!=r||n||(r=this.placeholderThumbnail,s=this.placeholderMimeType),null!=r&&null!=s&&(y.thumbnail={image:r,mimeType:s}));var x=e.getData(),T=mxUtils.bind(this,(function(r){try{if(e.saveDelay=(new Date).getTime()-h,e.saveLevel=11,null==r)c({message:mxResources.get("errorSavingFile")+": Empty response"});else{var s=new Date(r.modifiedDate).getTime()-new Date(m).getTime();if(s<=0||p==r.etag||i&&g==r.headRevisionId){e.saveLevel=12;var n=[];s<=0&&n.push("invalid modified time"),p==r.etag&&n.push("stale etag"),i&&g==r.headRevisionId&&n.push("stale revision");var l=n.join(", ");c({message:mxResources.get("errorSavingFile")+": "+l},r);try{EditorUi.logError("Critical: Error saving to Google Drive "+e.desc.id,null,"from-"+g+"."+m+"-"+this.ui.hashValue(p)+"-to-"+r.headRevisionId+"."+r.modifiedDate+"-"+this.ui.hashValue(r.etag)+(l.length>0?"-errors-"+l:""),"user-"+(null!=this.user?this.user.id:"nouser")+(null!=e.sync?"-client_"+e.sync.clientId:"-nosync"))}catch(e){}}else if(e.saveLevel=null,t(r,x),null!=f){this.executeRequest({url:"/files/"+f.id+"/revisions/"+f.headRevisionId+"?supportsAllDrives=true"},mxUtils.bind(this,mxUtils.bind(this,(function(e){e.pinned=!0,this.executeRequest({url:"/files/"+f.id+"/revisions/"+f.headRevisionId,method:"PUT",params:e})}))));try{EditorUi.logEvent({category:e.convertedFrom+"-CONVERT-FILE-"+e.getHash(),action:"from_"+f.id+"."+f.headRevisionId+"-to_"+e.desc.id+"."+e.desc.headRevisionId,label:null!=this.user?"user_"+this.user.id:"nouser"+(null!=e.sync?"-client_"+e.sync.clientId:"nosync")})}catch(e){}}}}catch(e){d(e)}})),D=mxUtils.bind(this,(function(t,s){e.saveLevel=4;try{null!=o&&(y.properties=o);var n=l||e.constructor!=DriveFile||"manual"!=DrawioFile.SYNC&&"auto"!=DrawioFile.SYNC?null:e.getCurrentEtag(),a=mxUtils.bind(this,(function(r){e.saveLevel=5;try{var l=e.desc.mimeType!=this.xmlMimeType&&e.desc.mimeType!=this.mimeType&&e.desc.mimeType!=this.libraryMimeType,o=!0,a=null;try{a=window.setTimeout(mxUtils.bind(this,(function(){o=!1,c({code:App.ERROR_TIMEOUT})})),5*this.ui.timeout)}catch(e){}this.executeRequest(this.createUploadRequest(e.getId(),y,t,i||r||l,s,r?null:n,w),mxUtils.bind(this,(function(e){window.clearTimeout(a),o&&T(e)})),mxUtils.bind(this,(function(i){if(window.clearTimeout(a),o){e.saveLevel=6;try{e.isConflict(i)?this.executeRequest({url:"/files/"+e.getId()+"?supportsAllDrives=true&fields="+this.catchupFields},mxUtils.bind(this,(function(t){e.saveLevel=7;try{if(null!=t&&t.etag==n)if(u<this.staleEtagMaxRetries){u++;var r=1+.1*(Math.random()-.5),s=2*u*this.coolOff*r;window.setTimeout(h,s),"1"==urlParams.test&&EditorUi.debug("DriveClient: Stale Etag Detected","retry",u,"delay",s)}else{h(!0);try{EditorUi.logEvent({category:"STALE-ETAG-SAVE-FILE-"+e.getHash(),action:"rev_"+e.desc.headRevisionId+"-mod_"+e.desc.modifiedDate+"-size_"+e.getSize()+"-mime_"+e.desc.mimeType+(this.ui.editor.autosave?"":"-nosave")+(e.isAutosave()?"":"-noauto")+(e.changeListenerEnabled?"":"-nolisten")+(e.inConflictState?"-conflict":"")+(e.invalidChecksum?"-invalid":""),label:(null!=this.user?"user_"+this.user.id:"nouser")+(null!=e.sync?"-client_"+e.sync.clientId:"-nosync")})}catch(e){}}else"1"==urlParams.test&&t.headRevisionId==g&&EditorUi.debug("DriveClient: Remote Etag Changed","local",n,"remote",t.etag,"rev",e.desc.headRevisionId,"response",[t],"file",[e]),c(i,t)}catch(e){d(e)}})),mxUtils.bind(this,(function(){c(i)}))):c(i)}catch(e){d(e)}}})))}catch(e){d(e)}})),h=mxUtils.bind(this,(function(i){if(e.saveLevel=9,i||null==n)a(i);else{var t=!0,r=null;try{r=window.setTimeout(mxUtils.bind(this,(function(){t=!1,c({code:App.ERROR_TIMEOUT})})),3*this.ui.timeout)}catch(e){}this.executeRequest({url:"/files/"+e.getId()+"?supportsAllDrives=true&fields="+this.catchupFields},mxUtils.bind(this,(function(s){if(window.clearTimeout(r),t){e.saveLevel=10;try{null!=s&&s.headRevisionId==g?("1"==urlParams.test&&n!=s.etag&&EditorUi.debug("DriveClient: Preflight Etag Update","from",n,"to",s.etag,"rev",e.desc.headRevisionId,"response",[s],"file",[e]),n=s.etag,a(i)):c({error:{code:412}},s)}catch(e){d(e)}}})),mxUtils.bind(this,(function(i){window.clearTimeout(r),t&&(e.saveLevel=11,c(i))})))}}));if(v&&null==r){e.saveLevel=8;var p=new Image;p.onload=mxUtils.bind(this,(function(){try{var e=this.thumbnailWidth/p.width,i=document.createElement("canvas");i.width=this.thumbnailWidth,i.height=Math.floor(p.height*e),i.getContext("2d").drawImage(p,0,0,i.width,i.height);var t=i.toDataURL();t=t.substring(t.indexOf(",")+1).replace(/\+/g,"-").replace(/\//g,"_"),y.thumbnail={image:t,mimeType:"image/png"},h(!1)}catch(e){try{h(!1)}catch(e){d(e)}}})),p.src="data:image/png;base64,"+t}else h(!1)}catch(e){d(e)}}));if(v){var k=this.ui.getPngFileProperties(this.ui.fileNode);this.ui.getEmbeddedPng(mxUtils.bind(this,(function(e){D(e,!0)})),c,this.ui.getCurrentFile()!=e?x:null,k.scale,k.border)}else D(x,!1)}catch(e){d(e)}}));try{e.saveLevel=2,(n||v||e.constructor==DriveLibrary||!this.enableThumbnails||"0"==urlParams.thumb||null!=y.mimeType&&"application/vnd.jgraph.mxfile"!=y.mimeType.substring(0,29)||!this.ui.getThumbnail(this.thumbnailWidth,mxUtils.bind(this,(function(e){try{var i=null;try{null!=e&&(i=e.toDataURL("image/png")),null!=i&&(i=i.length>this.maxThumbnailSize?null:i.substring(i.indexOf(",")+1).replace(/\+/g,"-").replace(/\//g,"_"))}catch(e){i=null}b(i,"image/png")}catch(e){d(e)}}))))&&b(null,null,e.constructor!=DriveLibrary)}catch(e){d(e)}}else this.ui.editor.graph.reset(),c({message:mxResources.get("readOnly")})}catch(e){d(e)}},DriveClient.prototype.insertFile=function(e,i,t,r,s,n,l){var o={mimeType:n=null!=n?n:this.xmlMimeType,title:e};null!=t&&(o.parents=[{kind:"drive#fileLink",id:t}]),this.executeRequest(this.createUploadRequest(null,o,i,!1,l),mxUtils.bind(this,(function(e){n==this.libraryMimeType?r(new DriveLibrary(this.ui,i,e)):0==e?null!=s&&s({message:mxResources.get("errorSavingFile")}):r(new DriveFile(this.ui,i,e))})),s)},DriveClient.prototype.createUploadRequest=function(e,i,t,r,s,n,l){s=null!=s&&s;var o="-------314159265358979323846",a="\r\n--"+o+"\r\n",u={"Content-Type":'multipart/mixed; boundary="'+o+'"'};null!=n&&(u["If-Match"]=n);var c={fullUrl:"https://content.googleapis.com/upload/drive/v2/files"+(null!=e?"/"+e:"")+"?uploadType=multipart&supportsAllDrives=true&enforceSingleParent=true&fields="+this.allFields,method:null!=e?"PUT":"POST",headers:u,params:a+"Content-Type: application/json\r\n\r\n"+JSON.stringify(i)+a+"Content-Type: application/octect-stream\r\nContent-Transfer-Encoding: base64\r\n\r\n"+(null!=t?s?t:!window.btoa||mxClient.IS_IE||mxClient.IS_IE11?Base64.encode(t):Graph.base64EncodeUnicode(t):"")+"\r\n---------314159265358979323846--"};return r||(c.fullUrl+="&newRevision=false"),l&&(c.fullUrl+="&pinned=true"),c},DriveClient.prototype.createLinkPicker=function(){var t="linkPicker",r=i[t];if(null==r||i[t+"Token"]!=e){i[t+"Token"]=e;var s=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setParent("root").setIncludeFolders(!0).setSelectFolderEnabled(!0),n=(new google.picker.DocsView).setIncludeFolders(!0).setSelectFolderEnabled(!0),l=(new google.picker.DocsView).setIncludeFolders(!0).setEnableDrives(!0).setSelectFolderEnabled(!0);r=(new google.picker.PickerBuilder).setAppId(this.appId).setLocale(mxLanguage).setOAuthToken(i[t+"Token"]).enableFeature(google.picker.Feature.SUPPORT_DRIVES).addView(s).addView(n).addView(l).addView(google.picker.ViewId.RECENTLY_PICKED)}return r},DriveClient.prototype.pickFile=function(t,r,s){this.filePickerCallback=null!=t?t:mxUtils.bind(this,(function(e){this.ui.loadFile("G"+e)})),this.filePicked=mxUtils.bind(this,(function(e){e.action==google.picker.Action.PICKED&&this.filePickerCallback(e.docs[0].id,e.docs[0])})),this.ui.spinner.spin(document.body,mxResources.get("authorizing"))&&this.execute(mxUtils.bind(this,(function(){try{this.ui.spinner.stop();var t=r?"genericPicker":"filePicker",n=mxUtils.bind(this,(function(e){"picker modal-dialog-bg picker-dialog-bg"==mxEvent.getSource(e).className&&(mxEvent.removeListener(document,"click",n),this[t].setVisible(!1),s&&s())}));if(null==i[t]||i[t+"Token"]!=e){i[t+"Token"]=e;var l=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setParent("root").setIncludeFolders(!0),o=(new google.picker.DocsView).setIncludeFolders(!0),a=(new google.picker.DocsView).setEnableDrives(!0).setIncludeFolders(!0),u=(new google.picker.DocsUploadView).setIncludeFolders(!0);if(r?(l.setMimeTypes("*/*"),o.setMimeTypes("*/*"),a.setMimeTypes("*/*")):(l.setMimeTypes(this.mimeTypes),o.setMimeTypes(this.mimeTypes),a.setMimeTypes(this.mimeTypes)),i[t]=(new google.picker.PickerBuilder).setOAuthToken(i[t+"Token"]).setLocale(mxLanguage).setAppId(this.appId).enableFeature(google.picker.Feature.SUPPORT_DRIVES).addView(l).addView(o).addView(a).addView(google.picker.ViewId.RECENTLY_PICKED).addView(u),urlParams.gPickerSize){var c=urlParams.gPickerSize.split(",");i[t]=i[t].setSize(c[0],c[1])}urlParams.topBaseUrl&&(i[t]=i[t].setOrigin(decodeURIComponent(urlParams.topBaseUrl))),i[t]=i[t].setCallback(mxUtils.bind(this,(function(e){e.action!=google.picker.Action.PICKED&&e.action!=google.picker.Action.CANCEL||(mxEvent.removeListener(document,"click",n),s&&e.action==google.picker.Action.CANCEL&&s()),e.action==google.picker.Action.PICKED&&this.filePicked(e)}))).build()}mxEvent.addListener(document,"click",n),i[t].setVisible(!0)}catch(e){this.ui.spinner.stop(),this.ui.handleError(e)}})))},DriveClient.prototype.pickFolder=function(t,r){this.folderPickerCallback=t;var s=mxUtils.bind(this,(function(){try{this.ui.spinner.spin(document.body,mxResources.get("authorizing"))&&this.execute(mxUtils.bind(this,(function(){try{this.ui.spinner.stop();var t="folderPicker",r=mxUtils.bind(this,(function(e){"picker modal-dialog-bg picker-dialog-bg"==mxEvent.getSource(e).className&&(mxEvent.removeListener(document,"click",r),i[t].setVisible(!1))}));if(null==i[t]||i[t+"Token"]!=e){i[t+"Token"]=e;var s=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setParent("root").setIncludeFolders(!0).setSelectFolderEnabled(!0).setMimeTypes("application/vnd.google-apps.folder"),n=(new google.picker.DocsView).setIncludeFolders(!0).setSelectFolderEnabled(!0).setMimeTypes("application/vnd.google-apps.folder"),l=(new google.picker.DocsView).setIncludeFolders(!0).setEnableDrives(!0).setSelectFolderEnabled(!0).setMimeTypes("application/vnd.google-apps.folder");if(i[t]=(new google.picker.PickerBuilder).setSelectableMimeTypes("application/vnd.google-apps.folder").setOAuthToken(i[t+"Token"]).setLocale(mxLanguage).setAppId(this.appId).enableFeature(google.picker.Feature.SUPPORT_DRIVES).addView(s).addView(n).addView(l).addView(google.picker.ViewId.RECENTLY_PICKED).setTitle(mxResources.get("pickFolder")),urlParams.gPickerSize){var o=urlParams.gPickerSize.split(",");i[t]=i[t].setSize(o[0],o[1])}urlParams.topBaseUrl&&(i[t]=i[t].setOrigin(decodeURIComponent(urlParams.topBaseUrl))),i[t]=i[t].setCallback(mxUtils.bind(this,(function(e){e.action!=google.picker.Action.PICKED&&e.action!=google.picker.Action.CANCEL||mxEvent.removeListener(document,"click",r),this.folderPickerCallback(e)}))).build()}mxEvent.addListener(document,"click",r),i[t].setVisible(!0)}catch(e){this.ui.spinner.stop(),this.ui.handleError(e)}})))}catch(e){this.ui.handleError(e)}}));r?s():this.ui.confirm(mxResources.get("useRootFolder"),mxUtils.bind(this,(function(){this.folderPickerCallback({action:google.picker.Action.PICKED,docs:[{type:"folder",id:"root"}]})})),mxUtils.bind(this,(function(){s()})),mxResources.get("yes"),mxResources.get("noPickFolder")+"...",!0)},DriveClient.prototype.pickLibrary=function(t){this.filePickerCallback=t,this.filePicked=mxUtils.bind(this,(function(e){e.action==google.picker.Action.PICKED?this.filePickerCallback(e.docs[0].id):e.action==google.picker.Action.CANCEL&&null==this.ui.getCurrentFile()&&this.ui.showSplash()})),this.ui.spinner.spin(document.body,mxResources.get("authorizing"))&&this.execute(mxUtils.bind(this,(function(){try{this.ui.spinner.stop();var t=mxUtils.bind(this,(function(e){"picker modal-dialog-bg picker-dialog-bg"==mxEvent.getSource(e).className&&(mxEvent.removeListener(document,"click",t),i.libraryPicker.setVisible(!1))}));if(null==i.libraryPicker||i.libraryPickerToken!=e){i.libraryPickerToken=e;var r=new google.picker.DocsView(google.picker.ViewId.FOLDERS).setParent("root").setIncludeFolders(!0).setMimeTypes(this.libraryMimeType+",application/xml,text/plain,application/octet-stream"),s=(new google.picker.DocsView).setIncludeFolders(!0).setMimeTypes(this.libraryMimeType+",application/xml,text/plain,application/octet-stream"),n=(new google.picker.DocsView).setEnableDrives(!0).setIncludeFolders(!0).setMimeTypes(this.libraryMimeType+",application/xml,text/plain,application/octet-stream"),l=(new google.picker.DocsUploadView).setIncludeFolders(!0);if(i.libraryPicker=(new google.picker.PickerBuilder).setOAuthToken(i.libraryPickerToken).setLocale(mxLanguage).setAppId(this.appId).enableFeature(google.picker.Feature.SUPPORT_DRIVES).addView(r).addView(s).addView(n).addView(google.picker.ViewId.RECENTLY_PICKED).addView(l),urlParams.gPickerSize){var o=urlParams.gPickerSize.split(",");i.libraryPicker=i.libraryPicker.setSize(o[0],o[1])}urlParams.topBaseUrl&&(i.libraryPicker=i.libraryPicker.setOrigin(decodeURIComponent(urlParams.topBaseUrl))),i.libraryPicker=i.libraryPicker.setCallback(mxUtils.bind(this,(function(e){e.action!=google.picker.Action.PICKED&&e.action!=google.picker.Action.CANCEL||mxEvent.removeListener(document,"click",t),e.action==google.picker.Action.PICKED&&this.filePicked(e)}))).build()}mxEvent.addListener(document,"click",t),i.libraryPicker.setVisible(!0)}catch(e){this.ui.spinner.stop(),this.ui.handleError(e)}})))},DriveClient.prototype.showPermissions=function(i){var t=mxUtils.bind(this,(function(){var e=new ConfirmDialog(this.ui,mxResources.get("googleSharingNotAvailable"),mxUtils.bind(this,(function(){this.ui.editor.graph.openLink("https://drive.google.com/open?id="+i)})),null,mxResources.get("open"),null,null,null,null,IMAGE_PATH+"/google-share.png");this.ui.showDialog(e.container,360,190,!0,!0),e.init()}));this.sharingFailed?t():this.checkToken(mxUtils.bind(this,(function(){try{var r=new gapi.drive.share.ShareClient(this.appId);r.setOAuthToken(e),r.setItemIds([i]),r.showSettingsDialog(),"MutationObserver"in window&&(null!=this.sharingObserver&&(this.sharingObserver.disconnect(),this.sharingObserver=null),this.sharingObserver=new MutationObserver(mxUtils.bind(this,(function(e){for(var i=!1,r=0;r<e.length;r++)for(var s=0;s<e[r].addedNodes.length;s++){var n=e[r].addedNodes[s];"BUTTON"==n.nodeName&&"ok"==n.getAttribute("name")&&null!=n.parentNode&&null!=n.parentNode.parentNode&&"dialog"==n.parentNode.parentNode.getAttribute("role")?(this.sharingFailed=!0,n.click(),t(),i=!0):"DIV"==n.nodeName&&"shr-q-shr-r-shr-xb"==n.className&&(i=!0)}i&&(this.sharingObserver.disconnect(),this.sharingObserver=null)}))),this.sharingObserver.observe(document,{childList:!0,subtree:!0}))}catch(e){this.ui.handleError(e)}})))},DriveClient.prototype.clearPersistentToken=function(){var e=JSON.parse(this.getPersistentToken(!0))||{};for(var i in delete e.current,delete e[this.userId],e){e.current={userId:i,expires:0};break}DrawioClient.prototype.setPersistentToken.call(this,JSON.stringify(e))},DriveClient.prototype.setPersistentToken=function(e,i){var t=JSON.parse(this.getPersistentToken(!0))||{};e.userId=this.userId,t.current=e,t[this.userId]={user:this.user},DrawioClient.prototype.setPersistentToken.call(this,JSON.stringify(t),i)}}();
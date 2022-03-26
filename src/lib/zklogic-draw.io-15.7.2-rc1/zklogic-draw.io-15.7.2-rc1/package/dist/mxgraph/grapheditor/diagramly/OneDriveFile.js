OneDriveFile=function(e,t,i){DrawioFile.call(this,e,t),this.meta=i},mxUtils.extend(OneDriveFile,DrawioFile),OneDriveFile.prototype.autosaveDelay=300,OneDriveFile.prototype.share=function(){if(t=(t=this.meta.webUrl).substring(0,t.lastIndexOf("/")),null!=this.meta.parentReference)try{if("personal"==this.meta.parentReference.driveType)t="https://onedrive.live.com/?cid="+encodeURIComponent(this.meta.parentReference.driveId)+"&id="+encodeURIComponent(this.meta.id);else if("documentLibrary"==this.meta.parentReference.driveType){var e=this.meta.parentReference.path;e=e.substring(e.indexOf("/root:")+6),t=(t=(i=this.meta.webUrl).substring(0,i.length-e.length-this.meta.name.length-(e.length>0?1:0)))+"/Forms/AllItems.aspx?id="+(i=i.substring(i.indexOf("/",8)))+"&parent="+i.substring(0,i.lastIndexOf("/"))}else if("business"==this.meta.parentReference.driveType){var t,i,n=(t=this.meta["@microsoft.graph.downloadUrl"]).indexOf("/_layouts/15/download.aspx?"),s=i=this.meta.webUrl;i=(i=i.substring(8)).substring(i.indexOf("/")),s=(s=s.substring(0,s.lastIndexOf("/"))).substring(s.indexOf("/",8)),t=t.substring(0,n)+"/_layouts/15/onedrive.aspx?id="+i+"&parent="+s}}catch(e){}this.ui.editor.graph.openLink(t)},OneDriveFile.prototype.getId=function(){return this.getIdOf(this.meta)},OneDriveFile.prototype.getParentId=function(){return this.getIdOf(this.meta,!0)},OneDriveFile.prototype.getIdOf=function(e,t){return(null!=e.parentReference&&null!=e.parentReference.driveId?e.parentReference.driveId+"/":"")+(null!=t?e.parentReference.id:e.id)},OneDriveFile.prototype.getChannelId=function(){return"W-"+DrawioFile.prototype.getChannelId.apply(this,arguments)},OneDriveFile.prototype.getHash=function(){return"W"+encodeURIComponent(this.getId())},OneDriveFile.prototype.getMode=function(){return App.MODE_ONEDRIVE},OneDriveFile.prototype.isAutosaveOptional=function(){return!0},OneDriveFile.prototype.getTitle=function(){return this.meta.name},OneDriveFile.prototype.isRenamable=function(){return!0},OneDriveFile.prototype.isOptimisticSync=function(){return!0},OneDriveFile.prototype.isSyncSupported=function(){return!0},OneDriveFile.prototype.getSize=function(){return this.meta.size},OneDriveFile.prototype.isConflict=function(e){return null!=e&&(412==e.getStatus()||409==e.getStatus())},OneDriveFile.prototype.getCurrentUser=function(){return null!=this.ui.oneDrive?this.ui.oneDrive.user:null},OneDriveFile.prototype.loadDescriptor=function(e,t){this.ui.oneDrive.executeRequest(this.ui.oneDrive.getItemURL(this.getId()),mxUtils.bind(this,(function(i){i.getStatus()>=200&&i.getStatus()<=299?e(JSON.parse(i.getText())):null!=t&&t()})),t)},OneDriveFile.prototype.getLatestVersion=function(e,t){this.ui.oneDrive.getFile(this.getId(),e,t)},OneDriveFile.prototype.getDescriptor=function(){return this.meta},OneDriveFile.prototype.setDescriptor=function(e){this.meta=e},OneDriveFile.prototype.getDescriptorEtag=function(e){return e.eTag},OneDriveFile.prototype.setDescriptorEtag=function(e,t){e.eTag=t},OneDriveFile.prototype.loadPatchDescriptor=function(e,t){var i=this.ui.oneDrive.getItemURL(this.getId());this.ui.oneDrive.executeRequest(i+"?select=etag,file",mxUtils.bind(this,(function(i){i.getStatus()>=200&&i.getStatus()<=299?e(JSON.parse(i.getText())):t(this.ui.oneDrive.parseRequestText(i))})),t)},OneDriveFile.prototype.getChannelKey=function(){return"undefined"!=typeof CryptoJS?CryptoJS.MD5(this.meta.createdDateTime+(null!=this.meta.createdBy&&null!=this.meta.createdBy.user?this.meta.createdBy.user.id:"")).toString():null},OneDriveFile.prototype.getLastModifiedDate=function(){return new Date(this.meta.lastModifiedDateTime)},OneDriveFile.prototype.save=function(e,t,i,n,s){this.doSave(this.getTitle(),e,t,i,n,s)},OneDriveFile.prototype.saveAs=function(e,t,i){this.doSave(e,!1,t,i)},OneDriveFile.prototype.doSave=function(e,t,i,n,s,r){var o=this.meta.name;this.meta.name=e,DrawioFile.prototype.save.apply(this,[null,mxUtils.bind(this,(function(){this.meta.name=o,this.saveFile(e,t,i,n,s,r)})),n,s,r])},OneDriveFile.prototype.saveFile=function(e,t,i,n,s,r){if(this.isEditable()){if(!this.savingFile)if(this.getTitle()==e){var o=mxUtils.bind(this,(function(){try{this.savingFileTime=new Date,this.setShadowModified(!1),this.savingFile=!0;var e=r||this.constructor!=OneDriveFile||"manual"!=DrawioFile.SYNC&&"auto"!=DrawioFile.SYNC?null:this.getCurrentEtag(),t=this.meta;this.fileSaving(),this.ui.oneDrive.saveFile(this,mxUtils.bind(this,(function(e,s){this.setModified(this.getShadowModified()),this.savingFile=!1,this.meta=e,this.fileSaved(s,t,mxUtils.bind(this,(function(){this.contentChanged(),null!=i&&i()})),n)})),mxUtils.bind(this,(function(e,t){try{this.savingFile=!1,this.isConflict(t)?(this.inConflictState=!0,null!=this.sync?(this.savingFile=!0,this.sync.fileConflict(null,mxUtils.bind(this,(function(){window.setTimeout(mxUtils.bind(this,(function(){this.updateFileData(),o()})),100+500*Math.random())})),mxUtils.bind(this,(function(){this.savingFile=!1,null!=n&&n()})))):null!=n&&n()):null!=n&&n(e)}catch(e){if(this.savingFile=!1,null==n)throw e;n(e)}})),e)}catch(e){if(this.savingFile=!1,null==n)throw e;n(e)}}));o()}else this.savingFileTime=new Date,this.setShadowModified(!1),this.savingFile=!0,this.ui.oneDrive.insertFile(e,this.getData(),mxUtils.bind(this,(function(e){this.setModified(this.getShadowModified()),this.savingFile=!1,null!=i&&i(),this.ui.fileLoaded(e)})),mxUtils.bind(this,(function(){this.savingFile=!1,null!=n&&n()})))}else null!=i&&i()},OneDriveFile.prototype.rename=function(e,t,i){var n=this.getCurrentEtag();this.ui.oneDrive.renameFile(this,e,mxUtils.bind(this,(function(s){this.hasSameExtension(e,this.getTitle())?(this.meta=s,this.descriptorChanged(),null!=this.sync&&this.sync.descriptorChanged(n),null!=t&&t(s)):(this.meta=s,null!=this.sync&&this.sync.descriptorChanged(n),this.save(!0,t,i))})),i)},OneDriveFile.prototype.move=function(e,t,i){this.ui.oneDrive.moveFile(this.getId(),e,mxUtils.bind(this,(function(e){this.meta=e,this.descriptorChanged(),null!=t&&t(e)})),i)};
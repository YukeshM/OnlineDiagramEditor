NotionFile=function(i,t,e){DrawioFile.call(this,i,t),this.meta=e,this.peer=this.ui.notion},mxUtils.extend(NotionFile,DrawioFile),NotionFile.prototype.getId=function(){return this.meta.id},NotionFile.prototype.getHash=function(){return encodeURIComponent("N"+this.getId())},NotionFile.prototype.getMode=function(){return App.MODE_NOTION},NotionFile.prototype.isAutosave=function(){return!1},NotionFile.prototype.getTitle=function(){return this.meta.name},NotionFile.prototype.getNameField=function(){return this.meta.nameField},NotionFile.prototype.isRenamable=function(){return!1},NotionFile.prototype.isCompressedStorage=function(){return!0},NotionFile.prototype.save=function(i,t,e,o,n){this.doSave(this.getTitle(),t,e,o,n)},NotionFile.prototype.saveAs=function(i,t,e){this.doSave(i,t,e)},NotionFile.prototype.doSave=function(i,t,e,o,n){var s=this.meta.name;this.meta.name=i,DrawioFile.prototype.save.apply(this,[null,mxUtils.bind(this,(function(){this.meta.name=s,this.saveFile(i,!1,t,e,o,n)})),e,o,n])},NotionFile.prototype.saveFile=function(i,t,e,o,n,s){if(this.isEditable())if(this.savingFile)null!=o&&o({code:App.ERROR_BUSY});else if(this.getTitle()==i)try{this.savingFileTime=new Date,this.setShadowModified(!1),this.savingFile=!0,this.data,this.peer.saveFile(this,mxUtils.bind(this,(function(){this.setModified(this.getShadowModified()),this.savingFile=!1,null!=e&&e()})),mxUtils.bind(this,(function(i){this.savingFile=!1,null!=o&&o(i)})),s)}catch(i){if(this.savingFile=!1,null==o)throw i;o(i)}else this.savingFileTime=new Date,this.setShadowModified(!1),this.savingFile=!0,this.ui.pickFolder(this.getMode(),mxUtils.bind(this,(function(t){this.peer.insertFile(i,this.getData(),mxUtils.bind(this,(function(i){this.setModified(this.getShadowModified()),this.savingFile=!1,null!=e&&e(),this.ui.fileLoaded(i)})),mxUtils.bind(this,(function(){this.savingFile=!1,null!=o&&o()})),!1,t)})));else null!=e&&e()};
TrelloFile=function(e,t,i){DrawioFile.call(this,e,t),this.meta=i,this.saveNeededCounter=0},mxUtils.extend(TrelloFile,DrawioFile),TrelloFile.prototype.getHash=function(){return"T"+encodeURIComponent(this.meta.compoundId)},TrelloFile.prototype.getMode=function(){return App.MODE_TRELLO},TrelloFile.prototype.isAutosave=function(){return!0},TrelloFile.prototype.getTitle=function(){return this.meta.name},TrelloFile.prototype.isRenamable=function(){return!1},TrelloFile.prototype.getSize=function(){return this.meta.bytes},TrelloFile.prototype.save=function(e,t,i){this.doSave(this.getTitle(),t,i)},TrelloFile.prototype.saveAs=function(e,t,i){this.doSave(e,t,i)},TrelloFile.prototype.doSave=function(e,t,i){var l=this.meta.name;this.meta.name=e,DrawioFile.prototype.save.apply(this,[null,mxUtils.bind(this,(function(){this.meta.name=l,this.saveFile(e,!1,t,i)})),i])},TrelloFile.prototype.saveFile=function(e,t,i,l){this.isEditable()?this.savingFile?null!=l&&(this.saveNeededCounter++,l({code:App.ERROR_BUSY})):(this.savingFileTime=new Date,this.setShadowModified(!1),this.savingFile=!0,this.getTitle()==e?this.ui.trello.saveFile(this,mxUtils.bind(this,(function(s){this.setModified(this.getShadowModified()),this.savingFile=!1,this.meta=s,this.contentChanged(),null!=i&&i(),this.saveNeededCounter>0&&(this.saveNeededCounter--,this.saveFile(e,t,i,l))})),mxUtils.bind(this,(function(e){this.savingFile=!1,null!=l&&l(e)}))):this.ui.pickFolder(App.MODE_TRELLO,mxUtils.bind(this,(function(s){this.ui.trello.insertFile(e,this.getData(),mxUtils.bind(this,(function(s){this.savingFile=!1,null!=i&&i(),this.ui.fileLoaded(s),this.saveNeededCounter>0&&(this.saveNeededCounter--,this.saveFile(e,t,i,l))})),mxUtils.bind(this,(function(){this.savingFile=!1,null!=l&&l()})),!1,s)})))):null!=i&&i()};
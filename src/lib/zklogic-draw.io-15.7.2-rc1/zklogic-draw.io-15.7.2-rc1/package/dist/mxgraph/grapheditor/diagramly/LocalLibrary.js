LocalLibrary=function(t,o,a){LocalFile.call(this,t,o,a)},mxUtils.extend(LocalLibrary,LocalFile),LocalLibrary.prototype.getHash=function(){return"F"+this.getTitle()},LocalLibrary.prototype.isAutosave=function(){return!1},LocalLibrary.prototype.saveAs=function(t,o,a){this.saveFile(t,!1,o,a)},LocalLibrary.prototype.updateFileData=function(){},LocalLibrary.prototype.open=function(){};
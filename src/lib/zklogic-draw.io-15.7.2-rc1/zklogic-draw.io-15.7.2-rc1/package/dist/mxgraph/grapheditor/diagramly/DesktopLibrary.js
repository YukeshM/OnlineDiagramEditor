DesktopLibrary=function(t,e,o){LocalLibrary.call(this,t,e,o.name),this.fileObj=o},mxUtils.extend(DesktopLibrary,LocalLibrary),DesktopLibrary.prototype.getHash=function(){return"S"+encodeURIComponent(this.fileObj.path)},DesktopLibrary.prototype.save=function(t,e,o){LocalFile.prototype.saveFile.apply(this,arguments)};
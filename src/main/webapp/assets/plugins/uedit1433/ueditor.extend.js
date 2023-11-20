$(function(){
	UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
	UE.Editor.prototype.getActionUrl = function(action) {
	    if (action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage') {
	        return contextPath+'/v1/file/uefileUpload';
	    }  else {
	        return this._bkGetActionUrl.call(this, action);
	    }
	}
});
module.exports={
	response:function(status=true,message="",value=""){
		var data = {Status:status,
		Message:message,
		Value:value};
		return data;
	},
	isParameter: function (obj, paramlist) {
		if(!Array.isArray(paramlist)){
			throw "checkProps must be a array.";
		}
		obj=JSON.parse(JSON.stringify(obj));
		var missParam=[];
		for (var i = 0; i < paramlist.length; i++) {
			if(!obj.hasOwnProperty(paramlist[i])){
				missParam.push(paramlist[i]);
			} else if(!obj[paramlist[i]]){
				missParam.push(paramlist[i]);
			}
		}
		return missParam;
	}
}

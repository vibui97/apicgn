var crypto = require("crypto");
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
	},
	encrypt: function(key, data) {
        var cipher = crypto.createCipher('aes-256-cbc', key);
        var crypted = cipher.update(data, 'utf-8', 'hex');
        crypted += cipher.final('hex');

        return crypted;
	},

	descrypt: function(key, data) {
        var decipher = crypto.createDecipher('aes-256-cbc', key);
        var decrypted = decipher.update(data, 'hex', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
	}
}

define(["lib", "knockout", "koExtensions"], function(lib, ko){
	function ViewModel(){
		this.encode = new function(){
			this.privateKey = ko.observable("").extend({validBase58:"The private key cannot contain the letters 0,O,l or I"});
			
			this.secretKey = ko.computed(function(){
				return lib.encode(lib.random(this.privateKey().length));
			}, this);
			
			this.sharedKey = ko.computed(function(){
				return lib.encode(lib.encrypt(lib.decode(this.privateKey()), lib.decode(this.secretKey())));
			}, this);
		};
		this.decode = new function(){
			this.sharedKey = ko.observable("").extend({validBase58:"The shared key cannot contain the letters 0,O,l or I"});
			
			this.secretKey = ko.observable("").extend({validBase58:"The secret key cannot contain the letters 0,O,l or I"});
			
			this.privateKey = ko.computed(function(){
				return lib.encode(lib.decrypt(lib.decode(this.sharedKey()), lib.decode(this.secretKey())));
			}, this);
		}
	}
	
	return ViewModel;
});
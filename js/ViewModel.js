define(["lib", "knockout"], function(lib, ko){
	function ViewModel(){
		this.encode = new function(){
			this.privateKey = ko.observable("").extend({validBase58:"cannot contain the letters 0,O,l or I"});
			
			this.secretKey = ko.computed(function(){
				return lib.encode(lib.random(this.privateKey().length));
			}, this);
			
			this.sharedKey = ko.computed(function(){
				return lib.encode(lib.xor(lib.decode(this.privateKey()), lib.decode(this.secretKey())));
			}, this);
		};
		this.decode = new function(){
			this.sharedKey = ko.observable("").extend({validBase58:"cannot contain the letters 0,O,l or I"});
			
			this.secretKey = ko.observable("").extend({validBase58:"cannot contain the letters 0,O,l or I"});
			
			this.privateKey = ko.computed(function(){
				return lib.encode(lib.xor(lib.decode(this.sharedKey()), lib.decode(this.secretKey())));
			}, this);
		}
	}
	
	return ViewModel;
});
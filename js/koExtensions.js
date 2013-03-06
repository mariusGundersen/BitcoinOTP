define(["knockout"], function(ko){
	ko.extenders.validBase58 = function(target, message) {
		var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
		
		var validator = {
			isValid: ko.observable(true),
			message: ko.observable("")
		};
		
		//create a writeable computed observable to intercept writes to our observable
		var result = ko.computed({
			read: target,  //always return the original observables value
			write: function(newValue) {
				var current = target();
				
				
				var valid = newValue.split("").every(function(v){
					return alphabet.indexOf(v) >= 0;
				});
				
				
				//only write if it is valid
				if (valid) {
					validator.isValid(true);
					validator.message("");
					target(newValue);
				}else{
					validator.isValid(false);
					validator.message(message);
				}
			}
		});
 
		//initialize with current value to make sure it is rounded appropriately
		result(target());
		
		result.validator = validator;
 
		//return the new computed observable
		return result;
	};
});
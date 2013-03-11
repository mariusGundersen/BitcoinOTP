require(["ViewModel", "lib"], function(ViewModel, lib){
	describe("the viemodel", function(){
		
		var vm;
		
		beforeEach(function(){
			vm = new ViewModel();
		});
		
		describe("when encoding", function(){
		
			it("should always have a secret with the same length as the private key", function(){
				vm.encode.privateKey("ab");
				expect(vm.encode.secretKey().length).toBe(2);
				vm.encode.privateKey("abcdef");
				expect(vm.encode.secretKey().length).toBe(6);
				vm.encode.privateKey("a");
				expect(vm.encode.secretKey().length).toBe(1);
			});
			
			it("should produce a shareKey with the same length as the private key", function(){
				vm.encode.privateKey("ab");
				expect(vm.encode.sharedKey().length).toBe(2);
				vm.encode.privateKey("abcdef");
				expect(vm.encode.sharedKey().length).toBe(6);
				vm.encode.privateKey("a");
				expect(vm.encode.sharedKey().length).toBe(1);
			});
			
			it("should be invalid if the private key contains 0,O,I or l", function(){
				vm.encode.privateKey("O");
				expect(vm.encode.privateKey.validator.isValid()).toBe(false);
				vm.encode.privateKey("0");
				expect(vm.encode.privateKey.validator.isValid()).toBe(false);
				vm.encode.privateKey("I");
				expect(vm.encode.privateKey.validator.isValid()).toBe(false);
				vm.encode.privateKey("l");
				expect(vm.encode.privateKey.validator.isValid()).toBe(false);
			});
		});
		
		describe("when decoding", function(){
		
			it("should decode correctly", function(){
				vm.decode.secretKey("ab");
				vm.decode.sharedKey("12")
				expect(vm.decode.privateKey()).toBe("RR");
			});
			
			it("should be invalid if the secret key contains 0,O,I or l", function(){
				vm.decode.secretKey("O");
				expect(vm.decode.secretKey.validator.isValid()).toBe(false);
				vm.decode.secretKey("0");
				expect(vm.decode.secretKey.validator.isValid()).toBe(false);
				vm.decode.secretKey("I");
				expect(vm.decode.secretKey.validator.isValid()).toBe(false);
				vm.decode.secretKey("l");
				expect(vm.decode.secretKey.validator.isValid()).toBe(false);
			});
			
			it("should be invalid if the shared key contains 0,O,I or l", function(){
				vm.decode.sharedKey("O");
				expect(vm.decode.sharedKey.validator.isValid()).toBe(false);
				vm.decode.sharedKey("0");
				expect(vm.decode.sharedKey.validator.isValid()).toBe(false);
				vm.decode.sharedKey("I");
				expect(vm.decode.sharedKey.validator.isValid()).toBe(false);
				vm.decode.sharedKey("l");
				expect(vm.decode.sharedKey.validator.isValid()).toBe(false);
			});
			
		});
	});
});
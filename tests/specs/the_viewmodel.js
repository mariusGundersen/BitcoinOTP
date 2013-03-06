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
		});
		
		describe("when decoding", function(){
		
			it("should decode correctly", function(){
				vm.decode.secretKey("ab");
				vm.decode.sharedKey("12")
				expect(vm.decode.privateKey()).toBe("ac");
			});
			
		});
	});
});
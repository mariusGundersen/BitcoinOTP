require(["lib"], function(lib){
	describe("the library", function(){
		it("should encode a list of numbers correctly", function(){
			expect(lib.encode([0])).toBe("1");
			expect(lib.encode([0, 1, 2])).toBe("123");
			expect(lib.encode([9, 10, 11])).toBe("abc");
			expect(lib.encode([57,56,55])).toBe("ZYX");
		});
		it("should decode a string to a list of numbers correctly", function(){
			expect(lib.decode("1")).toEqual([0]);
			expect(lib.decode("123")).toEqual([0, 1, 2]);
			expect(lib.decode("abc")).toEqual([9, 10, 11]);
			expect(lib.decode("ZYX")).toEqual([57,56,55]);
			expect(lib.decode("0IlO")).toEqual([-1,-1,-1,-1]);
		});
		it("should produce a random list of digits", function(){
			expect(lib.random(5).length).toBe(5);
		});
		it("should encrypt two lists of numbers", function(){
			expect(lib.encrypt([0], [0])).toEqual([0]);
			expect(lib.encrypt([0, 57], [0, 2])).toEqual([0, 1]);
			expect(lib.encrypt([37, 57], [20, 57])).toEqual([57, 56]);
			expect(lib.encrypt([33], [12])).toEqual([45]);
		});
		it("should decrypt encryption correctly", function(){
			expect(lib.decrypt(lib.encrypt([0], [0]), [0])).toEqual([0]);
			expect(lib.decrypt(lib.encrypt([0, 57], [0, 2]), [0, 2])).toEqual([0, 57]);
			expect(lib.decrypt(lib.encrypt([37, 57], [20, 57]), [20, 57])).toEqual([37, 57]);
			expect(lib.decrypt(lib.encrypt([33], [12]), [12])).toEqual([33]);
		});
		
		it("should evenly encrypt data", function(){
			var out = [];
			for(var i=0; i<58; i++){
					out[i] = 0;
			}
			for(var a = 0; a<58; a++){
				for(var b = 0; b<58; b++){
					out[lib.encrypt([a], [b])[0]]++;
				}
			}
			expect(out.every(function(n){
				return n == 58; 
			})).toBe(true);
		});
		it("should evenly decrypt data", function(){
			var out = [];
			for(var i=0; i<58; i++){
					out[i] = 0;
			}
			for(var a = 0; a<58; a++){
				for(var b = 0; b<58; b++){
					out[lib.decrypt([a], [b])[0]]++;
				}
			}
			expect(out.every(function(n){
				return n == 58; 
			})).toBe(true);
		});
	});
});
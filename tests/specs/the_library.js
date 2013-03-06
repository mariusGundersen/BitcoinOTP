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
		it("should xor two lists of numbers", function(){
			expect(lib.xor([0], [0])).toEqual([0]);
			expect(lib.xor([0, 57], [0, 2])).toEqual([0, 1]);
			expect(lib.xor([37, 57], [20, 57])).toEqual([49, 0]);
			expect(lib.xor([33], [12])).toEqual([45]);
		});
	});
});
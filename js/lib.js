define([], function(){
	var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
	var base_count = alphabet.length;


	function encode(nums){
		return nums.map(function(n){
			if(n<0 || n>=base_count) throw new Error(n + " is outside the range 0<=n<=" + base_count);
			return alphabet.charAt(n);
		}).join("");
	}

	function decode(s){
			return s.split("").map(function(c){
				return alphabet.indexOf(c);
			});
	}

	function random(digits){
		var random = [];
		for(var i=0; i<digits; i++){
			random[i] = Math.floor(Math.random()*base_count);
		}
		return random;
	}

	function xor(a, b){
			return a.map(function(n, i){
				return (n ^ b[i])%base_count;
			});
	}
	
	return {
		encode: encode,
		decode: decode,
		random: random,
		xor: xor
	};

});
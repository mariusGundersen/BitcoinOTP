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
		//shuffle the random numbers, to get rid of prng dependency
		for(var i=digits - 1; i>0; i--){
			var n = Math.floor(Math.random()*(i + 1))
			var temp = random[i];
			random[i] = random[n];
			random[n] = temp;
		}
		return random;
	}

	function encrypt(a, b){
			return a.map(function(n, i){
				return (n + b[i])%base_count;
			});
	}
	function decrypt(a, b){
			return a.map(function(n, i){
				var out = (n - b[i]);
				while(out < 0) out += base_count;
				return out;
			});
	}
	
	return {
		encode: encode,
		decode: decode,
		random: random,
		encrypt: encrypt,
		decrypt: decrypt
	};

});
define([], function(){
	var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
	var base_count = alphabet.length;


	function encode(num){
			var encode = "";
			if(num < 0){
					return "";
			}
			while(num >= base_count){
					var mod = num % base_count;
					encode = alphabet.charAt(mod) + encode;
					num /= base_count
			}
			if(num){
					encode = alphabet.charAt(num) + encode;
			}
			return encode;
	}

	function decode(s){
			var decoded = [0];
			var multi = 1;
			s = s.split("").reverse().join("");
			for(var i=0; i<s.length; i++){
					var char = s.charAt(i);
					decoded[0] += multi * alphabet.indexOf(char);
					multi *= base_count;
			}
			return decoded[0];
	}

	function random(digits){
		var random = [];
		for(var i=0; i<digits; i++){
			random[i] = Math.floor(Math.random()*10);
		}
		return random.join("");
	}

	function xor(a, b){
			a = (a+"").split("");
			b = (b+"").split("");
			var c = [];
			if(a.length != b.length) throw new Error("both numbers must be same length (a is " + a.length + ", b is " + b.length + ")");
			for(var i=0; i<a.length; i++){
					c[i] = (a[i]*1)^(b[i]*1)
			}
			return c.join("")*1;
	}

function assertEqual(expected, actual){
    if(expected !== actual)
        throw new Error("expected " +expected + ", was " + actual);
}

assertEqual(58, alphabet.length)

assertEqual('Tgmc', encode(10002343))

assertEqual(10002343, decode('Tgmc'))

assertEqual('if', encode(1000))

assertEqual(1000, decode('if'))
 
assertEqual('', encode(0))
 
assertEqual('', encode(-100))

assertEqual(xor(1,1), 0)

assertEqual(xor(1,0), 1)

assertEqual(xor(4,6), 2)

assertEqual(xor(74,36), 42)

assertEqual(random(1).length, 1)

assertEqual(random(12).length, 12)

var a = decode('Tgmc');
//random(a.length)
var b = 63755700
var c = xor(a, b)

assertEqual(xor(b, c), a)
assertEqual(encode(xor(b, c)), 'Tgmc')
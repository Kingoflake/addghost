function reverseString(str){
		var splitString	 = str.split("");
		var reverseArray = splitString.reverse();
		var joinArray = reverseArray.join("");
		return joinArray;

}

function stringToBinary(String sentence){
		var result ="";
		for(i in sentence) {
			var b = i.charCodeAt(0);
			var quotient = Math.floor(b/2);

			while( quotient !== 0) {
				
				result += b%2;
				quotient = Math.floor(quotient/2);
					b = quotient;

			}
		
		}

		return reverseString(result);

}

var keybit = "10100100101100101011101010110110"
var s1 = [["0010","1100","0111","1011"],["1101","0101","1000","0010"],["1100","0100","0001","1010"],["1001","0000","1010","1011"]]
var s2 = [["1010","1101","1111","1011"],["1001","0111","1111","0010"],["1100","0100","1111","1010"],["1000","0100","1010","1011"]]
var s3 = [["0110","0110","0101","1001"],["1111","0110","1110","1010"],["1011","0100","1101","1010"],["1010","0000","1010","1011"]]
var s3 = [["0010","1001","0011","1010"],["1000","0111","1010","0110"],["1110","0100","0000","1110"],["1000","1010","1010","1011"]]
var s4 = [["1010","1100","1110","0001"],["1011","0111","1110","0011"],["1100","0110","0011","0010"],["1011","0000","1010","1011"]]
var s5 = [["0010","1101","1011","1001"],["1101","0101","1110","1010"],["1000","0101","0001","1010"],["1000","0110","1010","1011"]]
var s6 = [["1110","1001","1101","1011"],["1101","0111","1000","0010"],["1100","0111","0101","0110"],["1010","1110","1010","1011"]]
var s7 = [["0110","1101","0100","1011"],["1111","0111","1110","0110"],["1000","0000","1101","1010"],["1000","0000","1010","1011"]]
var s8 = [["1010","1001","0101","1111"],["1001","0111","1110","1010"],["1101","1110","0111","1010"],["1000","0100","1010","1011"]]


function addition(a,b) {
		var result = "";
		var r = 0;

		for(var i = 31 ; 0  <= i ; i--) {

			if( a[i] + b[i] + r == 0) {
				
					result += "0";
					r = 0;

			}

			else if( a[i] + b[i] + r == 1) {
				
					result += "1";
					r = 0;
			}


			else if( a[i]+ b[i] + r == 2) {

					result += "0";
					r = 1;
			}

			else if(a[i]+ b[i] + r == 3) {

					result += "1";
					r = 1;

			}



		}

		return reverseString(result);

}





function ghost(str) {
		 
		var i = 0;
		var bits = str;	
		while ( i != 32) {
			bits = addition (bits, keybit);
			var result = "";

			result += s1[2*bits[0]+bits[1]][2*bits[2]+bits[3]]

			result += s2[2*bits[4]+bits[5]][2*bits[6]+bits[7]]
				
			result += s3[2*bits[8]+bits[9]][2*bits[10]+bits[11]]

			result += s4[2*bits[12]+bits[13]][2*bits[14]+bits[15]]

			result += s5[2*bits[16]+bits[17]][2*bits[18]+bits[19]]
		
			result += s6[2*bits[20]+bits[21]][2*bits[22]+bits[23]]

			result += s7[2*bits[24]+bits[25]][2*bits[26]+bits[27]]

			result += s8[2*bits[28]+bits[29]][2*bits[30]+bits[31]]
			
			
			var a = "";
			var b = "";

			a = result[0:10];
			b = result[11:31];

			bits = b + a;
		
		}
		


		return bits;


}

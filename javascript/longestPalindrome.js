/**
 * @param {string} s
 * @return {string}
 */
//Time Limit Exceeded
var isPalindrome=function(s){
	var i=0;
	var len=s.length;
	var k=len-1;
	for(;i<=k;i++){
		if(s.charAt(i)!=s.charAt(k))
			return false;
		k--;
	}
	return true;
}
/* time exceed
var longestPalindrome = function(s) {
    var len=s.length;
    var res='';
    for(var i=0;i<len;i++){
        for(var k=len-i;k>0;k--){
            var sub=s.substr(i,k);
            if(sub.length>0 && isPalindrome(sub) && sub.length>res.length){
                if(sub.length>len/2)
                    return sub;
                res=sub;
                break;
            }
        }
    }
    return res;
};
*/

//still time exceed
var longestPalindrome = function(s) {
	var len=s.length;
	var res='';
	if(s.length==1)
		return s;
	if(s.length==2 && s.charAt(0)==s.charAt(1))
		return s;
	for(var i=0;i<len;i++){
		var pos=len;
		while(true){
			pos=s.lastIndexOf(s.charAt(i),pos-1);
			if(pos>i){
				var sub=s.substr(i,pos-i+1);
				if(sub.length>0 && isPalindrome(sub) && sub.length>res.length){
					res=sub;
					if(res.length>len/2)
						return res;
					break;
				}else
					continue;
			}
			break;
		}
	}
	if(s.length && res=='')
		return s.charAt(0);
	return res;
};

var test=function(){
	var s1='a';
	var s2='ab';
	var s3='ababc';
	var s4='abefffeba';
	var s5='babad';
	var s6='';
	for(var i=0;i<1000;i++) s6+='a';
	var s7='abcdefg';
	var s8='bb';
	var s9='aaabaaaa';
	var s10='ccc';
	console.log(longestPalindrome(s1));
	console.log(longestPalindrome(s2));
	console.log(longestPalindrome(s3));
	console.log(longestPalindrome(s4));
	console.log(longestPalindrome(s5));
	console.log(longestPalindrome(s6).length);
	console.log(longestPalindrome(s7));
	console.log(longestPalindrome(s8));
	console.log(longestPalindrome(s9));
	console.log(longestPalindrome(s10));
}

test();


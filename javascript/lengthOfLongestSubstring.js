/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var res='';
	var len=s.length;
	for(var i=0;i<len;i++){
		var curSub=s.charAt(i);
		for(var k=i+1;k<len;k++){
			if(curSub.indexOf(s.charAt(k))!=-1)
				break;
			curSub+=s.charAt(k);
		}
		if(curSub.length>res.length)
			res=curSub;
	}
	return res.length;
};

function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}

function test(){
	var s='aabbcdeffg';
	console.log(lengthOfLongestSubstring(s));
}

test();

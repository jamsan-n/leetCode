/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function getNextMin(n1,n2,len1,len2,i1,i2){
	if(i1<len1 && i2<len2){
		if(n1[i1]<n2[i2])
			return [++i1,i2,0];
		else
			return [i1,++i2,1];
	}

	if(i1>=len1){
		return [i1,++i2,1];
	}

	if(i2>=len2){
		return [++i1,i2,0];
	}
}

var findMedianSortedArrays = function(nums1, nums2) {

	var i1=0;
	var i2=0;
	var len1=nums1.length;
	var len2=nums2.length;
	var mid=(len1+len2)/2;
	var pos=[0,0];

	for(var i=0;i<Math.ceil(mid-1);i++){
		pos=getNextMin(nums1,nums2,len1,len2,pos[0],pos[1]);
	}

	if(i!=mid-1){ //总数为奇数个
		pos=getNextMin(nums1,nums2,len1,len2,pos[0],pos[1]);
		if(pos[2])
			return nums2[pos[1]-1];
		else
			return nums1[pos[0]-1];
	} else{
		var sum=0;

		for(var i=0;i<2;i++){
			pos=getNextMin(nums1,nums2,len1,len2,pos[0],pos[1]);
			if(pos[2])
				sum+=nums2[pos[1]-1];
			else
				sum+=nums1[pos[0]-1];
		}
		return (sum/2);
	}
};

function test(){
	var n1=[6,7];
	var n2=[1,2,3,4,5];

	var n3=[6,7];
	var n4=[1,2,3,4];

	var n5=[1,2,3];
	var n6=[6,7,8,9];

	var n7=[1,2,3];
	var n8=[6,7,8];

	var n9=[1,3];
	var n10=[2];

	console.log(findMedianSortedArrays(n9,n10));
	console.log(findMedianSortedArrays(n1,n2));
	console.log(findMedianSortedArrays(n3,n4));
	console.log(findMedianSortedArrays(n5,n6));
	console.log(findMedianSortedArrays(n7,n8));

}

test();

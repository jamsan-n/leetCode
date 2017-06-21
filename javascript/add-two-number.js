/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/* 最大的坑是输入是链表，却要求输出是数组...害人不浅! */

var addTwoNumbers = function(l1, l2) {
	var res={val:0,next:null};
	var p1=l1,p2=l2,p3=res;
	var c=0;
	while(true){
		p3.val=c;
		c=0;
		if(p1!=null){
			p3.val+=p1.val;
			p1=p1.next;
		}
		if(p2!=null){
			p3.val+=p2.val;
			p2=p2.next;
		}
		if(p3.val>=10){
			c=1;
			p3.val-=10;
		}
		if(p1==null && p2==null && c===0)
			break;
		p3.next={val:0,next:null};
		p3=p3.next;
	}
	var ar=[];
	var p=res;
	while(p!=null){
		ar.push(p.val);
		p=p.next;
	}
	return ar;

};

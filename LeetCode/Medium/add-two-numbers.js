/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let sum;
  let carry = 0;
  let newNode = ListNode(0);
  let prevNode = newNode;
  const headNode = newNode;
  while (l1 !== null || l2 !== null) {
    sum = l1.val + l2.val + carry;
    carry = sum > 9 ? 1 : 0;
    newNode = ListNode(sum % 10);
    prevNode.next = newNode;
    prevNode = newNode;
    l1 = l1.next;
    l2 = l2.next;
  }
  return headNode.next;
};

console.log('');

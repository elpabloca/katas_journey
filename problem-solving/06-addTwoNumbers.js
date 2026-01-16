/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

- You may assume the two numbers do not contain any leading zero, except the number 0 itself.

example:

L1 -> 2, 4, 3 + 1
L2 -> 5, 6, 4

Output -> 7, 0, 8
Explanation -> 342 + 465 = 807

Example 2:
L1 -> [0]
L2 -> [0]

Output -> [0]

Example 3:
l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/

 /* Definition for singly-linked list.*/
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

function listToArray(list) {
  const result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;
    console.log(l1, "l1")
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  return dummyHead.next;
};

const l1 = arrayToList([4, 4, 8]);
const l2 = arrayToList([5, 6, 4]);

const result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // [7, 0, 8]


/*
Floyd cycle detection
After fast and slow pointers are pointing to the same
node, start slow from head and keep moving one node at 
a time untill slow and fast pointer meets.
They will meet at a node which is the starting node.

Time complexity : O[n]
Space complexity: O[1]
*/

function findStartNode(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      let slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
}

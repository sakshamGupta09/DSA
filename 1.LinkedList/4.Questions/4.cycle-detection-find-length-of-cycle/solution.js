/*
Floyd cycle detection
After fast and slow pointers are pointing to the same
node, keep fast pointer at the same place and slow will
complete another cycle untill it meets the fast pointer
again.

Time complexity : O[n]
Space complexity: O[1]
*/

function countNodesInCycle(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      let count = 0;

      do {
        count++;
        slow = slow.next;
      } while (fast !== slow);

      return count;
    }
  }

  return 0;
}

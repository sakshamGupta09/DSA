/*
Use a hash set. Iterate on the list items and store
address of each node.
If there is a cycle nodes will repeat themselves while
iterating.

Time complexity : O[n]
Space complexity: O[n]
*/

function approach1(head) {
  let visited = new Set();

  let current = head;
  while (current !== null) {
    if (visited.has(current)) {
      return true;
    }
    visited.add(current);
    current = current.next;
  }
  return false;
}

/*
Efficient Approach - Floyd cycle detection

Imagine a circular track and two athletes running.
One athlete is running with twice the speed of the 
second athlete.
Since it's a circular track and one athlete is running
at twice the speed, they are bound to cross each other.
If they do, cycle exists.

Time complexity : O[n]
Space complexity: O[1]
*/

function cycleDetection(head, n) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast == slow) {
      return true;
    }
  }

  return false;
}

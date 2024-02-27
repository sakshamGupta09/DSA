/*
Use a hash table. Iterate on the list items and store
position and data as the key value pair.
Now nth node from the end means (size-n+1)th node from the begining.

Time complexity : O[n]
Space complexity: O[n]
*/

function approach1(head, n) {
  let current = head;
  let size = 0;

  while (current !== null) {
    size++;
    current = current.next;
  }

  if (n > size) {
    return -1;
  }

  current = head;

  for (let i = 0; i < size - n; i++) {
    current = current.next;
  }
  return current.data;
}

/*
We can avoid using the extra space.

Since, nth node from the end means (size-n+1)th
node from the begining.

We can use two passes. First to compute the size of 
the list and second to reach to (size-n+1)th node from
the start.

Time complexity : O[n] + O[n]
Space complexity: O[1]
*/

function approach2(head, n) {
  let map = new Map();
  let current = head;

  let count = 0;
  while (current !== null) {
    count++;
    map.set(count, current.data);
    current = current.next;
  }

  if (n > count) {
    return -1;
  }

  return map.get(count - n + 1);
}

/*

Efficient approach

Assume we have two players in the race track. They
both are running at same speeds. Player one is 4 kms ahead
of player 2 before the start.

Since they both are running at the same speed, when 
player one reaches the finish line, player 2 will still
be 4kms apart.

We will use two pointers, the first one will be at the 
nth node from the start.
Then they both move one node at a time till the first one
reaches the end.
The second node will then be pointing to the nth node
from the last.

Time complexity : O[n]
Space complexity: O[1]
*/
function approach3(head, n) {
  let p1 = head;
  let p2 = null;

  for (let i = 1; i < n; i++) {
    if (p1 !== null) {
      p1 = p1.next;
    }
  }

  while (p1 !== null) {
    if (p2 == null) {
      p2 = head;
    } else {
      p2 = p2.next;
    }
    p1 = p1.next;
  }

  return p2 ? p2.data : -1;
}

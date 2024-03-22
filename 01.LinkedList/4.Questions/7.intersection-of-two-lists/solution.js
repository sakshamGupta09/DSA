function getIntersectionNode(headA, headB) {
  let m = 0;
  let n = 0;
  let diff = 0;
  let h1 = headA;
  let h2 = headB;

  while (h1 !== null) {
    m++;
    h1 = h1.next;
  }

  while (h2 !== null) {
    n++;
    h2 = h2.next;
  }

  if (m > n) {
    h1 = headA;
    h2 = headB;
    diff = m - n;
  } else {
    h1 = headB;
    h2 = headA;
    diff = n - m;
  }

  for (let i = 0; i < diff; i++) {
    h1 = h1.next;
  }

  while (h1 && h2) {
    if (h1 == h2) {
      return h1;
    }
    h1 = h1.next;
    h2 = h2.next;
  }
  return null;
}

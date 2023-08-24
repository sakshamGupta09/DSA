function findKthBit(n, k) {
  if (n == 0) {
    return 0;
  }
  return (n & (1 << (k - 1))) == 0 ? 0 : 1;
}

findKthBit(10, 4);

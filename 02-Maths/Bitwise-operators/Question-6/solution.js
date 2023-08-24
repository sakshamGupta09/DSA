function firstSetBit(n, k) {
  if (n == 0) {
    return 0;
  }
  return Math.log2(n & -n) + 1;
}

firstSetBit(10);

function unsetKthBit(n, k) {
  return num & ~(1 << (k - 1));
}

unsetKthBit(10, 4);

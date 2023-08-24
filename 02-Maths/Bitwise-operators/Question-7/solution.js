function nthMagicNumber(n) {
  let base = 5;
  let ans = 0;

  while (n > 0) {
    let last = n & 1;
    ans += (base * last) % M;
    base *= 5;
    n >>= 1;
  }
  return ans;
}

nthMagicNumber(10);

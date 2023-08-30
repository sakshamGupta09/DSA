function missingNumber(nums) {
  let ans = nums.length;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i] ^ i;
  }
  return ans;
}

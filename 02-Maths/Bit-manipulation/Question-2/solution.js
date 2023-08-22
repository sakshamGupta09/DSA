function singleNumber(nums) {
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    ans ^= nums[i];
  }
  return ans;
}

singleNumber([4, 1, 2, 1, 2]);

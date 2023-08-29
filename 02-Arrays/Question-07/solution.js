function moveZeroes(nums) {
  let z = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      z++;
    } else {
      if (z > 0) {
        nums[i - z] = nums[i];
        nums[i] = 0;
      }
    }
  }
}

moveZeroes([0, 1, 0, 3, 4]);

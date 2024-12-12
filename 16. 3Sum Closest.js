// 16. 3Sum Closest

function threeSumClosest(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < array.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    let closest = -Infinity;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(target - sum) < Math.abs(target - closest)) {
        closest = sum;
      }
      if (sum < target) {
        start++;
      } else if (sum > target) {
        end--;
      } else {
        return sum;
      }
    }
  }
  return closest;
}

// Example usage
const nums = [-1, 2, 1, -4];
const target = 1;
console.log(threeSumClosest(nums, target)); // Output: 2

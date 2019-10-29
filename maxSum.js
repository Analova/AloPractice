//Given an array of positive numbers and a positive number ‘k’,
//find the maximum sum of any contiguous subarray of size ‘k’.

//Example 1:
// Input: [2, 1, 5, 1, 3, 2], k = 3
// Output: 9
// Explanation: Subarray with maximum sum is[5, 1, 3].

function maxSubArray(k, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;

  for (window_end = 0; window_end < arr.length; window_end++) {
    windowSum += arr[window_end];
    if (window_end >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return maxSum;
}

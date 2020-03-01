// Sliding Window - maxSubarraySum

// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a 
// subarray with th length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.


function maxSubarraySum(arr, num) {

    let maxSum = 0;

    if(arr.length < num) {
        return null;
    }

    for(let i = 0; i < num; i++){
        maxSum += arr[i]
    }

    let tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
         tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    console.log(maxSum)
    return maxSum;

}

maxSubarraySum([-3,4,0,-2,6,-1],2) // 5
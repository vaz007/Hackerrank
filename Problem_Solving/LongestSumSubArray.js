/*
    Given an array of integers 
    find the longest subarray which has sum equal to k
*/
function maxLengthOfSubArray (arr, k){
    let sum = 0;
    let count =0;
    let maxcount = 0
 
     for(i =0; i< arr.length; i++){
         if ((sum + arr[i]) <= k){
             sum += arr[i];
             count++
         }
         else if (sum!=0){
             sum = sum - arr[i - count] + arr[i]; 
         }
         maxcount = Math.max(count, maxcount);  
     }
     console.log(maxcount);
     return maxcount;
 
 }
 maxLengthOfSubArray([1, 2, 1, 0, 1, 1, 0], 4)
// Write a function called findLongestSubstring which accepts a string and returns the length
// of the longest substring with all distinct charechters.

function findLongestSubstring(str){
    //Turn string into an array.
    let arr = str.split('');
    if(arr.length === 0){
        return 0
    }
    //Keep track of letters already iterated over
    let freqCounter = {};
    //Keeps track of longest sunString
    let maxSubstring = 0
    //Holds the temp max value of a subArray. THis gets compared to maxSubtring after each iteration
    let tempMax = 0;
    //Servers as somewhat of a reset for variable i. 
    let j = 0;

    for(let i = 0; i < arr.length; i++){
        if(!freqCounter[arr[i]]){
            //If key does not exist in obj set it equal to 1.
            freqCounter[arr[i]] = 1;
            //Add 1 to temp max.
            tempMax++
        }else {
            //This runs if key is found in obj.
            //Clears object
            freqCounter = {};
            //add 1 to j
            j++
            //Set i to j so it starts of on the value of the array
            i = j;
            //We need to subtract 1 because in the next iteration
            //1 will be added in the loop. 
            i = i - 1 
            //reset tempMax to zero.
            tempMax = 0; 
        }
        //Compare if maxSubstrin is < or > then tem max. It will only change if tempMax is higher
        maxSubstring = Math.max(maxSubstring, tempMax)
    }
    return maxSubstring;
}
findLongestSubstring('thecatinthehat') // 7
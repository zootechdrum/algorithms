// Write a function called findLongestSubstring which accepts a string and returns the length
// of the longest substring with all distinct charechters.

function findLongestSubstring(str){

    let arr = str.split('');

    if(arr.length === 0){
        return 0
    }

    //Keep track of letters already iterated over
    let freqCounter = {};
    let maxSubstring = 0

    for(let i = 0; i < arr.length; i++){

        if(!freqCounter[arr[i]]){
            freqCounter[arr[i]] = 1;
        }else {
            console.log(arr[i] + " already exists")
        }
        
    }
    console.log(freqCounter)

}

findLongestSubstring('') // 0
findLongestSubstring('rithmschol') // 7
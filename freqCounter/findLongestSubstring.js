// Write a function called findLongestSubstring which accepts a string and returns the length
// of the longest substring with all distinct charechters.

function findLongestSubstring(str){

    let arr = str.split('');

    if(arr.length === 0){
        return 0
    }

    //Keep track of letters already iterated over
    let freqCounter = {};

    for(let i = 0; i < arr.length; i++){
        
    }

}

findLongestSubstring('') // 0
findLongestSubstring('rithmschol') // 7
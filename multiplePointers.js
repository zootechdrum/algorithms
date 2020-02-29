// Instructions

// A grerat problem for the multiple pointers strategy

// Implement a funciton called countUniqueValues, which accepts
// a sorted Array, and counts the unique values in the Array. There can 
// be negative numbers in the Array, but it will always be sorted. 

function countUniqueValues(arr) {

//We want to have 2 pointers.
// One pointer will keep track of the current number in the array
// Second pointer will slowly move up and compare values agains our first pointer



//I needs to be initialized outside of loop
let i = 0;
if(arr.length === 0 ){
    return 0
}
//This is the loop that will hold 2 pointers
for(let j = 1; j < arr.length; j++){
    //if index of i is not equal to whateveer j is at the moment
    if(arr[i] !== arr[j]){
        //increrase i by one
         i++
        // Whatever i is after the addition of 1, is now converted to whatever j is at the moment. 
         arr[i] = arr[j]
    }

}
//Because of zero indexing we have to add 1 to i to check how many unique values are in the array. 
return i + 1;
}

// countUniqueValues([1,1,1,1,1,2]) // 2

// countUniqueValues([]) // 0

countUniqueValues([-2,-1,-1,0,1]) // 2
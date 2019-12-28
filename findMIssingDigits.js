// find the missing numbers in an array of integers.
 

// For example, if we were given an array of [9,4,3,6,8,2] , the function should return 
//the array of [5,7]

 


 function missing(arr){
     let answer = [];

     let sortedArr = arr.sort(function(a,b){return a - b})

     for(let i = 0; i < sortedArr.length; i++){
         //if integer + 1 minus current integer at index i is > 1
         if(sortedArr[i + 1] - sortedArr[i] > 1){
             //push into answer array current index and add one.
             answer.push(sortedArr[i] + 1)
         }
     }
     return answer;
 }
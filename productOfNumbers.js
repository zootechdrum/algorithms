//Product of all other numbers

// Write a function otherProduct that takes in an array of numbers and returns a new array where each element within the return array is the product of multiplying all the numbers in the argument array except the element corresponding to the current index.


// Assume the argument array has at least 2 elements


// Assume the argument array contains only positive integers

function otherProd(arr){
    let ans = []
    let red = []
   
     for( let i = 0; i < arr.length; i++){
       for(let j = 0; j < arr.length; j++){
         //only i and j are not the same will the value
         //be pushed to the red array.
         if ( j !== i) {
             red.push(arr[j])
         }
       }
       //Reduces the value of the array
       let resultOfMult = red.reduce( (a,b) => (a * b ));
       //pushed the resulting value to our ans Array.
       ans.push(resultOfMult)
       red = []
    
     }
   }
   
   otherProd([10,2,5,4])
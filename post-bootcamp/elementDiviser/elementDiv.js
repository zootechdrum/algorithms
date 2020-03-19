// Divisors within an array


// This function takes in an array and returns true if any element is evenly divisible 
// by another element and false otherwise

function checkDivisors(arr) {
    // ---------- Your Code Here ----------
  //Store each element in the array inside object
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if((i !== j) && (arr[i] % arr[j] === 0)){
            return true
        }
    }
 }
    return false
}

    
  // This should console log true
  console.log(checkDivisors([4, 35, 3, 9, 22, 10]));
  
//   // This should console log true
//   cnsole.log(checkDivisors([37, 17, 28, 7, 63]));
  
//   // This should console log true
//   console.log(checkDivisors([12, 27, 29, 62, 27]));
  
//   // This should console log false
//   console.log(checkDivisors([81, 7, 33, 20, 12]));
  
//   // This should console log false
//   console.log(checkDivisors([32, 15, 49, 82, 11]));o
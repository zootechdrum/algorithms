// Given a number, add all of its digits. Continue to do so until the sum is one digit. Return the single digit.

// Example
// Given the number 644, your function should return 5. 6 + 4 + 4 = 14. 1 + 4 = 5.
// Given the number 42, your function should return 6. 4 + 2 = 6.
// Given the number 89657, your function should return 8. 8 + 9 + 6 + 5 + 7 = 35. 3 + 5 = 8.



function addNumber(num){
    var answer = 0;
    //changs number to string type
   var convert = num.toString();
    //converts string type to array
    convert.split("")
    
    for(var i = 0; i < convert.length; i++){
      answer += parseInt(convert[i])
    }
    if( answer > 9) {
      addNumber(answer)
    }else{
      console.log(answer)
    }
    
  }
  
  addNumber(644)
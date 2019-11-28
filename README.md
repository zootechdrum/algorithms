# Algorithm Challenges

This is repository is filled with challenges from different sources presented on

1. FreeCodeCamp
2. ColtSteele Algorithm and Data Structure course
3. Code Ninja

One of the biggest accomplishments I have are the recursive challanges.
It took me a long time to understand the concept but once I got my head 
arount it, it made total sense. Here is an example of a recursive solution
I implemented 

```javascript

//Write a function called power which accepts a base and an exponent. The function should return the power of the base
//to the exponent.
//This function should mimic the functionanality of Math.pow() - do not worry about negative bases and exponents


function power(num1,num2){
    if(num2 === 0) return 1;
    
    if(num2 === 1) return num1;
    
    --num2;
    
    return num2 * power(num1 * num2);
    
  }
    
  //power(2,3) //8
  //power(2,0) //1 
  //power(2,4) //16
```

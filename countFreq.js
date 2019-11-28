//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. 

//Your solution MUST have the following Complexities:

//TIME: O(n)

//sampleFrequency(182, 281) //True
//sampleFrequency(31, 14) //false
//sampleFrequency(3589578, 5879385) //True
//sampleFrequency(22, 222) //false



function sameFrequency(num1, num2){
    let arr1 = num1.toString().split("");
    let arr2 = num2.toString().split("");
    
    const counter1 = {};
    const counter2 = {};
    
    if(arr1.length !== arr2.length){
      return false;
    }
    
    for(let value of arr1){
      counter1[value] = (counter1[value] || 0) + 1;
    }
    for(let value of arr2){
      counter2[value] = (counter2[value] || 0) + 1;
    }
    
    for(let key in counter1){
      if(!(key in counter2)){
         return false;
      }
      if(counter2[key] !== counter1[key]){
        return false;
      }
    }
    return true;
  }
  sameFrequency(132,221);
  
  
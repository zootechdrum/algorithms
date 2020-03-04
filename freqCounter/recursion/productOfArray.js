//Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function rec(arr) {
    let num;
  
    if (arr.length === 1) {
      return arr[0] * 1;
    } else {
      num = arr[0];
    }
  
    num = num * rec(arr.slice(1));
    return num;
  }
  
  rec([1,2,3,10]);
  
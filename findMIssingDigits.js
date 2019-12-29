// find the missing numbers in an array of integers.
 

// For example, if we were given an array of [9,4,3,6,8,2] , the function should return 
//the array of [5,7]

 


function missing(arr){
    let answer = [];
  //gets largest number in array
    let maxNum = Math.max(...arr)

    for(let i = 0; i < arr.length; i++){
        //if current number + 1 is not found in array and current number is not the biggest number
        if(arr.indexOf(arr[i] + 1) === -1 && arr[i] !== maxNum){
            //push into answer array current index and add one.
            answer.push(arr[i] + 1)
        }
    }
    return answer;
}

missing([9,4,3,6,8,2])
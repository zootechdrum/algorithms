function flatten(arr){
    //Init new Arr
    let newArr = [];
    //Console.log to show where we are at after
    //each iterative call
    console.log(arr)

    //If arr has the length of 0 reuturn newArr. This serves as a base case
    if (arr.length === 0) {
        return newArr
    } 

    //If our current index is of type Array
    if(Array.isArray(arr[0])){
        //set newArr to whatever concatonated array gets returned 
         newArr = newArr.concat(flatten(arr[0]))
    } else{
        //Else just push the number to newArr
        newArr.push(arr[0])
    }
    //set newArr to newArr and concat whatever gets returned after slicing one from array
    newArr = newArr.concat(flatten(arr.splice(1)))
    //eventualy return newArr
    return newArr;
}
  flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5].
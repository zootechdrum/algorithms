function flatten(arr){
    let newArr = [];
    console.log(arr)
    if (arr.length === 0) {
        return newArr;
    } 
    if(Array.isArray(arr[0])){
        let conc = newArr.concat(flatten(arr[0]))
        return newArr.concat(conc)
    } else{
        newArr.push(arr[0])
    }
    newArr = newArr.concat(flatten(arr.splice(1)))
    return newArr;
}
  flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
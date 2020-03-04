function capitalizeFirst(arr){

    let ansArr = [];

    if(arr.length === 0){
        return ansArr;
    }

    if( arr.length > 0){
        let capitilize = arr[0].charAt(0).toUpperCase() + arr[0].slice(1)
        ansArr.push(capitilize);
    }

    ansArr = ansArr.concat(capitalizeFirst(arr.slice(1)))
    console.log(ansArr)
    return ansArr;
}

capitalizeFirst(['car','taco','banana'])
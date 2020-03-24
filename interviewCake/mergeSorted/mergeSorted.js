//We have our lists of orders sorted numerically already, 
//in arrays. Write a function to merge our arrays of orders into one sorted array.

const myArray = [3,4,6,10,11,15];
const alicesArray = [1,5,8,12,14,19];
let comparedPointer = 0;
let longestPointer = 0
let longestArr;
let comparedArr;

const ansArr = [];


//We have to determine the longest array to make sure we
//iterate over all numbers
if( myArray.length >= alicesArray.length){
    longestArr = myArray
    comparedArr = alicesArray
}else{
    longestArr = alicesArray
    comparedArr = myArray
}

//We are not iterating over all items

 let totalArrayMerges = longestArr.length + comparedArr.length


const mergeArrays = (arr1, arr2) => {
    while(ansArr.length < totalArrayMerges){

        if(longestArr[longestPointer] < comparedArr[comparedPointer]){
        ansArr.push(longestArr[longestPointer])
        ++longestPointer
    }else if(comparedArr[comparedPointer] < longestArr[longestPointer] ){
        ansArr.push(comparedArr[comparedPointer])
        ++comparedPointer
    }

        if(longestPointer === longestArr.length || comparedPointer === comparedArr.length){
            if(comparedArr[comparedPointer + 1]){
                ansArr.push(comparedArr[comparedPointer + 1])
            }else{
                ansArr.push(longestArr[longestPointer + 1 ])
            }

        }
}
}

mergeArrays(myArray, alicesArray)
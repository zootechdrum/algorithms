const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
let comparedPointer = 0;
let longestPointer = 0
let longestArr;
let comparedArr;
const ansArr = [];
//We have to de_termine the longest array to make sure we
//iterate over all numbers
if (myArray.length >= alicesArray.length) {
    longestArr = myArray
    comparedArr = alicesArray
} else {
    longestArr = alicesArray
    comparedArr = myArray
}
//The variable below adds up the total length of both of our arrays
let totalArrayMerges = longestArr.length + comparedArr.length

const mergeArrays = (arr1, arr2) => {
    //While our ans array length is less than the combined total of both of our arrays
    //loop
    while (ansArr.length < totalArrayMerges) {
        //If our longesArr index is less then the compared array
        if (longestArr[longestPointer] < comparedArr[comparedPointer]) {
            //push that value to our ansArr array
            ansArr.push(longestArr[longestPointer])
            //increase pointer by one
            ++longestPointer
            //Ele if its the other way around do the same for comparedPointer
        } else if (comparedArr[comparedPointer] < longestArr[longestPointer]) {
            ansArr.push(comparedArr[comparedPointer])
            ++comparedPointer
        }
        //If at any point one of out pointers reaches the end of the list
        //We know there is one item left to be pushed into our ans array.
        if (longestPointer === longestArr.length || comparedPointer === comparedArr.length) {
            //Checks if the value is not equal to undefined 
            if (comparedArr[comparedPointer]) {
                ansArr.push(comparedArr[comparedPointer])
            } else {
                ansArr.push(longestArr[longestPointer])
            }
        }
    }
    console.log(ansArr)
    return ansArr;
}
mergeArrays(myArray, alicesArray)
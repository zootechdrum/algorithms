//Sample Input/output
//recursiveRange(6) // 21

//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(num){
    if (num === 1) {
        return 1;
    }
    num = num + recursiveRange(--num)
    return num;
}
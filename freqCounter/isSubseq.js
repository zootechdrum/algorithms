// Multiple Pointers - isSubsequence

// Write a function called isSubsquence which takes in two strings and checks whether the charecters in the first string
// form a subsequence of the charecters in the second string. In other words, the function should check
// wheter the charecters in the first string appear somewhere in the second string, withour their order changing. 


function isSubsequence(arg1, arg2) {

    //We want to make both arguments array
    let arr1 = arg1.split('');
    let arr2 = arg2.split('');

    let i = 0;
    //We are going to loop through the second argument of our array
    for (let j = 0; j < arr2.length; j++) {

        if (arr1[i] === arr2[j]) {
            i++
        } if (i === arr1.length) {
            return true;
        }
    }
    return false
}



isSubsequence("hello", "hello world") // true
isSubsequence("sing", "sting") // true

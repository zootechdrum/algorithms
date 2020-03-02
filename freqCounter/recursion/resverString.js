//Write a recursive function called reverse which accepts a string and returns
// a new string in reverse.

function reverse(str){

    const lengthOfarray = str.length - 1;

    function helper(input){
        if(lengthOfarray === 0){
            return;
        }
        helper(--lengthOfarray)
    }
    helper(lengthOfarray);_
 }


reverse('string')
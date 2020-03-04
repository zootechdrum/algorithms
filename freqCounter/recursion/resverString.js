//Write a recursive function called reverse which accepts a string and returns
// a new string in reverse.

function reverse(str){

    let lengthOfarray = str.length - 1;
    let answerArray = [];

    function helper(input){
        if(lengthOfarray === 0){
          answerArray.push(str[lengthOfarray])
            return;
        }
        answerArray.push(str[lengthOfarray])
        helper(--lengthOfarray)
    }
    helper(lengthOfarray);
    return answerArray.join('')
 }


reverse('string')
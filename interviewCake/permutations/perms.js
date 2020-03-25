
const palindrome = (word) => {

    const ansObj = {}
    let odd = 0;

    if(word.length < 2){
        return 'not a palindrom';
    }
    if(word.length === 2){
        if(word[0 === word[1]]){
            return 'is a palindrome';
        }else{
            return 'not a palindrome';
        }
    }
    for(let i = 0; i < word.length; i ++){

        ansObj[word[i]] = ansObj[word[i]] + 1 || 0 + 1
    }
    //loop through the object to make sure there is only one 
    //with the key values as one

    for(const property in ansObj) {
        console.log(ansObj[property])
        if ( ansObj[property] === 1){
            ++odd
        }
        if(odd === 2){
            return 'not a palindrome'
        }
    }
    console.log('is a palin')
    return "is a palindrome"
}
palindrome('civic')
//"civic" should return true
//"ivicc" should return true
//"civil" should return false
//"livci" should return false
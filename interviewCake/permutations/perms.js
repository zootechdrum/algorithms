
const palindrome = (word) => {

    const ansObj = {}
    let odd = 0;

    for(let i = 0; i < word.length; i ++){

        ansObj[word[i]] = ansObj[word[i]] + 1 || 0 + 1
    }
    
    console.log(ansObj)
    //loop through the object to make sure there is only one 
    //with the key values as one

    for(const property in ansObj) {
        console.log(ansObj[property])
        if ( ansObj[property] === 1){
            ++odd
        }
        console.log(odd)

        if(odd === 2){
            console.log("not a palindrome")
            return 'not a palindrome'
        }

    }
    return "is a palindrome"
}



palindrome('civil')




//"civic" should return true
//"ivicc" should return true
//"civil" should return false
//"livci" should return false
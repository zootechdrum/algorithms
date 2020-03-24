
const palindrome = (word) => {

    const ansObj = {}

    for(let i = 0; i < word.length; i ++){

        ansObj[word[i]] = ansObj[word[i]] + 1 || 0 + 1
    }
    
    //loop through the object to make sure there is only one 
    //with the key values as one
}



palindrome('ivicc')




//"civic" should return true
//"ivicc" should return true
//"civil" should return false
//"livci" should return false
//Given two strings, write a function to determine ifthe second string is an anagram of the first.

//Ex validAnagram("","") true

//Ex validAnagram("aaz","zza") false

//Ex validAnagram("anagram","nagaram") false

//Great challenge to use Frequency Counter

//Psudo code  
// Make words being passed into a function an array
// Check if length of both arrays are the same
//If not the same we can return immeditaly

//Create 2 objects that will hold letters and the number of times that letter appears in the array
//We are going to loop through our first array and for each element were going to add it as a key and set
//The value to zero or 1
// We will do the same for the second array except place those values in our second object

//We are going to loop one last time through all the keys in our first object
//To check if the key is in our second object
//If it is great if its not return false

//We will then check if the value of key in object 2 has the same value of the current key in object 1

function anagram(str1, str2){
    //convert each string into an array
    let arr1 = str1.split("");
    let arr2 = str2.split("");

    //If arrays do not equal each other we can return right away

    if(arr1.length !== arr2.length) {
        return false;
    }

    let freqCount1 = {};
    let freqCount2 = {};

    for(let val of arr1){
        //adds key to freqCount1 and sets is equal to zero or adds 1 if the value does exist
        //If the value does not exist yet then it will show undefined
        //But because we have the or operator we set it to zero to have a value

        freqCount1[val] = (freqCount1[val] || 0) + 1;s
    }

    for(let val of arr2){
        freqCount2[val] = (freqCount2[val] || 0) + 1;
    }

    for(let key in freqCount1){
        if(!(key in freqCount2)){
            return false
        }
        if(freqCount2[key] !== freqCount1[key] ){
            return false
        }
    }
    return true;
}

anagram("anagram","nagaram")
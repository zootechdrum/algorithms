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
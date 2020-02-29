//Implement a function called areThereDuplicated which accepts a variable number of
//of arguments, and checks whter there are any duplicates among the arguments passed in.
// You can solve this using the frerquency counter patter or the multiple pointrs pattern



//...args rest parameter syntax allows us to represent an indefinite number of arguments as an array. 
function areThereDuplicates(...args) {
   //Call a variabl named arr that will hold our arguments.   
    let arr = args;

    //create Object that will hold how many tims letter is present
    let freqCounter = {};
    //Loop through the array 
    for(let val of arr ){
        //Sets the key to freqCounter and sets the value to 0 if undefined if the key does not exist in the objec yet.
        //then adds one. 
        freqCounter[val] = (freqCounter[val] || 0) + 1;
    }
// Loops through our freqCOunter and checks if the value to they key is grerater than 1
// If it is then we know there is a duplicate
    for(let key in freqCounter) {
        if(freqCounter[key] > 1) {
            return true
        }
    }
    return false;

  }

  areThereDuplicates(1,2,3,6,4)
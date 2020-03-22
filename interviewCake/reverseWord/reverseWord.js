const reverseWords = (message) => {
    //We want to initially reverse the lettering in the array
    //with the function below we reverse the lettering in the array.
    reverseOrder(0, message, message.length)
    //counter variable that will help in determining where
    //the index should start when we pass into helper function
    let rightPointer = 0;
    //At this poitnt we all the letters have been reversed in place 
    //We know need to reverse the letters to its appropriate place
    //We then can join all items in our array to get reversed words
    for(let i = 0; i <= message.length; i++){
        //If in out loop we have encounters white space or i equals the end of our message
        //Then we know we have reached the end of the word
        if( message[i] === ' ' || i === message.length){
            //We pass the message with the value of current number and our current value of i
            reverseOrder(rightPointer, message, i); 
            //if we have reached white space then we know the next chrechter is
            //the beginning of another word
            rightPointer = i + 1;            
        }
    }
    return message.join('')
}

const reverseOrder = (start, message, end) => {
    let leftPointer = start;
    let rightPointer = end - 1;

    while(leftPointer < rightPointer){

        let temp = message[leftPointer]

        message[leftPointer] = message[rightPointer];
        message[rightPointer] = temp;
        ++leftPointer;
        --rightPointer; 
    }
}
message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ]

reverseWords(message)
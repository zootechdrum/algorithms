
const reverseWords = (message) => {

    // for(let i = 0; i < message.length; i++){
    //     console.log(message[i])
    // }
    
    reverseOrder(0, message, message.length)
    

}

const reverseOrder = (start, message, end) => {
    let leftPointer = start
    let rightPointer = end - 1

    while(leftPointer < rightPointer){

        let temp = message[leftPointer]

        message[leftPointer] = message[rightPointer]
        message[rightPointer] = temp
        ++leftPointer
        --rightPointer 

    }

    

}


message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ]

reverseWords(message)
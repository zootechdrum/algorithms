// reverseWords is a function that will take a string as an argument. The string is a sentence of words where each word is seperated from the others by a space. reverseWords returns a new sentence where each individual word is reversed, but the order in which the words appear in the sentence isn't changed.

// Reverse the characters within the words without changing the order of the words in the sentence

// Assume any punctuation is part of the word and will also be reversed

function reverse(sent){

    let ans = [];
    let word = '';
    //splits the sent argument based on space and coverts it into an array
    let arr = sent.split(" ")
   
    //Loops through the array
    for(let i = 0; i < arr.length; i++){  
    //loops through current word indicated by i but loops backwords starting at the end of each sub index.
      for(let j = arr[i].length - 1; j >= 0; j-- ){
        //concats word
         word += arr[i][j]
      }
      //pushes reversed word to our ans array
      ans.push(word)
      //clears the word again
      word = ''
    }
    // joins our array.
    console.log(ans.join(' '))
  }
  
  reverse('Our lives are defined by opportunities, even the ones we miss.')
  
  
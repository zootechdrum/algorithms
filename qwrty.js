// Keyboard Row

// the `keyboardRow` function takes in an array of strings and
// returns a new array containing all the words that can be
// individually typed on a single row of a standard "QWERTY"
// keyboard.
function keyboardRow(arr) {
    let answer = [];
  
    const rows = [/[qwertyuiop]/g, /[asdfeghjkl]/g, /[zxcvbnm]/g];
    // -------------------- Your Code Here --------------------
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < rows.length; j++) {
        if (arr[i].match(rows[j])) {
          if (arr[i].match(rows[j]).length === arr[i].length) {
            answer.push(arr[i]);
          }
        }
      }
    }
    console.log(answer);
    return answer;
  }
  var wordArray = ["pet", "world", "bc", "hello", "a", "flash", "blastoff", "to"];
  // Should be [ 'pet', 'bc', 'a', 'flash', 'to' ]
  keyboardRow(wordArray);
  
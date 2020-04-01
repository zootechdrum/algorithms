function sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE){


    //Create an array of 100 items zero is included
    const arr = Array(HIGHEST_POSSIBLE_SCORE + 1).fill(0)
    //An array that will eventually hold our scored in order
    const orderHighScore = [];
    //Loops through unsorted array and increased counter in that index in our array arr
    for(let i = unsortedScores.length - 1; i > 0; i--){
        arr[unsortedScores[i]]++;
    }

    //Iterates over entir arr aray starting from last element
    //We start backwards beacuse all our highest scores will be at the end. 
    for(let j = arr.length; j > 0 ; j--){
    //Nested loop that will only run if that slot in our array
    //has a vaue greater than 0
        for(let k = arr[j]; k > 0;k-- ){
            orderHighScore.push(j)
        }
    }
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)
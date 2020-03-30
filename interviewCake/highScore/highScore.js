function sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE){

    const arr = Array(HIGHEST_POSSIBLE_SCORE + 1).fill(0)

    const orderHighScore = [];
    
    for(let i = unsortedScores.length - 1; i > 0; i--){
        arr[unsortedScores[i]]++;
    }
    //Lets say we have the same score twice. How do we proceed ?
    for(let j = arr.length; j > 0 ; j--){
        for(let k = arr[j]; k > 0;k-- ){
            orderHighScore.push(j)
        }
    }


}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)
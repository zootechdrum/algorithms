function sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE){

    const arr = Array(HIGHEST_POSSIBLE_SCORE).fill(0)
    
    for(let i = 0; i < unsortedScores.length; i++){
        arr[unsortedScores[i]]++
    }

}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE)
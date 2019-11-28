// Problem Explanation:
// The program should look for pairs of numbers in the array whose sum equal 
// the second argument arg. Then instead of adding those numbers up, their indices are to be added.

// Remember that arrays start at index 0 and go from there so from [1,4,2,3,0,5] 
// if we switch to their indices it would be [0,1,2,3,4,5]. Then, we add indices 1 + 2 + 3 + 5 and we get 11. 
// That is what we need to return.

function pairwise(arr, arg) {
    let sucessfulIndex = [];
    let ans = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length && i !== j; j++) {

            if (arr[i] + arr[j] === arg && sucessfulIndex.indexOf(i) < 0 && sucessfulIndex.indexOf(j) < 0) {
                sucessfulIndex.push(i, j)
                ans += j + i
            }
        }
    }

    return ans;
}

pairwise([1, 4, 2, 3, 0, 5], 7)
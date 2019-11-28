function getFinalOpenedDoors(numDoors) {
    //Fills array1 with falsy value
    let array1 = Array(100).fill(false);
    let finalAnswer = []
    let check = [];
    let ans;
  
    for (var i = 1; i <= numDoors; i++) {
      check.push(i);
    }
    for (var i = 0; i <= check.length; i++) {
      for (var j = 1; j <= check.length; j++) {
        //Before we multiply we toggle the inital door
        //Gets the multiples of the array
         ans = check[i] * j;
         console.log("ans = " + ans)
  
             if(ans > 100){
               ans = undefined
               j = 101
          }
        //checks if the multiple obove exists in the array of check
        let marker = check.indexOf(ans);
        console.log('marker' + marker)
  
        if (marker > -1) {
            console.log(marker)
          array1[marker] = !array1[marker];
        }
      }
    }
    for ( var l = 0; l <= array1.length; l++){
        if (array1[l] === true){
            finalAnswer.push(check[l])
        }
        console.log("final Answer " + finalAnswer)
    }
    return finalAnswer;
  }
  
  getFinalOpenedDoors(100);
  
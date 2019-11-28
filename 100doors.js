// //There are 100 doors in a row that are all initially closed. 
// You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, 
// open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it.  
// The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

// Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open.

function getFinalOpenedDoors(numDoors) {
    //Fills array1 with falsy value
  
    let array1 = Array(100).fill(false);
  
    let check = [];
    let ans;
  
    for (var i = 0; i <= numDoors; i++) {
      check.push(i);
    }
  
    for (var i = 0; i < check.length; i++) {
      array1[i] = !array1[i];
  
      for (var j = 1; j < check.length; j++) {
  
  
        //Before we multiply we toggle the inital door
  
        //Gets the multiples of the array
  
         ans = check[i] * j;
  
             if(ans > 100){
               ans = undefined
               j = 101
          }
  
        console.log(ans);
  
        //checks if the multiple obove exists in the array of check
  
        let marker = check.indexOf(ans);
  
        if (marker !== -1) {
          array1[marker] = !array1[marker];
        }
      }
    }
  
    return array1;
  }
  
  getFinalOpenedDoors(100);
  




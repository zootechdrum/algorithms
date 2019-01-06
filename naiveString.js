function native(string1,string2){
    let counter = 0;
    string1 = string1.split("")
    string2 = string2.split("")
  
    for(let i = 0; i < string1.length; i++) {
      for(let j = 0; j < string2.length; j++){
        if(string2[j] !== string1[i]){
          i === 0
        }else if(string2[j] === string1[i]){
          i++
          if(j === string2.length - 1){
          counter++
        }
      }
    }
  }
    return counter
  }
  native("hellosdfsdfgshello","hello")

  //alternate solution

  function naiveSearch(long, short){
      let count = 0;
      for(let i = 0; i<long.length; i++){
          for(var j = 0; j< short.length; j++){
              if(short[j] !== long[i +j]){
                  break
              }
              if(j === short.length - 1){
                  count++
              }
          }
      }
  }
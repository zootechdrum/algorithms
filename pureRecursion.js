function collEvenVal(even){
    let newArr = [];
    
    if(even.length === 0){
      return newArr;
    }
    
    if(even[0] % 2 === 0) {
      newArr.push(even[0])
    }
    
    newArr = newArr.concat(collEvenVal(even.slice(1)));
      return newArr;
  }
  
  collEvenVal([1,2,3,4,5])
  
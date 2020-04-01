//You have an array of integeers , and for each index you want to find the product of every
//integer except the integer at the index. 


const highestProduct = (intArr , index) => {
    //Keeps track of multiple numbers that came before that
    //Index
    const allNumbersBefore = [];
    const allNumbersAfter = [];


    //We set currentProduct to 1 because
    // there are no numbers that came before the zeroth index
    //therefore we have nothing to multiply it to. 
    let currentProduct = 1;

    for(let i = 0; i < intArr.length; i++){
        allNumbersBefore[i] = currentProduct
        currentProduct *= intArr[i]
    }

    let currentProductForAfter = 1
    for(let j = intArr.length - 1; j >= 0 ; j--){
        allNumbersAfter[j] = currentProductForAfter
        currentProductForAfter *= intArr[j]
    }

    console.log(allNumbersAfter[index] * allNumbersBefore[index])

    
}

highestProduct([3,1,2,5,6,4] , 1)
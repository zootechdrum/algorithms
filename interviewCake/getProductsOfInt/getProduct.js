//You have an array of integeers , and for each index you want to find the product of every
//integer except the integer at the index. 


const highestProduct = (intArr) => {

    const ansArr = [];

    //We set currentProduct to 1 because
    // there are no numbers that came before the zeroth index
    //therefore we have nothing to multiply it to. 
    let currentProduct = 1;

    for(let i = 0; i < intArr.length; i++){
        ansArr[i] = currentProduct
        currentProduct *= intArr[i]
    }


//this loop is to find out the product after each index. 
    let currentProductForAfter = 1

    for(let j = intArr.length - 1; j >= 0 ; j--){
        ansArr[j] *= currentProductForAfter
        currentProductForAfter *= intArr[j]
    }
}

highestProduct([3,1,2,5,6,4])
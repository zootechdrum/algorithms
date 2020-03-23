const resterOrders = (takeOut, dineIn, servedOrders) => {

    let takeOutPointer = 0;
    let dineInPointer = 0;
    let firstComeFirstServe = true;
    

    for(let i = 0 ; i < servedOrders.length; i++){

        if(servedOrders[i] !== takeOut[takeOutPointer] && servedOrders[i] !== dineIn[dineInPointer] ){
            firstComeFirstServe = false
        } else if( servedOrders[i] === takeOut[takeOutPointer]){
            ++takeOutPointer
        } else if(servedOrders[i] === dineIn[dineInPointer]){
            ++dineInPointer
        }
    }

    console.log(`Is the current state of resteraunt first come first serve: ${firstComeFirstServe}`)

}

// const takeOutOrders = [1, 3, 5]
// const dineInOrders = [2, 4, 6]
// const servedOrders = [1, 2, 3, 5, 4, 6]

const takeOutOrders = [1, 3, 5]
const dineInOrders = [2, 4, 6]
const servedOrders = [1, 2, 4, 6, 5, 3]

resterOrders(takeOutOrders, dineInOrders, servedOrders)


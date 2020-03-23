const resterOrders = (takeOut, dineIn, serverOrders) => {

    let takeOutPointer = 0;
    let dineInPointer = 0;
    let firstComeFirstServe = true;
    

    for(let i = 0 ; i < serverOrders.length; i++){
        if( serverOrders[i] !== dineIn[dineInPointer] || servedOrders[i] !== takeOut[takeOutPointer] ){
            console.log(dineIn[dineInPointer])
            firstComeFirstServe = false;
        }
        
        dineInPointer += dineInPointer
        takeOutPointer += takeOutPointer
    }

    console.log(`Is the current state of resteraunt first come first serve: ${firstComeFirstServe}`)

}

const takeOutOrders = [1, 3, 5]
const dineInOrders = [2, 4, 6]
const servedOrders = [1, 2, 3, 5, 4, 6]

// const TakeOutOrders = [1, 3, 5]
// const dineInOrders = [2, 4, 6]
// const servedOrders = [1, 2, 4, 6, 5, 3]

resterOrders(takeOutOrders, dineInOrders, servedOrders)


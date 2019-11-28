
function getFinalOpenedDoors(numDoors) {
    //Fills array1 with falsy value
    let array1 = Array(100).fill(false)

    let check = [];
    for (var i = 0; i <= numDoors; i++) {

        check.push(i)
    }

    for (var i = 0; i < check.length; i++) {

        array1[i] = !array1[i];

        for (var j = 1; j < check.length; j++) {

            }

        }
        return array1
    }


getFinalOpenedDoors(100)




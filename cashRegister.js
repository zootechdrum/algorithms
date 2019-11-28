
// You have to create a program that will handle when the register does not have enough cash or will have no cash after the transaction. 
// Other than that it needs to return an array of the change in the form of an array, so that will be a 2D array.

// Hint: 1
// It is easier to handle if you have to close the register, or if you know how much money is in your register beforehand and you will not have enough money to complete the transaction. For this it is recommended to have a function to assign this information to a variable.
// try to solve the problem now

// Hint: 2
// Life is easier when you get to know the value of each currency type in the register instead of how much money is composed of that particular currency. So be sure to watch out for that.
// try to solve the problem now

//  Hint: 3
// You will have to get as much change from one type before moving to the next from greater value to lesser, and keep going until you have covered the whole change.
// try to solve the problem now

// My monser of a solution below

function checkCashRegister(price, cash, cid) {
    var cashAvailable = 0;
    var changeOwed = cash - price;
    var change = {
        'ONE HUNDRED': 100,
        'TWENTY': 20,
        'TEN': 10,
        'FIVE': 5,
        'ONE': 1,
        'QUARTER': 0.25,
        'DIME': 0.1,
        'NICKEL': 0.05,
        'PENNY': 0.01
    }

    var yourChange = {
        status: "OPEN"

    }

    var yourChange = {
        status: "OPEN",
        change: []
    }

    var noFunds = {
        status: "INSUFFICIENT_FUNDS",
        change: []
    };

    var closed = {
        status: "CLOSED",
        change: cid
    };

    var flatt = cid.reduce(
        function (acc, curr) {
            return acc.concat(curr);
        })

    for (var i = 0; i < flatt.length; i++) {
        if (typeof flatt[i] === "number") {
            cashAvailable += flatt[i];
        }
    }
    cashAvailable = Math.round(100 * cashAvailable) / 100

    if (cashAvailable < changeOwed) {
        return noFunds;
    } else if (cashAvailable === changeOwed) {
        return closed;
    }
    //the below code is for coins only and changeOwed is less than one dollar.
    var coins = 0;
    for (var i = 3; i >= 0; i--) {

        if (cid[i][1] > 0.00) {
            coins += cid[i][1];
        }
    }
    if (changeOwed > coins && changeOwed < 1.00) {
        return noFunds;
    };
    //the below code if fo the actual change returned

    var ans = [];
    var compiler = 0;
    for (var prop in change) {
        var check = changeOwed - change[prop];
        if (check < changeOwed && check > 0) {
            for (var i = cid.length - 1; i > -1; i--) {
                if (cid[i][0] === prop) {
                    var changeAvailable = cid[i][1]
                    console.log(changeAvailable)
                    while (changeAvailable > 0 && changeOwed > 0 && changeOwed >= change[prop]) {

                        changeAvailable = changeAvailable - change[prop];
                        changeOwed = changeOwed - change[prop];
                        compiler += change[prop];
                        changeOwed = Math.round(100 * changeOwed) / 100

                    }
                    ans.push([prop, compiler]);
                    compiler = 0;


                }
            }
        }
    }
    yourChange.change = ans

    return yourChange;
}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
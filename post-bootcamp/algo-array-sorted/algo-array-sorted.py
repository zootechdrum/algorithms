
#  We are creating a function that takes in an unsorted array of integers
#  and returns a sorted array with all the even numbers first in ascending order
#  and all the odd numbers in descending order after the even numbers

#  -------------------------------------------------------
#                 Helper Functions (Optional)

#  -------------------- Your Code Here --------------------
def sortEven(arr):
    for i in range(0, len(arr)):
        for j in range(i + 1, len(arr)):
            if(arr[i] > arr[j]):
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
    return arr



#  --------------------- End Code Area --------------------


#  -------------------------------------------------------
                        # Sort Function
#  -------------------------------------------------------
def up_down_start(arr):

    evenlist = []
    oddlist = []

#    -------------------- Your Code Here --------------------
    for x in arr:
        if x % 2 == 0:
            evenlist.append(x)
        else:
             oddlist.append(x)
    
    assortedEven = sortEven(evenlist)
    print(assortedEven)





#    --------------------- End Code Area --------------------



#  ------------------------------------------------------------------

testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73]
# console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
up_down_start(testArr1)

# // ------------------------------------------------------------------

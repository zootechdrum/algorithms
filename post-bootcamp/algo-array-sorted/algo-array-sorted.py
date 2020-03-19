def sort(arr , cond):
    for i in range(0, len(arr)):
        for j in range(i + 1, len(arr)):
            if( cond == 'even'):
                if(arr[i] > arr[j]):
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
            else:
                if(arr[i] > arr[j]):
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp

    return arr
#The below function takes an array and checks if numbers are devided by 2
def up_down_start(arr):

    evenlist = []
    oddlist = []

#   Depending if number is even or odd the numbers will be added to even or odd list
    for x in arr:
        if x % 2 == 0:
            evenlist.append(x)
        else:
             oddlist.append(x)
  #Helper function gets called with appropriate second para  
    assortedEven = sort(evenlist, 'even')
    assortedOdd = sort(oddlist,"odd")
    joined_list = assortedEven + assortedOdd
    #Concat the two lists. 
    return joined_list

testArr1 = [5, 32, 9, 47, 22, 6, 33, 17, 20, 73]
# console.log("The following should be [6, 20, 22, 32, 73, 47, 33, 17, 9, 5]");
up_down_start(testArr1)

# // ------------------------------------------------------------------

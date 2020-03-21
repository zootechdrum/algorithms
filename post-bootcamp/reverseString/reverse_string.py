def reverse_string(word):
    #We have to convert our word into a list
    word = list(word)
    #end-letter will get the last letter of the array
    end_letter = len(word) - 1
    

    #loops through our array
    for index, x in  enumerate(word, start=0):
        #We create this temp value to hold the last letter of our array
        temp = word[end_letter]
        #this makes last letter equal to first letter in array
        word[end_letter] = word[index]
        #We make our current letter equal to temp which holds the last letter before changing
        word[index] = temp

        #if the last_letter is equal to index then we have
        #iterated over the entire array 
        if end_letter == index:
            print('broken')
            break

        #Decrement the outer variable by one on each iteration
        end_letter = end_letter - 1   
        #Print word when we are done looping  
    print(word)

        
    
    

reverse_string('abcdefg')
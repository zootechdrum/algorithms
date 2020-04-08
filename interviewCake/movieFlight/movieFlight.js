function movieFlight(durationOfFlight, movies) {

    const movieLengths = new Set()
    
    for(let i = 0; i < movies.length; i++){

        //We chose our first movie
        let firstMovie = movies[i];

        let secondMovie = durationOfFlight - firstMovie[i]; 

        if(movieLengths.has(secondMovie)){
            return true
        }

        movieLengths.add(firstMovie)
        //How do we to the second movie
    }

    return false;

}

movieFlight(120, [60, 30, 40, 90, 60])
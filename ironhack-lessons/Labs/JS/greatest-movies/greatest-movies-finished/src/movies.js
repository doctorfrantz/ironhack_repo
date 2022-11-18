// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) { }
const getAllDirectors = (moviesArray) => {
    const rawList = moviesArray.map((movie) => movie.director)
    const genreList = rawList.filter((director, index) => rawList.indexOf(director) === index);
    // console.log(rawList);
    return rawList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// My version
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return spielbergMovies.length;
}
// Diego's Short Version
const howManyMovies2 = (moviesArray) => {
    const dramaMovies = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes('Drama'));
    return dramaMovies;
}

//Diego's Long version


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

//My version
function scoresAverage(moviesArray) {
    const movieScore = moviesArray.reduce((total, item) => item.score + total, 0);
    // console.log(movieScore);
    if (movieScore > 0) {
        let average = movieScore / moviesArray.length;
    return Number(average.toFixed(2));
    } else {
        return 0;
    }
}

//Diego's Version 1
const scoresAverage2 = (moviesArray) => {
    // Variable para guardar el valor de la suma de los scores
    let totalScores = 0;
    //mappear el array de pelis para sacar todos los scores
    const scores = moviesArray.map((movie) => movie.score);
    //Buclear en base a cada score de cada peli y vamos a sumarle el score a la variable de totalScores por CADA iteración de los elementos dentro del array
    for (let i = 0; i < scores.length; i++){
        totalScores = scores[i] + totalScores;
    }
    const totalMovieScore = totalScores / moviesArray.length;
    return totalMovieScore.toFixed(2);
}

//Diego's Version 2 - Reduce
const scoresAverageUsingReduce = (moviesArray) => {
    const scores = moviesArray.reduce((total, movie) => {
        return total += movie.score;
    }, 0);
    const totalMovieScore = scores / moviesArray.length;
    return totalMovieScore.toFixed(2);
}


// Iteration 4: Drama movies - Get the average of Drama Movies
//My version
function dramaMoviesScore(moviesArray) {
    // const movieScore = moviesArray.reduce((total, item) => item.score + total, 0);
    const dramaMovies = [];
    let dramaScore = 0;
    for (let i = 0; i < moviesArray.length; i++) {
        if (moviesArray[i].genre.includes("Drama")) {
            dramaMovies.push(moviesArray[i]);
            
        } else {
            dramaScore = 0;
        }
    }
    // console.log(dramaMovies);
    dramaScore = dramaMovies.reduce((total, item) => item.score + total, 0);
    // console.log(dramaScore);
    let average = dramaScore / dramaMovies.length;
    return Number(average.toFixed(2));
}
//Diego's Version 1 - filter(), map(), forEach() Method
const dramaMoviesScore2 = (moviesArray) => {
    //recibir todas las pelis que tengan genero drama
    const drama = moviesArray.filter((movieDrama) => {
        return movieDrama.genre.includes("Drama")
    });
    //mapeamos la variable drama y sacamos todos los scores de cada peli
    const scores = drama.map((movie) => movie.score);
    // declarr la vrible inicializada a 0 para sumarle el valor de cada score de cada peli
    let total = 0;
    scores.forEach(scores => {
        total += scores;
    });
    return (total / drama.length).toFixed(2);
}

//Diego's version 2 - using reduce()
const dramaMoviesScoreReduce = (moviesArray) => {
    const drama = moviesArray.filter((movieDrama) => {
        return movieDrama.genre.includes("Drama")
    });
    const scores = drama.reduce((total, movie) => { total += movie.score }, 0)
    const totalDrama = scores / drama.length;
    return totalDrama.toFixed(2);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//My version
function orderByYear(moviesArray) {
    
    let copy = [...moviesArray];
    // console.log(copy);
    const byYear = copy.sort((a, b) => {
        return a.year - b.year;
    });
    console.log(byYear);
    return byYear;
    
}
//Diego's Version
function orderByYear(moviesArray) {
    //hacemos una copia del array mediante un metodo map()
    const copyOfMovies = moviesArray.map((movie) => movie);
    //hacemos sort y comparamos con un metodo de strings que se llama localeCompare()
    copyOfMovies.sort((a, b) => {
        if (a.year > b.year) {
            return a.year - b.year
        }
        if (a.year < b.year) {
            return a.year - b.year
        }
        else {
            return a.title.localeCompare(b.title);
        }
    })
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//My version
function orderAlphabetically(moviesArray) {
    let copy = [...moviesArray];
    // console.log(copy);
    const byName = copy.sort((a, b) => {
        return a.title - b.title;
    });
    // console.log(byName)
    return byName;
}
//Diego's version
const orderAlphabetically = (moviesArray) => {
    return moviesArray.map((movie) => movie.title).sort().slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

'use  strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){

    const nameMovie = prompt('Один из последних просмотренных фильмов?', ''),
    mark = +prompt('На сколько оцените его?', '');

    if(nameMovie != null && mark != null && nameMovie != '' && mark != '' && nameMovie.length < 50) {
        personalMovieDB.movies[nameMovie] = mark;
    }
    else{
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);

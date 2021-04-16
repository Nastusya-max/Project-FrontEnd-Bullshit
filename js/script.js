'use  strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// rememberMyFilms();
// rememberMyFilms();
showMyDB(personalMovieDB.privat);
writeYourGenres();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for(let i = 1; i <=3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

function rememberMyFilms() {
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
}

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

console.log(personalMovieDB);

'use  strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const nameMovie = prompt('Один из последних просмотренных фильмов?', '');
const mark = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[nameMovie] = mark;
console.log(personalMovieDB);

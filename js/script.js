'use  strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 0);

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 0);
        }
    },
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: (hidden) => {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for(let i = 1; i <=3; i++) {
            let gener = prompt(`Ваш любимый жанр под номером ${i}`);
            if(gener === '' || gener === null){ 
                prompt('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            }
            else{
                personalMovieDB.genres[i-1] = gener;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            alert(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: () => {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }
        else{
            personalMovieDB.privat = true;
        }
    }
};


"use strict";

let numberOfFilms = +prompt("How", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("one", ""),
  b = +prompt("two", ""),
  c = prompt("three", ""),
  d = +prompt("four", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

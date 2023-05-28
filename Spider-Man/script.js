"use strict";

fetch("./array.json").then(response => {
  return response.json();
}).then(data => {
  
  console.log(data);
  const arrayMovies = data.list;

  for (let i = 0; i < arrayMovies.length; i++) {

    const title = arrayMovies[i].movie.name;
    const image = arrayMovies[i].movie.imageUrl;
    const cast = arrayMovies[i].movie.members;
      
    const poster = `<div class='card bg-white text-dark'>
      <img src="${image}" alt='Movie Poster' class="card-img-top"/>
      <div class='card-body'>
        <h2 class='card-title'>${title}</h2>
        <small class='card-text'>${cast}</small>
      </div>
    </div>`

    if (i < 3) {
      document.getElementsByClassName("first")[0].innerHTML += poster;
    } else if (i < 5) {
      document.getElementsByClassName("second")[0].innerHTML += poster;
    } else if (i < 8) {
      document.getElementsByClassName("third")[0].innerHTML += poster;
    } else if (i == 8) {
      document.getElementsByClassName("spiderVerse")[0].innerHTML += poster;
    } else {
      document.getElementsByClassName("venom")[0].innerHTML += poster;
    }
  }

}).catch(err => {
  console.error(err);
});
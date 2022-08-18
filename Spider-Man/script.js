"use strict";

/*fetch("https://online-movie-database.p.rapidapi.com/auto-complete?q=spider-man", {
  
  method: "GET",

  headers: {
    'X-RapidAPI-Key': '57ebe41e8dmsh52a2626e5be96c5p16a615jsn387c2ff082e5',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }

}).then(response => response.json()).then(data => {
  
  console.log(data);
  const arrayMovies = data.d;

  arrayMovies.map((element) => {
    
    //console.log(element)

    const title = element.l;
    const image = element.i.imageUrl;
    const cast = element.s;
      
      const poster = `<div>
        <img src="${image}" />
        <h2>${title}</h2>
        <small>${cast}</small>
      </div>`

      document.getElementsByClassName("container")[0].innerHTML += poster;

  })

}).catch(err => {
  console.error(err);
});*/

fetch("./array.json").then(response => {
  return response.json();
}).then(data => {
  
  console.log(data);
  const arrayMovies = data.list;

  for (let i = 0; i < arrayMovies.length; i++) {

    const title = arrayMovies[i].movie.name;
    const image = arrayMovies[i].movie.imageUrl;
    const cast = arrayMovies[i].movie.members;
      
    const poster = `<div class='card'>
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
    } else {
      document.getElementsByClassName("spiderVerse")[0].innerHTML += poster;
    }
  }

}).catch(err => {
  console.error(err);
});

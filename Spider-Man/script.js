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
  console.log(data)
});

/*.then(data => {
  
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
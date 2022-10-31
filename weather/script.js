window.onload = function () {

  let lon;
  let lat;

  let temperaturaValor = document.getElementById('temperatura-valor');
  let temperaturaDescripcion = document.getElementById('temperatura-descripcion');

  let ubicacion = document.getElementById('ubicacion');
  let iconoAnimado = document.getElementById('icono-animado');

  let vientoVelocidad = document.getElementById('viento-velocidad');

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(posicion => {

      lon = posicion.coords.longitude;
      lat = posicion.coords.latitude;

      fetch('https://open-weather13.p.rapidapi.com/city/landon', {

        method: 'GET',

        headers: {
          'X-RapidAPI-Key': 'e431e4f5f3mshf1410a6da46c162p18efbfjsn03391cd2e18b',
          'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }

      }).then(data => {

        //console.log(data);

        let temp = Math.round(data.main.temp);
        //console.log(temp);
        temperaturaValor.textContent = `${temp} ° C`;

        //console.log(data.weather[0].description);
        let desc = data.weather[0].description;
        temperaturaDescripcion.textContent = desc.toUpperCase();
        ubicacion.textContent = data.name;

        vientoVelocidad.textContent = `${data.wind.speed} m/s`;

        //para iconos estáticos
        //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
        //icono.src = urlIcon
        //console.log(data.weather[0].icon)

        //para iconos dinámicos
        console.log(data.weather[0].main);

        switch (data.weather[0].main) {

          case 'Thunderstorm':
            iconoAnimado.src = 'svg/thunder.svg';
            console.log('TORMENTA');
            break;

          case 'Drizzle':
            iconoAnimado.src = 'svg/rainy-2.svg';
            console.log('LLOVIZNA');
            break;

          case 'Rain':
            iconoAnimado.src = 'svg/rainy-7.svg';
            console.log('LLUVIA');
            break;

          case 'Snow':
            iconoAnimado.src = 'svg/snowy-6.svg'
            console.log('NIEVE');
            break;

          case 'Clear':
            iconoAnimado.src = 'svg/day.svg';
            console.log('LIMPIO');
            break;

          case 'Atmosphere':
            iconoAnimado.src = 'svg/weather.svg';
            console.log('ATMOSFERA');
            break;

          case 'Clouds':
            iconoAnimado.src = 'svg/cloudy-day-1.svg';
            console.log('NUBES');
            break;

          default:
            iconoAnimado.src = 'svg/cloudy-day-1.svg';
            console.log('por defecto');
        }

      }).catch(err => {
        console.error(err);
      });
    });
  }
};
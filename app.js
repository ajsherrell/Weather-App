
$(document).ready(function() {
  // html5 geolocation
  if (navigator.geolocation) {    
    var lat;
    var long;
    //var city;
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      //had to use the cors-anywhere magic line below for the location to translate to the api for https
      var api = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=46e5eb0b0ce017a1af1ef52098f7566b'; 
  // console.log(api);
$.getJSON(api, function(data){
       var fTemp;
       var cTemp;
       var kTemp;
       var tempSwap=true;
       var weatherType= data.weather[0].description;
        kTemp = data.main.temp;
       var windSpeed= data.wind.speed;
       var city = data.name;
       //console.log(city);
    //Temperture in Kelvin
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp-273).toFixed(1);
          $("#city").html(city);
          $("#weatherType").html(weatherType);
          $("#fTemp").html(fTemp + " &#8457");
          $("#fTemp").click(function() {
            if (tempSwap === false) {
              $("#fTemp").html(fTemp + " &#8457");
              tempSwap = true;
            } else {
              $("#fTemp").html(cTemp + " &#8451");
              tempSwap = false;
            }
          }); //ends temp function

          windSpeed = (2.237 * windSpeed).toFixed(1);
          $("#windSpeed").html(windSpeed + " mph");
          // console.log(windSpeed);
  if (fTemp > 85) {
            $("body").css(
              "background-image",
              "url(http://orig00.deviantart.net/3b42/f/2011/217/8/6/desert_background_by_palpatine-d45iztn.jpg)"
            );
          } else if (fTemp > 75) {
            $("body").css(
              "background-image",
              "url(https://i.ytimg.com/vi/3EXe5cx5S-0/maxresdefault.jpg)"
            );
          } else if (fTemp > 55) {
            $("body").css(
              "background-image",
              "url(https://s-media-cache-ak0.pinimg.com/originals/86/fa/a1/86faa16df29efcd86823b33063daa51c.jpg)"
            );
          } else if (fTemp > 40) {
            $("body").css(
              "background-image",
              "url(http://earthvisioninstitute.org/wp-content/uploads/2014/03/AP-8-9-deploy-for-Ambassadors.jpg)"
            );
          } else {
            $("body").css(
              "background-image",
              "url(https://goingmonochrom.files.wordpress.com/2015/02/snow-queen-raw-1-of-1.jpg)"
            );
          } //ends else
    }).fail(function() {
    console.log( "error" ); 
})// end json func
    }); // end position func
  } // ends geo if
}); // end doc.ready
                       

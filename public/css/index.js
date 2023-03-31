const input = $(".big-input");

input.on("keyup", function(event) {
  if (event.keyCode === 13) {
    input.addClass("small-input");
  }
});



const mail = $(".mail-input");

mail.click(function(){
    mail.addClass("mail-input-after ")
});

const names = $(".name-input");

names.click(function(){
    names.addClass("name-input-after ")
});

names.on("keyup", function(event) {
  if (event.keyCode === 9) {
    names.addClass("name-input-after");
  }
});

$(document).ready(function() {
  $('#cityForm').submit(function(event) {
      event.preventDefault();
      const cityName = $('#cityName').val();
      const url = '/weather';
      const data = {cityName: cityName};

      $.post(url, data, function(response) {
          $('#temp').text(response.temp+' °C').addClass("animation").one("animationend", function() {
            $(this).removeClass("animation");
          });
          $('#description').text(response.description).addClass("animation").one("animationend", function() {
            $(this).removeClass("animation");
          });
          $('#icon').attr('src', response.iconUrl).addClass("animation").one("animationend", function() {
            $(this).removeClass("animation");
          });

          if (response.icon === "04n" || response.icon === "04d"){
            $("#cloud1").attr("src","https://focused-hawking-0007ec.netlify.app/img/png/broken%20clouds.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud2").attr("src", "https://focused-hawking-0007ec.netlify.app/img/png/broken%20clouds.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud3").attr("src","https://focused-hawking-0007ec.netlify.app/img/png/broken%20clouds.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
          }
          else if (response.icon === "01d"){
            $("#cloud1").attr("src","https://static.vecteezy.com/system/resources/previews/009/344/657/non_2x/sun-transparent-background-free-png.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud2").attr("src", "https://static.vecteezy.com/system/resources/previews/009/344/657/non_2x/sun-transparent-background-free-png.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud3").attr("src","https://static.vecteezy.com/system/resources/previews/009/344/657/non_2x/sun-transparent-background-free-png.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
          }
          else if (response.icon === "01n"){
            $("#cloud1").attr("src","https://static.vecteezy.com/system/resources/previews/001/193/143/original/full-moon-png.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud2").attr("src", "https://static.vecteezy.com/system/resources/previews/001/193/143/original/full-moon-png.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud3").attr("src","https://static.vecteezy.com/system/resources/previews/001/193/143/original/full-moon-png.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
          }
          
          else if (response.icon === "50d" || response.icon === "50n"){
            $("#cloud1").attr("src","https://cdn-icons-png.flaticon.com/512/1809/1809293.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud2").attr("src", "https://cdn-icons-png.flaticon.com/512/1809/1809293.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud3").attr("src","https://cdn-icons-png.flaticon.com/512/1809/1809293.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            console.log(response.icon);
          }
          else if (response.icon === "13d" || response.icon === "13n"){
            $("#cloud1").attr("src","https://cdn-icons-png.flaticon.com/512/2691/2691904.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud2").attr("src", "https://cdn-icons-png.flaticon.com/512/2691/2691904.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud3").attr("src","https://cdn-icons-png.flaticon.com/512/2691/2691904.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
          }
          else if (response.icon === "03n" || response.icon === "03d"){
            $("#cloud1").attr("src","https://www.pngkey.com/png/full/1-18114_vector-clouds-png-cloud-png-clip-art.png").removeClass("d13").addClass("animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;;
            $("#cloud2").attr("src", "https://www.pngkit.com/png/full/359-3595882_clipart-of-cloudy-animated-cloud-and-bulut-dark.png").removeClass("d13").addClass("animation").removeClass("d13").one("animationend", function() {
              $(this).removeClass("animation");
            });;;
            $("#cloud3").attr("src","https://www.pngkey.com/png/full/1-18114_vector-clouds-png-cloud-png-clip-art.png").removeClass("d13").addClass("animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;;
          }
          else if (response.icon === "02n" || response.icon === "02d"){
            $("#cloud1").attr("src","https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/Partly_Cloudy-512.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud2").attr("src", "https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/Partly_Cloudy-512.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud3").attr("src","https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/Partly_Cloudy-512.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
          }
          else if (response.icon === "09d" || response.icon === "09n" ){
            $("#cloud1").attr("src","https://cdn-icons-png.flaticon.com/512/106/106044.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud2").attr("src", "https://cdn-icons-png.flaticon.com/512/106/106044.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud3").attr("src","https://cdn-icons-png.flaticon.com/512/106/106044.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
          }
          else if (response.icon === "10d" || response.icon === "10n"){
            $("#cloud1").attr("src","https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/Partly_Cloudy-512.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud2").attr("src", "https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/Partly_Cloudy-512.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud3").attr("src","https://cdn3.iconfinder.com/data/icons/sunnyday-2/142/Partly_Cloudy-512.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
          }
          else if (response.icon === "11d" || response.icon === "11n"){
            $("#cloud1").attr("src","https://cdn-icons-png.flaticon.com/512/1146/1146799.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud2").attr("src", "https://cdn-icons-png.flaticon.com/512/1146/1146799.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
            $("#cloud3").attr("src","https://cdn-icons-png.flaticon.com/512/1146/1146799.png").addClass("d13 animation").one("animationend", function() {
              $(this).removeClass("animation");
            });;
          }
          console.log(response.icon);
      }).fail(function() {
          $('#temp').text('Error: Invalid city name');
          $('#description').text('');
          $('#icon').attr('src', '');
      });
  });
});

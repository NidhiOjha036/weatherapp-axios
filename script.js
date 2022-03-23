//API-fd38a1f42c868cb7b4e44398e769506a


function getWeather(cityName){

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd38a1f42c868cb7b4e44398e769506a&units=metric`

      //show loading
       const messageElement=document.getElementById("message");
       messageElement.innerText=`Loading...`;
       messageElement.style.color="grey";

    // Make a request for a user with a given ID
    axios.get(url)
    .then(function (response) {
      // handle success
      
      messageElement.innerText=`It is now ${response.data.main.temp}C`;
      messageElement.style.color="black";
      
    })
    .catch(function (error) {
      // handle error
      messageElement.innerText=error;
      messageElement.style.color="red";
    })
    
  
  }

  window.onload=function(){
    document.getElementById("sendButton").onclick=function(){
      //get the city name from the text field
      const cityName=document.getElementById("cityTextInput").value;

      //call getWeather function
      getWeather(cityName);

    }
  }

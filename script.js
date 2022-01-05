var documentBody = document.querySelector('#result-content');
var searchButton = document.querySelector('#btn1');
var documentData=document.createElement('h1')
var forecastDisplay=document.createElement('h1')

var citiesEl=documentBody.querySelector('#previous-cities')
var appendButton=document.querySelector('#btn2')



//localStorage.setItem("Location",cityy)
var APIKey="63d3703182d983d34bc087f52a0e6d35"

function getApi() {
  
  var city = localStorage.getItem("Location")
  var queryURL="http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey +"&units=metric"
  //var queryURL1="https://api.openweathermap.org/data/2.5/onecall?q=" + city + "&exclude=minutely,hourly&appid=" + APIKey
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
      documentData.textContent=document.querySelector("#location").value;
      documentBody.append(documentData)
     //iterate to retrieve the forecast for the upcoming days  
     for (var i=0;i<41;i+=8){
       // console.log(i)
      var resultCard = document.createElement('p');
      
      resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
      
      resultCard.innerHTML='<strong>'+data.list[i].dt_txt+'</strong>'+ '<br/>'
      resultCard.innerHTML+='<strong>Temperature:</strong> ' + data.list[i].main.temp+ " <sup>o</sup>C"+'<br/>' 
      resultCard.innerHTML+='<strong>Umidity:</strong> ' + data.list[i].main.humidity +" %"+ '<br/>' 
      resultCard.innerHTML+='<strong>Wind:</strong> ' + data.list[i].wind.speed + " MPH"+'<br/>' 
       //forecastDisplay.textContent="5 Days Average:"
      
      documentBody.append(resultCard)//forecastDisplay)
      $('input[name="location"]').val('');
     }
      
    }

    )}

    function appendPastSearches(event) {
      event.preventDefault();
    
      var cityName = localStorage.getItem("Location");
      console.log(cityName)
     
    
      var cityEl = $('p');
      cityEl.textContent(cityName);
    
      console.log(cityEl)
    
      
      // clear the form input element
     // $('input[name="location"]').val('');
      citiesEl.appendChild(cityEl);
    }

    
appendButton.addEventListener("click",myFunction) 
searchButton.addEventListener("click", function(event) {
      event.preventDefault();
      var cityy=document.querySelector("#location").value;
      localStorage.setItem("Location", cityy);
      
      
      getApi()
      
    })

 
    function myFunction(event) {
      event.preventDefault()
      var node = document.createElement("LI");
      var textnode = document.createTextNode(localStorage.getItem("Location"));
      node.appendChild(textnode);
      document.getElementById("myList").appendChild(node);
      node.addEventListener("click",getApi)
    }
    
    
    
var documentBody = document.querySelector('#result-content');
var searchButton = document.querySelector('#btn1');
var documentData=document.createElement('h1')
var cityEl=document.querySelector('#location')


function getApi() {
  var APIKey="63d3703182d983d34bc087f52a0e6d35"
  var city = localStorage.getItem("Location")
  
  var queryURL="https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey +"&units=metric"

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
     $("#result-content").html('<div></div>');  
     documentBody.append(documentData)
     documentData.textContent=city
      
      //iterate to retrieve the forecast for the upcoming days and display them
     
     for (var i=0;i<41;i+=8){
        
      var resultCard = document.createElement('p');
      resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
      
      resultCard.innerHTML='<strong>'+data.list[i].dt_txt+'</strong>'+ '<br/>'
      resultCard.innerHTML+='<strong>Temperature:</strong> ' + data.list[i].main.temp+ " <sup>o</sup>C"+'<br/>' 
      resultCard.innerHTML+='<strong>Umidity:</strong> ' + data.list[i].main.humidity +" %"+ '<br/>' 
      resultCard.innerHTML+='<strong>Wind:</strong> ' + data.list[i].wind.speed + " MPH"+'<br/>' 
      
      documentBody.append(resultCard)
     }
    }
  )
}
 
searchButton.addEventListener("click", function(event) {
      event.preventDefault();
      //setting current city on localStorage
      var city=document.querySelector("#location").value;
      localStorage.setItem("Location", city);
      
      getApi()
      
    })
 
 searchButton.addEventListener("click",appendCities)   

 //append past searches and make them clickable
    function appendCities(event) {
      event.preventDefault()
      var node = document.createElement("h1");
      node.setAttribute("id","cityname")
      node.textContent=localStorage.getItem("Location");
      document.getElementById("citiesList").appendChild(node);
      
      node.addEventListener("click",function(){
      document.getElementById('location').value = ""
      var city=node.textContent 
      localStorage.setItem("Location",city) 
      
      getApi()
      })
    }
    
    
    
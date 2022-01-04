var documentBody = document.querySelector('#result-content');
var fetchButton = document.querySelector('#btn1');
var documentData=document.createElement('h1')
var resultCard = document.createElement('p');
var forecastDisplay=document.createElement('h1')

resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

//localStorage.setItem("Location",cityy)
var APIKey="63d3703182d983d34bc087f52a0e6d35"




function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var city = localStorage.getItem("Location")
  var queryURL="http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey +"&units=metric"

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
      documentData.textContent=document.querySelector("#location").value;
     
      resultCard.innerHTML='<strong>'+data.list[0].dt_txt+'</strong>'+'<br>' 
      resultCard.innerHTML+='<strong>Temperature:</strong> ' + data.list[0].main.temp+ " C"+'<br/>' 
      resultCard.innerHTML+='<strong>Umidity:</strong> ' + data.list[0].main.humidity +" %"+ '<br/>' 
      resultCard.innerHTML+='<strong>Wind:</strong> ' + data.list[0].wind.speed + " MPH"+'<br/>' 
      forecastDisplay.textContent="5 Days Average:"
      
      documentBody.append(documentData,resultCard,forecastDisplay)
      
      
    }

    )}


    fetchButton.addEventListener("click", function(event) {
      event.preventDefault();
      var cityy=document.querySelector("#location").value;
      localStorage.setItem("Location", cityy);
      
      
      
      getApi()
    })

 
 
 
 //var titleEl = document.createElement('h3');
 //titleEl.textContent = resultObj.title;



//fetchButton.addEventListener('click', getApi);

      //Loop over the data to generate a table, each table row will have a link to the repo url
     /* for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].name
        //link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}
*/

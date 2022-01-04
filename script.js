var documentBody = document.querySelector('#result-content');
var fetchButton = document.querySelector('#btn1');


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
    }

    )}


    fetchButton.addEventListener("click", function(event) {
      event.preventDefault();
      var cityy=document.querySelector("#location").value;
      localStorage.setItem("Location", cityy);
      
      var documentData=document.createElement('h1')
      documentData.textContent=localStorage.getItem("Location")
      documentBody.append(documentData)
      getApi()
    })


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

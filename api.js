// const searchForm = document.querySelector('form');
const submitButton = document.querySelector('.submit');
const section = document.querySelector(".searchResults");

submitButton.addEventListener('click', fetchResults);

function fetchResults(e){
    e.preventDefault();
fetch('https://api.covid19api.com/summary')
.then(function(result) {
    return result.json();
}).then (function(json){
    displayResults(json);
})
}
function displayResults(json){
    // console.log("DisplayResults" , json);
    console.log (json);
    let country = json;

    if (country.length === 0){
        console.log("No Results");
    } else {

        let randomValue = Math.floor(Math.random() * (country.Countries.length - 0 ) + 0);
        let current = country.Countries[randomValue];
        console.log(current);

        let article = document.createElement('article');
        let place = document.createElement('h1');
        let heading = document.createElement('h2');
        let newConfirmed = document.createElement('p');
        let totalConfirmed = document.createElement('p');
        let newDeaths = document.createElement('p');
        let totalDeaths = document.createElement('p');

        place.textContent = "Country: " + current.Country;
        newConfirmed.innerText = "New Confirmed: " + current.NewConfirmed;
        totalConfirmed.innerText = "Total Confirmed: " + current.TotalConfirmed;
        newDeaths.innerText = "New Deaths: " + current.NewDeaths;
        totalDeaths.innerText = "Total Deaths: " + current.TotalDeaths;

        article.appendChild(heading);
        heading.appendChild(place);
        heading.appendChild(newConfirmed);
        heading.appendChild(totalConfirmed);
        heading.appendChild(newDeaths);
        heading.appendChild(totalDeaths);
        section.appendChild(article);
    }
}




const loadDataFromApi = () => {

    document.getElementById('mainPageTitle').value = 'Countries';

    url = 'https://restcountries.com/v3.1/all';
    fetch(url)
        .then(response => response.json())
        .then(countryData => {
            console.log(countryData);
            displayCountries(countryData);
            document.getElementById('totalCountryCountId').innerHTML = `
             Total Country : ${countryData.length}           
        `;
        })
}

const displayCountries = (countries) => {
    countries.map(element => {
        console.log(element);
        displayIndividualCountry(element)
    });
}

//destructuring
const displayIndividualCountry = ({ capital, area, maps, flags }) => {

    const parentNode = document.getElementById('listSection');

    let divTag = document.createElement('div');
    divTag.className = 'col';
    divTag.id = 'countryShow';

    divTag.innerHTML = `
    <img src=${flags.png}>
        <p>Capital :  ${capital}</p>
        <p>area : ${area}</p>
        <a href=${maps.googleMaps}>Maps</a>
    `;

    parentNode.appendChild(divTag);
    console.log(` capital : ${capital} 
    area : ${area}
    maps : ${maps.googleMaps}
    flags :  ${flags.png}
    `);
}

loadDataFromApi();














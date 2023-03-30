
const loadDataFromApi=()=>{
    url = 'https://openapi.programming-hero.com/api/news/categories';
fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countryData => {
        console.log(countryData);
        displayCountries(countryData);
    })
}
    
const displayCountries=(countries)=>{
    countries.map(element=>{
        console.log(element);
        displayIndividualCountry(element)
    });
}

//destructuring
const displayIndividualCountry=({capital,area,maps})=>{
    console.log(` capital : ${capital} 
    area : ${area}
    maps : ${maps.googleMaps}
    `);
}

loadDataFromApi();

// const allNewsCategory = (data) => {

//     const news_category=data.news_category;
//     const parentNode=document.getElementById('listSection');

//     for(const categoryName of news_category){ 
//         console.log(categoryName['category_name']);
//         let newCategory=categoryName['category_name'];
        
//         let createDiv=document.createElement('div');
//         createDiv.className="col";

//         createDiv.innerHTML=`
//             <a href="#" id="newCategoryId"> ${newCategory} </a>
//         `
//         parentNode.appendChild(createDiv);
//    }
// }













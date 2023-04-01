
const loadDataFromApi=()=>{
    url = 'https://openapi.programming-hero.com/api/news/categories';
fetch(url)
    .then(response => response.json())
    .then(countryData => {
        console.log(countryData);
    })
}


const allNewsCategory = (data) => {

    const news_category=data.news_category;
    const parentNode=document.getElementById('listSection');

    for(const categoryName of news_category){ 
        console.log(categoryName['category_name']);
        let newCategory=categoryName['category_name'];
        
        let createDiv=document.createElement('div');
        createDiv.className="col";

        createDiv.innerHTML=`
            <a href="#" id="newCategoryId"> ${newCategory} </a>
        `
        parentNode.appendChild(createDiv);
   }
}

loadDataFromApi();












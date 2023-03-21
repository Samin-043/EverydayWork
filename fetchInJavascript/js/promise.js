
const displayParagraph=document.getElementById('display');

function fetchData(){
    url='http://localhost:2555/data.txt';
    fetch(url)
        .then(res=>res.text())
        .then(data=> {
            displayParagraph.innerHTML=data;
        })
}


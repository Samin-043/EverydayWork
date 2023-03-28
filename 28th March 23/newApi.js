url = 'https://jsonplaceholder.typicode.com/comments';

const buttonId = document.getElementById('btnId');
buttonId.addEventListener('click', () => {
    getData();
})

function getData() {
    fetch(url)
        .then(response => response.json())
        .then(result => showData(result))
}


const showData = (data) => {
    let parentDiv=document.getElementById('container');
    data.forEach(element => {
        let childDiv=document.createElement("div");
        childDiv.id='customDiv';
        childDiv.classList.add='col';
        childDiv.innerHTML=`
        <h3>Id : ${element.id}</h3>
         <h3>Name : ${element.name}</h3>
         <h3>Email : ${element.email}</h3>
             
        `
        parentDiv.appendChild(childDiv);
    });
    console.log(data);
}






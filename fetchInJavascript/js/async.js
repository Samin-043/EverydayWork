let button=document.getElementById('btn');
let newImage=document.getElementById('image');


button.addEventListener('click' ,()=> {
    fetchData();
});

async function fetchData() {
    // url = 'https://dog.ceo/api/breeds/image/random';
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const imageData= await res.json();
        console.log(imageData);
    } catch {
        console.log('File missing');
    }
}


// function fetchData () {
//     fetch('https://dog.ceo/api/breeds/image/random')
//     .then(res => res.json())
//     .then(result => {
//         console.log(result)
//         Image.src = result.message;
//     })
// }










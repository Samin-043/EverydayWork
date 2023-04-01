const images = ['image1.jpg',
    'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'
];

console.log(images.length);
images.map(image=>console.log(image));
const img=document.getElementById('showImage');

let index=0;
setInterval(() => {
    if(index===images.length){
        // alert('no more images!!!!.........again restart');
        index=0;
    }
    console.log(images[index]);
    let url=`images\/${images[index]}`;
    img.setAttribute('src',url);
    img.style.height="200px";
    img.style.width="200px";
    index++;
}, 1000);

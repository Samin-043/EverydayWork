let buttonID=document.getElementById('btnId');
buttonID.addEventListener('click',()=>{
    console.log(`button e asche......
    dhonnobad button tomake
                `);
    findNumber();
});

let number=[];

function findNumber(){
    let inputTagId=document.getElementById('inputId').value;
    number.push(inputTagId);
    console.log(number);

    console.log(inputTagId);
    document.getElementById('inputId').value='';
}

let buttonIDTo=document.getElementById('btnIdTwo');
buttonIDTo.addEventListener('click',()=>{
    showAllNumber();
});

function showAllNumber(){
    let newArr=[...number];
    console.log(Math.max(newArr));
    document.getElementById('showNumberId').innerHTML=newArr;
}










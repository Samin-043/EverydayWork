const people = {
    name: "",
    age: "",
    work: "",
    hobby: ""
};

let btn = document.getElementById('buttonId');
btn.addEventListener('click', () => {
    findEmployeeData();
});


function findEmployeeData() {
    people.name = document.getElementById('nameId').value;
    people.age = document.getElementById('ageId').value;
    people.work = document.getElementById('workId').value;

    //destructering......
    let { name } = people;
    let { age } = people;
    let { work } = people;

    console.log(`${name} ${age} ${work}`);
}

let showButton = document.getElementById('buttonTwoId');
showButton.addEventListener('click', () => {
    showData();
});

function showData() {
    document.getElementById('shownameId').innerHTML = people.name;
    document.getElementById('showageId').innerHTML = people.age;
    document.getElementById('showworkId').innerHTML = people.work;
}



let arr = [];
let newArr = [];
let addButtonId = document.getElementById('addYear');
addButtonId.addEventListener('click', () => {
    yearAdd();
});

function yearAdd() {
    let year = document.getElementById('yearId').value;
    console.log(year);
    arr.push(year);
    console.log(...arr);
    document.getElementById('yearId').value='';
    document.getElementById('result').value='';
}

let buttonId = document.getElementById('click');
buttonId.addEventListener('click', () => {
    calculation();
})

let check=false;
const findLeapYear = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 4 == 0 && arr[i] % 100 != 0) || (arr[i] % 400 == 0)) {
            check=true;
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


function calculation() {
    let result = findLeapYear(arr);
    let showOutput;
    if (check === false) {
        showOutput = `No year found`;
    }
    else {
        showOutput = `${result}`;
    }
    let findResult = document.getElementById('result');
    findResult.innerHTML = showOutput;
}

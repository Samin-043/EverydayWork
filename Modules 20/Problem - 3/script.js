const arr = [];

let addButtonId = document.getElementById('addYear');
addButtonId.addEventListener('click', () => {
    yearAdd();
});

function yearAdd() {
    let year = document.getElementById('yearId').value;
    console.log(year);
    arr.push(year);
    console.log(...arr);
    document.getElementById('yearId').value = '';
    document.getElementById('result').value = '';
}

let buttonId = document.getElementById('click');
buttonId.addEventListener('click', () => {
    calculation();
})


let sum=0;
const findOddSum = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i]=parseInt(arr[i]);
        if (arr[i] % 2 === 1) {
            sum = sum + arr[i];
        }
    }
    return sum;
}


function calculation() {
    let result = findOddSum(arr);
    let showOutput;
    showOutput = `${result}`;
    let findResult = document.getElementById('result');
    findResult.innerHTML = showOutput;
}

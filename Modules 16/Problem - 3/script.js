
let buttonId = document.getElementById('click');
buttonId.addEventListener('click', () => {
    calculation();
})

function calculation() {
    let first = document.getElementById('firstId').value;
    let second = document.getElementById('secondId').value;
    let result=`${first} ${second}`;
    console.log(result);

    let findResult = document.getElementById('result');
    findResult.innerHTML = result;
}



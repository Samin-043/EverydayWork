
let buttonId = document.getElementById('click');
buttonId.addEventListener('click', () => {
    calculation();
})

function calculation() {
    let number = document.getElementById('number').value;
    number = parseInt(number);
    let remainder= number%5;

    let findResult = document.getElementById('remain');
    findResult.innerHTML = remainder;
}



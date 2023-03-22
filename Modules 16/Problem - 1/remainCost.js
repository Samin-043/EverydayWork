
let buttonId = document.getElementById('click');
buttonId.addEventListener('click', () => {
    calculation();
})

function calculation() {
    let totalTaka = document.getElementById('totalTaka').value;
    let orangeCost = document.getElementById('orangeCost').value;
    let appleCost = document.getElementById('appleCost').value;
    totalTaka = parseInt(totalTaka);
    orangeCost = parseInt(orangeCost);
    appleCost = parseInt(appleCost);
    let res = totalTaka - (orangeCost + appleCost);

    let findResult = document.getElementById('remainCost');
    findResult.innerHTML = res;
}




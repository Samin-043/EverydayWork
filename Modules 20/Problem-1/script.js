let buttonId = document.getElementById('click');
buttonId.addEventListener('click', () => {
    calculation();
})

const hourToMinutes=(hour)=>{
    return hour*60;
}

function calculation() {
    let hour = document.getElementById('hourId').value;
    hour=parseInt(hour);
    
    let output=hourToMinutes(hour);
    let showOutput=`${output} min`;
    let findResult = document.getElementById('result');
    findResult.innerHTML = showOutput;
}

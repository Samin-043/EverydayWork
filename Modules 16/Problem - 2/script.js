let buttonId = document.getElementById('click');
buttonId.addEventListener('click', () => {
    calculation();
})

function calculation() {
    let math = document.getElementById('mathematicsId').value;
    let biology = document.getElementById('biologyId').value;
    let chemistry = document.getElementById('chemistryId').value;
    let physics= document.getElementById('physicsId').value;
    let bangla =document.getElementById('banglaId').value;

    math=parseFloat(math);
    biology=parseFloat(biology);
    chemistry=parseFloat(chemistry);
    physics=parseFloat(physics);
    bangla=parseFloat(bangla);

    //console.log(`math : ${math} biology : ${biology} chemistry : ${chemistry} physics : ${physics} bangla : ${bangla}`);
    let totalMarks=math+biology+chemistry+physics+bangla;
    let avgMarks = totalMarks/5;
    avgMarks=avgMarks.toFixed(2);

    let findResult = document.getElementById('result');
    findResult.innerHTML = avgMarks;
}

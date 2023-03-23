const oddArr=[1,3,5,7,9];
///using Array.map
const evenArr=oddArr.map(oddArr=>{
    return oddArr=oddArr+1;
});

console.log(...evenArr);

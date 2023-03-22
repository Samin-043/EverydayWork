const prompt=require("prompt-sync")({sigint:true});

let givenTaka=prompt();
let totalCost=prompt();
givenTaka=parseInt(givenTaka);
totalCost=parseInt(totalCost);
let remainTaka=givenTaka-totalCost;
console.log(remainTaka);

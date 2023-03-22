const prompt=require("prompt-sync")({sigint:true});

let hour=prompt("Hour : ");
hour=parseInt(hour);
const hourToMinutes=(hour)=>{
    return hour*60;
}

console.log(hourToMinutes(hour));


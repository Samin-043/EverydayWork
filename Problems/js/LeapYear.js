const arr=[2023,2024,2025,2028,2030];
const newArr=[];
const findLeapYear=(arr)=>{
    for(let i=0;i<arr.length;i++){
        if((arr[i]%4==0&&arr[i]%100!=0)||(arr[i]%400==0)){
            newArr.push(arr[i]);
        }    
    }
    return newArr;
}
console.log(findLeapYear(arr));


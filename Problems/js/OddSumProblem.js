const arr=[5,7,8,10,45,30];
let sum=0;
const findOddSum=(arr)=>{
   for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            sum+=arr[i];
        }  
   }
   return sum;
}
console.log(findOddSum(arr));
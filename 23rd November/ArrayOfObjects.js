const people=[
    {
        name:'Tamim', 
        age:30
    },
    {
        name:'Shakib',
        age:30
    },
    {
        name:'Towhid Ridoy',
        age:20
    }
]

// let sum=0;
// sum+=people[0].age+people[1].age+people[2].age;
// //console.log(`${sum}`);

// const arr=[1,2,3,4,5];
// let i=0;
// const sumOfArray=arr.reduce((sum,i)=>{
//     return sum+i;
// });

let totalAge=0;
for(let index=0;index<people.length;index++){
    totalAge+=people[index].age;
}
console.log(totalAge);






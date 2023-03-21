const user = [{ name: 'abc', age: 20, Address: 'Bangladesh' }, { name: 'xyz', age: 25, Address: 'Dubai' }
];

// console.log(user[1].Address);

const customer={
    id:121,
    name:'Mashrafee',
    address:{
        house:25,
        road:8,
        block:'F',
        area:'Banasree',
        district:'Dhaka'
    },
    totalProduct:12
};


let area=customer.address?.area;
console.log(area);


const number=[1,2,3,4,5,6];

const rs=number 
    .filter(n=>n%2==0)
    .map(n=>n*3);

console.log(rs);
    

const products=[
    {name:"Pen",price:1000},
    {name:"Book",price:12000},
    {name:"Bag",price:20000},
    {name:"Laptop",price:2000000}
];

const total=products
    .filter(p=>p.price>=5000)
    .map(p=>p.price*0.8)
    .reduce((sum,price)=>sum+price);

console.log(total);

type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

function handleData(arr: (User | Product | Order)[]): string[] {
  return arr.map((item) => {
    if (item.type === 'user') return `Hello ${item.name},${item.age}`
    else if (item.type === 'product') return `The product id is ${item.id}, price is ${item.price}`
    else if (item.type === 'order') return `Order summary : Order Id is ${item.orderId}, amount: ${item.amount}`
    else return 'Unknown type'
  })
}
console.log(handleData([{
  type: 'user',
  name: "olga",
  age: 33
}
  , {
  type: 'product',
  id: 2,
  price: 100
},
{
  type: 'order',
  orderId: '434',
  amount: 1
}
],))
let arr = [
  {
    name: "Petrosuhi",
    sex: "female",
    country: "Armenia",
  },

  {
    name: "Avet",
    sex: "male",
    country: "Armenia",
  },
  {
    name: "Avet",
    sex: "male",
    country: "Armenia",
  },
  {
    name: "Poghos",
    sex: "male",
    country: "Armenia",
  },
  {
    name: "Avet",
    sex: "male",
    country: "Armenia",
  },
  {
    name: "Lotus",
    sex: "female",
    country: "China",
  },
  {
    name: "Burten",
    sex: "male",
    country: "USA",
  },
  {
    name: "Narek",
    sex: "male",
    country: "Armenia",
  },
];

// filterBy(arr, country)

// output

let outPut = {
  Armenia: [
    {
      name: "Narek",
      sex: "male",
      country: "Armenia",
    },
  ],
  USA: [
    {
      name: "Burten",
      sex: "male",
      country: "USA",
    },
  ],
};

let result = function filterBy(arr, filterKey) {
  // your code
};

let products = [
  { id: 12, price: 600, discount: 10, qty: 3 },
  { id: 16, price: 400, discount: 0, qty: 2 },
  { id: 19, price: 600, discount: 0, qty: 3 },
];

let amount = products.reduce((accum, prod) => {
  let sum = prod.price * prod.qty;
  let discountedSum = sum * (1 - prod.discount / 100);
  accum += discountedSum;
  return accum;
}, 0);

console.log(amount);

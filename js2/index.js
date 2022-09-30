// const rootEl = document.createElement("div")
// const sexEl = document.createElement("input")
// const countryEl = document.createElement("input")
// const btnEl = document.createDocumentFragment("button")

// rootEl.className = "jony"

// rootEl.appendChild(sexEl)
// rootEl.appendChild(countryEl)
// rootEl.appendChild(btnEl)
let obj = {
  name: "Petrosuhi",
  sex: "female",
  country: "Armenia",
};

function isEmpty(o) {
  return Object.keys(o).lentgh === 0;
}

let newObj = Object.values(obj).map((elem) => elem.toUpperCase());
console.log(newObj);
for (let k in obj) {
  console.log(k);
}

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

// another lucum
// let userSay = prompt("filter by country: ")

// filterBy(arr, country)

// output

// function filterByCountry(arr, userSay){
//   let newArray = [];
//   for(let i =0; i<arr.length; i++){
//     if(arr[i].country === userSay){
// newArray.push(arr[i])
//     }
//   }
// return newArray;
// }

// let countryFunc = filterByCountry(arr, userSay)
// console.log(countryFunc)

// another lucum

//  let newArray = arr.filter(elem =>{
//   return elem.country === userSay
//  })
//   console.log(newArray)
// let newArr = {

// }

// let c = arr.reduce((prev,elem,index)=>{
//   newArr[elem.country] = [];
//   console.log(newArr)
//   if(elem.country !== newArr.key){

//     newArr.key = elem.country;

//     newArr[elem.country] += elem

//   }else {
//     (newArr[elem.country]) +=elem

//   }
//   return prev;
// })
// console.log(c)

// let xanut = [
//   {
//     id: 12,
//     price:600,
//     discount:10,
//     qty: 3

// },
// {
//   id:16,
//   price:400,
//   discount:0,
//   qty: 2,

// },
// {
//   id:19,
//   price:600,
//   discount: 0,
//   qty: 1,

// },
// ]

// let gin = xanut.reduce((prev, elem, index) =>{
//   prev +=(elem.price*elem.qty)*((100 - elem.discount)/100)

//   return prev
// },0)
// // console.log(gin)

// function filterBy(arr,userKey){
// const newobj = {
// }

//  for(let i = 0; i<arr.length; i++){
//   if(!newobj[arr[i][userKey]] ){
//     newobj[arr[i][userKey]] = [ arr[i] ]

//   }else{
//     newobj[arr[i][userKey]].push(arr[i])

//   }
//  }

// return newobj;
// }
// let c = filterBy(arr, "country")
// console.log(c)

function filterBy(arr, userSay) {
  const newArr = arr.reduce((prev, elem, index) => {
    if (!(elem[userSay] in prev)) {
      prev[elem[userSay]] = [elem];
    } else {
      prev[elem[userSay]].push(elem);
    }
    return prev;
  }, {});
  return newArr;
}

let newArr2 = filterBy(arr, "country");
console.log(newArr2);

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

// let newArray = []
// function filterByCountry(arr, country){
// for(let i = 0; i<arr.length; i++){
//   if(arr[i].country === country){
//     newArray.push(arr[i])
//   }
// }

// return newArray;
// }
// let  c =  filterByCountry(arr, "Armenia")
// console.log(newArray)

//  Smbati lucum@
// function filterByCountry(arr){
//   let newArray = {};
//   for(let i = 0; i<arr.length; i++){
//     let country = arr[i].country
//     if(!(newArray[country])){
//       newArray[country] = arr.filter(elem => {
//         return country === elem.country
//       })
//     }
//   }

// return newArray
// }
// let  c =  filterByCountry(arr)
// console.log(c)

// let result = Object.values(salaries).reduce((prev, elem) => (prev += elem));
// console.log(result);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,

  innerObj: {
    name: "dal",
    arr: [],
  },

  sayHi: () => {
    console.log("say hi" + this.John);
  },
};

// console.log(salaries.sayHi());

// let obj22 = {
//   age: 11,
//   hello: function () {
//     let obj33 = {
//       age: 22,
//       say: () => {
//         console.log(this.age);
//       },
//     };

//     obj33.say();
//   },
// };

// obj22.hello();

// let p = new Person();

// console.log(p, "pppp");

// function User(name, age) {

//   this.anun = name;
//   this.tariq = age;

// }

// let poghos = new User("Poghos", 55);
// let petros = new User("Petros", 55);

// console.log(poghos, petros);

// let user = {
//   name: "Petros",
// };

// let user1 = {
//   name: "Poghos",
// };

// function sayMyName(a, b) {
//   console.log(this.name + a);
// }

// sayMyName.call(user1, 5, "a;lsdkf");
// sayMyName.apply(user1, [5, "a;lsdkf"]);

function Car(car, age) {
  this.car = car;
  this.age = age;
}

let k = new Car("mercedes", 1999);
let k1 = new Car("bmw", 2000);
console.log(k, k1);

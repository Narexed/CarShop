// const rootEl = document.createElement("div")
// const sexEl = document.createElement("input")
// const countryEl = document.createElement("input")
// const btnEl = document.createDocumentFragment("button")

// rootEl.className = "jony"

// rootEl.appendChild(sexEl)
// rootEl.appendChild(countryEl)
// rootEl.appendChild(btnEl)

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



let xanut = [
  {
    id: 12,
    price:600,
    discount:10,
    qty: 3

},
{
  id:16,
  price:400,
  discount:0,
  qty: 2,

},
{
  id:19,
  price:600,
  discount: 0,
  qty: 1,

},
]

let gin = xanut.reduce((prev, elem, index) =>{
  prev +=(elem.price*elem.qty)*((100 - elem.discount)/100)
  
  return prev
},0)
console.log(gin)




  
  







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
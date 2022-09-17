const rootEl = document.querySelector("#root")
const contEl = document.createElement("div")
const headEl = document.createElement("div")
const blocksEl = document.createElement("div")
const ginEl = document.createElement("div")
const cartEl = document.createElement("div")
const inputEl = document.createElement("button")
const bHeadEl = document.createElement("div")
const popUp = document.createElement("div")
const popIn = document.createElement("div")
const newImg = document.createElement("input")
const newPrice = document.createElement("input")
const newBtn = document.createElement("button")
const newBtnR = document.createElement("button")



newBtn.className = "newBtn"
newBtnR.className = "newBtnR"
popIn.className = "popin"
bHeadEl.className = "bHead"
inputEl.className = "input"
cartEl.className = "cart"
ginEl.className = "gin"
headEl.className = "header"
contEl.className = "container"
blocksEl.className = "blocks"
popUp.className = "popup"





rootEl.appendChild(headEl)
rootEl.appendChild(contEl)
headEl.appendChild(bHeadEl)
headEl.appendChild(inputEl)
bHeadEl.appendChild(cartEl)
bHeadEl.appendChild(ginEl)
contEl.appendChild(headEl)
contEl.appendChild(blocksEl)


inputEl.innerText = "Add product"
let x = 0;
ginEl.innerText = "0$"
cartEl.innerText = "Cart"
newBtn.innerText = "Add"
newBtnR.innerText = "Reset"




inputEl.addEventListener("click", ()=>{
rootEl.appendChild(popUp)

popUp.appendChild(popIn)

popIn.appendChild(newImg)
popIn.appendChild(newPrice)
popIn.appendChild(newBtn)
popIn.appendChild(newBtnR)




})

const products = [
{
    price: 20000,
    title: "Lamborghini",
    imgURL: "https://th.bing.com/th/id/R.57c9a8ace9ee9f2faa07abdf91d0bfc4?rik=NEj3N3qWNV9bAA&riu=http%3a%2f%2fwww.autofoto.ee%2fassets%2fimages%2fuploads%2f18t.jpg&ehk=m536x8mp8xO16%2fbjCVdPwKfZujkPIZJ7ii7OQIckfq4%3d&risl=&pid=ImgRaw&r=0"
},
{
    price: 20000,
    title: "Lamborghini",
    imgURL: "https://th.bing.com/th/id/R.57c9a8ace9ee9f2faa07abdf91d0bfc4?rik=NEj3N3qWNV9bAA&riu=http%3a%2f%2fwww.autofoto.ee%2fassets%2fimages%2fuploads%2f18t.jpg&ehk=m536x8mp8xO16%2fbjCVdPwKfZujkPIZJ7ii7OQIckfq4%3d&risl=&pid=ImgRaw&r=0"
},
{
    price: 20000,
    title: "Lamborghini",
    imgURL: "https://th.bing.com/th/id/R.57c9a8ace9ee9f2faa07abdf91d0bfc4?rik=NEj3N3qWNV9bAA&riu=http%3a%2f%2fwww.autofoto.ee%2fassets%2fimages%2fuploads%2f18t.jpg&ehk=m536x8mp8xO16%2fbjCVdPwKfZujkPIZJ7ii7OQIckfq4%3d&risl=&pid=ImgRaw&r=0"
},
{
    price: 20000,
    title: "Lamborghini",
    imgURL: "https://th.bing.com/th/id/R.57c9a8ace9ee9f2faa07abdf91d0bfc4?rik=NEj3N3qWNV9bAA&riu=http%3a%2f%2fwww.autofoto.ee%2fassets%2fimages%2fuploads%2f18t.jpg&ehk=m536x8mp8xO16%2fbjCVdPwKfZujkPIZJ7ii7OQIckfq4%3d&risl=&pid=ImgRaw&r=0"
},
{
    price: 20000,
    title: "Lamborghini",
    imgURL: "https://th.bing.com/th/id/R.57c9a8ace9ee9f2faa07abdf91d0bfc4?rik=NEj3N3qWNV9bAA&riu=http%3a%2f%2fwww.autofoto.ee%2fassets%2fimages%2fuploads%2f18t.jpg&ehk=m536x8mp8xO16%2fbjCVdPwKfZujkPIZJ7ii7OQIckfq4%3d&risl=&pid=ImgRaw&r=0"
},
{
    price: 20000,
    title: "Lamborghini",
    imgURL: "https://th.bing.com/th/id/R.57c9a8ace9ee9f2faa07abdf91d0bfc4?rik=NEj3N3qWNV9bAA&riu=http%3a%2f%2fwww.autofoto.ee%2fassets%2fimages%2fuploads%2f18t.jpg&ehk=m536x8mp8xO16%2fbjCVdPwKfZujkPIZJ7ii7OQIckfq4%3d&risl=&pid=ImgRaw&r=0"
},



]

renderProducts(products)


newBtn.addEventListener("click", ()=>{
    
    products.push({price: newPrice.value, imgURL: newImg.value})
    resetelement(blocksEl)
    renderProducts(products)
    rootEl.removeChild(popUp)

})
newBtnR.addEventListener("click", ()=>{
    rootEl.removeChild(popUp) 
})

function renderProducts(prods, ){



prods.forEach((el)=>{

console.log(el.price)





const prodEl = document.createElement("div")
const imgEl = document.createElement("img")
const priceEl = document.createElement("div")
const buttonEl = document.createElement("button")




imgEl.className = "imgEl"
priceEl.className = "gin"
buttonEl.className = "button"
prodEl.className = "block1"


prodEl.appendChild(imgEl)
prodEl.appendChild(priceEl)
prodEl.appendChild(buttonEl)



blocksEl.appendChild(prodEl)


imgEl.src = el.imgURL;

imgEl.width = "150"
priceEl.innerText = el.price;
buttonEl.innerText = "Add To Cart"



buttonEl.addEventListener("click", ()=>{
x += el.price;
console.log(x)
ginEl.innerText = `${x} $`
})


})
}


function resetelement(domEl){
    blocksEl.innerHTML = null
}





console.log(contEl)
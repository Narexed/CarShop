const rootEl = document.querySelector("#root")
const bigEl = document.createElement("div")
const inputBigEl = document.createElement("div")
const inputEl = document.createElement("input")
const btnEl = document.createElement("button")
const cankEl = document.createElement("div")
const takEl = document.createElement("div")
const takDzaxEl = document.createElement("div")
const takAjEl = document.createElement("button")

const createEl = (tag, className) => {
    const el = document.createElement(tag)
    el.className = className;
    return el;
}

createEl('div', 'single')

const appender = (root, newel) => {
    root.appendChild(newel)
}




rootEl.className = "root"
bigEl.className = "big"
inputBigEl.className = "inputbig"
inputEl.className = "input"
btnEl.classname = "btn"
cankEl.className = "cank"
takEl.className = "tak"


rootEl.appendChild(bigEl)
bigEl.appendChild(inputBigEl)
inputBigEl.appendChild(inputEl)
inputBigEl.appendChild(btnEl)
bigEl.appendChild(cankEl)
bigEl.appendChild(takEl)
takEl.appendChild(takDzaxEl)
takEl.appendChild(takAjEl)



btnEl.innerText = "Add"
takDzaxEl.innerText = "Completed"
takAjEl.innerText = "Clear Completed"

let toDos  = [
    {
        title:"JS",
        isCompleted: true,
        id: Date.now(),

    }
]

function createElement(isCompleted, title, id){

const singleToDo = document.createElement("div")
const input = document.createElement("input")
const titleEl = document.createElement("p")
const deleteEl = document.createElement("button")
const arr = [input,titleEl,deleteEl]





input.type = "checkbox"
input.checked = isCompleted
titleEl.innerText = title
deleteEl.innerText = "X"

singleToDo.className = "single"

input.addEventListener("click", ()=>{
let newToDoS = toDos.map((elem)=>{
    if(id === elem.id){
    elem.isCompleted = !elem.isCompleted
    }
    return elem;
})
toDos = newToDoS;
resetElement(cankEl);
renderToDoS()

})



arr.forEach((elem,index)=>{
    singleToDo.appendChild(elem)
})

return singleToDo;
}
btnEl.addEventListener("click",()=>{

   let userSay = inputEl.value

   if(userSay.trim().length === 0){
    return;
   }
   const obj = {
    title: userSay,
    isCompleted: false,
    id: Date.now(),
   };
   toDos.push(obj)
   resetElement(cankEl)
   renderToDoS()
   inputEl.value = ""
})



function renderToDoS(){
    toDos.forEach((elem)=>{
let singleToDo = createElement(elem.isCompleted, elem.title, elem.id)
cankEl.appendChild(singleToDo)

    })

}


function resetElement(elem){
    elem.innerText = null
}


function clearCompleted(){
    let newToDos = toDos.filter((elem)=>!elem.isCompleted)
    resetElement(cankEl)
    toDos = newToDos
    renderToDoS()
}


takAjEl.addEventListener("click",()=>{
    console.log("dfsdf")
    clearCompleted()
})



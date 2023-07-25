// // const form = document.querySelector('input');

// // form.addEventListener("change", (evnet) => {

// //     console.log(event.target.value);
// // })

// // form.addEventListener("keypress",(event)=>{
// //     if(event.key == 'Enter'){
// //         console.log(event.target.value);
// //     }
// // })

// // form.addEventListener("keypress",(event)=>{

// //         console.log(event.target.value);

// // })


// /* <div class="model">
//     <div class="model-container">
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sequi illo enim molestias quisquam error necessitatibus natus delectus non magni.</p>
//     </div>
// </div> */

// const openModel = document.getElementById("openBtn");

// openModel.addEventListener('click', () => {
//     const model = document.createElement('div');
//     const modelContainer = document.createElement('div');
//     model.className = "model"
//     modelContainer.className = "model-container";
//     model.appendChild(modelContainer);
//     const p = document.createElement('p');
//     p.innerText = "Rushikesh Ghuge Name to suna hi hoga na aapane"
//     modelContainer.appendChild(p);

//     const closeBtn = document.createElement("button");

//     closeBtn.innerText = "Close Model"

//     closeBtn.addEventListener('click', () => {
//         model.remove();
//     })

//     modelContainer.appendChild(closeBtn)

//     document.body.appendChild(model)


// })

{/* <div class="model">
<div class="model-container">
    <input type="text" placeholder="Title" name="Title" id="Title">
    <input type="text" placeholder="Description" name="Description" id="Description">
    <select name="Status" id="">
        <option value="To-Do">To Do</option>
        <option value="In-Progress">In Progress</option>
        <option value="Done">Done</option>
    </select>
    <button id="add">
        <i class="fa-solid fa-plus fa-shake"></i>
    </button>
</div>
</div> */}

const str = `
<form class="model-container">

    <i id="close-model" class="fa-solid fa-circle-xmark"></i>

    <input type="text" placeholder="Title" name="Title" id="Title">
    
    <input type="text" placeholder="Description" name="Description" id="Description">
    
    <select name="Status" id="Status">
        <option value="TO_DO">To Do</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
    </select>
    
    <button type="submit" id="add">
        <i class="fa-solid fa-plus fa-shake"></i>
    </button>
</form>
`

// const item = `
// <h3>Title</h3>
// <p>Description</p>
// `

const create = document.getElementById("create");
create.addEventListener("click", () => {
    const model = document.createElement('div');
    model.className = "model";
    model.innerHTML = str;
    document.body.appendChild(model)

    // close btn code
    const closeModel = document.getElementById("close-model")
    closeModel.addEventListener("click", () => {
        model.remove()
    })

    const form = document.getElementsByClassName('model-container')[0]

    const removeFormListner = () => {
        form.removeEventListener("submit", formDataListner)
    }
    console.log("rushikeshGhuge");

    const formDataListner = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let object = {};
        for (let i = 0; i < elements.length; i++) {
            elements[i].name && (object[elements[i].name] = elements[i].value);
        }
        createTaskObject(object);
        model.remove();
        removeFormListner();
    }
    form.addEventListener("submit", formDataListner);

})

function createTaskObject(obj) {
    const item = document.createElement("div");
    item.className = "item";
    item.draggable = true;

    item.innerHTML = `
    <i class="fa-solid fa-trash"></i>
    <h3>${obj.Title}</h3>
    <p>${obj.Description}</p>

    `
    console.log(obj);
    const panel = document.getElementById(obj.Status);
    panel.appendChild(item)

    // delet the item -->
    const deleteItem = document.getElementsByClassName("fa-trash")[0];

    deleteItem.addEventListener("click", removeItem)

    function removeItem(event){
        console.log("rushikesh Ghuge");
       item.remove();
        // deleteItem.style.color = "blue";
    }
}





let addBtn = document.getElementById('add');
let list = [];
addBtn.addEventListener('click', () => {
    let obj = {
        id: list.length + 1,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        gap: document.getElementById('gpa').value,
        age: document.getElementById('age').value,
        degree: document.getElementById('degree').value
    }
    appendInTable(obj)
    list.push(obj)
    let form = document.getElementById('form');
    for (let i = 1; i < 6; i++) {
        form[i - 1].value = '';
    }
})

let tBody = document.getElementById('tBody');
function appendInTable(obj) {
    let tr = document.createElement('tr');
    for (let i = 0; i < 6; i++) {
        let td = document.createElement('td');
        td.innerText = Object.values(obj)[i];
        tr.appendChild(td);
        if (i == 5) {
            td.innerHTML = `<p>${Object.values(obj)[i]}</p> <span><i class="fa-solid fa-pen-to-square update"></i> <i id="dele" class="fa-solid fa-trash"></i></span>`
            td.className = 'delAndSelect'
        }
    }
    tBody.appendChild(tr)
    // delete that 
    let del = document.getElementsByClassName('fa-trash');
    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener('click', (event) => {
            event.target.parentNode.parentNode.parentNode.remove();
        })
    }

    let update = document.querySelectorAll('.update');
    for (let i = 0; i < update.length; i++) {
        update[i].addEventListener('click', (event) => {
            let info = update[i].parentNode.parentNode.parentNode;
            console.log(info.children);
            forUpdateInput(info.children)
        })
    }

}



function forUpdateInput(info) {
    let form = document.getElementById('form');

    for (let i = 1; i < 6; i++) {
        form[i - 1].value = info[i].innerText;
    }

    let updateBtn = document.getElementById('updateBtn');
    updateBtn.addEventListener('click', () => {
        console.log(form);
        for (let i = 1; i < 6; i++) {
            info[i].innerText = form[i - 1].value
            if (i == 5) {
                info[i].innerHTML = `<p>${form[i - 1].value}</p> <span><i class="fa-solid fa-pen-to-square update"></i> <i id="dele" class="fa-solid fa-trash"></i></span>`
            }
        }
        //delete listner add
        
        // clear the input data 
        for (let i = 1; i < 6; i++) {
            form[i - 1].value = '';
        }
    })
}


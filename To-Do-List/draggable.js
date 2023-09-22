const items = document.getElementsByClassName("box");

// itorate on each item 
for (let i = 0; i < items.length; i++) {

    items[i].addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    items[i].addEventListener("drop", (e) => {

        let parent = e.dataTransfer.getData("parent");
        let sourceId = e.dataTransfer.getData("source");

        let draggedElement = document.getElementById(sourceId);
        items[i].appendChild(draggedElement)
        // console.log(sourceId);
    })
}

//this function is used for remove the item from list or  deletes
const remove = document.getElementById("remove");

remove.addEventListener('dragover', (e) => {
    e.preventDefault();
})
remove.addEventListener('drop', (e) => {
    let sourceId = e.dataTransfer.getData("source")
    let removeElement = document.getElementById(sourceId);
    removeElement.remove();
})
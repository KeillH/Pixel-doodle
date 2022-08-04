createGridItems(9);

const resizeButton = document.querySelector(".resize");
resizeButton.addEventListener('click',resize);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click',clearGrid);


function createGridItems (n) {
    const grid = document.querySelector('.grid');
    grid.style.cssText = `grid-template-columns: repeat(${n}, 1fr)`;

    for (let i = 0; i<n**2;i++){
    const gridItem = document.createElement('div');
    gridItem.classList.add("grid-item")
    gridItem.style.cssText = "border: 0.5px solid black;";
    gridItem.addEventListener('mouseover',(e)=> {
        //If it is clicked it will gie it the .selected class else the .highlighted class
        if (e.buttons===1){gridItem.classList.add("selected")}
        else {gridItem.classList.toggle("highlighted")}});
    gridItem.addEventListener('mouseout',() => {gridItem.classList.toggle("highlighted")});
    gridItem.addEventListener('click', () => {gridItem.classList.add("selected")});
    grid.appendChild(gridItem);
    }
}

function clearGrid(){
    //returns all grids to 'unselected' state
    const gridItems = document.querySelectorAll(".selected");
    gridItems.forEach(gridItem=> gridItem.classList.remove("selected","highlighted"));
}

function removeGridItems(){
    //Remove all grid items so the grid can be resized
    const gridItems = document.querySelectorAll(".grid-item")
    gridItems.forEach(gridItem => gridItem.remove());
}

function resize() {
    const userSize = document.querySelector(".specified-grid-size");
    if (isNaN(parseInt(userSize.value))||userSize.value>50||userSize<1){
        //Add a message to the screen to say it has to be a number between 1-50
        return;
    }

    updateGridText(userSize.value);
    removeGridItems();
    createGridItems(userSize.value);
    
}
function updateGridText(n){
    const gridText = document.querySelector(".grid-text");
    gridText.textContent = `Grid Size: ${n} x ${n}`;
    return;
}
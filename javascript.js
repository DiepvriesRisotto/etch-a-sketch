const container = document.getElementById("container");

function standardGrid() {
    createGrid(16);
}

standardGrid();

function createGrid(size){
    for (let i = 0; i < size ; i++) {
        const row = container.appendChild(document.createElement('div'));
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);
        }
    }
    const boxes = document.getElementsByClassName('box');

    for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseover', () => {
        boxes[i].classList.toggle('change-color')
    });
}

}

function askGridSize() {
    let size = prompt("Please enter how large you want the grid to be. Ex. 16 = a 16x16 grid. Max grid size = 100")

    if (size > 100) {
        alert("Please enter a value that isn't greater than 100");
    } else {
        resetGrid();
        createGrid(size);
    }
}

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
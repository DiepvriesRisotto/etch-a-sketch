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
            box.style.width = "100%";
            let height = 500 / size;
            box.style.height = `${height}px`;
        }
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

function activateBlack() {
    clearGrid();
    const boxes = document.getElementsByClassName('box');

    for (let i = 0; i < boxes.length; i++) {           
    boxes[i].addEventListener('mouseover', () => {
        boxes[i].style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
    }); 
}

}

function activateRandomColors() {
    clearGrid();
    const boxes = document.getElementsByClassName('box');

    for (i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = getRandomRgb();            
        });     
    }
}

function getRandomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function clearGrid() {
    const boxes = document.getElementsByClassName('box');

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')';
    }
}
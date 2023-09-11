const container = document.getElementById("container");

function createGrid(){
    for (let i = 0; i < 16 ; i++) {
        const row = container.appendChild(document.createElement('div'));
        for (let j = 0; j < 16; j++) {
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
}

createGrid()

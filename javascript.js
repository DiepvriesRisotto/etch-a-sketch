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


createGrid()

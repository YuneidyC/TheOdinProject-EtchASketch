const container = document.getElementsByClassName('container')[0];

function makeGrid(size = 16) {
    const squareSize = 600 / size;

    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "grid-item square";
        cell.style.width = `${squareSize}px`;
        cell.style.height = `${squareSize}px`;
    };
};

makeGrid();

container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('square'))
    {
        e.target.style.backgroundColor = getRandomColor();
    }
});

function getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color ='#';

    for (let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function clearGrid() {
    const cell = document.getElementsByClassName('square');
    for (let i = 0; i < cell.length; i++) {
        cell[i].style.backgroundColor = '';
    }
}

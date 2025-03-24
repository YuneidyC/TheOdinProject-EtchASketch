const updateGridButton = document.getElementsByClassName('update-grid')[0];
updateGridButton.addEventListener('click', updateGrid);
const clearGridButton = document.getElementsByClassName('clear-grid')[0];
clearGridButton.addEventListener('click', clearGrid);

function makeGrid(size = 16) {
    if (!isValidGridSize(size)) {
        return;
    }

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

function getRandomColor() {
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

function updateGrid() {
    let newSize = prompt('Enter a number between 1 - 100');
    removeChildNodes();
    makeGrid(newSize);
}

function removeChildNodes() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function isValidGridSize(size) {
    if (isNaN(size)) {
        document.getElementsByClassName('message-error')[0].innerHTML = "Sorry, passed value is not a number. Please insert a whole numbers.";
        clearGrid();
        return false;
    }
    if (size < 1 || size > 100) {
        document.getElementsByClassName('message-error')[0].innerHTML = "Sorry, the number cannot be less than 1 or greater than 100.";
        clearGrid();
        return false;
    }
    return true;
}
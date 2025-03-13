const container = document.getElementsByClassName('container')[0];

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div')
        container.appendChild(cell).className = "grid-item square";
    };
};

makeRows(16, 16);

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
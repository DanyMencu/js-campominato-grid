//Indicare il livello di difficoltà
//Generare una griglia quadrata in relazione alla difficoltà
//con difficoltà 3 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 1 => tra 1 e 49
//Inserire in ogni quadrato il proprio numero corrispondente
//Quando l'utente clicca su un quadrato diventa blu


//Ref

const setBtn = document.querySelector('.set-difficulty');
const wrapGrid = document.querySelector('.wrap-grid');
const levelDifficulty = document.getElementById('difficulty');

setBtn.addEventListener('click',() => {
    //Reset content
    wrapGrid.innerHTML = '';

    //Set grid dimension
    let cellsNumber;
    let cellsPerSide;

    switch (levelDifficulty.value) {
        case '1' :
            cellsNumber = 100;
            cellsPerSide = 10;
            break;
        case '2' :
            cellsNumber = 81;
            cellsPerSide = 9;
            break;
        case '3' :
            cellsNumber = 49;
            cellsPerSide = 7;
    }

    //Gen grid parent
    const grid = document.createElement('div');
    grid.classList.add('grid');

    //Add grid
    wrapGrid.append(grid);

    //Gen square
    for (let i = 1; i <= cellsNumber; i++) {
        const square = createGridSquare (i, cellsPerSide);

        square.addEventListener('click', () => {
            square.classList.add('clicked');
        });

        grid.append(square);
    }
});

//Functions

function createGridSquare (num, cells) {
        const node = document.createElement('div');
        node.classList.add('square');
        node.style.width = `calc( 100% / ${cells} )`;
        node.style.height = `calc( 100% / ${cells} )`;

        node.append(num);

        return node;
}
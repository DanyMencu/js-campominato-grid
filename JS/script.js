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

//Set grid
setBtn.addEventListener('click',() => {
    //Reset content
    wrapGrid.innerHTML = '';

    //Set grid dimension
    const gridDimension = levelDifficulty.value;
    console.log(gridDimension);
    let cellsNumber;
    let cellsPerSide;
    
    switch (gridDimension) {
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
        console.log(cellsNumber);
        console.log(cellsPerSide);

        //Gen grid parent
        const grid = document.createElement('div');
        grid.classList.add('grid');

        //Add grid
        wrapGrid.append(grid);

        //Gen grid square
        for (let i = 1; i <= cellsNumber; i++) {
            const square = createGridSquare (cellsPerSide);
            square.innerHTML += `${i}`;

            grid.append(square);
        }
    });

    //Functions

    function createGridSquare (cells) {
        const node = document.createElement('div');
        node.classList.add('square');
        node.style.width = `calc( 100% / ${cells} )`;
        node.style.height = `calc( 100% / ${cells} )`;

        return node;
    }
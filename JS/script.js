//Indicare il livello di difficoltà
//Generare una griglia quadrata in relazione alla difficoltà
//con difficoltà 1 => tra 1 e 100
//con difficoltà 2 => tra 1 e 81
//con difficoltà 3 => tra 1 e 49
//Inserire in ogni quadrato il proprio numero corrispondente
//Quando l'utente clicca su un quadrato diventa blu


//Ref

const setBtn = document.querySelector('.set-difficulty');
const wrapGrid = document.querySelector('.wrap-grid');

//Set grid
setBtn.addEventListener('click',() => {
    //Reset content
    wrapGrid.innerHTML = '';
});
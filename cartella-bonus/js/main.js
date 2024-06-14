/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata */

//////////////////////////////////////////////////////////////////////////////////////////////

//selezionare il pulsante che consentirà di visualizzare la griglia di gioco
const playButton = document.getElementById("btn");

//selezionare il contenitore
const container = document.getElementById("grid");

//selezionare l'input che corrisponde alla scelta dell'utente
let choiceInput = document.querySelector("#choice-difficult");

//Assegnare l'evento al pulsante che permetta al giocatore di visualizzare una griglia
// in base al livello di difficoltà scelto
playButton.addEventListener("click", 
    
    function () {

        // Leggere il valore corrente dell'input di difficoltà
        let game = choiceInput.value;
        console.log(game);

        // Rimuovere la griglia esistente
        container.innerHTML = '';

        //creare le condizioni affinché si possa materializzare la griglia
        //in base al livello di difficoltà scelto
        if (game === 'facile') {// se il livello è facile, si crea una griglia 10x10
            createGrid(10, "square-easy");
        } else if (game === 'medio') {// se il livello è medio, si crea una griglia 9x9
            createGrid(9, "square-medium");
        } else if (game === 'difficile') {// se il livello è medio, si crea una griglia 7x7
            createGrid(7, "square-hard");
        }
    }

);

// Funzione per creare un elemento di markup con una classe
function createElementClass(tag, classToAdd) {

    //creare un elemento di markup
    const box = document.createElement(tag);

    //associare una classe all'elemento
    box.classList.add(classToAdd);

    return box;
};

// Funzione per creare una griglia di dimensione specifica
function createGrid(size, className) {

    // calcolare il numero di celle
    let numCells = size * size;

    //reiterare un numero di volte
    for (let i = 1; i <= numCells; i++) {
        const newDiv = createElementClass("div", className);

        newDiv.addEventListener("click", function () {
            newDiv.classList.add("clicked");
            console.log(i);
        });

        container.append(newDiv);
    }

    //impostare opacità
    container.style.opacity = 0;

    setTimeout(() => {
        container.style.transition = 'opacity 1s';
        container.style.opacity = 1;
    }, 100 * container); // Ritardare leggermente l'elemento
};

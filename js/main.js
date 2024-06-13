/*L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata */

//////////////////////////////////////////////////////////////////////////////////////////////

//selezionare il pulsante che consentirà di visualizzare la griglia di gioco
const playButton = document.getElementById("btn");

//creare un evento che al click dell'utente sul pulsante faccia visualizzare la griglia
playButton.addEventListener("click",
    function(){

        //selezionare il contenitore

        const container = document.getElementById("grid");

        //Ripetere per 100 volte la procedura di creazione delle varie celle

        for (let i = 0; i < 100; i++) {

            console.log(i);

            //creare un blocco "div" che abbia una classe "square"
            const newDiv = createElementClass("div", "square");

            //inserire i blocchi con la classe nel container individuato
            container.append(newDiv);

        };



    }
);

//FUNZIONE//

function createElementClass(tag, classToAdd){

    //creare l'elemento blocco
    const box = document.createElement(tag);

    //aggiungere ai blocchi una classe
    box.classList.add(classToAdd);

    //aggiungere blocco ad un contenitore
    container.append(box);

    return box;

};
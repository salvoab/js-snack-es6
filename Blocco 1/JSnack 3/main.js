/**
 * Il software deve chiedere per 5 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti.
 * Esegui questo programma in due versioni, con il for e con il while.
*/

const ripetizioni = 5;
let somma = 0;
//versione con ciclo for
for(let i = 0; i < ripetizioni; i++){
    const numero = Number(prompt("Inserisci un numero nel for"));
    somma+= numero;
}

console.log(`La somma dei ${ripetizioni} numeri inseriti vale ${somma}`);

//versione con ciclo while
somma = 0;
let contatore = 0;
while(contatore < ripetizioni){
    const numero = Number(prompt("Inserisci un numero nel while"));
    somma+= numero;
    contatore++;
}

console.log(`La somma dei ${ripetizioni} numeri inseriti vale ${somma}`);
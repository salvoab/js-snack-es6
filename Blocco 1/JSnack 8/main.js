//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let numeroUtente = prompt("Inserisci un numero");
let somma = 0;

for(let i=0; i<numeroUtente.length; i++){
    const cifra = Number(numeroUtente[i]);
    somma += cifra; 
}

console.log(`La somma delle cifre che compongono il numero ${numeroUtente} vale: ${somma}`);
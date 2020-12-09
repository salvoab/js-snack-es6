/*
 * Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
*/

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let listaNomi = ['Aldo', 'Giovanni', 'Giacomo', 'Matteo', 'Filippo'];
let listaCognomi = ['Filiberto', 'Bianchi', 'Rossi', 'Verdi', 'Poretti'];
let listaInvitati = [];

for( let i=0; i<listaNomi.length; i++){
    const randomIndexName = getRandomInteger(0,listaNomi.length);
    const randomIndexSurname = getRandomInteger(0,listaCognomi.length);
    const randomPerson = listaNomi[randomIndexName] + " " + listaCognomi[randomIndexSurname];
    listaInvitati.push(randomPerson);
}

console.log(listaInvitati);
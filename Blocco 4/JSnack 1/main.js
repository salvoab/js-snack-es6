/*
 * Creare un oggetto palla che abbia le seguenti proprietà.
 * Nome = palla
 * Peso = 10 
 * Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*/

const palla = {nome: 'palla', peso: 10};
const nuovoPeso = Number(prompt("Inserisci il nuovo peso"));
palla.peso = nuovoPeso;
console.log(palla);
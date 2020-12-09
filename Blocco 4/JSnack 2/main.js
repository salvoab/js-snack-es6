/*
 * Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 * Stampare a schermo la bici con peso minore.
*/

const listaBici = [
    {nome: 'cabrio', peso: 20},
    {nome: 'ciao', peso: 25},
    {nome: 'light', peso: 12},
    {nome: 'speedy', peso: 10}
];

let posizioneMinimo = 0;
let pesoMinimo = listaBici[0].peso;

for (let index = 0; index < listaBici.length; index++) {
    const bici = listaBici[index];
    if(bici.peso < pesoMinimo){
        pesoMinimo = bici.peso;
        posizioneMinimo = index;
    }
}

console.log(`La bici che pesa meno è la bici: nome = ${listaBici[posizioneMinimo].nome} peso: ${listaBici[posizioneMinimo].peso}`);
//Calcola la somma e la media dei primi 10 numeri.

let somma = 0;
const estremoSuperiore = 10;

for(let numero=1; numero<=estremoSuperiore; numero++){
    somma += numero;
}

const media = somma / estremoSuperiore;

console.log(`La somma dei primi ${estremoSuperiore} numeri vale ${somma} e la loro media vale ${media}`);
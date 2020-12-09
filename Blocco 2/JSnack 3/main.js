//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let somma = 0;
const listaNumeri = [0,1,2,3,4,5,6,7];
for(let index = 1; index < listaNumeri.length; index+=2){
    somma += listaNumeri[index];
}

console.log(`La somma degli elementi in posizione dispari dell'array [${listaNumeri.toString()}] vale: ${somma}`);
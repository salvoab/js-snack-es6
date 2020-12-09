//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

const ripetizioni = 6;
const listaNumeri = [];

for (let i = 0; i < ripetizioni; i++) {
    const numero = Number(prompt("Inserisci un numero"));
    if(numero % 2 !== 0){
        listaNumeri.push(numero);
    }
}

console.log(`I numeri dispari inseriti sono [${listaNumeri.toString()}]`);
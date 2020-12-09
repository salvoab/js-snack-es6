//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

const rendiPari = cifra => ( (cifra % 2 === 0) ? cifra : ++cifra )

const numero = parseInt(prompt("inserisci un numero"));
console.log(`Il numero ${numero} reso pari è diventato ${rendiPari(numero)}`);
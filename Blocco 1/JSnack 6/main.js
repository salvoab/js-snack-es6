//Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

const estremoSuperiore = parseInt(prompt("Inserisci l'estremo superiore della sequenza di numeri"));

for(let numero=1; numero<=estremoSuperiore; numero++){
    console.log(`Il cubo di ${numero} vale ${numero**3}`)
}
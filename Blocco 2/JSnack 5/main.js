/*
 * Scrivi una funzione per stabilire se un numero è primo.
 * Chiedi un numero all’utente e utilizza la funzione per comunicargli se il numero inserito è primo oppure no.
*/

const isPrime = number => {
    for(var i=2; i<number; i++){
        if(number % i === 0){
            return false;
        }
    }

    return number >= 2;
}

let userNumber;
do{
    userNumber = Math.abs(parseInt( prompt("Inserisci un numero intero positivo")));
}while(isNaN(userNumber));

if(isPrime(userNumber)){
    console.log( `Il numero ${userNumber} è un numero primo`);
} else {
    console.log( `Il numero ${userNumber} NON è un numero primo`);
}
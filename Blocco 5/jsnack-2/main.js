/*
    Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

/**
 * Restituisce una stringa girata rispetto a quella passato come argomento.
 * 
 * @param {string} word Stringa da girare.
 * @return {string} Stringa girata.
 */
const reverseString = word => word.split("").reverse().join("");

const parola = 'Salvo';
console.log(reverseString(parola));
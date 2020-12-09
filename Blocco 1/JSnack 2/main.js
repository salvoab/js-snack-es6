//L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const ordineParole = (word1, word2) => {
    if(word1.length < word2.length){
        console.log(`parola più corta: ${word1}`);
        console.log(`parola più lunga: ${word2}`);
    } else if(word1.length > word2.length){
        console.log(`parola più corta: ${word2}`);
        console.log(`parola più lunga: ${word1}`);
    } else{
        console.log(`Le parole ${word1} e ${word2} hanno la stessa lunghezza`);
    }
}

let parola1 = prompt("Inserisci una parola");
let parola2 = prompt("Inserisci una parola");

ordineParole(parola1, parola2);
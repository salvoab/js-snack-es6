//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const getMax = (number1, number2) => {
    if(number1 >= number2){
        return number1;
    }
    return number2;
}

let numero1 = Number(prompt("Inserisci un numero"));
let numero2 = Number(prompt("Inserisci un numero"));

console.log(getMax(numero1, numero2));
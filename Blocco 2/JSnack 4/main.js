/*
 * Crea due array che hanno un numero di elementi diversi.
 * Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro. 
*/

const array1 = [1,2,3];
const array2 = [4,5,6,7,8,9,10];

while(array1.length !== array2.length){
    if(array1.length < array2.length){
        array1.push(Math.floor(Math.random() * 80));
        console.log("Aggiungo un elemento in array1");
    } else {
        array2.push(Math.floor(Math.random() * 80));
        console.log("Aggiungo un elemento in array2");
    }
}

console.log(`Array1=[${array1.toString()}] e Array2=[${array2.toString()}]`);
console.log(`Array1 è lungo ${array1.length} e Array2 è lungo ${array2.length}`);

/*
    Crea 10 oggetti che rappresentano una zucchina.
    Dividi in due array separati le zucchine che misurano meno o più di 15cm.
    Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

class Zucchina{
    constructor(varieta, peso, lunghezza){
        this.varieta = varieta;
        this.peso = peso;
        this.lunghezza = lunghezza;
    }
}
let zucchine = [];
let zucchineCorte = [];
let zucchineLunghe = [];
let pesoCorte = 0, pesoLunghe = 0;

zucchine.push(new Zucchina("Chiara di Faenza", 120, 14));
zucchine.push(new Zucchina("Nera di Milano", 55, 8));
zucchine.push(new Zucchina("Romanesca", 140, 16));
zucchine.push(new Zucchina("Lunga fiorentina", 225, 24));
zucchine.push(new Zucchina("Siciliana", 450, 35));
zucchine.push(new Zucchina("Striata di Napoli", 75, 10));
zucchine.push(new Zucchina("Bianca triestina", 115, 12));
zucchine.push(new Zucchina("Tonda di Piacenza", 300, 20));
zucchine.push(new Zucchina("Tonda di Nizza", 225, 25));
zucchine.push(new Zucchina("Tonda di Firenze", 250, 30));

zucchine.forEach(zucca => {
    if(zucca.lunghezza <= 15 ){
        zucchineCorte.push(zucca);
        pesoCorte += zucca.peso;
    } else {
        zucchineLunghe.push(zucca);
        pesoLunghe += zucca.peso;
    }
});

console.log(zucchineCorte);
console.log(zucchineLunghe);

console.log(`Il peso totale delle zucchine inferiori a 15cm è : ${pesoCorte} grammi`);
console.log(`Il peso totale delle zucchine superiori a 15cm è : ${pesoLunghe} grammi`);
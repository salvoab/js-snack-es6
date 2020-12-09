/*
 * Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
 * Calcolare perimetro e area. 
*/

const triangoloRettangolo = {base: 10, altezza: 5};

const ipotenusa = Math.sqrt(triangoloRettangolo.base**2 + triangoloRettangolo.altezza**2);
console.log(`L'ipotenusa ha dimensione ${ipotenusa}`);

const area = triangoloRettangolo.base * triangoloRettangolo.altezza / 2;
const perimetro = triangoloRettangolo.base + triangoloRettangolo.altezza + ipotenusa;

console.log(`Il perimetro misura ${perimetro} e l'area misura ${area}`);
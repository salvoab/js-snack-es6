/*
 * Creare un array di oggetti di squadre di calcio.
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
 * 
 * Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
*/

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const squadre = [
    {nome: 'Juventus', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Napoli', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Salernitana', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Catania', puntiFatti: 0, falliSubiti: 0},
];

squadre.forEach(squadra => {
    squadra.puntiFatti = getRandomInteger(0, 80);
    squadra.falliSubiti = getRandomInteger(0,120);
    console.log(`Squadra: nome = ${squadra.nome}, punti fatti = ${squadra.puntiFatti}, falli subiti = ${squadra.falliSubiti}`);
});
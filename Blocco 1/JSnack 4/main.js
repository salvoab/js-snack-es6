/*
 * In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 * chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const capitalizeString = word =>{
    let capitalized = '';
    capitalized = word.charAt(0).toUpperCase() + word.slice(1,word.length).toLowerCase();
    return capitalized;
}

let listaInvitati = ['Aldo', 'Giovanni', 'Giacomo'];

let nomeUtente = prompt("Inserisci il tuo nome");
nomeUtente = capitalizeString(nomeUtente);

if(listaInvitati.includes(nomeUtente)){
    console.log(`Ciao ${nomeUtente}, sei invitato alla festa`);
} else{
    console.log(`Ciao ${nomeUtente}. Spiacente, non sei invitato alla festa`);
}
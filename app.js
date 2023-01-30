document.getElementById('nome-utente').innerHTML = 'Buona sera';


//Chiedere nome utente
prompt('Inserisci il tuo nome');
let name = prompt('Inserisci il tuo nome');


//Chiedere il suo cognome,
prompt('Inserisci il tuo cognome');
let lastName = prompt('Inserisci il tuo cognome');


//Chiedere il suo colore preferito
prompt('Inserisci il tuo colore preferito');
let color = prompt('Inserisci il tuo colore preferito');

//Chiedere un numero
prompt('Inserisci un numero');
let number = prompt('Inserisci un numero');


//Risultato della concatenazione di: <nome><cognome><colorePreferito><numero></numero>

let profiloUtente = name + lastName + color + parseFloat(number);

console.log('profiloUtente')
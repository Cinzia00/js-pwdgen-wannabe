document.getElementById('nome-utente').innerHTML = 'Buona sera';


//Chiedere nome utente
let name = prompt('Inserisci il tuo nome');
console.log(name)


//Chiedere il suo cognome,
let lastName = prompt('Inserisci il tuo cognome');
console.log(lastName)

//Chiedere il suo colore preferito
let color = prompt('Inserisci il tuo colore preferito');
console.log(color)

//Chiedere un numero
let number = prompt('Inserisci un numero');
console.log(number)


//Risultato della concatenazione di: <nome><cognome><colorePreferito><numero></numero>

let profiloUtente = name + lastName + color + parseFloat(number);

console.log(profiloUtente)
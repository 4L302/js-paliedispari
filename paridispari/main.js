/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.*/

const num = prompt('Inserisci numero:');
const pariDispari = prompt ('Sarà pari o dispari?');

//genera numero random
function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//genera numero 
const randomN = getRndNumber(1, 5);
const somma = randomN + num;
const isPari = false;

if (somma % 2 == 0){
    isPari = true;
} 
if (pariDispari == 'pari' && isPari == true){
    console.log('Hai vinto!');
} else if (isPari != true && pariDispari == 'dispari'){ 
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}
/*
let isPari;
if (somma % 2 == 0){
    isPari = 'pari';
} else {
    isPari = 'dispari';
} 

if (pariDispari == 'pari' && isPari == 'pari'){
    console.log('Hai vinto!');
} else if (pariDispari == 'dispari' && isPari == 'dispari'){ 
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
}
*/
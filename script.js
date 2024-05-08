// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.276 € al km)
//va applicato uno sconto del 21% per i minorenni
//va applicato uno sconto del 42% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) [questo richiederà un minimo di ricerca]

//Chiedo il numero dei KM
const km = Number.parseInt(prompt("Inserire i KM da percorrere"));
document.getElementById("km").innerHTML = ("Km da percorrere: " + km)
//Chiedo l'età
const età = Number.parseInt(prompt("Inserire l'età del passeggero"));
document.getElementById("età").innerHTML = ("Età del passeggero: " + età)
//controllo inserimento valori
console.log(km)
console.log(età)

//Valori sconto
const scontoMinorenni = 21;
const scontoOver = 42;

//Preozzo al Km
const prezzoAlKm = 0.276;

//Prezzo totale del biglietto in base ai Km da percorrere
let prezzoBiglietto = km * prezzoAlKm

console.log(prezzoBiglietto)

//Se l'utente ha meno di 18 anni
if (età < 18) {
    //il prezzo del biglietto ha uno sconto del 21%
    prezzoBiglietto = prezzoBiglietto * 0.79;

    console.log(prezzoBiglietto)
}
//Se l'utente ha più di 64 anni
if (età > 64) {
    //il prezzo del biglietto ha uno sconto del 42%
    prezzoBiglietto = prezzoBiglietto * 0.58

    console.log(prezzoBiglietto)
}

prezzoBiglietto = Math.round(prezzoBiglietto * 100) / 100

console.log(prezzoBiglietto)

//Prezzo totale da mostrare
document.getElementById("prezzo").innerHTML = ("Prezzo: " + prezzoBiglietto + "&euro;")

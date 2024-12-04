/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 10;
let y = 15;
if(x > y){
  console.log("Il numero più grande è" + " " + x);
}
else if(x < y){
  console.log("Il numero più grande è" + " " + y);
}else
console.log("I numeri sono uguali")

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = 6
if(num !== 5){
  console.log("not equal")
}else {
  console.log("è uguale")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10
if(num1 % 5 === 0){
  console.log(num1 + " " + "è divisibile per 5")
}else{
  console.log(num1 + " " + "non è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 8;
let numero2 = 16;
let addizione = numero + numero2;
let sottrazione = numero - numero2;
if(numero === 8 || numero2 === 8 || addizione === 8 || sottrazione  === 8){
  console.log("il valore di uno di essi è 8 oppure la loro addizione/sottrazione è uguale a 8")
}else{
  console.log("il valore di uno di essi non è 8 e la loro addizione/sottrazione non è uguale a 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let Carrello = 49;
let spedizione = 10;
let totalShoppingCart = Carrello + spedizione;
if(Carrello > 50){
  console.log("Il costo totale è" + " " + Carrello);
}else{
  console.log("Il costo totale è" + " " + totalShoppingCart);

}*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let Carrello = 100;
let spedizione = 10;
let promo = (Carrello * 20) / 100;
let totalShoppingCart = Carrello - promo + spedizione;
if(Carrello - promo > 50){
  console.log("Il costo totale è" + " " + Carrello * 0.8);
}else{
  console.log("Il costo totale è" + " " + totalShoppingCart);

}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numer = 50;
let numer1 = 40;
let numer2 = 30;
if(numer > numer1 && numer > numer2 && numer1 > numer2){
  console.log(numer);
  console.log(numer1);
  console.log(numer2);
}else if(numer1 > numer2 && numer1 > numer && numer > numer2){
  console.log(numer1);
  console.log(numer);
  console.log(numer2);
}else if(numer2 > numer1 && numer2 > numer && numer1 > numer){
  console.log(numer2);
  console.log(numer1);
  console.log(numer);
}else{
  console.log("I numeri non sono in ordine decrescente")
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = 555
console.log(typeof n);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 10
if(number % 2 == 0){
  console.log(number + " " + "è pari")
}else{
  console.log(number + " " + "è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4
if (val < 10 && val >= 5) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [];
console.log(array);
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array.splice(9, 1, 100);
console.log(array);
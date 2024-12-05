/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
    if(typeof l1 === 'number' && typeof l2 === 'number') {
        let res = l1 * l2
        return res;
    } else {
        return 0
    }  
}
let res1 = area(5, 9);
console.log(res1)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(x, y) {
    if(x != y) {
        let res = x + y;
        return res;
    } else {
        return (x + y)* 3 
    }  
}let res2 = crazySum(5, 5);
console.log(res2)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x) {
    if(x > 19) {
        let res = x - 19;
        return Math.abs(res)* 3 
    } else {
        return Math.abs(x - 19);
    }  
}let res3 = crazyDiff(17);
console.log(res3)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100
  (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
    if (n >= 20 && n <=100 ||n === 400) {
        return true
    }else{
        return "false"
    }
}let n1 = boundary(21)
console.log(n1)
/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita
  comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(test) {
    if(test.startsWith("EPICODE")){
        return test
    
}return "EPICODE" + test}
    let strr = epify("ciao")
console.log(strr)


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
  La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(x) {
    if (x > 0 && x % 3 == 0){
        return x + " è un numero positivo e multiplo di 3"}
        if (x > 0 && x % 7 == 0)
            return x + " è un numero positivo e multiplo di 7"
        else{
            return "Numero non valido"
        }
    }let num5 = check3and7(77)
    console.log(num5)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
let reverse = reverseString("Epicode");
console.log(reverse)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
let arrStr = str.split(" ")//split mette delle stringhe in un array e in questo caso mette in un array le parola che sono preceute da spazi.
let stringaCompleta = [];
for(let i=0; i<arrStr.length;i++){
    let parola = arrStr[i];
    let fisrtLetter = parola.charAt(0).toUpperCase();//continere solo lettera maiuscola 
    let parolaSenzaLaPrimaLettera = parola.slice(1);//contiene tutte le parole tranne la prima
    let parolaFinale = fisrtLetter + parolaSenzaLaPrimaLettera;
    stringaCompleta.push(parolaFinale);
}
    return stringaCompleta.join(" ");
}let risultato = upperFirst("Ciao belli e tutto ok")
console.log(risultato)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(inputString) {
    
    return inputString.slice(1, -1);
}

const originalString =cutString("ciao");
console.log(originalString);


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro 
 un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.random() * 10);
    }
    return randomNumbers;
}
let random = giveMeRandom(5)
console.log(random);
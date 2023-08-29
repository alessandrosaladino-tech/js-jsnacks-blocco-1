/*
SNACK 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

const userNumber1 = prompt("Inserisci il primo numero")
const userNumber2 = prompt ("inserisci il secondo numero")


if (userNumber1 > userNumber2) {
    console.log(userNumber1 , "Il primo numero è maggiore!");
} else if (userNumber2 > userNumber1) {
    console.log(userNumber2), "Il secondo numero è maggiore!";
} else {
    console.log("I due numeri sono uguali. Riprova!");
}


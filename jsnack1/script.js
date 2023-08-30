/*
SNACK 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/*const userNumber1 = prompt("Inserisci il primo numero")
const userNumber2 = prompt ("inserisci il secondo numero")


if (userNumber1 > userNumber2) {
    console.log(userNumber1 , "Il primo numero è maggiore!");
} else if (userNumber2 > userNumber1) {
    console.log(userNumber2), "Il secondo numero è maggiore!";
} else {
    console.log("I due numeri sono uguali. Riprova!");
}

*/




/* Ciclo while*/

//const userNumber1 = Number(prompt("Inserisci un numero"));
//const userNumber2 = Number(prompt("Inserisci un numero"));

const  list = []

let i = 0

while (i < 2) {
   
    const userNumber = Number(prompt("inserisci il numero"))
    list.push(userNumber)


    i++
    

    
}

if (list[0] > list[1]) {
    console.log(list[0], "Il primo numero è maggiore!");
} else if (list[1] > list[0]) {
    console.log(list[1]), "Il secondo numero è maggiore!";
} else {
    console.log("I due numeri sono uguali. Riprova!");
    
}

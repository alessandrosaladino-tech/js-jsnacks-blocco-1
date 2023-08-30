/*
SNACK 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

/*
let sommaNumeri = 0;

for (let i = 0; i < 10; i++) {
    const userNumber = Number(prompt("Inserisci un numero"));

    sommaNumeri += userNumber;
    
}

console.log("Il risultato è :",  sommaNumeri); 

*/




//Ciclo while
let sum = 0
let x = 0
while (x < 10) {
    const usernumber = Number(prompt("Inserisci un numero"))
    console.log(usernumber);

    if (isNaN(usernumber)) {
        sum += usernumber

        x++
    } 
}

console.log(sum)
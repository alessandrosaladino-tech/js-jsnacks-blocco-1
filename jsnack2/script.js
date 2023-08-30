/*
SNACK 2
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/


/*const firstWord = prompt("Inserisci la prima parola")
const secondWord =prompt("Inserisci la seconda parola")


if (firstWord.length > secondWord.length) {
    console.log(secondWord);
    console.log(firstWord);
} else if (secondWord.length > firstWord.length){
    console.log(firstWord);
    console.log(secondWord);
} else {
    console.log(`La prima parola ${firstWord} e la seconda parola ${secondWord} sono ugualmente lunghe`);
}
*/




// Ciclo while

let i = 0

const list = []

while (i < 2) {
    const userWord = prompt("Inserisci una parola")
    list.push(userWord)
    i++
}

if (list[0].length > list[1].length) {
    console.log(list[1]);
    console.log(list[0]);
} else if (list[1].length > list[0].length){
    console.log(list[0]);
    console.log(list[1]);
} else {
    console.log(`La prima parola ${list[0]} e la seconda parola ${list[1]} sono ugualmente lunghe`);
}
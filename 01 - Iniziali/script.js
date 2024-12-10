/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
const functfirstletter = (words) => {
    let firstletters = []
    for(let i=0; i<words.length; i++){  
      firstletters.push(words[i][0])
          } return firstletters
} 




// Invoca la funzione qui e stampa il risultato in console

console.log(functfirstletter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
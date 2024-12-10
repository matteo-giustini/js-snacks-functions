/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const numberOfWowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelsCount = 0
    for(i = 0; i < word.length; i++){
    const currentLetter = word[i]
    if (vowels.includes(currentLetter)){
        vowelsCount++
    }
}return vowelsCount



}


// Invoca la funzione qui e stampa il risultato in console

console.log(numberOfWowels(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
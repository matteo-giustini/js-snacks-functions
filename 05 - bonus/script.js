/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const hello = (name) => {
    const now = new Date()
    const currentHour = now.getHours()
    let message = ""
    if (currentHour <= 13 && currentHour > 2){
        message = 'buongiorno'}
    else if (currentHour <= 17 && currentHour > 13 ){
        message = 'buonpomeriggio'}
    else if (currentHour <= 20 && currentHour > 17){
        message = 'buonasera'}
    else{
        message = 'buonanotte'
     } return message = `${message} ${name}`
}


// Invoca la funzione qui e stampa il risultato in console
console.log(hello(name))


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
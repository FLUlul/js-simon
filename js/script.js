/* 
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

/* 
creo la funzione che mi crei i numeri random
richiamo la funzione e stampo i numeri in html
creo un timer di 30 secondi 
    mi chiede 5 volte un numero
    inserisco questi 5 numeri in un'array
    con un ciclo scorro l'array di numeri inseriti dall'utente
        se sono inclusi nell'array di numeri random
            stampo i numeri inclusi
        altrimenti
            stampo: non hai azzecchato neanche un numero :(
*/



const numbersDiv = document.querySelector(".numbers");
const numbersRight = document.querySelector(".right-numbers");

/* here i generate the random numbers from 1 to 100 and assign a variable to it */
let randomNumbers = createRandomNumbers(100);

/* here i print in html the random numbers */
numbersDiv.innerHTML += randomNumbers;

/* here i set a timer of 30secs(30.000 ms)*/
setTimeout(() => {
    /* clear the html so i can't see the number anymore */
    numbersDiv.innerHTML = "";
    /* ask the user to insert 5 numbers that he saw */
    let numb1 = parseInt(prompt("insert a number you saw"))
    let numb2 = parseInt(prompt("insert a number you saw"))
    let numb3 = parseInt(prompt("insert a number you saw"))
    let numb4 = parseInt(prompt("insert a number you saw"))
    let numb5 = parseInt(prompt("insert a number you saw"))
    /* here i create a new empty array and push the user's numbers into it */
    let userNumbers = [];
    userNumbers.push(numb1, numb2, numb3, numb4, numb5);

    /* here i make a cicle for each element of the user number array, if the random numbers includes the user numbers then i print those numbers */
    userNumbers.forEach((element) => {
        if(randomNumbers.includes(element)){
            numbersRight.innerHTML += element + ", ";
        }else{
            numbersRight.innerHTML = "You aint got a single number :("
        }
    });

}, 30000);

/* function to get a random number not doubles */
function createRandomNumbers(max) {
    let arrNum = [];
    while (arrNum.length < 5) {
        let randNum = Math.floor(Math.random() * max + 1);
        if (arrNum.includes(randNum) !== true) { 
            arrNum.push(randNum);
        }
    }
    return arrNum;
}
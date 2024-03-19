const sceltaUtente = prompt("scrivi pari o dispari")
console.log(sceltaUtente)

const numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5 "))
console.log(numeroUtente)

const numeroPc = getRandomIntInclusive(1, 5)
console.log(numeroPc)

const somma = numeroUtente + numeroPc
console.log(somma, somma % 2)




function getRandomIntInclusive(min, max) {
 const minCeiled = Math.ceil(min)
 const maxFloored = Math.floor(max)
 return Math.floor(Math.random () * (maxFloored - minCeiled + 1) + minCeiled)

}

function isEven(num){
    return num % 2 === 0
}
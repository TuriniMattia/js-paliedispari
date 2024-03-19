const parola = prompt("inserisci una parola")
console.log(parola)
const condizione = isPalindrome(parola)


if(condizione){

    console.log(`la parola ${parola} è palindroma`)
}

else{
    console.log(`la parola ${parola} non è palindroma`)
} 

    


function isPalindrome(text){

    let invertedText = ""

    for( let i = 0 ; i < text.length; i++){
        const char = text.at(-1 -i)
        invertedText += char
        console.log(char, invertedText)
    }


    if (text === invertedText){
        return true
    } else{
        return false
    }
}
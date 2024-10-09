// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

//IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;


function countLetterA(inputString) {
    
const lowerCaseString = inputString.toLowerCase();
    const letterToCheck = 'a';
    let count = 0;

    
    for (let char of lowerCaseString) {
        if (char === letterToCheck) {
            count++;
        }
    }

    
    if (count > 0) {
        return `A letra 'a' aparece ${count} vez(es) na string.`;
    } else {
        return "A letra 'a' não foi encontrada na string.";
    }
}


const inputString = "A programação é uma arte.";// Você pode mudar essa string para testar
const result = countLetterA(inputString);
console.log(result);

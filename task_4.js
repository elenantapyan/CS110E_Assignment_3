

function reverseNumber(n){
    let number = ''
   let i = n;
    while(i >= 1) {
        number += n%10
        i = Math.floor(n/10)
        n = i
    }

    return Number(number)
}


let testNumber = 25852
function isPalindrome(number){
    let reverse = reverseNumber(number)
    if (number === reverse){
        return true
    } 
    return false
}

let answer = isPalindrome(testNumber)
console.log(`${testNumber} is palindrome? ${answer}`)
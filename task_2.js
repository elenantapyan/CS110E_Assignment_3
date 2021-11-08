

function isPrime(number){
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false
        }
    }
    return true
}

function allPrimes(number1, number2){
    let primeNumbers  = []
    let start = number1
    let end = number2
    if (number1 > number2) {
        start = number2
        end = number1
    } else if(number1 === number2){
        return primeNumbers
    }

    for (let i = start; i<=end; i++) {
        if (isPrime(i)) 
        primeNumbers.push(i)
    }
   return primeNumbers
}

let primeNumbers = allPrimes(50, 50)

console.log("array =", primeNumbers)
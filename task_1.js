

function isPrime(number){
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            return false
        }
    }
    return true
}

let answer = isPrime(`23`)
console.log(answer)


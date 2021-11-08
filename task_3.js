

let number = 3698
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

let n = reverseNumber(number)
console.log(n)
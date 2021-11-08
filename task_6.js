function inverseBinaryNumber(a) {
    let inverseNumber = []
    if (a.length) {
     for (let i = 0; i < a.length; i++) {
        if (a[i] === '1') {
          inverseNumber.push('0')
        } else {
         inverseNumber.push('1')
        }
      }
    }
    return inverseNumber.join("")
  }
  
  let answer = inverseBinaryNumber("100110")
  console.log("inverse = ", answer)
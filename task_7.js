

function sumBinaryNumbers(a, b) {
    let aBinaryArray = a.split("")
    let bBinaryArray = b.split("")
    
    let maxLengthBinaryArray = aBinaryArray
    let minLengthBinaryArray = bBinaryArray
    if (bBinaryArray.length > aBinaryArray.length) {
      maxLengthBinaryArray = bBinaryArray
      minLengthBinaryArray = aBinaryArray
    } 
    
    let iterationCount = maxLengthBinaryArray.length - minLengthBinaryArray.length
    
    
    for (let i = 0; i < iterationCount; i++) {
      if (bBinaryArray.length > aBinaryArray.length) {
        aBinaryArray.unshift("0")
      } else {
         bBinaryArray.unshift("0")
      }
    }
    
    let carryBit = ''
    let sumArray = []
    
    for (let i = aBinaryArray.length - 1; i >= 0; i--) {
      if ( (aBinaryArray[i] === '0' &&  bBinaryArray[i] === '1') || (aBinaryArray[i] === '1' &&  bBinaryArray[i] === '0') ) {
        if (carryBit) {
          sumArray.unshift('0')
          carryBit = '1'
        } else {
          sumArray.unshift('1')
        }            
      } else {
        if (carryBit) {        
            if(aBinaryArray[i] === '0' &&  bBinaryArray[i] === '0') {
               sumArray.unshift('1')
                carryBit = ''
          } else {
            sumArray.unshift('1')
            carryBit = '1'
          }       
        } else {        
          if(aBinaryArray[i] === '0' &&  bBinaryArray[i] === '0') {
            sumArray.unshift('0')
             carryBit = ''
          } else {          
            sumArray.unshift('0')
            carryBit = '1'
          }        
        }     
      }
      
      if (i === 0 ) {
        if (carryBit) {
          sumArray.unshift('1')
        }
      }
      
    }
    return sumArray.join("")
  }
  



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
  
 


  function twosComplementNegativeNumber(n){
      let inverse = inverseBinaryNumber(n)
      let sum = sumBinaryNumbers(inverse, "1")

      return sum
  }

  let answer = twosComplementNegativeNumber("110")
  console.log("inverse = ", answer)
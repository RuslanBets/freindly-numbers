function getOwnDivisors(num) {
  let arr = []
  for (let i = 1; i < num; i++) {
      if (num % i == 0) {
          arr.push(i)
      }
  }
  return arr 
}
function getSum(arr) {
  let sumNum = 0;
  for (let elem of arr) {
      sumNum += elem
  }
  return sumNum
}
function isFreindly(num1, num2) {
  let result1 = getSum(getOwnDivisors(num1))
  let result2 = getSum(getOwnDivisors(num2))

  return result1 === num2 && result2 === num1
} 
 
function getFreindly(num) {
  let resultArrey = []
     for (let i = 1; i < num; i++) {
      for (let y = 1; y < num; y++) {
          if (isFreindly(i, y)) {
              let arr = [i, y]
              resultArrey.push(arr)
          }
      
      }
      
  }
  return resultArrey
}